import { Router } from 'express';
import {
  getMenuTypes,
  getMenuTypeById,
  createMenuType,
  updateMenuType,
  deleteMenuType,
  getMenuCategories,
  createMenuCategory,
  updateMenuCategory,
  deleteMenuCategory,
  getMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  fixSortOrder
} from '../controllers/menu.controller';

const router = Router();

// Роуты для типов меню
router.get('/menu-types', getMenuTypes);
router.get('/menu-types/:id', getMenuTypeById);
router.post('/menu-types', createMenuType);
router.put('/menu-types/:id', updateMenuType);
router.delete('/menu-types/:id', deleteMenuType);

// Роуты для категорий меню
router.get('/menu-categories', getMenuCategories);
router.post('/menu-categories', createMenuCategory);
router.put('/menu-categories/:id', updateMenuCategory);
router.delete('/menu-categories/:id', deleteMenuCategory);

// Роуты для блюд
router.get('/menu-items', getMenuItems);
router.post('/menu-items', createMenuItem);
router.put('/menu-items/:id', updateMenuItem);
router.delete('/menu-items/:id', deleteMenuItem);

// Утилитарный роут для исправления порядка сортировки
router.post('/fix-sort-order', fixSortOrder);

export default router; 