"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BilliardsController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class BilliardsController {
    // Получить все услуги бильярда
    async getAllServices(req, res) {
        try {
            const services = await prisma.billiardsService.findMany({
                where: { isActive: true },
                orderBy: { sortOrder: 'asc' }
            });
            res.json(services);
        }
        catch (error) {
            console.error('Ошибка при получении услуг бильярда:', error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }
    // Получить конкретную услугу бильярда
    async getService(req, res) {
        try {
            const { id } = req.params;
            const service = await prisma.billiardsService.findUnique({
                where: { id: parseInt(id) }
            });
            if (!service) {
                return res.status(404).json({ error: 'Услуга не найдена' });
            }
            res.json(service);
        }
        catch (error) {
            console.error('Ошибка при получении услуги бильярда:', error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }
    // Создать новую услугу бильярда
    async createService(req, res) {
        try {
            const { name, type, weekdayPrice, weekendPrice, description, imageUrl, sortOrder } = req.body;
            // Проверяем, что тип уникален
            const existingService = await prisma.billiardsService.findUnique({
                where: { type }
            });
            if (existingService) {
                return res.status(400).json({ error: 'Услуга с таким типом уже существует' });
            }
            const service = await prisma.billiardsService.create({
                data: {
                    name,
                    type,
                    weekdayPrice: parseFloat(weekdayPrice),
                    weekendPrice: parseFloat(weekendPrice),
                    description,
                    imageUrl,
                    sortOrder: sortOrder || 0
                }
            });
            res.status(201).json(service);
        }
        catch (error) {
            console.error('Ошибка при создании услуги бильярда:', error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }
    // Обновить услугу бильярда
    async updateService(req, res) {
        try {
            const { id } = req.params;
            const { name, type, weekdayPrice, weekendPrice, description, imageUrl, isActive, sortOrder } = req.body;
            // Проверяем, что услуга существует
            const existingService = await prisma.billiardsService.findUnique({
                where: { id: parseInt(id) }
            });
            if (!existingService) {
                return res.status(404).json({ error: 'Услуга не найдена' });
            }
            // Если меняется тип, проверяем уникальность
            if (type && type !== existingService.type) {
                const duplicateType = await prisma.billiardsService.findUnique({
                    where: { type }
                });
                if (duplicateType) {
                    return res.status(400).json({ error: 'Услуга с таким типом уже существует' });
                }
            }
            const service = await prisma.billiardsService.update({
                where: { id: parseInt(id) },
                data: {
                    name,
                    type,
                    weekdayPrice: weekdayPrice ? parseFloat(weekdayPrice) : undefined,
                    weekendPrice: weekendPrice ? parseFloat(weekendPrice) : undefined,
                    description,
                    imageUrl,
                    isActive,
                    sortOrder: sortOrder !== undefined ? sortOrder : undefined
                }
            });
            res.json(service);
        }
        catch (error) {
            console.error('Ошибка при обновлении услуги бильярда:', error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }
    // Удалить услугу бильярда
    async deleteService(req, res) {
        try {
            const { id } = req.params;
            // Проверяем, что услуга существует
            const existingService = await prisma.billiardsService.findUnique({
                where: { id: parseInt(id) }
            });
            if (!existingService) {
                return res.status(404).json({ error: 'Услуга не найдена' });
            }
            await prisma.billiardsService.delete({
                where: { id: parseInt(id) }
            });
            res.json({ message: 'Услуга успешно удалена' });
        }
        catch (error) {
            console.error('Ошибка при удалении услуги бильярда:', error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }
    // Получить настройки бильярда
    async getSettings(req, res) {
        try {
            let settings = await prisma.billiardsSettings.findFirst({
                where: { isActive: true }
            });
            // Если настроек нет, создаем дефолтные
            if (!settings) {
                settings = await prisma.billiardsSettings.create({
                    data: {
                        bookingFee: 100,
                        bookingTimeoutMinutes: 20,
                        minBookingDuration: 60,
                        maxBookingDuration: 480
                    }
                });
            }
            res.json(settings);
        }
        catch (error) {
            console.error('Ошибка при получении настроек бильярда:', error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }
    // Обновить настройки бильярда
    async updateSettings(req, res) {
        try {
            const { bookingFee, bookingTimeoutMinutes, minBookingDuration, maxBookingDuration } = req.body;
            let settings = await prisma.billiardsSettings.findFirst({
                where: { isActive: true }
            });
            if (settings) {
                // Обновляем существующие настройки
                settings = await prisma.billiardsSettings.update({
                    where: { id: settings.id },
                    data: {
                        bookingFee: bookingFee ? parseFloat(bookingFee) : undefined,
                        bookingTimeoutMinutes,
                        minBookingDuration,
                        maxBookingDuration
                    }
                });
            }
            else {
                // Создаем новые настройки
                settings = await prisma.billiardsSettings.create({
                    data: {
                        bookingFee: bookingFee ? parseFloat(bookingFee) : 100,
                        bookingTimeoutMinutes: bookingTimeoutMinutes || 20,
                        minBookingDuration: minBookingDuration || 60,
                        maxBookingDuration: maxBookingDuration || 480
                    }
                });
            }
            res.json(settings);
        }
        catch (error) {
            console.error('Ошибка при обновлении настроек бильярда:', error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        }
    }
}
exports.BilliardsController = BilliardsController;
//# sourceMappingURL=billiards.controller.js.map