import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Начинаем заполнение настольных игр...')

  // Очищаем существующие данные
  await prisma.boardGame.deleteMany()
  console.log('🗑️ Существующие настольные игры удалены')

  // Создаем настольные игры
  const boardGames = [
    {
      name: 'Монополия',
      description: 'Классическая экономическая игра для всей семьи',
      price: 500,
      duration: '2-4 часа',
      players: '2-8 игроков',
      difficulty: 'Средняя',
      category: 'Экономическая',
      sortOrder: 1
    },
    {
      name: 'Шахматы',
      description: 'Интеллектуальная игра для развития логического мышления',
      price: 300,
      duration: '30-120 мин',
      players: '2 игрока',
      difficulty: 'Сложная',
      category: 'Логика',
      sortOrder: 2
    },
    {
      name: 'Uno',
      description: 'Быстрая и веселая карточная игра для всех возрастов',
      price: 200,
      duration: '15-30 мин',
      players: '2-10 игроков',
      difficulty: 'Легкая',
      category: 'Карточная',
      sortOrder: 3
    },
    {
      name: 'Дженга',
      description: 'Захватывающая игра на ловкость и точность',
      price: 250,
      duration: '10-20 мин',
      players: '2-8 игроков',
      difficulty: 'Легкая',
      category: 'Ловкость',
      sortOrder: 4
    },
    {
      name: 'Скраббл',
      description: 'Словесная игра для развития словарного запаса',
      price: 400,
      duration: '45-90 мин',
      players: '2-4 игрока',
      difficulty: 'Средняя',
      category: 'Словесная',
      sortOrder: 5
    }
  ]

  for (const game of boardGames) {
    const createdGame = await prisma.boardGame.create({
      data: game
    })
    console.log(`✅ Создана игра: ${createdGame.name} - ${createdGame.price}₽`)
  }

  console.log('🎉 Заполнение настольных игр завершено!')
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении настольных игр:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 