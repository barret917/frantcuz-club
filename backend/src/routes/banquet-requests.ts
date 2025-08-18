import { Router } from 'express'
import { BanquetRequestsController } from '../controllers/banquet-requests.controller'

const router = Router()
const controller = new BanquetRequestsController()

// Создание новой заявки на банкет (публичный доступ)
router.post('/', controller.create.bind(controller))

// Получение всех заявок (для админки)
router.get('/', controller.getAll.bind(controller))

// Получение заявки по ID
router.get('/:id', controller.getById.bind(controller))

// Обновление статуса заявки
router.patch('/:id/status', controller.updateStatus.bind(controller))

// Удаление заявки
router.delete('/:id', controller.delete.bind(controller))

// Получение статистики по заявкам
router.get('/stats/overview', controller.getStats.bind(controller))

export default router 