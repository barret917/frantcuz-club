// Моковые данные для бильярда закомментированы
/*
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Начинаем заполнение бильярда...')

  // Очищаем существующие данные
  await prisma.billiardsService.deleteMany()
  console.log('🗑️ Существующие услуги бильярда удалены')

  // Создаем услуги бильярда
  const billiardsServices = [
    {
      name: 'Русский бильярд',
      type: 'russian',
      price: 800,
      description: 'Классический русский бильярд с профессиональными столами',
      sortOrder: 1
    },
    {
      name: 'Американский пул',
      type: 'american',
      price: 600,
      description: 'Американский пул для любителей быстрой игры',
      sortOrder: 2
    },
    {
      name: 'VIP зал',
      type: 'vip',
      price: 1200,
      description: 'Премиум VIP залы с эксклюзивным обслуживанием',
      sortOrder: 3
    }
  ]

  for (const service of billiardsServices) {
    const createdService = await prisma.billiardsService.create({
      data: service
    })
    console.log(`✅ Создана услуга: ${createdService.name} - ${createdService.price}₽`)
  }

  console.log('🎉 Заполнение бильярда завершено!')
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении бильярда:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
*/ 