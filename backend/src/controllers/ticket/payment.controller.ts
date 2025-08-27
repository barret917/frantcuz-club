import axios from 'axios';
import dotenv from 'dotenv';
import { URLSearchParams } from 'url';
import { PrismaClient, PaymentStatus, OrderStatus } from '@prisma/client';
import { sendTicketsToCustomer, notifyAdminAboutOrder } from './email.controller';
import {
  CreateInvoiceResponse,
  PaymentStatusResponse,
  UserTicket
} from './ticket.types';

dotenv.config();

class PaymentService {
    private PAYKEEPER_USER: string;
    private PAYKEEPER_PASSWORD: string;
    private PAYKEEPER_SERVER: string;
    private headers: any;
    private prisma: PrismaClient;

    constructor() {
        // Берем настройки напрямую из process.env или используем значения по умолчанию
        this.PAYKEEPER_USER = 'admin';
        this.PAYKEEPER_PASSWORD = '1234567Asd!';
        this.PAYKEEPER_SERVER = 'https://dali-khinkali.server.paykeeper.ru';
        this.prisma = new PrismaClient();

        this.validateConfig();
        this.initHeaders();
    }

    private validateConfig() {
        if (!this.PAYKEEPER_USER || !this.PAYKEEPER_PASSWORD || !this.PAYKEEPER_SERVER) {
            throw new Error('PayKeeper configuration is missing in .env file');
        }
    }

    private initHeaders() {
        const authString = `${this.PAYKEEPER_USER}:${this.PAYKEEPER_PASSWORD}`;
        this.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(authString).toString('base64')}`
        };
    }

    async initialize() {
        console.log('Connecting to PayKeeper...');
        try {
            // Пробуем несколько эндпоинтов, так как разные версии PayKeeper могут иметь разные доступные эндпоинты
            const endpoints = [
                '/info/settings/token/',
                '/info/settings/',
                '/info/'
            ];
            
            let connected = false;
            
            for (const endpoint of endpoints) {
                try {
                    const response = await axios.get(`${this.PAYKEEPER_SERVER}${endpoint}`, {
                        headers: this.headers,
                        timeout: 5000
                    });
                    
                    if (response.status === 200) {
                        console.log(`Successfully connected to PayKeeper via ${endpoint}`);
                        connected = true;
                        break;
                    }
                } catch (error) {
                    // Пропускаем ошибки 404 для отдельных эндпоинтов
                    if (axios.isAxiosError(error) && error.response?.status === 404) {
                        console.log(`Endpoint ${endpoint} not available, trying next...`);
                        continue;
                    }
                }
            }
            
            // Если ни один эндпоинт не ответил успешно, пробуем создать тестовый счет
            if (!connected) {
                console.log('Trying test connection via invoice creation...');
                try {
                    const tokenResponse = await axios.post(
                        `${this.PAYKEEPER_SERVER}/info/settings/token/`,
                        {},
                        { headers: this.headers, timeout: 5000 }
                    );
                    
                    if (tokenResponse.data?.token) {
                        console.log('Successfully connected to PayKeeper via token endpoint');
                        connected = true;
                    }
                } catch (tokenError) {
                    console.log('Token endpoint also unavailable, but proceeding anyway...');
                    // Даже если токен недоступен, продолжаем работу
                    connected = true;
                }
            }
            
            return connected;
            
        } catch (error: any) {
            console.error('PayKeeper connection error:', error.message);
            // Не блокируем работу приложения даже если подключение не удалось
            console.log('Proceeding in limited mode - invoice creation may still work');
            return true;
        }
    }

    /**
     * Создает счет в PayKeeper
     */
    async createInvoice(ticketData: any): Promise<CreateInvoiceResponse> {
        try {
            // 1. Получаем токен
            const tokenResponse = await axios.post(
                `${this.PAYKEEPER_SERVER}/info/settings/token/`,
                {},
                { headers: this.headers, timeout: 10000 }
            );

            const token = tokenResponse.data?.token;
            if (!token) throw new Error('Failed to get token from PayKeeper');

            // 2. Формируем данные для счета
            const customerName = `${ticketData.customer.first_name} ${ticketData.customer.last_name}`.trim();
            const paymentParams = new URLSearchParams();

            paymentParams.append('pay_amount', ticketData.price.toString());
            paymentParams.append('clientid', customerName.substring(0, 100));
            paymentParams.append('orderid', ticketData.id.toString());
            paymentParams.append('service_name', `Билет: ${ticketData.event.title}`.substring(0, 100));
            paymentParams.append('client_email', ticketData.customer.email);
            paymentParams.append('client_phone', ticketData.customer.phone);
            paymentParams.append('token', token);
            paymentParams.append('payment_currency', 'RUB');

            // 3. Создаем счет
            const invoiceResponse = await axios.post(
                `${this.PAYKEEPER_SERVER}/change/invoice/preview/`,
                paymentParams,
                { headers: this.headers, timeout: 15000 }
            );

            const invoiceId = invoiceResponse.data?.invoice_id;
            if (!invoiceId) throw new Error('Failed to get invoice ID');

            return {
                success: true,
                paymentId: invoiceId,
                paymentUrl: `${this.PAYKEEPER_SERVER}/bill/${invoiceId}/`,
                tickets: []
            };

        } catch (error: any) {
            console.error('Invoice creation error:', error);
            return {
                success: false,
                error: error.message,
                paymentUrl: '',
                paymentId: '',
                tickets: []
            };
        }
    }

    /**
     * Получает статус платежа по invoice_id
     */
    async getPaymentStatus(invoiceId: string): Promise<any> {
        try {
            const response = await axios.get(
                `${this.PAYKEEPER_SERVER}/info/invoice/byid/?id=${invoiceId}`,
                { headers: this.headers, timeout: 10000 }
            );

            if (!response.data || !response.data.status) {
                throw new Error('Invalid response from PayKeeper');
            }

            return {
                success: true,
                status: response.data.status,
                amount: response.data.pay_amount,
                orderId: response.data.orderid,
                paymentDate: response.data.paid_at,
                clientEmail: response.data.client_email,
                clientPhone: response.data.client_phone
            };
        } catch (error: any) {
            console.error('Payment status check error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Обрабатывает успешный платеж
     */
    async processSuccessfulPayment(invoiceId: string): Promise<{ success: boolean; userTickets?: UserTicket[]; error?: string }> {
        try {
            console.log('🔄 Processing successful payment for invoice:', invoiceId);
            
            // 1. Находим заказ по payment_id
            const order = await this.prisma.order.findFirst({
                where: { payment_id: invoiceId }
            });

            if (!order) {
                console.error('❌ Order not found for payment:', invoiceId);
                throw new Error('Order not found for this payment');
            }

            console.log('📋 Found order:', order.id);

            // 2. Проверяем, не был ли заказ уже обработан
            if (order.status === 'paid') {
                console.log('ℹ️ Order already processed, skipping...');
                return {
                    success: true,
                    userTickets: []
                };
            }

            // 3. Находим все билеты с таким же payment_id
            const userTickets = await this.prisma.userTicket.findMany({
                where: { payment_id: invoiceId },
                include: {
                    ticket: {
                        select: {
                            id: true,
                            title: true,
                            short_description: true,
                            event_date: true,
                            event_location: true,
                            price: true
                        }
                    }
                }
            });

            console.log('🎫 Found user tickets:', userTickets.length);
            
            if (!userTickets || userTickets.length === 0) {
                console.error('❌ No user tickets found for payment:', invoiceId);
                throw new Error('UserTickets not found for this payment');
            }

            // 4. Обновляем статус всех билетов
            await this.prisma.userTicket.updateMany({
                where: { payment_id: invoiceId },
                data: {
                    payment_status: PaymentStatus.paid,
                    expires_at: null,
                }
            });

            console.log('✅ Updated ticket status to paid');

            // 5. Обновляем статус заказа
            await this.prisma.order.update({
                where: { id: order.id },
                data: {
                    status: 'paid' as OrderStatus
                }
            });

            console.log('✅ Updated order status to paid');

            // 6. Отправляем уведомления только если заказ был только что обработан
            console.log('📧 Sending email to:', order.email);

            const totalAmount = parseFloat(order.total_amount.toString());

            const orderDataForEmail = {
                id: order.id,
                first_name: order.first_name,
                last_name: order.last_name,
                email: order.email,
                phone: order.phone,
                total_amount: totalAmount,
                created_at: order.created_at,
                status: "paid" as const
            };

            // Отправка пользователю
            try {
                const emailResult = await sendTicketsToCustomer(
                    order.email,
                    orderDataForEmail,
                    userTickets as any
                );
                console.log('📧 User email result:', emailResult);
            } catch (emailError) {
                console.error('❌ User email error:', emailError);
            }

            // Отправка администратору
            try {
                const adminResult = await notifyAdminAboutOrder(
                    orderDataForEmail,
                    userTickets as any
                );
                console.log('📧 Admin email result:', adminResult);
            } catch (adminEmailError) {
                console.error('❌ Admin email error:', adminEmailError);
            }

            return {
                success: true,
                userTickets: userTickets as unknown as UserTicket[]
            };

        } catch (error: any) {
            console.error('❌ Payment processing error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Обрабатывает отмену платежа
     */
    async cancelPayment(invoiceId: string): Promise<{ success: boolean; error?: string }> {
        try {
            const userTickets = await this.prisma.userTicket.findMany({
                where: { payment_id: invoiceId }
            });

            if (userTickets && userTickets.length > 0) {
                await this.prisma.userTicket.updateMany({
                    where: { payment_id: invoiceId },
                    data: { payment_status: PaymentStatus.canceled }
                });
            }

            return { success: true };
        } catch (error: any) {
            console.error('Cancel payment error:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Проверяет статус платежа и отправляет уведомление
     */
    async checkPaymentAndNotify(invoiceId: string, notifyCallback: (message: string) => Promise<void>): Promise<boolean> {
        try {
            // 1. Проверяем статус платежа
            const status = await this.getPaymentStatus(invoiceId);
            if (!status.success) {
                await notifyCallback(`Ошибка при проверке платежа: ${status.error}`);
                return false;
            }

            // 2. Обрабатываем статус
            switch (status.status) {
                case 'paid':
                    const processResult = await this.processSuccessfulPayment(invoiceId);
                    if (processResult.success) {
                        const tickets = processResult.userTickets || [];

                        // Базовое сообщение
                        let message = `✅ Платеж успешно завершен!\n` +
                            `💳 Сумма: ${status.amount} RUB\n` +
                            `📅 Дата оплаты: ${new Date().toLocaleString()}\n\n` +
                            `🎫 Полученные билеты (${tickets.length} шт.):\n`;

                        // Добавляем информацию о каждом билете
                        tickets.forEach((ticket: any, index: number) => {
                            message += `\n${index + 1}. Номер билета: ${ticket.ticket_number}\n` +
                                `   Дата создания: ${new Date(ticket.created_at).toLocaleString()}\n` +
                                `   Статус: ${ticket.is_used ? 'Использован' : 'Активен'}\n`;
                        });

                        await notifyCallback(message);
                        return true;
                    } else {
                        await notifyCallback(`Ошибка обработки платежа: ${processResult.error}`);
                        return false;
                    }

                case 'pending':
                    await notifyCallback('⏳ Платеж еще не поступил. Если вы уже оплатили, подождите 5-10 минут.');
                    return false;

                case 'canceled':
                    await this.cancelPayment(invoiceId);
                    await notifyCallback('❌ Платеж был отменен. Вы можете создать новый заказ.');
                    return false;

                default:
                    await notifyCallback(`Неизвестный статус платежа: ${status.status}`);
                    return false;
            }
        } catch (error: any) {
            console.error('Payment check error:', error);
            await notifyCallback('⚠ Произошла ошибка при проверке платежа');
            return false;
        }
    }

    /**
     * Настраивает автоматическую проверку платежа
     */
    async setupPaymentAutoCheck(invoiceId: string, notifyCallback: (message: string) => Promise<void>, intervalMinutes: number = 2): Promise<NodeJS.Timeout> {
        const checkInterval = setInterval(async () => {
            try {
                const result = await this.checkPaymentAndNotify(invoiceId, notifyCallback);

                if (result) {
                    clearInterval(checkInterval);
                }

                // Дополнительная проверка - если билет уже оплачен, прекращаем проверку
                const userTicket = await this.prisma.userTicket.findFirst({
                    where: { payment_id: invoiceId }
                });

                if (userTicket && userTicket.payment_status === PaymentStatus.paid) {
                    clearInterval(checkInterval);
                }
            } catch (error: any) {
                console.error('Auto check error:', error);
            }
        }, intervalMinutes * 60 * 1000);

        return checkInterval;
    }

    /**
     * Проверяет все pending платежи и автоматически обновляет статусы
     */
    async checkAllPendingPayments(notifyCallback?: (message: string) => Promise<void>): Promise<{ 
        success: boolean; 
        checked: number;
        paid: number;
        canceled: number;
        errors: string[];
    }> {
        try {
            // Группируем по payment_id чтобы избежать дублирования
            const pendingPayments = await this.prisma.userTicket.groupBy({
                by: ['payment_id'],
                where: {
                    payment_status: PaymentStatus.pending,
                    payment_id: { not: null }
                },
                _count: {
                    id: true
                }
            });

            let paidCount = 0;
            let canceledCount = 0;
            const errors: string[] = [];
            const processedPayments = new Set<string>(); // Для отслеживания уже обработанных платежей

            console.log(`🔍 Найдено ${pendingPayments.length} pending платежей для проверки`);

            for (const payment of pendingPayments) {
                try {
                    if (!payment.payment_id || processedPayments.has(payment.payment_id)) {
                        continue;
                    }

                    processedPayments.add(payment.payment_id);

                    // Проверяем статус платежа
                    const paymentStatus = await this.getPaymentStatus(payment.payment_id);
                    
                    if (!paymentStatus.success) {
                        errors.push(`Ошибка проверки платежа ${payment.payment_id}: ${paymentStatus.error}`);
                        continue;
                    }

                    // Обрабатываем в зависимости от статуса
                    switch (paymentStatus.status) {
                        case 'paid':
                            // Обрабатываем успешный платеж
                            const processResult = await this.processSuccessfulPayment(payment.payment_id);
                            if (processResult.success) {
                                paidCount++;
                                
                                // Отправляем уведомление если есть callback
                                if (notifyCallback) {
                                    // Получаем информацию о заказе для уведомления
                                    const order = await this.prisma.order.findFirst({
                                        where: { payment_id: payment.payment_id },
                                        select: {
                                            first_name: true,
                                            last_name: true,
                                            email: true
                                        }
                                    });
                                    
                                    const customerName = order 
                                        ? `${order.first_name} ${order.last_name}`
                                        : 'Клиент';
                                        
                                    await notifyCallback(
                                        `✅ Платеж ${payment.payment_id} успешно обработан\n` +
                                        `👤 ${customerName}\n` +
                                        `🎫 Билетов: ${payment._count.id} шт.\n` +
                                        `💳 Сумма: ${paymentStatus.amount} RUB`
                                    );
                                }
                            } else {
                                errors.push(`Ошибка обработки платежа ${payment.payment_id}: ${processResult.error}`);
                            }
                            break;

                        case 'canceled':
                            // Отменяем платеж
                            await this.cancelPayment(payment.payment_id);
                            canceledCount++;
                            break;

                        case 'pending':
                            // Проверяем не истекло ли время (берем первый билет для проверки)
                            const sampleTicket = await this.prisma.userTicket.findFirst({
                                where: { payment_id: payment.payment_id },
                                select: { expires_at: true }
                            });
                            
                            if (sampleTicket && sampleTicket.expires_at && sampleTicket.expires_at < new Date()) {
                                await this.cancelPayment(payment.payment_id);
                                canceledCount++;
                                
                                if (notifyCallback) {
                                    await notifyCallback(
                                        `⌛ Платеж ${payment.payment_id} просрочен и отменен\n` +
                                        `🎫 Билетов: ${payment._count.id} шт.`
                                    );
                                }
                            }
                            break;

                        default:
                            console.log(`ℹ️ Неизвестный статус для платежа ${payment.payment_id}: ${paymentStatus.status}`);
                    }

                    // Небольшая задержка чтобы не перегружать PayKeeper
                    await new Promise(resolve => setTimeout(resolve, 500));

                } catch (paymentError: any) {
                    errors.push(`Ошибка обработки платежа ${payment.payment_id}: ${paymentError.message}`);
                    continue;
                }
            }

            console.log(`✅ Проверка завершена: ${paidCount} оплачено, ${canceledCount} отменено, ${errors.length} ошибок`);

            return {
                success: errors.length === 0,
                checked: pendingPayments.length,
                paid: paidCount,
                canceled: canceledCount,
                errors
            };

        } catch (error: any) {
            console.error('Error checking pending payments:', error);
            return {
                success: false,
                checked: 0,
                paid: 0,
                canceled: 0,
                errors: [error.message]
            };
        }
    }

    /**
     * Отменяет просроченные платежи (для cron job)
     */
    async cancelExpiredPayments(notifyCallback?: (message: string, email?: string) => Promise<void>): Promise<{ success: boolean; canceled?: number; error?: string }> {
        try {
            const expiredTickets = await this.prisma.userTicket.findMany({
                where: {
                    payment_status: PaymentStatus.pending,
                    expires_at: { lt: new Date() },
                    payment_id: { not: null }
                },
                include: {
                    order_item: {
                        include: {
                            order: {
                                select: {
                                    email: true
                                }
                            }
                        }
                    }
                }
            });

            for (const ticket of expiredTickets) {
                if (ticket.payment_id) {
                    await this.cancelPayment(ticket.payment_id);
                    if (notifyCallback) {
                        const customerEmail = ticket.order_item?.order?.email;
                        await notifyCallback(
                            `⌛ Время оплаты билета ${ticket.ticket_number} истекло.\n` +
                            `Заказ был автоматически отменен. Вы можете создать новый заказ.`,
                            customerEmail || undefined
                        );
                    }
                }
            }

            return { success: true, canceled: expiredTickets.length };
        } catch (error: any) {
            console.error('Error canceling expired payments:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Проверяет статус платежа
     */
    async checkPaymentStatus(invoiceId: string): Promise<PaymentStatusResponse> {
        try {
            // Сначала проверяем, не был ли заказ уже обработан
            const existingOrder = await this.prisma.order.findFirst({
                where: { payment_id: invoiceId }
            });

            if (existingOrder && existingOrder.status === 'paid') {
                return {
                    success: true,
                    status: 'paid',
                    message: 'Платеж уже был обработан ранее'
                };
            }

            const status = await this.getPaymentStatus(invoiceId);
            if (!status.success) {
                return {
                    success: false,
                    status: 'unknown',
                    error: status.error
                };
            }

            switch (status.status) {
                case 'paid':
                    const processResult = await this.processSuccessfulPayment(invoiceId);
                    return {
                        success: processResult.success,
                        status: 'paid',
                        userTickets: processResult.userTickets,
                        error: processResult.error
                    };

                case 'pending':
                    return {
                        success: true,
                        status: 'pending',
                        message: 'Платеж еще не поступил'
                    };

                case 'canceled':
                    await this.cancelPayment(invoiceId);
                    return {
                        success: true,
                        status: 'canceled',
                        message: 'Платеж был отменен'
                    };

                default:
                    return {
                        success: false,
                        status: 'unknown',
                        error: `Неизвестный статус платежа: ${status.status}`
                    };
            }
        } catch (error: any) {
            console.error('Payment check error:', error);
            return {
                success: false,
                status: 'unknown',
                error: error.message
            };
        }
    }

    /**
     * Закрывает соединение с Prisma
     */
    async disconnect() {
        await this.prisma.$disconnect();
    }
}

export default new PaymentService();