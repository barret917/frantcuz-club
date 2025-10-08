import React, { useEffect } from 'react'
import { useNotifications } from '@/shared/hooks/useNotifications'

export interface BookingNotificationHandlerProps {
  bookingData?: {
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
  }
  paymentSuccess: boolean
  onNotificationSent?: (success: boolean) => void
}

export const BookingNotificationHandler: React.FC<BookingNotificationHandlerProps> = ({
  bookingData,
  paymentSuccess,
  onNotificationSent
}) => {
  const { sendBookingCreatedNotification, isLoading } = useNotifications()

  useEffect(() => {
    if (paymentSuccess && bookingData) {
      const sendNotifications = async () => {
        try {
          await sendBookingCreatedNotification(bookingData)
          onNotificationSent?.(true)
        } catch (error) {
          console.error('Failed to send booking notifications:', error)
          onNotificationSent?.(false)
        }
      }

      sendNotifications()
    }
  }, [paymentSuccess, bookingData, sendBookingCreatedNotification, onNotificationSent])

  // Компонент не рендерит ничего видимого
  return null
}

export default BookingNotificationHandler
