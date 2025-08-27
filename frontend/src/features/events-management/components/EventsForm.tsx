import React, { useState } from 'react'
import styled from 'styled-components'
import { eventsApi, CreateEventData, Event, eventUtils } from '@/shared/api/events'
import { ImageUpload } from '@/shared/ui/ImageUpload'

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 800px;
  margin: 0 auto;
`

const FormTitle = styled.h2`
  color: #667eea;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FormGroupFull = styled(FormGroup)`
  grid-column: 1 / -1;
`

const Label = styled.label`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.95rem;
`

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: white;
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Select = styled.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
  
  option {
    background: #2a2a2a;
    color: white;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #667eea;
`

const CheckboxLabel = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  cursor: pointer;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  background: ${({ $variant }) => 
    $variant === 'secondary' 
      ? 'transparent' 
      : 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)'
  };
  color: white;
  border: 2px solid ${({ $variant }) => 
    $variant === 'secondary' 
      ? 'rgba(255, 255, 255, 0.3)' 
      : 'transparent'
  };
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $variant }) => 
      $variant === 'secondary' 
        ? '0 5px 15px rgba(255, 255, 255, 0.2)' 
        : '0 5px 15px rgba(102, 126, 234, 0.4)'
    };
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const SuccessMessage = styled.div`
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #22c55e;
  text-align: center;
  margin-bottom: 1rem;
`

const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ef4444;
  text-align: center;
  margin-bottom: 1rem;
`

const DeleteButton = styled.button`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(239, 68, 68, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

interface EventFormData {
  title: string
  short_description: string | null
  description: string | null
  image_url: string | null
  event_date: string
  event_time: string
  event_location: string
  price: string
}

const initialFormData: EventFormData = {
  title: '',
  short_description: '',
  description: '',
  image_url: '',
  event_date: '',
  event_time: '',
  event_location: '',
  price: ''
}

interface EventsFormProps {
  event?: Event | null
  onSuccess?: () => void
  onCancel?: () => void
  mode?: 'create' | 'edit'
}

export const EventsForm: React.FC<EventsFormProps> = ({ 
  event, 
  onSuccess, 
  onCancel, 
  mode = 'create' 
}) => {
  const [formData, setFormData] = useState<EventFormData>(() => {
    if (event && mode === 'edit') {
      // Используем локальное время для отображения
      const eventDate = new Date(event.event_date)
      const dateString = eventDate.toISOString().split('T')[0]
      const timeString = eventDate.toTimeString().substring(0, 5)
      
      return {
        title: event.title,
        short_description: event.short_description,
        description: event.description,
        image_url: event.image_url,
        event_date: dateString,
        event_time: timeString,
        event_location: event.event_location,
        price: event.price
      }
    }
    return initialFormData
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  console.log('🚀 EventsForm компонент загружен')
  console.log('☁️ Проверяем Cloudinary переменные:')
  console.log('☁️ VITE_CLOUDINARY_CLOUD_NAME:', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
  console.log('☁️ VITE_CLOUDINARY_UPLOAD_PRESET:', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    console.log('📝 Изменение поля:', name, '=', value)
    
    setFormData(prev => {
      const newData = { ...prev, [name]: value }
      console.log('📝 Новые данные формы:', newData)
      return newData
    })
  }

  const handleImageUpload = (imageUrl: string) => {
    console.log('🖼️ === НАЧАЛО ЗАГРУЗКИ ИЗОБРАЖЕНИЯ ===')
    console.log('🖼️ Получен URL изображения:', imageUrl)
    
    setFormData(prev => {
      const newData = { ...prev, image_url: imageUrl }
      console.log('🖼️ Новые данные формы:', newData)
      return newData
    })
    
    console.log('🖼️ === КОНЕЦ ЗАГРУЗКИ ИЗОБРАЖЕНИЯ ===')
  }

  const handleImageRemove = () => {
    console.log('🗑️ === НАЧАЛО УДАЛЕНИЯ ИЗОБРАЖЕНИЯ ===')
    
    setFormData(prev => {
      const newData = { ...prev, image_url: '' }
      console.log('🗑️ Новые данные формы после удаления:', newData)
      return newData
    })
    
    console.log('🗑️ === КОНЕЦ УДАЛЕНИЯ ИЗОБРАЖЕНИЯ ===')
  }

  // Функция для совмещения даты и времени в формат ISO
  const combineDateTime = (date: string, time: string): string => {
    if (!date || !time) return ''
    
    // Создаем дату в локальном времени пользователя
    const dateTimeString = `${date}T${time}:00`
    console.log('🕐 Совмещаем дату и время:', dateTimeString)
    return dateTimeString
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🚀 Отправляем данные мероприятия:', formData)
    
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      // Совмещаем дату и время
      const combinedDateTime = combineDateTime(formData.event_date, formData.event_time)
      
      const eventData: CreateEventData = {
        title: formData.title,
        short_description: formData.short_description,
        description: formData.description,
        image_url: formData.image_url,
        event_date: combinedDateTime,
        event_location: formData.event_location,
        price: formData.price
      }

      console.log('🚀 Отправляем данные мероприятия:', eventData)
      console.log('🖼️ URL изображения:', eventData.image_url)
      console.log('📅 Полная дата события:', eventData.event_date)

      let response
      
      if (mode === 'edit' && event) {
        response = await eventsApi.updateEvent(event.id, eventData)
      } else {
        response = await eventsApi.createEvent(eventData)
      }
      
      if (response.success) {
        const message = mode === 'edit' 
          ? 'Мероприятие успешно обновлено!' 
          : 'Мероприятие успешно добавлено!'
        
        setSuccessMessage(response.message || message)
        
        if (mode === 'create') {
          setFormData(initialFormData)
        }
        
        // Вызываем колбэк при успехе
        if (onSuccess) {
          onSuccess()
        }
        
        // Очищаем сообщение через 3 секунды
        setTimeout(() => setSuccessMessage(''), 3000)
      } else {
        setErrorMessage(response.error || `Ошибка при ${mode === 'edit' ? 'обновлении' : 'добавлении'} мероприятия`)
      }
    } catch (error: any) {
      console.error(`Ошибка при ${mode === 'edit' ? 'обновлении' : 'создании'} мероприятия:`, error)
      setErrorMessage(
        error.response?.data?.error || 
        error.message || 
        `Ошибка при ${mode === 'edit' ? 'обновлении' : 'добавлении'} мероприятия. Попробуйте еще раз.`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!event || !confirm('Вы уверены, что хотите удалить это мероприятие?')) {
      return
    }

    setIsDeleting(true)
    setErrorMessage('')

    try {
      const response = await eventsApi.deleteEvent(event.id)
      
      if (response.success) {
        setSuccessMessage('Мероприятие успешно удалено!')
        
        // Вызываем колбэк при успехе
        if (onSuccess) {
          onSuccess()
        }
        
        // Очищаем сообщение через 3 секунды
        setTimeout(() => setSuccessMessage(''), 3000)
      } else {
        setErrorMessage(response.error || 'Ошибка при удалении мероприятия')
      }
    } catch (error: any) {
      console.error('Ошибка при удалении мероприятия:', error)
      setErrorMessage(
        error.response?.data?.error || 
        error.message || 
        'Ошибка при удалении мероприятия. Попробуйте еще раз.'
      )
    } finally {
      setIsDeleting(false)
    }
  }

  const handleReset = () => {
    setFormData(initialFormData)
    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
  }

  const isFormValid = formData.title && formData.event_date && formData.event_time && formData.description && formData.event_location

  return (
    <FormContainer>
      <FormTitle>
        {mode === 'edit' ? 'Редактировать мероприятие' : 'Добавить новое мероприятие'}
      </FormTitle>
      
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      
      <form onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <Label htmlFor="title">Название мероприятия *</Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Например: Караоке-вечер 'Звездный час'"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="event_location">Местоположение *</Label>
            <Input
              id="event_location"
              name="event_location"
              type="text"
              value={formData.event_location}
              onChange={handleInputChange}
              placeholder="Например: Главный зал, Банкетный зал и т.д."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="event_date">Дата проведения *</Label>
            <Input
              id="event_date"
              name="event_date"
              type="date"
              value={formData.event_date}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="event_time">Время проведения *</Label>
            <Input
              id="event_time"
              name="event_time"
              type="time"
              value={formData.event_time}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Стоимость</Label>
            <Input
              id="price"
              name="price"
              type="text"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Например: Бесплатно или 500 ₽"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="short_description">Краткое описание</Label>
            <Input
              id="short_description"
              name="short_description"
              type="text"
              value={formData.short_description || ''}
              onChange={handleInputChange}
              placeholder="Краткое описание мероприятия"
            />
          </FormGroup>

          <FormGroupFull>
            <Label htmlFor="description">Описание *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleInputChange}
              placeholder="Подробное описание мероприятия, что будет происходить, что включено в стоимость и т.д."
              required
            />
          </FormGroupFull>

          <FormGroupFull>
            <Label>Изображение мероприятия</Label>
            <ImageUpload
              onImageUpload={handleImageUpload}
              onImageRemove={handleImageRemove}
              currentImageUrl={formData.image_url || ''}
            />
            {formData.image_url && (
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <p style={{ color: '#28a745', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  ✅ Изображение загружено
                </p>
                <img 
                  src={formData.image_url} 
                  alt="Предпросмотр" 
                  style={{ 
                    maxWidth: '200px', 
                    maxHeight: '150px', 
                    borderRadius: '8px',
                    border: '2px solid #28a745'
                  }} 
                />
              </div>
            )}
          </FormGroupFull>
        </FormGrid>

        <ButtonGroup>
          <Button type="submit" disabled={!isFormValid || isSubmitting}>
            {isSubmitting 
              ? (mode === 'edit' ? 'Обновление...' : 'Добавление...') 
              : (mode === 'edit' ? 'Обновить мероприятие' : 'Добавить мероприятие')
            }
          </Button>
          
          {mode === 'edit' && event && (
            <DeleteButton 
              type="button" 
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? 'Удаление...' : 'Удалить'}
            </DeleteButton>
          )}
          
          <Button type="button" $variant="secondary" onClick={handleReset}>
            Очистить форму
          </Button>
          
          {mode === 'edit' && onCancel && (
            <Button type="button" $variant="secondary" onClick={handleCancel}>
              Отмена
            </Button>
          )}
        </ButtonGroup>
      </form>
    </FormContainer>
  )
}