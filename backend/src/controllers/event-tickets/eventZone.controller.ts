import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const eventZoneController = {
  // Получить все зоны мероприятия
  async getEventZones(req: Request, res: Response) {
    try {
      const { eventId } = req.params
      
      const zones = await prisma.eventZone.findMany({
        where: { 
          eventId: parseInt(eventId),
          isActive: true 
        },
        include: {
          tables: {
            where: { isActive: true },
            orderBy: { id: 'asc' }
          }
        },
        orderBy: { sortOrder: 'asc' }
      })

      res.json({
        success: true,
        data: zones
      })
    } catch (error) {
      console.error('Ошибка при получении зон мероприятия:', error)
      res.status(500).json({ 
        success: false, 
        error: 'Ошибка сервера при получении зон мероприятия' 
      })
    }
  },

  // Создать новую зону мероприятия
  async createEventZone(req: Request, res: Response) {
    try {
      const { eventId } = req.params
      const { name, description, price, maxSeats, sortOrder, x, y, width, height, eventId: bodyEventId } = req.body
      
      // Используем eventId из параметров URL или из тела запроса
      const actualEventId = eventId || bodyEventId

      // Проверяем обязательные поля
      if (!name || !price || !actualEventId) {
        return res.status(400).json({ 
          success: false, 
          error: 'Не все обязательные поля заполнены' 
        })
      }

      // Проверяем, существует ли мероприятие
      const event = await prisma.event.findUnique({
        where: { id: parseInt(actualEventId) }
      })

      if (!event) {
        return res.status(404).json({ 
          success: false, 
          error: 'Мероприятие не найдено' 
        })
      }

      const zone = await prisma.eventZone.create({
        data: {
          name,
          description: description || '',
          price: parseFloat(price),
          maxSeats: parseInt(maxSeats),
          sortOrder: parseInt(sortOrder) || 1,
          x: parseFloat(x) || 0,
          y: parseFloat(y) || 0,
          width: parseFloat(width) || 200,
          height: parseFloat(height) || 150,
          eventId: parseInt(actualEventId),
          isActive: true
        }
      })

      res.status(201).json({
        success: true,
        data: zone,
        message: 'Зона мероприятия создана успешно'
      })
    } catch (error) {
      console.error('Ошибка при создании зоны мероприятия:', error)
      res.status(500).json({ 
        success: false, 
        error: 'Ошибка сервера при создании зоны мероприятия' 
      })
    }
  },

  // Обновить зону мероприятия
  async updateEventZone(req: Request, res: Response) {
    try {
      const { eventId, zoneId, id } = req.params
      const { name, description, price, maxSeats, sortOrder, isActive, x, y, width, height } = req.body
      
      // Используем zoneId из параметров URL или id
      const actualZoneId = zoneId || id

      const zone = await prisma.eventZone.findFirst({
        where: { 
          id: parseInt(actualZoneId),
        }
      })

      if (!zone) {
        return res.status(404).json({ 
          success: false, 
          error: 'Зона мероприятия не найдена' 
        })
      }

      const updateData: any = {}
      
      // Обновляем только переданные поля
      if (name !== undefined) updateData.name = name
      if (description !== undefined) updateData.description = description
      if (price !== undefined) updateData.price = parseFloat(price)
      if (maxSeats !== undefined) updateData.maxSeats = parseInt(maxSeats)
      if (sortOrder !== undefined) updateData.sortOrder = parseInt(sortOrder)
      if (isActive !== undefined) updateData.isActive = isActive
      if (x !== undefined) updateData.x = parseFloat(x)
      if (y !== undefined) updateData.y = parseFloat(y)
      if (width !== undefined) updateData.width = parseFloat(width)
      if (height !== undefined) updateData.height = parseFloat(height)

      const updatedZone = await prisma.eventZone.update({
        where: { id: parseInt(actualZoneId) },
        data: updateData
      })

      res.json({
        success: true,
        data: updatedZone,
        message: 'Зона мероприятия обновлена успешно'
      })
    } catch (error) {
      console.error('Ошибка при обновлении зоны мероприятия:', error)
      res.status(500).json({ 
        success: false, 
        error: 'Ошибка сервера при обновлении зоны мероприятия' 
      })
    }
  },

  // Удалить зону мероприятия
  async deleteEventZone(req: Request, res: Response) {
    try {
      const { eventId, zoneId, id } = req.params
      
      // Используем zoneId из параметров URL или id
      const actualZoneId = zoneId || id

      const zone = await prisma.eventZone.findFirst({
        where: { 
          id: parseInt(actualZoneId),
        }
      })

      if (!zone) {
        return res.status(404).json({ 
          success: false, 
          error: 'Зона мероприятия не найдена' 
        })
      }

      // Проверяем, есть ли проданные билеты в этой зоне
      const soldTickets = await prisma.eventTicket.count({
        where: { 
          zoneId: parseInt(actualZoneId),
          status: 'sold'
        }
      })

      if (soldTickets > 0) {
        return res.status(400).json({ 
          success: false, 
          error: 'Нельзя удалить зону с проданными билетами' 
        })
      }

      // Мягкое удаление - помечаем как неактивную
      await prisma.eventZone.update({
        where: { id: parseInt(actualZoneId) },
        data: { isActive: false }
      })

      res.json({
        success: true,
        message: 'Зона успешно удалена'
      })
    } catch (error) {
      console.error('Ошибка при удалении зоны мероприятия:', error)
      res.status(500).json({ 
        success: false, 
        error: 'Ошибка сервера при удалении зоны мероприятия' 
      })
    }
  },

  // Получить статистику зоны
  async getZoneStats(req: Request, res: Response) {
    try {
      const { eventId, zoneId } = req.params

      const zone = await prisma.eventZone.findFirst({
        where: { 
          id: parseInt(zoneId),
        },
        include: {
          tables: {
            where: { isActive: true }
          },
          tickets: {
            where: { status: 'sold' }
          }
        }
      })

      if (!zone) {
        return res.status(404).json({ 
          success: false, 
          error: 'Зона мероприятия не найдена' 
        })
      }

      // Рассчитываем реальное количество мест на основе столов
      const actualTotalSeats = zone.tables.reduce((sum, table) => sum + table.seats, 0)

      const stats = {
        totalSeats: actualTotalSeats, // Используем реальное количество мест из столов
        maxSeats: zone.maxSeats || null, // Максимум, если задан
        soldTickets: zone.tickets.length,
        availableSeats: actualTotalSeats - zone.tickets.length,
        totalRevenue: zone.tickets.length * (Number(zone.price) || 0),
        tablesCount: zone.tables.length
      }

      res.json({
        success: true,
        data: stats
      })
    } catch (error) {
      console.error('Ошибка при получении статистики зоны:', error)
      res.status(500).json({ 
        success: false, 
        error: 'Ошибка сервера при получении статистики зоны' 
      })
    }
  }
}