import { Request, Response } from 'express'
import { prisma } from '../prisma'

export const zonesController = {
  // Получить все зоны
  async getZones(req: Request, res: Response) {
    try {
      const zones = await prisma.zone.findMany({
        orderBy: { id: 'asc' }
      })

      res.json({
        success: true,
        data: zones
      })
    } catch (error) {
      console.error('Error getting zones:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при получении зон'
      })
    }
  },

  // Получить зону по ID
  async getZoneById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const zone = await prisma.zone.findUnique({
        where: { id: Number(id) },
        include: {
          items: {
            where: { isActive: true },
            orderBy: [
              { floor: 'asc' },
              { label: 'asc' }
            ]
          }
        }
      })

      if (!zone) {
        return res.status(404).json({
          success: false,
          message: 'Зона не найдена'
        })
      }

      res.json({
        success: true,
        data: zone
      })
    } catch (error) {
      console.error('Error getting zone by ID:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при получении зоны'
      })
    }
  },

  // Получить элементы зоны по типу
  async getZoneItemsByType(req: Request, res: Response) {
    try {
      const { zoneType } = req.params

      const items = await prisma.zoneItem.findMany({
        where: {
          zone: {
            type: zoneType as any
          },
          isActive: true
        },
        include: {
          zone: true
        },
        orderBy: [
          { floor: 'asc' },
          { label: 'asc' }
        ]
      })

      // Добавляем статус доступности
      const itemsWithStatus = items.map((item: any) => ({
        ...item,
        isAvailable: true,
        activeReservations: 0
      }))

      res.json({
        success: true,
        data: itemsWithStatus
      })
    } catch (error) {
      console.error('Error getting zone items by type:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при получении элементов зоны'
      })
    }
  },

  // Получить элементы конкретной зоны
  async getZoneItems(req: Request, res: Response) {
    try {
      const { zoneId } = req.params

      const items = await prisma.zoneItem.findMany({
        where: {
          zoneId: Number(zoneId),
          isActive: true
        },
        orderBy: [
          { floor: 'asc' },
          { label: 'asc' }
        ]
      })

      res.json({
        success: true,
        data: items
      })
    } catch (error) {
      console.error('Error getting zone items:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при получении элементов зоны'
      })
    }
  },

  // Создать элементы зоны
  async createZoneItems(req: Request, res: Response) {
    try {
      const items = req.body

      if (!Array.isArray(items)) {
        return res.status(400).json({
          success: false,
          message: 'Ожидается массив элементов зоны'
        })
      }

      // Сначала удаляем существующие элементы для этой зоны
      if (items.length > 0) {
        const zoneId = items[0].zoneId
        await prisma.zoneItem.updateMany({
          where: { zoneId: Number(zoneId) },
          data: { isActive: false }
        })
      }

      // Создаем новые элементы
      const createdItems = await Promise.all(
        items.map(async (item) => {
          return await prisma.zoneItem.create({
            data: {
              zoneId: Number(item.zoneId),
              floor: Number(item.floor) || 1,
              label: item.label || 'Стол',
              type: item.type || 'table',
              x: Number(item.x) || 0,
              y: Number(item.y) || 0,
              width: Number(item.width) || 100,
              height: Number(item.height) || 100,
              seats: Number(item.seats) || 4,
              capacity: Number(item.capacity) || 4,
              pricePerHour: Number(item.pricePerHour) || 0,
              pricePerSeat: Number(item.pricePerSeat) || 0,
              pricePerSlot: Number(item.pricePerSlot) || 0,
              minDuration: Number(item.minDuration) || 1,
              maxDuration: Number(item.maxDuration) || 24,
              timeSlots: item.timeSlots || [],
              description: item.description || '',
              features: item.features || [],
              isActive: true
            }
          })
        })
      )

      res.json({
        success: true,
        message: 'Элементы зоны успешно созданы',
        data: createdItems
      })
    } catch (error) {
      console.error('Error creating zone items:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при создании элементов зоны'
      })
    }
  },

  // Обновить элемент зоны
  async updateZoneItem(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updateData = req.body

      const zoneItem = await prisma.zoneItem.update({
        where: { id: Number(id) },
        data: updateData,
        include: {
          zone: true
        }
      })

      res.json({
        success: true,
        data: zoneItem
      })
    } catch (error) {
      console.error('Error updating zone item:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при обновлении элемента зоны'
      })
    }
  },

  // Удалить элемент зоны
  async deleteZoneItem(req: Request, res: Response) {
    try {
      const { id } = req.params

      await prisma.zoneItem.delete({
        where: { id: Number(id) }
      })

      res.json({
        success: true,
        message: 'Элемент зоны удален'
      })
    } catch (error) {
      console.error('Error deleting zone item:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при удалении элемента зоны'
      })
    }
  },

  // Создать бронирование
  async createReservation(req: Request, res: Response) {
    try {
      const {
        zoneItemId,
        userName,
        phone,
        date,
        time,
        duration,
        guestsCount,
        seatsCount,
        comment
      } = req.body

      // Валидация входных данных
      if (!zoneItemId || !userName || !phone || !date || !time || !duration) {
        return res.status(400).json({
          success: false,
          message: 'Не все обязательные поля заполнены'
        })
      }

      // Получаем элемент зоны для проверки доступности
      const zoneItem = await prisma.zoneItem.findUnique({
        where: { id: Number(zoneItemId) },
        include: { zone: true }
      })

      if (!zoneItem) {
        return res.status(404).json({
          success: false,
          message: 'Элемент зоны не найден'
        })
      }

      if (!zoneItem.isActive) {
        return res.status(400).json({
          success: false,
          message: 'Элемент зоны неактивен'
        })
      }

      // Проверяем конфликты бронирования
      const startTime = new Date(`${date}T${time}`)
      const endTime = new Date(startTime.getTime() + duration * 60 * 1000)

      const conflictingReservations = await prisma.reservation.findMany({
        where: {
          zoneItemId: Number(zoneItemId),
          status: {
            in: ['booked', 'arrived']
          },
          OR: [
            {
              startsAt: { lt: endTime },
              endsAt: { gt: startTime }
            }
          ]
        }
      })

      if (conflictingReservations.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Выбранное время уже занято'
        })
      }

      // Создаем бронирование
      const reservation = await prisma.reservation.create({
        data: {
          zoneItemId: Number(zoneItemId),
          type: 'seating' as any,
          userName,
          phone,
          startsAt: startTime,
          endsAt: endTime,
          deposit: 0,
          seatsCount: seatsCount || guestsCount,
          guestsCount,
          duration,
          comment
        }
      })

      res.json({
        success: true,
        message: 'Бронирование создано успешно',
        data: reservation
      })
    } catch (error) {
      console.error('Error creating reservation:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при создании бронирования'
      })
    }
  },

  // Получить бронирования элемента зоны
  async getZoneItemReservations(req: Request, res: Response) {
    try {
      const { zoneItemId } = req.params
      const { date, status } = req.query

      const where: any = {
        zoneItemId: Number(zoneItemId)
      }

      if (date) {
        const startDate = new Date(date as string)
        const endDate = new Date(startDate)
        endDate.setDate(endDate.getDate() + 1)

        where.startsAt = {
          gte: startDate,
          lt: endDate
        }
      }

      if (status) {
        where.status = status
      }

      const reservations = await prisma.reservation.findMany({
        where,
        orderBy: { startsAt: 'desc' }
      })

      res.json({
        success: true,
        data: reservations
      })
    } catch (error) {
      console.error('Error getting zone item reservations:', error)
      res.status(500).json({
        success: false,
        message: 'Ошибка при получении бронирований'
      })
    }
  },

  // Валидация элемента зоны
  validateZoneItem(type: string, data: any) {
    const errors: string[] = []

    if (!data.label) {
      errors.push('Название обязательно')
    }

    if (!data.x && data.x !== 0) {
      errors.push('Координата X обязательна')
    }

    if (!data.y && data.y !== 0) {
      errors.push('Координата Y обязательна')
    }

    if (!data.width || data.width <= 0) {
      errors.push('Ширина должна быть больше 0')
    }

    if (!data.height || data.height <= 0) {
      errors.push('Высота должна быть больше 0')
    }

    if (type === 'table' && (!data.seats || data.seats <= 0)) {
      errors.push('Количество мест обязательно для стола')
    }

    return errors
  },

  // Получить конфигурацию бронирования для элемента зоны
  getReservationConfig(zoneItem: any, data: any) {
    const config: any = {
      type: 'seating',
      duration: 120, // 2 часа по умолчанию
      deposit: 0
    }

    // Настройки для разных типов элементов
    switch (zoneItem.type) {
      case 'table':
        config.type = 'seating'
        config.duration = data.duration || 120
        config.deposit = data.deposit || 0
        break
      case 'booth':
        config.type = 'fullItem'
        config.duration = data.duration || 60
        config.deposit = data.deposit || 0
        break
      case 'gameTable':
        config.type = 'fullItem'
        config.duration = data.duration || 60
        config.deposit = data.deposit || 0
        break
      default:
        config.type = 'seating'
        config.duration = data.duration || 120
        config.deposit = data.deposit || 0
    }

    return config
  },

  // Расчет цены бронирования
  calculatePrice(zoneItem: any, config: any) {
    let price = 0

    if (zoneItem.pricePerHour) {
      price = (zoneItem.pricePerHour * config.duration) / 60
    } else if (zoneItem.pricePerSeat && config.seatsCount) {
      price = zoneItem.pricePerSeat * config.seatsCount
    } else if (zoneItem.pricePerSlot) {
      price = zoneItem.pricePerSlot
    }

    return Math.round(price * 100) / 100
  }
} 