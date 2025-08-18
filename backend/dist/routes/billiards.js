"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const billiards_controller_1 = require("../controllers/billiards.controller");
const router = (0, express_1.Router)();
const billiardsController = new billiards_controller_1.BilliardsController();
// Маршруты для услуг бильярда
router.get('/services', billiardsController.getAllServices);
router.get('/services/:id', billiardsController.getService);
router.post('/services', billiardsController.createService);
router.put('/services/:id', billiardsController.updateService);
router.delete('/services/:id', billiardsController.deleteService);
// Маршруты для настроек бильярда
router.get('/settings', billiardsController.getSettings);
router.put('/settings', billiardsController.updateSettings);
exports.default = router;
//# sourceMappingURL=billiards.js.map