"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanquetRequestsController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class BanquetRequestsController {
    // Создание новой заявки на банкет
    async create(req, res) {
        try {
            const { eventDate, eventTime, endTime, guestCount, eventType, budget, banquetType, specialMenu, music, decor, name, phone, email, additionalWishes } = req.body;
            // Валидация обязательных полей
            if (!eventDate || !eventTime || !guestCount || !eventType || !budget || !name || !phone) {
                return res.status(400).json({
                    success: false,
                    message: 'Не все обязательные поля заполнены'
                });
            }
            // Создание заявки
            const banquetRequest = await prisma.banquetRequest.create({
                data: {
                    eventDate: new Date(eventDate),
                    eventTime,
                    endTime,
                    guestCount: parseInt(guestCount),
                    eventType,
                    budget,
                    banquetType,
                    specialMenu,
                    music,
                    decor,
                    name,
                    phone,
                    email,
                    additionalWishes,
                    status: 'pending'
                }
            });
            console.log('✅ Заявка на банкет создана:', banquetRequest.id);
            res.status(201).json({
                success: true,
                message: 'Заявка успешно отправлена',
                data: banquetRequest
            });
        }
        catch (error) {
            console.error('❌ Ошибка создания заявки на банкет:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка сервера при создании заявки'
            });
        }
    }
    // Получение всех заявок (для админки)
    async getAll(req, res) {
        try {
            const { page = '1', limit = '20', status, search } = req.query;
            const pageNum = parseInt(page);
            const limitNum = parseInt(limit);
            const skip = (pageNum - 1) * limitNum;
            // Фильтры
            const where = {};
            if (status && status !== 'all') {
                where.status = status;
            }
            if (search) {
                where.OR = [
                    { name: { contains: search, mode: 'insensitive' } },
                    { phone: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { eventType: { contains: search, mode: 'insensitive' } }
                ];
            }
            // Получение заявок с пагинацией
            const [banquetRequests, total] = await Promise.all([
                prisma.banquetRequest.findMany({
                    where,
                    orderBy: { createdAt: 'desc' },
                    skip,
                    take: limitNum
                }),
                prisma.banquetRequest.count({ where })
            ]);
            const totalPages = Math.ceil(total / limitNum);
            console.log('✅ Заявки на банкеты получены:', banquetRequests.length);
            res.json({
                success: true,
                data: {
                    requests: banquetRequests,
                    pagination: {
                        currentPage: pageNum,
                        totalPages,
                        totalItems: total,
                        itemsPerPage: limitNum
                    }
                }
            });
        }
        catch (error) {
            console.error('❌ Ошибка получения заявок на банкеты:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка сервера при получении заявок'
            });
        }
    }
    // Получение заявки по ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            const banquetRequest = await prisma.banquetRequest.findUnique({
                where: { id: parseInt(id) }
            });
            if (!banquetRequest) {
                return res.status(404).json({
                    success: false,
                    message: 'Заявка не найдена'
                });
            }
            res.json({
                success: true,
                data: banquetRequest
            });
        }
        catch (error) {
            console.error('❌ Ошибка получения заявки:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка сервера при получении заявки'
            });
        }
    }
    // Обновление статуса заявки
    async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            if (!status || !['pending', 'approved', 'rejected', 'completed'].includes(status)) {
                return res.status(400).json({
                    success: false,
                    message: 'Неверный статус'
                });
            }
            const updatedRequest = await prisma.banquetRequest.update({
                where: { id: parseInt(id) },
                data: { status }
            });
            console.log('✅ Статус заявки обновлен:', id, '->', status);
            res.json({
                success: true,
                message: 'Статус заявки обновлен',
                data: updatedRequest
            });
        }
        catch (error) {
            console.error('❌ Ошибка обновления статуса заявки:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка сервера при обновлении статуса'
            });
        }
    }
    // Удаление заявки
    async delete(req, res) {
        try {
            const { id } = req.params;
            await prisma.banquetRequest.delete({
                where: { id: parseInt(id) }
            });
            console.log('✅ Заявка удалена:', id);
            res.json({
                success: true,
                message: 'Заявка успешно удалена'
            });
        }
        catch (error) {
            console.error('❌ Ошибка удаления заявки:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка сервера при удалении заявки'
            });
        }
    }
    // Получение статистики по заявкам
    async getStats(req, res) {
        try {
            const [total, pending, approved, rejected, completed] = await Promise.all([
                prisma.banquetRequest.count(),
                prisma.banquetRequest.count({ where: { status: 'pending' } }),
                prisma.banquetRequest.count({ where: { status: 'approved' } }),
                prisma.banquetRequest.count({ where: { status: 'rejected' } }),
                prisma.banquetRequest.count({ where: { status: 'completed' } })
            ]);
            const stats = {
                total,
                pending,
                approved,
                rejected,
                completed
            };
            res.json({
                success: true,
                data: stats
            });
        }
        catch (error) {
            console.error('❌ Ошибка получения статистики:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка сервера при получении статистики'
            });
        }
    }
}
exports.BanquetRequestsController = BanquetRequestsController;
//# sourceMappingURL=banquet-requests.controller.js.map