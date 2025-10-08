import { bot } from '../botInstance.js';

export const refundRules = {

  generateRefundRules: () => {
    return `
🎭 <b>Правила возврата в развлекательном комплексе "Француз"</b> 🎤🎱💿

<u>Для вашего комфорта мы разработали прозрачную систему возвратов:</u>

📜 <b>Законодательная база:</b>
• Федеральный закон "О защите прав потребителей" (ст. 26.1 и 32)
• Постановление Правительства № 1153 (от 16.11.2021)

✨ <b>Возврат билетов на мероприятия:</b>
✅ <i>Когда возможно:</i>
▸ При отмене/переносе мероприятия - 100% возврат
▸ По вашей инициативе от 7 дней - 90% стоимости
▸ За 3-7 дней - 50% стоимости

❌ <i>Когда невозможно:</i>
▸ Если вы не пришли на мероприятие
▸ Менее 3дней до начала

🍹 <b>Возврат брони столиков:</b>
• При бронировании - оплата не возвращается

🎯 <b>Бильярд и игровые зоны:</b>
• Предоплата не возвращается
• При опоздании более 20 минут - бронь аннулируется

📌 <b>Как оформить возврат?</b>
1. Нажмите на кнопку внизу оформить возврат
2. Укажите дату и номер заказа
3. Приложите чек (если есть)
4. Деньги вернутся в течение 30 дней

<i>Мы всегда идем навстречу нашим гостям!</i> По особым случаям возможны индивидуальные решения 😊`
  },

  sendRefundRules: async (chatId, bot) => {
    try {
      await bot.sendMessage(chatId, refundRules.generateRefundRules(), {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [
            [{ text: '🎟️ К билетам', callback_data: 'show_tickets' }],
            [{ text: '💳 Правила оплаты', callback_data: 'pay_rules' }],
            [{ text: '🔙 В главное меню', callback_data: 'back_to_command_menu' }],
            [{ text: '📞 Контакты', callback_data: 'contacts' }],
            [{ text: '🔄 Оформить возврат', callback_data: 'create_refund' },],
          ]
        }
      });
    } catch (error) {
      console.error('Error sending payment instructions:', error);
      await bot.sendMessage(chatId, '⚠️ Ой! Что-то пошло не так при загрузке инструкции. Давайте попробуем ещё раз?', {
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔄 Повторить попытку', callback_data: 'refund' }],
            [{ text: '🔙 В главное меню', callback_data: 'back_to_command_menu' }],
            [{ text: '📞 Контакты', callback_data: 'contacts' }]
          ]
        }
      });
    }
  }
};