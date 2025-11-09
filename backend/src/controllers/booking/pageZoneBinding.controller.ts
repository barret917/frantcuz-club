import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const pageZoneBindingController = {
  // Получить все привязки
  async getAllBindings(req: Request, res: Response) {
    try {
      const bindings = await prisma.pageZoneBinding.findMany({
        include: {
          zone: {
            select: {
              id: true,
              name: true,
              type: true,
              isActive: true
            }
          }
        },
        orderBy: { pageRoute: 'asc' }
      })

      res.json(bindings)
    } catch (error) {
      console.error('Error fetching page zone bindings:', error)
      res.status(500).json({ error: 'Failed to fetch page zone bindings' })
    }
  },

  // Получить привязку по маршруту страницы
  async getBindingByPageRoute(req: Request, res: Response) {
    try {
      const { pageRoute } = req.params

      const binding = await prisma.pageZoneBinding.findUnique({
        where: { pageRoute },
        include: {
          zone: {
            include: {
              tables: {
                where: { isActive: true },
                orderBy: { id: 'asc' }
              }
            }
          }
        }
      })

      if (!binding) {
        return res.status(404).json({ error: 'Binding not found' })
      }

      res.json(binding)
    } catch (error) {
      console.error('Error fetching page zone binding:', error)
      res.status(500).json({ error: 'Failed to fetch page zone binding' })
    }
  },

  // Создать или обновить привязку
  async upsertBinding(req: Request, res: Response) {
    try {
      const { pageRoute, zoneId } = req.body

      if (!pageRoute || !zoneId) {
        return res.status(400).json({ error: 'pageRoute and zoneId are required' })
      }

      // Проверяем существует ли зона
      const zone = await prisma.bookingZone.findUnique({
        where: { id: parseInt(zoneId) }
      })

      if (!zone) {
        return res.status(404).json({ error: 'Zone not found' })
      }

      // Используем upsert для создания или обновления
      const binding = await prisma.pageZoneBinding.upsert({
        where: { pageRoute },
        update: {
          zoneId: parseInt(zoneId),
          updatedAt: new Date()
        },
        create: {
          pageRoute,
          zoneId: parseInt(zoneId)
        },
        include: {
          zone: {
            select: {
              id: true,
              name: true,
              type: true,
              isActive: true
            }
          }
        }
      })

      res.json(binding)
    } catch (error) {
      console.error('Error upserting page zone binding:', error)
      res.status(500).json({ error: 'Failed to upsert page zone binding' })
    }
  },

  // Удалить привязку
  async deleteBinding(req: Request, res: Response) {
    try {
      const { id } = req.params

      await prisma.pageZoneBinding.delete({
        where: { id: parseInt(id) }
      })

      res.json({ message: 'Binding deleted successfully' })
    } catch (error) {
      console.error('Error deleting page zone binding:', error)
      res.status(500).json({ error: 'Failed to delete page zone binding' })
    }
  }
}

