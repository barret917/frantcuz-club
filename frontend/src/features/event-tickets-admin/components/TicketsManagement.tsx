import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Event, EventTicket, eventTicketsApi } from '@/shared/api/event-tickets'

interface TicketsManagementProps {
  event: Event
  onClose: () => void
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const Modal = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`

const Header = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  
  &:hover {
    color: #374151;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
`

const Subtitle = styled.p`
  color: #6b7280;
  margin: 0;
`

const Content = styled.div`
  padding: 2rem;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`

const StatCard = styled.div`
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
`

const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const TicketsTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const TableHeader = styled.div`
  background: #f8f9fa;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  font-weight: 600;
  color: #374151;
`

const TableRow = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`

const StatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => {
    switch (props.status) {
      case 'sold':
        return `
          background: #dcfce7;
          color: #166534;
        `
      case 'used':
        return `
          background: #dbeafe;
          color: #1e40af;
        `
      case 'cancelled':
        return `
          background: #fee2e2;
          color: #dc2626;
        `
      default:
        return `
          background: #f3f4f6;
          color: #6b7280;
        `
    }
  }}
`

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.85rem;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: #3b82f6;
          color: white;
          &:hover { background: #2563eb; }
        `
      case 'danger':
        return `
          background: #dc2626;
          color: white;
          &:hover { background: #b91c1c; }
        `
      default:
        return `
          background: #f3f4f6;
          color: #6b7280;
          &:hover { background: #e5e7eb; }
        `
    }
  }}
`

const LoadingState = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #6b7280;
  font-size: 1.1rem;
`

const ErrorState = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #dc2626;
  font-size: 1.1rem;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #6b7280;
`

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 0.5rem 0;
`

const EmptyDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
`

const QRCodeModal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 1rem;
`

const QRCodeContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  max-width: 400px;
  width: 100%;
`

const QRCodeImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  margin: 1rem 0;
`

export const TicketsManagement: React.FC<TicketsManagementProps> = ({ 
  event, 
  onClose 
}) => {
  const [tickets, setTickets] = useState<EventTicket[]>([])
  const [stats, setStats] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showQRCode, setShowQRCode] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<EventTicket | null>(null)

  // Загружаем билеты и статистику
  useEffect(() => {
    loadTickets()
    loadStats()
  }, [event.id])

  const loadTickets = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await eventTicketsApi.getTicketsByEvent(event.id)
      if (response.success) {
        setTickets(response.data)
      } else {
        setError(response.error || 'Ошибка загрузки билетов')
      }
    } catch (err: any) {
      console.error('Ошибка при загрузке билетов:', err)
      setError('Ошибка при загрузке билетов')
    } finally {
      setIsLoading(false)
    }
  }

  const loadStats = async () => {
    try {
      const response = await eventTicketsApi.getSalesStats(event.id)
      if (response.success) {
        setStats(response.data)
      }
    } catch (error) {
      console.error('Ошибка при загрузке статистики:', error)
    }
  }

  const handleCancelTicket = async (ticket: EventTicket) => {
    if (!confirm(`Вы уверены, что хотите отменить билет "${ticket.ticketNumber}"?`)) {
      return
    }

    try {
      const response = await eventTicketsApi.cancelTicket(ticket.id)
      if (response.success) {
        await loadTickets()
        await loadStats()
      } else {
        alert(response.error || 'Ошибка при отмене билета')
      }
    } catch (error) {
      console.error('Ошибка при отмене билета:', error)
      alert('Ошибка при отмене билета')
    }
  }

  const handleShowQRCode = (ticket: EventTicket) => {
    setSelectedTicket(ticket)
    setShowQRCode(true)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusStats = () => {
    if (!stats) return { sold: 0, used: 0, cancelled: 0, total: 0 }
    
    const statusCounts = stats.stats.reduce((acc: any, stat: any) => {
      acc[stat.status] = stat._count.status
      return acc
    }, {})
    
    return {
      sold: statusCounts.sold || 0,
      used: statusCounts.used || 0,
      cancelled: statusCounts.cancelled || 0,
      total: Object.values(statusCounts).reduce((sum: number, count: any) => sum + count, 0)
    }
  }

  const statusStats = getStatusStats()

  if (isLoading) {
    return (
      <Overlay onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Header>
            <CloseButton onClick={onClose}>×</CloseButton>
            <Title>{event.title}</Title>
            <Subtitle>Управление билетами</Subtitle>
          </Header>
          <Content>
            <LoadingState>Загружаем билеты...</LoadingState>
          </Content>
        </Modal>
      </Overlay>
    )
  }

  if (error) {
    return (
      <Overlay onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Header>
            <CloseButton onClick={onClose}>×</CloseButton>
            <Title>{event.title}</Title>
            <Subtitle>Управление билетами</Subtitle>
          </Header>
          <Content>
            <ErrorState>{error}</ErrorState>
          </Content>
        </Modal>
      </Overlay>
    )
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseButton onClick={onClose}>×</CloseButton>
          <Title>{event.title}</Title>
          <Subtitle>Управление билетами</Subtitle>
        </Header>

        <Content>
          <StatsGrid>
            <StatCard>
              <StatIcon>🎫</StatIcon>
              <StatValue>{statusStats.total}</StatValue>
              <StatLabel>Всего билетов</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>✅</StatIcon>
              <StatValue>{statusStats.sold}</StatValue>
              <StatLabel>Продано</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>🎯</StatIcon>
              <StatValue>{statusStats.used}</StatValue>
              <StatLabel>Использовано</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>❌</StatIcon>
              <StatValue>{statusStats.cancelled}</StatValue>
              <StatLabel>Отменено</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>💰</StatIcon>
              <StatValue>{stats?.totalRevenue || 0} ₽</StatValue>
              <StatLabel>Общая выручка</StatLabel>
            </StatCard>
          </StatsGrid>

          {tickets.length === 0 ? (
            <EmptyState>
              <EmptyIcon>🎫</EmptyIcon>
              <EmptyTitle>Билетов пока нет</EmptyTitle>
              <EmptyDescription>
                Билеты появятся здесь после покупки через сайт или бота
              </EmptyDescription>
            </EmptyState>
          ) : (
            <TicketsTable>
              <TableHeader>
                <div>Номер билета</div>
                <div>Клиент</div>
                <div>Зона / Стол</div>
                <div>Цена</div>
                <div>Статус</div>
                <div>Действия</div>
              </TableHeader>
              
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <div style={{ fontFamily: 'monospace', fontWeight: 600 }}>
                    {ticket.ticketNumber}
                  </div>
                  
                  <div>
                    <div style={{ fontWeight: 600 }}>{ticket.customerName}</div>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {ticket.customerEmail}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {ticket.customerPhone}
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ fontWeight: 600 }}>{ticket.zone?.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {ticket.table?.name}
                    </div>
                  </div>
                  
                  <div style={{ fontWeight: 600, color: '#059669' }}>
                    {ticket.price} ₽
                  </div>
                  
                  <div>
                    <StatusBadge status={ticket.status}>
                      {ticket.status === 'sold' ? 'Продано' :
                       ticket.status === 'used' ? 'Использовано' :
                       ticket.status === 'cancelled' ? 'Отменено' : 'Доступно'}
                    </StatusBadge>
                    {ticket.purchasedAt && (
                      <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>
                        {formatDate(ticket.purchasedAt)}
                      </div>
                    )}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {ticket.qrCode && (
                      <ActionButton onClick={() => handleShowQRCode(ticket)}>
                        QR
                      </ActionButton>
                    )}
                    {ticket.status === 'sold' && (
                      <ActionButton 
                        variant="danger" 
                        onClick={() => handleCancelTicket(ticket)}
                      >
                        Отменить
                      </ActionButton>
                    )}
                  </div>
                </TableRow>
              ))}
            </TicketsTable>
          )}
        </Content>
      </Modal>

      <QRCodeModal show={showQRCode}>
        <QRCodeContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShowQRCode(false)}>×</CloseButton>
          <h3 style={{ margin: '0 0 1rem 0', color: '#1a1a1a' }}>
            QR-код билета
          </h3>
          {selectedTicket?.qrCode && (
            <QRCodeImage 
              src={selectedTicket.qrCode} 
              alt={`QR-код билета ${selectedTicket.ticketNumber}`}
            />
          )}
          <div style={{ fontFamily: 'monospace', fontWeight: 600, marginTop: '1rem' }}>
            {selectedTicket?.ticketNumber}
          </div>
          <div style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            {selectedTicket?.customerName}
          </div>
        </QRCodeContent>
      </QRCodeModal>
    </Overlay>
  )
}


