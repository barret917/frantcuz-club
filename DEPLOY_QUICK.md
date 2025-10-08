# ⚡ Быстрая шпаргалка деплоя frantsuz-club.ru

## 🎯 Кратко: 3 этапа

1. **HTTP** - запускаем на 80 порту
2. **SSL** - получаем сертификат Let's Encrypt
3. **HTTPS** - переключаемся на 443 порт

---

## 📦 Подготовка (локально)

```bash
cd /home/maga/frantsuz-club

# 1. Создайте .env.production
cp production.env.template .env.production
nano .env.production

# 2. Заполните важные поля:
#    - DB_PASSWORD
#    - JWT_SECRET (openssl rand -base64 32)
#    - TELEGRAM_BOT_TOKEN
#    - SMTP_PASSWORD (если нужна email рассылка)

# 3. Создайте архив
tar -czf frantsuz-club.tar.gz \
  --exclude='node_modules' --exclude='.git' --exclude='dist' .

# 4. Загрузите на сервер
scp frantsuz-club.tar.gz root@185.60.134.145:/root/
scp .env.production root@185.60.134.145:/root/
```

---

## 🚀 Этап 1: HTTP (на сервере)

```bash
ssh root@185.60.134.145

# 1. Распаковка
cd /root
tar -xzf frantsuz-club.tar.gz
mv .env.production frantsuz-club/
cd frantsuz-club

# 2. Запуск Docker
docker-compose -f docker-compose.production.yml --env-file .env.production up -d --build

# Ждите 2-3 минуты, затем проверьте:
docker-compose -f docker-compose.production.yml ps
curl http://localhost:3006
curl http://localhost:3007/health

# 3. Настройка Nginx
sudo cp nginx/frantsuz-club.http.conf /etc/nginx/sites-available/frantsuz-club.conf
sudo ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 4. Firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# 5. Проверка
curl http://frantsuz-club.ru
```

✅ Если сайт открывается на **http://frantsuz-club.ru** - идём дальше!

---

## 🔒 Этап 2: SSL

```bash
cd /root/frantsuz-club
sudo ./scripts/setup-ssl.sh
```

Скрипт сам всё сделает! ✨

---

## 🌐 Этап 3: HTTPS

```bash
cd /root/frantsuz-club

# 1. Обновите CORS в .env.production
nano .env.production
# Измените: CORS_ORIGIN=https://frantsuz-club.ru,https://www.frantsuz-club.ru

# 2. Перезапустите контейнеры
docker-compose -f docker-compose.production.yml --env-file .env.production restart backend frontend

# 3. Замените Nginx конфиг на HTTPS
sudo rm /etc/nginx/sites-enabled/frantsuz-club.conf
sudo cp nginx/frantsuz-club.https.conf /etc/nginx/sites-available/frantsuz-club.conf
sudo ln -s /etc/nginx/sites-available/frantsuz-club.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 4. Проверка
curl -I https://frantsuz-club.ru
```

✅ Готово! Сайт на **https://frantsuz-club.ru** 🎉

---

## 🔧 Частые команды

```bash
# Логи
docker-compose -f docker-compose.production.yml logs -f backend

# Перезапуск
docker-compose -f docker-compose.production.yml restart

# Остановка
docker-compose -f docker-compose.production.yml down

# Nginx логи
sudo tail -f /var/log/nginx/frantsuz-club-error.log

# SSL сертификаты
sudo certbot certificates
```

---

## 🚨 Если что-то не работает

**Сайт не открывается:**
```bash
# Проверьте DNS
dig frantsuz-club.ru

# Проверьте контейнеры
docker-compose -f docker-compose.production.yml ps

# Проверьте Nginx
sudo nginx -t
sudo systemctl status nginx
```

**SSL ошибка:**
```bash
sudo certbot renew
sudo systemctl reload nginx
```

**Backend не отвечает:**
```bash
docker-compose -f docker-compose.production.yml logs backend
docker-compose -f docker-compose.production.yml restart backend
```

---

**Подробная инструкция:** [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

