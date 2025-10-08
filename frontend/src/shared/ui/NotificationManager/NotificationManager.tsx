import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { notificationService, NotificationResult } from '@/shared/services/notifications'

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;
`

const NotificationCard = styled.div<{ success: boolean }>`
  background: ${props => props.success ? '#f0fdf4' : '#fef2f2'};
  border: 1px solid ${props => props.success ? '#bbf7d0' : '#fecaca'};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const NotificationType = styled.span<{ success: boolean }>`
  font-weight: 600;
  color: ${props => props.success ? '#16a34a' : '#dc2626'};
`

const NotificationTime = styled.span`
  font-size: 0.9rem;
  color: #6b7280;
`

const NotificationMessage = styled.div`
  color: #374151;
  font-size: 0.9rem;
`

const NotificationError = styled.div`
  color: #dc2626;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  
  ${props => props.variant === 'primary' ? `
    background: #3b82f6;
    color: white;
    
    &:hover:not(:disabled) {
      background: #2563eb;
    }
  ` : `
    background: #f3f4f6;
    color: #374151;
    
    &:hover:not(:disabled) {
      background: #e5e7eb;
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const EmptyState = styled.div`
  text-align: center;
  color: #6b7280;
  padding: 2rem;
`

export interface NotificationItem {
  id: string
  type: 'sms' | 'email'
  recipient: string
  message: string
  success: boolean
  error?: string
  timestamp: Date
  bookingId?: string
  eventId?: string
  banquetId?: string
}

export interface NotificationManagerProps {
  notifications: NotificationItem[]
  onRetryNotification: (id: string) => void
  onClearNotifications: () => void
  onSendTestNotification: (type: 'sms' | 'email', recipient: string) => void
}

export const NotificationManager: React.FC<NotificationManagerProps> = ({
  notifications,
  onRetryNotification,
  onClearNotifications,
  onSendTestNotification,
}) => {
  const [testRecipient, setTestRecipient] = useState('')
  const [testType, setTestType] = useState<'sms' | 'email'>('sms')
  const [isSendingTest, setIsSendingTest] = useState(false)

  const handleSendTest = async () => {
    if (!testRecipient.trim()) return

    setIsSendingTest(true)
    try {
      await onSendTestNotification(testType, testRecipient.trim())
      setTestRecipient('')
    } catch (error) {
      console.error('Test notification failed:', error)
    } finally {
      setIsSendingTest(false)
    }
  }

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getNotificationIcon = (type: 'sms' | 'email', success: boolean) => {
    if (success) {
      return type === 'sms' ? '📱✅' : '📧✅'
    } else {
      return type === 'sms' ? '📱❌' : '📧❌'
    }
  }

  const getNotificationTitle = (type: 'sms' | 'email') => {
    return type === 'sms' ? 'SMS' : 'Email'
  }

  return (
    <Container>
      <Title>Управление уведомлениями</Title>

      {/* Тестовая отправка */}
      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
          Тестовая отправка
        </h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <select
            value={testType}
            onChange={(e) => setTestType(e.target.value as 'sms' | 'email')}
            style={{
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.9rem'
            }}
          >
            <option value="sms">SMS</option>
            <option value="email">Email</option>
          </select>
          <input
            type={testType === 'sms' ? 'tel' : 'email'}
            placeholder={testType === 'sms' ? '+7XXXXXXXXXX' : 'test@example.com'}
            value={testRecipient}
            onChange={(e) => setTestRecipient(e.target.value)}
            style={{
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.9rem',
              minWidth: '200px'
            }}
          />
          <Button
            variant="primary"
            onClick={handleSendTest}
            disabled={!testRecipient.trim() || isSendingTest}
          >
            {isSendingTest ? (
              <>
                <LoadingSpinner />
                Отправка...
              </>
            ) : (
              'Отправить тест'
            )}
          </Button>
        </div>
      </div>

      {/* Управление */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button onClick={onClearNotifications}>
          Очистить все
        </Button>
      </div>

      {/* Список уведомлений */}
      {notifications.length === 0 ? (
        <EmptyState>
          Нет отправленных уведомлений
        </EmptyState>
      ) : (
        notifications
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
          .map((notification) => (
            <NotificationCard key={notification.id} success={notification.success}>
              <NotificationHeader>
                <NotificationType success={notification.success}>
                  {getNotificationIcon(notification.type, notification.success)} {getNotificationTitle(notification.type)}
                </NotificationType>
                <NotificationTime>
                  {formatTime(notification.timestamp)}
                </NotificationTime>
              </NotificationHeader>
              
              <NotificationMessage>
                <div><strong>Получатель:</strong> {notification.recipient}</div>
                <div><strong>Сообщение:</strong> {notification.message}</div>
                {notification.bookingId && (
                  <div><strong>Бронирование:</strong> #{notification.bookingId}</div>
                )}
                {notification.eventId && (
                  <div><strong>Мероприятие:</strong> #{notification.eventId}</div>
                )}
                {notification.banquetId && (
                  <div><strong>Банкет:</strong> #{notification.banquetId}</div>
                )}
              </NotificationMessage>

              {notification.error && (
                <NotificationError>
                  <strong>Ошибка:</strong> {notification.error}
                </NotificationError>
              )}

              {!notification.success && (
                <div style={{ marginTop: '0.5rem' }}>
                  <Button
                    variant="secondary"
                    onClick={() => onRetryNotification(notification.id)}
                  >
                    Повторить
                  </Button>
                </div>
              )}
            </NotificationCard>
          ))
      )}
    </Container>
  )
}

export default NotificationManager
