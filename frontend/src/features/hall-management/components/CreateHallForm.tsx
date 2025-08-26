import React, { useState } from 'react'
import styled from 'styled-components'
import { createHall, CreateHallData } from '@/shared/api/halls'
import { ImageUpload } from '@/shared/ui/ImageUpload'

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const FormTitle = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  font-size: 2rem;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  option {
    background: #333;
    color: #fff;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const SuccessMessage = styled.div`
  padding: 1rem;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  color: #22c55e;
  text-align: center;
  margin-bottom: 1rem;
`

const ErrorMessage = styled.div`
  padding: 1rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: #ef4444;
  text-align: center;
  margin-bottom: 1rem;
`

const hallTypes = [
  { value: 'restaurant', label: 'Ресторан' },
  { value: 'karaoke', label: 'Караоке' },
  { value: 'billiards', label: 'Бильярд' },
  { value: 'disco', label: 'Диско-бар' },
  { value: 'playstation', label: 'Playstation' },
  { value: 'bowling', label: 'Боулинг' },
  { value: 'spa', label: 'SPA' },
  { value: 'cinema', label: 'Кинотеатр' },
  { value: 'banquet', label: 'Банкетный зал' },
  { value: 'custom', label: 'Другое' }
]

interface CreateHallFormProps {
  onHallCreated?: () => void
}

export const CreateHallForm: React.FC<CreateHallFormProps> = ({ onHallCreated }) => {
  const [formData, setFormData] = useState<CreateHallData>({
    name: '',
    description: '',
    type: 'restaurant',
    imageUrl: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageUpload = (imageUrl: string) => {
    setFormData(prev => ({
      ...prev,
      imageUrl
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      setErrorMessage('Название зала обязательно')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      await createHall(formData)
      setSuccessMessage('Зал успешно создан!')
      setFormData({
        name: '',
        description: '',
        type: 'restaurant',
        imageUrl: ''
      })
      
      // Вызываем callback если он передан
      if (onHallCreated) {
        onHallCreated()
      }
    } catch (error) {
      console.error('Ошибка создания зала:', error)
      setErrorMessage('Ошибка создания зала. Попробуйте снова.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormContainer>
      <FormTitle>Создание нового зала</FormTitle>
      
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Название зала *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Введите название зала"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="type">Тип зала</Label>
          <Select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            {hallTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Описание</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Опишите особенности зала"
          />
        </FormGroup>

        <FormGroup>
          <Label>Фотография зала</Label>
          <ImageUpload
            onImageUpload={handleImageUpload}
            currentImageUrl={formData.imageUrl}
            onImageRemove={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Создание...' : 'Создать зал'}
        </SubmitButton>
      </form>
    </FormContainer>
  )
} 