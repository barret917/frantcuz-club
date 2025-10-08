import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const eventTableController = {
  // Получить все столы зоны
  async getTablesByZone(req: Request, res: Response) {
    try {
      const { zoneId } = req.params
      
      const tables = await prisma.eventTable.findMany({
        where: { 
          zoneId: parseInt(zoneId),
          isActive: true
        },
        include: {
          tickets: {
            where: { status: 'sold' }
          }
        },
        orderBy: { id: 'asc' }
      })
      
      res.json({
        success: true,
        data: tables
      })
    } catch (error) {
      console.error('Ошибка при получении столов:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при получении столов'
      })
    }
  },

  // Создать новый стол
  async createTable(req: Request, res: Response) {
    try {
      const {
        zoneId,
        name,
        x,
        y,
        width,
        height,
        seats = 4
      } = req.body
      
      // Валидация обязательных полей
      if (!zoneId || !name || x === undefined || y === undefined || width === undefined || height === undefined) {
        return res.status(400).json({
          success: false,
          error: 'Не все обязательные поля заполнены'
        })
      }
      
      // Проверяем, существует ли зона
      const zone = await prisma.eventZone.findUnique({
        where: { id: parseInt(zoneId) },
        include: {
          tables: {
            where: { isActive: true }
          }
        }
      })
      
      if (!zone) {
        return res.status(404).json({
          success: false,
          error: 'Зона не найдена'
        })
      }
      
      // Проверяем, не превышает ли добавление стола maxSeats зоны (если указано)
      if (zone.maxSeats) {
        const currentSeatsInZone = zone.tables.reduce((sum, table) => sum + table.seats, 0)
        const newTotalSeats = currentSeatsInZone + parseInt(seats)
        
        if (newTotalSeats > zone.maxSeats) {
          return res.status(400).json({
            success: false,
            error: `Превышено максимальное количество мест в зоне. Доступно: ${zone.maxSeats - currentSeatsInZone}, требуется: ${parseInt(seats)}`
          })
        }
      }
      
      const tableData = {
        zoneId: parseInt(zoneId),
        name,
        x: parseFloat(x),
        y: parseFloat(y),
        width: parseFloat(width),
        height: parseFloat(height),
        seats: parseInt(seats)
      }
      
      const table = await prisma.eventTable.create({
        data: tableData
      })
      
      res.status(201).json({
        success: true,
        data: table,
        message: 'Стол успешно создан'
      })
    } catch (error) {
      console.error('Ошибка при создании стола:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при создании стола'
      })
    }
  },

  // Обновить стол
  async updateTable(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { tables, ...updateData } = req.body
      
      // Проверяем валидность ID
      if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({
          success: false,
          error: 'Неверный ID стола'
        })
      }
      
      // Преобразуем числовые поля
      if (updateData.x !== undefined) {
        updateData.x = parseFloat(updateData.x)
      }
      if (updateData.y !== undefined) {
        updateData.y = parseFloat(updateData.y)
      }
      if (updateData.width !== undefined) {
        updateData.width = parseFloat(updateData.width)
      }
      if (updateData.height !== undefined) {
        updateData.height = parseFloat(updateData.height)
      }
      if (updateData.seats !== undefined) {
        updateData.seats = parseInt(updateData.seats)
        
        // Если меняется количество мест, проверяем:
        // 1. Не меньше ли новое значение, чем уже проданные билеты
        // 2. Не превышает ли maxSeats зоны
        const table = await prisma.eventTable.findUnique({
          where: { id: parseInt(id) },
          include: {
            zone: {
              include: {
                tables: {
                  where: { isActive: true, id: { not: parseInt(id) } }
                }
              }
            },
            tickets: {
              where: {
                OR: [
                  { status: 'sold' },
                  { status: 'available', paymentStatus: 'pending' }
                ]
              }
            }
          }
        })
        
        if (!table) {
          return res.status(404).json({
            success: false,
            error: 'Стол не найден'
          })
        }
        
        // Проверяем, что новое количество мест не меньше проданных билетов
        const soldTicketsCount = table.tickets.length
        if (updateData.seats < soldTicketsCount) {
          return res.status(400).json({
            success: false,
            error: `Невозможно уменьшить количество мест до ${updateData.seats}. Уже продано билетов: ${soldTicketsCount}`
          })
        }
        
        // Проверяем maxSeats зоны (если указано)
        if (table.zone.maxSeats) {
          const otherTablesSeats = table.zone.tables.reduce((sum, t) => sum + t.seats, 0)
          const newTotalSeats = otherTablesSeats + updateData.seats
          
          if (newTotalSeats > table.zone.maxSeats) {
            return res.status(400).json({
              success: false,
              error: `Превышено максимальное количество мест в зоне (${table.zone.maxSeats}). Текущий итог будет: ${newTotalSeats}`
            })
          }
        }
      }
      
      const table = await prisma.eventTable.update({
        where: { id: parseInt(id) },
        data: updateData
      })
      
      res.json({
        success: true,
        data: table,
        message: 'Стол успешно обновлен'
      })
    } catch (error) {
      console.error('Ошибка при обновлении стола:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при обновлении стола'
      })
    }
  },

  // Удалить стол
  async deleteTable(req: Request, res: Response) {
    try {
      const { id } = req.params
      
      // Сначала удаляем все связанные билеты
      await prisma.eventTicket.deleteMany({
        where: { tableId: parseInt(id) }
      })
      
      // Затем удаляем сам стол
      await prisma.eventTable.delete({
        where: { id: parseInt(id) }
      })
      
      res.json({
        success: true,
        message: 'Стол успешно удален'
      })
    } catch (error) {
      console.error('Ошибка при удалении стола:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при удалении стола'
      })
    }
  },

  // Массовое обновление столов (для RND)
  async updateTablesBatch(req: Request, res: Response) {
    try {
      const { tables } = req.body
      
      if (!Array.isArray(tables)) {
        return res.status(400).json({
          success: false,
          error: 'Неверный формат данных'
        })
      }
      
      const updatePromises = tables.map(async table => {
        try {
          // Проверяем валидность данных
          if (!table.id || isNaN(parseFloat(table.x)) || isNaN(parseFloat(table.y)) || 
              isNaN(parseFloat(table.width)) || isNaN(parseFloat(table.height)) || 
              isNaN(parseInt(table.seats))) {
            console.error(`Неверные данные для стола ${table.id}:`, table)
            return null
          }

          return await prisma.eventTable.update({
            where: { id: table.id },
            data: {
              x: parseFloat(table.x),
              y: parseFloat(table.y),
              width: parseFloat(table.width),
              height: parseFloat(table.height),
              name: table.name,
              seats: parseInt(table.seats),
              isActive: table.isActive
            }
          })
        } catch (error) {
          console.error(`Ошибка при обновлении стола ${table.id}:`, error)
          return null
        }
      })
      
      const updatedTables = await Promise.all(updatePromises)
      const validTables = updatedTables.filter(table => table !== null)
      
      res.json({
        success: true,
        data: validTables,
        message: 'Столы успешно обновлены'
      })
    } catch (error) {
      console.error('Ошибка при массовом обновлении столов:', error)
      res.status(500).json({
        success: false,
        error: 'Ошибка сервера при обновлении столов'
      })
    }
  }
}


