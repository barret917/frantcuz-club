import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Начинаем заполнение базы данных...')

  // Создаем услуги бильярда
  console.log('🎱 Создаем услуги бильярда...')
  
  const russianBilliards = await prisma.billiardsService.upsert({
    where: { type: 'russian' },
    update: {},
    create: {
      name: 'Русский бильярд',
      type: 'russian',
      weekdayPrice: 900,
      weekendPrice: 960,
      description: 'Классический русский бильярд с профессиональными столами',
      imageUrl: '',
      isActive: true,
      sortOrder: 1
    }
  })

  const americanPool = await prisma.billiardsService.upsert({
    where: { type: 'american' },
    update: {},
    create: {
      name: 'Американский пул',
      type: 'american',
      weekdayPrice: 840,
      weekendPrice: 900,
      description: 'Американский пул для любителей быстрой игры',
      imageUrl: '',
      isActive: true,
      sortOrder: 2
    }
  })

  const vipHalls = await prisma.billiardsService.upsert({
    where: { type: 'vip' },
    update: {},
    create: {
      name: 'VIP залы',
      type: 'vip',
      weekdayPrice: 1440,
      weekendPrice: 1500,
      description: 'Премиум VIP залы с эксклюзивным обслуживанием',
      imageUrl: '',
      isActive: true,
      sortOrder: 3
    }
  })

  // Создаем настройки бильярда
  console.log('⚙️ Создаем настройки бильярда...')
  
  const billiardsSettings = await prisma.billiardsSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      bookingFee: 100,
      bookingTimeoutMinutes: 20,
      minBookingDuration: 60,
      maxBookingDuration: 480,
      isActive: true
    }
  })

  console.log('✅ База данных успешно заполнена!')
  console.log('Созданные услуги бильярда:')
  console.log('- Русский бильярд:', russianBilliards.id)
  console.log('- Американский пул:', americanPool.id)
  console.log('- VIP залы:', vipHalls.id)
  console.log('Настройки бильярда:', billiardsSettings.id)
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении базы данных:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 