import { Router } from 'express'
import { KaraokeController } from '../controllers/karaoke.controller'

const router = Router()
const karaokeController = new KaraokeController()

// Маршруты для услуг караоке
router.get('/services', karaokeController.getAllServices)
router.get('/services/:id', karaokeController.getService)
router.post('/services', karaokeController.createService)
router.put('/services/:id', karaokeController.updateService)
router.delete('/services/:id', karaokeController.deleteService)

// Маршруты для настроек караоке
router.get('/settings', karaokeController.getSettings)
router.put('/settings', karaokeController.updateSettings)

export default router 