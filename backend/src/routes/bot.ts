import { Router } from 'express'
import { botController } from '../controllers/bot/bot.controller'
import { botPurchaseController } from '../controllers/bot/bot-purchase.controller'

const router = Router()

// ===== РОУТЫ ДЛЯ TELEGRAM БОТА =====

// Получить все события
router.get('/events', botController.getEvents)

// Получить доступность зоны
router.get('/events/:eventId/zones/:zoneId/availability', botController.getZoneAvailability)

// Покупка билетов (множественных)
router.post('/tickets', botPurchaseController.purchaseTickets)

// Получить информацию о билете
router.get('/tickets/:ticketId', botController.getTicketInfo)

// Получить QR-код билета
router.get('/tickets/:ticketId/qr', botController.getTicketQR)

// Получить билет с QR-кодом
router.get('/tickets/:ticketId/with-qr', botController.getTicketWithQR)

// Обновить статус билета
router.patch('/tickets/:ticketId/status', botController.updateTicketStatus)

// Получить билеты пользователя по Telegram ID
router.get('/tickets/user/:telegramUserId', botController.getUserTickets)

// Получить залы (совместимость)
router.get('/halls', async (req, res) => {
  res.json([
    { id: 1, name: 'Frantsuz Club', description: 'Основной зал' }
  ])
})

// Получить статистику (проверка подключения)
router.get('/stats', async (req, res) => {
  res.json({
    status: 'ok',
    service: 'Frantsuz Club Bot API',
    version: '1.0.0'
  })
})

export default router

