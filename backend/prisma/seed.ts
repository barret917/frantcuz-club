import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Начинаем заполнение базы данных...')

  // Создаем услуги бильярда
  const billiardsServices = [
    {
      name: 'Русский бильярд',
      type: 'russian',
      weekdayPrice: 800,
      weekendPrice: 1000,
      description: 'Классический русский бильярд',
      sortOrder: 1
    },
    {
      name: 'Американский пул',
      type: 'american',
      weekdayPrice: 600,
      weekendPrice: 800,
      description: 'Американский пул',
      sortOrder: 2
    },
    {
      name: 'VIP зал',
      type: 'vip',
      weekdayPrice: 1200,
      weekendPrice: 1500,
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
      weekdayPrice: 500,
      weekendPrice: 700,
      description: 'Стандартный зал караоке',
      sortOrder: 1
    },
    {
      name: 'VIP',
      type: 'vip',
      weekdayPrice: 1000,
      weekendPrice: 1500,
      description: 'VIP зал караоке',
      sortOrder: 2
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
      maxVipGuests: 15,
      baseVipPrice: 21000,
      additionalGuestPrice: 3500,
      depositPolicy: 'В случае неиспользования суммы депозита, денежные средства не возвращаются.'
    }
  })

  console.log('✅ Настройки караоке созданы')

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