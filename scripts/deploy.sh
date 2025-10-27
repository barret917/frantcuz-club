#!/bin/bash

set -e

# Цвета
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

info() { echo -e "${GREEN}✓${NC} $1"; }
warn() { echo -e "${YELLOW}⚠${NC} $1"; }
error() { echo -e "${RED}✗${NC} $1"; }

echo "🚀 Начинаем деплой проекта Frantsuz Club"
echo ""

# 1. Переходим в директорию проекта
cd /home/maga/frantsuz-club

# 2. Собираем бэкенд
info "Собираем бэкенд..."
cd backend
npm run build
info "Бэкенд собран"

# 3. Собираем фронтенд
info "Собираем фронтенд..."
cd ../frontend
npm run build
info "Фронтенд собран"

# 4. Переходим в корень проекта
cd ..

# 5. Перезапускаем Docker контейнеры
info "Пересобираем и перезапускаем Docker контейнеры..."
docker-compose -f docker-compose.production.yml down
docker-compose -f docker-compose.production.yml up -d --build

# 6. Проверяем статус
info "Проверяем статус контейнеров..."
docker-compose -f docker-compose.production.yml ps

echo ""
echo "═══════════════════════════════════════════"
info "✅ Деплой завершен успешно!"
echo "═══════════════════════════════════════════"
echo ""
echo "Проверьте статус контейнеров:"
echo "  docker-compose -f docker-compose.production.yml ps"
echo ""
echo "Посмотрите логи:"
echo "  docker-compose -f docker-compose.production.yml logs -f"
echo ""

