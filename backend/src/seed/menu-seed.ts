import { prisma } from '../prisma';

async function seedMenu() {
  try {
    console.log('🌱 Начинаем заполнение меню...');

    // Создаем типы меню
    const mainMenu = await prisma.menuType.upsert({
      where: { slug: 'main' },
      update: {},
      create: {
        name: 'Основное',
        slug: 'main',
        description: 'Основное меню ресторана',
        sortOrder: 1
      }
    });

    const barMenu = await prisma.menuType.upsert({
      where: { slug: 'bar' },
      update: {},
      create: {
        name: 'Барная карта',
        slug: 'bar',
        description: 'Напитки и коктейли',
        sortOrder: 2
      }
    });

    const banquetMenu = await prisma.menuType.upsert({
      where: { slug: 'banquet' },
      update: {},
      create: {
        name: 'Банкетное меню',
        slug: 'banquet',
        description: 'Банкетные наборы и фуршеты',
        sortOrder: 3
      }
    });

    // Создаем категории для основного меню
    const mainCategories = [
      { name: 'Холодные закуски', slug: 'cold-appetizers', sortOrder: 1 },
      { name: 'Салаты', slug: 'salads', sortOrder: 2 },
      { name: 'Горячие закуски', slug: 'hot-appetizers', sortOrder: 3 },
      { name: 'Первые блюда', slug: 'soups', sortOrder: 4 },
      { name: 'Горячие блюда', slug: 'main-courses', sortOrder: 5 },
      { name: 'Гарнир', slug: 'side-dishes', sortOrder: 6 },
      { name: 'Пицца', slug: 'pizza', sortOrder: 7 },
      { name: 'Хачапури', slug: 'khachapuri', sortOrder: 8 },
      { name: 'Закуски к пиву', slug: 'beer-snacks', sortOrder: 9 },
      { name: 'Блюда для большой компании', slug: 'group-dishes', sortOrder: 10 },
      { name: 'Блюда на мангале', slug: 'grill-dishes', sortOrder: 11 },
      { name: 'Соусы', slug: 'sauces', sortOrder: 12 },
      { name: 'Хлеб', slug: 'bread', sortOrder: 13 },
      { name: 'Десерты', slug: 'desserts', sortOrder: 14 }
    ];

    for (const category of mainCategories) {
      await prisma.menuCategory.upsert({
        where: { slug: category.slug },
        update: {},
        create: {
          ...category,
          menuTypeId: mainMenu.id
        }
      });
    }

    // Создаем категории для барной карты
    const barCategories = [
      { name: 'Коктейли', slug: 'cocktails', sortOrder: 1 },
      { name: 'Вино', slug: 'wine', sortOrder: 2 },
      { name: 'Пиво', slug: 'beer', sortOrder: 3 },
      { name: 'Крепкие напитки', slug: 'spirits', sortOrder: 4 },
      { name: 'Безалкогольные', slug: 'non-alcoholic', sortOrder: 5 },
      { name: 'Кофе', slug: 'coffee', sortOrder: 6 },
      { name: 'Чай', slug: 'tea', sortOrder: 7 },
      { name: 'Соки', slug: 'juices', sortOrder: 8 },
      { name: 'Лимонады', slug: 'lemonades', sortOrder: 9 }
    ];

    for (const category of barCategories) {
      await prisma.menuCategory.upsert({
        where: { slug: category.slug },
        update: {},
        create: {
          ...category,
          menuTypeId: barMenu.id
        }
      });
    }

    // Создаем категории для банкетного меню
    const banquetCategories = [
      { name: 'Банкетные наборы', slug: 'banquet-sets', sortOrder: 1 },
      { name: 'Фуршетные блюда', slug: 'buffet-dishes', sortOrder: 2 },
      { name: 'Горячие блюда', slug: 'hot-dishes', sortOrder: 3 },
      { name: 'Холодные закуски', slug: 'cold-appetizers', sortOrder: 4 },
      { name: 'Салаты', slug: 'salads', sortOrder: 5 },
      { name: 'Десерты', slug: 'desserts', sortOrder: 6 },
      { name: 'Напитки', slug: 'beverages', sortOrder: 7 }
    ];

    for (const category of banquetCategories) {
      await prisma.menuCategory.upsert({
        where: { slug: category.slug },
        update: {},
        create: {
          ...category,
          menuTypeId: banquetMenu.id
        }
      });
    }

    // Получаем категории для создания блюд
    const coldAppetizers = await prisma.menuCategory.findUnique({ where: { slug: 'cold-appetizers' } });
    const salads = await prisma.menuCategory.findUnique({ where: { slug: 'salads' } });
    const cocktails = await prisma.menuCategory.findUnique({ where: { slug: 'cocktails' } });
    const beer = await prisma.menuCategory.findUnique({ where: { slug: 'beer' } });
    const banquetSets = await prisma.menuCategory.findUnique({ where: { slug: 'banquet-sets' } });

    // Создаем примеры блюд
    if (coldAppetizers) {
      await prisma.menuItem.upsert({
        where: { id: 1 },
        update: {},
        create: {
          name: 'Карпаччо из говядины',
          description: 'Тонко нарезанная говядина с оливковым маслом, пармезаном и рукколой',
          price: 650.00,
          currency: '₽',
          imageUrl: 'https://via.placeholder.com/300x200/ffd700/000?text=Карпаччо',
          categoryId: coldAppetizers.id,
          allergens: ['молоко'],
          weight: '150г',
          calories: 280,
          preparation: '10 мин',
          isPopular: true,
          sortOrder: 1
        }
      });
    }

    if (salads) {
      await prisma.menuItem.upsert({
        where: { id: 2 },
        update: {},
        create: {
          name: 'Цезарь с курицей',
          description: 'Классический салат с куриным филе, сухариками и соусом цезарь',
          price: 450.00,
          currency: '₽',
          imageUrl: 'https://via.placeholder.com/300x200/ffd700/000?text=Цезарь',
          categoryId: salads.id,
          allergens: ['глютен', 'молоко', 'яйца'],
          weight: '250г',
          calories: 320,
          preparation: '15 мин',
          isPopular: true,
          sortOrder: 1
        }
      });
    }

    if (cocktails) {
      await prisma.menuItem.upsert({
        where: { id: 3 },
        update: {},
        create: {
          name: 'Мохито',
          description: 'Классический коктейль с ромом, лаймом, мятой и содовой',
          price: 350.00,
          currency: '₽',
          imageUrl: 'https://via.placeholder.com/300x200/ffd700/000?text=Мохито',
          categoryId: cocktails.id,
          weight: '0.3л',
          calories: 120,
          preparation: '5 мин',
          isPopular: true,
          sortOrder: 1
        }
      });
    }

    if (beer) {
      await prisma.menuItem.upsert({
        where: { id: 4 },
        update: {},
        create: {
          name: 'Heineken',
          description: 'Светлое пиво, 0.5л',
          price: 250.00,
          currency: '₽',
          imageUrl: 'https://via.placeholder.com/300x200/ffd700/000?text=Heineken',
          categoryId: beer.id,
          allergens: ['глютен'],
          weight: '0.5л',
          calories: 150,
          preparation: 'Мгновенно',
          sortOrder: 1
        }
      });
    }

    if (banquetSets) {
      await prisma.menuItem.upsert({
        where: { id: 5 },
        update: {},
        create: {
          name: 'Банкетный набор "Стандарт"',
          description: 'Холодные закуски, горячие блюда, салаты, десерты на 10 человек',
          price: 25000.00,
          currency: '₽',
          imageUrl: 'https://via.placeholder.com/300x200/ffd700/000?text=Банкет',
          categoryId: banquetSets.id,
          weight: 'На 10 чел',
          preparation: 'По договоренности',
          isPopular: false,
          sortOrder: 1
        }
      });
    }

    console.log('✅ Меню успешно заполнено!');
  } catch (error) {
    console.error('❌ Ошибка заполнения меню:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Запускаем заполнение если файл выполняется напрямую
if (require.main === module) {
  seedMenu();
}

export { seedMenu }; 