"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banquet_requests_controller_1 = require("../controllers/banquet-requests.controller");
const router = (0, express_1.Router)();
const controller = new banquet_requests_controller_1.BanquetRequestsController();
// Создание новой заявки на банкет (публичный доступ)
router.post('/', controller.create.bind(controller));
// Получение всех заявок (для админки)
router.get('/', controller.getAll.bind(controller));
// Получение заявки по ID
router.get('/:id', controller.getById.bind(controller));
// Обновление статуса заявки
router.patch('/:id/status', controller.updateStatus.bind(controller));
// Удаление заявки
router.delete('/:id', controller.delete.bind(controller));
// Получение статистики по заявкам
router.get('/stats/overview', controller.getStats.bind(controller));
exports.default = router;
//# sourceMappingURL=banquet-requests.js.map