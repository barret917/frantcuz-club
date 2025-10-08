import { Router } from 'express'
import { eventController } from '../controllers/event-tickets/event.controller'
import { eventZoneController } from '../controllers/event-tickets/eventZone.controller'
import { eventTableController } from '../controllers/event-tickets/eventTable.controller'
import { eventTicketController } from '../controllers/event-tickets/eventTicket.controller'

const router = Router()

// ===== РОУТЫ ДЛЯ МЕРОПРИЯТИЙ =====
router.get('/events', eventController.getAllEvents)
router.get('/events/:id', eventController.getEventById)
router.post('/events', eventController.createEvent)
router.put('/events/:id', eventController.updateEvent)
router.delete('/events/:id', eventController.deleteEvent)

// ===== РОУТЫ ДЛЯ ЗОН МЕРОПРИЯТИЙ =====
router.get('/events/:eventId/zones', eventZoneController.getEventZones)
router.post('/zones', eventZoneController.createEventZone)
router.put('/zones/:id', eventZoneController.updateEventZone)
router.delete('/zones/:id', eventZoneController.deleteEventZone)

// ===== РОУТЫ ДЛЯ СТОЛОВ =====
router.get('/zones/:zoneId/tables', eventTableController.getTablesByZone)
router.post('/tables', eventTableController.createTable)
router.put('/tables/batch', eventTableController.updateTablesBatch)
router.put('/tables/:id', eventTableController.updateTable)
router.delete('/tables/:id', eventTableController.deleteTable)

// ===== РОУТЫ ДЛЯ БИЛЕТОВ =====
router.get('/events/:eventId/tickets', eventTicketController.getTicketsByEvent)
router.get('/tickets/:ticketNumber', eventTicketController.getTicketByNumber)
router.post('/tickets', eventTicketController.createTicket)
router.post('/tickets/purchase', eventTicketController.purchaseTicket)
router.post('/tickets/:ticketId/send-email', eventTicketController.sendTicketToEmail)
router.put('/tickets/:ticketNumber/use', eventTicketController.useTicket)
router.put('/tickets/:id/cancel', eventTicketController.cancelTicket)
router.get('/events/:eventId/stats', eventTicketController.getSalesStats)

export default router
