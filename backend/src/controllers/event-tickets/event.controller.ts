import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const eventController = {
  // Получить все мероприятия
  async getAllEvents(req: Request, res: Response) {
    try {
      console.log('🚀 Получение мероприятий...')
      const { filter } = req.query
      
      let whereClause: any = { isActive: true }
      
      // Получаем все активные мероприятия
      const allEvents = await prisma.event.findMany({
        where: whereClause,
        include: {
          zones: {
            where: { isActive: true },
            include: {
              tables: {
                where: { isActive: true }
              }
            },
            orderBy: { sortOrder: 'asc' }
          },
          tickets: {
            where: { status: 'sold' }
          }
        },
        orderBy: [
          { date: 'asc' },
          { sortOrder: 'asc' }
        ]
      })
      
      // Фильтруем мероприятия по актуальной дате
      const now = new Date()
      const filteredEvents = allEvents.filter(event => {
        try {
          // Преобразуем event.date в строку если это объект Date
          const dateStr = event.date instanceof Date ? event.date.toISOString().split('T')[0] : String(event.date)
          // Извлекаем только дату без времени (YYYY-MM-DD)
          const dateOnly = dateStr.split('T')[0] || dateStr.split(' ')[0]
          const eventDateTime = new Date(`${dateOnly}T${event.time}`)
          
          // Проверяем валидность даты
          if (isNaN(eventDateTime.getTime())) {
            console.warn(`⚠️ Некорректная дата для мероприятия ${event.title}: ${event.date} ${event.time}`)
            return false
          }
          
          const isUpcoming = eventDateTime > now
        
          if (filter === 'upcoming') {
            return isUpcoming
          } else if (filter === 'past') {
            return !isUpcoming
          }
          
          return true // Если фильтр не указан, показываем все
        } catch (error) {
          console.error(`❌ Ошибка при обработке мероприятия ${event.title}:`, error)
          return false
        }
      })
      
      console.log(`✅ Найдено мероприятий: ${filteredEvents.length}`)
      filteredEvents.forEach((event, index) => {
        const dateStr = event.date instanceof Date ? event.date.toISOString().split('T')[0] : String(event.date)
        const dateOnly = dateStr.split('T')[0] || dateStr.split(' ')[0]
        const eventDateTime = new Date(`${dateOnly}T${event.time}`)
        const isUpcoming = eventDateTime > now
        console.log(`   ${index + 1}. ${event.title} (${isUpcoming ? 'Предстоящее' : 'Прошедшее'}) - ${dateOnly} ${event.time}`)
      })
      
      res.json({
        success: true,
        data: filteredEvents,
        message: filteredEvents.length === 0 ? 'Мероприятий не найдено' : undefined
      })
    } catch (error) {
      console.error('❌ Ошибка при получении мероприятий:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении мероприятий'
      })
    }
  },

  // Получить мероприятие по ID
  async getEventById(req: Request, res: Response) {
    try {
      const { id } = req.params
      
      const event = await prisma.event.findUnique({
        where: { id: parseInt(id) },
        include: {
          zones: {
            where: { isActive: true },
            include: {
              tables: {
                where: { isActive: true },
                include: {
                  tickets: {
                    where: { status: 'sold' }
                  }
                }
              }
            },
            orderBy: { sortOrder: 'asc' }
          }
        }
      })
      
      if (!event) {
        return res.status(404).json({
          success: false,
          error: 'Мероприятие не найдено'
        })
      }
      
      res.json({
        success: true,
        data: event
      })
    } catch (error) {
      console.error('Ошибка при получении мероприятия:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении мероприятия'
      })
    }
  },

  // Создать новое мероприятие
  async createEvent(req: Request, res: Response) {
    try {
      console.log('🚀 Backend: Получен запрос на создание мероприятия:', req.body)
      
      const {
        title,
        description,
        date,
        time,
        category,
        imageUrl,
        location,
        organizer,
        contactInfo,
        maxGuests,
        isUpcoming = true
      } = req.body
      
      // Валидация обязательных полей
      if (!title || !description || !date || !time) {
        return res.status(400).json({
          success: false,
          error: 'Не все обязательные поля заполнены'
        })
      }
      
      const eventData = {
        title,
        description,
        date: new Date(date),
        time,
        category: category || 'Концерт', // Use provided category or default
        imageUrl: imageUrl || null,
        location: location || null,
        organizer: organizer || null,
        contactInfo: contactInfo || null,
        maxGuests: maxGuests ? parseInt(maxGuests) : null,
        isUpcoming: isUpcoming !== undefined ? isUpcoming : true
      }
      
      console.log('💾 Backend: Создаем мероприятие в БД:', eventData)
      
      const event = await prisma.event.create({
        data: eventData
      })
      
      console.log('✅ Backend: Мероприятие создано в БД:', event)
      
      res.status(201).json({
        success: true,
        data: event,
        message: 'Мероприятие успешно создано'
      })
    } catch (error) {
      console.error('Ошибка при создании мероприятия:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при создании мероприятия'
      })
    }
  },

  // Обновить мероприятие
  async updateEvent(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updateData = req.body
      
      // Преобразуем дату если она есть
      if (updateData.date) {
        updateData.date = new Date(updateData.date)
      }
      
      const event = await prisma.event.update({
        where: { id: parseInt(id) },
        data: updateData
      })
      
      res.json({
        success: true,
        data: event,
        message: 'Мероприятие успешно обновлено'
      })
    } catch (error) {
      console.error('Ошибка при обновлении мероприятия:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при обновлении мероприятия'
      })
    }
  },

  // Удалить мероприятие
  async deleteEvent(req: Request, res: Response) {
    try {
      const { id } = req.params
      
      // Сначала удаляем все связанные данные
      await prisma.eventTicket.deleteMany({
        where: { eventId: parseInt(id) }
      })
      
      await prisma.eventTable.deleteMany({
        where: { zone: { eventId: parseInt(id) } }
      })
      
      await prisma.eventZone.deleteMany({
        where: { eventId: parseInt(id) }
      })
      
      // Затем удаляем само мероприятие
      await prisma.event.delete({
        where: { id: parseInt(id) }
      })
      
      res.json({
        success: true,
        message: 'Мероприятие успешно удалено'
      })
    } catch (error) {
      console.error('Ошибка при удалении мероприятия:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при удалении мероприятия'
      })
    }
  }
}
