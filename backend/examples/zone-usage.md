# 🎯 Универсальная система зон - Примеры использования

## 🏗️ **Создание зон**

### 1. Зона караоке (бронирование мест)
```json
POST /api/zones-management
{
  "name": "Караоке зона",
  "type": "karaoke",
  "openTime": "12:00",
  "closeTime": "02:00",
  "imageUrl": "/images/karaoke-zone.jpg"
}
```

### 2. Зона бильярда (бронирование столов)
```json
POST /api/zones-management
{
  "name": "Бильярд зона",
  "type": "billiards",
  "openTime": "10:00",
  "closeTime": "23:00",
  "imageUrl": "/images/billiards-zone.jpg"
}
```

### 3. Зона PlayStation (бронирование кабинок)
```json
POST /api/zones-management
{
  "name": "PlayStation зона",
  "type": "playstation",
  "openTime": "10:00",
  "closeTime": "22:00",
  "imageUrl": "/images/playstation-zone.jpg"
}
```

## 🎮 **Создание элементов зон**

### 1. Стол в караоке (бронирование мест)
```json
POST /api/zones-management/items
{
  "zoneId": 1,
  "label": "Стол VIP-1",
  "type": "table",
  "x": 100,
  "y": 50,
  "width": 200,
  "height": 150,
  "seats": 6,
  "pricePerSeat": 500,
  "description": "VIP стол с отличным видом на сцену",
  "features": ["WiFi", "кондиционер", "VIP обслуживание"]
}
```

### 2. Бильярдный стол (бронирование всего стола)
```json
POST /api/zones-management/items
{
  "zoneId": 2,
  "label": "Бильярдный стол №1",
  "type": "gameTable",
  "x": 200,
  "y": 100,
  "width": 300,
  "height": 200,
  "capacity": 4,
  "pricePerHour": 800,
  "minDuration": 60,
  "maxDuration": 240,
  "description": "Профессиональный бильярдный стол",
  "features": ["освещение", "кии", "мелки"]
}
```

### 3. PlayStation кабинка (бронирование кабинки)
```json
POST /api/zones-management/items
{
  "zoneId": 3,
  "label": "PS5 кабинка №1",
  "type": "booth",
  "x": 150,
  "y": 75,
  "width": 250,
  "height": 180,
  "capacity": 2,
  "pricePerHour": 600,
  "minDuration": 30,
  "maxDuration": 120,
  "description": "Кабинка с PlayStation 5",
  "features": ["PS5", "4K телевизор", "наушники", "WiFi"]
}
```

## 📅 **Бронирование**

### 1. Бронирование места в караоке
```json
POST /api/zones-management/reservations
{
  "zoneItemId": 1,
  "userName": "Иван Иванов",
  "phone": "+7 (999) 123-45-67",
  "date": "2024-01-20",
  "time": "19:00",
  "duration": 120,
  "seatsCount": 4,
  "comment": "День рождения"
}
```

### 2. Бронирование бильярдного стола
```json
POST /api/zones-management/reservations
{
  "zoneItemId": 2,
  "userName": "Петр Петров",
  "phone": "+7 (999) 987-65-43",
  "date": "2024-01-20",
  "time": "20:00",
  "duration": 120,
  "guestsCount": 3,
  "comment": "Игра в бильярд"
}
```

### 3. Бронирование PlayStation кабинки
```json
POST /api/zones-management/reservations
{
  "zoneItemId": 3,
  "userName": "Алексей Алексеев",
  "phone": "+7 (999) 555-55-55",
  "date": "2024-01-20",
  "time": "15:00",
  "duration": 60,
  "guestsCount": 2,
  "comment": "Игра в FIFA"
}
```

## 🔍 **Получение данных**

### 1. Все элементы караоке зоны
```
GET /api/zones-management/karaoke/items
```

### 2. Все элементы бильярд зоны
```
GET /api/zones-management/billiards/items
```

### 3. Все элементы PlayStation зоны
```
GET /api/zones-management/playstation/items
```

## 💡 **Преимущества системы**

1. **Универсальность** - одна система для всех типов зон
2. **Гибкость** - легко добавлять новые типы зон и элементов
3. **Автоматизация** - система сама определяет логику бронирования
4. **Масштабируемость** - легко расширять функционал
5. **Единообразие** - одинаковый API для всех зон

## 🚀 **Возможности расширения**

- Добавление новых типов зон
- Новые типы элементов
- Дополнительные настройки бронирования
- Интеграция с платежными системами
- Система скидок и промокодов
- Уведомления и напоминания
- Аналитика и отчеты 