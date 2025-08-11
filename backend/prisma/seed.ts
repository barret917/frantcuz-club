import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function initDatabase() {
  try {
    console.log('🌱 Инициализация базы данных...')

    // Создаем таблицы через Prisma
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "BilliardsService" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL UNIQUE,
        "weekdayPrice" DECIMAL(8,2) NOT NULL,
        "weekendPrice" DECIMAL(8,2) NOT NULL,
        description TEXT,
        "imageUrl" TEXT,
        "isActive" BOOLEAN DEFAULT true,
        "sortOrder" INTEGER DEFAULT 0,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "BilliardsSettings" (
        id SERIAL PRIMARY KEY,
        "bookingFee" DECIMAL(8,2) DEFAULT 100,
        "bookingTimeoutMinutes" INTEGER DEFAULT 20,
        "minBookingDuration" INTEGER DEFAULT 60,
        "maxBookingDuration" INTEGER DEFAULT 480,
        "isActive" BOOLEAN DEFAULT true,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Создаем таблицы караоке
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "KaraokeService" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL UNIQUE,
        "weekdayPrice" DECIMAL(8,2) NOT NULL,
        "weekendPrice" DECIMAL(8,2) NOT NULL,
        description TEXT,
        "imageUrl" TEXT,
        "isActive" BOOLEAN DEFAULT true,
        "sortOrder" INTEGER DEFAULT 0,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "KaraokeSettings" (
        id SERIAL PRIMARY KEY,
        "maxVipGuests" INTEGER DEFAULT 15,
        "baseVipPrice" DECIMAL(8,2) DEFAULT 21000,
        "additionalGuestPrice" DECIMAL(8,2) DEFAULT 3500,
        "depositPolicy" TEXT DEFAULT 'В случае неиспользования суммы депозита, денежные средства не возвращаются.',
        "isActive" BOOLEAN DEFAULT true,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log('✅ Таблицы созданы успешно!')

    // Проверяем, есть ли уже данные для бильярда
    const existingBilliardsServices = await prisma.billiardsService.findMany()

    if (existingBilliardsServices.length === 0) {
      console.log('🎱 Создаем начальные данные для бильярда...')

      // Создаем услуги бильярда
      await prisma.billiardsService.createMany({
        data: [
          {
            name: 'Русский бильярд',
            type: 'russian',
            weekdayPrice: 900,
            weekendPrice: 960,
            description: 'Классический русский бильярд с профессиональными столами',
            imageUrl: '',
            isActive: true,
            sortOrder: 1
          },
          {
            name: 'Американский пул',
            type: 'american',
            weekdayPrice: 840,
            weekendPrice: 900,
            description: 'Американский пул для любителей быстрой игры',
            imageUrl: '',
            isActive: true,
            sortOrder: 2
          },
          {
            name: 'VIP залы',
            type: 'vip',
            weekdayPrice: 1440,
            weekendPrice: 1500,
            description: 'Премиум VIP залы с эксклюзивным обслуживанием',
            imageUrl: '',
            isActive: true,
            sortOrder: 3
          }
        ]
      })

      // Создаем настройки бильярда
      await prisma.billiardsSettings.create({
        data: {
          bookingFee: 100,
          bookingTimeoutMinutes: 20,
          minBookingDuration: 60,
          maxBookingDuration: 480,
          isActive: true
        }
      })

      console.log('✅ Начальные данные для бильярда созданы!')
    } else {
      console.log('ℹ️ Данные для бильярда уже существуют')
    }

    // Создаем начальные данные для караоке через raw SQL
    console.log('🎤 Создаем начальные данные для караоке...')
    
    await prisma.$executeRaw`
      INSERT INTO "KaraokeService" (name, type, "weekdayPrice", "weekendPrice", description, "imageUrl", "isActive", "sortOrder")
      VALUES 
        ('Депозит', 'deposit', 2000, 2500, 'Депозит для бронирования караоке зала', '', true, 1),
        ('VIP зал', 'vip', 21000, 21000, 'VIP зал на компанию до 6 гостей', '', true, 2)
      ON CONFLICT (type) DO NOTHING
    `

    await prisma.$executeRaw`
      INSERT INTO "KaraokeSettings" ("maxVipGuests", "baseVipPrice", "additionalGuestPrice", "depositPolicy", "isActive")
      VALUES (15, 21000, 3500, 'В случае неиспользования суммы депозита, денежные средства не возвращаются.', true)
      ON CONFLICT (id) DO NOTHING
    `

    console.log('✅ Начальные данные для караоке созданы!')

  } catch (error) {
    console.error('❌ Ошибка при инициализации:', error)
  } finally {
    await prisma.$disconnect()
  }
}

initDatabase() 