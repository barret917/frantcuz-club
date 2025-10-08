import React, { useState } from 'react'
import styled from 'styled-components'
import { PaymentProcessor } from '@/shared/ui/PaymentProcessor'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  
  &:hover {
    color: #374151;
  }
`

export interface BookingPaymentModalProps {
  isOpen: boolean
  onClose: () => void
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
}

export const BookingPaymentModal: React.FC<BookingPaymentModalProps> = ({
  isOpen,
  onClose,
  bookingId,
  amount,
  deposit,
  customerInfo,
  onPaymentSuccess,
  onPaymentFailure,
}) => {
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePaymentSuccess = (paymentId: string) => {
    setIsProcessing(false)
    onPaymentSuccess(paymentId)
    onClose()
  }

  const handlePaymentFailure = (error: string) => {
    setIsProcessing(false)
    onPaymentFailure(error)
  }

  const handleCancel = () => {
    if (!isProcessing) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={handleCancel}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleCancel} disabled={isProcessing}>
          ×
        </CloseButton>
        <PaymentProcessor
          bookingId={bookingId}
          amount={amount}
          deposit={deposit}
          customerInfo={customerInfo}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentFailure={handlePaymentFailure}
          onCancel={handleCancel}
        />
      </ModalContent>
    </ModalOverlay>
  )
}

export default BookingPaymentModal
