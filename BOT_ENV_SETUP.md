# 🤖 Telegram Bot - Переменные окружения

## Требуемые переменные для production

Добавьте эти переменные в `.env.production` (они будут использоваться Docker Compose):

```env
# ==============================================
# TELEGRAM BOT
# ==============================================

# Основные настройки
TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_FROM_BOTFATHER
BOT_USERNAME=frantsuz_club_bot

# Database (та же БД что и backend)
DB_HOST=postgres
DB_PORT=5432
DB_NAME=frantsuz_club
DB_USER=postgres
DB_PASSWORD=same_as_backend_password

# Backend API (внутри Docker сети)
WEBSITE_API_URL=http://backend:3002/api/bot

# PayKeeper (те же данные что и у backend)
PAYKEEPER_SERVER=https://your-paykeeper-server.ru
PAYKEEPER_USER=your_paykeeper_user
PAYKEEPER_PASSWORD=your_paykeeper_password
PAYKEEPER_TEST_MODE=false

# Web App URLs (ссылки на фронтенд сайта)
WEB_APP_URL_MENU=https://frantsuz-club.ru/menu
WEB_APP_URL_BILLARD=https://frantsuz-club.ru/billiards
WEB_APP_URL_CARAOKE=https://frantsuz-club.ru/karaoke
WEB_APP_URL_dISCO=https://frantsuz-club.ru/disco-bar
WEB_APP_URL_LAUNZH=https://frantsuz-club.ru/lounge
WEB_APP_URL_PLAYSTATIONS=https://frantsuz-club.ru/playstation
WEB_APP_URL_TABLEPLAY=https://frantsuz-club.ru/board-games
WEB_APP_URL_AFISHA=https://frantsuz-club.ru/events
WEB_APP_URL_RESERVE=https://frantsuz-club.ru/booking

# Other
BASE_URL=https://frantsuz-club.ru
NODE_ENV=production
```

## Как получить TELEGRAM_BOT_TOKEN

1. Откройте Telegram и найдите [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/newbot`
3. Следуйте инструкциям:
   - Введите имя бота (например: "Frantsuz Club")
   - Введите username бота (должен заканчиваться на `bot`, например: `frantsuz_club_bot`)
4. BotFather отправит вам токен вида: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
5. Скопируйте токен и добавьте в `.env.production`

## Важно

- Бот работает в режиме **polling** (не требует webhook)
- Бот использует ту же БД что и backend (PostgreSQL в Docker)
- Бот подключается к backend API через внутреннюю Docker сеть
- Бот НЕ открывает порты наружу (работает полностью внутри Docker сети)

## Запуск бота

Бот запускается автоматически вместе с другими сервисами:

```bash
docker-compose -f docker-compose.production.yml --env-file .env.production up -d
```

Для запуска только бота (если был остановлен):

```bash
docker-compose -f docker-compose.production.yml up -d telegram_bot
```

## Проверка работы бота

```bash
# Логи бота
docker-compose -f docker-compose.production.yml logs -f telegram_bot

# Статус
docker-compose -f docker-compose.production.yml ps telegram_bot
```

В логах должно быть:
```
Автоматическая очистка canceled билетов запущена
Бот успешно запущен
```

## Возможности бота

- 📅 Просмотр мероприятий
- 🎟️ Покупка билетов
- 💳 Оплата через PayKeeper
- 📧 Получение билетов с QR-кодом
- 🔍 Просмотр своих билетов
- 🌐 Быстрые ссылки на разделы сайта (меню, бильярд, караоке и т.д.)

## Troubleshooting

**Бот не отвечает:**
```bash
# Проверьте логи
docker-compose -f docker-compose.production.yml logs telegram_bot

# Проверьте что токен правильный
docker-compose -f docker-compose.production.yml exec telegram_bot env | grep TELEGRAM_BOT_TOKEN
```

**Ошибка подключения к БД:**
```bash
# Проверьте что PostgreSQL запущен
docker-compose -f docker-compose.production.yml ps postgres

# Проверьте DATABASE_URL
docker-compose -f docker-compose.production.yml exec telegram_bot env | grep DB_
```

**Ошибка подключения к backend API:**
```bash
# Проверьте что backend запущен
docker-compose -f docker-compose.production.yml ps backend

# Проверьте WEBSITE_API_URL
docker-compose -f docker-compose.production.yml exec telegram_bot env | grep WEBSITE_API_URL
```

