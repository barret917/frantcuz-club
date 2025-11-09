import { Router } from 'express'
import { pageZoneBindingController } from '../controllers/booking/pageZoneBinding.controller'

const router = Router()

// Получить все привязки
router.get('/', pageZoneBindingController.getAllBindings)

// Получить привязку по маршруту страницы
router.get('/:pageRoute', pageZoneBindingController.getBindingByPageRoute)

// Создать или обновить привязку
router.post('/', pageZoneBindingController.upsertBinding)

// Удалить привязку
router.delete('/:id', pageZoneBindingController.deleteBinding)

export default router

