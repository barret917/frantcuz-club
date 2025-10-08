# Настройка PayKeeper

## Шаги для настройки реальных данных PayKeeper:

### 1. Получите данные от PayKeeper
- Зарегистрируйтесь на сайте PayKeeper
- Получите в личном кабинете:
  - **URL API** (обычно `https://your-domain.paykeeper.ru`)
  - **ID мерчанта** (Merchant ID)
  - **Секретный ключ** (Secret Key)

### 2. Создайте файл `.env` в папке `backend`
Создайте файл `backend/.env` со следующим содержимым:

```env
# PayKeeper Configuration
PAYKEEPER_URL=https://your-domain.paykeeper.ru
PAYKEEPER_MERCHANT_ID=your_merchant_id
PAYKEEPER_SECRET_KEY=your_secret_key

# Frontend URL
FRONTEND_URL=http://localhost:3000

# API URL
API_URL=http://localhost:3002

# Environment
NODE_ENV=production

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/frantsuz_club"
```

### 3. Настройте webhook URL
В личном кабинете PayKeeper укажите webhook URL:
```
http://your-domain.com/api/payment/webhook
```

### 4. Настройте URL для успешной/неуспешной оплаты
В личном кабинете PayKeeper укажите:
- **Success URL**: `http://your-domain.com/payment/success`
- **Failure URL**: `http://your-domain.com/payment/failure`

### 5. Перезапустите бэкенд
После создания файла `.env` перезапустите бэкенд:
```bash
cd backend
npm run dev
```

### 6. Проверьте работу
- Попробуйте купить билет
- Проверьте, что открывается реальная страница PayKeeper
- Проверьте webhook в логах бэкенда

## Тестирование
Для тестирования можно использовать тестовые данные PayKeeper или sandbox режим.


