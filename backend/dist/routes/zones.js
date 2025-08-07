"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zone_controller_1 = require("../controllers/zone.controller");
const router = (0, express_1.Router)();
// Создание зоны
router.post('/zones', zone_controller_1.createZone);
// Получение всех зон
router.get('/zones', zone_controller_1.getZones);
// Сохранение элементов зоны
router.post('/zones/items', zone_controller_1.saveZoneItems);
// Получение элементов зоны
router.get('/zones/:zoneId/items', zone_controller_1.getZoneItems);
exports.default = router;
//# sourceMappingURL=zones.js.map