import express from 'express'
import { bookingZoneController } from '../controllers/booking/bookingZone.controller'
import { bookingTableController } from '../controllers/booking/bookingTable.controller'
import { bookingController } from '../controllers/booking/booking.controller'

const router = express.Router()

// Роуты для зон бронирования
router.get('/zones', bookingZoneController.getAllZones)
router.get('/zones/:id', bookingZoneController.getZoneById)
router.post('/zones', bookingZoneController.createZone)
router.put('/zones/:id', bookingZoneController.updateZone)
router.delete('/zones/:id', bookingZoneController.deleteZone)

// Роуты для столов
router.get('/zones/:zoneId/tables', bookingTableController.getTablesByZone)
router.post('/tables', bookingTableController.createTable)
router.put('/tables/:id', bookingTableController.updateTable)
router.delete('/tables/:id', bookingTableController.deleteTable)

// Роуты для бронирований
router.post('/reservations', bookingController.createBooking)
router.get('/reservations', bookingController.getBookingsByDate)
router.put('/reservations/:id/status', bookingController.updateBookingStatus)
router.put('/reservations/:id/cancel', bookingController.cancelBooking)

export default router
