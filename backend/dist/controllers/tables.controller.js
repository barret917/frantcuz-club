"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tablesController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.tablesController = {
    // Получить все элементы зон с их статусом
    async getAllZoneItems(req, res) {
        try {
            const { zoneType } = req.query;
            const where = {
                isActive: true
            };
            // Фильтруем по типу зоны если указан
            if (zoneType) {
                where.zone = {
                    type: zoneType
                };
            }
            // Фильтруем по типу элемента
            if (zoneType === 'billiards') {
                where.type = 'billiardsTable';
            }
            else if (zoneType === 'karaoke') {
                where.type = { in: ['table', 'stage'] };
            }
            else {
                where.type = { in: ['table', 'bar', 'vip'] };
            }
            const items = await prisma.zoneItem.findMany({
                where,
                include: {
                    zone: true,
                    reservations: {
                        where: {
                            status: {
                                in: ['booked', 'arrived']
                            }
                        },
                        orderBy: {
                            startsAt: 'desc'
                        }
                    }
                },
                orderBy: [
                    { zoneId: 'asc' },
                    { floor: 'asc' },
                    { label: 'asc' }
                ]
            });
            // Добавляем статус элемента (свободен/занят)
            const itemsWithStatus = items.map(item => {
                const hasActiveReservation = item.reservations.some(reservation => {
                    const now = new Date();
                    const start = new Date(reservation.startsAt);
                    const end = new Date(reservation.endsAt);
                    return now >= start && now <= end;
                });
                return {
                    id: item.id,
                    zoneId: item.zoneId,
                    zoneName: item.zone.name,
                    zoneType: item.zone.type,
                    floor: item.floor,
                    label: item.label,
                    type: item.type,
                    seats: item.seats,
                    pricePerHour: item.pricePerHour,
                    pricePerSeat: item.pricePerSeat,
                    x: item.x,
                    y: item.y,
                    width: item.width,
                    height: item.height,
                    isAvailable: !hasActiveReservation,
                    currentReservation: hasActiveReservation ? item.reservations[0] : null
                };
            });
            res.json({
                success: true,
                data: itemsWithStatus
            });
        }
        catch (error) {
            console.error('Error getting zone items:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении элементов зон'
            });
        }
    },
    // Получить свободные столы на определенную дату и время
    async getAvailableTables(req, res) {
        try {
            const { date, time, duration = 120, guestsCount } = req.query;
            if (!date || !time) {
                return res.status(400).json({
                    success: false,
                    message: 'Необходимо указать дату и время'
                });
            }
            const requestedDate = new Date(date);
            const requestedTime = time;
            const [hours, minutes] = requestedTime.split(':').map(Number);
            requestedDate.setHours(hours, minutes, 0, 0);
            const endTime = new Date(requestedDate.getTime() + (Number(duration) * 60 * 1000));
            // Получаем все столы
            const allTables = await prisma.zoneItem.findMany({
                where: {
                    type: 'table',
                    isActive: true,
                    seats: {
                        gte: Number(guestsCount) || 1
                    }
                },
                include: {
                    zone: true,
                    reservations: {
                        where: {
                            status: {
                                in: ['booked', 'arrived']
                            },
                            OR: [
                                {
                                    startsAt: {
                                        lt: endTime
                                    },
                                    endsAt: {
                                        gt: requestedDate
                                    }
                                }
                            ]
                        }
                    }
                }
            });
            // Фильтруем свободные столы
            const availableTables = allTables.filter(table => table.reservations.length === 0).map(table => ({
                id: table.id,
                zoneId: table.zoneId,
                zoneName: table.zone.name,
                floor: table.floor,
                label: table.label,
                seats: table.seats,
                x: table.x,
                y: table.y,
                width: table.width,
                height: table.height
            }));
            res.json({
                success: true,
                data: {
                    requestedDate: requestedDate.toISOString(),
                    requestedTime,
                    duration: Number(duration),
                    guestsCount: Number(guestsCount) || 1,
                    availableTables,
                    totalAvailable: availableTables.length
                }
            });
        }
        catch (error) {
            console.error('Error getting available tables:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении свободных столов'
            });
        }
    },
    // Создать бронирование стола
    async createTableBooking(req, res) {
        try {
            const { tableId, date, time, duration, guestsCount, customerName, customerPhone, customerEmail, services, comment, deposit } = req.body;
            // Валидация
            if (!tableId || !date || !time || !duration || !guestsCount || !customerName || !customerPhone) {
                return res.status(400).json({
                    success: false,
                    message: 'Не все обязательные поля заполнены'
                });
            }
            // Проверяем, что стол свободен
            const requestedDate = new Date(date);
            const [hours, minutes] = time.split(':').map(Number);
            requestedDate.setHours(hours, minutes, 0, 0);
            const endTime = new Date(requestedDate.getTime() + (duration * 60 * 1000));
            const conflictingReservation = await prisma.reservation.findFirst({
                where: {
                    zoneItemId: Number(tableId),
                    status: {
                        in: ['booked', 'arrived']
                    },
                    OR: [
                        {
                            startsAt: {
                                lt: endTime
                            },
                            endsAt: {
                                gt: requestedDate
                            }
                        }
                    ]
                }
            });
            if (conflictingReservation) {
                return res.status(409).json({
                    success: false,
                    message: 'Стол уже забронирован на это время'
                });
            }
            // Создаем бронирование
            const reservation = await prisma.reservation.create({
                data: {
                    zoneItemId: Number(tableId),
                    userName: customerName,
                    phone: customerPhone,
                    startsAt: requestedDate,
                    endsAt: endTime,
                    deposit: deposit ? Number(deposit) : 0
                }
            });
            // Получаем информацию о столе и зоне
            const tableInfo = await prisma.zoneItem.findUnique({
                where: { id: Number(tableId) },
                include: { zone: true }
            });
            res.status(201).json({
                success: true,
                message: 'Стол успешно забронирован',
                data: {
                    id: reservation.id,
                    tableId: reservation.zoneItemId,
                    tableLabel: tableInfo?.label,
                    zoneName: tableInfo?.zone.name,
                    customerName: reservation.userName,
                    customerPhone: reservation.phone,
                    date: requestedDate.toISOString(),
                    time,
                    duration,
                    guestsCount: Number(guestsCount),
                    endTime: endTime.toISOString(),
                    deposit: reservation.deposit,
                    status: reservation.status,
                    createdAt: new Date()
                }
            });
        }
        catch (error) {
            console.error('Error creating table booking:', error);
            console.error('Error details:', {
                message: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : 'No stack trace',
                data: req.body
            });
            res.status(500).json({
                success: false,
                message: 'Ошибка при создании бронирования',
                details: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    },
    // Получить бронирования стола
    async getTableBookings(req, res) {
        try {
            const { tableId, date, status } = req.query;
            const where = {};
            if (tableId) {
                where.zoneItemId = Number(tableId);
            }
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
            const bookings = await prisma.reservation.findMany({
                where,
                include: {
                    zoneItem: {
                        include: {
                            zone: true
                        }
                    }
                },
                orderBy: {
                    startsAt: 'desc'
                }
            });
            res.json({
                success: true,
                data: bookings.map(booking => ({
                    id: booking.id,
                    tableId: booking.zoneItemId,
                    tableLabel: booking.zoneItem.label,
                    zoneName: booking.zoneItem.zone.name,
                    customerName: booking.userName,
                    customerPhone: booking.phone,
                    startsAt: booking.startsAt,
                    endsAt: booking.endsAt,
                    duration: Math.round((booking.endsAt.getTime() - booking.startsAt.getTime()) / (1000 * 60)),
                    deposit: booking.deposit,
                    status: booking.status,
                    createdAt: new Date()
                }))
            });
        }
        catch (error) {
            console.error('Error getting table bookings:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении бронирований'
            });
        }
    },
    // Обновить статус бронирования
    async updateBookingStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            if (!status) {
                return res.status(400).json({
                    success: false,
                    message: 'Необходимо указать статус'
                });
            }
            const validStatuses = ['booked', 'arrived', 'no_show', 'cancelled'];
            if (!validStatuses.includes(status)) {
                return res.status(400).json({
                    success: false,
                    message: 'Неверный статус'
                });
            }
            const booking = await prisma.reservation.update({
                where: { id: Number(id) },
                data: { status: status }
            });
            res.json({
                success: true,
                message: 'Статус бронирования обновлен',
                data: booking
            });
        }
        catch (error) {
            console.error('Error updating booking status:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при обновлении статуса'
            });
        }
    },
    // Отменить бронирование
    async cancelBooking(req, res) {
        try {
            const { id } = req.params;
            const booking = await prisma.reservation.update({
                where: { id: Number(id) },
                data: { status: 'cancelled' }
            });
            res.json({
                success: true,
                message: 'Бронирование отменено',
                data: booking
            });
        }
        catch (error) {
            console.error('Error cancelling booking:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при отмене бронирования'
            });
        }
    },
    // Получить статистику по столам
    async getTablesStats(req, res) {
        try {
            const { date } = req.query;
            let dateFilter = {};
            if (date) {
                const startDate = new Date(date);
                const endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + 1);
                dateFilter = {
                    startsAt: {
                        gte: startDate,
                        lt: endDate
                    }
                };
            }
            const totalTables = await prisma.zoneItem.count({
                where: {
                    type: 'table',
                    isActive: true
                }
            });
            const activeBookings = await prisma.reservation.count({
                where: {
                    ...dateFilter,
                    status: {
                        in: ['booked', 'arrived']
                    }
                }
            });
            const cancelledBookings = await prisma.reservation.count({
                where: {
                    ...dateFilter,
                    status: 'cancelled'
                }
            });
            // Получаем доход из депозитов (временно, пока нет платежей)
            const totalRevenue = await prisma.reservation.aggregate({
                where: {
                    ...dateFilter,
                    status: {
                        in: ['booked', 'arrived']
                    }
                },
                _sum: {
                    deposit: true
                }
            });
            res.json({
                success: true,
                data: {
                    totalTables,
                    activeBookings,
                    cancelledBookings,
                    totalRevenue: totalRevenue._sum.deposit || 0,
                    utilizationRate: totalTables > 0 ? (activeBookings / totalTables * 100).toFixed(2) : 0
                }
            });
        }
        catch (error) {
            console.error('Error getting tables stats:', error);
            res.status(500).json({
                success: false,
                message: 'Ошибка при получении статистики'
            });
        }
    }
};
//# sourceMappingURL=tables.controller.js.map