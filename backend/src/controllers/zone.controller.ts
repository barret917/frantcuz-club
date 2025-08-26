import { Request, Response } from 'express'
import { prisma } from '../prisma'

export const createZone = async (req: Request, res: Response) => {
  try {
    const { name, type, hallId, openTime, closeTime, imageUrl, description } = req.body

    if (!name || !hallId) {
      return res.status(400).json({ error: 'Название зоны и ID зала обязательны' })
    }

    // Проверяем, существует ли зал
    const hall = await prisma.hall.findUnique({
      where: { id: parseInt(hallId) }
    })

    if (!hall) {
      return res.status(400).json({ error: 'Зал не найден' })
    }

    const zone = await prisma.zone.create({
      data: {
        name,
        type: type || 'restaurant',
        hallId: parseInt(hallId),
        openTime: openTime || '09:00',
        closeTime: closeTime || '23:00',
        imageUrl,
        description,
        isActive: true,
        sortOrder: 0
      }
    })

    res.status(201).json(zone)
  } catch (error) {
    console.error('Ошибка создания зоны:', error)
    res.status(500).json({ error: 'Ошибка создания зоны' })
  }
}

export const getZones = async (req: Request, res: Response) => {
  try {
    const { hallId } = req.query

    const where: any = { isActive: true }
    if (hallId) {
      where.hallId = parseInt(hallId as string)
    }

    const zones = await prisma.zone.findMany({
      where,
      include: {
        hall: {
          select: {
            id: true,
            name: true,
            type: true
          }
        },
        items: {
          where: { isActive: true }
        }
      },
      orderBy: { sortOrder: 'asc' }
    })

    res.json(zones)
  } catch (error) {
    console.error('Ошибка получения зон:', error)
    res.status(500).json({ error: 'Ошибка получения зон' })
  }
}

export const getZoneById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const zone = await prisma.zone.findUnique({
      where: { id: parseInt(id) },
      include: {
        hall: {
          select: {
            id: true,
            name: true,
            type: true
          }
        },
        items: {
          where: { isActive: true }
        }
      }
    })

    if (!zone) {
      return res.status(404).json({ error: 'Зона не найдена' })
    }

    res.json(zone)
  } catch (error) {
    console.error('Ошибка получения зоны:', error)
    res.status(500).json({ error: 'Ошибка получения зоны' })
  }
}

export const updateZone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, type, openTime, closeTime, imageUrl, description, isActive, sortOrder } = req.body

    const zone = await prisma.zone.update({
      where: { id: parseInt(id) },
      data: {
        name,
        type,
        openTime,
        closeTime,
        imageUrl,
        description,
        isActive,
        sortOrder
      }
    })

    res.json(zone)
  } catch (error) {
    console.error('Ошибка обновления зоны:', error)
    res.status(500).json({ error: 'Ошибка обновления зоны' })
  }
}

export const deleteZone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    // Проверяем, есть ли столы в зоне
    const itemsCount = await prisma.zoneItem.count({
      where: { zoneId: parseInt(id) }
    })

    if (itemsCount > 0) {
      return res.status(400).json({ 
        error: 'Нельзя удалить зону, в которой есть столы. Сначала удалите все столы.' 
      })
    }

    await prisma.zone.delete({
      where: { id: parseInt(id) }
    })

    res.json({ message: 'Зона успешно удалена' })
  } catch (error) {
    console.error('Ошибка удаления зоны:', error)
    res.status(500).json({ error: 'Ошибка удаления зоны' })
  }
} 