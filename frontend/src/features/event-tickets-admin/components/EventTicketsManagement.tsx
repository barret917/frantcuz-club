import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Event, eventTicketsApi } from '@/shared/api/event-tickets'
import { ImageUpload } from '@/shared/ui/ImageUpload'
import { EventZonesManagement } from './EventZonesManagement'
import { TicketsManagement } from './TicketsManagement'

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    
    &:hover {
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
  ` : `
    background: #f3f4f6;
    color: #6b7280;
    
    &:hover {
      background: #e5e7eb;
      color: #374151;
    }
  `}
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const EventCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const EventContent = styled.div`
  padding: 1.5rem;
`

const EventTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
`

const EventActions = styled.div`
  display: flex;
  gap: 0.5rem;
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

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`

const ModalHeader = styled.div`
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

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`

const ModalBody = styled.div`
  padding: 2rem;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const FullWidthGroup = styled(FormGroup)`
  grid-column: 1 / -1;
`

const Label = styled.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

const ModalFooter = styled.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
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

interface EventFormData {
  title: string
  description: string
  date: string
  time: string
  category: string
  imageUrl: string
  location: string
  organizer: string
  contactInfo: string
  maxGuests: string
  isUpcoming: boolean
}

const initialFormData: EventFormData = {
  title: '',
  description: '',
  date: '',
  time: '',
  category: 'Концерт',
  imageUrl: '',
  location: '',
  organizer: '',
  contactInfo: '',
  maxGuests: '',
  isUpcoming: true
}

export const EventTicketsManagement: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState<EventFormData>(initialFormData)
  const [showZonesManagement, setShowZonesManagement] = useState(false)
  const [selectedEventForZones, setSelectedEventForZones] = useState<Event | null>(null)
  const [showTicketsManagement, setShowTicketsManagement] = useState(false)
  const [selectedEventForTickets, setSelectedEventForTickets] = useState<Event | null>(null)

  // Загружаем мероприятия
  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await eventTicketsApi.getEvents()
      if (response.success) {
        setEvents(response.data)
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

  const handleCreateEvent = () => {
    setEditingEvent(null)
    setFormData(initialFormData)
    setShowModal(true)
  }

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event)
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date.split('T')[0], // Извлекаем только дату
      time: event.time,
      category: 'Концерт',
      imageUrl: event.imageUrl || '',
      location: event.location || '',
      organizer: event.organizer || '',
      contactInfo: event.contactInfo || '',
      maxGuests: event.maxGuests?.toString() || '',
      isUpcoming: event.isUpcoming
    })
    setShowModal(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleImageChange = (url: string) => {
    setFormData(prev => ({
      ...prev,
      imageUrl: url
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const eventData = {
        ...formData,
        maxGuests: formData.maxGuests ? parseInt(formData.maxGuests) : undefined
      }

      if (editingEvent) {
        const response = await eventTicketsApi.updateEvent(editingEvent.id, eventData)
        if (response.success) {
          await loadEvents()
          setShowModal(false)
        } else {
          alert(response.error || 'Ошибка при обновлении мероприятия')
        }
      } else {
        const response = await eventTicketsApi.createEvent(eventData)
        if (response.success) {
          await loadEvents()
          setShowModal(false)
        } else {
          alert(response.error || 'Ошибка при создании мероприятия')
        }
      }
    } catch (error) {
      console.error('Ошибка при сохранении мероприятия:', error)
      alert('Ошибка при сохранении мероприятия')
    }
  }

  const handleDeleteEvent = async (event: Event) => {
    if (!confirm(`Вы уверены, что хотите удалить мероприятие "${event.title}"?`)) {
      return
    }

    try {
      const response = await eventTicketsApi.deleteEvent(event.id)
      if (response.success) {
        await loadEvents()
      } else {
        alert(response.error || 'Ошибка при удалении мероприятия')
      }
    } catch (error) {
      console.error('Ошибка при удалении мероприятия:', error)
      alert('Ошибка при удалении мероприятия')
    }
  }

  const handleManageZones = (event: Event) => {
    setSelectedEventForZones(event)
    setShowZonesManagement(true)
  }

  const handleCloseZonesManagement = () => {
    setShowZonesManagement(false)
    setSelectedEventForZones(null)
  }

  const handleManageTickets = (event: Event) => {
    setSelectedEventForTickets(event)
    setShowTicketsManagement(true)
  }

  const handleCloseTicketsManagement = () => {
    setShowTicketsManagement(false)
    setSelectedEventForTickets(null)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <Container>
        <LoadingState>Загружаем мероприятия...</LoadingState>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <ErrorState>{error}</ErrorState>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Управление мероприятиями</Title>
        <Button variant="primary" onClick={handleCreateEvent}>
          Создать мероприятие
        </Button>
      </Header>

      <EventsGrid>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventImage 
              src={event.imageUrl || '/images/default-event.jpg'} 
              alt={event.title}
              onError={(e) => {
                e.currentTarget.src = '/images/default-event.jpg'
              }}
            />
            <EventContent>
              <EventTitle>{event.title}</EventTitle>
              
              <EventInfo>
                <InfoItem>
                  📅 {formatDate(event.date)} в {event.time}
                </InfoItem>
                {event.location && (
                  <InfoItem>
                    📍 {event.location}
                  </InfoItem>
                )}
                {event.organizer && (
                  <InfoItem>
                    👤 {event.organizer}
                  </InfoItem>
                )}
                <InfoItem>
                  🎭 Концерт
                </InfoItem>
                <InfoItem>
                  {event.isUpcoming ? '🟢 Предстоящее' : '🔴 Прошедшее'}
                </InfoItem>
              </EventInfo>

              <EventActions>
                <ActionButton onClick={() => handleEditEvent(event)}>
                  Редактировать
                </ActionButton>
                <ActionButton 
                  variant="primary" 
                  onClick={() => handleManageZones(event)}
                >
                  Зоны и столы
                </ActionButton>
                <ActionButton 
                  variant="primary" 
                  onClick={() => handleManageTickets(event)}
                >
                  Билеты
                </ActionButton>
                <ActionButton 
                  variant="danger" 
                  onClick={() => handleDeleteEvent(event)}
                >
                  Удалить
                </ActionButton>
              </EventActions>
            </EventContent>
          </EventCard>
        ))}
      </EventsGrid>

      <Modal show={showModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            <ModalTitle>
              {editingEvent ? 'Редактировать мероприятие' : 'Создать мероприятие'}
            </ModalTitle>
          </ModalHeader>

          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormGrid>
                <FormGroup>
                  <Label>Название *</Label>
                  <Input
                    type="text"
                    name="title"
                    value={formData.title}
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
                    <option value="Концерт">Концерт</option>
                    <option value="Вечеринка">Вечеринка</option>
                    <option value="Фестиваль">Фестиваль</option>
                    <option value="Выставка">Выставка</option>
                    <option value="Спорт">Спорт</option>
                    <option value="Другое">Другое</option>
                  </Select>
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
                  <Label>Место проведения</Label>
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Организатор</Label>
                  <Input
                    type="text"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Контактная информация</Label>
                  <Input
                    type="text"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Максимум гостей</Label>
                  <Input
                    type="number"
                    name="maxGuests"
                    value={formData.maxGuests}
                    onChange={handleInputChange}
                    min="1"
                  />
                </FormGroup>

                <FullWidthGroup>
                  <Label>Описание *</Label>
                  <TextArea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </FullWidthGroup>

                <FullWidthGroup>
                  <Label>Изображение</Label>
                  <ImageUpload
                    currentImageUrl={formData.imageUrl}
                    onImageUpload={handleImageChange}
                  />
                </FullWidthGroup>

                <FormGroup>
                  <Label>
                    <input
                      type="checkbox"
                      name="isUpcoming"
                      checked={formData.isUpcoming}
                      onChange={handleInputChange}
                    />
                    Предстоящее мероприятие
                  </Label>
                </FormGroup>
              </FormGrid>
            </ModalBody>

            <ModalFooter>
              <Button type="button" onClick={() => setShowModal(false)}>
                Отмена
              </Button>
              <Button type="submit" variant="primary">
                {editingEvent ? 'Обновить' : 'Создать'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {showZonesManagement && selectedEventForZones && (
        <EventZonesManagement
          event={selectedEventForZones}
          onClose={handleCloseZonesManagement}
        />
      )}

      {showTicketsManagement && selectedEventForTickets && (
        <TicketsManagement
          event={selectedEventForTickets}
          onClose={handleCloseTicketsManagement}
        />
      )}
    </Container>
  )
}
