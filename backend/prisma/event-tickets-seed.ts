// Моковые данные для мероприятий закомментированы
/*
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedEventTickets() {
  console.log('🌱 Начинаем создание тестовых данных для системы мероприятий...')

  try {
    // Создаем тестовое мероприятие
    const event = await prisma.event.create({
      data: {
        title: 'Концерт живой музыки',
        description: 'Уникальный вечер живой музыки с участием лучших исполнителей города. Незабываемые эмоции и атмосфера!',
        date: new Date('2024-12-25'),
        time: '20:00',
        category: 'Концерт',
        imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
        location: 'Главный зал клуба',
        organizer: 'Frantsuz Club',
        contactInfo: '+7 (999) 123-45-67',
        isUpcoming: true,
        maxGuests: 100
      }
    })

    console.log('✅ Создано мероприятие:', event.title)

    // Создаем зоны для мероприятия
    const vipZone = await prisma.eventZone.create({
      data: {
        eventId: event.id,
        name: 'VIP зона',
        description: 'Премиум места с лучшим видом на сцену',
        price: 5000,
        maxSeats: 20,
        sortOrder: 1
      }
    })

    const standardZone = await prisma.eventZone.create({
      data: {
        eventId: event.id,
        name: 'Стандартная зона',
        description: 'Комфортные места для всех гостей',
        price: 2500,
        maxSeats: 60,
        sortOrder: 2
      }
    })

    const budgetZone = await prisma.eventZone.create({
      data: {
        eventId: event.id,
        name: 'Бюджетная зона',
        description: 'Доступные места для молодежи',
        price: 1500,
        maxSeats: 20,
        sortOrder: 3
      }
    })

    console.log('✅ Созданы зоны:', vipZone.name, standardZone.name, budgetZone.name)

    // Создаем столы для VIP зоны
    const vipTables = []
    for (let i = 1; i <= 4; i++) {
      const table = await prisma.eventTable.create({
        data: {
          zoneId: vipZone.id,
          name: `VIP-${i}`,
          x: 50 + (i - 1) * 120,
          y: 50,
          width: 100,
          height: 80,
          seats: 5
        }
      })
      vipTables.push(table)
    }

    // Создаем столы для стандартной зоны
    const standardTables = []
    for (let i = 1; i <= 12; i++) {
      const row = Math.floor((i - 1) / 4)
      const col = (i - 1) % 4
      const table = await prisma.eventTable.create({
        data: {
          zoneId: standardZone.id,
          name: `Стол-${i}`,
          x: 50 + col * 120,
          y: 200 + row * 100,
          width: 100,
          height: 80,
          seats: 5
        }
      })
      standardTables.push(table)
    }

    // Создаем столы для бюджетной зоны
    const budgetTables = []
    for (let i = 1; i <= 4; i++) {
      const table = await prisma.eventTable.create({
        data: {
          zoneId: budgetZone.id,
          name: `Бюджет-${i}`,
          x: 50 + (i - 1) * 120,
          y: 450,
          width: 100,
          height: 80,
          seats: 5
        }
      })
      budgetTables.push(table)
    }

    console.log('✅ Созданы столы:')
    console.log(`   VIP зона: ${vipTables.length} столов`)
    console.log(`   Стандартная зона: ${standardTables.length} столов`)
    console.log(`   Бюджетная зона: ${budgetTables.length} столов`)

    // Создаем еще одно мероприятие
    const event2 = await prisma.event.create({
      data: {
        title: 'Новогодняя вечеринка',
        description: 'Грандиозная новогодняя вечеринка с диджеем, фейерверками и подарками!',
        date: new Date('2024-12-31'),
        time: '22:00',
        category: 'Вечеринка',
        imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
        location: 'Танцевальный зал',
        organizer: 'Frantsuz Club',
        contactInfo: '+7 (999) 123-45-67',
        isUpcoming: true,
        maxGuests: 150
      }
    })

    // Создаем зоны для второго мероприятия
    const danceZone = await prisma.eventZone.create({
      data: {
        eventId: event2.id,
        name: 'Танцевальная зона',
        description: 'Места рядом с танцполом',
        price: 3000,
        maxSeats: 80,
        sortOrder: 1
      }
    })

    const barZone = await prisma.eventZone.create({
      data: {
        eventId: event2.id,
        name: 'Барная зона',
        description: 'Столики у бара',
        price: 2000,
        maxSeats: 40,
        sortOrder: 2
      }
    })

    // Создаем столы для танцевальной зоны
    for (let i = 1; i <= 16; i++) {
      const row = Math.floor((i - 1) / 4)
      const col = (i - 1) % 4
      await prisma.eventTable.create({
        data: {
          zoneId: danceZone.id,
          name: `Танец-${i}`,
          x: 50 + col * 120,
          y: 50 + row * 100,
          width: 100,
          height: 80,
          seats: 5
        }
      })
    }

    // Создаем столы для барной зоны
    for (let i = 1; i <= 8; i++) {
      await prisma.eventTable.create({
        data: {
          zoneId: barZone.id,
          name: `Бар-${i}`,
          x: 50 + (i - 1) * 120,
          y: 400,
          width: 100,
          height: 80,
          seats: 5
        }
      })
    }

    console.log('✅ Создано второе мероприятие:', event2.title)

    console.log('🎉 Все тестовые данные для системы мероприятий созданы успешно!')
    console.log(`📊 Создано:`)
    console.log(`   - Мероприятий: 2`)
    console.log(`   - Зон: 5`)
    console.log(`   - Столов: ${vipTables.length + standardTables.length + budgetTables.length + 16 + 8}`)

  } catch (error) {
    console.error('❌ Ошибка при создании тестовых данных:', error)
    throw error
  }
}

// Запускаем создание тестовых данных
seedEventTickets()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
*/
