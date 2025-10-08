import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import payKeeperService, { PayKeeperPaymentResponse } from '../../services/paykeeper'

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;
`

const PaymentInfo = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.1rem;
    color: #1a1a1a;
    border-top: 1px solid #e5e7eb;
    padding-top: 0.5rem;
  }
`

const Label = styled.span`
  color: #6b7280;
`

const Value = styled.span`
  color: #1a1a1a;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => props.variant === 'primary' ? `
    background: #3b82f6;
    color: white;
    
    &:hover:not(:disabled) {
      background: #2563eb;
    }
  ` : `
    background: #f3f4f6;
    color: #374151;
    
    &:hover:not(:disabled) {
      background: #e5e7eb;
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ErrorMessage = styled.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #fecaca;
`

const SuccessMessage = styled.div`
  background: #f0fdf4;
  color: #16a34a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #bbf7d0;
`

export interface PaymentProcessorProps {
  bookingId: string
  amount: number
  deposit: number
  customerInfo: {
    name: string
    email: string
    phone: string
  }
  onPaymentSuccess: (paymentId: string) => void
  onPaymentFailure: (error: string) => void
  onCancel: () => void
}

export const PaymentProcessor: React.FC<PaymentProcessorProps> = ({
  bookingId,
  amount,
  deposit,
  customerInfo,
  onPaymentSuccess,
  onPaymentFailure,
  onCancel,
}) => {
  const [payment, setPayment] = useState<PayKeeperPaymentResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle')

  const totalAmount = amount + deposit

  const handleCreatePayment = async () => {
    setLoading(true)
    setError(null)
    setStatus('processing')

    try {
      const paymentResponse = await payKeeperService.createBookingPayment(
        bookingId,
        totalAmount,
        customerInfo
      )
      
      setPayment(paymentResponse)
      
      // Открываем страницу оплаты в новом окне
      const paymentWindow = window.open(
        paymentResponse.payment_url,
        'paykeeper',
        'width=800,height=600,scrollbars=yes,resizable=yes'
      )

      if (!paymentWindow) {
        throw new Error('Не удалось открыть окно оплаты. Проверьте блокировщик всплывающих окон.')
      }

      // Проверяем статус платежа каждые 5 секунд
      const checkStatus = setInterval(async () => {
        try {
          const statusResponse = await payKeeperService.checkPaymentStatus(paymentResponse.id)
          
          if (statusResponse.status === 'success') {
            clearInterval(checkStatus)
            setStatus('success')
            onPaymentSuccess(paymentResponse.id)
            paymentWindow.close()
          } else if (statusResponse.status === 'failed' || statusResponse.status === 'cancelled') {
            clearInterval(checkStatus)
            setStatus('failed')
            onPaymentFailure('Платеж был отклонен или отменен')
            paymentWindow.close()
          }
        } catch (error) {
          console.error('Status check failed:', error)
        }
      }, 5000)

      // Очищаем интервал через 10 минут
      setTimeout(() => {
        clearInterval(checkStatus)
      }, 600000)

    } catch (error) {
      console.error('Payment creation failed:', error)
      setError(error instanceof Error ? error.message : 'Произошла ошибка при создании платежа')
      setStatus('failed')
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    onCancel()
  }

  if (status === 'success') {
    return (
      <Container>
        <Title>Платеж успешно выполнен!</Title>
        <SuccessMessage>
          Ваш платеж был успешно обработан. Бронирование подтверждено.
        </SuccessMessage>
        <Button onClick={handleCancel}>
          Закрыть
        </Button>
      </Container>
    )
  }

  if (status === 'failed') {
    return (
      <Container>
        <Title>Ошибка платежа</Title>
        <ErrorMessage>
          {error || 'Произошла ошибка при обработке платежа. Попробуйте еще раз.'}
        </ErrorMessage>
        <Button variant="primary" onClick={handleCreatePayment}>
          Попробовать снова
        </Button>
        <Button onClick={handleCancel} style={{ marginTop: '0.5rem' }}>
          Отменить
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <Title>Оплата бронирования</Title>
      
      <PaymentInfo>
        <InfoRow>
          <Label>Бронирование:</Label>
          <Value>#{bookingId}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Клиент:</Label>
          <Value>{customerInfo.name}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Email:</Label>
          <Value>{customerInfo.email}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Телефон:</Label>
          <Value>{customerInfo.phone}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Стоимость услуги:</Label>
          <Value>{amount} ₽</Value>
        </InfoRow>
        <InfoRow>
          <Label>Залог:</Label>
          <Value>{deposit} ₽</Value>
        </InfoRow>
        <InfoRow>
          <Label>К оплате:</Label>
          <Value>{totalAmount} ₽</Value>
        </InfoRow>
      </PaymentInfo>

      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}

      <Button 
        variant="primary" 
        onClick={handleCreatePayment}
        disabled={loading}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            Создание платежа...
          </>
        ) : (
          'Оплатить'
        )}
      </Button>
      
      <Button onClick={handleCancel} style={{ marginTop: '0.5rem' }}>
        Отменить
      </Button>
    </Container>
  )
}

export default PaymentProcessor
