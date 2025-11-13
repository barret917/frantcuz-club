import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import emailService from '../../services/email.service'

const prisma = new PrismaClient()

export const bookingController = {
  // Создать новое бронирование
  async createBooking(req: Request, res: Response) {
    try {
      const { 
        zoneId,
        tableId, 
        customerName, 
        customerPhone, 
        customerEmail, 
        bookingDate,
        startTime, 
        endTime, 
        duration,
        totalPrice,
        totalAmount,
        depositAmount
      } = req.body


      // Получаем информацию о таблице для получения zoneId
      const table = await prisma.bookingTable.findUnique({
        where: { id: parseInt(tableId) }
      })

      if (!table) {
        return res.status(404).json({ error: 'Table not found' })
      }

      // Проверяем доступность стола (упрощенная проверка)
      const existingBooking = await prisma.booking.findFirst({
        where: {
          tableId: parseInt(tableId),
          status: {
            in: ['pending', 'confirmed']
          },
          OR: [
            {
              AND: [
                { startTime: { lte: startTime } },
                { endTime: { gt: startTime } }
              ]
            },
            {
              AND: [
                { startTime: { lt: endTime } },
                { endTime: { gte: endTime } }
              ]
            }
          ]
        }
      })

      if (existingBooking) {
        return res.status(400).json({ error: 'Table is already booked for this time' })
      }

      const booking = await prisma.booking.create({
        data: {
          zoneId: zoneId || table.zoneId,
          tableId: parseInt(tableId),
          customerName,
          customerPhone,
          customerEmail,
          bookingDate: bookingDate ? new Date(bookingDate) : new Date(),
          startTime: startTime,
          endTime: endTime,
          duration: duration || 120,
          guestsCount: 4, // временно фиксированное значение
          totalPrice: totalPrice || totalAmount || 0,
          deposit: depositAmount,
          status: 'pending',
          paymentStatus: 'pending'
        },
        include: {
          table: {
            include: {
              zone: true
            }
          },
          zone: true
        }
      })

      try {
        await emailService.sendBookingNotification(booking, 'online@frantsuz-club.ru')
      } catch (notificationError) {
        console.error('Failed to send booking notification email:', notificationError)
      }

      res.status(201).json(booking)
    } catch (error) {
      console.error('Error creating booking:', error)
      res.status(500).json({ error: 'Failed to create booking' })
    }
  },

  // Получить бронирования по дате
  async getBookingsByDate(req: Request, res: Response) {
    try {
      const { date } = req.query
      
      if (!date) {
        return res.status(400).json({ error: 'Date parameter is required' })
      }

      const bookings = await prisma.booking.findMany({
        where: {
          bookingDate: {
            gte: new Date(date as string),
            lt: new Date(new Date(date as string).getTime() + 24 * 60 * 60 * 1000)
          }
        },
        include: {
          table: {
            include: {
              zone: true
            }
          }
        },
        orderBy: { startTime: 'asc' }
      })

      res.json(bookings)
    } catch (error) {
      console.error('Error fetching bookings:', error)
      res.status(500).json({ error: 'Failed to fetch bookings' })
    }
  },

  // Обновить статус бронирования
  async updateBookingStatus(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { status } = req.body

      const booking = await prisma.booking.update({
        where: { id: parseInt(id) },
        data: { status },
        include: {
          table: {
            include: {
              zone: true
            }
          }
        }
      })

      res.json(booking)
    } catch (error) {
      console.error('Error updating booking status:', error)
      res.status(500).json({ error: 'Failed to update booking status' })
    }
  },

  // Отменить бронирование
  async cancelBooking(req: Request, res: Response) {
    try {
      const { id } = req.params

      const booking = await prisma.booking.update({
        where: { id: parseInt(id) },
        data: { status: 'cancelled' },
        include: {
          table: {
            include: {
              zone: true
            }
          }
        }
      })

      res.json(booking)
    } catch (error) {
      console.error('Error cancelling booking:', error)
      res.status(500).json({ error: 'Failed to cancel booking' })
    }
  }
}
