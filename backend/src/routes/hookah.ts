import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// Получить все тарифы кальяна
router.get('/', async (req, res) => {
  try {
    console.log('🚀 Backend: Получен запрос на получение тарифов кальяна')
    
    const hookahs = await prisma.hookah.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' }
    })
    
    console.log('✅ Backend: Тарифы кальяна получены:', hookahs)
    
    res.json({
      success: true,
      data: hookahs,
      message: 'Тарифы кальяна успешно загружены'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при получении тарифов кальяна:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при получении тарифов кальяна'
    })
  }
})

// Создать новый тариф кальяна
router.post('/', async (req, res) => {
  try {
    console.log('🚀 Backend: Получен запрос на создание тарифа кальяна:', req.body)
    
    const {
      name,
      description,
      price,
      features,
      sortOrder
    } = req.body
    
    // Валидация обязательных полей
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        error: 'Название и цена обязательны'
      })
    }
    
    const hookahData = {
      name,
      description: description || null,
      price: parseFloat(price),
      features: features || [],
      sortOrder: sortOrder ? parseInt(sortOrder) : 0
    }
    
    console.log('💾 Backend: Создаем тариф кальяна в БД:', hookahData)
    
    const hookah = await prisma.hookah.create({
      data: hookahData
    })
    
    console.log('✅ Backend: Тариф кальяна создан в БД:', hookah)
    
    res.status(201).json({
      success: true,
      data: hookah,
      message: 'Тариф кальяна успешно создан'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при создании тарифа кальяна:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при создании тарифа кальяна'
    })
  }
})

// Обновить тариф кальяна
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('🚀 Backend: Получен запрос на обновление тарифа кальяна ID:', id, req.body)
    
    const {
      name,
      description,
      price,
      features,
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
      features: features || [],
      sortOrder: sortOrder ? parseInt(sortOrder) : 0,
      isActive: isActive !== undefined ? isActive : true
    }
    
    console.log('💾 Backend: Обновляем тариф кальяна в БД:', updateData)
    
    const hookah = await prisma.hookah.update({
      where: { id: parseInt(id) },
      data: updateData
    })
    
    console.log('✅ Backend: Тариф кальяна обновлен в БД:', hookah)
    
    res.json({
      success: true,
      data: hookah,
      message: 'Тариф кальяна успешно обновлен'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при обновлении тарифа кальяна:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при обновлении тарифа кальяна'
    })
  }
})

// Удалить тариф кальяна
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('🚀 Backend: Получен запрос на удаление тарифа кальяна ID:', id)
    
    await prisma.hookah.delete({
      where: { id: parseInt(id) }
    })
    
    console.log('✅ Backend: Тариф кальяна удален из БД')
    
    res.json({
      success: true,
      message: 'Тариф кальяна успешно удален'
    })
  } catch (error) {
    console.error('❌ Backend: Ошибка при удалении тарифа кальяна:', error)
    res.status(500).json({
      success: false,
      error: 'Ошибка при удалении тарифа кальяна'
    })
  }
})

export default router 