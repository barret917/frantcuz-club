import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useNotifications } from '../useNotifications'
import { notificationService } from '@/shared/services/notifications'

// Mock notification service
vi.mock('@/shared/services/notifications', () => ({
  notificationService: {
    sendBookingCreatedNotification: vi.fn(),
    sendBookingCancelledNotification: vi.fn(),
    sendBookingReminderNotification: vi.fn(),
    sendEventCreatedNotification: vi.fn(),
    sendBanquetCreatedNotification: vi.fn(),
    sendAdminBookingNotification: vi.fn(),
    sendSMS: vi.fn(),
    sendEmail: vi.fn(),
  }
}))

const mockNotificationService = notificationService as any

describe('useNotifications', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with empty notifications', () => {
    const { result } = renderHook(() => useNotifications())
    
    expect(result.current.notifications).toEqual([])
    expect(result.current.isLoading).toBe(false)
  })

  it('should send booking created notification', async () => {
    const mockSmsResult = { success: true, messageId: 'sms-123' }
    const mockEmailResult = { success: true, messageId: 'email-123' }
    const mockAdminResult = { success: true, messageId: 'admin-123' }

    mockNotificationService.sendBookingCreatedNotification.mockResolvedValue({
      sms: mockSmsResult,
      email: mockEmailResult
    })
    mockNotificationService.sendAdminBookingNotification.mockResolvedValue(mockAdminResult)

    const { result } = renderHook(() => useNotifications())

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

    await act(async () => {
      await result.current.sendBookingCreatedNotification(bookingData)
    })

    expect(mockNotificationService.sendBookingCreatedNotification).toHaveBeenCalledWith(bookingData)
    expect(mockNotificationService.sendAdminBookingNotification).toHaveBeenCalledWith(bookingData)
    expect(result.current.notifications).toHaveLength(3) // SMS, Email, Admin
  })

  it('should send booking cancelled notification', async () => {
    const mockSmsResult = { success: true, messageId: 'sms-456' }
    const mockEmailResult = { success: true, messageId: 'email-456' }

    mockNotificationService.sendBookingCancelledNotification.mockResolvedValue({
      sms: mockSmsResult,
      email: mockEmailResult
    })

    const { result } = renderHook(() => useNotifications())

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

    await act(async () => {
      await result.current.sendBookingCancelledNotification(bookingData)
    })

    expect(mockNotificationService.sendBookingCancelledNotification).toHaveBeenCalledWith(bookingData)
    expect(result.current.notifications).toHaveLength(2) // SMS, Email
  })

  it('should send booking reminder notification', async () => {
    const mockSmsResult = { success: true, messageId: 'sms-789' }
    const mockEmailResult = { success: true, messageId: 'email-789' }

    mockNotificationService.sendBookingReminderNotification.mockResolvedValue({
      sms: mockSmsResult,
      email: mockEmailResult
    })

    const { result } = renderHook(() => useNotifications())

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

    await act(async () => {
      await result.current.sendBookingReminderNotification(bookingData)
    })

    expect(mockNotificationService.sendBookingReminderNotification).toHaveBeenCalledWith(bookingData)
    expect(result.current.notifications).toHaveLength(2) // SMS, Email
  })

  it('should send event created notification', async () => {
    const mockSmsResult = { success: true, messageId: 'sms-event-123' }
    const mockEmailResult = { success: true, messageId: 'email-event-123' }

    mockNotificationService.sendEventCreatedNotification.mockResolvedValue({
      sms: mockSmsResult,
      email: mockEmailResult
    })

    const { result } = renderHook(() => useNotifications())

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

    await act(async () => {
      await result.current.sendEventCreatedNotification(eventData)
    })

    expect(mockNotificationService.sendEventCreatedNotification).toHaveBeenCalledWith(eventData)
    expect(result.current.notifications).toHaveLength(2) // SMS, Email
  })

  it('should send banquet created notification', async () => {
    const mockSmsResult = { success: true, messageId: 'sms-banquet-123' }
    const mockEmailResult = { success: true, messageId: 'email-banquet-123' }

    mockNotificationService.sendBanquetCreatedNotification.mockResolvedValue({
      sms: mockSmsResult,
      email: mockEmailResult
    })

    const { result } = renderHook(() => useNotifications())

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

    await act(async () => {
      await result.current.sendBanquetCreatedNotification(banquetData)
    })

    expect(mockNotificationService.sendBanquetCreatedNotification).toHaveBeenCalledWith(banquetData)
    expect(result.current.notifications).toHaveLength(2) // SMS, Email
  })

  it('should send test notification', async () => {
    const mockResult = { success: true, messageId: 'test-123' }
    mockNotificationService.sendSMS.mockResolvedValue(mockResult)

    const { result } = renderHook(() => useNotifications())

    await act(async () => {
      await result.current.sendTestNotification('sms', '+1234567890')
    })

    expect(mockNotificationService.sendSMS).toHaveBeenCalledWith({
      to: '+1234567890',
      message: 'Тестовое SMS сообщение от Frantsuz Club'
    })
    expect(result.current.notifications).toHaveLength(1)
  })

  it('should retry failed notification', async () => {
    const mockResult = { success: true, messageId: 'retry-123' }
    mockNotificationService.sendSMS.mockResolvedValue(mockResult)

    const { result } = renderHook(() => useNotifications())

    // Сначала добавляем неудачное уведомление
    await act(async () => {
      await result.current.sendTestNotification('sms', '+1234567890')
    })

    const notification = result.current.notifications[0]
    notification.success = false
    notification.error = 'Test error'

    await act(async () => {
      await result.current.retryNotification(notification.id)
    })

    expect(mockNotificationService.sendSMS).toHaveBeenCalledTimes(2)
  })

  it('should clear notifications', () => {
    const { result } = renderHook(() => useNotifications())

    act(() => {
      result.current.clearNotifications()
    })

    expect(result.current.notifications).toEqual([])
  })

  it('should handle notification errors', async () => {
    mockNotificationService.sendBookingCreatedNotification.mockRejectedValue(
      new Error('Notification failed')
    )

    const { result } = renderHook(() => useNotifications())

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

    await expect(
      act(async () => {
        await result.current.sendBookingCreatedNotification(bookingData)
      })
    ).rejects.toThrow('Notification failed')
  })
})
