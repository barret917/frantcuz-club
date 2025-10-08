# 🎭 Frantsuz Club - Развлекательный комплекс

> Веб-сайт и система бронирования для развлекательного комплекса "Француз" в Москве

[![Домен](https://img.shields.io/badge/Домен-frantsuz--club.ru-blue)](https://frantsuz-club.ru)
[![Docker](https://img.shields.io/badge/Docker-Ready-green)](https://www.docker.com/)

---

## 🚀 БЫСТРЫЙ СТАРТ ДЛЯ ДЕПЛОЯ

**Готовы к деплою на VDS?** Следуйте инструкциям:

### 📄 Основные документы для деплоя:

1. **[DEPLOYMENT_READY.md](./DEPLOYMENT_READY.md)** ⭐ - **Начните отсюда!** Итоговый чек-лист и все файлы
2. **[DEPLOY_QUICK.md](./DEPLOY_QUICK.md)** - Быстрая шпаргалка (кратко)
3. **[DEPLOY_CHEATSHEET.txt](./DEPLOY_CHEATSHEET.txt)** - Памятка в одной картинке
4. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Полная подробная инструкция

### ⚡ Кратко: 3 этапа

```bash
# ЭТАП 1: HTTP
1. Создайте .env.production
2. Загрузите на сервер
3. Запустите Docker
4. Настройте Nginx
5. Проверьте: http://frantsuz-club.ru ✅

# ЭТАП 2: SSL
sudo ./scripts/setup-ssl.sh

# ЭТАП 3: HTTPS
1. Обновите CORS
2. Замените Nginx конфиг
3. Проверьте: https://frantsuz-club.ru 🔒✅
```

**Подробности в документации выше!** ☝️

---

## 🌟 Возможности проекта

- 🎱 **Бильярд** - бронирование столов, школа бильярда
- 🎤 **Караоке** - бронирование залов, школа вокала
- 🎮 **PlayStation** - игровая зона
- 🍸 **Бар & Кафе** - меню, заказы
- 🎉 **Мероприятия** - афиша, продажа билетов с выбором мест
- 💳 **Онлайн оплата** - интеграция с PayKeeper
- 📧 **Email уведомления** - отправка билетов на почту с QR-кодами
- 🤖 **Telegram бот** - бронирование и покупка через бота (polling mode)

---

## 🏗️ Архитектура

```
frantsuz-club/
├── backend/          # Node.js + Express + Prisma + TypeScript
├── frontend/         # React + TypeScript + Vite
├── frantsuz_bot/     # Telegram Bot (Node.js)
├── nginx/            # Nginx конфигурации (HTTP & HTTPS)
└── scripts/          # Скрипты деплоя и SSL
```

### Tech Stack

- **Backend:** Node.js 18, Express, Prisma ORM, PostgreSQL 16, TypeScript
- **Frontend:** React 18, TypeScript, Vite, Styled Components
- **Database:** PostgreSQL 16 (в Docker)
- **Deployment:** Docker, Docker Compose, Nginx
- **SSL:** Let's Encrypt (Certbot, автообновление)
- **Bot:** Telegram Bot API (polling mode)

---

## 🎯 Архитектура деплоя

```
Internet → Nginx (80, 443) → Docker Network (frantsuz_network)
                                ├─ Frontend (3006:80)
                                ├─ Backend (3007:3002)
                                ├─ PostgreSQL (internal only)
                                └─ Telegram Bot (internal only)
```

**Ключевые моменты:**
- ✅ **Frontend & Backend:** Доступны через Nginx proxy (порты 3006, 3007)
- ✅ **PostgreSQL:** НЕ доступна снаружи (только внутри Docker сети)
- ✅ **Telegram Bot:** НЕ доступен снаружи (polling mode, внутри Docker)
- ✅ **SSL:** Let's Encrypt с автообновлением

---

## 💻 Локальная разработка

### Требования

- Node.js 18+
- PostgreSQL 16+
- npm

### Запуск

```bash
# 1. Установка зависимостей
cd backend && npm install
cd ../frontend && npm install
cd ../frantsuz_bot && npm install

# 2. Настройка окружения
cd backend
cp env.example .env
nano .env  # Заполните DATABASE_URL и другие

# 3. База данных
npx prisma migrate dev
npx prisma db seed

# 4. Запуск
# Backend (в одном терминале)
cd backend && npm run dev

# Frontend (в другом терминале)
cd frontend && npm run dev

# Bot (опционально, в третьем терминале)
cd frantsuz_bot && npm start
```

**URL:**
- Frontend: http://localhost:3003
- Backend API: http://localhost:3002

---

## 📚 Документация

### Деплой и Production
- **[DEPLOYMENT_READY.md](./DEPLOYMENT_READY.md)** - Итоговый чек-лист (начните здесь!)
- **[DEPLOY_QUICK.md](./DEPLOY_QUICK.md)** - Быстрая шпаргалка
- **[DEPLOY_CHEATSHEET.txt](./DEPLOY_CHEATSHEET.txt)** - Памятка в картинке
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Полная инструкция
- **[README_DEPLOYMENT.md](./README_DEPLOYMENT.md)** - Общий обзор

### Дополнительная документация
- **[BOT_ENV_SETUP.md](./BOT_ENV_SETUP.md)** - Настройка Telegram бота
- **[BOT_API_INTEGRATION.md](./BOT_API_INTEGRATION.md)** - API интеграция бота
- **[PAYKEEPER_SETUP.md](./PAYKEEPER_SETUP.md)** - Настройка PayKeeper

### Старые гайды (для справки)
- `VDS_DEPLOYMENT_GUIDE.md`
- `SERVER_DEPLOYMENT_INSTRUCTIONS.md`
- `HTTPS_MIGRATION_GUIDE.md`
- `DEPLOYMENT_CHECKLIST.md`

---

## 🤖 Telegram Bot

Бот работает в режиме **polling** (не требует webhook).

### Возможности
- Просмотр мероприятий
- Покупка билетов с выбором мест
- Просмотр своих билетов
- Получение QR-кодов
- Быстрые ссылки на разделы сайта

### Настройка
См. [BOT_ENV_SETUP.md](./BOT_ENV_SETUP.md)

---

## 📧 Email уведомления

При покупке билета клиент автоматически получает:
- Детали билета
- QR-код (вложение)
- Информацию о мероприятии

Настройка SMTP в `.env.production`.

---

## 💳 Интеграция с PayKeeper

Онлайн-платежи через PayKeeper.

Настройка в `.env.production`:
```env
PAYKEEPER_SERVER=https://your-paykeeper.ru
PAYKEEPER_USER=your_user
PAYKEEPER_PASSWORD=your_password
```

---

## 🔒 Безопасность

- ✅ HTTPS (Let's Encrypt)
- ✅ CORS настроен под домен
- ✅ JWT для аутентификации
- ✅ Firewall (ufw)
- ✅ PostgreSQL только внутри Docker сети
- ✅ Backend API доступен только через Nginx proxy
- ✅ Security headers в Nginx
- ✅ Изоляция через Docker networks

---

## 🔧 Полезные команды (Production)

```bash
# Статус контейнеров
docker-compose -f docker-compose.production.yml ps

# Логи
docker-compose -f docker-compose.production.yml logs -f
docker-compose -f docker-compose.production.yml logs -f backend

# Перезапуск
docker-compose -f docker-compose.production.yml restart

# Остановка
docker-compose -f docker-compose.production.yml down

# Проверка здоровья
curl https://frantsuz-club.ru/health

# Nginx логи
sudo tail -f /var/log/nginx/frantsuz-club-error.log

# SSL сертификаты
sudo certbot certificates
sudo certbot renew

# Бэкап БД
docker-compose -f docker-compose.production.yml exec postgres \
  pg_dump -U postgres frantsuz_club > backup.sql
```

---

## 📊 Основные API endpoints

```
# Мероприятия
GET    /api/events              # Список мероприятий
GET    /api/events/:id          # Детали мероприятия
POST   /api/events              # Создать мероприятие (admin)

# Билеты
GET    /api/events/:id/zones    # Зоны мероприятия
POST   /api/tickets/purchase    # Купить билет
GET    /api/tickets/:id         # Детали билета

# Бронирование
GET    /api/bookings            # Список броней
POST   /api/bookings            # Создать бронь

# Telegram Bot API
GET    /api/bot/events          # События (для бота)
POST   /api/bot/tickets         # Покупка билетов (для бота)
GET    /api/bot/tickets/user/:telegramUserId  # Билеты пользователя
```

---

## 🚨 Troubleshooting

### "Cannot connect to Docker daemon"
```bash
sudo systemctl start docker
sudo usermod -aG docker $USER
```

### "Port already in use"
```bash
sudo netstat -tlnp | grep -E ':(3006|3007)'
docker ps
docker stop <container_id>
```

### "SSL certificate error"
```bash
dig frantsuz-club.ru
sudo certbot renew
sudo systemctl reload nginx
```

### "Backend not responding"
```bash
docker-compose -f docker-compose.production.yml logs backend
docker-compose -f docker-compose.production.yml restart backend
```

Больше в [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 📞 Контакты

- **Сайт:** [frantsuz-club.ru](https://frantsuz-club.ru)
- **Адрес:** г. Москва, ул. Салтыковская, 49А
- **Телефон:** +7(968) 090-55-50
- **Email:** order@wetop.ru

---

## 📄 Лицензия

© 2025 Frantsuz Club. Все права защищены.

Сделано [WeTop digital agency](https://wetop.ru).

---

**🎉 Готово к деплою!**

Следуй инструкциям в **[DEPLOYMENT_READY.md](./DEPLOYMENT_READY.md)** 🚀

