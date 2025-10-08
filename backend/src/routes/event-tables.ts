import { Router } from 'express'
import { eventTableController } from '../controllers/event-tickets/eventTable.controller'

const router = Router()

// Получить все столы зоны
router.get('/events/zones/:zoneId/tables', eventTableController.getTablesByZone)

// Создать новый стол
router.post('/events/tables', eventTableController.createTable)

// Обновить стол
router.put('/events/tables/:id', eventTableController.updateTable)

// Удалить стол
router.delete('/events/tables/:id', eventTableController.deleteTable)

// Массовое обновление столов
router.put('/events/tables/batch', eventTableController.updateTablesBatch)

export default router
