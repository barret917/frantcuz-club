import { Router } from 'express';
import { createZone, getZones, saveZoneItems, getZoneItems } from '../controllers/zone.controller';

const router = Router();

// Создание зоны
router.post('/zones', createZone);

// Получение всех зон
router.get('/zones', getZones);

// Сохранение элементов зоны
router.post('/zones/items', saveZoneItems);

// Получение элементов зоны
router.get('/zones/:zoneId/items', getZoneItems);

export default router; 