import { Request, Response } from 'express'
import { prisma } from '../prisma'

export const createHall = async (req: Request, res: Response) => {
  try {
    const { name, description, type, imageUrl } = req.body

    if (!name) {
      return res.status(400).json({ error: 'Название зала обязательно' })
    }

    const hall = await prisma.hall.create({
      data: {
        name,
        description,
        type: type || 'restaurant',
        imageUrl,
        isActive: true,
        sortOrder: 0
      }
    })

    res.status(201).json(hall)
  } catch (error) {
    console.error('Ошибка создания зала:', error)
    res.status(500).json({ error: 'Ошибка создания зала' })
  }
}

export const getHalls = async (req: Request, res: Response) => {
  try {
    const halls = await prisma.hall.findMany({
      where: { isActive: true },
      include: {
        zones: {
          where: { isActive: true },
          include: {
            items: {
              where: { isActive: true }
            }
          }
        }
      },
      orderBy: { sortOrder: 'asc' }
    })

    res.json(halls)
  } catch (error) {
    console.error('Ошибка получения залов:', error)
    res.status(500).json({ error: 'Ошибка получения залов' })
  }
}

export const getHallById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const hall = await prisma.hall.findUnique({
      where: { id: parseInt(id) },
      include: {
        zones: {
          where: { isActive: true },
          include: {
            items: {
              where: { isActive: true }
            }
          }
        }
      }
    })

    if (!hall) {
      return res.status(404).json({ error: 'Зал не найден' })
    }

    res.json(hall)
  } catch (error) {
    console.error('Ошибка получения зала:', error)
    res.status(500).json({ error: 'Ошибка получения зала' })
  }
}

export const updateHall = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, description, type, imageUrl, isActive, sortOrder } = req.body

    const hall = await prisma.hall.update({
      where: { id: parseInt(id) },
      data: {
        name,
        description,
        type,
        imageUrl,
        isActive,
        sortOrder
      }
    })

    res.json(hall)
  } catch (error) {
    console.error('Ошибка обновления зала:', error)
    res.status(500).json({ error: 'Ошибка обновления зала' })
  }
}

export const deleteHall = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    // Проверяем, есть ли зоны в зале
    const zonesCount = await prisma.zone.count({
      where: { hallId: parseInt(id) }
    })

    if (zonesCount > 0) {
      return res.status(400).json({ 
        error: 'Нельзя удалить зал, в котором есть зоны. Сначала удалите все зоны.' 
      })
    }

    await prisma.hall.delete({
      where: { id: parseInt(id) }
    })

    res.json({ message: 'Зал успешно удален' })
  } catch (error) {
    console.error('Ошибка удаления зала:', error)
    res.status(500).json({ error: 'Ошибка удаления зала' })
  }
} 