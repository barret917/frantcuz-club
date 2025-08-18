"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tables_controller_1 = require("../controllers/tables.controller");
const router = express_1.default.Router();
// Получить все элементы зон с их статусом
router.get('/zones/items', tables_controller_1.tablesController.getAllZoneItems);
// Получить свободные столы на определенную дату и время
router.get('/tables/available', tables_controller_1.tablesController.getAvailableTables);
// Получить бронирования столов
router.get('/tables/bookings', tables_controller_1.tablesController.getTableBookings);
// Создать бронирование стола
router.post('/tables/bookings', tables_controller_1.tablesController.createTableBooking);
// Обновить статус бронирования
router.patch('/tables/bookings/:id/status', tables_controller_1.tablesController.updateBookingStatus);
// Отменить бронирование
router.delete('/tables/bookings/:id', tables_controller_1.tablesController.cancelBooking);
// Получить статистику по столам
router.get('/tables/stats', tables_controller_1.tablesController.getTablesStats);
exports.default = router;
//# sourceMappingURL=tables.js.map