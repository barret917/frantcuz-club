import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '@/shared/ui'

const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`

const FailureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #ef4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  
  &::after {
    content: '✕';
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => props.variant === 'primary' ? `
    background: #3b82f6;
    color: white;
    
    &:hover {
      background: #2563eb;
    }
  ` : `
    background: #f3f4f6;
    color: #374151;
    
    &:hover {
      background: #e5e7eb;
    }
  `}
`

const InfoBox = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
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

export const PaymentFailurePage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const bookingId = searchParams.get('booking_id')
  const eventId = searchParams.get('event_id')
  const banquetId = searchParams.get('banquet_id')
  const error = searchParams.get('error')

  const handleRetry = () => {
    if (bookingId) {
      navigate(`/booking?retry=${bookingId}`)
    } else if (eventId) {
      navigate(`/events?retry=${eventId}`)
    } else if (banquetId) {
      navigate(`/banquets?retry=${banquetId}`)
    } else {
      navigate('/')
    }
  }

  const handleGoHome = () => {
    navigate('/')
  }

  const getTitle = () => {
    if (bookingId) return 'Ошибка оплаты бронирования'
    if (eventId) return 'Ошибка покупки билета'
    if (banquetId) return 'Ошибка бронирования банкета'
    return 'Ошибка платежа'
  }

  const getMessage = () => {
    if (error) {
      return `Произошла ошибка: ${error}`
    }
    
    if (bookingId) return 'Не удалось обработать платеж за бронирование. Попробуйте еще раз или свяжитесь с нами.'
    if (eventId) return 'Не удалось обработать платеж за билет. Попробуйте еще раз или свяжитесь с нами.'
    if (banquetId) return 'Не удалось обработать платеж за банкет. Попробуйте еще раз или свяжитесь с нами.'
    return 'Произошла ошибка при обработке платежа. Попробуйте еще раз.'
  }

  return (
    <Container>
      <FailureContainer>
        <FailureIcon />
        <Title>{getTitle()}</Title>
        <Message>{getMessage()}</Message>
        
        {(bookingId || eventId || banquetId) && (
          <InfoBox>
            <InfoRow>
              <Label>Номер заказа:</Label>
              <Value>#{bookingId || eventId || banquetId}</Value>
            </InfoRow>
            <InfoRow>
              <Label>Дата:</Label>
              <Value>{new Date().toLocaleDateString('ru-RU')}</Value>
            </InfoRow>
          </InfoBox>
        )}
        
        <ButtonGroup>
          <Button variant="primary" onClick={handleRetry}>
            Попробовать снова
          </Button>
          <Button onClick={handleGoHome}>
            На главную
          </Button>
        </ButtonGroup>
      </FailureContainer>
    </Container>
  )
}

export default PaymentFailurePage
