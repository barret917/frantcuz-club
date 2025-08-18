import { prisma } from "../prisma";
import { NextFunction, Request, RequestHandler, Response} from "express";

export const createZone = async (req: Request, res: Response) => {
    try {
        const {
            name,
            openTime,
            closeTime,
            imageUrl
        } = req.body
        const response = await prisma.zone.create({
            data: {
                name,
                closeTime,
                openTime,
                imageUrl
            }
        })

      res.status(200).json(response)
       
    } catch (error) {
        console.error('Ошибка создания зоны', error)
        res.status(500).json({ error: 'Не удалось создать зону' })
    }
};

export const getZones = async (req: Request, res: Response) => {
    try {
        const response = await prisma.zone.findMany();
        res.status(200).json(response);
    } catch (error) {
        console.error('Ошибка получения всех зон', error)
        res.status(500).json({error:'Не удалось получить зоны'})
    }
}

export const saveZoneItems: RequestHandler = async (req, res) => {
  try {
    console.log('🔧 Начинаем сохранение элементов зоны...')
    console.log('📥 Полученные данные:', JSON.stringify(req.body, null, 2))
    
    // 1) Забираем из тела массива items
    const items = req.body as Array<{
      zoneId: number;
      floor: number;
      label: string;
      type: 'table' | 'booth' | 'stage' | 'bar' | 'danceFloor' | 'gameTable' | 'lounge' | 'spaRoom' | 'cinemaHall' | 'custom';
      seats?: string | number;
      x: number;
      y: number;
      width: number;
      height: number;
      isBooking?: boolean;
      isActive?: boolean;
    }>;

    console.log('📋 Обработанные элементы:', items.length)

    if (!items.length) {
      console.log('❌ Пустой массив элементов')
      res.status(400).json({ error: 'Нужен непустой массив' });
      return;
    }

    const zoneId = items[0].zoneId;
    console.log('🎯 ZoneId:', zoneId)

    // 2) Удаляем старые элементы для этой зоны
    console.log('🗑️ Удаляем старые элементы для зоны', zoneId)
    await prisma.zoneItem.deleteMany({ where: { zoneId } });

    // 3) Готовим данные — приводим seats к number|null
    const data = items.map(it => {
      const seatsNum =
        it.seats == null
          ? null
          : Number(it.seats);            // явно number

      const itemData = {
        zoneId: it.zoneId,
        floor:  it.floor,
        label:  it.label,
        type:   it.type,
        seats:  seatsNum,               // теперь number | null
        x:      it.x,                   // Float - не нужно масштабирование
        y:      it.y,                   // Float - не нужно масштабирование
        width:  it.width,               // Float - не нужно масштабирование
        height: it.height,              // Float - не нужно масштабирование
        isBooking: it.isBooking ?? false,
        isActive: it.isActive ?? true,
      };
      
      console.log('📝 Подготовленный элемент:', itemData)
      return itemData;
    });

    console.log('💾 Сохраняем', data.length, 'элементов в базу данных')

    // 4) Массовая вставка
    const result = await prisma.zoneItem.createMany({ data });

    console.log('✅ Успешно сохранено:', result.count, 'элементов')
    res.status(200).json({ inserted: result.count });
  } catch (err) {
    console.error('❌ Ошибка сохранения элементов зоны:', err);
    res
      .status(500)
      .json({ error: 'Не удалось сохранить элементы зоны' });
  }
};

export const getZoneItems: RequestHandler = async (req, res) => {
  const zoneId = Number(req.params.zoneId);
  try {
    const items = await prisma.zoneItem.findMany({
      where: { zoneId },
      orderBy: { id: 'asc' }
    });
    
    res.status(200).json(items);
  } catch (err) {
    console.error('Ошибка получения элементов зоны', err);
    res.status(500).json({ error: 'Не удалось получить элементы зоны' });
  }
}; 