import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Event } from '@/shared/api/event-tickets'

interface EventCardProps {
  event: Event
  onBuyTicket: (event: Event) => void
}

const Card = styled.div`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 8px 20px rgba(102, 126, 234, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    border-radius: 16px;
    box-shadow: 
      0 4px 15px rgba(0, 0, 0, 0.3),
      0 1px 5px rgba(0, 0, 0, 0.2);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 480px) {
    height: 160px;
  }
`

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  transition: opacity 0.3s ease;
  
  ${Card}:hover & {
    opacity: 0.8;
  }
`

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: transparent;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
`

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    -webkit-line-clamp: 2;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.875rem;
  }
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.625rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    gap: 0.625rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    font-size: 0.8rem;
  }
`

const Icon = styled.span`
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
  filter: grayscale(0.2);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    width: 16px;
  }
`

const EventDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 0.875rem;
    margin-bottom: 1rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-bottom: 0.875rem;
    border-radius: 8px;
  }
`

const PriceRange = styled.div`
  color: #10b981;
  font-weight: 700;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const AvailableTickets = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

const BuyButton = styled.div<{ isDisabled: boolean }>`
  width: 100%;
  background: ${props => props.isDisabled 
    ? 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)' 
    : 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)'
  };
  color: white;
  border: none;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.isDisabled 
    ? '0 2px 8px rgba(107, 114, 128, 0.2)' 
    : '0 4px 15px rgba(102, 126, 234, 0.3)'
  };
  opacity: ${props => props.isDisabled ? 0.6 : 1};
  
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
    background: ${props => props.isDisabled 
      ? 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)' 
      : 'linear-gradient(135deg, #5a67d8 0%, #7c3aed 100%)'
    };
    transform: ${props => props.isDisabled ? 'none' : 'translateY(-3px)'};
    box-shadow: ${props => props.isDisabled 
      ? '0 2px 8px rgba(107, 114, 128, 0.2)' 
      : '0 8px 25px rgba(102, 126, 234, 0.4)'
    };
    
    &::before {
      left: ${props => props.isDisabled ? '-100%' : '100%'};
    }
  }
  
  &:active {
    transform: ${props => props.isDisabled ? 'none' : 'translateY(-1px)'};
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
    border-radius: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    border-radius: 12px;
  }
`

const StatusBadge = styled.div<{ isUpcoming: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.isUpcoming 
    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
    : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'};
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 25px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.35rem 0.75rem;
    font-size: 0.7rem;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    top: 0.625rem;
    right: 0.625rem;
    padding: 0.3rem 0.625rem;
    font-size: 0.65rem;
    border-radius: 18px;
  }
`

const EventCard: React.FC<EventCardProps> = ({ event, onBuyTicket }) => {
  const navigate = useNavigate()
  console.log('🎭 EventCard рендерится для:', event.title)

  const handleCardClick = (e: React.MouseEvent) => {
    // Не переходим на детальную страницу если клик по кнопке
    if ((e.target as HTMLElement).closest('.buy-button')) {
      return
    }
    navigate(`/events/${event.id}`)
  }
  
  // Проверяем актуальность даты в реальном времени
  const isEventUpcoming = () => {
    try {
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
      
      // Сравниваем с текущим временем
      return eventDateTime > now
    } catch (error) {
      console.error('❌ Ошибка при проверке даты мероприятия:', error)
      return false
    }
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
    return timeString
  }

  const getPriceRange = () => {
    if (!event.zones || event.zones.length === 0) {
      return 'Цена не указана'
    }
    
    const prices = event.zones.map(zone => zone.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    
    if (minPrice === maxPrice) {
      return `${minPrice} ₽`
    }
    
    return `${minPrice} - ${maxPrice} ₽`
  }

  const getAvailableTickets = () => {
    if (!event.zones || event.zones.length === 0) {
      return 'Места не настроены'
    }
    
    const totalSeats = event.zones.reduce((sum, zone) => {
      const zoneSeats = zone.tables?.reduce((tableSum, table) => tableSum + table.seats, 0) || 0
      return sum + zoneSeats
    }, 0)
    
    const soldTickets = event.tickets?.filter(ticket => ticket.status === 'sold').length || 0
    const available = totalSeats - soldTickets
    
    return `${available} из ${totalSeats} мест`
  }

  return (
    <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <ImageContainer>
        <EventImage 
          src={event.imageUrl || '/images/default-event.jpg'} 
          alt={event.title}
          onError={(e) => {
            e.currentTarget.src = '/images/default-event.jpg'
          }}
        />
        <Overlay />
        <StatusBadge isUpcoming={isEventUpcoming()}>
          {isEventUpcoming() ? 'Предстоящее' : 'Прошедшее'}
        </StatusBadge>
      </ImageContainer>
      
      <Content>
        <EventDetails>
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
        </EventDetails>
        
              <BuyButton 
                className="buy-button"
                isDisabled={!isEventUpcoming()}
                onMouseDown={(e) => {
                  if (!isEventUpcoming()) {
                    e.preventDefault()
                    e.stopPropagation()
                    return
                  }
                  console.log('🎯 Кнопка "Купить билет" нажата!', event.title)
                  e.preventDefault()
                  e.stopPropagation()
                  onBuyTicket(event)
                }}
              >
                {isEventUpcoming() ? 'Купить билет' : 'Мероприятие завершено'}
              </BuyButton>
      </Content>
    </Card>
  )
}

export { EventCard }
