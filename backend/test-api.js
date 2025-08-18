const axios = require('axios');

const BASE_URL = 'http://localhost:3002/api';

// Тестовые данные
const testData = {
  date: '2024-01-15',
  time: '19:00',
  duration: 180,
  guestsCount: 4,
  customerName: 'Тест Тестов',
  customerPhone: '+7 (999) 123-45-67',
  customerEmail: 'test@example.com',
  comment: 'Тестовое бронирование',
  deposit: 100
};

async function testAPI() {
  console.log('🚀 Тестирование API столов...\n');

  try {
    // 1. Получить все столы
    console.log('1️⃣ Получение всех столов...');
    const tablesResponse = await axios.get(`${BASE_URL}/tables`);
    console.log(`✅ Получено столов: ${tablesResponse.data.data.length}`);
    
    if (tablesResponse.data.data.length > 0) {
      const firstTable = tablesResponse.data.data[0];
      console.log(`   Первый стол: ${firstTable.label} (${firstTable.seats} мест) в зоне "${firstTable.zoneName}"`);
    }
    console.log('');

    // 2. Поиск свободных столов
    console.log('2️⃣ Поиск свободных столов...');
    const availableResponse = await axios.get(`${BASE_URL}/tables/available`, {
      params: {
        date: testData.date,
        time: testData.time,
        duration: testData.duration,
        guestsCount: testData.guestsCount
      }
    });
    
    console.log(`✅ Найдено свободных столов: ${availableResponse.data.data.totalAvailable}`);
    console.log(`   Запрошенное время: ${testData.date} ${testData.time}`);
    console.log(`   Длительность: ${testData.duration} минут`);
    console.log(`   Гостей: ${testData.guestsCount}`);
    console.log('');

    if (availableResponse.data.data.availableTables.length > 0) {
      const availableTable = availableResponse.data.data.availableTables[0];
      testData.tableId = availableTable.id;
      
      // 3. Создание бронирования
      console.log('3️⃣ Создание бронирования...');
      
      // Подготавливаем данные для бронирования
      const bookingData = {
        tableId: testData.tableId,
        date: testData.date,
        time: testData.time,
        duration: testData.duration,
        guestsCount: testData.guestsCount,
        customerName: testData.customerName,
        customerPhone: testData.customerPhone,
        customerEmail: testData.customerEmail,
        comment: testData.comment,
        deposit: testData.deposit
      };
      
      const bookingResponse = await axios.post(`${BASE_URL}/tables/bookings`, bookingData);
      
      console.log(`✅ Бронирование создано! ID: ${bookingResponse.data.data.id}`);
      console.log(`   Стол: ${bookingResponse.data.data.tableLabel}`);
      console.log(`   Зона: ${bookingResponse.data.data.zoneName}`);
      console.log(`   Клиент: ${bookingResponse.data.data.customerName}`);
      console.log(`   Телефон: ${bookingResponse.data.data.customerPhone}`);
      console.log(`   Время: ${bookingResponse.data.data.date} ${bookingResponse.data.data.time}`);
      console.log(`   Длительность: ${bookingResponse.data.data.duration} минут`);
      console.log(`   Депозит: ${bookingResponse.data.data.deposit} ₽`);
      console.log('');

      const bookingId = bookingResponse.data.data.id;

      // 4. Получение бронирований
      console.log('4️⃣ Получение списка бронирований...');
      const bookingsResponse = await axios.get(`${BASE_URL}/tables/bookings`, {
        params: { date: testData.date }
      });
      
      console.log(`✅ Получено бронирований: ${bookingsResponse.data.data.length}`);
      console.log('');

      // 5. Обновление статуса
      console.log('5️⃣ Обновление статуса бронирования...');
      const statusResponse = await axios.patch(`${BASE_URL}/tables/bookings/${bookingId}/status`, {
        status: 'arrived'
      });
      
      console.log(`✅ Статус обновлен: ${statusResponse.data.data.status}`);
      console.log('');

      // 6. Получение статистики
      console.log('6️⃣ Получение статистики...');
      const statsResponse = await axios.get(`${BASE_URL}/tables/stats`, {
        params: { date: testData.date }
      });
      
      const stats = statsResponse.data.data;
      console.log(`✅ Статистика получена:`);
      console.log(`   Всего столов: ${stats.totalTables}`);
      console.log(`   Активных бронирований: ${stats.activeBookings}`);
      console.log(`   Отмененных: ${stats.cancelledBookings}`);
      console.log(`   Общий доход: ${stats.totalRevenue} ₽`);
      console.log(`   Загруженность: ${stats.utilizationRate}%`);
      console.log('');

      // 7. Отмена бронирования
      console.log('7️⃣ Отмена бронирования...');
      const cancelResponse = await axios.delete(`${BASE_URL}/tables/bookings/${bookingId}`);
      
      console.log(`✅ Бронирование отменено: ${cancelResponse.data.data.status}`);
      console.log('');

    } else {
      console.log('❌ Нет свободных столов для тестирования');
    }

    console.log('🎉 Тестирование завершено успешно!');

  } catch (error) {
    console.error('❌ Ошибка при тестировании:', error.response?.data || error.message);
    
    if (error.response) {
      console.error('   Статус:', error.response.status);
      console.error('   Данные:', error.response.data);
    }
  }
}

// Запуск тестирования
testAPI(); 