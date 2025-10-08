#!/bin/bash

# ============================================
# Скрипт получения SSL сертификатов для frantsuz-club.ru
# Использует Certbot (Let's Encrypt)
# ============================================

set -e

echo "🔒 Получение SSL сертификатов для frantsuz-club.ru"
echo ""

# Цвета
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

info() { echo -e "${GREEN}✓${NC} $1"; }
warn() { echo -e "${YELLOW}⚠${NC} $1"; }
error() { echo -e "${RED}✗${NC} $1"; }

# Проверка root прав
if [ "$EUID" -ne 0 ]; then 
    error "Запустите скрипт с sudo:"
    echo "  sudo ./scripts/setup-ssl.sh"
    exit 1
fi

# Домен
DOMAIN="frantsuz-club.ru"
WWW_DOMAIN="www.frantsuz-club.ru"
EMAIL="order@wetop.ru"  # Замените на ваш email

info "Домен: $DOMAIN"
info "WWW: $WWW_DOMAIN"
info "Email: $EMAIL"
echo ""

# Проверка Certbot
if ! command -v certbot &> /dev/null; then
    echo "📦 Устанавливаем Certbot..."
    apt-get update
    apt-get install -y certbot python3-certbot-nginx
    info "Certbot установлен"
fi

# Проверка что сайт доступен на HTTP
echo "🔍 Проверяем доступность сайта на HTTP..."
if ! curl -f http://$DOMAIN &> /dev/null; then
    warn "Сайт не доступен на http://$DOMAIN"
    echo "Убедитесь что:"
    echo "  1. Docker контейнеры запущены"
    echo "  2. Nginx конфигурация активна"
    echo "  3. Домен указывает на этот сервер"
    read -p "Продолжить? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Получаем сертификаты
echo ""
echo "🔐 Получаем SSL сертификаты..."
echo "Это может занять минуту..."
echo ""

certbot --nginx \
    -d $DOMAIN \
    -d $WWW_DOMAIN \
    --non-interactive \
    --agree-tos \
    --email $EMAIL \
    --redirect \
    --hsts \
    --staple-ocsp

if [ $? -eq 0 ]; then
    info "SSL сертификаты получены успешно! ✅"
else
    error "Не удалось получить сертификаты"
    echo ""
    echo "Возможные причины:"
    echo "  1. Домен не указывает на этот сервер"
    echo "  2. Порт 80 заблокирован firewall"
    echo "  3. Nginx не настроен правильно"
    echo ""
    echo "Проверьте:"
    echo "  • DNS: dig $DOMAIN"
    echo "  • Firewall: sudo ufw status"
    echo "  • Nginx: sudo nginx -t"
    exit 1
fi

# Проверяем сертификаты
echo ""
echo "🔍 Проверяем сертификаты..."
certbot certificates

# Настройка автоматического обновления
echo ""
echo "🔄 Настраиваем автоматическое обновление..."

# Certbot должен автоматически добавить cron job
# Проверяем:
if systemctl is-active --quiet certbot.timer; then
    info "Автообновление уже настроено (systemd timer)"
else
    # Если нет systemd timer, проверяем cron
    if crontab -l | grep -q certbot; then
        info "Автообновление уже настроено (cron)"
    else
        # Добавляем cron job для обновления (дважды в день)
        (crontab -l 2>/dev/null; echo "0 0,12 * * * certbot renew --quiet --post-hook 'systemctl reload nginx'") | crontab -
        info "Автообновление настроено (cron)"
    fi
fi

# Проверка работы HTTPS
echo ""
echo "🌐 Проверяем HTTPS..."
sleep 2

if curl -f -k https://$DOMAIN &> /dev/null; then
    info "HTTPS работает! ✅"
else
    warn "HTTPS не отвечает, но сертификаты установлены"
    echo "Возможно нужно перезагрузить Nginx:"
    echo "  sudo systemctl reload nginx"
fi

# Итоги
echo ""
echo "═══════════════════════════════════════════"
echo "🎉 SSL сертификаты установлены!"
echo "═══════════════════════════════════════════"
echo ""
echo "📍 Ваш сайт теперь доступен по HTTPS:"
echo "   https://frantsuz-club.ru"
echo "   https://www.frantsuz-club.ru"
echo ""
echo "🔒 Сертификаты:"
echo "   • Срок действия: 90 дней"
echo "   • Автообновление: настроено"
echo "   • Проверить: sudo certbot certificates"
echo ""
echo "🔄 Обновить вручную:"
echo "   sudo certbot renew"
echo ""
echo "📝 Следующий шаг:"
echo "   Обновите docker-compose конфигурацию:"
echo "   • Измените CORS_ORIGIN на https://frantsuz-club.ru"
echo "   • Перезапустите контейнеры"
echo ""
