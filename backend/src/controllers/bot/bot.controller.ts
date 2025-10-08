import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const botController = {
  // Получить все события (адаптер для бота)
  async getEvents(req: Request, res: Response) {
    try {
      const events = await prisma.event.findMany({
        where: {
          isActive: true,
          date: {
            gte: new Date() // Только будущие события
          }
        },
        include: {
          zones: {
            where: { isActive: true },
            include: {
              tables: {
                where: { isActive: true }
              }
            }
          }
        },
        orderBy: [
          { date: 'asc' },
          { sortOrder: 'asc' }
        ]
      })

      // Адаптируем формат для бота
      const adaptedEvents = events.map(event => ({
        id: event.id,
        name: event.title, // title -> name
        startsAt: event.date, // date -> startsAt
        description: event.description,
        hall: {
          name: event.location || 'Frantsuz Club'
        },
        eventZonePrices: event.zones.map(zone => ({
          zoneId: zone.id,
          pricePerSeat: Number(zone.price),
          zone: {
            name: zone.name
          }
        }))
      }))

      res.json(adaptedEvents)
    } catch (error) {
      console.error('Ошибка получения событий для бота:', error)
      res.status(500).json({ error: 'Ошибка получения событий' })
    }
  },

  // Получить доступность зоны
  async getZoneAvailability(req: Request, res: Response) {
    try {
      const { eventId, zoneId } = req.params

      const zone = await prisma.eventZone.findFirst({
        where: {
          id: parseInt(zoneId),
          eventId: parseInt(eventId),
          isActive: true
        },
        include: {
          tables: {
            where: { isActive: true },
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
          }
        }
      })

      if (!zone) {
        return res.status(404).json({ error: 'Зона не найдена' })
      }

      // Рассчитываем доступные места
      const totalSeats = zone.tables.reduce((sum, table) => sum + table.seats, 0)
      const soldSeats = zone.tables.reduce((sum, table) => sum + table.tickets.length, 0)
      const availableSeats = totalSeats - soldSeats

      res.json({
        zoneId: zone.id,
        zoneName: zone.name,
        totalSeats,
        soldSeats,
        availableSeats,
        pricePerSeat: Number(zone.price)
      })
    } catch (error) {
      console.error('Ошибка получения доступности зоны:', error)
      res.status(500).json({ error: 'Ошибка получения доступности зоны' })
    }
  },

  // Получить билеты пользователя по telegramUserId
  async getUserTickets(req: Request, res: Response) {
    try {
      const { telegramUserId } = req.params

      const tickets = await prisma.eventTicket.findMany({
        where: {
          telegramUserId: telegramUserId
        },
        include: {
          event: true,
          zone: true,
          table: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      })

      // Адаптируем формат для бота
      const adaptedTickets = tickets.map(ticket => ({
        id: ticket.id,
        ticketNumber: ticket.ticketNumber,
        eventName: ticket.event.title,
        zoneName: ticket.zone.name,
        tableName: ticket.table.name,
        price: Number(ticket.price),
        totalAmount: Number(ticket.price),
        seatsCount: 1, // Пока один билет = одно место
        status: ticket.paymentStatus === 'paid' ? 'paid' : 'reserved',
        customerName: ticket.customerName,
        customerPhone: ticket.customerPhone,
        customerEmail: ticket.customerEmail,
        qrCode: ticket.qrCode,
        createdAt: ticket.createdAt,
        purchasedAt: ticket.purchasedAt,
        eventDate: ticket.event.date,
        eventTime: ticket.event.time
      }))

      res.json(adaptedTickets)
    } catch (error) {
      console.error('Ошибка получения билетов пользователя:', error)
      res.status(500).json({ error: 'Ошибка получения билетов пользователя' })
    }
  },

  // Получить информацию о билете
  async getTicketInfo(req: Request, res: Response) {
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
        return res.status(404).json({ error: 'Билет не найден' })
      }

      // Адаптируем формат для бота
      const adaptedTicket = {
        id: ticket.id,
        ticketNumber: ticket.ticketNumber,
        eventName: ticket.event.title,
        zoneName: ticket.zone.name,
        tableName: ticket.table.name,
        price: Number(ticket.price),
        totalAmount: Number(ticket.price),
        seatsCount: 1,
        status: ticket.paymentStatus === 'paid' ? 'paid' : 'reserved',
        customerName: ticket.customerName,
        customerPhone: ticket.customerPhone,
        customerEmail: ticket.customerEmail,
        qrCode: ticket.qrCode,
        paymentId: ticket.paymentId,
        createdAt: ticket.createdAt,
        purchasedAt: ticket.purchasedAt,
        eventDate: ticket.event.date,
        eventTime: ticket.event.time
      }

      res.json(adaptedTicket)
    } catch (error) {
      console.error('Ошибка получения информации о билете:', error)
      res.status(500).json({ error: 'Ошибка получения информации о билете' })
    }
  },

  // Получить QR-код билета
  async getTicketQR(req: Request, res: Response) {
    try {
      const { ticketId } = req.params

      const ticket = await prisma.eventTicket.findUnique({
        where: { id: parseInt(ticketId) },
        select: {
          id: true,
          ticketNumber: true,
          qrCode: true,
          paymentStatus: true
        }
      })

      if (!ticket) {
        return res.status(404).json({ error: 'Билет не найден' })
      }

      if (ticket.paymentStatus !== 'paid') {
        return res.status(400).json({ error: 'Билет не оплачен' })
      }

      res.json({
        success: true,
        ticket: {
          id: ticket.id,
          ticketNumber: ticket.ticketNumber
        },
        qrCode: ticket.qrCode
      })
    } catch (error) {
      console.error('Ошибка получения QR-кода:', error)
      res.status(500).json({ error: 'Ошибка получения QR-кода' })
    }
  },

  // Получить билет с QR-кодом
  async getTicketWithQR(req: Request, res: Response) {
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
        return res.status(404).json({ error: 'Билет не найден' })
      }

      if (ticket.paymentStatus !== 'paid') {
        return res.status(400).json({ error: 'Билет не оплачен' })
      }

      res.json({
        success: true,
        ticket: {
          id: ticket.id,
          ticketNumber: ticket.ticketNumber,
          eventName: ticket.event.title,
          zoneName: ticket.zone.name,
          tableName: ticket.table.name
        },
        qrCode: ticket.qrCode
      })
    } catch (error) {
      console.error('Ошибка получения билета с QR-кодом:', error)
      res.status(500).json({ error: 'Ошибка получения билета с QR-кодом' })
    }
  },

  // Обновить статус билета
  async updateTicketStatus(req: Request, res: Response) {
    try {
      const { ticketId } = req.params
      const { status } = req.body

      const ticket = await prisma.eventTicket.update({
        where: { id: parseInt(ticketId) },
        data: {
          paymentStatus: status
        }
      })

      res.json({
        success: true,
        ticket
      })
    } catch (error) {
      console.error('Ошибка обновления статуса билета:', error)
      res.status(500).json({ error: 'Ошибка обновления статуса билета' })
    }
  }
}

