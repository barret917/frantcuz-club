const axios = require('axios')

const BASE_URL = 'http://localhost:3002/api/zones-management'

async function testZonesSystem() {
  try {
    console.log('🚀 Тестирование универсальной системы зон...\n')

    // 1. Создаем зону караоке
    console.log('1️⃣ Создание зоны караоке...')
    const karaokeZone = await axios.post(`${BASE_URL}`, {
      name: 'Караоке зона',
      type: 'karaoke',
      openTime: '12:00',
      closeTime: '02:00',
      imageUrl: '/images/karaoke-zone.jpg'
    })
    console.log('✅ Зона караоке создана:', karaokeZone.data.data.name)
    const karaokeZoneId = karaokeZone.data.data.id

    // 2. Создаем зону бильярда
    console.log('\n2️⃣ Создание зоны бильярда...')
    const billiardsZone = await axios.post(`${BASE_URL}`, {
      name: 'Бильярд зона',
      type: 'billiards',
      openTime: '10:00',
      closeTime: '23:00',
      imageUrl: '/images/billiards-zone.jpg'
    })
    console.log('✅ Зона бильярда создана:', billiardsZone.data.data.name)
    const billiardsZoneId = billiardsZone.data.data.id

    // 3. Создаем зону PlayStation
    console.log('\n3️⃣ Создание зоны PlayStation...')
    const psZone = await axios.post(`${BASE_URL}`, {
      name: 'PlayStation зона',
      type: 'playstation',
      openTime: '10:00',
      closeTime: '22:00',
      imageUrl: '/images/playstation-zone.jpg'
    })
    console.log('✅ Зона PlayStation создана:', psZone.data.data.name)
    const psZoneId = psZone.data.data.id

    // 4. Создаем стол в караоке
    console.log('\n4️⃣ Создание стола в караоке...')
    const karaokeTable = await axios.post(`${BASE_URL}/items`, {
      zoneId: karaokeZoneId,
      label: 'Стол VIP-1',
      type: 'table',
      x: 100,
      y: 50,
      width: 200,
      height: 150,
      seats: 6,
      pricePerSeat: 500,
      description: 'VIP стол с отличным видом на сцену',
      features: ['WiFi', 'кондиционер', 'VIP обслуживание']
    })
    console.log('✅ Стол в караоке создан:', karaokeTable.data.data.label)
    const karaokeTableId = karaokeTable.data.data.id

    // 5. Создаем бильярдный стол
    console.log('\n5️⃣ Создание бильярдного стола...')
    const billiardsTable = await axios.post(`${BASE_URL}/items`, {
      zoneId: billiardsZoneId,
      label: 'Бильярдный стол №1',
      type: 'gameTable',
      x: 200,
      y: 100,
      width: 300,
      height: 200,
      capacity: 4,
      pricePerHour: 800,
      minDuration: 60,
      maxDuration: 240,
      description: 'Профессиональный бильярдный стол',
      features: ['освещение', 'кии', 'мелки']
    })
    console.log('✅ Бильярдный стол создан:', billiardsTable.data.data.label)
    const billiardsTableId = billiardsTable.data.data.id

    // 6. Создаем PlayStation кабинку
    console.log('\n6️⃣ Создание PlayStation кабинки...')
    const psBooth = await axios.post(`${BASE_URL}/items`, {
      zoneId: psZoneId,
      label: 'PS5 кабинка №1',
      type: 'booth',
      x: 150,
      y: 75,
      width: 250,
      height: 180,
      capacity: 2,
      pricePerHour: 600,
      minDuration: 30,
      maxDuration: 120,
      description: 'Кабинка с PlayStation 5',
      features: ['PS5', '4K телевизор', 'наушники', 'WiFi']
    })
    console.log('✅ PlayStation кабинка создана:', psBooth.data.data.label)
    const psBoothId = psBooth.data.data.id

    // 7. Получаем все зоны
    console.log('\n7️⃣ Получение всех зон...')
    const allZones = await axios.get(`${BASE_URL}`)
    console.log('✅ Получено зон:', allZones.data.data.length)

    // 8. Получаем элементы караоке зоны
    console.log('\n8️⃣ Получение элементов караоке зоны...')
    const karaokeItems = await axios.get(`${BASE_URL}/karaoke/items`)
    console.log('✅ Элементов в караоке:', karaokeItems.data.data.length)

    // 9. Бронируем место в караоке
    console.log('\n9️⃣ Бронирование места в караоке...')
    const karaokeReservation = await axios.post(`${BASE_URL}/reservations`, {
      zoneItemId: karaokeTableId,
      userName: 'Иван Иванов',
      phone: '+7 (999) 123-45-67',
      date: '2024-01-20',
      time: '19:00',
      duration: 120,
      seatsCount: 4,
      comment: 'День рождения'
    })
    console.log('✅ Бронирование в караоке создано:', karaokeReservation.data.message)

    // 10. Бронируем бильярдный стол
    console.log('\n🔟 Бронирование бильярдного стола...')
    const billiardsReservation = await axios.post(`${BASE_URL}/reservations`, {
      zoneItemId: billiardsTableId,
      userName: 'Петр Петров',
      phone: '+7 (999) 987-65-43',
      date: '2024-01-20',
      time: '20:00',
      duration: 120,
      guestsCount: 3,
      comment: 'Игра в бильярд'
    })
    console.log('✅ Бронирование бильярдного стола создано:', billiardsReservation.data.message)

    // 11. Бронируем PlayStation кабинку
    console.log('\n1️⃣1️⃣ Бронирование PlayStation кабинки...')
    const psReservation = await axios.post(`${BASE_URL}/reservations`, {
      zoneItemId: psBoothId,
      userName: 'Алексей Алексеев',
      phone: '+7 (999) 555-55-55',
      date: '2024-01-20',
      time: '15:00',
      duration: 60,
      guestsCount: 2,
      comment: 'Игра в FIFA'
    })
    console.log('✅ Бронирование PlayStation кабинки создано:', psReservation.data.message)

    console.log('\n🎉 Все тесты пройдены успешно!')
    console.log('\n📊 Создано:')
    console.log(`   - Зон: ${allZones.data.data.length}`)
    console.log(`   - Элементов: ${karaokeItems.data.data.length + 2}`)
    console.log(`   - Бронирований: 3`)

  } catch (error) {
    console.error('❌ Ошибка при тестировании:', error.response?.data || error.message)
  }
}

// Запускаем тесты
testZonesSystem() 