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
    // 1) Забираем из тела массива items
    const items = req.body as Array<{
      idZone: number;
      floor: number;
      name:   string;
      type:   string;
      seats?: string | number;
      x:      number;
      y:      number;
      width:  number;
      height: number;
    }>;

    if (!items.length) {
      res.status(400).json({ error: 'Нужен непустой массив' });
    }

    const zoneId = items[0].idZone;

    // 2) Удаляем старые элементы для этой зоны
    await prisma.zoneItem.deleteMany({ where: { zoneId } });

    // 3) Готовим данные — приводим seats к number|null
    const data = items.map(it => {
      const seatsNum =
        it.seats == null
          ? null
          : Number(it.seats);            // явно number

      return {
        zoneId: it.idZone,
        floor:  it.floor,
        label:  it.name,
        type:   it.type,
        seats:  seatsNum,               // теперь number | null
        x:      it.x,
        y:      it.y,
        width:  it.width,
        height: it.height,
      };
    });

    // 4) Массовая вставка
    const result = await prisma.zoneItem.createMany({ data });

     res.status(200).json({ inserted: result.count });
  } catch (err) {
    console.error('Ошибка сохранения элементов зоны', err);
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