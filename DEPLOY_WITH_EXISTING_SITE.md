# 🚀 ПЛАН ДЕПЛОЯ НА VPS (с учетом существующего сайта)

## 📊 Текущая ситуация

### Занятые ресурсы на VPS:
- **Порты:** 3005 (frontend), 8002 (backend), 5434 (postgres)
- **Docker сеть:** существующая сеть rating проекта
- **Nginx:** уже настроен с одним доменом
- **SSL:** уже настроен для существующего домена

### Наши ресурсы:
- **Порты:** 3006 (frontend), 3007 (backend) ✅ свободны
- **Docker сеть:** frantsuz_network (изолированная)
- **Домен:** frantsuz-club.ru (нужно привязать к IP)
- **SSL:** нужно настроить для frantsuz-club.ru

---

## 🎯 ШАГ 1: Привязка домена к IP серверу

### 1.1. Узнай IP сервера
```bash
# На сервере выполни:
curl ifconfig.me
# Или
ip addr show | grep "inet " | grep -v 127.0.0.1
```

Получишь что-то вроде: `45.67.89.123`

### 1.2. Настрой DNS записи у регистратора домена

Зайди в панель управления доменом `frantsuz-club.ru` и добавь:

**A-записи:**
```
Тип    Имя                Значение
A      @                  45.67.89.123  (твой IP)
A      www                45.67.89.123  (твой IP)
```

**TTL:** 3600 (1 час) или меньше

⏰ **Ожидание:** DNS обновится через 15 минут - 24 часа (обычно ~1 час)

### 1.3. Проверь привязку домена
```bash
# Через 30-60 минут проверь:
ping frantsuz-club.ru
nslookup frantsuz-club.ru

# Должен вернуть твой IP
```

---

## 🎯 ШАГ 2: Загрузка проекта на VPS

### 2.1. На локальной машине создай архив
```bash
cd /home/maga

# Создай архив без node_modules и .git
tar -czf frantsuz-club.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='backend/dist' \
  --exclude='frontend/dist' \
  frantsuz-club/

# Проверь размер (должен быть ~50-100 MB)
ls -lh frantsuz-club.tar.gz
```

### 2.2. Загрузи на сервер
```bash
# Замени на свой IP
scp frantsuz-club.tar.gz root@45.67.89.123:/root/

# Или используй FileZilla/WinSCP если предпочитаешь GUI
```

### 2.3. На сервере распакуй
```bash
ssh root@45.67.89.123

cd /root
mkdir -p frantsuz-club
tar -xzf frantsuz-club.tar.gz -C frantsuz-club
cd frantsuz-club

# Проверь что файлы на месте
ls -la
```

---

## 🎯 ШАГ 3: Настройка environment variables

### 3.1. Проверь .env.production
```bash
cd /root/frantsuz-club
cat .env.production

# Убедись что все заполнено:
# - DB_PASSWORD
# - JWT_SECRET
# - TELEGRAM_BOT_TOKEN
# - PAYKEEPER_*
# - SMTP_*
```

### 3.2. Если нужно - отредактируй
```bash
nano .env.production

# Измени что нужно, сохрани (Ctrl+O, Enter, Ctrl+X)
```

---

## 🎯 ШАГ 4: Запуск Docker контейнеров

### 4.1. Проверь что Docker работает
```bash
docker --version
docker compose version
```

### 4.2. Запусти контейнеры
```bash
cd /root/frantsuz-club

# Загрузи .env.production как .env
cp .env.production .env

# Собери и запусти
docker compose -f docker-compose.production.yml up -d --build

# Это займет 5-10 минут (сборка образов)
```

### 4.3. Проверь статус
```bash
# Проверь что контейнеры запустились
docker compose -f docker-compose.production.yml ps

# Должно быть 4 контейнера:
# - frantsuz_postgres (healthy)
# - frantsuz_backend (up)
# - frantsuz_frontend (up)
# - frantsuz_bot (up)
```

### 4.4. Проверь логи
```bash
# Backend
docker compose -f docker-compose.production.yml logs backend --tail 50

# Frontend
docker compose -f docker-compose.production.yml logs frontend --tail 50

# Telegram Bot
docker compose -f docker-compose.production.yml logs telegram_bot --tail 50

# Postgres
docker compose -f docker-compose.production.yml logs postgres --tail 20
```

---

## 🎯 ШАГ 5: Применение миграций базы данных

### 5.1. Примени миграции Prisma (первый запуск)
```bash
cd /root/frantsuz-club

docker compose -f docker-compose.production.yml exec backend sh -c "npx prisma migrate deploy"

# Должно применить 6 миграций
```

### 5.2. Проверь подключение к БД
```bash
docker compose -f docker-compose.production.yml exec backend sh -c "npx prisma studio"

# Или проверь через psql:
docker compose -f docker-compose.production.yml exec postgres psql -U postgres -d frantsuz_club -c "\dt"
```

---

## 🎯 ШАГ 6: Настройка Nginx на хосте

### 6.1. Проверь текущую конфигурацию Nginx
```bash
# Посмотри существующие конфиги
ls -la /etc/nginx/sites-enabled/

# Посмотри содержимое
cat /etc/nginx/sites-enabled/*
```

### 6.2. Создай конфиг для frantsuz-club.ru (HTTP сначала)
```bash
# Скопируй наш конфиг
cp /root/frantsuz-club/nginx/frantsuz-club.http.conf /etc/nginx/sites-available/frantsuz-club.conf

# Создай симлинк
ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/frantsuz-club.conf
```

### 6.3. Проверь конфигурацию
```bash
nginx -t

# Должно быть:
# nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 6.4. Перезапусти Nginx
```bash
systemctl reload nginx

# Или
systemctl restart nginx

# Проверь статус
systemctl status nginx
```

### 6.5. Проверь что сайт доступен
```bash
# Локально на сервере
curl http://localhost:3006

# Извне (после привязки домена)
curl http://frantsuz-club.ru
```

---

## 🎯 ШАГ 7: Настройка SSL сертификатов (Let's Encrypt)

### 7.1. Установи Certbot (если еще нет)
```bash
apt update
apt install -y certbot python3-certbot-nginx
```

### 7.2. Получи SSL сертификат для frantsuz-club.ru
```bash
# Важно: Домен УЖЕ должен быть привязан к IP!
certbot certonly --nginx -d frantsuz-club.ru -d www.frantsuz-club.ru

# Или используй наш скрипт:
cd /root/frantsuz-club
bash scripts/setup-ssl.sh
```

### 7.3. Введи email для уведомлений
```
Enter email address: order@wetop.ru
```

### 7.4. Согласись с Terms of Service
```
(A)gree/(C)ancel: A
```

### 7.5. Сертификаты будут сохранены в:
```
/etc/letsencrypt/live/frantsuz-club.ru/fullchain.pem
/etc/letsencrypt/live/frantsuz-club.ru/privkey.pem
/etc/letsencrypt/live/frantsuz-club.ru/chain.pem
```

---

## 🎯 ШАГ 8: Переключение на HTTPS

### 8.1. Замени конфиг на HTTPS версию
```bash
# Скопируй HTTPS конфиг
cp /root/frantsuz-club/nginx/frantsuz-club.https.conf /etc/nginx/sites-available/frantsuz-club.conf

# Проверь конфигурацию
nginx -t

# Перезапусти Nginx
systemctl reload nginx
```

### 8.2. Проверь HTTPS
```bash
curl https://frantsuz-club.ru

# Или в браузере:
# https://frantsuz-club.ru
```

---

## 🎯 ШАГ 9: Настройка автопродления SSL

### 9.1. Проверь что Certbot timer активен
```bash
systemctl status certbot.timer
systemctl enable certbot.timer
systemctl start certbot.timer
```

### 9.2. Тест продления (без реального продления)
```bash
certbot renew --dry-run
```

---

## 🎯 ШАГ 10: Финальная проверка

### 10.1. Проверь все контейнеры
```bash
docker ps

# Должно быть 7 контейнеров:
# 3 от rating проекта (3005, 8002, 5434)
# 4 от frantsuz проекта (3006, 3007, postgres, bot)
```

### 10.2. Проверь сайты
```bash
# Rating проект (существующий)
curl https://existing-domain.com

# Frantsuz Club (наш)
curl https://frantsuz-club.ru
curl https://frantsuz-club.ru/api/health
```

### 10.3. Проверь логи Nginx
```bash
tail -f /var/log/nginx/frantsuz-club-access.log
tail -f /var/log/nginx/frantsuz-club-error.log
```

### 10.4. Проверь Telegram бота
- Открой Telegram
- Найди бота: `@frantsuz_club_bot`
- Отправь `/start`
- Бот должен ответить

### 10.5. Проверь админку
- Открой: `https://frantsuz-club.ru/admin/login`
- Логин: `admin`
- Пароль: `frantcuz_2018`
- Должна открыться админ-панель

---

## 🔥 ЧТО ДЕЛАТЬ ЕСЛИ ЧТО-ТО НЕ РАБОТАЕТ

### Проблема: Контейнеры не запускаются
```bash
# Смотри логи
docker compose -f docker-compose.production.yml logs

# Перезапусти
docker compose -f docker-compose.production.yml restart
```

### Проблема: Nginx не работает
```bash
# Проверь конфигурацию
nginx -t

# Смотри логи
tail -f /var/log/nginx/error.log

# Перезапусти
systemctl restart nginx
```

### Проблема: SSL не работает
```bash
# Проверь что домен привязан
nslookup frantsuz-club.ru

# Проверь сертификаты
certbot certificates

# Продли вручную
certbot renew
```

### Проблема: База данных не работает
```bash
# Проверь статус
docker compose -f docker-compose.production.yml exec postgres pg_isready

# Примени миграции снова
docker compose -f docker-compose.production.yml exec backend sh -c "npx prisma migrate deploy"
```

---

## 📊 ИТОГОВАЯ АРХИТЕКТУРА

```
┌─────────────────────────────────────────────────────────────┐
│                    VPS (один сервер)                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    NGINX                              │  │
│  │  ┌────────────────┐         ┌──────────────────┐     │  │
│  │  │ existing.com   │         │ frantsuz-club.ru │     │  │
│  │  │ (SSL: 443)     │         │ (SSL: 443)       │     │  │
│  │  └────────┬───────┘         └────────┬─────────┘     │  │
│  └───────────┼──────────────────────────┼───────────────┘  │
│              │                          │                  │
│  ┌───────────▼──────────┐   ┌───────────▼──────────────┐  │
│  │  Rating Project      │   │  Frantsuz Club Project   │  │
│  │                      │   │                          │  │
│  │  Frontend: 3005      │   │  Frontend: 3006          │  │
│  │  Backend:  8002      │   │  Backend:  3007          │  │
│  │  DB:       5434      │   │  DB: internal only       │  │
│  │                      │   │  Bot: no ports           │  │
│  └──────────────────────┘   └──────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ ЧЕКЛИСТ ПЕРЕД ДЕПЛОЕМ

- [ ] GitHub репозиторий залит
- [ ] Домен `frantsuz-club.ru` куплен
- [ ] DNS A-записи настроены (@ и www → IP сервера)
- [ ] `.env.production` заполнен всеми секретами
- [ ] Порты 3006 и 3007 свободны на сервере
- [ ] Docker и Docker Compose установлены
- [ ] Nginx установлен и работает
- [ ] Есть доступ к серверу (SSH)

---

## 🚀 ГОТОВ К ДЕПЛОЮ!

Следуй шагам выше по порядку. Если возникнут проблемы - напиши мне!

