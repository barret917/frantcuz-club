// Моковые данные для караоке закомментированы
/*
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Начинаем заполнение караоке...')

  // Очищаем существующие данные
  await prisma.karaokeService.deleteMany()
  console.log('🗑️ Существующие услуги караоке удалены')

  // Создаем услуги караоке
  const karaokeServices = [
    {
      name: 'Стандартный зал',
      type: 'standard',
      price: 500,
      description: 'Уютный зал для компании до 6 человек',
      sortOrder: 1
    },
    {
      name: 'VIP зал',
      type: 'vip',
      price: 1000,
      description: 'Премиум зал для особых случаев',
      sortOrder: 2
    },
    {
      name: 'Премиум зал',
      type: 'premium',
      price: 1500,
      description: 'Эксклюзивный зал с лучшим оборудованием',
      sortOrder: 3
    }
  ]

  for (const service of karaokeServices) {
    const createdService = await prisma.karaokeService.create({
      data: service
    })
    console.log(`✅ Создана услуга: ${createdService.name} - ${createdService.price}₽`)
  }

  console.log('🎉 Заполнение караоке завершено!')
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении караоке:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
*/ 