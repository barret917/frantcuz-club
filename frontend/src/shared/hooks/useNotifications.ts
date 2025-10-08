import { useState, useCallback } from 'react'
import { notificationService, NotificationResult } from '@/shared/services/notifications'
import { NotificationItem } from '@/shared/ui/NotificationManager'

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addNotification = useCallback((
    type: 'sms' | 'email',
    recipient: string,
    message: string,
    result: NotificationResult,
    bookingId?: string,
    eventId?: string,
    banquetId?: string
  ) => {
    const notification: NotificationItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      recipient,
      message,
      success: result.success,
      error: result.error,
      timestamp: new Date(),
      bookingId,
      eventId,
      banquetId
    }

    setNotifications(prev => [notification, ...prev])
  }, [])

  const sendBookingCreatedNotification = useCallback(async (bookingData: {
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
  }) => {
    setIsLoading(true)
    try {
      const { sms, email } = await notificationService.sendBookingCreatedNotification(bookingData)
      
      // Добавляем SMS уведомление
      addNotification(
        'sms',
        bookingData.customerPhone,
        `Бронирование #${bookingData.bookingId} подтверждено!`,
        sms,
        bookingData.bookingId
      )

      // Добавляем Email уведомление
      addNotification(
        'email',
        bookingData.customerEmail,
        `Подтверждение бронирования #${bookingData.bookingId}`,
        email,
        bookingData.bookingId
      )

      // Отправляем уведомление администратору
      const adminResult = await notificationService.sendAdminBookingNotification(bookingData)
      addNotification(
        'email',
        'admin@frantsuz-club.ru',
        `Новое бронирование #${bookingData.bookingId}`,
        adminResult,
        bookingData.bookingId
      )

      return { sms, email, admin: adminResult }
    } catch (error) {
      console.error('Failed to send booking notifications:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [addNotification])

  const sendBookingCancelledNotification = useCallback(async (bookingData: {
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
  }) => {
    setIsLoading(true)
    try {
      const { sms, email } = await notificationService.sendBookingCancelledNotification(bookingData)
      
      addNotification(
        'sms',
        bookingData.customerPhone,
        `Бронирование #${bookingData.bookingId} отменено`,
        sms,
        bookingData.bookingId
      )

      addNotification(
        'email',
        bookingData.customerEmail,
        `Отмена бронирования #${bookingData.bookingId}`,
        email,
        bookingData.bookingId
      )

      return { sms, email }
    } catch (error) {
      console.error('Failed to send cancellation notifications:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [addNotification])

  const sendBookingReminderNotification = useCallback(async (bookingData: {
    bookingId: string
    customerName: string
    customerPhone: string
    customerEmail: string
    zoneName: string
    tableName: string
    bookingDate: string
    startTime: string
    endTime: string
    reminderTime: string
  }) => {
    setIsLoading(true)
    try {
      const { sms, email } = await notificationService.sendBookingReminderNotification(bookingData)
      
      addNotification(
        'sms',
        bookingData.customerPhone,
        `Напоминание о бронировании #${bookingData.bookingId}`,
        sms,
        bookingData.bookingId
      )

      addNotification(
        'email',
        bookingData.customerEmail,
        `Напоминание о бронировании #${bookingData.bookingId}`,
        email,
        bookingData.bookingId
      )

      return { sms, email }
    } catch (error) {
      console.error('Failed to send reminder notifications:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [addNotification])

  const sendEventCreatedNotification = useCallback(async (eventData: {
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
  }) => {
    setIsLoading(true)
    try {
      const { sms, email } = await notificationService.sendEventCreatedNotification(eventData)
      
      addNotification(
        'sms',
        eventData.customerPhone,
        `Билет на "${eventData.eventName}" подтвержден!`,
        sms,
        undefined,
        eventData.eventId
      )

      addNotification(
        'email',
        eventData.customerEmail,
        `Подтверждение билета на "${eventData.eventName}"`,
        email,
        undefined,
        eventData.eventId
      )

      return { sms, email }
    } catch (error) {
      console.error('Failed to send event notifications:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [addNotification])

  const sendBanquetCreatedNotification = useCallback(async (banquetData: {
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
  }) => {
    setIsLoading(true)
    try {
      const { sms, email } = await notificationService.sendBanquetCreatedNotification(banquetData)
      
      addNotification(
        'sms',
        banquetData.customerPhone,
        `Банкет "${banquetData.banquetName}" подтвержден!`,
        sms,
        undefined,
        undefined,
        banquetData.banquetId
      )

      addNotification(
        'email',
        banquetData.customerEmail,
        `Подтверждение банкета "${banquetData.banquetName}"`,
        email,
        undefined,
        undefined,
        banquetData.banquetId
      )

      return { sms, email }
    } catch (error) {
      console.error('Failed to send banquet notifications:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [addNotification])

  const sendTestNotification = useCallback(async (type: 'sms' | 'email', recipient: string) => {
    setIsLoading(true)
    try {
      let result: NotificationResult
      
      if (type === 'sms') {
        result = await notificationService.sendSMS({
          to: recipient,
          message: 'Тестовое SMS сообщение от Frantsuz Club'
        })
      } else {
        result = await notificationService.sendEmail({
          to: recipient,
          subject: 'Тестовое email сообщение',
          template: 'test-notification',
          variables: {
            recipient: recipient
          }
        })
      }

      addNotification(
        type,
        recipient,
        type === 'sms' ? 'Тестовое SMS сообщение' : 'Тестовое email сообщение',
        result
      )

      return result
    } catch (error) {
      console.error('Failed to send test notification:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [addNotification])

  const retryNotification = useCallback(async (notificationId: string) => {
    const notification = notifications.find(n => n.id === notificationId)
    if (!notification) return

    setIsLoading(true)
    try {
      let result: NotificationResult
      
      if (notification.type === 'sms') {
        result = await notificationService.sendSMS({
          to: notification.recipient,
          message: notification.message
        })
      } else {
        result = await notificationService.sendEmail({
          to: notification.recipient,
          subject: notification.message,
          template: 'retry-notification',
          variables: {
            message: notification.message
          }
        })
      }

      // Обновляем уведомление
      setNotifications(prev => 
        prev.map(n => 
          n.id === notificationId 
            ? { ...n, success: result.success, error: result.error }
            : n
        )
      )

      return result
    } catch (error) {
      console.error('Failed to retry notification:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [notifications])

  const clearNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  return {
    notifications,
    isLoading,
    sendBookingCreatedNotification,
    sendBookingCancelledNotification,
    sendBookingReminderNotification,
    sendEventCreatedNotification,
    sendBanquetCreatedNotification,
    sendTestNotification,
    retryNotification,
    clearNotifications
  }
}

export default useNotifications
