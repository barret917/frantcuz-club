# 🚀 ПОЛНАЯ ИНСТРУКЦИЯ ПО ДЕПЛОЮ frantsuz-club.ru

## 📋 Содержание
1. [Подготовка к деплою](#этап-0-подготовка)
2. [Деплой на HTTP](#этап-1-деплой-на-http)
3. [Получение SSL сертификатов](#этап-2-получение-ssl)
4. [Миграция на HTTPS](#этап-3-миграция-на-https)
5. [Проверка и тестирование](#этап-4-проверка)

---

## 🎯 Архитектура

```
Internet → Nginx (80, 443) → Docker Containers
                              ├─ Frontend (3006:80)
                              ├─ Backend (3007:3002)
                              ├─ PostgreSQL (internal)
                              └─ Telegram Bot (polling)
```

**Порты:**
- `3006` - Frontend (проксируется Nginx)
- `3007` - Backend (проксируется Nginx)
- `5432` - PostgreSQL (**только внутри Docker сети**)

---

## Этап 0: Подготовка

### На локальном компьютере:

#### 1. Создайте `.env.production`

```bash
cd /home/maga/frantsuz-club
cp production.env.template .env.production
nano .env.production
```

Заполните значения:

```env
# Database
DB_PASSWORD=VERY_STRONG_PASSWORD_HERE

# Backend
FRONTEND_PORT=3006
BACKEND_PORT=3007
CORS_ORIGIN=http://frantsuz-club.ru,https://frantsuz-club.ru
JWT_SECRET=RANDOM_STRING_32_CHARS

# PayKeeper
PAYKEEPER_SERVER=https://your-paykeeper.ru
PAYKEEPER_USER=your_user
PAYKEEPER_PASSWORD=your_password

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=Frantsuz Club <your@email.com>

# Telegram Bot
TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_FROM_BOTFATHER
```

#### 2. Создайте архив для деплоя

```bash
# Создаем tar.gz со всем проектом (без node_modules)
tar -czf frantsuz-club.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='dist' \
  --exclude='backend/uploads' \
  --exclude='.env*' \
  .

# Проверяем размер
ls -lh frantsuz-club.tar.gz
```

#### 3. Загрузите на сервер

```bash
# Замените YOUR_SERVER_IP на IP сервера
scp frantsuz-club.tar.gz root@185.60.134.145:/root/
scp .env.production root@185.60.134.145:/root/
```

---

## Этап 1: Деплой на HTTP

### На сервере (SSH):

#### 1. Распакуйте проект

```bash
ssh root@185.60.134.145

cd /root
tar -xzf frantsuz-club.tar.gz
mv .env.production frantsuz-club/
cd frantsuz-club
```

#### 2. Проверьте Docker

```bash
docker --version
docker-compose --version

# Проверьте что порты свободны
sudo netstat -tlnp | grep -E ':(3006|3007)'
```

#### 3. Запустите контейнеры

```bash
# Соберите и запустите
docker-compose -f docker-compose.production.yml --env-file .env.production up -d --build

# Проверьте статус
docker-compose -f docker-compose.production.yml ps

# Проверьте логи
docker-compose -f docker-compose.production.yml logs -f backend
```

**Ждите 2-3 минуты** пока контейнеры запустятся и база данных инициализируется.

#### 4. Проверьте работу

```bash
# Backend health check
curl http://localhost:3007/health

# Frontend
curl http://localhost:3006

# Если работают, видно:
# {"status":"OK","message":"Frantsuz Club API is running"}
```

#### 5. Настройте Nginx

```bash
# Скопируйте HTTP конфигурацию
sudo cp nginx/frantsuz-club.http.conf /etc/nginx/sites-available/frantsuz-club.conf

# Создайте symlink
sudo ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/

# Проверьте конфигурацию
sudo nginx -t

# Если OK, перезагрузите Nginx
sudo systemctl reload nginx
```

#### 6. Откройте firewall

```bash
# Если используете ufw
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload
```

#### 7. Проверьте сайт

Откройте в браузере: **http://frantsuz-club.ru**

Если всё работает - переходим к SSL! ✅

---

## Этап 2: Получение SSL

### На сервере:

#### 1. Запустите скрипт получения SSL

```bash
cd /root/frantsuz-club
sudo ./scripts/setup-ssl.sh
```

Скрипт автоматически:
- Установит Certbot (если нужно)
- Получит сертификаты Let's Encrypt
- Настроит автообновление
- Обновит Nginx конфигурацию

#### 2. Что делать если ошибка:

**Проблема:** "Domain not pointing to this server"
```bash
# Проверьте DNS
dig frantsuz-club.ru

# IP должен совпадать с вашим сервером
# Если нет - подождите распространения DNS (до 24ч)
```

**Проблема:** "Port 80 blocked"
```bash
# Проверьте firewall
sudo ufw status

# Откройте порт 80
sudo ufw allow 80/tcp
```

**Проблема:** "Too many certificates already issued"
```bash
# У Let's Encrypt есть лимит: 5 сертификатов в неделю
# Подождите неделю или используйте staging:
sudo certbot --nginx --staging -d frantsuz-club.ru -d www.frantsuz-club.ru
```

---

## Этап 3: Миграция на HTTPS

### На сервере:

#### 1. Обновите Docker конфигурацию

```bash
cd /root/frantsuz-club
nano .env.production
```

Измените:
```env
CORS_ORIGIN=https://frantsuz-club.ru,https://www.frantsuz-club.ru
```

#### 2. Перезапустите контейнеры

```bash
docker-compose -f docker-compose.production.yml --env-file .env.production restart backend frontend
```

#### 3. Замените Nginx конфигурацию

```bash
# Удалите HTTP конфиг
sudo rm /etc/nginx/sites-enabled/frantsuz-club.conf

# Скопируйте HTTPS конфиг
sudo cp nginx/frantsuz-club.https.conf /etc/nginx/sites-available/frantsuz-club.conf
sudo ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/

# Проверьте
sudo nginx -t

# Перезагрузите
sudo systemctl reload nginx
```

#### 4. Проверьте HTTPS

Откройте в браузере: **https://frantsuz-club.ru**

- HTTP должен редиректить на HTTPS ✅
- Замок в адресной строке должен быть зеленым ✅

---

## Этап 4: Проверка

### Чек-лист:

```bash
# 1. Контейнеры работают
docker-compose -f docker-compose.production.yml ps
# Все должны быть "Up"

# 2. Backend отвечает
curl https://frantsuz-club.ru/health
# Должно вернуть: {"status":"OK"}

# 3. Frontend загружается
curl -I https://frantsuz-club.ru
# Должно вернуть: 200 OK

# 4. SSL валиден
curl -v https://frantsuz-club.ru 2>&1 | grep "SSL certificate verify"
# Должно быть: SSL certificate verify ok

# 5. База данных
docker-compose -f docker-compose.production.yml exec backend npx prisma studio
# Откроется Prisma Studio на localhost:5555
```

### Проверьте в браузере:

- ✅ Главная страница загружается
- ✅ API работает (попробуйте меню, бронирование)
- ✅ HTTPS не показывает ошибки
- ✅ HTTP редиректит на HTTPS

---

## 🔧 Полезные команды

### Управление контейнерами:

```bash
# Просмотр логов
docker-compose -f docker-compose.production.yml logs -f

# Логи конкретного сервиса
docker-compose -f docker-compose.production.yml logs -f backend

# Перезапуск
docker-compose -f docker-compose.production.yml restart

# Остановка
docker-compose -f docker-compose.production.yml down

# Пересборка
docker-compose -f docker-compose.production.yml up -d --build
```

### Nginx:

```bash
# Проверка конфигурации
sudo nginx -t

# Перезагрузка
sudo systemctl reload nginx

# Рестарт
sudo systemctl restart nginx

# Логи
sudo tail -f /var/log/nginx/frantsuz-club-access.log
sudo tail -f /var/log/nginx/frantsuz-club-error.log
```

### SSL:

```bash
# Проверка сертификатов
sudo certbot certificates

# Обновление вручную
sudo certbot renew

# Проверка автообновления
sudo certbot renew --dry-run
```

### База данных:

```bash
# Подключиться к PostgreSQL
docker-compose -f docker-compose.production.yml exec postgres psql -U postgres -d frantsuz_club

# Бэкап
docker-compose -f docker-compose.production.yml exec postgres pg_dump -U postgres frantsuz_club > backup.sql

# Восстановление
cat backup.sql | docker-compose -f docker-compose.production.yml exec -T postgres psql -U postgres frantsuz_club
```

---

## 🚨 Troubleshooting

### "Cannot connect to backend"

```bash
# 1. Проверьте backend логи
docker-compose -f docker-compose.production.yml logs backend

# 2. Проверьте что backend запущен
docker-compose -f docker-compose.production.yml ps backend

# 3. Проверьте health check
curl http://localhost:3007/health
```

### "Database connection failed"

```bash
# 1. Проверьте PostgreSQL
docker-compose -f docker-compose.production.yml ps postgres

# 2. Проверьте DATABASE_URL в .env.production

# 3. Перезапустите
docker-compose -f docker-compose.production.yml restart postgres backend
```

### "SSL certificate error"

```bash
# 1. Проверьте сертификаты
sudo certbot certificates

# 2. Обновите
sudo certbot renew

# 3. Перезагрузите Nginx
sudo systemctl reload nginx
```

---

## 📞 Поддержка

Если что-то не работает:

1. Проверьте логи: `docker-compose logs -f`
2. Проверьте Nginx: `sudo nginx -t`
3. Проверьте firewall: `sudo ufw status`

---

**Готово! Сайт развернут на https://frantsuz-club.ru** 🎉

