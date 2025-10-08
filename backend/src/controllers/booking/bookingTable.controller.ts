import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const bookingTableController = {
  // Получить все столы зоны
  async getTablesByZone(req: Request, res: Response) {
    try {
      const { zoneId } = req.params
      const tables = await prisma.bookingTable.findMany({
        where: { 
          zoneId: parseInt(zoneId),
          isActive: true
        },
        orderBy: { id: 'asc' }
      })

      res.json(tables)
    } catch (error) {
      console.error('Error fetching tables:', error)
      res.status(500).json({ error: 'Failed to fetch tables' })
    }
  },

  // Создать новый стол
  async createTable(req: Request, res: Response) {
    try {
      const { zoneId, name, x, y, width, height, seats } = req.body

      const table = await prisma.bookingTable.create({
        data: {
          zoneId: parseInt(zoneId),
          name,
          x,
          y,
          width,
          height,
          seats
        }
      })

      res.status(201).json(table)
    } catch (error) {
      console.error('Error creating table:', error)
      res.status(500).json({ error: 'Failed to create table' })
    }
  },

  // Обновить стол
  async updateTable(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updateData = req.body

      const table = await prisma.bookingTable.update({
        where: { id: parseInt(id) },
        data: updateData
      })

      res.json(table)
    } catch (error) {
      console.error('Error updating table:', error)
      res.status(500).json({ error: 'Failed to update table' })
    }
  },

  // Удалить стол
  async deleteTable(req: Request, res: Response) {
    try {
      const { id } = req.params

      await prisma.bookingTable.update({
        where: { id: parseInt(id) },
        data: { isActive: false }
      })

      res.json({ message: 'Table deleted successfully' })
    } catch (error) {
      console.error('Error deleting table:', error)
      res.status(500).json({ error: 'Failed to delete table' })
    }
  }
}
