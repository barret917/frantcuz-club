"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixSortOrder = exports.deleteMenuItem = exports.updateMenuItem = exports.createMenuItem = exports.getMenuItems = exports.deleteMenuCategory = exports.updateMenuCategory = exports.createMenuCategory = exports.getMenuCategories = exports.deleteMenuType = exports.updateMenuType = exports.createMenuType = exports.getMenuTypeById = exports.getMenuTypes = void 0;
const prisma_1 = require("../prisma");
// Получить все типы меню
const getMenuTypes = async (req, res) => {
    try {
        const menuTypes = await prisma_1.prisma.menuType.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: 'asc' },
            include: {
                categories: {
                    where: { isActive: true },
                    orderBy: { sortOrder: 'asc' },
                    include: {
                        items: {
                            where: { isActive: true },
                            orderBy: { sortOrder: 'asc' }
                        }
                    }
                }
            }
        });
        res.json(menuTypes);
    }
    catch (error) {
        console.error('Ошибка получения типов меню:', error);
        res.status(500).json({ error: 'Ошибка получения типов меню' });
    }
};
exports.getMenuTypes = getMenuTypes;
// Получить тип меню по ID
const getMenuTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const menuType = await prisma_1.prisma.menuType.findUnique({
            where: { id: parseInt(id) },
            include: {
                categories: {
                    where: { isActive: true },
                    orderBy: { sortOrder: 'asc' },
                    include: {
                        items: {
                            where: { isActive: true },
                            orderBy: { sortOrder: 'asc' }
                        }
                    }
                }
            }
        });
        if (!menuType) {
            return res.status(404).json({ error: 'Тип меню не найден' });
        }
        res.json(menuType);
    }
    catch (error) {
        console.error('Ошибка получения типа меню:', error);
        res.status(500).json({ error: 'Ошибка получения типа меню' });
    }
};
exports.getMenuTypeById = getMenuTypeById;
// Создать тип меню
const createMenuType = async (req, res) => {
    try {
        const { name, slug, description, sortOrder } = req.body;
        // Генерируем slug автоматически, если не передан
        const generatedSlug = slug || name
            .toLowerCase()
            .replace(/[^а-яёa-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        const menuType = await prisma_1.prisma.menuType.create({
            data: {
                name,
                slug: generatedSlug,
                description,
                sortOrder: sortOrder || 0
            }
        });
        res.status(201).json(menuType);
    }
    catch (error) {
        console.error('Ошибка создания типа меню:', error);
        res.status(500).json({ error: 'Ошибка создания типа меню' });
    }
};
exports.createMenuType = createMenuType;
// Обновить тип меню
const updateMenuType = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, description, isActive, sortOrder } = req.body;
        // Генерируем slug автоматически, если не передан
        const generatedSlug = slug || name
            .toLowerCase()
            .replace(/[^а-яёa-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        const menuType = await prisma_1.prisma.menuType.update({
            where: { id: parseInt(id) },
            data: {
                name,
                slug: generatedSlug,
                description,
                isActive,
                sortOrder
            }
        });
        res.json(menuType);
    }
    catch (error) {
        console.error('Ошибка обновления типа меню:', error);
        res.status(500).json({ error: 'Ошибка обновления типа меню' });
    }
};
exports.updateMenuType = updateMenuType;
// Удалить тип меню
const deleteMenuType = async (req, res) => {
    try {
        const { id } = req.params;
        const menuTypeId = parseInt(id);
        // Проверяем, есть ли связанные категории
        const relatedCategories = await prisma_1.prisma.menuCategory.findMany({
            where: { menuTypeId },
            include: {
                _count: {
                    select: { items: true }
                }
            }
        });
        if (relatedCategories.length > 0) {
            const totalItems = relatedCategories.reduce((sum, cat) => sum + cat._count.items, 0);
            return res.status(400).json({
                error: `Невозможно удалить тип меню. У него есть ${relatedCategories.length} категорий с ${totalItems} блюдами. Сначала удалите все категории и блюда.`
            });
        }
        await prisma_1.prisma.menuType.delete({
            where: { id: menuTypeId }
        });
        res.json({ message: 'Тип меню удален' });
    }
    catch (error) {
        console.error('Ошибка удаления типа меню:', error);
        res.status(500).json({ error: 'Ошибка удаления типа меню' });
    }
};
exports.deleteMenuType = deleteMenuType;
// Получить все категории
const getMenuCategories = async (req, res) => {
    try {
        const categories = await prisma_1.prisma.menuCategory.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: 'asc' },
            include: {
                items: {
                    where: { isActive: true },
                    orderBy: { sortOrder: 'asc' }
                }
            }
        });
        res.json(categories);
    }
    catch (error) {
        console.error('Ошибка получения категорий меню:', error);
        res.status(500).json({ error: 'Ошибка получения категорий меню' });
    }
};
exports.getMenuCategories = getMenuCategories;
// Создать категорию
const createMenuCategory = async (req, res) => {
    try {
        const { name, slug, description, menuTypeId, sortOrder } = req.body;
        // Генерируем slug автоматически, если не передан
        const generatedSlug = slug || name
            .toLowerCase()
            .replace(/[^а-яёa-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        const category = await prisma_1.prisma.menuCategory.create({
            data: {
                name,
                slug: generatedSlug,
                description,
                menuTypeId: parseInt(menuTypeId),
                sortOrder: sortOrder || 0
            }
        });
        res.status(201).json(category);
    }
    catch (error) {
        console.error('Ошибка создания категории меню:', error);
        res.status(500).json({ error: 'Ошибка создания категории меню' });
    }
};
exports.createMenuCategory = createMenuCategory;
// Обновить категорию
const updateMenuCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, description, menuTypeId, isActive, sortOrder } = req.body;
        // Генерируем slug автоматически, если не передан
        const generatedSlug = slug || name
            .toLowerCase()
            .replace(/[^а-яёa-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        const category = await prisma_1.prisma.menuCategory.update({
            where: { id: parseInt(id) },
            data: {
                name,
                slug: generatedSlug,
                description,
                menuTypeId: parseInt(menuTypeId),
                isActive,
                sortOrder
            }
        });
        res.json(category);
    }
    catch (error) {
        console.error('Ошибка обновления категории меню:', error);
        res.status(500).json({ error: 'Ошибка обновления категории меню' });
    }
};
exports.updateMenuCategory = updateMenuCategory;
// Удалить категорию
const deleteMenuCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const categoryId = parseInt(id);
        // Проверяем, есть ли связанные блюда
        const relatedItems = await prisma_1.prisma.menuItem.findMany({
            where: { categoryId }
        });
        if (relatedItems.length > 0) {
            return res.status(400).json({
                error: `Невозможно удалить категорию. У неё есть ${relatedItems.length} блюд. Сначала удалите все блюда.`
            });
        }
        await prisma_1.prisma.menuCategory.delete({
            where: { id: categoryId }
        });
        res.json({ message: 'Категория удалена' });
    }
    catch (error) {
        console.error('Ошибка удаления категории:', error);
        res.status(500).json({ error: 'Ошибка удаления категории' });
    }
};
exports.deleteMenuCategory = deleteMenuCategory;
// Получить все блюда
const getMenuItems = async (req, res) => {
    try {
        const items = await prisma_1.prisma.menuItem.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: 'asc' },
            include: {
                category: {
                    include: {
                        menuType: true
                    }
                }
            }
        });
        res.json(items);
    }
    catch (error) {
        console.error('Ошибка получения блюд:', error);
        res.status(500).json({ error: 'Ошибка получения блюд' });
    }
};
exports.getMenuItems = getMenuItems;
// Создать блюдо
const createMenuItem = async (req, res) => {
    try {
        console.log('🚀 Создание блюда. Данные:', req.body);
        const { name, slug, description, price, currency, imageUrl, categoryId, allergens, weight, calories, preparation, isPopular, sortOrder } = req.body;
        console.log('📝 Обработанные данные:', {
            name,
            slug,
            description,
            price,
            currency,
            imageUrl,
            categoryId,
            allergens,
            weight,
            calories,
            preparation,
            isPopular,
            sortOrder
        });
        // Если sortOrder не указан, находим максимальный и добавляем 1
        let finalSortOrder = sortOrder;
        if (!sortOrder && sortOrder !== 0) {
            const maxSortOrder = await prisma_1.prisma.menuItem.findFirst({
                where: { categoryId: parseInt(categoryId) },
                orderBy: { sortOrder: 'desc' },
                select: { sortOrder: true }
            });
            finalSortOrder = (maxSortOrder?.sortOrder || 0) + 1;
            console.log('🔢 Установлен sortOrder:', finalSortOrder);
        }
        const item = await prisma_1.prisma.menuItem.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                currency: currency || '₽',
                imageUrl,
                categoryId: parseInt(categoryId),
                allergens: allergens || [],
                weight,
                calories: calories ? parseInt(calories) : null,
                preparation,
                isPopular: isPopular || false,
                sortOrder: finalSortOrder
            }
        });
        console.log('✅ Блюдо создано:', item);
        res.status(201).json(item);
    }
    catch (error) {
        console.error('❌ Ошибка создания блюда:', error);
        res.status(500).json({ error: 'Ошибка создания блюда' });
    }
};
exports.createMenuItem = createMenuItem;
// Обновить блюдо
const updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, currency, imageUrl, categoryId, allergens, weight, calories, preparation, isPopular, isActive, sortOrder } = req.body;
        const itemId = parseInt(id);
        // Если изменяется sortOrder, проверяем конфликты
        if (sortOrder !== undefined) {
            const existingItem = await prisma_1.prisma.menuItem.findFirst({
                where: {
                    sortOrder: sortOrder,
                    categoryId: parseInt(categoryId),
                    id: { not: itemId }
                }
            });
            if (existingItem) {
                // Если есть конфликт, сдвигаем существующие блюда
                await prisma_1.prisma.menuItem.updateMany({
                    where: {
                        categoryId: parseInt(categoryId),
                        sortOrder: { gte: sortOrder },
                        id: { not: itemId }
                    },
                    data: {
                        sortOrder: { increment: 1 }
                    }
                });
            }
        }
        const item = await prisma_1.prisma.menuItem.update({
            where: { id: itemId },
            data: {
                name,
                description,
                price: parseFloat(price),
                currency,
                imageUrl,
                categoryId: parseInt(categoryId),
                allergens: allergens || [],
                weight,
                calories: calories ? parseInt(calories) : null,
                preparation,
                isPopular,
                isActive,
                sortOrder
            }
        });
        res.json(item);
    }
    catch (error) {
        console.error('Ошибка обновления блюда:', error);
        res.status(500).json({ error: 'Ошибка обновления блюда' });
    }
};
exports.updateMenuItem = updateMenuItem;
// Удалить блюдо
const deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.prisma.menuItem.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Блюдо удалено' });
    }
    catch (error) {
        console.error('Ошибка удаления блюда:', error);
        res.status(500).json({ error: 'Ошибка удаления блюда' });
    }
};
exports.deleteMenuItem = deleteMenuItem;
// Исправить дублирующиеся значения sortOrder
const fixSortOrder = async (req, res) => {
    try {
        console.log('🔧 Начинаем исправление порядка сортировки...');
        // Исправляем категории - группируем по menuTypeId
        const categories = await prisma_1.prisma.menuCategory.findMany({
            orderBy: [{ menuTypeId: 'asc' }, { sortOrder: 'asc' }, { id: 'asc' }]
        });
        // Группируем категории по menuTypeId
        const categoriesByMenuType = categories.reduce((acc, category) => {
            if (!acc[category.menuTypeId]) {
                acc[category.menuTypeId] = [];
            }
            acc[category.menuTypeId].push(category);
            return acc;
        }, {});
        // Исправляем sortOrder для каждой группы
        for (const [menuTypeId, categoryGroup] of Object.entries(categoriesByMenuType)) {
            console.log(`📝 Исправляем категории для типа меню ${menuTypeId}:`);
            for (let i = 0; i < categoryGroup.length; i++) {
                const category = categoryGroup[i];
                console.log(`  - ${category.name}: sortOrder ${category.sortOrder} → ${i}`);
                await prisma_1.prisma.menuCategory.update({
                    where: { id: category.id },
                    data: { sortOrder: i }
                });
            }
        }
        // Исправляем блюда - группируем по categoryId
        const items = await prisma_1.prisma.menuItem.findMany({
            orderBy: [{ categoryId: 'asc' }, { sortOrder: 'asc' }, { id: 'asc' }]
        });
        // Группируем блюда по categoryId
        const itemsByCategory = items.reduce((acc, item) => {
            if (!acc[item.categoryId]) {
                acc[item.categoryId] = [];
            }
            acc[item.categoryId].push(item);
            return acc;
        }, {});
        // Исправляем sortOrder для каждой группы блюд
        for (const [categoryId, itemGroup] of Object.entries(itemsByCategory)) {
            console.log(`🍽️ Исправляем блюда для категории ${categoryId}:`);
            for (let i = 0; i < itemGroup.length; i++) {
                const item = itemGroup[i];
                console.log(`  - ${item.name}: sortOrder ${item.sortOrder} → ${i}`);
                await prisma_1.prisma.menuItem.update({
                    where: { id: item.id },
                    data: { sortOrder: i }
                });
            }
        }
        console.log('✅ Порядок сортировки исправлен!');
        res.json({ message: 'Порядок сортировки исправлен' });
    }
    catch (error) {
        console.error('❌ Ошибка исправления порядка сортировки:', error);
        res.status(500).json({ error: 'Ошибка исправления порядка сортировки' });
    }
};
exports.fixSortOrder = fixSortOrder;
//# sourceMappingURL=menu.controller.js.map