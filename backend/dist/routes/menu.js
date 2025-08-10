"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_controller_1 = require("../controllers/menu.controller");
const router = (0, express_1.Router)();
// Роуты для типов меню
router.get('/menu-types', menu_controller_1.getMenuTypes);
router.get('/menu-types/:id', menu_controller_1.getMenuTypeById);
router.post('/menu-types', menu_controller_1.createMenuType);
router.put('/menu-types/:id', menu_controller_1.updateMenuType);
router.delete('/menu-types/:id', menu_controller_1.deleteMenuType);
// Роуты для категорий меню
router.get('/menu-categories', menu_controller_1.getMenuCategories);
router.post('/menu-categories', menu_controller_1.createMenuCategory);
router.put('/menu-categories/:id', menu_controller_1.updateMenuCategory);
router.delete('/menu-categories/:id', menu_controller_1.deleteMenuCategory);
// Роуты для блюд
router.get('/menu-items', menu_controller_1.getMenuItems);
router.post('/menu-items', menu_controller_1.createMenuItem);
router.put('/menu-items/:id', menu_controller_1.updateMenuItem);
router.delete('/menu-items/:id', menu_controller_1.deleteMenuItem);
// Утилитарный роут для исправления порядка сортировки
router.post('/fix-sort-order', menu_controller_1.fixSortOrder);
exports.default = router;
//# sourceMappingURL=menu.js.map