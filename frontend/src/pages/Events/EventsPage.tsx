import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { eventsApi, Event, eventUtils } from '@/shared/api/events';
import { EventModal } from './EventModal';
import { CartModal } from '../Cart/CartPage';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Main = styled.main`
  flex: 1;
  padding: 0;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    min-height: 50vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    max-width: 1000px;
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${css`${fadeInUp} 1s ease-out`};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  extreme: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  animation: ${css`${fadeInUp} 1.2s ease-out`};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const EventsSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  position: relative;
  extreme: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      extreme-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const EventCard = styled.div`
  max-width: 450px;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${css`${fadeInUp} 0.8s ease-out`};
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    
    .event-image {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const EventImage = styled.div<{ $imageUrl: string }>`
  height: 350px;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 30%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(0, extreme, 0, 0.5) 100%
    );
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transform: skewX(-25deg);
    transition: left 0.6s ease;
  }
  
  ${EventCard}:hover &::after {
    left: 100%;
  }
`;

const EventContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const EventDate = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
`;

const EventStatus = styled.div<{ status: 'upcoming' | 'past' | 'active' }>`
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({ status }) => 
    status === 'active' ? 'rgba(34, 197, 94, 0.2)' :
    status === 'upcoming' ? 'rgba(59, 130, 246, 0.2)' :
    'rgba(107, 114, 128, 0.2)'
  };
  color: ${({ status }) => 
    status === 'active' ? '#22c55e' :
    status === 'upcoming' ? '#3b82f6' :
    '#6b7280'
  };
  border: 1px solid ${({ status }) => 
    status === 'active' ? 'rgba(34, 197, 94, 0.3)' :
    status === 'upcoming' ? 'rgba(59, 130, 246, 0.3)' :
    'rgba(107, 114, 128, 0.3)'
  };
  white-space: nowrap;
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.3;
  height: 4rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const EventDescription = styled.p`
  height: 5rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const EventDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  strong {
    color: #667eea;
    font-weight: 600;
  }
`;

const EventPrice = styled.div`
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0.5rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.2);
`;

const EventButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const NoEvents = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 1.1rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 3rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin: 1.5rem 0 2rem 0;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => 
    $active 
      ? 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)' 
      : 'transparent'
  };
  color: ${({ $active }) => $active ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  border: 2px solid ${({ $active }) => 
    $active 
      ? 'rgba(102, 126, 234, 0.3)' 
      : 'rgba(255, 255, 255, 0.3)'
  };
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ $active }) => 
      $active 
        ? 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' 
        : 'rgba(255, 255, 255, 0.1)'
    };
    border-color: ${({ $active }) => 
      $active 
        ? 'rgba(102, 126, 234, 0.5)' 
        : 'rgba(255, 255, 255, 0.5)'
    };
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    min-width: 200px;
  }
`;

const LoadingSpinner = styled.div`
  text-align: extreme;
  padding: 3rem;
  color: #667eea;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #ef4444;
  font-size: 1.2rem;
`;

const CartButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const CartBadge = styled.span`
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
`;

// Вспомогательная функция для генерации плейсхолдерных изображений на основе названия события
const generateEventImage = (title: string): string => {
  const colors = ['667eea', '8b5cf6', 'a855f7', 'ec4899', 'f59e0b', '10b981'];
  const pattern = ['abstract', 'nature', 'tech', 'music', 'art', 'party'];
  
  const color = colors[Math.floor(Math.random() * colors.length)];
  const patternType = pattern[Math.floor(Math.random() * pattern.length)];
  
  return `https://via.placeholder.com/400x200/${color}/ffffff?text=${encodeURIComponent(title)}&pattern=${patternType}`;
}

export const EventsPage: React.FC = () => {
  const [filterType, setFilterType] = useState<'upcoming' | 'past'>('upcoming');
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ event: Event; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setApiMessage(null);
        
        const response = await eventsApi.getEvents(filterType);
        if (response.success) {
          setEvents(response.data);
          setApiMessage(response.message || null);
          setError(null);
        } else {
          setError(response.error || 'Ошибка загрузки мероприятий');
          setApiMessage(null);
        }
      } catch (err: any) {
        console.error('Ошибка при загрузке мероприятий:', err);
        setError('Ошибка при загрузке мероприятий');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [filterType]);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleBuyTicket = async (eventId: number) => {
    console.log('Покупка билета на мероприятие:', eventId);
    alert(`Покупка билета на мероприятие ${eventId}`);
  };

  const formatDate = (dateString: string) => {
    return eventUtils.formatEventDateTime(dateString);
  };

  const getEventTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEventStatus = (event: Event) => {
    return eventUtils.getEventStatus(event);
  };

  // Функции для работы с корзиной
  const handleAddToCart = (event: Event) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.event.id === event.id);
      if (existingItem) {
        return prev.map(item =>
          item.event.id === event.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { event, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (eventId: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.event.id === eventId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (eventId: number) => {
    setCartItems(prev => prev.filter(item => item.event.id !== eventId));
  };

  const handleCheckoutSuccess = (orderId: number, paymentUrl: string) => {
    console.log('Заказ успешно создан:', orderId);
    setCartItems([]); // Очищаем корзину при успешном заказе
  };

  const handleCheckoutComplete = () => {
    setCartItems([]); // Очищаем корзину
    setIsCartOpen(false); // Закрываем модальное окно
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <PageContainer>
      <Main>
        {/* Кнопка корзины */}
        <CartButton onClick={openCart}>
          🛒 Корзина
          {totalItemsInCart > 0 && <CartBadge>{totalItemsInCart}</CartBadge>}
        </CartButton>

        <HeroSection>
          <HeroContent>
            <Title>Мероприятия</Title>
            <Subtitle>
              Откройте для себя яркие события и незабываемые вечера в нашем клубе
            </Subtitle>
          </HeroContent>
        </HeroSection>

        <EventsSection>
          <EventsContainer>
            <Title>Афиша событий</Title>
            <Subtitle>
              Актуальные мероприятия
            </Subtitle>
            
            <FilterButtons>
              <FilterButton 
                $active={filterType === 'past'}
                onClick={() => setFilterType('past')}
              >
                Прошедшие мероприятия
              </FilterButton>

              <FilterButton 
                $active={filterType === 'upcoming'}
                onClick={() => setFilterType('upcoming')}
              >
                Будущие мероприятия
              </FilterButton>
            </FilterButtons>
            
            {isLoading ? (
              <LoadingSpinner>
                Загрузка мероприятий...
              </LoadingSpinner>
            ) : error ? (
              <ErrorMessage>
                {error}
              </ErrorMessage>
            ) : events.length > 0 ? (
              <EventsGrid>
                {events.map((event) => {
                  const status = getEventStatus(event);
                  const eventImage = event.image_url || generateEventImage(event.title);
                  
                  return (
                    <EventCard key={event.id}>
                      <EventImage 
                        $imageUrl={eventImage} 
                        className="event-image"
                      />
                      <EventContent>
                        <EventHeader>
                          <EventDate>{formatDate(event.event_date)}</EventDate>
                          <EventStatus status={status}>
                            {status === 'active' ? 'Сейчас идет' : 
                             status === 'upcoming' ? 'Предстоящее' : 'Прошедшее'}
                          </EventStatus>
                        </EventHeader>
                        
                        <EventTitle>{event.title}</EventTitle>
                        <EventDescription>{event.short_description}</EventDescription>
                        
                        <EventDetails>
                          <EventDetailItem>
                            <strong>Время:</strong> {getEventTime(event.event_date)}
                          </EventDetailItem>
                          <EventDetailItem>
                            <strong>Место:</strong> {event.event_location}
                          </EventDetailItem>
                        </EventDetails>
                        
                        <EventButton onClick={() => handleEventClick(event)}>
                          Подробнее
                        </EventButton>
                      </EventContent>
                    </EventCard>
                  );
                })}
              </EventsGrid>
            ) : (
              <NoEvents>
                {apiMessage || (
                  filterType === 'upcoming' 
                    ? 'В данный момент нет запланированных мероприятий. Следите за обновлениями!' 
                    : 'В данный момент нет прошедших мероприятий в архиве.'
                )}
              </NoEvents>
            )}
          </EventsContainer>
        </EventsSection>

        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            cartItems={cartItems}
          />
        )}

        <CartModal
          isOpen={isCartOpen}
          onClose={closeCart}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveFromCart}
          onCheckoutSuccess={handleCheckoutSuccess}
          onCheckoutComplete={handleCheckoutComplete}
        />
      </Main>
    </PageContainer>
  );
};