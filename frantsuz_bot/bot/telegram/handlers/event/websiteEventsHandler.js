import { bot } from '../../botInstance.js';
import WebsiteApiService from '../../../services/websiteApiService.js';
import WebsitePaykeeperService from '../../../services/websitePaykeeperService.js';
import { userStates } from '../../../state.js';

const websiteApiService = new WebsiteApiService();
const websitePaykeeperService = new WebsitePaykeeperService();

// Показ списка событий с сайта
export const showWebsiteEventsList = async (chatId) => {
    try {
        const events = await websiteApiService.getEvents();
        
        if (!events || events.length === 0) {
            return await bot.sendMessage(
                chatId,
                '📭 <b>Событий пока нет</b>\n\n' +
                'В данный момент нет доступных мероприятий.',
                { parse_mode: 'HTML' }
            );
        }

        const message = '🎭 <b>Доступные мероприятия:</b>\n\n' +
            `Всего мероприятий: <b>${events.length}</b>`;

        const keyboard = events.map(event => [{
            text: `${event.name} - ${new Date(event.startsAt).toLocaleDateString('ru-RU')}`,
            callback_data: `website_event_${event.id}`
        }]);

        keyboard.push([{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]);

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error('Ошибка показа событий:', error);
        await bot.sendMessage(
            chatId,
            '❌ Ошибка загрузки событий. Попробуйте позже.'
        );
    }
};

// Показ деталей события
export const showWebsiteEventDetails = async (chatId, eventId) => {
    try {
        const events = await websiteApiService.getEvents();
        const event = events.find(e => e.id === parseInt(eventId));
        
        if (!event) {
            return await bot.sendMessage(chatId, '❌ Событие не найдено');
        }

        const eventDate = new Date(event.startsAt);
        const formattedDate = eventDate.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        });
        const formattedTime = eventDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const message = 
            `🎭 <b>${event.name}</b>\n\n` +
            `📅 <b>Дата:</b> ${formattedDate} в ${formattedTime}\n` +
            `📍 <b>Место:</b> ${event.hall.name}\n` +
            `📝 <b>Описание:</b>\n${event.description || 'нет описания'}\n\n` +
            `💰 <b>Цены по зонам:</b>\n` +
            event.eventZonePrices.map(price => 
                `• ${price.zone.name}: ${price.pricePerSeat} ₽ за место`
            ).join('\n');

        const keyboard = [
            [{ text: '🎫 Купить билеты', callback_data: `website_buy_tickets_${event.id}` }],
            [{ text: '🔙 Назад к событиям', callback_data: 'website_events_list' }],
            [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
        ];

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error('Ошибка показа деталей события:', error);
        await bot.sendMessage(chatId, '❌ Ошибка загрузки деталей события');
    }
};

// Показ зон для покупки билетов
export const showZonesForPurchase = async (chatId, eventId) => {
    try {
        const events = await websiteApiService.getEvents();
        const event = events.find(e => e.id === parseInt(eventId));
        
        if (!event) {
            return await bot.sendMessage(chatId, '❌ Событие не найдено');
        }

        const message = `🎫 <b>Выберите зону для покупки билетов</b>\n\n` +
            `Мероприятие: <b>${event.name}</b>`;

        const keyboard = [];

        for (const zonePrice of event.eventZonePrices) {
            try {
                const availability = await websiteApiService.getZoneAvailability(eventId, zonePrice.zoneId);
                const zoneText = `${zonePrice.zone.name} - ${zonePrice.pricePerSeat} ₽ (${availability.availableSeats} мест)`;
                const callbackData = `website_select_zone_${eventId}_${zonePrice.zoneId}`;
                
                keyboard.push([{ text: zoneText, callback_data: callbackData }]);
            } catch (error) {
                console.error(`Ошибка получения доступности зоны ${zonePrice.zoneId}:`, error);
            }
        }

        keyboard.push(
            [{ text: '🔙 Назад к событию', callback_data: `website_event_${eventId}` }],
            [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
        );

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error('Ошибка показа зон:', error);
        await bot.sendMessage(chatId, '❌ Ошибка загрузки зон');
    }
};

// Начало процесса покупки билетов
export const startTicketPurchase = async (chatId, eventId, zoneId) => {
    try {
        const events = await websiteApiService.getEvents();
        const event = events.find(e => e.id === parseInt(eventId));
        const zonePrice = event.eventZonePrices.find(zp => zp.zoneId === parseInt(zoneId));
        
        if (!event || !zonePrice) {
            return await bot.sendMessage(chatId, '❌ Данные не найдены');
        }

        const availability = await websiteApiService.getZoneAvailability(eventId, zoneId);
        
        if (availability.availableSeats <= 0) {
            return await bot.sendMessage(
                chatId,
                '❌ К сожалению, в этой зоне нет свободных мест'
            );
        }

        // Сохраняем состояние пользователя
        userStates[chatId] = {
            ...userStates[chatId],
            purchasingTickets: {
                eventId: parseInt(eventId),
                zoneId: parseInt(zoneId),
                eventName: event.name,
                zoneName: zonePrice.zone.name,
                pricePerSeat: zonePrice.pricePerSeat,
                availableSeats: availability.availableSeats
            },
            currentStep: 'enter_customer_name'
        };

        const message = 
            `🎫 <b>Покупка билетов</b>\n\n` +
            `Мероприятие: <b>${event.name}</b>\n` +
            `Зона: <b>${zonePrice.zone.name}</b>\n` +
            `Цена за место: <b>${zonePrice.pricePerSeat} ₽</b>\n` +
            `Доступно мест: <b>${availability.availableSeats}</b>\n\n` +
            `Введите ваше имя:`;

        await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } catch (error) {
        console.error('Ошибка начала покупки билетов:', error);
        await bot.sendMessage(chatId, '❌ Ошибка начала покупки билетов');
    }
};

// Обработка ввода имени клиента
export const handleCustomerNameInput = async (chatId, name) => {
    try {
        const state = userStates[chatId];
        if (!state.purchasingTickets) {
            return await bot.sendMessage(chatId, '❌ Ошибка состояния покупки');
        }

        state.purchasingTickets.customerName = name;
        state.currentStep = 'enter_customer_phone';

        await bot.sendMessage(
            chatId,
            '📞 Введите ваш номер телефона:'
        );
    } catch (error) {
        console.error('Ошибка обработки имени:', error);
        await bot.sendMessage(chatId, '❌ Ошибка обработки имени');
    }
};

// Обработка ввода телефона клиента
export const handleCustomerPhoneInput = async (chatId, phone) => {
    try {
        const state = userStates[chatId];
        if (!state.purchasingTickets) {
            return await bot.sendMessage(chatId, '❌ Ошибка состояния покупки');
        }

        state.purchasingTickets.customerPhone = phone;
        state.currentStep = 'enter_customer_email';

        const message = 
            `📧 <b>Email для уведомлений</b>\n\n` +
            `Для отправки QR-кода и подтверждения на email, введите ваш email адрес:\n\n` +
            `<i>Можно пропустить, нажав "Пропустить"</i>`;

        const keyboard = [
            [{ text: '⏭️ Пропустить', callback_data: 'website_skip_email' }]
        ];

        await bot.sendMessage(chatId, message, { 
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error('Ошибка обработки телефона:', error);
        await bot.sendMessage(chatId, '❌ Ошибка обработки телефона');
    }
};

// Обработка ввода email клиента
export const handleCustomerEmailInput = async (chatId, email) => {
    try {
        const state = userStates[chatId];
        if (!state.purchasingTickets) {
            return await bot.sendMessage(chatId, '❌ Ошибка состояния покупки');
        }

        // Простая валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return await bot.sendMessage(chatId, '❌ Неверный формат email. Попробуйте еще раз:');
        }

        state.purchasingTickets.customerEmail = email;
        state.currentStep = 'enter_seats_count';

        const message = 
            `📊 <b>Количество мест</b>\n\n` +
            `Доступно: <b>${state.purchasingTickets.availableSeats}</b> мест\n` +
            `Цена за место: <b>${state.purchasingTickets.pricePerSeat} ₽</b>\n\n` +
            `Введите количество мест (от 1 до ${state.purchasingTickets.availableSeats}):`;

        await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } catch (error) {
        console.error('Ошибка обработки email:', error);
        await bot.sendMessage(chatId, '❌ Ошибка обработки email');
    }
};

// Пропуск ввода email
export const skipEmailInput = async (chatId) => {
    try {
        const state = userStates[chatId];
        if (!state.purchasingTickets) {
            return await bot.sendMessage(chatId, '❌ Ошибка состояния покупки');
        }

        state.currentStep = 'enter_seats_count';

        const message = 
            `📊 <b>Количество мест</b>\n\n` +
            `Доступно: <b>${state.purchasingTickets.availableSeats}</b> мест\n` +
            `Цена за место: <b>${state.purchasingTickets.pricePerSeat} ₽</b>\n\n` +
            `Введите количество мест (от 1 до ${state.purchasingTickets.availableSeats}):`;

        await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } catch (error) {
        console.error('Ошибка пропуска email:', error);
        await bot.sendMessage(chatId, '❌ Ошибка обработки');
    }
};

// Обработка ввода количества мест
export const handleSeatsCountInput = async (chatId, seatsCount) => {
    try {
        const state = userStates[chatId];
        if (!state.purchasingTickets) {
            return await bot.sendMessage(chatId, '❌ Ошибка состояния покупки');
        }

        const count = parseInt(seatsCount);
        if (count < 1 || count > state.purchasingTickets.availableSeats) {
            return await bot.sendMessage(
                chatId,
                `❌ Количество мест должно быть от 1 до ${state.purchasingTickets.availableSeats}`
            );
        }

        state.purchasingTickets.seatsCount = count;
        state.currentStep = 'confirm_purchase';

        const totalAmount = count * state.purchasingTickets.pricePerSeat;
        const message = 
            `🎫 <b>Подтверждение покупки</b>\n\n` +
            `Мероприятие: <b>${state.purchasingTickets.eventName}</b>\n` +
            `Зона: <b>${state.purchasingTickets.zoneName}</b>\n` +
            `Имя: <b>${state.purchasingTickets.customerName}</b>\n` +
            `Телефон: <b>${state.purchasingTickets.customerPhone}</b>\n` +
            `Количество мест: <b>${count}</b>\n` +
            `Цена за место: <b>${state.purchasingTickets.pricePerSeat} ₽</b>\n` +
            `Общая сумма: <b>${totalAmount} ₽</b>\n\n` +
            `Подтвердите покупку:`;

        const keyboard = [
            [
                { text: '✅ Подтвердить', callback_data: 'website_confirm_purchase' },
                { text: '❌ Отменить', callback_data: 'website_cancel_purchase' }
            ]
        ];

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error('Ошибка обработки количества мест:', error);
        await bot.sendMessage(chatId, '❌ Ошибка обработки количества мест');
    }
};

// Подтверждение покупки билетов
export const confirmTicketPurchase = async (chatId) => {
    try {
        const state = userStates[chatId];
        if (!state.purchasingTickets) {
            return await bot.sendMessage(chatId, '❌ Ошибка состояния покупки');
        }

        const ticketData = {
            eventId: state.purchasingTickets.eventId,
            zoneId: state.purchasingTickets.zoneId,
            customerName: state.purchasingTickets.customerName,
            customerPhone: state.purchasingTickets.customerPhone,
            seatsCount: state.purchasingTickets.seatsCount,
            telegramUserId: chatId.toString(),
            customerEmail: state.purchasingTickets.customerEmail
        };

        const result = await websiteApiService.purchaseTickets(ticketData);

        // Очищаем состояние
        delete userStates[chatId].purchasingTickets;
        delete userStates[chatId].currentStep;

        const message = 
            `🎉 <b>Билеты успешно зарезервированы!</b>\n\n` +
            `ID покупки: <code>${result.ticketPurchase.id}</code>\n` +
            `Мероприятие: <b>${result.ticketPurchase.eventName}</b>\n` +
            `Зона: <b>${result.ticketPurchase.zoneName}</b>\n` +
            `Количество мест: <b>${result.ticketPurchase.seatsCount}</b>\n` +
            `Сумма: <b>${result.ticketPurchase.totalAmount} ₽</b>\n\n` +
            `Время на оплату: <b>10 минут</b>\n` +
            `Ссылка для оплаты будет отправлена в следующем сообщении.`;

        const keyboard = [
            [{ text: '💳 Оплатить сейчас', callback_data: `website_pay_tickets_${result.ticketPurchase.id}` }],
            [{ text: '📋 Мои билеты', callback_data: 'website_my_tickets' }],
            [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
        ];

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error('Ошибка подтверждения покупки:', error);
        await bot.sendMessage(chatId, `❌ Ошибка покупки билетов: ${error.message}`);
    }
};

// Отмена покупки билетов
export const cancelTicketPurchase = async (chatId) => {
    try {
        // Очищаем состояние
        delete userStates[chatId].purchasingTickets;
        delete userStates[chatId].currentStep;

        await bot.sendMessage(
            chatId,
            '❌ Покупка билетов отменена',
            {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                    ]
                }
            }
        );
    } catch (error) {
        console.error('Ошибка отмены покупки:', error);
        await bot.sendMessage(chatId, '❌ Ошибка отмены покупки');
    }
};

// Обработка оплаты билетов
export const handleTicketPayment = async (chatId, ticketPurchaseId) => {
    try {
        // Получаем информацию о покупке билетов
        const ticketInfo = await websiteApiService.getTicketPurchase(ticketPurchaseId);
        
        if (!ticketInfo) {
            return await bot.sendMessage(chatId, '❌ Покупка билетов не найдена');
        }

        if (ticketInfo.status === 'paid') {
            return await bot.sendMessage(
                chatId,
                '✅ Билеты уже оплачены!'
            );
        }

        // Создаем платеж в PayKeeper
        const payment = await websitePaykeeperService.createPaymentForTickets(ticketPurchaseId);
        
        if (!payment.success) {
            return await bot.sendMessage(chatId, '❌ Ошибка создания платежа');
        }

        const message = 
            `💳 <b>Оплата билетов</b>\n\n` +
            `Мероприятие: <b>${ticketInfo.eventName}</b>\n` +
            `Зона: <b>${ticketInfo.zoneName}</b>\n` +
            `Количество мест: <b>${ticketInfo.seatsCount}</b>\n` +
            `Сумма: <b>${ticketInfo.totalAmount} ₽</b>\n\n` +
            `Нажмите кнопку ниже для перехода к оплате:`;

        const keyboard = [
            [{ text: '💳 Оплатить', url: payment.paymentUrl }],
            [{ text: '🔄 Проверить статус', callback_data: `website_check_payment_${payment.paymentId}_${ticketPurchaseId}` }],
            [{ text: '❌ Отменить', callback_data: 'website_cancel_payment' }],
            [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
        ];

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });

        // Запускаем мониторинг статуса платежа
        websitePaykeeperService.startPaymentMonitoring(
            payment.paymentId,
            ticketPurchaseId,
            async (successStatus) => {
                // Обработка успешной оплаты
                const successMessage = 
                    `🎉 <b>Оплата прошла успешно!</b>\n\n` +
                    `Мероприятие: <b>${ticketInfo.eventName}</b>\n` +
                    `Зона: <b>${ticketInfo.zoneName}</b>\n` +
                    `Количество мест: <b>${ticketInfo.seatsCount}</b>\n` +
                    `Сумма: <b>${ticketInfo.totalAmount} ₽</b>\n\n` +
                    `Ваши билеты подтверждены и оплачены!`;

                const successKeyboard = [
                    [{ text: '📋 Мои билеты', callback_data: 'website_my_tickets' }],
                    [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                ];

                await bot.sendMessage(chatId, successMessage, {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: successKeyboard
                    }
                });

                // Отправляем QR-код
                try {
                    const qrData = await websiteApiService.getTicketWithQR(ticketPurchaseId);
                    if (qrData.success && qrData.qrCode) {
                        const qrMessage = 
                            `🎫 <b>Ваш QR-код для входа</b>\n\n` +
                            `Покажите этот QR-код на входе в клуб.\n` +
                            `ID билета: <code>${qrData.ticket.id}</code>`;

                        await bot.sendPhoto(chatId, qrData.qrCode, {
                            caption: qrMessage,
                            parse_mode: 'HTML'
                        });
                    }
                } catch (qrError) {
                    console.error('Ошибка отправки QR-кода:', qrError);
                    await bot.sendMessage(chatId, '⚠️ QR-код будет отправлен позже');
                }
            },
            async (error) => {
                // Обработка ошибки оплаты
                const errorMessage = 
                    `❌ <b>Ошибка оплаты</b>\n\n` +
                    `Платеж не был завершен: ${error.message}\n\n` +
                    `Попробуйте оплатить снова или обратитесь в поддержку.`;

                const errorKeyboard = [
                    [{ text: '🔄 Попробовать снова', callback_data: `website_pay_tickets_${ticketPurchaseId}` }],
                    [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                ];

                await bot.sendMessage(chatId, errorMessage, {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: errorKeyboard
                    }
                });
            }
        );

    } catch (error) {
        console.error('Ошибка обработки оплаты:', error);
        await bot.sendMessage(chatId, `❌ Ошибка обработки оплаты: ${error.message}`);
    }
};

// Проверка статуса платежа
export const checkPaymentStatus = async (chatId, paymentId, ticketPurchaseId) => {
    try {
        const status = await websitePaykeeperService.checkPaymentStatus(paymentId);
        
        let message = '';
        let keyboard = [];

        switch (status.status) {
            case 'paid':
                message = '✅ Платеж успешно завершен!';
                keyboard = [
                    [{ text: '📋 Мои билеты', callback_data: 'website_my_tickets' }],
                    [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                ];
                break;
            case 'created':
                message = '⏳ Платеж создан, ожидается оплата...';
                keyboard = [
                    [{ text: '🔄 Проверить снова', callback_data: `website_check_payment_${paymentId}_${ticketPurchaseId}` }],
                    [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                ];
                break;
            case 'canceled':
                message = '❌ Платеж отменен';
                keyboard = [
                    [{ text: '🔄 Попробовать снова', callback_data: `website_pay_tickets_${ticketPurchaseId}` }],
                    [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                ];
                break;
            default:
                message = `📊 Статус платежа: ${status.status}`;
                keyboard = [
                    [{ text: '🔄 Проверить снова', callback_data: `website_check_payment_${paymentId}_${ticketPurchaseId}` }],
                    [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                ];
        }

        await bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });

    } catch (error) {
        console.error('Ошибка проверки статуса платежа:', error);
        await bot.sendMessage(chatId, `❌ Ошибка проверки статуса: ${error.message}`);
    }
};

// Показ билетов пользователя
export const showUserTickets = async (chatId) => {
    try {
        // Получаем все билеты пользователя
        const userTickets = await websiteApiService.getUserTickets(chatId.toString());
        
        if (!userTickets || userTickets.length === 0) {
            return await bot.sendMessage(
                chatId,
                '📭 <b>У вас пока нет билетов</b>\n\n' +
                'Купите билеты на мероприятия через раздел "🎭 События с сайта"',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🎭 События с сайта', callback_data: 'website_events_list' }],
                            [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
                        ]
                    }
                }
            );
        }

        const message = `📋 <b>Ваши билеты</b>\n\n` +
            `Всего билетов: <b>${userTickets.length}</b>`;

        const keyboard = [];

        // Группируем билеты по событиям
        const ticketsByEvent = {};
        userTickets.forEach(ticket => {
            if (!ticketsByEvent[ticket.eventName]) {
                ticketsByEvent[ticket.eventName] = [];
            }
            ticketsByEvent[ticket.eventName].push(ticket);
        });

        // Создаем кнопки для каждого события
        Object.keys(ticketsByEvent).forEach(eventName => {
            const eventTickets = ticketsByEvent[eventName];
            const totalSeats = eventTickets.reduce((sum, ticket) => sum + ticket.seatsCount, 0);
            const totalAmount = eventTickets.reduce((sum, ticket) => sum + ticket.totalAmount, 0);
            const status = eventTickets[0].status; // Статус первого билета (все должны быть одинаковыми)
            
            const statusEmoji = status === 'paid' ? '✅' : status === 'reserved' ? '⏳' : '❌';
            const buttonText = `${statusEmoji} ${eventName} (${totalSeats} мест, ${totalAmount} ₽)`;
            
            keyboard.push([{ 
                text: buttonText, 
                callback_data: `website_ticket_details_${eventTickets[0].id}` 
            }]);
        });

        keyboard.push(
            [{ text: '🎭 События с сайта', callback_data: 'website_events_list' }],
            [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
        );

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });

    } catch (error) {
        console.error('Ошибка показа билетов пользователя:', error);
        await bot.sendMessage(chatId, '❌ Ошибка загрузки билетов');
    }
};

// Показ деталей билета
export const showTicketDetails = async (chatId, ticketId) => {
    try {
        const ticketInfo = await websiteApiService.getTicketPurchase(ticketId);
        
        if (!ticketInfo) {
            return await bot.sendMessage(chatId, '❌ Билет не найден');
        }

        const statusEmoji = ticketInfo.status === 'paid' ? '✅' : ticketInfo.status === 'reserved' ? '⏳' : '❌';
        const statusText = ticketInfo.status === 'paid' ? 'Оплачен' : 
                          ticketInfo.status === 'reserved' ? 'Зарезервирован' : 'Отменен';

        const message = 
            `${statusEmoji} <b>Детали билета</b>\n\n` +
            `ID: <code>${ticketInfo.id}</code>\n` +
            `Мероприятие: <b>${ticketInfo.eventName}</b>\n` +
            `Зона: <b>${ticketInfo.zoneName}</b>\n` +
            `Количество мест: <b>${ticketInfo.seatsCount}</b>\n` +
            `Сумма: <b>${ticketInfo.totalAmount} ₽</b>\n` +
            `Статус: <b>${statusText}</b>\n` +
            `Дата покупки: <b>${new Date(ticketInfo.createdAt).toLocaleDateString('ru-RU')}</b>`;

        const keyboard = [];

        if (ticketInfo.status === 'reserved') {
            keyboard.push([{ text: '💳 Оплатить', callback_data: `website_pay_tickets_${ticketInfo.id}` }]);
        }

        keyboard.push(
            [{ text: '📋 Мои билеты', callback_data: 'website_my_tickets' }],
            [{ text: '🏠 На главную', callback_data: 'back_to_main_menu' }]
        );

        await bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: keyboard
            }
        });

        // Отправляем QR-код если билет оплачен
        if (ticketInfo.status === 'paid') {
            try {
                const qrData = await websiteApiService.getTicketWithQR(ticketId);
                if (qrData.success && qrData.qrCode) {
                    const qrMessage = 
                        `🎫 <b>QR-код для входа</b>\n\n` +
                        `Покажите этот QR-код на входе в клуб.\n` +
                        `ID билета: <code>${qrData.ticket.id}</code>`;

                    await bot.sendPhoto(chatId, qrData.qrCode, {
                        caption: qrMessage,
                        parse_mode: 'HTML'
                    });
                }
            } catch (qrError) {
                console.error('Ошибка отправки QR-кода:', qrError);
                await bot.sendMessage(chatId, '⚠️ QR-код недоступен');
            }
        }

    } catch (error) {
        console.error('Ошибка показа деталей билета:', error);
        await bot.sendMessage(chatId, '❌ Ошибка загрузки деталей билета');
    }
}; 