import React from 'react'
import styled from 'styled-components'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  amount: number
  onPayment: () => void
  description?: string
  onSuccess?: () => void
  onCancel?: () => void
  bookingId?: string
}

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
`

const Title = styled.h2`
  margin: 0 0 1rem 0;
  color: #333;
`

const Amount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 1rem 0;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  flex: 1;
  
  ${props => props.$primary ? `
    background: #3498db;
    color: white;
    
    &:hover {
      background: #2980b9;
    }
  ` : `
    background: #ecf0f1;
    color: #2c3e50;
    
    &:hover {
      background: #bdc3c7;
    }
  `}
`

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  amount,
  onPayment,
  description,
  onSuccess,
  onCancel
}) => {
  if (!isOpen) return null

  return (
    <ModalOverlay $isOpen={isOpen} onClick={() => { onCancel?.(); onClose(); }}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>Оплата</Title>
        <Amount>{amount} ₽</Amount>
        <ButtonGroup>
          <Button onClick={() => { onCancel?.(); onClose(); }}>Отмена</Button>
          <Button $primary onClick={() => { onSuccess?.(); onPayment(); }}>Оплатить</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}
