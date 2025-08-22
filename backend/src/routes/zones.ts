import express from 'express'
import { zonesController } from '../controllers/zones.controller'
import { createZone } from '../controllers/zone.controller'

const router = express.Router()

// Создать зону
router.post('/', createZone)

// Получить все зоны
router.get('/', zonesController.getZones)

// Получить зону по ID
router.get('/:id', zonesController.getZoneById)

// Получить элементы зоны по типу (более специфичный маршрут)
router.get('/type/:zoneType/items', zonesController.getZoneItemsByType)

// Получить элементы конкретной зоны по ID
router.get('/:zoneId/items', zonesController.getZoneItems)

// Создать элементы зоны
router.post('/items', zonesController.createZoneItems)

// Обновить элемент зоны
router.put('/items/:id', zonesController.updateZoneItem)

// Удалить элемент зоны
router.delete('/items/:id', zonesController.deleteZoneItem)

// Универсальное бронирование
router.post('/reservations', zonesController.createReservation)

export default router 