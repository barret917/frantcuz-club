import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Event, eventUtils } from '@/shared/api/events'

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const modalSlideIn = keyframes`
  from {
    transform: translateY(-50px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: ${css`${modalFadeIn} 0.3s ease-out`};
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

const ModalContent = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  extreme-width: 900px;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  animation: ${css`${modalSlideIn} 0.4s ease-out`};
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(239, 68, 68, 0.3);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #ef4444;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(239, 68, 68, 0.5);
    transform: scale(1.1);
  }
`

const ModalImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`

const ModalBody = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
  flex: 1;
  min-width: 250px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    min-width: 100%;
  }
`

const ModalDate = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`

const ModalStatus = styled.div<{ status: 'upcoming' | 'past' | 'active' }>`
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  background: ${({ status }) => 
    status === 'active' ? 'rgba(34, 197, 94, 0.2)' :
    status === 'upcoming' ? 'rgba(59, 130, 246, 0.2)' :
    'rgba(107, 114, 128, 0.2)'
  };
  color: ${({ status }) => 
    status === 'active' ? '#22c55e' :
    status === 'upcoming' ? '#3b82f6' :
    '#6b7280'
  };
  border: 1px solid ${({ status }) => 
    status === 'active' ? 'rgba(34, 197, 94, 0.3)' :
    status === 'upcoming' ? 'rgba(59, 130, 246, 0.3)' :
    'rgba(107, 114, 128, 0.3)'
  };
  margin-bottom: 1.5rem;
  text-align: center;
`

const ModalDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
`

const ModalDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const ModalDetailItem = styled.div`
  extreme: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const DetailLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
`

const DetailValue = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: 600;
`

const ModalPrice = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%);
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.2);
`

const PriceLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const PriceValue = styled.div`
  color: #ffd700;
  font-size: 2rem;
  font-weight: 700;
`

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const BuyButton = styled.button`
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(34, 197, 94, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const QuantityButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const QuantityDisplay = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  min-width: 40px;
  text-align: center;
`

const RemoveButton = styled.button`
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.3);
  }
`

const CloseModalButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`

const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const CartTotal = styled.span`
  color: #ffd700;
  font-size: 1rem;
  font-weight: 600;
`

interface EventModalProps {
  event: Event
  isOpen: boolean
  onClose: () => void
  onAddToCart: (event: Event) => void
  onUpdateQuantity: (eventId: number, quantity: number) => void
  onRemoveFromCart: (eventId: number) => void
  cartItems: { event: Event; quantity: number }[]
}

export const EventModal: React.FC<EventModalProps> = ({ 
  event, 
  isOpen, 
  onClose, 
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
  cartItems
}) => {
  if (!isOpen) return null

  const status = eventUtils.getEventStatus(event)
  const eventImage = event.image_url || `https://via.placeholder.com/800x400/667eea/ffffff?text=${encodeURIComponent(event.title)}`

  // Находим текущее количество билетов в корзине для этого мероприятия
  const cartItem = cartItems.find(item => item.event.id === event.id)
  const quantityInCart = cartItem ? cartItem.quantity : 0

  const handleAddToCart = () => {
    onAddToCart(event)
  }

  const handleIncreaseQuantity = () => {
    onUpdateQuantity(event.id, quantityInCart + 1)
  }

  const handleDecreaseQuantity = () => {
    const newQuantity = quantityInCart - 1
    if (newQuantity > 0) {
      onUpdateQuantity(event.id, newQuantity)
    } else {
      onRemoveFromCart(event.id)
    }
  }

  const handleRemoveFromCart = () => {
    onRemoveFromCart(event.id)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getEventTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const parsePrice = (price: string): number => {
    if (price === 'Бесплатно' || !price) return 0
    const numericPrice = price.replace(/[^\d,]/g, '').replace(',', '.')
    return parseFloat(numericPrice) || 0
  }

  const getTotalPrice = (): number => {
    return parsePrice(event.price) * quantityInCart
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalImageContainer>
          <ModalImage 
            src={eventImage} 
            alt={event.title}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/800x400/667eea/ffffff?text=${encodeURIComponent(event.title)}`
            }}
          />
        </ModalImageContainer>
        
        <ModalBody>
          <ModalHeader>
            <ModalTitle>{event.title}</ModalTitle>
            <ModalDate>{formatDateTime(event.event_date)}</ModalDate>
          </ModalHeader>
          
          <ModalStatus status={status}>
            {status === 'active' ? '🎉 Сейчас идет' : 
             status === 'upcoming' ? '⏰ Предстоящее' : '✅ Прошедшее'}
          </ModalStatus>
          
          <ModalDescription>{event.description}</ModalDescription>
          
          <ModalDetails>
            <ModalDetailItem>
              <DetailLabel>📍 Место проведения</DetailLabel>
              <DetailValue>{event.event_location}</DetailValue>
            </ModalDetailItem>
            
            <ModalDetailItem>
              <DetailLabel>🕒 Время начала</DetailLabel>
              <DetailValue>{getEventTime(event.event_date)}</DetailValue>
            </ModalDetailItem>
            
            <ModalDetailItem>
              <DetailLabel>⏱️ Длительность</DetailLabel>
              <DetailValue>~6 часов</DetailValue>
            </ModalDetailItem>
          </ModalDetails>
          
          <ModalPrice>
            <PriceLabel>Стоимость входа</PriceLabel>
            <PriceValue>
              от {event.price === 'Бесплатно' || !event.price ? 'Бесплатно' : `${event.price} ₽`}
            </PriceValue>
            {quantityInCart > 0 && (
              <CartInfo>
                <CartTotal>
                  В корзине: {quantityInCart} шт. × {parsePrice(event.price).toLocaleString('ru-RU')} ₽ = {getTotalPrice().toLocaleString('ru-RU')} ₽
                </CartTotal>
              </CartInfo>
            )}
          </ModalPrice>
          
          <ModalActions>
            {status === 'upcoming' && (
              <>
                {quantityInCart === 0 ? (
                  <BuyButton onClick={handleAddToCart}>
                    🎫 Купить билет
                  </BuyButton>
                ) : (
                  <>
                    <QuantityControls>
                      <QuantityButton
                        onClick={handleDecreaseQuantity}
                        disabled={quantityInCart <= 1}
                      >
                        -
                      </QuantityButton>
                      <QuantityDisplay>{quantityInCart}</QuantityDisplay>
                      <QuantityButton onClick={handleIncreaseQuantity}>
                        +
                      </QuantityButton>
                    </QuantityControls>
                    <RemoveButton onClick={handleRemoveFromCart}>
                      Удалить
                    </RemoveButton>
                  </>
                )}
              </>
            )}
            <CloseModalButton onClick={onClose}>
              Закрыть
            </CloseModalButton>
          </ModalActions>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}