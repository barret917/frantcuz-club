import React, { useState } from 'react'
import styled from 'styled-components'
import { createEventWithHall } from '@/shared/api/events'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
`

const Input = styled.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
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

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

const SuccessMessage = styled.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

interface CreateEventWithHallFormProps {
  onEventCreated: (hallId: number, eventId: number) => void;
}

export const CreateEventWithHallForm: React.FC<CreateEventWithHallFormProps> = ({ onEventCreated }) => {
  const [eventName, setEventName] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventStartsAt, setEventStartsAt] = useState('')
  const [eventEndsAt, setEventEndsAt] = useState('')
  const [hallName, setHallName] = useState('')
  const [hallDescription, setHallDescription] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!eventName.trim()) {
      setError('Название события обязательно')
      return
    }
    
    if (!eventStartsAt) {
      setError('Дата и время начала обязательны')
      return
    }
    
    if (!hallName.trim()) {
      setError('Название зала обязательно')
      return
    }
    
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      const response = await createEventWithHall({
        title: eventName,
        date: eventStartsAt,
        time: eventStartsAt.split('T')[1] || '19:00',
        description: eventDescription,
        category: 'event',
        isUpcoming: true,
        hallName: 'Новый зал',
        hallDescription: hallDescription
      })
      
      setSuccess('Событие и зал успешно созданы!')
      onEventCreated((response as any).hall.id, response.id)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка создания мероприятия с залом')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <h2 style={{ color: 'white', marginBottom: '2rem' }}>
        Создание мероприятия с новым залом
      </h2>
      
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Label>Название события *</Label>
          <Input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Введите название события"
            required
          />
        </FormItem>

        <FormItem>
          <Label>Описание события</Label>
          <TextArea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Описание события (необязательно)"
          />
        </FormItem>

        <FormItem>
          <Label>Дата и время начала *</Label>
          <Input
            type="datetime-local"
            value={eventStartsAt}
            onChange={(e) => setEventStartsAt(e.target.value)}
            required
          />
        </FormItem>

        <FormItem>
          <Label>Дата и время окончания</Label>
          <Input
            type="datetime-local"
            value={eventEndsAt}
            onChange={(e) => setEventEndsAt(e.target.value)}
          />
        </FormItem>

        <FormItem>
          <Label>Название зала *</Label>
          <Input
            type="text"
            value={hallName}
            onChange={(e) => setHallName(e.target.value)}
            placeholder="Введите название зала"
            required
          />
        </FormItem>

        <FormItem>
          <Label>Описание зала</Label>
          <TextArea
            value={hallDescription}
            onChange={(e) => setHallDescription(e.target.value)}
            placeholder="Описание зала (необязательно)"
          />
        </FormItem>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Создание...' : 'Создать мероприятие с залом'}
        </Button>
      </Form>
    </Container>
  )
}
