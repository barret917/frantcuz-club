import axios from 'axios'

export interface NotificationConfig {
  smsApiUrl: string
  smsApiKey: string
  emailApiUrl: string
  emailApiKey: string
  fromEmail: string
  fromName: string
}

export interface SMSNotification {
  to: string
  message: string
  template?: string
  variables?: Record<string, string>
}

export interface EmailNotification {
  to: string
  subject: string
  template: string
  variables?: Record<string, string>
  attachments?: Array<{
    filename: string
    content: string
    contentType: string
  }>
}

export interface NotificationResult {
  success: boolean
  messageId?: string
  error?: string
}

class NotificationService {
  private config: NotificationConfig

  constructor(config: NotificationConfig) {
    this.config = config
  }

  /**
   * Отправляет SMS уведомление
   */
  async sendSMS(notification: SMSNotification): Promise<NotificationResult> {
    try {
      const response = await axios.post(`${this.config.smsApiUrl}/send`, {
        to: notification.to,
        message: notification.message,
        template: notification.template,
        variables: notification.variables,
        api_key: this.config.smsApiKey
      })

      return {
        success: true,
        messageId: response.data.message_id
      }
    } catch (error) {
      console.error('SMS sending failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      }
    }
  }

  /**
   * Отправляет Email уведомление
   */
  async sendEmail(notification: EmailNotification): Promise<NotificationResult> {
    try {
      const response = await axios.post(`${this.config.emailApiUrl}/send`, {
        to: notification.to,
        subject: notification.subject,
        template: notification.template,
        variables: notification.variables,
        attachments: notification.attachments,
        from: {
          email: this.config.fromEmail,
          name: this.config.fromName
        },
        api_key: this.config.emailApiKey
      })

      return {
        success: true,
        messageId: response.data.message_id
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      }
    }
  }

  /**
   * Отправляет уведомление о создании бронирования
   */
  async sendBookingCreatedNotification(bookingData: {
    bookingId: string
    customerName: string
    customerPhone: string
    customerEmail: string
    zoneName: string
    tableName: string
    bookingDate: string
    startTime: string
    endTime: string
    totalAmount: number
    deposit: number
  }): Promise<{ sms: NotificationResult; email: NotificationResult }> {
    const smsMessage = `Ваше бронирование #${bookingData.bookingId} подтверждено! Зона: ${bookingData.zoneName}, Стол: ${bookingData.tableName}, Дата: ${bookingData.bookingDate}, Время: ${bookingData.startTime}-${bookingData.endTime}. Сумма: ${bookingData.totalAmount}₽`
    
    const emailSubject = `Подтверждение бронирования #${bookingData.bookingId}`
    const emailTemplate = 'booking-confirmation'

    const smsResult = await this.sendSMS({
      to: bookingData.customerPhone,
      message: smsMessage
    })

    const emailResult = await this.sendEmail({
      to: bookingData.customerEmail,
      subject: emailSubject,
      template: emailTemplate,
      variables: {
        customerName: bookingData.customerName,
        bookingId: bookingData.bookingId,
        zoneName: bookingData.zoneName,
        tableName: bookingData.tableName,
        bookingDate: bookingData.bookingDate,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
        totalAmount: bookingData.totalAmount.toString(),
        deposit: bookingData.deposit.toString()
      }
    })

    return { sms: smsResult, email: emailResult }
  }

  /**
   * Отправляет уведомление об отмене бронирования
   */
  async sendBookingCancelledNotification(bookingData: {
    bookingId: string
    customerName: string
    customerPhone: string
    customerEmail: string
    zoneName: string
    tableName: string
    bookingDate: string
    startTime: string
    endTime: string
    refundAmount?: number
  }): Promise<{ sms: NotificationResult; email: NotificationResult }> {
    const smsMessage = `Ваше бронирование #${bookingData.bookingId} отменено. Зона: ${bookingData.zoneName}, Стол: ${bookingData.tableName}, Дата: ${bookingData.bookingDate}. ${bookingData.refundAmount ? `Возврат: ${bookingData.refundAmount}₽` : ''}`
    
    const emailSubject = `Отмена бронирования #${bookingData.bookingId}`
    const emailTemplate = 'booking-cancellation'

    const smsResult = await this.sendSMS({
      to: bookingData.customerPhone,
      message: smsMessage
    })

    const emailResult = await this.sendEmail({
      to: bookingData.customerEmail,
      subject: emailSubject,
      template: emailTemplate,
      variables: {
        customerName: bookingData.customerName,
        bookingId: bookingData.bookingId,
        zoneName: bookingData.zoneName,
        tableName: bookingData.tableName,
        bookingDate: bookingData.bookingDate,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
        refundAmount: bookingData.refundAmount?.toString() || '0'
      }
    })

    return { sms: smsResult, email: emailResult }
  }

  /**
   * Отправляет напоминание о бронировании
   */
  async sendBookingReminderNotification(bookingData: {
    bookingId: string
    customerName: string
    customerPhone: string
    customerEmail: string
    zoneName: string
    tableName: string
    bookingDate: string
    startTime: string
    endTime: string
    reminderTime: string // '1hour' | '1day' | '2hours'
  }): Promise<{ sms: NotificationResult; email: NotificationResult }> {
    const timeText = {
      '1hour': 'через 1 час',
      '2hours': 'через 2 часа',
      '1day': 'завтра'
    }[bookingData.reminderTime] || 'скоро'

    const smsMessage = `Напоминание: Ваше бронирование #${bookingData.bookingId} ${timeText}. Зона: ${bookingData.zoneName}, Стол: ${bookingData.tableName}, Дата: ${bookingData.bookingDate}, Время: ${bookingData.startTime}-${bookingData.endTime}`
    
    const emailSubject = `Напоминание о бронировании #${bookingData.bookingId}`
    const emailTemplate = 'booking-reminder'

    const smsResult = await this.sendSMS({
      to: bookingData.customerPhone,
      message: smsMessage
    })

    const emailResult = await this.sendEmail({
      to: bookingData.customerEmail,
      subject: emailSubject,
      template: emailTemplate,
      variables: {
        customerName: bookingData.customerName,
        bookingId: bookingData.bookingId,
        zoneName: bookingData.zoneName,
        tableName: bookingData.tableName,
        bookingDate: bookingData.bookingDate,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
        reminderTime: timeText
      }
    })

    return { sms: smsResult, email: emailResult }
  }

  /**
   * Отправляет уведомление о создании мероприятия
   */
  async sendEventCreatedNotification(eventData: {
    eventId: string
    customerName: string
    customerPhone: string
    customerEmail: string
    eventName: string
    eventDate: string
    startTime: string
    endTime: string
    totalAmount: number
    ticketCount: number
  }): Promise<{ sms: NotificationResult; email: NotificationResult }> {
    const smsMessage = `Ваш билет на мероприятие "${eventData.eventName}" подтвержден! Дата: ${eventData.eventDate}, Время: ${eventData.startTime}-${eventData.endTime}. Количество билетов: ${eventData.ticketCount}, Сумма: ${eventData.totalAmount}₽`
    
    const emailSubject = `Подтверждение билета на мероприятие "${eventData.eventName}"`
    const emailTemplate = 'event-confirmation'

    const smsResult = await this.sendSMS({
      to: eventData.customerPhone,
      message: smsMessage
    })

    const emailResult = await this.sendEmail({
      to: eventData.customerEmail,
      subject: emailSubject,
      template: emailTemplate,
      variables: {
        customerName: eventData.customerName,
        eventId: eventData.eventId,
        eventName: eventData.eventName,
        eventDate: eventData.eventDate,
        startTime: eventData.startTime,
        endTime: eventData.endTime,
        totalAmount: eventData.totalAmount.toString(),
        ticketCount: eventData.ticketCount.toString()
      }
    })

    return { sms: smsResult, email: emailResult }
  }

  /**
   * Отправляет уведомление о создании банкета
   */
  async sendBanquetCreatedNotification(banquetData: {
    banquetId: string
    customerName: string
    customerPhone: string
    customerEmail: string
    banquetName: string
    banquetDate: string
    startTime: string
    endTime: string
    totalAmount: number
    guestCount: number
  }): Promise<{ sms: NotificationResult; email: NotificationResult }> {
    const smsMessage = `Ваш банкет "${banquetData.banquetName}" подтвержден! Дата: ${banquetData.banquetDate}, Время: ${banquetData.startTime}-${banquetData.endTime}. Количество гостей: ${banquetData.guestCount}, Сумма: ${banquetData.totalAmount}₽`
    
    const emailSubject = `Подтверждение банкета "${banquetData.banquetName}"`
    const emailTemplate = 'banquet-confirmation'

    const smsResult = await this.sendSMS({
      to: banquetData.customerPhone,
      message: smsMessage
    })

    const emailResult = await this.sendEmail({
      to: banquetData.customerEmail,
      subject: emailSubject,
      template: emailTemplate,
      variables: {
        customerName: banquetData.customerName,
        banquetId: banquetData.banquetId,
        banquetName: banquetData.banquetName,
        banquetDate: banquetData.banquetDate,
        startTime: banquetData.startTime,
        endTime: banquetData.endTime,
        totalAmount: banquetData.totalAmount.toString(),
        guestCount: banquetData.guestCount.toString()
      }
    })

    return { sms: smsResult, email: emailResult }
  }

  /**
   * Отправляет уведомление администратору о новом бронировании
   */
  async sendAdminBookingNotification(bookingData: {
    bookingId: string
    customerName: string
    customerPhone: string
    customerEmail: string
    zoneName: string
    tableName: string
    bookingDate: string
    startTime: string
    endTime: string
    totalAmount: number
    deposit: number
  }): Promise<NotificationResult> {
    const subject = `Новое бронирование #${bookingData.bookingId}`
    const template = 'admin-booking-notification'

    return this.sendEmail({
      to: this.config.fromEmail, // Админ получает на основной email
      subject: subject,
      template: template,
      variables: {
        bookingId: bookingData.bookingId,
        customerName: bookingData.customerName,
        customerPhone: bookingData.customerPhone,
        customerEmail: bookingData.customerEmail,
        zoneName: bookingData.zoneName,
        tableName: bookingData.tableName,
        bookingDate: bookingData.bookingDate,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
        totalAmount: bookingData.totalAmount.toString(),
        deposit: bookingData.deposit.toString()
      }
    })
  }
}

// Создаем экземпляр сервиса с конфигурацией из переменных окружения
const notificationConfig: NotificationConfig = {
  smsApiUrl: import.meta.env.VITE_SMS_API_URL || 'https://api.sms.ru',
  smsApiKey: import.meta.env.VITE_SMS_API_KEY || '',
  emailApiUrl: import.meta.env.VITE_EMAIL_API_URL || 'https://api.emailjs.com',
  emailApiKey: import.meta.env.VITE_EMAIL_API_KEY || '',
  fromEmail: import.meta.env.VITE_FROM_EMAIL || 'noreply@frantsuz-club.ru',
  fromName: import.meta.env.VITE_FROM_NAME || 'Frantsuz Club'
}

export const notificationService = new NotificationService(notificationConfig)
export default notificationService
