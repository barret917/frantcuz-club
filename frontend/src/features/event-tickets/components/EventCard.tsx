import React from 'react'
import styled from 'styled-components'
import { Event } from '@/shared/api/event-tickets'

interface EventCardProps {
  event: Event
  onBuyTicket: (event: Event) => void
}

const Card = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
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
    rgba(0, 0, 0, 0.7) 100%
  );
`

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
`

const Description = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  font-size: 0.9rem;
`

const Icon = styled.span`
  font-size: 1rem;
  width: 16px;
  text-align: center;
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
  margin-bottom: 1rem;
`

const PriceRange = styled.div`
  color: #059669;
  font-weight: 600;
  font-size: 1.1rem;
`

const AvailableTickets = styled.div`
  color: #6b7280;
  font-size: 0.85rem;
`

const BuyButton = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const StatusBadge = styled.div<{ isUpcoming: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.isUpcoming ? '#10b981' : '#6b7280'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const EventCard: React.FC<EventCardProps> = ({ event, onBuyTicket }) => {
  console.log('🎭 EventCard рендерится для:', event.title)
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
    <Card>
      <ImageContainer>
        <EventImage 
          src={event.imageUrl || '/images/default-event.jpg'} 
          alt={event.title}
          onError={(e) => {
            e.currentTarget.src = '/images/default-event.jpg'
          }}
        />
        <Overlay />
        <StatusBadge isUpcoming={event.isUpcoming}>
          {event.isUpcoming ? 'Предстоящее' : 'Прошедшее'}
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
                onMouseDown={(e) => {
                  console.log('🎯 Кнопка "Купить билет" нажата!', event.title)
                  e.preventDefault()
                  e.stopPropagation()
                  onBuyTicket(event)
                }}
              >
                Купить билет
              </BuyButton>
      </Content>
    </Card>
  )
}
