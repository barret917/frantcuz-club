import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import QRCode from 'qrcode'
import { payKeeperService } from '../../services/paykeeper.service'
import { emailService } from '../../services/email.service'

const prisma = new PrismaClient()

export const eventTicketController = {
  // Получить все билеты мероприятия
  async getTicketsByEvent(req: Request, res: Response) {
    try {
      const { eventId } = req.params
      
      const tickets = await prisma.eventTicket.findMany({
        where: { eventId: parseInt(eventId) },
        include: {
          event: true,
          zone: true,
          table: true
        },
        orderBy: { createdAt: 'desc' }
      })
      
      res.json({
        success: true,
        data: tickets
      })
    } catch (error) {
      console.error('Ошибка при получении билетов:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении билетов'
      })
    }
  },

  // Получить билет по номеру
  async getTicketByNumber(req: Request, res: Response) {
    try {
      const { ticketNumber } = req.params
      
      const ticket = await prisma.eventTicket.findUnique({
        where: { ticketNumber },
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
        data: ticket
      })
    } catch (error) {
      console.error('Ошибка при получении билета:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении билета'
      })
    }
  },

  // Создать новый билет
  async createTicket(req: Request, res: Response) {
    try {
      const {
        eventId,
        zoneId,
        tableId,
        customerName,
        customerEmail,
        customerPhone,
        paymentId
      } = req.body
      
      // Валидация обязательных полей
      if (!eventId || !zoneId || !tableId || !customerName || !customerEmail || !customerPhone) {
        return res.status(400).json({
          success: false,
          error: 'Не все обязательные поля заполнены'
        })
      }
      
      // Получаем данные зоны для цены
      const zone = await prisma.eventZone.findUnique({
        where: { id: parseInt(zoneId) }
      })
      
      if (!zone) {
        return res.status(404).json({
          success: false,
          error: 'Зона не найдена'
        })
      }
      
      // Получаем данные стола и проверяем доступные места
      const table = await prisma.eventTable.findUnique({
        where: { id: parseInt(tableId) },
        include: {
          tickets: {
            where: {
              OR: [
                { status: 'sold' },
                { status: 'available', paymentStatus: 'pending' }
              ]
            }
          }
        }
      })
      
      if (!table) {
        return res.status(404).json({
          success: false,
          error: 'Стол не найден'
        })
      }
      
      // Проверяем количество доступных мест
      const soldTicketsCount = table.tickets.length
      const availableSeats = table.seats - soldTicketsCount
      
      if (availableSeats <= 0) {
        return res.status(400).json({
          success: false,
          error: `Все места за этим столом заняты (${table.seats} из ${table.seats})`
        })
      }
      
      console.log(`📊 createTicket: Стол ${table.name}: всего мест ${table.seats}, занято ${soldTicketsCount}, доступно ${availableSeats}`)
      
      // Генерируем номер билета
      const ticketNumber = await generateTicketNumber()
      
      // Генерируем QR-код
      const qrCode = await QRCode.toDataURL(ticketNumber, {
        width: 200,
        margin: 1,
        color: { dark: '#000', light: '#fff' }
      })
      
      const ticketData = {
        eventId: parseInt(eventId),
        zoneId: parseInt(zoneId),
        tableId: parseInt(tableId),
        ticketNumber,
        qrCode,
        price: zone.price,
        customerName,
        customerEmail,
        customerPhone,
        paymentId: paymentId || null,
        status: 'sold' as const,
        purchasedAt: new Date()
      }
      
      const ticket = await prisma.eventTicket.create({
        data: ticketData,
        include: {
          event: true,
          zone: true,
          table: true
        }
      })
      
      res.status(201).json({
        success: true,
        data: ticket,
        message: 'Билет успешно создан'
      })
    } catch (error) {
      console.error('Ошибка при создании билета:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при создании билета'
      })
    }
  },

  // Покупка билета с интеграцией PayKeeper
  async purchaseTicket(req: Request, res: Response) {
    try {
      const {
        eventId,
        zoneId,
        tableId,
        customerName,
        customerEmail,
        customerPhone
      } = req.body
      
      // Валидация обязательных полей
      if (!eventId || !zoneId || !tableId || !customerName || !customerEmail || !customerPhone) {
        return res.status(400).json({
          success: false,
          error: 'Не все обязательные поля заполнены'
        })
      }
      
      // Получаем данные зоны и мероприятия
      const zone = await prisma.eventZone.findUnique({
        where: { id: parseInt(zoneId) },
        include: { event: true }
      })
      
      if (!zone) {
        return res.status(404).json({
          success: false,
          error: 'Зона не найдена'
        })
      }
      
      // Получаем данные стола
      const table = await prisma.eventTable.findUnique({
        where: { id: parseInt(tableId) },
        include: {
          tickets: {
            where: {
              OR: [
                { status: 'sold' },
                { status: 'available', paymentStatus: 'pending' } // Учитываем билеты в процессе оплаты
              ]
            }
          }
        }
      })
      
      if (!table) {
        return res.status(404).json({
          success: false,
          error: 'Стол не найден'
        })
      }
      
      // Проверяем количество доступных мест
      const soldTicketsCount = table.tickets.length
      const availableSeats = table.seats - soldTicketsCount
      
      if (availableSeats <= 0) {
        return res.status(400).json({
          success: false,
          error: `Все места за этим столом заняты (${table.seats} из ${table.seats})`
        })
      }
      
      console.log(`📊 Стол ${table.name}: всего мест ${table.seats}, занято ${soldTicketsCount}, доступно ${availableSeats}`)
      
      // Генерируем номер билета
      const ticketNumber = await generateTicketNumber()
      
      // Создаем билет со статусом "доступен" (до оплаты)
      const ticket = await prisma.eventTicket.create({
        data: {
          eventId: parseInt(eventId),
          zoneId: parseInt(zoneId),
          tableId: parseInt(tableId),
          ticketNumber,
          price: zone.price,
          customerName,
          customerEmail,
          customerPhone,
          status: 'available',
          paymentStatus: 'pending'
        },
        include: {
          event: true,
          zone: true,
          table: true
        }
      })
      
      // Создаем платеж в PayKeeper
      const paymentResponse = await payKeeperService.createEventTicketPayment(
        ticket.id.toString(),
        Number(zone.price),
        {
          name: customerName,
          email: customerEmail,
          phone: customerPhone
        },
        zone.event.title
      )
      
      // Обновляем билет с paymentId
      await prisma.eventTicket.update({
        where: { id: ticket.id },
        data: {
          paymentId: paymentResponse.id
        }
      })
      
      res.status(201).json({
        success: true,
        data: {
          ticketId: ticket.id,
          ticketNumber: ticket.ticketNumber,
          paymentId: paymentResponse.id,
          paymentUrl: paymentResponse.payment_url,
          price: ticket.price,
          event: ticket.event,
          zone: ticket.zone,
          table: ticket.table
        },
        message: 'Билет создан, перейдите к оплате'
      })
    } catch (error) {
      console.error('Ошибка при покупке билета:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при покупке билета'
      })
    }
  },

  // Отправить билет на email
  async sendTicketToEmail(req: Request, res: Response) {
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

      if (ticket.status !== 'sold') {
        return res.status(400).json({
          success: false,
          error: 'Билет не оплачен'
        })
      }

      // Генерируем QR-код
      const qrCodeDataUrl = await QRCode.toDataURL(ticket.ticketNumber, {
        width: 200,
        margin: 1,
        color: { dark: '#000', light: '#fff' }
      })

      // Отправляем email
      const emailSent = await emailService.sendTicketToCustomer({
        ticket,
        qrCodeDataUrl
      })

      if (!emailSent) {
        return res.status(500).json({
          success: false,
          error: 'Не удалось отправить email'
        })
      }

      res.json({
        success: true,
        message: 'Билет отправлен на email'
      })
    } catch (error) {
      console.error('Ошибка при отправке билета на email:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при отправке билета'
      })
    }
  },

  // Использовать билет (сканирование QR)
  async useTicket(req: Request, res: Response) {
    try {
      const { ticketNumber } = req.params
      
      const ticket = await prisma.eventTicket.findUnique({
        where: { ticketNumber },
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
      
      if (ticket.status !== 'sold') {
        return res.status(400).json({
          success: false,
          error: 'Билет не может быть использован'
        })
      }
      
      if (ticket.usedAt) {
        return res.status(400).json({
          success: false,
          error: 'Билет уже был использован'
        })
      }
      
      const updatedTicket = await prisma.eventTicket.update({
        where: { id: ticket.id },
        data: {
          status: 'used',
          usedAt: new Date()
        },
        include: {
          event: true,
          zone: true,
          table: true
        }
      })
      
      res.json({
        success: true,
        data: updatedTicket,
        message: 'Билет успешно использован'
      })
    } catch (error) {
      console.error('Ошибка при использовании билета:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при использовании билета'
      })
    }
  },

  // Отменить билет
  async cancelTicket(req: Request, res: Response) {
    try {
      const { id } = req.params
      
      const ticket = await prisma.eventTicket.update({
        where: { id: parseInt(id) },
        data: {
          status: 'cancelled'
        },
        include: {
          event: true,
          zone: true,
          table: true
        }
      })
      
      res.json({
        success: true,
        data: ticket,
        message: 'Билет успешно отменен'
      })
    } catch (error) {
      console.error('Ошибка при отмене билета:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при отмене билета'
      })
    }
  },

  // Получить статистику продаж
  async getSalesStats(req: Request, res: Response) {
    try {
      const { eventId } = req.params
      
      const stats = await prisma.eventTicket.groupBy({
        by: ['status'],
        where: { eventId: parseInt(eventId) },
        _count: {
          status: true
        },
        _sum: {
          price: true
        }
      })
      
      const totalRevenue = await prisma.eventTicket.aggregate({
        where: {
          eventId: parseInt(eventId),
          status: 'sold'
        },
        _sum: {
          price: true
        }
      })
      
      res.json({
        success: true,
        data: {
          stats,
          totalRevenue: totalRevenue._sum.price || 0
        }
      })
    } catch (error) {
      console.error('Ошибка при получении статистики:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении статистики'
      })
    }
  }
}

// Генерация номера билета
async function generateTicketNumber(): Promise<string> {
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, '')
  const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  const ticketNumber = `FR-${datePart}-${randomPart}`
  
  // Проверяем уникальность
  const existingTicket = await prisma.eventTicket.findUnique({
    where: { ticketNumber }
  })
  
  if (existingTicket) {
    // Если номер уже существует, генерируем новый
    return generateTicketNumber()
  }
  
  return ticketNumber
}
