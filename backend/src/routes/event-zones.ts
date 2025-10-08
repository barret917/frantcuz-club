import { Router } from 'express'
import { eventZoneController } from '../controllers/event-tickets/eventZone.controller'

const router = Router()

// Получить все зоны мероприятия
router.get('/events/:eventId/zones', eventZoneController.getEventZones)

// Создать новую зону мероприятия
router.post('/events/:eventId/zones', eventZoneController.createEventZone)

// Обновить зону мероприятия
router.put('/events/:eventId/zones/:zoneId', eventZoneController.updateEventZone)

// Удалить зону мероприятия
router.delete('/events/:eventId/zones/:zoneId', eventZoneController.deleteEventZone)

// Получить статистику зоны
router.get('/events/:eventId/zones/:zoneId/stats', eventZoneController.getZoneStats)

export default router


