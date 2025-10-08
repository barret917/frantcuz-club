import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/shared/ui'

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  
  &::after {
    content: '✓';
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`

const Message = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 500px;
`

const Button = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #2563eb;
  }
`

const InfoBox = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  max-width: 500px;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const Label = styled.span`
  color: #6b7280;
`

const Value = styled.span`
  color: #1a1a1a;
  font-weight: 500;
`

export const PaymentSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [bookingInfo, setBookingInfo] = useState<any>(null)

  const bookingId = searchParams.get('booking_id')
  const eventId = searchParams.get('event_id')
  const banquetId = searchParams.get('banquet_id')
  const paymentId = searchParams.get('payment_id')

  useEffect(() => {
    // Здесь можно загрузить информацию о бронировании/мероприятии
    // для отображения деталей
    if (bookingId) {
      // Загружаем информацию о бронировании
      setBookingInfo({ type: 'booking', id: bookingId })
    } else if (eventId) {
      // Загружаем информацию о мероприятии
      setBookingInfo({ type: 'event', id: eventId })
    } else if (banquetId) {
      // Загружаем информацию о банкете
      setBookingInfo({ type: 'banquet', id: banquetId })
    }
  }, [bookingId, eventId, banquetId])

  const handleContinue = () => {
    if (bookingId) {
      navigate('/booking')
    } else if (eventId) {
      navigate('/events')
    } else if (banquetId) {
      navigate('/banquets')
    } else {
      navigate('/')
    }
  }

  const getTitle = () => {
    if (bookingId) return 'Бронирование подтверждено!'
    if (eventId) return 'Билет приобретен!'
    if (banquetId) return 'Банкет забронирован!'
    return 'Платеж успешно выполнен!'
  }

  const getMessage = () => {
    if (bookingId) return 'Ваше бронирование стола было успешно подтверждено. Мы свяжемся с вами для уточнения деталей.'
    if (eventId) return 'Билет на мероприятие был успешно приобретен. Информация о мероприятии отправлена на ваш email.'
    if (banquetId) return 'Ваш банкет был успешно забронирован. Мы свяжемся с вами для уточнения деталей.'
    return 'Ваш платеж был успешно обработан.'
  }

  return (
    <Container>
      <SuccessContainer>
        <SuccessIcon />
        <Title>{getTitle()}</Title>
        <Message>{getMessage()}</Message>
        
        {bookingInfo && (
          <InfoBox>
            <InfoRow>
              <Label>Номер заказа:</Label>
              <Value>#{bookingInfo.id}</Value>
            </InfoRow>
            {paymentId && (
              <InfoRow>
                <Label>Номер платежа:</Label>
                <Value>#{paymentId}</Value>
              </InfoRow>
            )}
            <InfoRow>
              <Label>Дата:</Label>
              <Value>{new Date().toLocaleDateString('ru-RU')}</Value>
            </InfoRow>
          </InfoBox>
        )}
        
        <Button onClick={handleContinue}>
          Продолжить
        </Button>
      </SuccessContainer>
    </Container>
  )
}

export default PaymentSuccessPage
