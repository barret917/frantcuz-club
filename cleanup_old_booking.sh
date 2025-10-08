#!/bin/bash

echo "🧹 Удаление старой системы бронирования..."

# Backend файлы
echo "📁 Удаляем backend файлы..."
rm -f backend/src/controllers/zone.controller.ts
rm -f backend/src/routes/zones.ts
rm -f backend/src/routes/tables.ts
rm -f backend/src/routes/halls.ts
rm -f backend/test-zones.js

# Frontend API файлы
echo "🌐 Удаляем frontend API файлы..."
rm -f frontend/src/shared/api/zone-items.ts
rm -f frontend/src/shared/api/halls.ts
rm -f frontend/src/shared/api/tables.ts
rm -f frontend/src/shared/api/zones.ts

# Frontend папки
echo "📂 Удаляем frontend папки..."
rm -rf frontend/src/shared/ui/ZoneCard
rm -rf frontend/src/features/table-selection
rm -rf frontend/src/features/zone-constructor
rm -rf frontend/src/entities/zone-item
rm -rf frontend/src/entities/Zone
rm -rf frontend/src/features/ZoneSelection
rm -rf frontend/src/features/hall-management
rm -rf frontend/src/features/event-hall-management

echo "✅ Старая система бронирования удалена!"
echo "📝 Не забудьте обновить импорты в оставшихся файлах"
