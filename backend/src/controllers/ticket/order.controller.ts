import { Request, Response } from 'express'
import { PrismaClient, OrderStatus } from '@prisma/client'
import {
  CreateOrderRequest
} from './ticket.types'

const prisma = new PrismaClient()

class OrderController {
    /**
     * Создает заказ
     */
    static async createOrder(req: Request, res: Response): Promise<Response> {
        try {
            const { userData, tickets, paymentData }: CreateOrderRequest = req.body

            if (!userData || !tickets || !paymentData) {
                return res.status(400).json({ error: 'Необходимы userData, tickets и paymentData' })
            }

            // Создаем заказ
            const order = await prisma.order.create({
                data: {
                    first_name: userData.first_name,
                    last_name: userData.last_name || '',
                    email: userData.email || '',
                    phone: userData.phone || '',
                    status: OrderStatus.pending,
                    total_amount: tickets.reduce((total, ticket) => 
                        total + (parseFloat(ticket.price) * ticket.quantity), 0).toString(),
                    // payment_id: paymentData.id,
                    payment_method: paymentData.method,
                    user_id: userData.user_id || null
                },
                include: {
                    items: {
                        include: {
                            ticket: {
                                include: {
                                    ticket: true,
                                    user: true
                                }
                            }
                        }
                    },
                    tickets: true
                }
            })

            return res.status(201).json(order)
        } catch (error) {
            console.error('Ошибка при создании заказа:', error)
            return res.status(500).json({ error: 'Не удалось создать заказ' })
        }
    }

    static async updateOrderPaymentId(req: Request, res: Response): Promise<Response> {
        try {
            const { orderId, paymentId } = req.body

            if (!orderId || !paymentId) {
                return res.status(400).json({ error: 'Необходимы orderId и paymentId' })
            }

            const order = await prisma.order.update({
                where: { id: orderId },
                data: { payment_id: paymentId },
                include: {
                    items: true,
                    tickets: true
                }
            })

            return res.json(order)
        } catch (error) {
            console.error('Ошибка при обновлении payment_id заказа:', error)
            return res.status(500).json({ error: 'Не удалось обновить payment_id' })
        }
    }

    /**
     * Получает заказ по ID
     */
    static async getOrderById(req: Request, res: Response): Promise<Response> {
        try {
            const { orderId } = req.params

            const order = await prisma.order.findUnique({
                where: { id: parseInt(orderId) },
                include: {
                    items: {
                        include: {
                            ticket: {
                                include: {
                                    ticket: true,
                                    user: true
                                }
                            }
                        }
                    },
                    tickets: {
                        include: {
                            ticket: true,
                            user: true
                        }
                    },
                    user: true
                }
            })

            if (!order) {
                return res.status(404).json({ error: 'Заказ не найден' })
            }

            return res.json(order)
        } catch (error) {
            console.error('Ошибка при получении заказа:', error)
            return res.status(500).json({ error: 'Не удалось получить заказ' })
        }
    }

    /**
     * Получает заказ по payment_id
     */
    static async getOrderByPaymentId(req: Request, res: Response): Promise<Response> {
        try {
            const { paymentId } = req.params

            const order = await prisma.order.findFirst({
                where: { payment_id: paymentId },
                include: {
                    items: {
                        include: {
                            ticket: {
                                include: {
                                    ticket: true,
                                    user: true
                                }
                            }
                        }
                    },
                    tickets: {
                        include: {
                            ticket: true,
                            user: true
                        }
                    },
                    user: true
                }
            })

            if (!order) {
                return res.status(404).json({ error: 'Заказ не найден' })
            }

            return res.json(order)
        } catch (error) {
            console.error('Ошибка при получении заказа:', error)
            return res.status(500).json({ error: 'Не удалось получить заказ' })
        }
    }

    /**
     * Получает заказы по email
     */
    static async getOrdersByEmail(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.params

            const orders = await prisma.order.findMany({
                where: { email },
                include: {
                    items: {
                        include: {
                            ticket: {
                                include: {
                                    ticket: true,
                                    user: true
                                }
                            }
                        }
                    },
                    tickets: {
                        include: {
                            ticket: true,
                            user: true
                        }
                    },
                    user: true
                },
                orderBy: {
                    created_at: 'desc'
                }
            })

            return res.json(orders)
        } catch (error) {
            console.error('Ошибка при получении заказов:', error)
            return res.status(500).json({ error: 'Не удалось получить заказы' })
        }
    }

    /**
     * Получает заказы по телефону
     */
    static async getOrdersByPhone(req: Request, res: Response): Promise<Response> {
        try {
            const { phone } = req.params

            const orders = await prisma.order.findMany({
                where: { phone },
                include: {
                    items: {
                        include: {
                            ticket: {
                                include: {
                                    ticket: true,
                                    user: true
                                }
                            }
                        }
                    },
                    tickets: {
                        include: {
                            ticket: true,
                            user: true
                        }
                    },
                    user: true
                },
                orderBy: {
                    created_at: 'desc'
                }
            })

            return res.json(orders)
        } catch (error) {
            console.error('Ошибка при получении заказов:', error)
            return res.status(500).json({ error: 'Не удалось получить заказы' })
        }
    }
}

export default OrderController