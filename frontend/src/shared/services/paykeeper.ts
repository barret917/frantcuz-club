import axios from 'axios'

export interface PayKeeperPaymentRequest {
  orderid: string
  sum: number
  clientid: string
  client_name: string
  client_email: string
  client_phone: string
  service_name: string
  payment_type: 'booking' | 'event' | 'banquet'
  success_url: string
  failure_url: string
  notify_url: string
}

export interface PayKeeperPaymentResponse {
  id: string
  orderid: string
  sum: number
  status: 'pending' | 'success' | 'failed' | 'cancelled'
  payment_url: string
  created_at: string
  expires_at: string
}

export interface PayKeeperConfig {
  baseUrl: string
  merchantId: string
  secretKey: string
  successUrl: string
  failureUrl: string
  notifyUrl: string
}

class PayKeeperService {
  private config: PayKeeperConfig

  constructor(config: PayKeeperConfig) {
    this.config = config
  }

  /**
   * Создает платеж в PayKeeper
   */
  async createPayment(request: PayKeeperPaymentRequest): Promise<PayKeeperPaymentResponse> {
    try {
      const response = await axios.post(`${this.config.baseUrl}/create`, {
        ...request,
        merchant_id: this.config.merchantId,
        success_url: this.config.successUrl,
        failure_url: this.config.failureUrl,
        notify_url: this.config.notifyUrl,
      })

      return response.data
    } catch (error) {
      console.error('PayKeeper payment creation failed:', error)
      throw new Error('Не удалось создать платеж')
    }
  }

  /**
   * Проверяет статус платежа
   */
  async checkPaymentStatus(paymentId: string): Promise<PayKeeperPaymentResponse> {
    try {
      const response = await axios.get(`${this.config.baseUrl}/status/${paymentId}`)
      return response.data
    } catch (error) {
      console.error('PayKeeper status check failed:', error)
      throw new Error('Не удалось проверить статус платежа')
    }
  }

  /**
   * Обрабатывает уведомление от PayKeeper
   */
  async handleWebhook(data: any, signature: string): Promise<boolean> {
    try {
      // Проверяем подпись
      const expectedSignature = this.generateSignature(data)
      if (signature !== expectedSignature) {
        console.error('Invalid PayKeeper signature')
        return false
      }

      // Обрабатываем уведомление
      console.log('PayKeeper webhook received:', data)
      return true
    } catch (error) {
      console.error('PayKeeper webhook processing failed:', error)
      return false
    }
  }

  /**
   * Генерирует подпись для запроса
   */
  private generateSignature(data: any): string {
    const crypto = require('crypto')
    const sortedData = Object.keys(data)
      .sort()
      .map(key => `${key}=${data[key]}`)
      .join('&')
    
    return crypto
      .createHmac('sha256', this.config.secretKey)
      .update(sortedData)
      .digest('hex')
  }

  /**
   * Создает платеж для бронирования
   */
  async createBookingPayment(bookingId: string, amount: number, customerInfo: {
    name: string
    email: string
    phone: string
  }): Promise<PayKeeperPaymentResponse> {
    const orderId = `booking_${bookingId}_${Date.now()}`
    
    return this.createPayment({
      orderid: orderId,
      sum: amount,
      clientid: customerInfo.email,
      client_name: customerInfo.name,
      client_email: customerInfo.email,
      client_phone: customerInfo.phone,
      service_name: 'Бронирование стола',
      payment_type: 'booking',
      success_url: `${this.config.successUrl}?booking_id=${bookingId}`,
      failure_url: `${this.config.failureUrl}?booking_id=${bookingId}`,
      notify_url: this.config.notifyUrl,
    })
  }

  /**
   * Создает платеж для мероприятия
   */
  async createEventPayment(eventId: string, amount: number, customerInfo: {
    name: string
    email: string
    phone: string
  }): Promise<PayKeeperPaymentResponse> {
    const orderId = `event_${eventId}_${Date.now()}`
    
    return this.createPayment({
      orderid: orderId,
      sum: amount,
      clientid: customerInfo.email,
      client_name: customerInfo.name,
      client_email: customerInfo.email,
      client_phone: customerInfo.phone,
      service_name: 'Билет на мероприятие',
      payment_type: 'event',
      success_url: `${this.config.successUrl}?event_id=${eventId}`,
      failure_url: `${this.config.failureUrl}?event_id=${eventId}`,
      notify_url: this.config.notifyUrl,
    })
  }

  /**
   * Создает платеж для банкета
   */
  async createBanquetPayment(banquetId: string, amount: number, customerInfo: {
    name: string
    email: string
    phone: string
  }): Promise<PayKeeperPaymentResponse> {
    const orderId = `banquet_${banquetId}_${Date.now()}`
    
    return this.createPayment({
      orderid: orderId,
      sum: amount,
      clientid: customerInfo.email,
      client_name: customerInfo.name,
      client_email: customerInfo.email,
      client_phone: customerInfo.phone,
      service_name: 'Бронирование банкета',
      payment_type: 'banquet',
      success_url: `${this.config.successUrl}?banquet_id=${banquetId}`,
      failure_url: `${this.config.failureUrl}?banquet_id=${banquetId}`,
      notify_url: this.config.notifyUrl,
    })
  }
}

// Создаем экземпляр сервиса с конфигурацией из переменных окружения
const payKeeperConfig: PayKeeperConfig = {
  baseUrl: import.meta.env.VITE_PAYKEEPER_URL || 'https://demo.paykeeper.ru',
  merchantId: import.meta.env.VITE_PAYKEEPER_MERCHANT_ID || '',
  secretKey: import.meta.env.VITE_PAYKEEPER_SECRET_KEY || '',
  successUrl: `${window.location.origin}/payment/success`,
  failureUrl: `${window.location.origin}/payment/failure`,
  notifyUrl: `${!import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') ? '/api' : import.meta.env.VITE_API_URL}/payment/webhook`,
}

export const payKeeperService = new PayKeeperService(payKeeperConfig)
export default payKeeperService
