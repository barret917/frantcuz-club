import express from 'express'
import { 
  createHall, 
  getHalls, 
  getHallById, 
  updateHall, 
  deleteHall 
} from '../controllers/hall.controller'

const router = express.Router()

// Создание зала
router.post('/', createHall)

// Получение всех залов
router.get('/', getHalls)

// Получение зала по ID
router.get('/:id', getHallById)

// Обновление зала
router.put('/:id', updateHall)

// Удаление зала
router.delete('/:id', deleteHall)

export default router 