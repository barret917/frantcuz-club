# 🤖 Интеграция Telegram Бота с Backend API

## ✅ Что было исправлено

### 1. **Добавлено поле `telegramUserId` в модель EventTicket**
- Теперь каждый билет может быть привязан к Telegram пользователю
- Поле опциональное (`String?`)
- Миграция применена: `20251008193242_add_telegram_user_id_to_tickets`

### 2. **Создан роутер `/api/bot`**
- Все endpoints бота теперь доступны по префиксу `/api/bot`
- Адаптеры преобразуют формат данных для совместимости с ботом

### 3. **Реализованы все необходимые endpoints**

---

## 📋 API Endpoints для Telegram Бота

### **BASE URL**: `http://localhost:3002/api/bot`

---

### 1. **Получить все события**
```
GET /api/bot/events
```

**Ответ:**
```json
[
  {
    "id": 1,
    "name": "Джазовый вечер",
    "startsAt": "2024-10-15T19:00:00.000Z",
    "description": "Вечер живой музыки",
    "hall": {
      "name": "Frantsuz Club"
    },
    "eventZonePrices": [
      {
        "zoneId": 1,
        "pricePerSeat": 1500,
        "zone": {
          "name": "VIP зона"
        }
      }
    ]
  }
]
```

---

### 2. **Получить доступность зоны**
```
GET /api/bot/events/:eventId/zones/:zoneId/availability
```

**Параметры:**
- `eventId` - ID мероприятия
- `zoneId` - ID зоны

**Ответ:**
```json
{
  "zoneId": 1,
  "zoneName": "VIP зона",
  "totalSeats": 20,
  "soldSeats": 5,
  "availableSeats": 15,
  "pricePerSeat": 1500
}
```

---

### 3. **Купить билеты (множественные)**
```
POST /api/bot/tickets
```

**Тело запроса:**
```json
{
  "eventId": 1,
  "zoneId": 1,
  "customerName": "Иван Иванов",
  "customerPhone": "+79991234567",
  "customerEmail": "ivan@example.com",
  "seatsCount": 3,
  "telegramUserId": "123456789"
}
```

**Ответ:**
```json
{
  "success": true,
  "ticketPurchase": {
    "id": 1,
    "ticketIds": [1, 2, 3],
    "ticketNumbers": ["FR-241008-1234", "FR-241008-1235", "FR-241008-1236"],
    "eventName": "Джазовый вечер",
    "zoneName": "VIP зона",
    "seatsCount": 3,
    "totalAmount": 4500,
    "pricePerSeat": 1500,
    "status": "reserved",
    "paymentId": "pk_12345",
    "paymentUrl": "https://paykeeper.ru/pay/...",
    "createdAt": "2024-10-08T19:00:00.000Z",
    "expiresAt": "2024-10-08T19:10:00.000Z"
  },
  "message": "Билеты зарезервированы, перейдите к оплате"
}
```

**Логика:**
- Автоматически распределяет билеты по столам с доступными местами
- Создает единый платеж для всех билетов
- Резервирует билеты на 10 минут
- Если пользователь покупает 5 мест, а столы по 4 места, бот автоматически:
  - Бронирует 4 места за столом №1
  - Бронирует 1 место за столом №2

---

### 4. **Получить информацию о билете**
```
GET /api/bot/tickets/:ticketId
```

**Параметры:**
- `ticketId` - ID билета

**Ответ:**
```json
{
  "id": 1,
  "ticketNumber": "FR-241008-1234",
  "eventName": "Джазовый вечер",
  "zoneName": "VIP зона",
  "tableName": "Стол 1",
  "price": 1500,
  "totalAmount": 1500,
  "seatsCount": 1,
  "status": "paid",
  "customerName": "Иван Иванов",
  "customerPhone": "+79991234567",
  "customerEmail": "ivan@example.com",
  "qrCode": "data:image/png;base64,...",
  "paymentId": "pk_12345",
  "createdAt": "2024-10-08T19:00:00.000Z",
  "purchasedAt": "2024-10-08T19:05:00.000Z",
  "eventDate": "2024-10-15T19:00:00.000Z",
  "eventTime": "19:00"
}
```

---

### 5. **Получить билеты пользователя**
```
GET /api/bot/tickets/user/:telegramUserId
```

**Параметры:**
- `telegramUserId` - Telegram ID пользователя (chatId)

**Ответ:**
```json
[
  {
    "id": 1,
    "ticketNumber": "FR-241008-1234",
    "eventName": "Джазовый вечер",
    "zoneName": "VIP зона",
    "tableName": "Стол 1",
    "price": 1500,
    "totalAmount": 1500,
    "seatsCount": 1,
    "status": "paid",
    "customerName": "Иван Иванов",
    "customerPhone": "+79991234567",
    "customerEmail": "ivan@example.com",
    "qrCode": "data:image/png;base64,...",
    "createdAt": "2024-10-08T19:00:00.000Z",
    "purchasedAt": "2024-10-08T19:05:00.000Z",
    "eventDate": "2024-10-15T19:00:00.000Z",
    "eventTime": "19:00"
  }
]
```

---

### 6. **Получить QR-код билета**
```
GET /api/bot/tickets/:ticketId/qr
```

**Параметры:**
- `ticketId` - ID билета

**Ответ:**
```json
{
  "success": true,
  "ticket": {
    "id": 1,
    "ticketNumber": "FR-241008-1234"
  },
  "qrCode": "data:image/png;base64,iVBORw0KGg..."
}
```

**Примечание:** Доступен только для оплаченных билетов

---

### 7. **Получить билет с QR-кодом**
```
GET /api/bot/tickets/:ticketId/with-qr
```

**Параметры:**
- `ticketId` - ID билета

**Ответ:**
```json
{
  "success": true,
  "ticket": {
    "id": 1,
    "ticketNumber": "FR-241008-1234",
    "eventName": "Джазовый вечер",
    "zoneName": "VIP зона",
    "tableName": "Стол 1"
  },
  "qrCode": "data:image/png;base64,iVBORw0KGg..."
}
```

---

### 8. **Обновить статус билета**
```
PATCH /api/bot/tickets/:ticketId/status
```

**Тело запроса:**
```json
{
  "status": "paid"
}
```

**Ответ:**
```json
{
  "success": true,
  "ticket": { ... }
}
```

---

### 9. **Получить залы (совместимость)**
```
GET /api/bot/halls
```

**Ответ:**
```json
[
  {
    "id": 1,
    "name": "Frantsuz Club",
    "description": "Основной зал"
  }
]
```

---

### 10. **Проверить подключение**
```
GET /api/bot/stats
```

**Ответ:**
```json
{
  "status": "ok",
  "service": "Frantsuz Club Bot API",
  "version": "1.0.0"
}
```

---

## 🔄 Что изменилось в боте

### **НЕ нужно менять** в боте `websiteApiService.js`:

URL уже правильный! Просто проверь переменную окружения:

```javascript
// frantsuz_bot/.env или docker.safe.env
WEBSITE_API_URL=http://localhost:3002/api/bot
```

### **Изменения в структуре данных:**

#### Было (бот ожидал):
```javascript
event.name
event.startsAt
event.eventZonePrices
```

#### Стало (backend возвращает):
```javascript
event.name          // ✅ Адаптировано
event.startsAt      // ✅ Адаптировано
event.eventZonePrices // ✅ Адаптировано
```

Все поля теперь **автоматически адаптируются** через `botController`!

---

## 🎯 Как работает покупка множественных билетов

### Сценарий: Пользователь покупает 7 мест в зоне

1. **Backend находит доступные столы:**
   - Стол 1: 4 свободных места
   - Стол 2: 4 свободных места
   - Стол 3: 2 свободных места

2. **Backend распределяет:**
   - 4 билета → Стол 1
   - 3 билета → Стол 2

3. **Создается единый платеж** на всю сумму

4. **После оплаты:**
   - Все 7 билетов получают статус `paid`
   - Генерируются 7 уникальных QR-кодов
   - Отправляется email с 7 билетами (если указан email)

---

## 🧪 Тестирование

### Локально:

```bash
cd backend
npm run dev
```

Проверка:
```bash
# Проверить подключение
curl http://localhost:3002/api/bot/stats

# Получить события
curl http://localhost:3002/api/bot/events

# Получить доступность зоны
curl http://localhost:3002/api/bot/events/1/zones/1/availability
```

---

## 🚀 Что дальше

1. ✅ Backend готов
2. ✅ Миграция применена
3. ✅ API endpoints работают
4. 🔄 Проверить переменные окружения в боте
5. 🔄 Протестировать покупку через бота

---

## ⚠️ Важно

- Бот теперь может покупать **множественные билеты** одновременно
- Билеты автоматически **распределяются по столам**
- Каждый билет привязан к `telegramUserId`
- QR-коды доступны только для **оплаченных билетов**

---

## 📞 Контакты

Если возникнут вопросы - пиши!

