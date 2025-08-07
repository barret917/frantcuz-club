"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZoneItems = exports.saveZoneItems = exports.getZones = exports.createZone = void 0;
const prisma_1 = require("../prisma");
const createZone = async (req, res) => {
    try {
        const { name, openTime, closeTime, imageUrl } = req.body;
        const response = await prisma_1.prisma.zone.create({
            data: {
                name,
                closeTime,
                openTime,
                imageUrl
            }
        });
        res.status(200).json(response);
    }
    catch (error) {
        console.error('Ошибка создания зоны', error);
        res.status(500).json({ error: 'Не удалось создать зону' });
    }
};
exports.createZone = createZone;
const getZones = async (req, res) => {
    try {
        const response = await prisma_1.prisma.zone.findMany();
        res.status(200).json(response);
    }
    catch (error) {
        console.error('Ошибка получения всех зон', error);
        res.status(500).json({ error: 'Не удалось получить зоны' });
    }
};
exports.getZones = getZones;
const saveZoneItems = async (req, res) => {
    try {
        // 1) Забираем из тела массива items
        const items = req.body;
        if (!items.length) {
            res.status(400).json({ error: 'Нужен непустой массив' });
        }
        const zoneId = items[0].idZone;
        // 2) Удаляем старые элементы для этой зоны
        await prisma_1.prisma.zoneItem.deleteMany({ where: { zoneId } });
        // 3) Готовим данные — приводим seats к number|null
        const data = items.map(it => {
            const seatsNum = it.seats == null
                ? null
                : Number(it.seats); // явно number
            return {
                zoneId: it.idZone,
                floor: it.floor,
                label: it.name,
                type: it.type,
                seats: seatsNum, // теперь number | null
                x: it.x,
                y: it.y,
                width: it.width,
                height: it.height,
            };
        });
        // 4) Массовая вставка
        const result = await prisma_1.prisma.zoneItem.createMany({ data });
        res.status(200).json({ inserted: result.count });
    }
    catch (err) {
        console.error('Ошибка сохранения элементов зоны', err);
        res
            .status(500)
            .json({ error: 'Не удалось сохранить элементы зоны' });
    }
};
exports.saveZoneItems = saveZoneItems;
const getZoneItems = async (req, res) => {
    const zoneId = Number(req.params.zoneId);
    try {
        const items = await prisma_1.prisma.zoneItem.findMany({
            where: { zoneId },
            orderBy: { id: 'asc' }
        });
        res.status(200).json(items);
    }
    catch (err) {
        console.error('Ошибка получения элементов зоны', err);
        res.status(500).json({ error: 'Не удалось получить элементы зоны' });
    }
};
exports.getZoneItems = getZoneItems;
//# sourceMappingURL=zone.controller.js.map