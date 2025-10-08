import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { payKeeperService, PayKeeperWebhookData } from '../services/paykeeper.service'
import { emailService } from '../services/email.service'
import QRCode from 'qrcode'

const prisma = new PrismaClient()

export const paymentController = {
  /**
   * Создает платеж для билета на мероприятие
   */
  async createEventTicketPayment(req: Request, res: Response) {
    try {
      const { ticketId, amount, customerInfo, eventTitle } = req.body

      // Валидация
      if (!ticketId || !amount || !customerInfo || !eventTitle) {
        return res.status(400).json({
          success: false,
          error: 'Не все обязательные поля заполнены'
        })
      }

      // Проверяем, что билет существует и доступен
      const ticket = await prisma.eventTicket.findUnique({
        where: { id: parseInt(ticketId) },
        include: {
          event: true,
          zone: true,
          table: true
        }
      })

      if (!ticket) {
        return res.status(404).json({
          success: false,
          error: 'Билет не найден'
        })
      }

      if (ticket.status !== 'available') {
        return res.status(400).json({
          success: false,
          error: 'Билет недоступен для покупки'
        })
      }

      // Создаем платеж в PayKeeper
      const paymentResponse = await payKeeperService.createEventTicketPayment(
        ticketId,
        amount,
        customerInfo,
        eventTitle
      )

      // Обновляем билет с информацией о платеже
      await prisma.eventTicket.update({
        where: { id: parseInt(ticketId) },
        data: {
          paymentId: paymentResponse.id,
          paymentStatus: 'pending',
          customerName: customerInfo.name,
          customerEmail: customerInfo.email,
          customerPhone: customerInfo.phone
        }
      })

      res.json({
        success: true,
        data: {
          paymentId: paymentResponse.id,
          paymentUrl: paymentResponse.payment_url,
          ticketId: ticketId
        },
        message: 'Платеж создан успешно'
      })
    } catch (error) {
      console.error('Ошибка при создании платежа:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при создании платежа'
      })
    }
  },

  /**
   * Webhook для обработки уведомлений от PayKeeper
   */
  async handleWebhook(req: Request, res: Response) {
    try {
      console.log('🔔 Получен webhook от PayKeeper:', req.body)
      const webhookData: PayKeeperWebhookData = req.body

      // Проверяем подпись
      if (!payKeeperService.verifyWebhookSignature(webhookData)) {
        console.error('❌ Invalid webhook signature')
        return res.status(400).json({ error: 'Invalid signature' })
      }

      // Извлекаем ticketId из orderid
      const ticketId = webhookData.orderid.replace('EVENT_TICKET_', '')
      
      // Находим билет
      const ticket = await prisma.eventTicket.findUnique({
        where: { id: parseInt(ticketId) },
        include: {
          event: true,
          zone: true,
          table: true
        }
      })

      if (!ticket) {
        console.error(`Ticket not found: ${ticketId}`)
        return res.status(404).json({ error: 'Ticket not found' })
      }

      // Обновляем статус билета в зависимости от статуса платежа
      if (webhookData.status === 'paid') {
        await prisma.eventTicket.update({
          where: { id: parseInt(ticketId) },
          data: {
            status: 'sold',
            paymentStatus: 'paid',
            purchasedAt: new Date(webhookData.pay_date)
          }
        })

        console.log(`Ticket ${ticketId} payment confirmed`)

        // Отправляем билет на email после успешной оплаты
        try {
          const updatedTicket = await prisma.eventTicket.findUnique({
            where: { id: parseInt(ticketId) },
            include: {
              event: true,
              zone: true,
              table: true
            }
          })

          if (updatedTicket) {
            // Генерируем QR-код
            const qrCodeDataUrl = await QRCode.toDataURL(updatedTicket.ticketNumber, {
              width: 200,
              margin: 1,
              color: { dark: '#000', light: '#fff' }
            })

            // Отправляем email
            await emailService.sendTicketToCustomer({
              ticket: updatedTicket,
              qrCodeDataUrl
            })

            console.log(`Ticket ${ticketId} sent to email: ${updatedTicket.customerEmail}`)
          }
        } catch (emailError) {
          console.error(`Failed to send ticket ${ticketId} to email:`, emailError)
          // Не прерываем выполнение, так как платеж уже подтвержден
        }
      } else if (webhookData.status === 'failed') {
        await prisma.eventTicket.update({
          where: { id: parseInt(ticketId) },
          data: {
            status: 'available',
            paymentStatus: 'failed',
            paymentId: null,
            customerName: '',
            customerEmail: '',
            customerPhone: ''
          }
        })

        console.log(`Ticket ${ticketId} payment failed`)
      }

      res.json({ success: true })
    } catch (error) {
      console.error('Ошибка при обработке webhook:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  /**
   * Проверяет статус платежа
   */
  async checkPaymentStatus(req: Request, res: Response) {
    try {
      const { paymentId } = req.params

      const paymentStatus = await payKeeperService.checkPaymentStatus(paymentId)

      res.json({
        success: true,
        data: paymentStatus
      })
    } catch (error) {
      console.error('Ошибка при проверке статуса платежа:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при проверке статуса платежа'
      })
    }
  },

  /**
   * Получает информацию о платеже по ID билета
   */
  async getPaymentByTicketId(req: Request, res: Response) {
    try {
      const { ticketId } = req.params

      const ticket = await prisma.eventTicket.findUnique({
        where: { id: parseInt(ticketId) },
        include: {
          event: true,
          zone: true,
          table: true
        }
      })

      if (!ticket) {
        return res.status(404).json({
          success: false,
          error: 'Билет не найден'
        })
      }

      res.json({
        success: true,
        data: {
          ticketId: ticket.id,
          paymentId: ticket.paymentId,
          paymentStatus: ticket.paymentStatus,
          status: ticket.status,
          price: ticket.price,
          customerName: ticket.customerName,
          customerEmail: ticket.customerEmail,
          customerPhone: ticket.customerPhone,
          purchasedAt: ticket.purchasedAt,
          event: ticket.event,
          zone: ticket.zone,
          table: ticket.table
        }
      })
    } catch (error) {
      console.error('Ошибка при получении информации о платеже:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении информации о платеже'
      })
    }
  }
}
