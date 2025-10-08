import React, { useEffect } from 'react'
import styled from 'styled-components'

const NotificationWrapper = styled.div<{ $type: 'success' | 'error'; $isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  z-index: 10000;
  transform: translateX(${props => props.$isVisible ? '0' : '400px'});
  transition: transform 0.3s ease;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  background: ${props => props.$type === 'success' ? '#51cf66' : '#ff6b6b'};
  border-left: 4px solid ${props => props.$type === 'success' ? '#40c057' : '#fa5252'};
`

const Title = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`

const Message = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`

interface NotificationProps {
  type: 'success' | 'error'
  title: string
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export const Notification: React.FC<NotificationProps> = ({
  type,
  title,
  message,
  isVisible,
  onClose,
  duration = 3000
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  return (
    <NotificationWrapper $type={type} $isVisible={isVisible}>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </NotificationWrapper>
  )
} 