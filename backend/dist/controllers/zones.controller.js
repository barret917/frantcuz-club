"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zonesController = void 0;
const prisma_1 = require("../prisma");
exports.zonesController = {
    // Получить все зоны
    async getZones(req, res) {
        try {
            const zones = await prisma_1.prisma.zone.findMany({
                orderBy: { id: 'asc' }
            });
            res.json({
                success: true,
                data: zones
            });
        }
        catch (error) {
            console.error('Error getting zones:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении зон'
            });
        }
    },
    // Получить зону по ID
    async getZoneById(req, res) {
        try {
            const { id } = req.params;
            const zone = await prisma_1.prisma.zone.findUnique({
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
            });
            if (!zone) {
                return res.status(404).json({
                    success: false,
                    message: 'Зона не найдена'
                });
            }
            res.json({
                success: true,
                data: zone
            });
        }
        catch (error) {
            console.error('Error getting zone by ID:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении зоны'
            });
        }
    },
    // Получить элементы зоны по типу
    async getZoneItemsByType(req, res) {
        try {
            const { zoneType } = req.params;
            const items = await prisma_1.prisma.zoneItem.findMany({
                where: {
                    zone: {
                        type: zoneType
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
            });
            // Добавляем статус доступности
            const itemsWithStatus = items.map((item) => ({
                ...item,
                isAvailable: true,
                activeReservations: 0
            }));
            res.json({
                success: true,
                data: itemsWithStatus
            });
        }
        catch (error) {
            console.error('Error getting zone items by type:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении элементов зоны'
            });
        }
    },
    // Получить элементы конкретной зоны по ID
    async getZoneItems(req, res) {
        try {
            const { zoneId } = req.params;
            console.log('🔍 Получаем элементы зоны ID:', zoneId);
            const items = await prisma_1.prisma.zoneItem.findMany({
                where: {
                    zoneId: Number(zoneId),
                    isActive: true
                },
                include: {
                    zone: true
                },
                orderBy: [
                    { floor: 'asc' },
                    { label: 'asc' }
                ]
            });
            console.log('✅ Найдено элементов:', items.length);
            res.json({
                success: true,
                data: items
            });
        }
        catch (error) {
            console.error('❌ Ошибка получения элементов зоны:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении элементов зоны'
            });
        }
    },
    // Обновить элемент зоны
    async updateZoneItem(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const zoneItem = await prisma_1.prisma.zoneItem.update({
                where: { id: Number(id) },
                data: updateData,
                include: {
                    zone: true
                }
            });
            res.json({
                success: true,
                data: zoneItem
            });
        }
        catch (error) {
            console.error('Error updating zone item:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при обновлении элемента зоны'
            });
        }
    },
    // Удалить элемент зоны
    async deleteZoneItem(req, res) {
        try {
            const { id } = req.params;
            await prisma_1.prisma.zoneItem.delete({
                where: { id: Number(id) }
            });
            res.json({
                success: true,
                message: 'Элемент зоны удален'
            });
        }
        catch (error) {
            console.error('Error deleting zone item:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при удалении элемента зоны'
            });
        }
    },
    // Создать бронирование
    async createReservation(req, res) {
        try {
            const { zoneItemId, userName, phone, date, time, duration, guestsCount, seatsCount, comment } = req.body;
            // Валидация входных данных
            if (!zoneItemId || !userName || !phone || !date || !time || !duration) {
                return res.status(400).json({
                    success: false,
                    message: 'Не все обязательные поля заполнены'
                });
            }
            // Получаем элемент зоны для проверки доступности
            const zoneItem = await prisma_1.prisma.zoneItem.findUnique({
                where: { id: Number(zoneItemId) },
                include: { zone: true }
            });
            if (!zoneItem) {
                return res.status(404).json({
                    success: false,
                    message: 'Элемент зоны не найден'
                });
            }
            if (!zoneItem.isActive) {
                return res.status(400).json({
                    success: false,
                    message: 'Элемент зоны неактивен'
                });
            }
            // Проверяем конфликты бронирования
            const startTime = new Date(`${date}T${time}`);
            const endTime = new Date(startTime.getTime() + duration * 60 * 1000);
            const conflictingReservations = await prisma_1.prisma.reservation.findMany({
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
            });
            if (conflictingReservations.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Выбранное время уже занято'
                });
            }
            // Создаем бронирование
            const reservation = await prisma_1.prisma.reservation.create({
                data: {
                    zoneItemId: Number(zoneItemId),
                    type: 'seating',
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
            });
            res.json({
                success: true,
                message: 'Бронирование создано успешно',
                data: reservation
            });
        }
        catch (error) {
            console.error('Error creating reservation:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при создании бронирования'
            });
        }
    },
    // Получить бронирования элемента зоны
    async getZoneItemReservations(req, res) {
        try {
            const { zoneItemId } = req.params;
            const { date, status } = req.query;
            const where = {
                zoneItemId: Number(zoneItemId)
            };
            if (date) {
                const startDate = new Date(date);
                const endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + 1);
                where.startsAt = {
                    gte: startDate,
                    lt: endDate
                };
            }
            if (status) {
                where.status = status;
            }
            const reservations = await prisma_1.prisma.reservation.findMany({
                where,
                orderBy: { startsAt: 'desc' }
            });
            res.json({
                success: true,
                data: reservations
            });
        }
        catch (error) {
            console.error('Error getting zone item reservations:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении бронирований'
            });
        }
    },
    // Валидация элемента зоны
    validateZoneItem(type, data) {
        const errors = [];
        if (!data.label) {
            errors.push('Название обязательно');
        }
        if (!data.x && data.x !== 0) {
            errors.push('Координата X обязательна');
        }
        if (!data.y && data.y !== 0) {
            errors.push('Координата Y обязательна');
        }
        if (!data.width || data.width <= 0) {
            errors.push('Ширина должна быть больше 0');
        }
        if (!data.height || data.height <= 0) {
            errors.push('Высота должна быть больше 0');
        }
        if (type === 'table' && (!data.seats || data.seats <= 0)) {
            errors.push('Количество мест обязательно для стола');
        }
        return errors;
    },
    // Получить конфигурацию бронирования для элемента зоны
    getReservationConfig(zoneItem, data) {
        const config = {
            type: 'seating',
            duration: 120, // 2 часа по умолчанию
            deposit: 0
        };
        // Настройки для разных типов элементов
        switch (zoneItem.type) {
            case 'table':
                config.type = 'seating';
                config.duration = data.duration || 120;
                config.deposit = data.deposit || 0;
                break;
            case 'booth':
                config.type = 'fullItem';
                config.duration = data.duration || 60;
                config.deposit = data.deposit || 0;
                break;
            case 'gameTable':
                config.type = 'fullItem';
                config.duration = data.duration || 60;
                config.deposit = data.deposit || 0;
                break;
            default:
                config.type = 'seating';
                config.duration = data.duration || 120;
                config.deposit = data.deposit || 0;
        }
        return config;
    },
    // Расчет цены бронирования
    calculatePrice(zoneItem, config) {
        let price = 0;
        if (zoneItem.pricePerHour) {
            price = (zoneItem.pricePerHour * config.duration) / 60;
        }
        else if (zoneItem.pricePerSeat && config.seatsCount) {
            price = zoneItem.pricePerSeat * config.seatsCount;
        }
        else if (zoneItem.pricePerSlot) {
            price = zoneItem.pricePerSlot;
        }
        return Math.round(price * 100) / 100;
    }
};
//# sourceMappingURL=zones.controller.js.map