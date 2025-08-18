import express from 'express'
import { tablesController } from '../controllers/tables.controller'

const router = express.Router()

// Получить все элементы зон с их статусом
router.get('/zones/items', tablesController.getAllZoneItems)

// Получить свободные столы на определенную дату и время
router.get('/tables/available', tablesController.getAvailableTables)

// Получить бронирования столов
router.get('/tables/bookings', tablesController.getTableBookings)

// Создать бронирование стола
router.post('/tables/bookings', tablesController.createTableBooking)

// Обновить статус бронирования
router.patch('/tables/bookings/:id/status', tablesController.updateBookingStatus)

// Отменить бронирование
router.delete('/tables/bookings/:id', tablesController.cancelBooking)

// Получить статистику по столам
router.get('/tables/stats', tablesController.getTablesStats)

export default router 