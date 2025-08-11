import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class KaraokeController {
  // Получить все услуги караоке
  async getAllServices(req: Request, res: Response) {
    try {
      const services = await prisma.karaokeService.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' }
      })
      res.json(services)
    } catch (error) {
      console.error('Ошибка при получении услуг караоке:', error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  // Получить услугу караоке по ID
  async getService(req: Request, res: Response) {
    try {
      const { id } = req.params
      const service = await prisma.karaokeService.findUnique({
        where: { id: parseInt(id) }
      })
      
      if (!service) {
        return res.status(404).json({ error: 'Услуга не найдена' })
      }
      
      res.json(service)
    } catch (error) {
      console.error('Ошибка при получении услуги караоке:', error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  // Создать новую услугу караоке
  async createService(req: Request, res: Response) {
    try {
      const { name, type, weekdayPrice, weekendPrice, description, imageUrl, isActive, sortOrder } = req.body

      // Проверяем уникальность типа
      const existingService = await prisma.karaokeService.findUnique({
        where: { type }
      })

      if (existingService) {
        return res.status(400).json({ error: 'Услуга с таким типом уже существует' })
      }

      const service = await prisma.karaokeService.create({
        data: {
          name,
          type,
          weekdayPrice: parseFloat(weekdayPrice),
          weekendPrice: parseFloat(weekendPrice),
          description,
          imageUrl,
          isActive: isActive !== undefined ? isActive : true,
          sortOrder: sortOrder || 0
        }
      })

      res.status(201).json(service)
    } catch (error) {
      console.error('Ошибка при создании услуги караоке:', error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  // Обновить услугу караоке
  async updateService(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name, type, weekdayPrice, weekendPrice, description, imageUrl, isActive, sortOrder } = req.body

      // Проверяем существование услуги
      const existingService = await prisma.karaokeService.findUnique({
        where: { id: parseInt(id) }
      })

      if (!existingService) {
        return res.status(404).json({ error: 'Услуга не найдена' })
      }

      // Если тип изменяется, проверяем уникальность
      if (type && type !== existingService.type) {
        const duplicateService = await prisma.karaokeService.findUnique({
          where: { type }
        })

        if (duplicateService) {
          return res.status(400).json({ error: 'Услуга с таким типом уже существует' })
        }
      }

      const service = await prisma.karaokeService.update({
        where: { id: parseInt(id) },
        data: {
          name,
          type,
          weekdayPrice: weekdayPrice ? parseFloat(weekdayPrice) : undefined,
          weekendPrice: weekendPrice ? parseFloat(weekendPrice) : undefined,
          description,
          imageUrl,
          isActive,
          sortOrder
        }
      })

      res.json(service)
    } catch (error) {
      console.error('Ошибка при обновлении услуги караоке:', error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  // Удалить услугу караоке
  async deleteService(req: Request, res: Response) {
    try {
      const { id } = req.params
      
      const service = await prisma.karaokeService.findUnique({
        where: { id: parseInt(id) }
      })

      if (!service) {
        return res.status(404).json({ error: 'Услуга не найдена' })
      }

      await prisma.karaokeService.delete({
        where: { id: parseInt(id) }
      })

      res.json({ message: 'Услуга успешно удалена' })
    } catch (error) {
      console.error('Ошибка при удалении услуги караоке:', error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  // Получить настройки караоке
  async getSettings(req: Request, res: Response) {
    try {
      let settings = await prisma.karaokeSettings.findFirst()
      
      if (!settings) {
        // Создаем настройки по умолчанию
        settings = await prisma.karaokeSettings.create({
          data: {
            maxVipGuests: 15,
            baseVipPrice: 21000,
            additionalGuestPrice: 3500,
            depositPolicy: "В случае неиспользования суммы депозита, денежные средства не возвращаются."
          }
        })
      }
      
      res.json(settings)
    } catch (error) {
      console.error('Ошибка при получении настроек караоке:', error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }

  // Обновить настройки караоке
  async updateSettings(req: Request, res: Response) {
    try {
      const { maxVipGuests, baseVipPrice, additionalGuestPrice, depositPolicy, isActive } = req.body

      let settings = await prisma.karaokeSettings.findFirst()
      
      if (settings) {
        // Обновляем существующие настройки
        settings = await prisma.karaokeSettings.update({
          where: { id: settings.id },
          data: {
            maxVipGuests: maxVipGuests ? parseInt(maxVipGuests) : undefined,
            baseVipPrice: baseVipPrice ? parseFloat(baseVipPrice) : undefined,
            additionalGuestPrice: additionalGuestPrice ? parseFloat(additionalGuestPrice) : undefined,
            depositPolicy,
            isActive
          }
        })
      } else {
        // Создаем новые настройки
        settings = await prisma.karaokeSettings.create({
          data: {
            maxVipGuests: maxVipGuests ? parseInt(maxVipGuests) : 15,
            baseVipPrice: baseVipPrice ? parseFloat(baseVipPrice) : 21000,
            additionalGuestPrice: additionalGuestPrice ? parseFloat(additionalGuestPrice) : 3500,
            depositPolicy: depositPolicy || "В случае неиспользования суммы депозита, денежные средства не возвращаются."
          }
        })
      }
      
      res.json(settings)
    } catch (error) {
      console.error('Ошибка при обновлении настроек караоке:', error)
      res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
  }
} 