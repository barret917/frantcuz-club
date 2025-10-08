import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// Получить все настольные игры
router.get('/', async (req, res) => {
  try {
    console.log('🚀 Backend: Получен запрос на получение настольных игр')
    
    const boardGames = await prisma.boardGame.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' }
    })
    
    console.log('✅ Backend: Настольные игры получены:', boardGames)
    
    res.json({
      success: true,
      data: boardGames,
      message: 'Настольные игры успешно загружены'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при получении настольных игр:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при получении настольных игр'
    })
  }
})

// Создать новую настольную игру
router.post('/', async (req, res) => {
  try {
    console.log('🚀 Backend: Получен запрос на создание настольной игры:', req.body)
    
    const {
      name,
      description,
      price,
      duration,
      players,
      difficulty,
      category,
      imageUrl,
      sortOrder
    } = req.body
    
    // Валидация обязательных полей
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        error: 'Название и цена обязательны'
      })
    }
    
    const boardGameData = {
      name,
      description: description || null,
      price: parseFloat(price),
      duration: duration || null,
      players: players || null,
      difficulty: difficulty || null,
      category: category || null,
      imageUrl: imageUrl || null,
      sortOrder: sortOrder ? parseInt(sortOrder) : 0
    }
    
    console.log('💾 Backend: Создаем настольную игру в БД:', boardGameData)
    
    const boardGame = await prisma.boardGame.create({
      data: boardGameData
    })
    
    console.log('✅ Backend: Настольная игра создана в БД:', boardGame)
    
    res.status(201).json({
      success: true,
      data: boardGame,
      message: 'Настольная игра успешно создана'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при создании настольной игры:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при создании настольной игры'
    })
  }
})

// Обновить настольную игру
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('🚀 Backend: Получен запрос на обновление настольной игры ID:', id, req.body)
    
    const {
      name,
      description,
      price,
      duration,
      players,
      difficulty,
      category,
      imageUrl,
      sortOrder,
      isActive
    } = req.body
    
    // Валидация обязательных полей
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        error: 'Название и цена обязательны'
      })
    }
    
    const updateData = {
      name,
      description: description || null,
      price: parseFloat(price),
      duration: duration || null,
      players: players || null,
      difficulty: difficulty || null,
      category: category || null,
      imageUrl: imageUrl || null,
      sortOrder: sortOrder ? parseInt(sortOrder) : 0,
      isActive: isActive !== undefined ? isActive : true
    }
    
    console.log('💾 Backend: Обновляем настольную игру в БД:', updateData)
    
    const boardGame = await prisma.boardGame.update({
      where: { id: parseInt(id) },
      data: updateData
    })
    
    console.log('✅ Backend: Настольная игра обновлена в БД:', boardGame)
    
    res.json({
      success: true,
      data: boardGame,
      message: 'Настольная игра успешно обновлена'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при обновлении настольной игры:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при обновлении настольной игры'
    })
  }
})

// Удалить настольную игру
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('🚀 Backend: Получен запрос на удаление настольной игры ID:', id)
    
    await prisma.boardGame.delete({
      where: { id: parseInt(id) }
    })
    
    console.log('✅ Backend: Настольная игра удалена из БД')
    
    res.json({
      success: true,
      message: 'Настольная игра успешно удалена'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при удалении настольной игры:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при удалении настольной игры'
    })
  }
})

export default router 