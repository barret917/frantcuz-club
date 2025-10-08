import React from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui'
import { NotificationManager } from '@/shared/ui/NotificationManager'
import { useNotifications } from '@/shared/hooks/useNotifications'

const PageContainer = styled.div`
  padding: 2rem 0;
`

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
`

const StatSubtext = styled.div`
  color: #9ca3af;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

export const NotificationsPage: React.FC = () => {
  const {
    notifications,
    isLoading,
    sendTestNotification,
    retryNotification,
    clearNotifications
  } = useNotifications()

  const stats = {
    total: notifications.length,
    successful: notifications.filter(n => n.success).length,
    failed: notifications.filter(n => !n.success).length,
    sms: notifications.filter(n => n.type === 'sms').length,
    email: notifications.filter(n => n.type === 'email').length
  }

  const successRate = stats.total > 0 ? Math.round((stats.successful / stats.total) * 100) : 0

  return (
    <Container>
      <PageContainer>
        <PageTitle>Управление уведомлениями</PageTitle>

        <StatsContainer>
          <StatCard>
            <StatValue>{stats.total}</StatValue>
            <StatLabel>Всего уведомлений</StatLabel>
          </StatCard>

          <StatCard>
            <StatValue>{stats.successful}</StatValue>
            <StatLabel>Успешно отправлено</StatLabel>
            <StatSubtext>{successRate}% успешность</StatSubtext>
          </StatCard>

          <StatCard>
            <StatValue>{stats.failed}</StatValue>
            <StatLabel>Ошибки отправки</StatLabel>
          </StatCard>

          <StatCard>
            <StatValue>{stats.sms}</StatValue>
            <StatLabel>SMS сообщений</StatLabel>
          </StatCard>

          <StatCard>
            <StatValue>{stats.email}</StatValue>
            <StatLabel>Email сообщений</StatLabel>
          </StatCard>
        </StatsContainer>

        <NotificationManager
          notifications={notifications}
          onRetryNotification={retryNotification}
          onClearNotifications={clearNotifications}
          onSendTestNotification={sendTestNotification}
        />
      </PageContainer>
    </Container>
  )
}

export default NotificationsPage
