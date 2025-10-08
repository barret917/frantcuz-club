import { bot } from '../botInstance.js';

export const payRules = {
  generatePayRules: () => {
    return `
🎭 <b>Правила оплаты в развлекательном комплексе "Француз"</b> 🎤🎱💿

💳 <b>Принимаем к оплате:</b>
Visa | MasterCard | Мир 

🔄 <b>Процесс оплаты:</b>
После ввода данных вы будете перенаправлены на защищённый платёжный шлюз:
• ПАО «Сбербанк России»
• ПАО «Банк ВТБ» 
• PayKeeper

🔐 <b>Безопасность:</b>
• SSL-шифрование всех данных
• Соответствие стандарту PCI DSS
• Технология 3D-Secure (Visa/MC/Mir)

📝 <b>Что потребуется:</b>
┌ Номер карты
├ Срок действия
├ Имя держателя (латиницей)
└ CVC2/CVV2 код

🛡 <b>Рекомендации:</b>
• Храните карты как наличные
• Не сообщайте данные посторонним
• Вводите реквизиты только на проверенных сайтах
• Имейте под рукой телефон банка

🏢 <b>Реквизиты:</b>
<b>ООО "ЭкоСтар"</b>
┌ ИНН: 5041214554
├ ОГРН: 1235000052330
├ Адрес: г. Москва, ул. Салтыковская, д. 49А
├ Телефон: +7(968) 091-55-50
└ Email: order@wetop.ru
🕚 Режим работы: 11:00 – 23:00
    `;
  },

  sendPayRules: async (chatId, bot) => {
    try {
      await bot.sendMessage(chatId, payRules.generatePayRules(), {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [
            [{ text: '🎟️ К билетам', callback_data: 'show_tickets' }],
            [{ text: '💳 Оплата', callback_data: 'pay' }],
            [{ text: '🔙 В главное меню', callback_data: 'back_to_command_menu' }],
            [{ text: '📞 Контакты', callback_data: 'contacts' }]
          ]
        }
      });
    } catch (error) {
      console.error('Error sending payment instructions:', error);
      await bot.sendMessage(chatId, '⚠️ Ой! Что-то пошло не так при загрузке инструкции. Давайте попробуем ещё раз?', {
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔄 Повторить попытку', callback_data: 'pay_rules' }],
            [{ text: '🔙 В главное меню', callback_data: 'back_to_command_menu' }],
            [{ text: '📞 Контакты', callback_data: 'contacts' }]
          ]
        }
      });
    }
  }
};