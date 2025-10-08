// Моковые данные закомментированы
/*
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Начинаем заполнение базы данных...')

  // Создаем услуги бильярда
  const billiardsServices = [
    {
      name: 'Русский бильярд',
      type: 'russian',
      price: 800,
      description: 'Классический русский бильярд',
      sortOrder: 1
    },
    {
      name: 'Американский пул',
      type: 'american',
      price: 600,
      description: 'Американский пул',
      sortOrder: 2
    },
    {
      name: 'VIP зал',
      type: 'vip',
      price: 1200,
      description: 'VIP зал с премиум обслуживанием',
      sortOrder: 3
    }
  ]

  for (const service of billiardsServices) {
    await prisma.billiardsService.upsert({
      where: { type: service.type },
      update: {},
      create: service
    })
  }

  console.log('✅ Услуги бильярда созданы')

  // Создаем настройки бильярда
  await prisma.billiardsSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      bookingFee: 100,
      bookingTimeoutMinutes: 20,
      minBookingDuration: 60,
      maxBookingDuration: 480
    }
  })

  console.log('✅ Настройки бильярда созданы')

  // Создаем услуги караоке
  const karaokeServices = [
    {
      name: 'Стандарт',
      type: 'standard',
      price: 500,
      description: 'Стандартный зал караоке',
      sortOrder: 1
    }
  ]

  for (const service of karaokeServices) {
    await prisma.karaokeService.upsert({
      where: { type: service.type },
      update: {},
      create: service
    })
  }

  console.log('✅ Услуги караоке созданы')

  // Создаем настройки караоке
  await prisma.karaokeSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      depositPolicy: 'В случае неиспользования суммы депозита, денежные средства не возвращаются.'
    }
  })

  console.log('✅ Настройки караоке созданы')

  // Создаем тестовые зоны бронирования
  const bookingZones = [
    {
      name: 'Бильярдный зал',
      type: 'billiards' as const,
      description: 'Профессиональные столы для русского бильярда',
      openTime: '10:00',
      closeTime: '24:00',
      pricePerHour: 800,
      deposit: 200,
      imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Караоке зал',
      type: 'karaoke' as const,
      description: 'Современное оборудование и огромная база песен',
      openTime: '12:00',
      closeTime: '24:00',
      pricePerHour: 500,
      deposit: 150,
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'PlayStation зона',
      type: 'playstation' as const,
      description: 'Новейшие игры и комфортные места',
      openTime: '10:00',
      closeTime: '22:00',
      pricePerHour: 300,
      deposit: 100,
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Диско-бар',
      type: 'disco' as const,
      description: 'Танцпол с современной звуковой системой и световыми эффектами',
      openTime: '20:00',
      closeTime: '06:00',
      pricePerHour: 1000,
      deposit: 300,
      imageUrl: 'https://images.unsplash.com/photo-1571266028243-e68f09784f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'VIP лаунж',
      type: 'billiards' as const,
      description: 'Эксклюзивная зона с премиум обслуживанием',
      openTime: '18:00',
      closeTime: '02:00',
      pricePerHour: 1500,
      deposit: 500,
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Коктейль-бар',
      type: 'karaoke' as const,
      description: 'Уютный бар с авторскими коктейлями и караоке',
      openTime: '19:00',
      closeTime: '03:00',
      pricePerHour: 600,
      deposit: 200,
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  for (const zone of bookingZones) {
    await prisma.bookingZone.create({
      data: zone
    })
  }

  console.log('✅ Зоны бронирования созданы')

  // Создаем тестовые столы
  const zones = await prisma.bookingZone.findMany()
  
  for (const zone of zones) {
    const tables = [
      {
        name: `${zone.name} - Стол 1`,
        x: 100,
        y: 100,
        width: 150,
        height: 75,
        seats: 4
      },
      {
        name: `${zone.name} - Стол 2`,
        x: 300,
        y: 100,
        width: 150,
        height: 75,
        seats: 4
      },
      {
        name: `${zone.name} - VIP стол`,
        x: 100,
        y: 250,
        width: 200,
        height: 100,
        seats: 6
      }
    ]

    for (const table of tables) {
      await prisma.bookingTable.create({
        data: {
          zoneId: zone.id,
          ...table
        }
      })
    }
  }

  console.log('✅ Столы бронирования созданы')

  // Создаем тестовые фотографии карусели
  const carouselPhotos = [
    {
      title: 'Профессиональные столы',
      description: 'Высококачественные столы для русского бильярда',
      imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      page: 'billiards' as const,
      sortOrder: 1
    },
    {
      title: 'Современное оборудование',
      description: 'Профессиональные кии и шары',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      page: 'billiards' as const,
      sortOrder: 2
    },
    {
      title: 'Уютная атмосфера',
      description: 'Идеальное место для отдыха и игры',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      page: 'billiards' as const,
      sortOrder: 3
    },
    {
      title: 'Профессиональное оборудование',
      description: 'Высококачественные микрофоны и акустика',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      page: 'karaoke' as const,
      sortOrder: 1
    },
    {
      title: 'Огромная база песен',
      description: 'Более 100,000 песен на разных языках',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      page: 'karaoke' as const,
      sortOrder: 2
    },
    {
      title: 'Современная звуковая система',
      description: 'Мощный звук для незабываемых вечеринок',
      imageUrl: 'https://images.unsplash.com/photo-1571266028243-e68f09784f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      page: 'disco' as const,
      sortOrder: 1
    },
    {
      title: 'Световые эффекты',
      description: 'Динамичное освещение для создания атмосферы',
      imageUrl: 'https://images.unsplash.com/photo-1571266028243-e68f09784f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      page: 'disco' as const,
      sortOrder: 2
    }
  ]

  for (const photo of carouselPhotos) {
    await prisma.carouselPhoto.create({
      data: photo
    })
  }

  console.log('✅ Тестовые фотографии карусели созданы')

  // Создаем тестовые мероприятия
  const testEvents = [
    {
      title: 'Новогодняя вечеринка 2024',
      description: 'Встречайте Новый год в нашем клубе! Живая музыка, танцы, фейерверк и незабываемые эмоции.',
      date: new Date('2024-12-31'),
      time: '22:00',
      location: 'Главный зал',
      organizer: 'Frantsuz Club',
      imageUrl: '/images/default-event.jpg',
      category: 'party',
      isUpcoming: true,
      isActive: true,
      sortOrder: 1,
      maxGuests: 200,
      price: '2500-5000',
      tags: ['новый год', 'вечеринка', 'живая музыка'],
      contactInfo: '+7 (999) 123-45-67'
    },
    {
      title: 'День рождения клуба',
      description: 'Отмечаем годовщину нашего клуба! Специальные гости, конкурсы и подарки для всех.',
      date: new Date('2024-12-15'),
      time: '20:00',
      location: 'VIP зал',
      organizer: 'Frantsuz Club',
      imageUrl: '/images/default-event.jpg',
      category: 'celebration',
      isUpcoming: true,
      isActive: true,
      sortOrder: 2,
      maxGuests: 150,
      price: '2000-4000',
      tags: ['день рождения', 'конкурсы', 'подарки'],
      contactInfo: '+7 (999) 123-45-67'
    },
    {
      title: 'Рок-концерт "Громкие струны"',
      description: 'Мощный рок-концерт с участием лучших местных групп. Огромный звук, световые эффекты и драйв!',
      date: new Date('2024-12-20'),
      time: '19:00',
      location: 'Концертный зал',
      organizer: 'Rock Events',
      imageUrl: '/images/default-event.jpg',
      category: 'concert',
      isUpcoming: true,
      isActive: true,
      sortOrder: 3,
      maxGuests: 300,
      price: '1500-3000',
      tags: ['рок', 'концерт', 'живая музыка'],
      contactInfo: '+7 (999) 234-56-78'
    },
    {
      title: 'Корпоративная вечеринка',
      description: 'Специальное мероприятие для корпоративных клиентов. Банкет, развлекательная программа, призы.',
      date: new Date('2024-12-25'),
      time: '18:00',
      location: 'Банкетный зал',
      organizer: 'Corporate Events',
      imageUrl: '/images/default-event.jpg',
      category: 'corporate',
      isUpcoming: true,
      isActive: true,
      sortOrder: 4,
      maxGuests: 100,
      price: '3000-6000',
      tags: ['корпоратив', 'банкет', 'призы'],
      contactInfo: '+7 (999) 345-67-89'
    },
    {
      title: 'Танцевальная вечеринка "Disco Night"',
      description: 'Ночная танцевальная вечеринка с лучшими диджеями города. Современная музыка, световые шоу.',
      date: new Date('2024-12-28'),
      time: '23:00',
      location: 'Танцпол',
      organizer: 'Disco Club',
      imageUrl: '/images/default-event.jpg',
      category: 'disco',
      isUpcoming: true,
      isActive: true,
      sortOrder: 5,
      maxGuests: 250,
      price: '1000-2500',
      tags: ['диско', 'танцы', 'диджеи'],
      contactInfo: '+7 (999) 456-78-90'
    },
    {
      title: 'Джазовый вечер',
      description: 'Уютный джазовый вечер в атмосфере ретро-клуба. Живая музыка, коктейли, романтическая атмосфера.',
      date: new Date('2024-12-22'),
      time: '20:30',
      location: 'Джаз-бар',
      organizer: 'Jazz Society',
      imageUrl: '/images/default-event.jpg',
      category: 'jazz',
      isUpcoming: true,
      isActive: true,
      sortOrder: 6,
      maxGuests: 80,
      price: '2000-4000',
      tags: ['джаз', 'ретро', 'коктейли'],
      contactInfo: '+7 (999) 567-89-01'
    },
    {
      title: 'Кулинарный мастер-класс',
      description: 'Учимся готовить изысканные блюда с профессиональным шеф-поваром. Дегустация и рецепты в подарок.',
      date: new Date('2024-12-18'),
      time: '15:00',
      location: 'Кулинарная студия',
      organizer: 'Culinary Academy',
      imageUrl: '/images/default-event.jpg',
      category: 'masterclass',
      isUpcoming: true,
      isActive: true,
      sortOrder: 7,
      maxGuests: 25,
      price: '3500-5000',
      tags: ['кулинария', 'мастер-класс', 'дегустация'],
      contactInfo: '+7 (999) 678-90-12'
    },
    {
      title: 'Пивной фестиваль',
      description: 'Дегустация лучших сортов пива от местных пивоварен. Живая музыка, закуски и веселая атмосфера.',
      date: new Date('2024-12-24'),
      time: '17:00',
      location: 'Пивной сад',
      organizer: 'Beer Festival',
      imageUrl: '/images/default-event.jpg',
      category: 'festival',
      isUpcoming: true,
      isActive: true,
      sortOrder: 8,
      maxGuests: 120,
      price: '1500-3000',
      tags: ['пиво', 'дегустация', 'фестиваль'],
      contactInfo: '+7 (999) 789-01-23'
    },
    {
      title: 'Стендап-шоу "Смех до слез"',
      description: 'Вечер юмора с лучшими стендап-комиками города. Смех, хорошее настроение и отличная компания.',
      date: new Date('2024-12-26'),
      time: '21:00',
      location: 'Комеди-клуб',
      organizer: 'Comedy Club',
      imageUrl: '/images/default-event.jpg',
      category: 'comedy',
      isUpcoming: true,
      isActive: true,
      sortOrder: 9,
      maxGuests: 90,
      price: '2000-3500',
      tags: ['стендап', 'юмор', 'комедия'],
      contactInfo: '+7 (999) 890-12-34'
    },
    {
      title: 'Ретро-дискотека 80-90х',
      description: 'Путешествие в прошлое! Лучшие хиты 80-90х годов, ретро-костюмы и атмосфера того времени.',
      date: new Date('2024-12-29'),
      time: '22:00',
      location: 'Ретро-зал',
      organizer: 'Retro Party',
      imageUrl: '/images/default-event.jpg',
      category: 'retro',
      isUpcoming: true,
      isActive: true,
      sortOrder: 10,
      maxGuests: 180,
      price: '1200-2500',
      tags: ['ретро', '80-90е', 'дискотека'],
      contactInfo: '+7 (999) 901-23-45'
    }
  ]

  for (const eventData of testEvents) {
    const event = await prisma.event.create({
      data: eventData
    })

    // Создаем зоны для мероприятия
    const zones = [
      {
        name: 'VIP зона',
        description: 'Премиум места с лучшим видом',
        price: 2500,
        maxSeats: 20,
        isActive: true,
        sortOrder: 1,
        eventId: event.id
      },
      {
        name: 'Обычная зона',
        description: 'Стандартные места',
        price: 1500,
        maxSeats: 50,
        isActive: true,
        sortOrder: 2,
        eventId: event.id
      }
    ]

    for (const zoneData of zones) {
      const zone = await prisma.eventZone.create({
        data: zoneData
      })

      // Создаем столы для зоны
      const tablesPerZone = zoneData.name === 'VIP зона' ? 4 : 8
      const seatsPerTable = zoneData.name === 'VIP зона' ? 4 : 6

      for (let i = 1; i <= tablesPerZone; i++) {
        await prisma.eventTable.create({
          data: {
            name: `Стол ${i}`,
            seats: seatsPerTable,
            x: Math.random() * 400 + 50,
            y: Math.random() * 300 + 50,
            width: 80,
            height: 60,
            isActive: true,
            zoneId: zone.id
          }
        })
      }
    }
  }

  console.log('✅ Тестовые мероприятия созданы')

  console.log('🎉 База данных успешно заполнена!')
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении базы данных:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
*/ 