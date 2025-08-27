import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { eventsApi, Event, eventUtils } from '@/shared/api/events'
import { EventsForm } from './EventsForm'

// Стили для контейнера мероприятий
const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const EventsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`

const AddButton = styled.button`
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
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`

const EventTitle = styled.h3`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`

const EventDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
  line-height: 1.5;
`

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`

const EventPrice = styled.div`
  color: #667eea;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0.5rem 0;
`

const EventStatus = styled.div<{ status: string }>`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
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
`

const CardActions = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
  margin-top: 1rem;
`

const ActionButton = styled.button<{ $variant: 'edit' | 'delete' }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  ${({ $variant }) => 
    $variant === 'edit' 
      ? `
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          
          &:hover {
            background: rgba(59, 130, 246, 0.3);
          }
        `
      : `
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
          
          &:hover {
            background: rgba(239, 68, 68, 0.3);
          }
        `
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
  }
`

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: ${({ $active }) => 
    $active 
      ? 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)' 
      : 'rgba(255, 255, 255, 0.05)'
  };
  color: ${({ $active }) => $active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  
  &:hover {
    background: ${({ $active }) => 
      $active 
        ? 'linear-gradient(135deg, #5a67d8 0%, #7c3aed 100%)' 
        : 'rgba(255, 255, 255, 0.1)'
    };
  }
`


// Компонент для отображения списка мероприятий
export const EventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past' | 'current'>('all')

  // Загрузка мероприятий
  const loadEvents = async () => {
    try {
      setLoading(true)
      const response = await eventsApi.getEventsWithClientFilter(filter)
      
      if (response.success) {
        setEvents(response.data)
      } else {
        setError(response.error || 'Ошибка при загрузке мероприятий')
      }
    } catch (err: any) {
      setError(err.message || 'Ошибка при загрузке мероприятий')
    } finally {
      setLoading(false)
    }
  }

  // Загрузка мероприятий при монтировании и изменении фильтра
  useEffect(() => {
    loadEvents()
  }, [filter])

  // Обработчик успешного сохранения формы
  const handleFormSuccess = () => {
    setShowForm(false)
    setEditingEvent(null)
    loadEvents() // Перезагружаем мероприятия
  }

  // Обработчик отмены формы
  const handleFormCancel = () => {
    setShowForm(false)
    setEditingEvent(null)
  }

  // Обработчик редактирования мероприятия
  const handleEdit = (event: Event) => {
    setEditingEvent(event)
    setShowForm(true)
  }

  // Обработчик удаления мероприятия
  const handleDelete = async (eventId: number) => {
    if (!confirm('Вы уверены, что хотите удалить это мероприятие?')) {
      return
    }

    try {
      const response = await eventsApi.deleteEvent(eventId)
      
      if (response.success) {
        // Обновляем список мероприятий
        loadEvents()
      } else {
        setError(response.error || 'Ошибка при удалении мероприятия')
      }
    } catch (err: any) {
      setError(err.message || 'Ошибка при удалении мероприятия')
    }
  }

  // Обработчик добавления нового мероприятия
  const handleAddNew = () => {
    setEditingEvent(null)
    setShowForm(true)
  }

  // Функция для получения статуса мероприятия
  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Сейчас идет'
      case 'upcoming': return 'Предстоящее'
      case 'past': return 'Завершено'
      default: return status
    }
  }

  if (loading) {
    return (
      <EventsContainer>
        <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
          Загрузка мероприятий...
        </div>
      </EventsContainer>
    )
  }

  return (
    <EventsContainer>
      {error && (
        <div style={{ 
          background: 'rgba(239, 68, 68, 0.2)', 
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          color: '#ef4444',
          marginBottom: '1.5rem'
        }}>
          {error}
        </div>
      )}

      {showForm ? (
        <EventsForm
          event={editingEvent}
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
          mode={editingEvent ? 'edit' : 'create'}
        />
      ) : (
        <>
          <EventsHeader>
            <Title>Мероприятия</Title>
            <AddButton onClick={handleAddNew}>
              + Добавить мероприятие
            </AddButton>
          </EventsHeader>

          <FilterContainer>
            <FilterButton 
              $active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              Все мероприятия
            </FilterButton>
            <FilterButton 
              $active={filter === 'upcoming'} 
              onClick={() => setFilter('upcoming')}
            >
              Предстоящие
            </FilterButton>
            <FilterButton 
              $active={filter === 'current'} 
              onClick={() => setFilter('current')}
            >
              Текущие
            </FilterButton>
            <FilterButton 
              $active={filter === 'past'} 
              onClick={() => setFilter('past')}
            >
              Завершенные
            </FilterButton>
          </FilterContainer>

          {events.length === 0 ? (
            <EmptyState>
              <h3>Мероприятий пока нет</h3>
              <p>Добавьте первое мероприятие, нажав на кнопку выше</p>
            </EmptyState>
          ) : (
            <EventsGrid>
              {events.map(event => {
                const status = eventUtils.getEventStatus(event)
                
                return (
                  <EventCard key={event.id}>
                    <EventStatus status={status}>
                      {getStatusText(status)}
                    </EventStatus>
                    
                    {event.image_url ? (
                      <EventImage 
                        src={event.image_url} 
                        alt={event.title}
                        onError={(e) => {
                          // Запасное изображение при ошибке загрузки
                          e.currentTarget.src = eventUtils.generateEventImage(event.title)
                        }}
                      />
                    ) : (
                      <EventImage 
                        src={eventUtils.generateEventImage(event.title)} 
                        alt={event.title}
                      />
                    )}
                    
                    <EventTitle>{event.title}</EventTitle>
                    
                    {event.short_description && (
                      <EventDescription>{event.short_description}</EventDescription>
                    )}
                    
                    <EventDetails>
                      <EventDetail>
                        📅 {eventUtils.formatEventDate(event.event_date)}
                      </EventDetail>
                      <EventDetail>
                        🕒 {eventUtils.formatEventTime(event.event_date)}
                      </EventDetail>
                      <EventDetail>
                        📍 {event.event_location}
                      </EventDetail>
                    </EventDetails>
                    
                    <EventPrice>
                      {event.price === 'Бесплатно' || event.price === '0' || !event.price
                        ? 'Бесплатно' 
                        : `${event.price} ₽`
                      }
                    </EventPrice>
                    
                    <CardActions>
                      <ActionButton 
                        $variant="edit" 
                        onClick={() => handleEdit(event)}
                      >
                        Изменить
                      </ActionButton>
                      <ActionButton 
                        $variant="delete" 
                        onClick={() => handleDelete(event.id)}
                      >
                        Удалить
                      </ActionButton>
                    </CardActions>
                  </EventCard>
                )
              })}
            </EventsGrid>
          )}
        </>
      )}
    </EventsContainer>
  )
}