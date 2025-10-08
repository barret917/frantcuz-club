import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class CarouselPhotosController {
  // Получить все фотографии карусели
  async getAllPhotos(req: Request, res: Response) {
    try {
      const { page } = req.query
      
      const where: any = { isActive: true }
      if (page) {
        where.page = page
      }
      
      const photos = await prisma.carouselPhoto.findMany({
        where,
        orderBy: { sortOrder: 'asc' }
      })
      
      res.json({
        success: true,
        data: photos
      })
    } catch (error) {
      console.error('Ошибка при получении фотографий карусели:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении фотографий'
      })
    }
  }

  // Получить фотографию по ID
  async getPhoto(req: Request, res: Response) {
    try {
      const { id } = req.params
      
      const photo = await prisma.carouselPhoto.findUnique({
        where: { id: parseInt(id) }
      })
      
      if (!photo) {
        return res.status(404).json({
          success: false,
          error: 'Фотография не найдена'
        })
      }
      
      res.json({
        success: true,
        data: photo
      })
    } catch (error) {
      console.error('Ошибка при получении фотографии:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении фотографии'
      })
    }
  }

  // Создать новую фотографию
  async createPhoto(req: Request, res: Response) {
    try {
      const {
        title,
        description,
        imageUrl,
        page,
        sortOrder
      } = req.body
      
      if (!title || !imageUrl || !page) {
        return res.status(400).json({
          success: false,
          error: 'Название, URL изображения и страница обязательны'
        })
      }
      
      const photo = await prisma.carouselPhoto.create({
        data: {
          title,
          description: description || null,
          imageUrl,
          page,
          sortOrder: sortOrder || 0
        }
      })
      
      res.status(201).json({
        success: true,
        data: photo,
        message: 'Фотография успешно создана'
      })
    } catch (error) {
      console.error('Ошибка при создании фотографии:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при создании фотографии'
      })
    }
  }

  // Обновить фотографию
  async updatePhoto(req: Request, res: Response) {
    try {
      const { id } = req.params
      const {
        title,
        description,
        imageUrl,
        page,
        sortOrder,
        isActive
      } = req.body
      
      const photo = await prisma.carouselPhoto.update({
        where: { id: parseInt(id) },
        data: {
          title,
          description,
          imageUrl,
          page,
          sortOrder,
          isActive
        }
      })
      
      res.json({
        success: true,
        data: photo,
        message: 'Фотография успешно обновлена'
      })
    } catch (error) {
      console.error('Ошибка при обновлении фотографии:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при обновлении фотографии'
      })
    }
  }

  // Удалить фотографию
  async deletePhoto(req: Request, res: Response) {
    try {
      const { id } = req.params
      
      await prisma.carouselPhoto.delete({
        where: { id: parseInt(id) }
      })
      
      res.json({
        success: true,
        message: 'Фотография успешно удалена'
      })
    } catch (error) {
      console.error('Ошибка при удалении фотографии:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при удалении фотографии'
      })
    }
  }
} 