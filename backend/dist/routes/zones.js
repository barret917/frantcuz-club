"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zones_controller_1 = require("../controllers/zones.controller");
const router = express_1.default.Router();
// Получить все зоны
router.get('/', zones_controller_1.zonesController.getZones);
// Получить зону по ID
router.get('/:id', zones_controller_1.zonesController.getZoneById);
// Получить элементы зоны по типу (более специфичный маршрут)
router.get('/type/:zoneType/items', zones_controller_1.zonesController.getZoneItemsByType);
// Получить элементы конкретной зоны по ID
router.get('/:zoneId/items', zones_controller_1.zonesController.getZoneItems);
// Обновить элемент зоны
router.put('/items/:id', zones_controller_1.zonesController.updateZoneItem);
// Удалить элемент зоны
router.delete('/items/:id', zones_controller_1.zonesController.deleteZoneItem);
// Универсальное бронирование
router.post('/reservations', zones_controller_1.zonesController.createReservation);
exports.default = router;
//# sourceMappingURL=zones.js.map