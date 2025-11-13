import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { createBooking, CreateBookingRequest } from '@/shared/api/booking'
import { PaymentModal } from '@/shared/ui/PaymentModal'

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem;
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
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

const FormTitle = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`

const SelectedInfo = styled.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  position: relative;
  z-index: 2;
`

const SelectedTitle = styled.h3`
  color: #8b5cf6;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`

const SelectedText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const Form = styled.form`
  position: relative;
  z-index: 2;
`

const FormGroup = styled.div`
  margin-bottom: 2rem;
`

const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: 1.1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
          }
        `
      default:
        return `
          background: transparent;
          color: white;
          border: 2px solid rgba(102, 126, 234, 0.2);
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(102, 126, 234, 0.4);
            transform: translateY(-2px);
          }
        `
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  margin: 1rem 0;
  font-size: 1rem;
  position: relative;
  z-index: 2;
`

const SuccessMessage = styled.div`
  color: #22c55e;
  text-align: center;
  margin: 1rem 0;
  font-size: 1rem;
  position: relative;
  z-index: 2;
`

const TransitionOverlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`

const TransitionContent = styled.div`
  text-align: center;
  color: white;
`

const TransitionSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #8b5cf6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const TransitionText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`

interface BookingSelection {
  hall: any;
  zone: any;
  table: any;
}

export const BookingFormPage: React.FC = () => {
  const navigate = useNavigate()
  const [bookingSelection, setBookingSelection] = useState<BookingSelection | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    bookingDate: '',
    bookingTime: '',
    duration: 2,
    notes: ''
  })

  useEffect(() => {
    // Получаем данные выбора из sessionStorage
    const selectionData = sessionStorage.getItem('bookingSelection')
    if (selectionData) {
      setBookingSelection(JSON.parse(selectionData))
    } else {
      // Если данных нет, перенаправляем на страницу выбора
      navigate('/booking')
    }
  }, [navigate])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!bookingSelection) return

    setLoading(true)
    setError(null)

    try {
      const bookingData: CreateBookingRequest = {
        tableId: bookingSelection.table.id,
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail,
        startTime: formData.bookingTime,
        endTime: `${parseInt(formData.bookingTime.split(':')[0]) + formData.duration}:${formData.bookingTime.split(':')[1]}`,
        totalAmount: bookingSelection.zone?.pricePerHour ?? 200
      }

      await createBooking(bookingData)
      setSuccess('Бронирование создано успешно!')
      setShowPaymentModal(true)
    } catch (err) {
      setError('Ошибка создания бронирования')
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    navigate('/booking')
  }

  if (!bookingSelection) {
    return <div>Загрузка...</div>
  }

  return (
    <FormContainer>
      <FormTitle>Информация о бронировании</FormTitle>
      
      <SelectedInfo>
        <SelectedTitle>Выбранный зал:</SelectedTitle>
        <SelectedText>{bookingSelection.zone?.name}</SelectedText>
      </SelectedInfo>
      
      <SelectedInfo>
        <SelectedTitle>Выбранный стол:</SelectedTitle>
        <SelectedText>{bookingSelection.table?.name} - {bookingSelection.zone?.pricePerHour} ₽ за бронирование</SelectedText>
      </SelectedInfo>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Ваше имя *</Label>
          <Input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            placeholder="Введите ваше имя"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Телефон *</Label>
          <Input
            type="tel"
            name="customerPhone"
            value={formData.customerPhone}
            onChange={handleInputChange}
            placeholder="+7 (999) 123-45-67"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Email *</Label>
          <Input
            type="email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleInputChange}
            placeholder="example@email.com"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Дата бронирования *</Label>
          <Input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Время *</Label>
          <Input
            type="time"
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Продолжительность (часы) *</Label>
          <Input
            type="number"
            min="1"
            max="8"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Дополнительные пожелания</Label>
          <Input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Особые требования или пожелания"
          />
        </FormGroup>

        <ButtonGroup>
          <Button type="button" onClick={handleBack}>Назад к выбору</Button>
          <Button type="submit" $variant="primary" disabled={loading}>
            {loading ? 'Создание...' : 'Забронировать'}
          </Button>
        </ButtonGroup>
      </Form>

      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          amount={bookingSelection.zone?.pricePerHour ?? 200}
          bookingId="temp-booking-id"
          onPayment={() => {}}
        />
      )}
    
    <TransitionOverlay $isVisible={isTransitioning}>
      <TransitionContent>
        <TransitionSpinner />
        <TransitionText>Обработка бронирования...</TransitionText>
      </TransitionContent>
    </TransitionOverlay>
    </FormContainer>
  )
}
