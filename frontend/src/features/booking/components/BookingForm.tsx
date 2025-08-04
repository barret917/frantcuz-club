import React from 'react'
import styled from 'styled-components'
import { useBookingStore } from '../model/bookingStore'
import { Container } from '@/shared/ui/Container'

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

export const BookingForm: React.FC = () => {
  const { date, time, zoneId, tableId, setDate, setTime, setZoneId, setTableId } = useBookingStore()
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
    if (!zoneId) newErrors.push('Выберите зону')

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    }

    const data = {
      date,
      time,
      zoneId,
      tableId,
    }

    console.log('Отправляем на сервер:', data)
    setSuccess(true)
    
    // Сброс формы
    setDate(null)
    setTime(null)
    setZoneId(null)
    setTableId(null)
  }

  return (
    <Container>
      <FormWrapper>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#ffd700' }}>
          Бронирование
        </h2>

        <Form onSubmit={handleSubmit}>
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

          <FormItem>
            <Label>Зона</Label>
            <Select
              value={zoneId || ''}
              onChange={(e) => setZoneId(e.target.value)}
            >
              <option value="">Выберите зону</option>
              <option value="billiards">Бильярд</option>
              <option value="karaoke">Караоке</option>
              <option value="banquet">Банкетный зал</option>
              <option value="vip">VIP зона</option>
            </Select>
          </FormItem>

          <FormItem>
            <Label>Стол (опционально)</Label>
            <Select
              value={tableId || ''}
              onChange={(e) => setTableId(e.target.value)}
            >
              <option value="">Любой стол</option>
              <option value="table1">Стол 1</option>
              <option value="table2">Стол 2</option>
              <option value="table3">Стол 3</option>
            </Select>
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
            disabled={!date || !time || !zoneId}
          >
            Подтвердить бронирование
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  )
} 