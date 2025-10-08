# 🚀 ГОТОВО К ДЕПЛОЮ!

## ✅ Что исправлено:

### 1. **Prisma Client** (критично!)
- ❌ Был: `output = "../../node_modules/.prisma/client"` (генерировался не в том месте)
- ✅ Стало: дефолтный output (генерируется правильно)
- **Файл:** `backend/prisma/schema.prisma`

### 2. **Backend Dockerfile**
- ✅ OpenSSL установлен для Alpine Linux
- ✅ Prisma generate в runtime (CMD)
- ✅ Multi-stage build оптимизирован

### 3. **Docker Compose**
- ✅ `docker-compose.local.yml` - работает локально
- ✅ `docker-compose.production.yml` - готов для VPS
- ✅ Убраны лишние команды генерации

### 4. **Telegram Bot**
- ✅ Исправлены синтаксические ошибки в handlers
- ✅ Интеграция с backend API настроена

---

## 🎯 Деплой на VPS (пошагово):

### Шаг 1: Подготовка файлов
```bash
# На локальной машине
cd /home/maga/frantsuz-club

# Убедитесь что .env.production заполнен
cat .env.production
```

### Шаг 2: Загрузка на сервер
```bash
# Создайте архив (исключая node_modules и .git)
tar -czf frantsuz-club.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='backend/dist' \
  --exclude='frontend/dist' \
  --exclude='backend/node_modules' \
  --exclude='frontend/node_modules' \
  --exclude='frantsuz_bot/node_modules' \
  .

# Загрузите на сервер
scp frantsuz-club.tar.gz root@YOUR_SERVER_IP:/root/

# Подключитесь к серверу
ssh root@YOUR_SERVER_IP
```

### Шаг 3: На сервере
```bash
# Распакуйте
cd /root
mkdir -p frantsuz-club
tar -xzf frantsuz-club.tar.gz -C frantsuz-club
cd frantsuz-club

# Скопируйте .env.production как .env
cp .env.production .env

# Проверьте переменные окружения
cat .env

# Соберите и запустите
docker compose -f docker-compose.production.yml up -d --build

# Проверьте статус
docker compose -f docker-compose.production.yml ps
docker compose -f docker-compose.production.yml logs backend --tail 20
docker compose -f docker-compose.production.yml logs telegram_bot --tail 20
```

### Шаг 4: Применение миграций (первый запуск)
```bash
# Если база данных пустая, примените миграции
docker compose -f docker-compose.production.yml exec backend sh -c "npx prisma migrate deploy"

# Опционально: заполните seed данными
docker compose -f docker-compose.production.yml exec backend sh -c "npx prisma db seed"
```

### Шаг 5: Настройка Nginx на хосте
```bash
# Скопируйте конфигурацию (сначала HTTP)
cp /root/frantsuz-club/nginx/frantsuz-club.http.conf /etc/nginx/sites-available/frantsuz-club.conf
ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/

# Проверьте конфигурацию
nginx -t

# Перезапустите Nginx
systemctl reload nginx
```

### Шаг 6: Проверка
```bash
# Проверьте доступность
curl http://localhost:3006  # Frontend
curl http://localhost:3007/health  # Backend

# Проверьте с домена
curl http://frantsuz-club.ru
curl http://frantsuz-club.ru/api/health
```

### Шаг 7: SSL (после проверки HTTP)
```bash
# Запустите скрипт установки SSL
cd /root/frantsuz-club
bash scripts/setup-ssl.sh
```

---

## 📋 Переменные окружения (.env.production)

Убедитесь что заполнены:
- ✅ `DB_PASSWORD` - пароль БД
- ✅ `JWT_SECRET` - секрет для JWT
- ✅ `TELEGRAM_BOT_TOKEN` - токен бота
- ✅ `PAYKEEPER_*` - данные PayKeeper
- ✅ `SMTP_*` - данные почты

---

## 🔍 Проверка работоспособности

### Backend:
```bash
curl http://localhost:3007/health
# Ожидается: {"status":"OK","message":"Frantsuz Club API is running"}
```

### Frontend:
```bash
curl -I http://localhost:3006
# Ожидается: HTTP/1.1 200 OK
```

### База данных:
```bash
docker compose -f docker-compose.production.yml exec postgres psql -U postgres -d frantsuz_club -c "SELECT COUNT(*) FROM \"User\";"
```

### Бот:
```bash
docker compose -f docker-compose.production.yml logs telegram_bot --tail 20
# Не должно быть ошибок "404 Not Found" или "ETELEGRAM"
```

---

## 🆘 Устранение неполадок

### Backend не запускается:
```bash
docker compose -f docker-compose.production.yml logs backend
# Проверьте ошибки Prisma или подключения к БД
```

### Frontend показывает 502:
```bash
# Проверьте что backend запущен
docker compose -f docker-compose.production.yml ps
# Проверьте логи Nginx
tail -f /var/log/nginx/error.log
```

### Бот не отвечает:
```bash
# Проверьте токен
docker compose -f docker-compose.production.yml exec telegram_bot printenv | grep TELEGRAM_BOT_TOKEN
# Проверьте логи
docker compose -f docker-compose.production.yml logs telegram_bot -f
```

---

## 📦 Порты на VPS:

- **Frontend:** `3006` (проксируется через Nginx на 80/443)
- **Backend:** `3007` (проксируется через Nginx на /api)
- **PostgreSQL:** внутри Docker сети (не наружу)
- **Bot:** внутри Docker сети (polling mode)

---

## ✨ Готово!

После выполнения всех шагов ваш сайт будет доступен по адресу:
- **HTTP:** http://frantsuz-club.ru
- **HTTPS:** https://frantsuz-club.ru (после установки SSL)

**API:** https://frantsuz-club.ru/api/health
**Telegram Bot:** работает в polling mode (без webhook)

