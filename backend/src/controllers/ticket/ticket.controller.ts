import { Request, Response } from 'express'
import { PrismaClient, PaymentStatus } from '@prisma/client'
import QRCode from 'qrcode'
import {
  CreatePendingTicketRequest,
  UpdatePaymentIdRequest,
  ConfirmPaymentRequest,
  MarkTicketUsedRequest,
  TicketsStatistics
} from './ticket.types'

const prisma = new PrismaClient()

class TicketController {
    /**
     * Генерация номера билета
     */
    static generateTicketNumber(): string {
        const randomNumbers = Math.floor(Math.random() * 10000000)
            .toString()
            .padStart(7, '0')
        return `Француз-${randomNumbers}`
    }

    /**
     * Генерация QR-кода
     */
    static async generateQRCode(ticketNumber: string): Promise<string | null> {
        try {
            const ticketId = ticketNumber.replace('Француз-', '')
            const telegramUrl = `https://t.me/${process.env.BOT_USERNAME}?start=${ticketId}`

            console.log('Генерация QR с ссылкой:', telegramUrl)
            return await QRCode.toDataURL(telegramUrl, {
                width: 200,
                margin: 1,
                color: { dark: '#000', light: '#fff' }
            })
        } catch (err) {
            console.error('Ошибка генерации QR-кода:', err)
            return null
        }
    }

    /**
     * Создает временный билет (до оплаты)
     */
    static async createPendingTicket(req: Request, res: Response): Promise<Response> {
        try {
            const { ticketId, userData }: CreatePendingTicketRequest = req.body

            if (!ticketId) {
                return res.status(400).json({ error: 'Необходим ticketId' })
            }

            // Проверяем существование типа билета
            const ticketTypeExists = await prisma.ticket.findUnique({
                where: { id: ticketId }
            })

            if (!ticketTypeExists) {
                return res.status(404).json({ error: 'Тип билета не найден' })
            }

            // Валидация обязательных полей
            if (!userData?.first_name || !userData?.phone) {
                return res.status(400).json({ 
                    error: 'Имя и телефон обязательны для создания билета' 
                })
            }

            // Генерируем номер билета и QR-код
            const ticketNumber = TicketController.generateTicketNumber()
            const qrCode = await TicketController.generateQRCode(ticketNumber)

            const ticketData: any = {
                ticket_id: ticketId,
                ticket_number: ticketNumber,
                qr_code: qrCode,
                payment_status: PaymentStatus.pending,
                expires_at: new Date(Date.now() + 10 * 60 * 1000),
                first_name: userData.first_name,
                last_name: userData.last_name || null,
                email: userData.email || null,
                phone: userData.phone
            }

            // Добавляем user_id только если он передан и валиден
            if (userData.user_id && typeof userData.user_id === 'number') {
                // Проверяем существование пользователя
                const userExists = await prisma.user.findUnique({
                    where: { id: userData.user_id }
                })
                if (userExists) {
                    ticketData.user_id = userData.user_id
                }
            }

            // Создаем UserTicket
            const userTicket = await prisma.userTicket.create({
                data: ticketData,
                include: {
                    ticket: true,
                    user: true
                }
            })

            // Установка таймера для автоматического удаления
            setTimeout(async () => {
                try {
                    const freshTicket = await prisma.userTicket.findUnique({
                        where: { id: userTicket.id }
                    })
                    
                    if (freshTicket && freshTicket.payment_status === PaymentStatus.pending) {
                        await prisma.userTicket.delete({
                            where: { id: freshTicket.id }
                        })
                        console.log(`Билет ${userTicket.id} автоматически удален`)
                    }
                } catch (error) {
                    console.error('Ошибка при автоматическом удалении билета:', error)
                }
            }, 10 * 60 * 1000)

            return res.status(201).json(userTicket)
        } catch (error) {
            console.error('Ошибка при создании временного билета:', error)
            return res.status(500).json({ error: 'Не удалось создать временный билет' })
        }
    }

    /**
     * Обновляет payment_id билета
     */
    static async updatePaymentId(req: Request, res: Response): Promise<Response> {
        try {
            const { ticketId, paymentId }: UpdatePaymentIdRequest = req.body

            if (!ticketId || !paymentId) {
                return res.status(400).json({ error: 'Необходимы ticketId и paymentId' })
            }

            const ticket = await prisma.userTicket.findUnique({
                where: { id: ticketId }
            })

            if (!ticket) {
                return res.status(404).json({ error: 'Билет не найден' })
            }

            const updatedTicket = await prisma.userTicket.update({
                where: { id: ticketId },
                data: { payment_id: paymentId },
                include: {
                    ticket: true,
                    user: true
                }
            })

            return res.json(updatedTicket)
        } catch (error) {
            console.error('Ошибка при обновлении payment_id:', error)
            return res.status(500).json({ error: 'Ошибка при обновлении payment_id' })
        }
    }

    /**
     * Подтверждает оплату билета
     */
    static async confirmPayment(req: Request, res: Response): Promise<Response> {
        try {
            const { paymentId }: ConfirmPaymentRequest = req.body

            if (!paymentId) {
                return res.status(400).json({ error: 'Необходим paymentId' })
            }

            const ticket = await prisma.userTicket.findFirst({
                where: { payment_id: paymentId }
            })

            if (!ticket) {
                return res.status(404).json({ error: 'Билет не найден' })
            }

            const updatedTicket = await prisma.userTicket.update({
                where: { id: ticket.id },
                data: {
                    payment_status: PaymentStatus.paid,
                    expires_at: null,
                    purchase_date: new Date()
                },
                include: {
                    ticket: true,
                    user: true
                }
            })

            return res.json(updatedTicket)
        } catch (error) {
            console.error('Ошибка при подтверждении оплаты:', error)
            return res.status(500).json({ error: 'Ошибка при подтверждении оплаты' })
        }
    }

    /**
     * Получает билет по номеру
     */
    static async getTicketByNumber(req: Request, res: Response): Promise<Response> {
        try {
            const { ticketNumber } = req.params

            const ticket = await prisma.userTicket.findUnique({
                where: { ticket_number: ticketNumber },
                include: {
                    user: true,
                    ticket: true
                }
            })

            if (!ticket) {
                return res.status(404).json({ error: 'Билет не найден' })
            }

            return res.json(ticket)
        } catch (error) {
            console.error('Ошибка при получении билета:', error)
            return res.status(500).json({ error: 'Не удалось получить билет' })
        }
    }

    /**
     * Отмечает билет как использованный
     */
    static async markTicketAsUsed(req: Request, res: Response): Promise<Response> {
        try {
            const { ticketNumber }: MarkTicketUsedRequest = req.body

            if (!ticketNumber) {
                return res.status(400).json({ error: 'Необходим ticketNumber' })
            }

            const ticket = await prisma.userTicket.findUnique({
                where: { ticket_number: ticketNumber }
            })

            if (!ticket) {
                return res.status(404).json({ error: 'Билет не найден' })
            }

            if (ticket.is_used) {
                return res.status(400).json({ error: 'Билет уже использован' })
            }

            if (ticket.payment_status !== PaymentStatus.paid) {
                return res.status(400).json({ error: 'Билет не оплачен' })
            }

            const updatedTicket = await prisma.userTicket.update({
                where: { id: ticket.id },
                data: {
                    is_used: true,
                    used_at: new Date()
                },
                include: {
                    ticket: true,
                    user: true
                }
            })

            return res.json(updatedTicket)
        } catch (error) {
            console.error('Ошибка при отметке билета как использованного:', error)
            return res.status(500).json({ error: 'Ошибка при отметке билета' })
        }
    }

    /**
     * Получает статистику по билетам
     */
    static async getTicketsStatistics(req: Request, res: Response): Promise<Response> {
        try {
            const [
                totalTickets,
                usedTickets,
                activeTickets,
                pendingTickets,
                canceledTickets
            ] = await Promise.all([
                prisma.userTicket.count(),
                prisma.userTicket.count({
                    where: {
                        is_used: true,
                        payment_status: PaymentStatus.paid
                    }
                }),
                prisma.userTicket.count({
                    where: {
                        is_used: false,
                        payment_status: PaymentStatus.paid
                    }
                }),
                prisma.userTicket.count({
                    where: {
                        payment_status: PaymentStatus.pending
                    }
                }),
                prisma.userTicket.count({
                    where: {
                        payment_status: PaymentStatus.canceled
                    }
                })
            ])

            const statistics: TicketsStatistics = {
                total: totalTickets,
                used: usedTickets,
                active: activeTickets,
                pending: pendingTickets,
                canceled: canceledTickets,
                usedPercentage: totalTickets > 0 ? Math.round((usedTickets / totalTickets) * 100) : 0
            }

            return res.json(statistics)
        } catch (error) {
            console.error('Ошибка при получении статистики билетов:', error)
            return res.status(500).json({ error: 'Не удалось получить статистику' })
        }
    }

    /**
     * Получает все билеты пользователя
     */
    static async getUserTickets(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, email, phone } = req.query;

            let whereCondition: any = {};

            if (userId) {
                const userIdNumber = parseInt(userId as string, 10);
                if (isNaN(userIdNumber)) {
                    return res.status(400).json({ error: 'Неверный формат ID пользователя' });
                }
                whereCondition.user_id = userIdNumber;
            } else if (email) {
                const emailString = email as string;
                if (!emailString) {
                    return res.status(400).json({ error: 'Неверный формат email' });
                }
                whereCondition.email = emailString;
            } else if (phone) {
                const phoneString = phone as string;
                if (!phoneString) {
                    return res.status(400).json({ error: 'Неверный формат телефона' });
                }
                whereCondition.phone = phoneString;
            } else {
                return res.status(400).json({ 
                    error: 'Необходимо указать userId, email или phone для поиска билетов' 
                });
            }

            const tickets = await prisma.userTicket.findMany({
                where: whereCondition,
                include: {
                    ticket: true
                },
                orderBy: {
                    created_at: 'desc'
                }
            });

            return res.json(tickets);

        } catch (error) {
            console.error('Ошибка при получении билетов пользователя:', error);
            return res.status(500).json({ error: 'Не удалось получить билеты' });
        }
    }

    /**
     * Удаляет билет
     */
    static async deleteTicket(req: Request, res: Response): Promise<Response> {
        try {
            const { ticketId } = req.params

            // Преобразуем строку в число
            const id = parseInt(ticketId, 10)
            
            // Проверяем, что преобразование прошло успешно
            if (isNaN(id)) {
                return res.status(400).json({ error: 'Неверный формат ID билета' })
            }

            const ticket = await prisma.userTicket.findUnique({
                where: { id }
            })

            if (!ticket) {
                return res.status(404).json({ error: 'Билет не найден' })
            }

            await prisma.userTicket.delete({
                where: { id }
            })

            return res.json({ message: 'Билет успешно удален' })
        } catch (error) {
            console.error('Ошибка при удалении билета:', error)
            return res.status(500).json({ error: 'Не удалось удалить билет' })
        }
    }
}

export default TicketController