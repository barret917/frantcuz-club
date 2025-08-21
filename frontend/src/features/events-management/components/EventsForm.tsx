import React, { useState } from 'react'
import styled from 'styled-components'
import { eventsApi, CreateEventData } from '@/shared/api/events'
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

interface EventFormData {
  title: string
  date: string
  time: string
  description: string
  price: string
  category: string
  isUpcoming: boolean
  imageUrl: string
}

const initialFormData: EventFormData = {
  title: '',
  date: '',
  time: '',
  description: '',
  price: '',
  category: '',
  isUpcoming: true,
  imageUrl: ''
}

const categories = [
  'Караоке',
  'Бильярд',
  'Диско',
  'Игры',
  'Банкеты',
  'Кальян',
  'Фестиваль',
  'Турнир',
  'Мастер-класс',
  'Другое'
]

export const EventsForm: React.FC = () => {
  const [formData, setFormData] = useState<EventFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Логирование при монтировании компонента
  console.log('🚀 EventsForm компонент загружен')
  console.log('☁️ Проверяем Cloudinary переменные:')
  console.log('☁️ VITE_CLOUDINARY_CLOUD_NAME:', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
  console.log('☁️ VITE_CLOUDINARY_UPLOAD_PRESET:', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
  console.log('☁️ Все env переменные:', import.meta.env)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    console.log('📝 Изменение поля:', name, '=', value)
    
    setFormData(prev => {
      console.log('📝 Предыдущие данные формы:', prev)
      const newData = { ...prev, [name]: value }
      console.log('📝 Новые данные формы:', newData)
      return newData
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('☑️ Изменение чекбокса isUpcoming:', e.target.checked)
    
    setFormData(prev => {
      console.log('☑️ Предыдущие данные формы:', prev)
      const newData = { ...prev, isUpcoming: e.target.checked }
      console.log('☑️ Новые данные формы:', newData)
      return newData
    })
  }

  const handleImageUpload = (imageUrl: string) => {
    console.log('🖼️ === НАЧАЛО ЗАГРУЗКИ ИЗОБРАЖЕНИЯ ===')
    console.log('🖼️ Получен URL изображения:', imageUrl)
    console.log('🖼️ Тип URL:', typeof imageUrl)
    
    // Проверяем переменные окружения
    console.log('☁️ Cloudinary переменные:')
    console.log('☁️ VITE_CLOUDINARY_CLOUD_NAME:', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
    console.log('☁️ VITE_CLOUDINARY_UPLOAD_PRESET:', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
    
    if (imageUrl && typeof imageUrl === 'string') {
      console.log('🖼️ Длина URL:', imageUrl.length)
      console.log('🖼️ URL начинается с:', imageUrl.substring(0, 50) + '...')
    } else {
      console.log('🖼️ ВНИМАНИЕ: imageUrl не является строкой или пустой:', imageUrl)
    }
    
    setFormData(prev => {
      console.log('🖼️ Предыдущие данные формы:', prev)
      const newData = { ...prev, imageUrl }
      console.log('🖼️ Новые данные формы:', newData)
      console.log('🖼️ Новое значение imageUrl:', newData.imageUrl)
      return newData
    })
    
    console.log('🖼️ === КОНЕЦ ЗАГРУЗКИ ИЗОБРАЖЕНИЯ ===')
  }

  const handleImageRemove = () => {
    console.log('🗑️ === НАЧАЛО УДАЛЕНИЯ ИЗОБРАЖЕНИЯ ===')
    console.log('🗑️ Текущий imageUrl перед удалением:', formData.imageUrl)
    
    setFormData(prev => {
      console.log('🗑️ Предыдущие данные формы:', prev)
      const newData = { ...prev, imageUrl: '' }
      console.log('🗑️ Новые данные формы после удаления:', newData)
      return newData
    })
    
    console.log('🗑️ === КОНЕЦ УДАЛЕНИЯ ИЗОБРАЖЕНИЯ ===')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🚀 Отправляем данные мероприятия:', formData)
    
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const eventData: CreateEventData = {
        title: formData.title,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        price: formData.price || undefined,
        category: formData.category,
        isUpcoming: formData.isUpcoming,
        imageUrl: formData.imageUrl || undefined
      }

      console.log('🚀 Отправляем данные мероприятия:', eventData)
      console.log('🖼️ URL изображения:', eventData.imageUrl)

      const response = await eventsApi.createEvent(eventData)
      
      if (response.success) {
        setSuccessMessage(response.message || 'Мероприятие успешно добавлено!')
        setFormData(initialFormData)
        
        // Очищаем сообщение через 3 секунды
        setTimeout(() => setSuccessMessage(''), 3000)
      } else {
        setErrorMessage(response.error || 'Ошибка при добавлении мероприятия')
      }
    } catch (error: any) {
      console.error('Ошибка при создании мероприятия:', error)
      setErrorMessage(
        error.response?.data?.error || 
        error.message || 
        'Ошибка при добавлении мероприятия. Попробуйте еще раз.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData(initialFormData)
    setSuccessMessage('')
    setErrorMessage('')
  }

  const isFormValid = formData.title && formData.date && formData.time && formData.description && formData.category

  return (
    <FormContainer>
      <FormTitle>Добавить новое мероприятие</FormTitle>
      
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
            <Label htmlFor="category">Категория *</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Выберите категорию</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Дата *</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="time">Время *</Label>
            <Input
              id="time"
              name="time"
              type="text"
              value={formData.time}
              onChange={handleInputChange}
              placeholder="Например: 20:00 - 23:00"
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
            <Label htmlFor="isUpcoming">Статус мероприятия</Label>
            <CheckboxGroup>
              <Checkbox
                id="isUpcoming"
                name="isUpcoming"
                type="checkbox"
                checked={formData.isUpcoming}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="isUpcoming">
                Будущее мероприятие
              </CheckboxLabel>
            </CheckboxGroup>
          </FormGroup>

          <FormGroupFull>
            <Label htmlFor="description">Описание *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
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
              currentImageUrl={formData.imageUrl}
            />
            {formData.imageUrl && (
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <p style={{ color: '#28a745', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  ✅ Изображение загружено
                </p>
                <img 
                  src={formData.imageUrl} 
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
            {isSubmitting ? 'Добавление...' : 'Добавить мероприятие'}
          </Button>
          <Button type="button" $variant="secondary" onClick={handleReset}>
            Очистить форму
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  )
} 