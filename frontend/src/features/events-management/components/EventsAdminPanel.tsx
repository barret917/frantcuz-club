import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getAllEvents, createEvent, updateEvent, deleteEvent, Event, CreateEventData } from '@/shared/api/events'
import { ImageUpload } from '@/shared/ui/ImageUpload/ImageUpload'

const Container = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          }
        `
      case 'danger':
        return `
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
          }
        `
      default:
        return `
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `
    }
  }}
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
  }
`

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`

const EventTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`

const EventInfo = styled.div`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`

const EventActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Modal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(20px);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const ModalTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #a0a0a0;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #ffffff;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: #a0a0a0;
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: #a0a0a0;
  }
`

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #667eea;
`

const CheckboxLabel = styled.label`
  color: #ffffff;
  font-size: 0.95rem;
  cursor: pointer;
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #a0a0a0;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #a0a0a0;
`

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`

const EmptyStateTitle = styled.h3`
  color: #a0a0a0;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`

const EmptyStateText = styled.p`
  color: #808080;
  font-size: 0.95rem;
  margin: 0;
`

interface EventsAdminPanelProps {
  onEventSelect?: (event: Event) => void
}

export const EventsAdminPanel: React.FC<EventsAdminPanelProps> = ({ onEventSelect }) => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState<CreateEventData>({
    title: '',
    description: '',
    date: '',
    time: '',
    category: 'party',
    isUpcoming: true,
    location: '',
    organizer: '',
    maxGuests: 50,
    tags: []
  })

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = async () => {
    try {
      setLoading(true)
      const data = await getAllEvents()
      setEvents(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Ошибка при загрузке событий:', error)
      setEvents([])
    } finally {
      setLoading(false)
    }
  }

  const handleCreateEvent = () => {
    setEditingEvent(null)
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      category: 'party',
      isUpcoming: true,
      location: '',
      organizer: '',
      maxGuests: 50,
      tags: []
    })
    setIsModalOpen(true)
  }

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event)
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      category: event.category,
      isUpcoming: event.isUpcoming,
      location: event.location || '',
      organizer: event.organizer || '',
      maxGuests: event.maxGuests || 50,
      tags: event.tags || []
    })
    setIsModalOpen(true)
  }

  const handleDeleteEvent = async (eventId: number) => {
    if (window.confirm('Вы уверены, что хотите удалить это мероприятие?')) {
      try {
        await deleteEvent(eventId)
        await loadEvents()
      } catch (error) {
        console.error('Ошибка при удалении мероприятия:', error)
        alert('Ошибка при удалении мероприятия')
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingEvent) {
        await updateEvent(editingEvent.id, formData)
      } else {
        await createEvent(formData)
      }
      
      setIsModalOpen(false)
      await loadEvents()
    } catch (error) {
      console.error('Ошибка при сохранении мероприятия:', error)
      alert('Ошибка при сохранении мероприятия')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else if (name === 'tags') {
      const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag)
      setFormData(prev => ({ ...prev, tags }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleImageUpload = (imageUrl: string) => {
    setFormData(prev => ({ ...prev, imageUrl }))
  }

  if (loading) {
    return (
      <Container>
        <LoadingSpinner>Загрузка мероприятий...</LoadingSpinner>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Управление мероприятиями</Title>
        <Button $variant="primary" onClick={handleCreateEvent}>
          + Создать мероприятие
        </Button>
      </Header>

      {events.length === 0 ? (
        <EmptyState>
          <EmptyStateIcon>🎉</EmptyStateIcon>
          <EmptyStateTitle>Мероприятия не найдены</EmptyStateTitle>
          <EmptyStateText>Создайте первое мероприятие, чтобы начать работу</EmptyStateText>
        </EmptyState>
      ) : (
        <EventsGrid>
          {events.map((event) => (
            <EventCard key={event.id}>
              {event.imageUrl && (
                <EventImage src={event.imageUrl} alt={event.title} />
              )}
              <EventTitle>{event.title}</EventTitle>
              <EventInfo>
                <div><strong>Дата:</strong> {new Date(event.date).toLocaleDateString('ru-RU')}</div>
                <div><strong>Время:</strong> {event.time}</div>
                <div><strong>Место:</strong> {event.location || 'Не указано'}</div>
                <div><strong>Организатор:</strong> {event.organizer || 'Не указан'}</div>
                <div><strong>Макс. гостей:</strong> {event.maxGuests || 'Не указано'}</div>
                <div><strong>Статус:</strong> {event.isUpcoming ? 'Предстоящее' : 'Прошедшее'}</div>
              </EventInfo>
              <EventActions>
                <Button onClick={() => handleEditEvent(event)}>
                  Редактировать
                </Button>
                <Button $variant="danger" onClick={() => handleDeleteEvent(event.id)}>
                  Удалить
                </Button>
                {onEventSelect && (
                  <Button $variant="primary" onClick={() => onEventSelect(event)}>
                    Управлять зонами
                  </Button>
                )}
              </EventActions>
            </EventCard>
          ))}
        </EventsGrid>
      )}

      <Modal $isOpen={isModalOpen}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              {editingEvent ? 'Редактировать мероприятие' : 'Создать мероприятие'}
            </ModalTitle>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
          </ModalHeader>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Название мероприятия *</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Введите название мероприятия"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Описание *</Label>
              <TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Опишите мероприятие"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Дата *</Label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Время *</Label>
              <Input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Категория *</Label>
              <Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="party">Вечеринка</option>
                <option value="celebration">Празднование</option>
                <option value="corporate">Корпоратив</option>
                <option value="wedding">Свадьба</option>
                <option value="birthday">День рождения</option>
                <option value="other">Другое</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Место проведения</Label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Укажите место проведения"
              />
            </FormGroup>

            <FormGroup>
              <Label>Организатор</Label>
              <Input
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleInputChange}
                placeholder="Укажите организатора"
              />
            </FormGroup>

            <FormGroup>
              <Label>Максимальное количество гостей</Label>
              <Input
                type="number"
                name="maxGuests"
                value={formData.maxGuests}
                onChange={handleInputChange}
                min="1"
                max="1000"
              />
            </FormGroup>

            <FormGroup>
              <Label>Теги (через запятую)</Label>
              <Input
                type="text"
                name="tags"
                value={formData.tags?.join(', ') || ''}
                onChange={handleInputChange}
                placeholder="вечеринка, музыка, танцы"
              />
            </FormGroup>

            <FormGroup>
              <Label>Изображение</Label>
              <ImageUpload
                onImageUpload={handleImageUpload}
                currentImageUrl={formData.imageUrl}
              />
            </FormGroup>

            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                name="isUpcoming"
                checked={formData.isUpcoming}
                onChange={handleInputChange}
              />
              <CheckboxLabel>Предстоящее мероприятие</CheckboxLabel>
            </CheckboxContainer>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Button type="submit" $variant="primary">
                {editingEvent ? 'Сохранить изменения' : 'Создать мероприятие'}
              </Button>
              <Button type="button" onClick={() => setIsModalOpen(false)}>
                Отмена
              </Button>
            </div>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  )
}
