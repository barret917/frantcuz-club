import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { keyframes, css } from 'styled-components'
import { eventsApi, Event } from '@/shared/api/events'

// Анимации
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Main = styled.main`
  flex: 1;
  padding: 0;
`

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
`

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
`

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
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
`

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  animation: ${css`${fadeInUp} 1.2s ease-out`};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`

const EventsSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
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
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${css`${fadeInUp} 0.8s ease-out`};
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const EventImage = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`

const EventDate = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
`

const EventTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const EventDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const EventTime = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  strong {
    color: #667eea;
  }
`

const EventPrice = styled.div`
  color: #ffd700;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

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
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const NoEvents = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 1.1rem;
  }
`

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
`

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
`

export const EventsPage: React.FC = () => {
  const [filterType, setFilterType] = useState<'upcoming' | 'past'>('upcoming');
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  // Загружаем мероприятия при изменении фильтра
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
          // Очищаем ошибку, так как запрос прошел успешно
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

  // Фильтрация мероприятий
  const filteredEvents = events;

  // Функция форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long' 
    };
    return date.toLocaleDateString('ru-RU', options);
  };

  return (
    <PageContainer>
      <Main>
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
              Актуальные мероприятия и специальные предложения
            </Subtitle>
            
            <FilterButtons>
              <FilterButton 
                $active={filterType === 'upcoming'}
                onClick={() => setFilterType('upcoming')}
              >
                Будущие мероприятия
              </FilterButton>
              <FilterButton 
                $active={filterType === 'past'}
                onClick={() => setFilterType('past')}
              >
                Прошедшие мероприятия
              </FilterButton>
            </FilterButtons>
            
            {isLoading ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '3rem',
                color: '#667eea',
                fontSize: '1.2rem'
              }}>
                Загрузка мероприятий...
              </div>
            ) : error ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '3rem',
                color: '#ef4444',
                fontSize: '1.2rem'
              }}>
                {error}
              </div>
            ) : filteredEvents.length > 0 ? (
              <EventsGrid>
                {filteredEvents.map((event) => (
                  <EventCard key={event.id}>
                    {event.imageUrl && (
                      <EventImage>
                        <img src={event.imageUrl} alt={event.title} />
                      </EventImage>
                    )}
                    <EventDate>{formatDate(event.date)}</EventDate>
                    <EventTitle>{event.title}</EventTitle>
                    <EventDescription>{event.description}</EventDescription>
                    <EventTime>
                      <strong>Время:</strong> {event.time}
                    </EventTime>
                    <EventPrice>{event.price || 'Цена не указана'}</EventPrice>
                    <EventButton>Подробнее</EventButton>
                  </EventCard>
                ))}
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
      </Main>
    </PageContainer>
  )
}