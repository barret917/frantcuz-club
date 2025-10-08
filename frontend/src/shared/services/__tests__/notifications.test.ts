import { vi } from 'vitest'
import axios from 'axios'
import { notificationService, NotificationConfig } from '../notifications'

// Mock axios
vi.mock('axios')
const mockedAxios = axios as any

describe('NotificationService', () => {
  const mockConfig: NotificationConfig = {
    smsApiUrl: 'https://api.sms.ru',
    smsApiKey: 'test-sms-key',
    emailApiUrl: 'https://api.emailjs.com',
    emailApiKey: 'test-email-key',
    fromEmail: 'test@example.com',
    fromName: 'Test Service'
  }

  let notificationService: any

  beforeEach(() => {
    vi.clearAllMocks()
    notificationService = notificationService
  })

  describe('sendSMS', () => {
    it('should send SMS successfully', async () => {
      const mockResponse = {
        data: {
          message_id: 'sms-123'
        }
      }

      mockedAxios.post.mockResolvedValue(mockResponse)

      const result = await notificationService.sendSMS({
        to: '+1234567890',
        message: 'Test SMS message'
      })

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://api.sms.ru/send',
        {
          to: '+1234567890',
          message: 'Test SMS message',
          template: undefined,
          variables: undefined,
          api_key: 'test-sms-key'
        }
      )
      expect(result).toEqual({
        success: true,
        messageId: 'sms-123'
      })
    })

    it('should handle SMS sending error', async () => {
      mockedAxios.post.mockRejectedValue(new Error('SMS API error'))

      const result = await notificationService.sendSMS({
        to: '+1234567890',
        message: 'Test SMS message'
      })

      expect(result).toEqual({
        success: false,
        error: 'SMS API error'
      })
    })
  })

  describe('sendEmail', () => {
    it('should send email successfully', async () => {
      const mockResponse = {
        data: {
          message_id: 'email-123'
        }
      }

      mockedAxios.post.mockResolvedValue(mockResponse)

      const result = await notificationService.sendEmail({
        to: 'test@example.com',
        subject: 'Test Subject',
        template: 'test-template'
      })

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://api.emailjs.com/send',
        {
          to: 'test@example.com',
          subject: 'Test Subject',
          template: 'test-template',
          variables: undefined,
          attachments: undefined,
          from: {
            email: 'test@example.com',
            name: 'Test Service'
          },
          api_key: 'test-email-key'
        }
      )
      expect(result).toEqual({
        success: true,
        messageId: 'email-123'
      })
    })

    it('should handle email sending error', async () => {
      mockedAxios.post.mockRejectedValue(new Error('Email API error'))

      const result = await notificationService.sendEmail({
        to: 'test@example.com',
        subject: 'Test Subject',
        template: 'test-template'
      })

      expect(result).toEqual({
        success: false,
        error: 'Email API error'
      })
    })
  })

  describe('sendBookingCreatedNotification', () => {
    it('should send booking created notifications', async () => {
      const mockSmsResponse = { data: { message_id: 'sms-123' } }
      const mockEmailResponse = { data: { message_id: 'email-123' } }

      mockedAxios.post
        .mockResolvedValueOnce(mockSmsResponse)
        .mockResolvedValueOnce(mockEmailResponse)

      const bookingData = {
        bookingId: 'booking-123',
        customerName: 'John Doe',
        customerPhone: '+1234567890',
        customerEmail: 'john@example.com',
        zoneName: 'Бильярд',
        tableName: 'Стол 1',
        bookingDate: '2024-01-01',
        startTime: '18:00',
        endTime: '20:00',
        totalAmount: 1000,
        deposit: 200
      }

      const result = await notificationService.sendBookingCreatedNotification(bookingData)

      expect(mockedAxios.post).toHaveBeenCalledTimes(2)
      expect(result.sms.success).toBe(true)
      expect(result.email.success).toBe(true)
    })
  })

  describe('sendBookingCancelledNotification', () => {
    it('should send booking cancelled notifications', async () => {
      const mockSmsResponse = { data: { message_id: 'sms-456' } }
      const mockEmailResponse = { data: { message_id: 'email-456' } }

      mockedAxios.post
        .mockResolvedValueOnce(mockSmsResponse)
        .mockResolvedValueOnce(mockEmailResponse)

      const bookingData = {
        bookingId: 'booking-123',
        customerName: 'John Doe',
        customerPhone: '+1234567890',
        customerEmail: 'john@example.com',
        zoneName: 'Бильярд',
        tableName: 'Стол 1',
        bookingDate: '2024-01-01',
        startTime: '18:00',
        endTime: '20:00',
        refundAmount: 1200
      }

      const result = await notificationService.sendBookingCancelledNotification(bookingData)

      expect(mockedAxios.post).toHaveBeenCalledTimes(2)
      expect(result.sms.success).toBe(true)
      expect(result.email.success).toBe(true)
    })
  })

  describe('sendBookingReminderNotification', () => {
    it('should send booking reminder notifications', async () => {
      const mockSmsResponse = { data: { message_id: 'sms-789' } }
      const mockEmailResponse = { data: { message_id: 'email-789' } }

      mockedAxios.post
        .mockResolvedValueOnce(mockSmsResponse)
        .mockResolvedValueOnce(mockEmailResponse)

      const bookingData = {
        bookingId: 'booking-123',
        customerName: 'John Doe',
        customerPhone: '+1234567890',
        customerEmail: 'john@example.com',
        zoneName: 'Бильярд',
        tableName: 'Стол 1',
        bookingDate: '2024-01-01',
        startTime: '18:00',
        endTime: '20:00',
        reminderTime: '1hour'
      }

      const result = await notificationService.sendBookingReminderNotification(bookingData)

      expect(mockedAxios.post).toHaveBeenCalledTimes(2)
      expect(result.sms.success).toBe(true)
      expect(result.email.success).toBe(true)
    })
  })

  describe('sendEventCreatedNotification', () => {
    it('should send event created notifications', async () => {
      const mockSmsResponse = { data: { message_id: 'sms-event-123' } }
      const mockEmailResponse = { data: { message_id: 'email-event-123' } }

      mockedAxios.post
        .mockResolvedValueOnce(mockSmsResponse)
        .mockResolvedValueOnce(mockEmailResponse)

      const eventData = {
        eventId: 'event-123',
        customerName: 'Jane Doe',
        customerPhone: '+0987654321',
        customerEmail: 'jane@example.com',
        eventName: 'Концерт',
        eventDate: '2024-01-15',
        startTime: '19:00',
        endTime: '22:00',
        totalAmount: 2000,
        ticketCount: 2
      }

      const result = await notificationService.sendEventCreatedNotification(eventData)

      expect(mockedAxios.post).toHaveBeenCalledTimes(2)
      expect(result.sms.success).toBe(true)
      expect(result.email.success).toBe(true)
    })
  })

  describe('sendBanquetCreatedNotification', () => {
    it('should send banquet created notifications', async () => {
      const mockSmsResponse = { data: { message_id: 'sms-banquet-123' } }
      const mockEmailResponse = { data: { message_id: 'email-banquet-123' } }

      mockedAxios.post
        .mockResolvedValueOnce(mockSmsResponse)
        .mockResolvedValueOnce(mockEmailResponse)

      const banquetData = {
        banquetId: 'banquet-123',
        customerName: 'Bob Smith',
        customerPhone: '+1122334455',
        customerEmail: 'bob@example.com',
        banquetName: 'День рождения',
        banquetDate: '2024-01-20',
        startTime: '18:00',
        endTime: '24:00',
        totalAmount: 5000,
        guestCount: 20
      }

      const result = await notificationService.sendBanquetCreatedNotification(banquetData)

      expect(mockedAxios.post).toHaveBeenCalledTimes(2)
      expect(result.sms.success).toBe(true)
      expect(result.email.success).toBe(true)
    })
  })

  describe('sendAdminBookingNotification', () => {
    it('should send admin booking notification', async () => {
      const mockResponse = { data: { message_id: 'admin-123' } }
      mockedAxios.post.mockResolvedValue(mockResponse)

      const bookingData = {
        bookingId: 'booking-123',
        customerName: 'John Doe',
        customerPhone: '+1234567890',
        customerEmail: 'john@example.com',
        zoneName: 'Бильярд',
        tableName: 'Стол 1',
        bookingDate: '2024-01-01',
        startTime: '18:00',
        endTime: '20:00',
        totalAmount: 1000,
        deposit: 200
      }

      const result = await notificationService.sendAdminBookingNotification(bookingData)

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://api.emailjs.com/send',
        expect.objectContaining({
          to: 'test@example.com',
          subject: 'Новое бронирование #booking-123',
          template: 'admin-booking-notification'
        })
      )
      expect(result.success).toBe(true)
    })
  })
})
