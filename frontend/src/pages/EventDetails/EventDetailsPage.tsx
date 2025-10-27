import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { eventTicketsApi } from '@/shared/api/event-tickets'
import { Event } from '@/shared/api/event-tickets'
import { TicketPurchaseFlow } from '@/features/event-tickets/components/TicketPurchaseFlow'
import { LoadingSpinner } from '@/components/common'

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

const ImageSection = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 1024px) {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const StatusBadge = styled.div<{ isUpcoming: boolean }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  background: ${props => props.isUpcoming 
    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
    : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'
  };
  color: white;
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Description = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 0.75rem;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.75rem;
  }
`

const Icon = styled.span`
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`

const PriceRange = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const AvailableTickets = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const BuyButtonContainer = styled.div`
  margin-top: auto;
`

const BuyButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #7c3aed 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

const ErrorContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: white;
`

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const ErrorText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
`

export const EventDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [event, setEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showPurchaseFlow, setShowPurchaseFlow] = useState(false)

  useEffect(() => {
    const loadEvent = async () => {
      try {
        setIsLoading(true)
        const response = await eventTicketsApi.getEventById(Number(id))
        
        if (response.success && response.data) {
          setEvent(response.data)
        } else {
          setError('Мероприятие не найдено')
        }
      } catch (err) {
        console.error('Ошибка загрузки мероприятия:', err)
        setError('Ошибка при загрузке мероприятия')
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      loadEvent()
    }
  }, [id])

  const handleBuyTicket = () => {
    if (event) {
      setShowPurchaseFlow(true)
    }
  }

  const handleClosePurchaseFlow = () => {
    setShowPurchaseFlow(false)
  }

  const isEventUpcoming = () => {
    try {
      if (!event) return false
      
      // Проверяем что дата и время валидны
      if (!event.date || !event.time) {
        return false
      }
      
      // Преобразуем event.date в строку если это объект Date
      const dateStr = event.date instanceof Date ? event.date.toISOString().split('T')[0] : String(event.date)
      // Извлекаем только дату без времени (YYYY-MM-DD)
      const dateOnly = dateStr.split('T')[0] || dateStr.split(' ')[0]
      const eventDateTime = new Date(`${dateOnly}T${event.time}`)
      
      // Проверяем что дата валидна
      if (isNaN(eventDateTime.getTime())) {
        console.warn('⚠️ Некорректная дата мероприятия:', event.date, event.time)
        return false
      }
      
      const now = new Date()
      return eventDateTime > now
    } catch (error) {
      console.error('❌ Ошибка при проверке даты:', error)
      return false
    }
  }

  const getPriceRange = () => {
    if (!event) return ''
    const zones = event.zones || []
    if (zones.length === 0) return 'Цена не указана'
    
    const prices = zones.map(z => z.price).filter(p => p > 0)
    if (prices.length === 0) return 'Цена не указана'
    
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    
    if (minPrice === maxPrice) return `₽${minPrice}`
    return `₽${minPrice} - ₽${maxPrice}`
  }

  const getAvailableTickets = () => {
    if (!event) return ''
    const zones = event.zones || []
    let available = 0
    let totalSeats = 0
    
    zones.forEach(zone => {
      zone.tables?.forEach(table => {
        totalSeats += table.seats
        const soldTickets = table.tickets?.length || 0
        available += table.seats - soldTickets
      })
    })
    
    return `${available} из ${totalSeats} мест`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5)
  }

  if (showPurchaseFlow && event) {
    return (
      <TicketPurchaseFlow
        event={event}
        onClose={handleClosePurchaseFlow}
        onSuccess={() => {
          handleClosePurchaseFlow()
        }}
      />
    )
  }

  if (isLoading) {
    return (
      <PageContainer>
        <Container>
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        </Container>
      </PageContainer>
    )
  }

  if (error || !event) {
    return (
      <PageContainer>
        <Container>
          <ErrorContainer>
            <ErrorTitle>{error || 'Мероприятие не найдено'}</ErrorTitle>
            <ErrorText>Попробуйте вернуться на страницу мероприятий</ErrorText>
          </ErrorContainer>
        </Container>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          ← Назад
        </BackButton>

        <ContentGrid>
          <ImageSection>
            <EventImage 
              src={event.imageUrl || '/images/default-event.jpg'} 
              alt={event.title}
              onError={(e) => {
                e.currentTarget.src = '/images/default-event.jpg'
              }}
            />
            <ImageOverlay>
              <StatusBadge isUpcoming={isEventUpcoming()}>
                {isEventUpcoming() ? 'Предстоящее' : 'Прошедшее'}
              </StatusBadge>
            </ImageOverlay>
          </ImageSection>

          <DetailsSection>
            <Title>{event.title}</Title>
            
            <Description>{event.description}</Description>
            
            <EventInfo>
              <InfoItem>
                <Icon>📅</Icon>
                {formatDate(event.date)} в {formatTime(event.time)}
              </InfoItem>
              
              {event.location && (
                <InfoItem>
                  <Icon>📍</Icon>
                  {event.location}
                </InfoItem>
              )}
              
              {event.organizer && (
                <InfoItem>
                  <Icon>👤</Icon>
                  {event.organizer}
                </InfoItem>
              )}
            </EventInfo>
            
            <PriceInfo>
              <PriceRange>{getPriceRange()}</PriceRange>
              <AvailableTickets>{getAvailableTickets()}</AvailableTickets>
            </PriceInfo>

            <BuyButtonContainer>
              <BuyButton onClick={handleBuyTicket}>
                Купить билет
              </BuyButton>
            </BuyButtonContainer>
          </DetailsSection>
        </ContentGrid>
      </Container>
    </PageContainer>
  )
}

