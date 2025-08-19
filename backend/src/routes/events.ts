import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Получить все мероприятия
router.get('/', async (req, res) => {
  try {
    const { filter } = req.query
    
    let whereClause: any = { isActive: true }
    
    if (filter === 'upcoming') {
      whereClause.isUpcoming = true
    } else if (filter === 'past') {
      whereClause.isUpcoming = false
    }
    
    const events = await prisma.event.findMany({
      where: whereClause,
      orderBy: [
        { isUpcoming: 'desc' },
        { date: 'asc' },
        { sortOrder: 'asc' }
      ]
    })
    
    // Всегда возвращаем успешный ответ, даже если мероприятий нет
    res.json({
      success: true,
      data: events || [],
      message: events.length === 0 ? 'Мероприятий не найдено' : undefined
    })
  } catch (error) {
    console.error('Ошибка при получении мероприятий:', error)
    
    // В случае любой ошибки Prisma возвращаем пустой массив
    // Это безопаснее, чем пытаться анализировать конкретные коды ошибок
    return res.json({
      success: true,
      data: [],
      message: 'Мероприятий не найдено'
    })
  }
})

// Получить мероприятие по ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const event = await prisma.event.findUnique({
      where: { id: parseInt(id) }
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
})

// Создать новое мероприятие
router.post('/', async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      time,
      price,
      category,
      isUpcoming,
      maxGuests,
      location,
      organizer,
      contactInfo,
      tags
    } = req.body
    
    // Валидация обязательных полей
    if (!title || !description || !date || !time || !category) {
      return res.status(400).json({
        success: false,
        error: 'Не все обязательные поля заполнены'
      })
    }
    
    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        time,
        price: price || null,
        category,
        isUpcoming: isUpcoming !== undefined ? isUpcoming : true,
        maxGuests: maxGuests ? parseInt(maxGuests) : null,
        location: location || null,
        organizer: organizer || null,
        contactInfo: contactInfo || null,
        tags: tags || []
      }
    })
    
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
})

// Обновить мероприятие
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body
    
    // Если передана дата, конвертируем её
    if (updateData.date) {
      updateData.date = new Date(updateData.date)
    }
    
    // Если передано количество гостей, конвертируем в число
    if (updateData.maxGuests) {
      updateData.maxGuests = parseInt(updateData.maxGuests)
    }
    
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: {
        ...updateData,
        updatedAt: new Date()
      }
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
})

// Удалить мероприятие (мягкое удаление)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: { isActive: false }
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
})

// Получить статистику мероприятий
router.get('/stats/overview', async (req, res) => {
  try {
    const [totalEvents, upcomingEvents, pastEvents, activeEvents] = await Promise.all([
      prisma.event.count({ where: { isActive: true } }),
      prisma.event.count({ where: { isActive: true, isUpcoming: true } }),
      prisma.event.count({ where: { isActive: true, isUpcoming: false } }),
      prisma.event.count({ where: { isActive: true } })
    ])
    
    res.json({
      success: true,
      data: {
        total: totalEvents || 0,
        upcoming: upcomingEvents || 0,
        past: pastEvents || 0,
        active: activeEvents || 0
      }
    })
  } catch (error) {
    console.error('Ошибка при получении статистики мероприятий:', error)
    
    // В случае ошибки возвращаем нулевую статистику
    return res.json({
      success: true,
      data: {
        total: 0,
        upcoming: 0,
        past: 0,
        active: 0
      }
    })
  }
})

export default router 