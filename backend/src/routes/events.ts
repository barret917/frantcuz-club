import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import QRCode from 'qrcode'

const router = Router()
const prisma = new PrismaClient()

async function generateQRCode(ticketNumber: string): Promise<string | null> {
  try {
    const ticketId = ticketNumber.replace('Мероприятия_Француз-', '');
    const telegramUrl = `https://t.me/${process.env.BOT_USERNAME}?start=${ticketId}`;

    console.log('Генерация QR с ссылкой:', telegramUrl);
    return await QRCode.toDataURL(telegramUrl, {
      width: 200,
      margin: 1,
      color: { dark: '#000', light: '#fff' }
    });
  } catch (err) {
    console.error('Ошибка генерации QR-кода:', err);
    return null;
  }
}

// Получить все мероприятия (билеты)
router.get('/', async (req, res) => {
  try {
    const { filter } = req.query
    
    let whereClause: any = {}
    
    // Для фильтрации используем UTC время с поправкой
    const nowUTC = new Date()
    const nowMoscow = new Date(nowUTC.getTime() + 3 * 60 * 60 * 1000) // Текущее время в UTC+3
    
    if (filter === 'upcoming') {
      whereClause.event_date = {
        gte: nowMoscow
      }
    } else if (filter === 'past') {
      whereClause.event_date = {
        lt: nowMoscow
      }
    }
    
    const events = await prisma.tickets.findMany({
      where: whereClause,
      orderBy: [
        { event_date: 'asc' }
      ]
    })
    
    // Преобразуем Decimal price в string и корректируем время для отображения
    const formattedEvents = events.map(event => ({
      ...event,
      price: event.price.toString(),
      event_date: new Date(event.event_date.getTime() - 3 * 60 * 60 * 1000).toISOString(), // Вычитаем 3 часа
      created_at: event.created_at.toISOString(),
      updated_at: event.updated_at.toISOString()
    }))
    
    res.json({
      success: true,
      data: formattedEvents,
      message: events.length === 0 ? 'Мероприятий не найдено' : undefined
    })
  } catch (error) {
    console.error('Ошибка при получении мероприятий:', error)
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
    const event = await prisma.tickets.findUnique({
      where: { id: parseInt(id) }
    })
    
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Мероприятие не найдено'
      })
    }
    
    const formattedEvent = {
      ...event,
      price: event.price.toString(),
      event_date: new Date(event.event_date.getTime() - 3 * 60 * 60 * 1000).toISOString(), // Вычитаем 3 часа
      created_at: event.created_at.toISOString(),
      updated_at: event.updated_at.toISOString()
    }
    
    res.json({
      success: true,
      data: formattedEvent
    })
  } catch (error) {
    console.error('Ошибка при получении мероприятия:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка сервера при получении мероприятия'
    })
  }
})

// Создать новое мероприятие (с автоматической генерацией QR-кода)
router.post('/', async (req, res) => {
  try {
    const {
      title,
      short_description,
      description,
      event_date,
      event_location,
      price,
      image_url
    } = req.body
    
    // Валидация обязательных полей
    if (!title || !event_date || !event_location || !price) {
      return res.status(400).json({
        success: false,
        error: 'Не все обязательные поля заполнены (название, дата, место, цена)'
      })
    }
    
    // Конвертируем дату в московское время (UTC+3)
    const eventDate = new Date(event_date)
    // Добавляем 3 часа для сохранения в UTC
    const moscowEventDate = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000)
    
    // Генерация номера билета
    const ticketNumber = `Мероприятия_Француз-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    
    // АВТОМАТИЧЕСКАЯ генерация QR-кода при создании мероприятия
    const qr_code = await generateQRCode(ticketNumber)
    
    if (!qr_code) {
      return res.status(500).json({
        success: false,
        error: 'Ошибка генерации QR-кода'
      })
    }
    
    const event = await prisma.tickets.create({
      data: {
        title,
        short_description: short_description || '',
        description: description || '',
        event_date: moscowEventDate, // Сохраняем с поправкой на UTC
        event_location,
        price: parseFloat(price),
        image_url: image_url || null,
        ticket_number: ticketNumber,
        qr_code: qr_code,
        is_used: false,
        updated_at: new Date()
      }
    })
    
    // Преобразуем Decimal price в string и корректируем время для отображения
    const formattedEvent = {
      ...event,
      price: event.price.toString(),
      event_date: new Date(event.event_date.getTime() - 3 * 60 * 60 * 1000).toISOString(), // Вычитаем 3 часа для правильного отображения
      created_at: event.created_at.toISOString(),
      updated_at: event.updated_at.toISOString()
    }
    
    res.status(201).json({
      success: true,
      data: formattedEvent,
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
    
    // Если передана дата, конвертируем её в московское время (UTC+3)
    if (updateData.event_date) {
      const eventDate = new Date(updateData.event_date)
      // Добавляем 3 часа для сохранения в UTC
      updateData.event_date = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000)
    }
    
    // Если передана цена, конвертируем в число
    if (updateData.price) {
      updateData.price = parseFloat(updateData.price)
    }
    
    const event = await prisma.tickets.update({
      where: { id: parseInt(id) },
      data: {
        ...updateData,
        updated_at: new Date()
      }
    })
    
    // Преобразуем Decimal price в string и корректируем время для отображения
    const formattedEvent = {
      ...event,
      price: event.price.toString(),
      event_date: new Date(event.event_date.getTime() - 3 * 60 * 60 * 1000).toISOString(), // Вычитаем 3 часа
      created_at: event.created_at.toISOString(),
      updated_at: event.updated_at.toISOString()
    }
    
    res.json({
      success: true,
      data: formattedEvent,
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

// Удалить мероприятие
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    // Проверяем, есть ли связанные билеты у пользователей
    const userTickets = await prisma.user_tickets.count({
      where: { ticket_id: parseInt(id) }
    })
    
    if (userTickets > 0) {
      return res.status(400).json({
        success: false,
        error: 'Нельзя удалить мероприятие, на которое уже проданы билеты'
      })
    }
    
    await prisma.tickets.delete({
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
})

// Получить статистику мероприятий
router.get('/stats/overview', async (req, res) => {
  try {
    const nowUTC = new Date()
    const nowMoscow = new Date(nowUTC.getTime() + 3 * 60 * 60 * 1000) // Текущее время в UTC+3
    
    const [totalEvents, upcomingEvents, pastEvents] = await Promise.all([
      prisma.tickets.count(),
      prisma.tickets.count({
        where: {
          event_date: {
            gte: nowMoscow
          }
        }
      }),
      prisma.tickets.count({
        where: {
          event_date: {
            lt: nowMoscow
          }
        }
      })
    ])
    
    res.json({
      success: true,
      data: {
        total: totalEvents || 0,
        upcoming: upcomingEvents || 0,
        past: pastEvents || 0
      }
    })
  } catch (error) {
    console.error('Ошибка при получении статистики мероприятий:', error)
    return res.json({
      success: true,
      data: {
        total: 0,
        upcoming: 0,
        past: 0
      }
    })
  }
})

export default router