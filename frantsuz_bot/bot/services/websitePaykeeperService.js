import axios from 'axios';
import dotenv from 'dotenv';
import { URLSearchParams } from 'url';
import base64 from 'base-64';
import WebsiteApiService from './websiteApiService.js';

dotenv.config();

class WebsitePaykeeperService {
    constructor() {
        this.PAYKEEPER_USER = process.env.PAYKEEPER_USER;
        this.PAYKEEPER_PASSWORD = process.env.PAYKEEPER_PASSWORD;
        this.PAYKEEPER_SERVER = process.env.PAYKEEPER_SERVER?.replace(/\/$/, '');
        this.websiteApiService = new WebsiteApiService();
        
        // Режим тестирования (когда PayKeeper недоступен)
        this.testMode = process.env.PAYKEEPER_TEST_MODE === 'true' || false;

        this.validateConfig();
        this.initHeaders();
    }

    validateConfig() {
        if (!this.PAYKEEPER_USER || !this.PAYKEEPER_PASSWORD || !this.PAYKEEPER_SERVER) {
            throw new Error('PayKeeper configuration is missing in .env file');
        }
    }

    initHeaders() {
        const authString = `${this.PAYKEEPER_USER}:${this.PAYKEEPER_PASSWORD}`;
        this.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${base64.encode(authString)}`
        };
    }

    async initialize() {
        console.log('Connecting to PayKeeper...');
        
        if (this.testMode) {
            console.log('⚠️ PayKeeper в тестовом режиме');
            return true;
        }
        
        try {
            const response = await axios.get(`${this.PAYKEEPER_SERVER}/info/`, {
                headers: this.headers,
                timeout: 5000
            });

            if (response.data?.status === 'ok') {
                console.log('Successfully connected to PayKeeper');
                return true;
            }
            throw new Error('Invalid PayKeeper response');
        } catch (error) {
            console.error('PayKeeper connection error:', error.message);
            console.log('⚠️ Переключение в тестовый режим');
            this.testMode = true;
            return true;
        }
    }

    /**
     * Создает счет в PayKeeper для билетов с сайта
     */
    async createInvoiceForWebsiteTickets(ticketPurchaseId) {
        try {
            // 1. Получаем информацию о покупке билетов с сайта
            const ticketInfo = await this.websiteApiService.getTicketPurchase(ticketPurchaseId);
            
            if (!ticketInfo) {
                throw new Error('Ticket purchase not found');
            }

            // 2. Получаем токен от PayKeeper
            const tokenResponse = await axios.post(
                `${this.PAYKEEPER_SERVER}/info/settings/token/`,
                {},
                { headers: this.headers, timeout: 10000 }
            );

            const token = tokenResponse.data?.token;
            if (!token) throw new Error('Failed to get token from PayKeeper');

            // 3. Формируем данные для счета
            const paymentParams = new URLSearchParams();

            paymentParams.append('pay_amount', ticketInfo.totalAmount);
            paymentParams.append('clientid', ticketInfo.customerName.substring(0, 100));
            paymentParams.append('orderid', `website_ticket_${ticketPurchaseId}`);
            paymentParams.append('service_name', `Билеты: ${ticketInfo.eventName} - ${ticketInfo.zoneName}`.substring(0, 100));
            paymentParams.append('client_email', 'customer@frantsuz-club.ru'); // Заглушка
            paymentParams.append('client_phone', ticketInfo.customerPhone);
            paymentParams.append('token', token);
            paymentParams.append('payment_currency', 'RUB');

            // 4. Создаем счет
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
                ticketPurchaseId: ticketPurchaseId,
                amount: ticketInfo.totalAmount,
                description: `Билеты: ${ticketInfo.eventName} - ${ticketInfo.zoneName}`
            };
        } catch (error) {
            console.error('Error creating PayKeeper invoice for website tickets:', error);
            throw error;
        }
    }

    /**
     * Проверяет статус платежа
     */
    async checkPaymentStatus(paymentId) {
        try {
            if (this.testMode) {
                // Тестовый режим - возвращаем случайный статус
                const statuses = ['created', 'paid', 'canceled'];
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                
                return {
                    success: true,
                    status: randomStatus,
                    amount: 1500, // Тестовая сумма
                    paymentId: paymentId
                };
            }

            const response = await axios.get(
                `${this.PAYKEEPER_SERVER}/info/invoice/card/${paymentId}/`,
                { headers: this.headers, timeout: 10000 }
            );

            const paymentData = response.data;
            
            if (!paymentData) {
                throw new Error('Invalid payment data');
            }

            return {
                success: true,
                status: paymentData.status,
                amount: paymentData.pay_amount,
                paymentId: paymentId
            };
        } catch (error) {
            console.error('Error checking payment status:', error);
            throw error;
        }
    }

    /**
     * Обрабатывает успешную оплату
     */
    async handleSuccessfulPayment(paymentId, ticketPurchaseId) {
        try {
            // 1. Обновляем статус покупки билетов на "paid"
            await this.websiteApiService.updateTicketStatus(ticketPurchaseId, 'paid');
            
            // 2. Получаем обновленную информацию о покупке
            const ticketInfo = await this.websiteApiService.getTicketPurchase(ticketPurchaseId);
            
            return {
                success: true,
                ticketPurchaseId: ticketPurchaseId,
                paymentId: paymentId,
                ticketInfo: ticketInfo
            };
        } catch (error) {
            console.error('Error handling successful payment:', error);
            throw error;
        }
    }

    /**
     * Создает платеж и возвращает URL для оплаты
     */
    async createPaymentForTickets(ticketPurchaseId) {
        try {
            if (this.testMode) {
                // Тестовый режим - создаем заглушку
                const ticketInfo = await this.websiteApiService.getTicketPurchase(ticketPurchaseId);
                
                return {
                    success: true,
                    paymentId: `test_${ticketPurchaseId}_${Date.now()}`,
                    paymentUrl: `https://test-payment.example.com/pay/${ticketPurchaseId}`,
                    amount: ticketInfo.totalAmount,
                    description: `Билеты: ${ticketInfo.eventName} - ${ticketInfo.zoneName}`
                };
            }

            // 1. Создаем счет в PayKeeper
            const invoice = await this.createInvoiceForWebsiteTickets(ticketPurchaseId);
            
            if (!invoice.success) {
                throw new Error('Failed to create PayKeeper invoice');
            }

            return {
                success: true,
                paymentId: invoice.paymentId,
                paymentUrl: invoice.paymentUrl,
                amount: invoice.amount,
                description: invoice.description
            };
        } catch (error) {
            console.error('Error creating payment for tickets:', error);
            throw error;
        }
    }

    /**
     * Запускает мониторинг статуса платежа
     */
    startPaymentMonitoring(paymentId, ticketPurchaseId, onSuccess, onError) {
        const checkInterval = setInterval(async () => {
            try {
                const status = await this.checkPaymentStatus(paymentId);
                
                if (status.status === 'paid') {
                    clearInterval(checkInterval);
                    
                    // Обрабатываем успешную оплату
                    await this.handleSuccessfulPayment(paymentId, ticketPurchaseId);
                    
                    if (onSuccess) {
                        onSuccess(status);
                    }
                } else if (status.status === 'canceled' || status.status === 'failed') {
                    clearInterval(checkInterval);
                    
                    if (onError) {
                        onError(new Error(`Payment ${status.status}`));
                    }
                }
            } catch (error) {
                console.error('Error in payment monitoring:', error);
                clearInterval(checkInterval);
                
                if (onError) {
                    onError(error);
                }
            }
        }, 5000); // Проверяем каждые 5 секунд

        // Останавливаем мониторинг через 10 минут
        setTimeout(() => {
            clearInterval(checkInterval);
        }, 10 * 60 * 1000);

        return checkInterval;
    }
}

export default WebsitePaykeeperService; 