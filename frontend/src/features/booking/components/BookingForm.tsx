import React from 'react'
import styled from 'styled-components'
import { useBookingStore } from '../model/bookingStore'
import { Container } from '@/shared/ui/Container'
import { Zone } from '@/shared/model/types'
import { ZoneItem } from '@/entities/zone-item/model/types'

const FormWrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 24px;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #fff;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &::placeholder {
    color: #888;
  }
`

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
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

interface BookingFormProps {
  selectedZone?: Zone | null
  selectedTable?: ZoneItem | null
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedZone, selectedTable }) => {
  const { date, time, setDate, setTime } = useBookingStore()
  const [errors, setErrors] = React.useState<string[]>([])
  const [success, setSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors([])
    setSuccess(false)

    // Валидация
    const newErrors: string[] = []
    if (!date) newErrors.push('Выберите дату')
    if (!time) newErrors.push('Выберите время')
    if (!selectedZone) newErrors.push('Зона не выбрана')

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    }

    const data = {
      date,
      time,
      zoneId: selectedZone?.id,
      tableId: selectedTable?.id,
    }

    console.log('Отправляем на сервер:', data)
    setSuccess(true)
    
    // Сброс формы
    setDate(null)
    setTime(null)
  }

  return (
    <Container>
      <FormWrapper>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#ffd700' }}>
          Бронирование
        </h2>

        <Form onSubmit={handleSubmit}>
          {selectedZone && (
            <FormItem>
              <Label>Выбранная зона</Label>
              <div style={{ 
                padding: '0.75rem', 
                background: '#333', 
                borderRadius: '6px', 
                color: '#ffd700',
                fontWeight: 'bold'
              }}>
                {selectedZone.name}
              </div>
            </FormItem>
          )}

          {selectedTable && (
            <FormItem>
              <Label>Выбранный стол</Label>
              <div style={{ 
                padding: '0.75rem', 
                background: '#333', 
                borderRadius: '6px', 
                color: '#ffd700',
                fontWeight: 'bold'
              }}>
                {selectedTable.label}
              </div>
            </FormItem>
          )}

          <FormItem>
            <Label>Дата</Label>
            <Input
              type="date"
              value={date || ''}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </FormItem>

          <FormItem>
            <Label>Время</Label>
            <Input
              type="time"
              value={time || ''}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormItem>

          {errors.length > 0 && (
            <div>
              {errors.map((error, index) => (
                <ErrorMessage key={index}>{error}</ErrorMessage>
              ))}
            </div>
          )}

          {success && (
            <SuccessMessage>Бронирование отправлено!</SuccessMessage>
          )}

          <SubmitButton
            type="submit"
            disabled={!date || !time || !selectedZone}
          >
            Подтвердить бронирование
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  )
} 