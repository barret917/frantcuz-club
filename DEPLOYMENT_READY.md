# ✅ ГОТОВО К ДЕПЛОЮ: Полный список файлов

## 📦 Что было создано/обновлено

### 1. Docker & Deployment
- ✅ `docker-compose.production.yml` - Production конфигурация с правильными портами
- ✅ `production.env.template` - Шаблон переменных окружения (обновлен)
- ✅ `scripts/setup-ssl.sh` - Автоматическая установка SSL сертификатов

### 2. Nginx конфигурации
- ✅ `nginx/frantsuz-club.http.conf` - Конфигурация для HTTP (Этап 1)
- ✅ `nginx/frantsuz-club.https.conf` - Конфигурация для HTTPS (Этап 2)

### 3. Документация
- ✅ `DEPLOYMENT_GUIDE.md` - Полная пошаговая инструкция деплоя
- ✅ `DEPLOY_QUICK.md` - Быстрая шпаргалка
- ✅ `README_DEPLOYMENT.md` - Общий README проекта
- ✅ `BOT_ENV_SETUP.md` - Настройка переменных для бота

---

## 🎯 АРХИТЕКТУРА ДЕПЛОЯ

```
Internet
   ↓
Nginx (порт 80, 443) ← Let's Encrypt SSL
   ↓
   ├─→ Frontend (порт 3006)
   ├─→ Backend API (порт 3007)
   │     ↓
   │     PostgreSQL (внутри Docker)
   │     ↓
   └─→ Telegram Bot (polling, внутри Docker)
```

**Ключевые моменты:**
- ✅ Frontend: `https://frantsuz-club.ru` (порт 3006 → проксируется Nginx)
- ✅ Backend: `https://frantsuz-club.ru/api` (порт 3007 → проксируется Nginx)
- ✅ PostgreSQL: **НЕ** доступна снаружи (только внутри Docker сети)
- ✅ Telegram Bot: **НЕ** доступен снаружи (polling mode)
- ✅ SSL: Let's Encrypt (автообновление)

---

## 🚀 ЧТО ДЕЛАТЬ ДАЛЬШЕ?

### Шаг 1: Подготовьте .env.production

```bash
cd /home/maga/frantsuz-club
cp production.env.template .env.production
nano .env.production
```

**Обязательно заполните:**
1. `DB_PASSWORD` - пароль БД (сгенерируйте: `openssl rand -base64 24`)
2. `JWT_SECRET` - секрет для JWT (сгенерируйте: `openssl rand -base64 32`)
3. `TELEGRAM_BOT_TOKEN` - токен бота от @BotFather
4. `PAYKEEPER_*` - данные PayKeeper (если есть)
5. `SMTP_*` - данные SMTP для email (если нужна рассылка)

### Шаг 2: Создайте архив

```bash
cd /home/maga/frantsuz-club
tar -czf frantsuz-club.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='dist' \
  --exclude='backend/uploads' \
  --exclude='.env*' \
  .

# Проверьте размер
ls -lh frantsuz-club.tar.gz
```

### Шаг 3: Загрузите на сервер

```bash
# IP сервера из вашего примера
scp frantsuz-club.tar.gz root@185.60.134.145:/root/
scp .env.production root@185.60.134.145:/root/
```

### Шаг 4: Разверните на сервере

**SSH на сервер:**
```bash
ssh root@185.60.134.145
```

**Распаковка и запуск:**
```bash
cd /root
tar -xzf frantsuz-club.tar.gz
mv .env.production frantsuz-club/
cd frantsuz-club

# Запуск Docker
docker-compose -f docker-compose.production.yml --env-file .env.production up -d --build

# Ждите 2-3 минуты, затем проверьте
docker-compose -f docker-compose.production.yml ps
curl http://localhost:3006
curl http://localhost:3007/health
```

### Шаг 5: Настройте Nginx

```bash
# Копируем HTTP конфигурацию (для начала)
sudo cp nginx/frantsuz-club.http.conf /etc/nginx/sites-available/frantsuz-club.conf
sudo ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/

# Проверяем и перезагружаем
sudo nginx -t
sudo systemctl reload nginx

# Открываем firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Шаг 6: Проверьте HTTP

Откройте в браузере: **http://frantsuz-club.ru**

Если работает ✅ - переходим к SSL!

### Шаг 7: Получите SSL сертификат

```bash
cd /root/frantsuz-club
sudo ./scripts/setup-ssl.sh
```

Скрипт автоматически всё настроит! 🎉

### Шаг 8: Переключитесь на HTTPS

```bash
# Обновите CORS в .env.production
nano .env.production
# Измените: CORS_ORIGIN=https://frantsuz-club.ru,https://www.frantsuz-club.ru

# Перезапустите контейнеры
docker-compose -f docker-compose.production.yml --env-file .env.production restart backend frontend

# Замените Nginx конфиг
sudo rm /etc/nginx/sites-enabled/frantsuz-club.conf
sudo cp nginx/frantsuz-club.https.conf /etc/nginx/sites-available/frantsuz-club.conf
sudo ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Шаг 9: Проверьте HTTPS

Откройте в браузере: **https://frantsuz-club.ru**

Должен быть зеленый замок! 🔒✅

---

## 📚 Документация

Если что-то непонятно, читайте:

1. **[DEPLOY_QUICK.md](./DEPLOY_QUICK.md)** - Быстрая шпаргалка
2. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Подробная инструкция
3. **[README_DEPLOYMENT.md](./README_DEPLOYMENT.md)** - Общая информация
4. **[BOT_ENV_SETUP.md](./BOT_ENV_SETUP.md)** - Настройка бота

---

## 🔧 Полезные команды

```bash
# Логи
docker-compose -f docker-compose.production.yml logs -f

# Конкретный сервис
docker-compose -f docker-compose.production.yml logs -f backend

# Перезапуск
docker-compose -f docker-compose.production.yml restart

# Остановка
docker-compose -f docker-compose.production.yml down

# Проверка здоровья
curl https://frantsuz-club.ru/health

# SSL сертификаты
sudo certbot certificates

# Nginx логи
sudo tail -f /var/log/nginx/frantsuz-club-error.log
```

---

## 🚨 Возможные проблемы

### "Cannot connect to Docker daemon"
```bash
sudo systemctl start docker
sudo usermod -aG docker $USER
```

### "Port already in use"
```bash
# Проверьте какие порты заняты
sudo netstat -tlnp | grep -E ':(3006|3007)'

# Остановите конфликтующие контейнеры
docker ps
docker stop <container_id>
```

### "SSL certificate error"
```bash
# Проверьте DNS
dig frantsuz-club.ru

# Обновите сертификаты
sudo certbot renew
sudo systemctl reload nginx
```

### "Backend not responding"
```bash
# Проверьте логи
docker-compose -f docker-compose.production.yml logs backend

# Перезапустите
docker-compose -f docker-compose.production.yml restart backend
```

---

## ✅ Чек-лист деплоя

- [ ] Создан `.env.production` с реальными данными
- [ ] Архив загружен на сервер
- [ ] Docker контейнеры запущены
- [ ] HTTP работает (http://frantsuz-club.ru)
- [ ] SSL сертификат получен
- [ ] HTTPS работает (https://frantsuz-club.ru)
- [ ] Backend API работает (/health возвращает OK)
- [ ] Telegram бот отвечает
- [ ] Email уведомления работают (если настроены)
- [ ] PayKeeper работает (если настроен)

---

**🎉 Готово к деплою!**

Следуй инструкциям выше, и всё получится! 💪

Если возникнут вопросы - смотри документацию в `DEPLOYMENT_GUIDE.md`

