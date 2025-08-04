# Frantsuz Club Backend

Бэкенд для системы бронирования клуба "Француз"

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка базы данных

#### Установите PostgreSQL
```bash
# Ubuntu/Debian
sudo apt-get install postgresql postgresql-contrib

# macOS
brew install postgresql
```

#### Создайте базу данных
```bash
sudo -u postgres psql
CREATE DATABASE frantsuz_club;
CREATE USER frantsuz_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE frantsuz_club TO frantsuz_user;
\q
```

#### Настройте .env файл
```bash
cp env.example .env
```

Отредактируйте `.env`:
```env
DATABASE_URL="postgresql://frantsuz_user:your_password@localhost:5432/frantsuz_club"
PORT=3001
```

### 3. Инициализация базы данных
```bash
# Генерация Prisma клиента
npx prisma generate

# Создание таблиц в базе данных
npx prisma db push

# (Опционально) Открыть Prisma Studio для просмотра данных
npx prisma studio
```

### 4. Запуск сервера
```bash
# Режим разработки
npm run dev

# Продакшн
npm run build
npm start
```

## 📊 API Endpoints

### Зоны
- `GET /api/zones` - Получить все зоны
- `POST /api/zones` - Создать зону
- `GET /api/zones/:zoneId/items` - Получить элементы зоны
- `POST /api/zones/items` - Сохранить элементы зоны

### Health Check
- `GET /health` - Проверка состояния сервера

## 🗄️ Структура базы данных

### Zone (Зона)
- `id` - Уникальный идентификатор
- `name` - Название зоны
- `openTime` - Время открытия
- `closeTime` - Время закрытия
- `imageUrl` - URL изображения

### ZoneItem (Элемент зоны)
- `id` - Уникальный идентификатор
- `zoneId` - Ссылка на зону
- `label` - Название элемента
- `type` - Тип (table, stage, bar, entrance)
- `floor` - Этаж
- `seats` - Количество мест
- `x, y, width, height` - Позиция и размеры
- `isBooking` - Доступен для бронирования
- `isActive` - Активен

### Reservation (Бронирование)
- `id` - Уникальный идентификатор
- `zoneItemId` - Ссылка на элемент зоны
- `userName` - Имя клиента
- `phone` - Телефон
- `startsAt, endsAt` - Время бронирования
- `deposit` - Депозит
- `status` - Статус (booked, arrived, no_show, cancelled)

## 🔧 Разработка

### Скрипты
```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка проекта
npm run start        # Запуск в продакшн режиме
npm run db:generate  # Генерация Prisma клиента
npm run db:push      # Синхронизация схемы с БД
npm run db:migrate   # Создание миграции
npm run db:studio    # Открыть Prisma Studio
```

### Переменные окружения
- `DATABASE_URL` - URL подключения к PostgreSQL
- `PORT` - Порт сервера (по умолчанию 3001) 