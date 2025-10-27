import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Event, eventTicketsApi } from '@/shared/api/event-tickets'
import { EventCard } from '@/features/event-tickets/components/EventCard'
import { TicketPurchaseFlow } from '@/features/event-tickets/components/TicketPurchaseFlow'

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  padding: 2rem 0;
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  padding: 4rem 0;
  min-height: 50vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
    min-height: 40vh;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#3b82f6' : '#e5e7eb'};
  background: ${props => props.active ? '#3b82f6' : 'white'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  outline: none;
  
  &:hover {
    border-color: #3b82f6;
    color: ${props => props.active ? 'white' : '#3b82f6'};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
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

export const EventTicketsPage: React.FC = () => {
  const [filterType, setFilterType] = useState<'upcoming' | 'past'>('upcoming')
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [showPurchaseFlow, setShowPurchaseFlow] = useState(false)

  // Загружаем мероприятия при изменении фильтра
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await eventTicketsApi.getEvents(filterType)
        console.log('API Response:', response)
        if (response.success) {
          setEvents(response.data)
          console.log('Events loaded:', response.data.length)
        } else {
          setError(response.error || 'Ошибка загрузки мероприятий')
        }
      } catch (err: any) {
        console.error('Ошибка при загрузке мероприятий:', err)
        setError('Ошибка при загрузке мероприятий')
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [filterType])

  const handleBuyTicket = (event: Event) => {
    console.log('🎫 Клик на покупку билета:', event.title)
    setSelectedEvent(event)
    setShowPurchaseFlow(true)
    console.log('✅ Состояние обновлено: showPurchaseFlow = true')
  }

  const handlePurchaseSuccess = (ticket: any) => {
    console.log('Билет успешно куплен:', ticket)
    setShowPurchaseFlow(false)
    setSelectedEvent(null)
    // Здесь можно показать уведомление об успешной покупке
    alert(`Билет успешно куплен! Номер билета: ${ticket.ticketNumber}`)
  }

  const handleClosePurchaseFlow = () => {
    setShowPurchaseFlow(false)
    setSelectedEvent(null)
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingState>
          Загружаем мероприятия...
        </LoadingState>
      )
    }

    if (error) {
      return (
        <ErrorState>
          {error}
        </ErrorState>
      )
    }

    if (events.length === 0) {
      return (
        <EmptyState>
          <EmptyIcon>🎭</EmptyIcon>
          <EmptyTitle>
            {filterType === 'upcoming' ? 'Нет предстоящих мероприятий' : 'Нет прошедших мероприятий'}
          </EmptyTitle>
          <EmptyDescription>
            {filterType === 'upcoming' 
              ? 'Следите за обновлениями, скоро появятся новые события!'
              : 'Здесь будут отображаться завершенные мероприятия'
            }
          </EmptyDescription>
        </EmptyState>
      )
    }

    return (
      <EventsGrid>
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onBuyTicket={handleBuyTicket}
          />
        ))}
      </EventsGrid>
    )
  }

  console.log('🔄 EventTicketsPage рендер:', { showPurchaseFlow, selectedEvent: selectedEvent?.title })

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Мероприятия</Title>
          <Subtitle>
            Откройте для себя удивительные события в нашем клубе. 
            Выберите мероприятие и забронируйте лучшие места!
          </Subtitle>
        </Header>

        <FilterSection>
          <FilterButton
            active={filterType === 'past'}
            onClick={() => setFilterType('past')}
          >
            Прошедшие
          </FilterButton>
          <FilterButton
            active={filterType === 'upcoming'}
            onClick={() => setFilterType('upcoming')}
          >
            Предстоящие
          </FilterButton>
        </FilterSection>

        {renderContent()}
      </Container>

      {showPurchaseFlow && selectedEvent && (
        <TicketPurchaseFlow
          event={selectedEvent}
          onClose={handleClosePurchaseFlow}
          onSuccess={handlePurchaseSuccess}
        />
      )}
    </PageContainer>
  )
}
