import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { PaymentResponse } from '../../../shared/api/event-tickets'

interface PaymentProcessorProps {
  paymentData: PaymentResponse
  onPaymentSuccess: (ticketNumber: string) => void
  onPaymentFailure: (error: string) => void
  onCancel: () => void
}

const PaymentContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const PaymentHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const PaymentTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`

const PaymentSubtitle = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
`

const PaymentInfo = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const InfoLabel = styled.span`
  color: #6c757d;
  font-weight: 500;
`

const InfoValue = styled.span`
  color: #2c3e50;
  font-weight: 600;
`

const PriceValue = styled.span`
  color: #e74c3c;
  font-weight: 700;
  font-size: 1.1rem;
`

const PaymentActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

const PaymentButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.variant === 'primary' ? `
    background: #3498db;
    color: white;
    
    &:hover {
      background: #2980b9;
      transform: translateY(-2px);
    }
  ` : `
    background: #95a5a6;
    color: white;
    
    &:hover {
      background: #7f8c8d;
    }
  `}
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const StatusMessage = styled.div<{ type: 'success' | 'error' | 'info' }>`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  
  ${props => {
    switch (props.type) {
      case 'success':
        return `
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        `
      case 'error':
        return `
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        `
      case 'info':
        return `
          background: #d1ecf1;
          color: #0c5460;
          border: 1px solid #bee5eb;
        `
    }
  }}
`

export const PaymentProcessor: React.FC<PaymentProcessorProps> = ({
  paymentData,
  onPaymentSuccess,
  onPaymentFailure,
  onCancel
}) => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle')
  const [message, setMessage] = useState('')

  const handlePayment = async () => {
    setLoading(true)
    setStatus('processing')
    setMessage('Открываем страницу оплаты...')

    try {
      if (!paymentData.paymentUrl) {
        throw new Error('URL оплаты не найден')
      }

      // Открываем страницу оплаты в новом окне
      const paymentWindow = window.open(
        paymentData.paymentUrl,
        'paykeeper',
        'width=800,height=600,scrollbars=yes,resizable=yes'
      )

      if (!paymentWindow) {
        throw new Error('Не удалось открыть окно оплаты. Проверьте блокировщик всплывающих окон.')
      }

      // Проверяем статус платежа каждые 5 секунд (максимум 24 попытки = 2 минуты)
      let checkAttempts = 0
      const maxAttempts = 24
      
      const checkPaymentStatus = async () => {
        try {
          if (!paymentData.paymentId) {
            console.error('PaymentId is undefined')
            return
          }
          
          checkAttempts++
          console.log(`Проверка статуса платежа (попытка ${checkAttempts}/${maxAttempts})`)
          
          const response = await fetch(`/api/payment/status/${paymentData.paymentId}`)
          const data = await response.json()
          
          if (data.success && data.data.status === 'paid') {
            setStatus('success')
            setMessage('Платеж успешно выполнен!')
            paymentWindow.close()
            onPaymentSuccess(paymentData.ticketNumber)
          } else if (data.success && data.data.status === 'failed') {
            setStatus('failed')
            setMessage('Платеж не был выполнен')
            paymentWindow.close()
            onPaymentFailure('Платеж не был выполнен')
          } else if (checkAttempts < maxAttempts) {
            // Продолжаем проверку
            setTimeout(checkPaymentStatus, 5000)
          } else {
            setStatus('failed')
            setMessage('Время ожидания платежа истекло')
            paymentWindow.close()
          }
        } catch (error) {
          console.error('Ошибка при проверке статуса платежа:', error)
          if (checkAttempts < maxAttempts) {
            setTimeout(checkPaymentStatus, 5000)
          } else {
            setStatus('failed')
            setMessage('Ошибка при проверке статуса платежа')
            paymentWindow.close()
          }
        }
      }

      // Начинаем проверку через 10 секунд
      setTimeout(checkPaymentStatus, 10000)

    } catch (error) {
      setStatus('failed')
      setMessage(error instanceof Error ? error.message : 'Произошла ошибка')
      onPaymentFailure(error instanceof Error ? error.message : 'Произошла ошибка')
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB'
    }).format(price)
  }

  return (
    <PaymentContainer>
      <PaymentHeader>
        <PaymentTitle>Оплата билета</PaymentTitle>
        <PaymentSubtitle>Подтвердите данные и перейдите к оплате</PaymentSubtitle>
      </PaymentHeader>

      {status === 'success' && (
        <StatusMessage type="success">
          ✅ {message}
        </StatusMessage>
      )}

      {status === 'failed' && (
        <StatusMessage type="error">
          ❌ {message}
        </StatusMessage>
      )}

      {status === 'processing' && (
        <StatusMessage type="info">
          <LoadingSpinner />
          {message}
        </StatusMessage>
      )}

      <PaymentInfo>
        <InfoRow>
          <InfoLabel>Мероприятие:</InfoLabel>
          <InfoValue>{paymentData.event.title}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Зона:</InfoLabel>
          <InfoValue>{paymentData.zone.name}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Стол:</InfoLabel>
          <InfoValue>{paymentData.table.name}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Номер билета:</InfoLabel>
          <InfoValue>{paymentData.ticketNumber}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Сумма к оплате:</InfoLabel>
          <PriceValue>{formatPrice(paymentData.price)}</PriceValue>
        </InfoRow>
      </PaymentInfo>

      <PaymentActions>
        <PaymentButton variant="secondary" onClick={onCancel}>
          Отмена
        </PaymentButton>
        <PaymentButton 
          variant="primary" 
          onClick={handlePayment}
          disabled={loading || status === 'processing'}
        >
          {loading ? (
            <>
              <LoadingSpinner />
              Обработка...
            </>
          ) : (
            'Перейти к оплате'
          )}
        </PaymentButton>
      </PaymentActions>
    </PaymentContainer>
  )
}
