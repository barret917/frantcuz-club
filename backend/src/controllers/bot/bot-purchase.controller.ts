import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import QRCode from 'qrcode'
import { payKeeperService } from '../../services/paykeeper.service'

const prisma = new PrismaClient()

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
    return generateTicketNumber()
  }
  
  return ticketNumber
}

export const botPurchaseController = {
  // Покупка множественных билетов (для бота)
  async purchaseTickets(req: Request, res: Response) {
    try {
      const {
        eventId,
        zoneId,
        customerName,
        customerPhone,
        customerEmail,
        seatsCount,
        telegramUserId
      } = req.body

      // Валидация
      if (!eventId || !zoneId || !customerName || !customerPhone || !seatsCount) {
        return res.status(400).json({
          error: 'Не все обязательные поля заполнены'
        })
      }

      const seats = parseInt(seatsCount)
      if (seats < 1 || seats > 10) {
        return res.status(400).json({
          error: 'Количество мест должно быть от 1 до 10'
        })
      }

      // Получаем зону и событие
      const zone = await prisma.eventZone.findUnique({
        where: { id: parseInt(zoneId) },
        include: {
          event: true,
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
            },
            orderBy: {
              id: 'asc'
            }
          }
        }
      })

      if (!zone) {
        return res.status(404).json({ error: 'Зона не найдена' })
      }

      // Находим столы с доступными местами
      const availableTables: Array<{ table: any; availableSeats: number }> = []
      
      for (const table of zone.tables) {
        const soldTickets = table.tickets.length
        const available = table.seats - soldTickets
        if (available > 0) {
          availableTables.push({ table, availableSeats: available })
        }
      }

      // Проверяем, достаточно ли мест в зоне
      const totalAvailable = availableTables.reduce((sum, t) => sum + t.availableSeats, 0)
      
      if (totalAvailable < seats) {
        return res.status(400).json({
          error: `Недостаточно мест. Доступно: ${totalAvailable}, требуется: ${seats}`
        })
      }

      console.log(`🎫 Покупка ${seats} билетов для зоны ${zone.name}`)

      // Создаем билеты, распределяя их по столам
      const createdTickets = []
      let remainingSeats = seats
      let tableIndex = 0

      while (remainingSeats > 0 && tableIndex < availableTables.length) {
        const { table, availableSeats } = availableTables[tableIndex]
        const seatsToBook = Math.min(remainingSeats, availableSeats)

        console.log(`  📍 Бронируем ${seatsToBook} мест за столом ${table.name}`)

        // Создаем билеты для этого стола
        for (let i = 0; i < seatsToBook; i++) {
          const ticketNumber = await generateTicketNumber()

          const ticket = await prisma.eventTicket.create({
            data: {
              eventId: parseInt(eventId),
              zoneId: parseInt(zoneId),
              tableId: table.id,
              ticketNumber,
              price: zone.price,
              customerName,
              customerEmail: customerEmail || '',
              customerPhone,
              telegramUserId: telegramUserId || null,
              status: 'available',
              paymentStatus: 'pending'
            }
          })

          createdTickets.push(ticket)
        }

        remainingSeats -= seatsToBook
        tableIndex++
      }

      console.log(`✅ Создано ${createdTickets.length} билетов`)

      // Создаем единый платеж для всех билетов
      const totalAmount = Number(zone.price) * seats
      const ticketIds = createdTickets.map(t => t.id).join(',')

      const paymentResponse = await payKeeperService.createEventTicketPayment(
        ticketIds,
        totalAmount,
        {
          name: customerName,
          email: customerEmail || '',
          phone: customerPhone
        },
        `${zone.event.title} - ${zone.name} (${seats} мест)`
      )

      // Обновляем все билеты с paymentId
      await prisma.eventTicket.updateMany({
        where: {
          id: { in: createdTickets.map(t => t.id) }
        },
        data: {
          paymentId: paymentResponse.id
        }
      })

      // Формируем ответ в формате, понятном боту
      res.status(201).json({
        success: true,
        ticketPurchase: {
          id: createdTickets[0].id, // ID первого билета как группы
          ticketIds: createdTickets.map(t => t.id),
          ticketNumbers: createdTickets.map(t => t.ticketNumber),
          eventName: zone.event.title,
          zoneName: zone.name,
          seatsCount: seats,
          totalAmount: totalAmount,
          pricePerSeat: Number(zone.price),
          status: 'reserved',
          paymentId: paymentResponse.id,
          paymentUrl: paymentResponse.payment_url,
          createdAt: createdTickets[0].createdAt,
          expiresAt: new Date(Date.now() + 10 * 60 * 1000) // 10 минут
        },
        message: 'Билеты зарезервированы, перейдите к оплате'
      })

    } catch (error) {
      console.error('Ошибка покупки билетов для бота:', error)
      res.status(500).json({
        error: 'Ошибка сервера при покупке билетов'
      })
    }
  }
}

