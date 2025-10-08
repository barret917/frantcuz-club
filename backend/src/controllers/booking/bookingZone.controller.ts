import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const bookingZoneController = {
  // Получить все зоны бронирования
  async getAllZones(req: Request, res: Response) {
    try {
      const zones = await prisma.bookingZone.findMany({
        where: { isActive: true },
        include: {
          tables: {
            where: { isActive: true },
            orderBy: { id: 'asc' }
          },
          _count: {
            select: {
              bookings: {
                where: {
                  status: {
                    in: ['pending', 'confirmed']
                  }
                }
              }
            }
          }
        },
        orderBy: { id: 'asc' }
      })

      res.json(zones)
    } catch (error) {
      console.error('Error fetching booking zones:', error)
      res.status(500).json({ error: 'Failed to fetch booking zones' })
    }
  },

  // Получить зону по ID
  async getZoneById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const zone = await prisma.bookingZone.findUnique({
        where: { id: parseInt(id) },
        include: {
          tables: {
            where: { isActive: true },
            orderBy: { id: 'asc' }
          }
        }
      })

      if (!zone) {
        return res.status(404).json({ error: 'Zone not found' })
      }

      res.json(zone)
    } catch (error) {
      console.error('Error fetching booking zone:', error)
      res.status(500).json({ error: 'Failed to fetch booking zone' })
    }
  },

  // Создать новую зону
  async createZone(req: Request, res: Response) {
    try {
      const { name, type, description, openTime, closeTime, pricePerHour, imageUrl } = req.body

      const zone = await prisma.bookingZone.create({
        data: {
          name,
          type,
          description,
          openTime: openTime || '10:00',
          closeTime: closeTime || '22:00',
          pricePerHour,
          imageUrl
        }
      })

      res.status(201).json(zone)
    } catch (error) {
      console.error('Error creating booking zone:', error)
      res.status(500).json({ error: 'Failed to create booking zone' })
    }
  },

  // Обновить зону
  async updateZone(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updateData = req.body

      const zone = await prisma.bookingZone.update({
        where: { id: parseInt(id) },
        data: updateData
      })

      res.json(zone)
    } catch (error) {
      console.error('Error updating booking zone:', error)
      res.status(500).json({ error: 'Failed to update booking zone' })
    }
  },

  // Удалить зону (мягкое удаление)
  async deleteZone(req: Request, res: Response) {
    try {
      const { id } = req.params

      await prisma.bookingZone.update({
        where: { id: parseInt(id) },
        data: { isActive: false }
      })

      res.json({ message: 'Zone deleted successfully' })
    } catch (error) {
      console.error('Error deleting booking zone:', error)
      res.status(500).json({ error: 'Failed to delete booking zone' })
    }
  }
}
