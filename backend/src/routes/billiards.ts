import { Router } from 'express'
import { BilliardsController } from '../controllers/billiards.controller'

const router = Router()
const billiardsController = new BilliardsController()

// Маршруты для услуг бильярда
router.get('/services', billiardsController.getAllServices)
router.get('/services/:id', billiardsController.getService)
router.post('/services', billiardsController.createService)
router.put('/services/:id', billiardsController.updateService)
router.delete('/services/:id', billiardsController.deleteService)

// Маршруты для настроек бильярда
router.get('/settings', billiardsController.getSettings)
router.put('/settings', billiardsController.updateSettings)

export default router 