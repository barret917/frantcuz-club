"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const karaoke_controller_1 = require("../controllers/karaoke.controller");
const router = (0, express_1.Router)();
const karaokeController = new karaoke_controller_1.KaraokeController();
// Маршруты для услуг караоке
router.get('/services', karaokeController.getAllServices);
router.get('/services/:id', karaokeController.getService);
router.post('/services', karaokeController.createService);
router.put('/services/:id', karaokeController.updateService);
router.delete('/services/:id', karaokeController.deleteService);
// Маршруты для настроек караоке
router.get('/settings', karaokeController.getSettings);
router.put('/settings', karaokeController.updateSettings);
exports.default = router;
//# sourceMappingURL=karaoke.js.map