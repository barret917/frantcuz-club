import React, { useState } from 'react'
import styled from 'styled-components'
import { BookingZoneSelector } from '@/features/booking-zone-selection'
import { BookingTableSelector } from '@/features/booking-table-selection'
import { BookingZone, createBooking } from '@/shared/api/booking'

const Container = styled.div`
  min-height: 100vh;
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
  
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
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

const SuccessModal = styled.div`
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
  z-index: 1000;
`

const SuccessContent = styled.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  margin: 2rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  color: white;
  box-shadow: 0 8px 32px rgba(34, 197, 94, 0.3);
`

const SuccessTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
`

const SuccessMessage = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 2rem 0;
  line-height: 1.6;
`

const BookingDetails = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
`

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);

  &:last-child {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.1rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(102, 126, 234, 0.2);
    color: white;
  }
`

const CloseButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
`

type BookingStep = 'zone-selection' | 'table-selection' | 'success'

export const BookingFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('zone-selection')
  const [selectedZone, setSelectedZone] = useState<BookingZone | null>(null)
  const [selectedTable, setSelectedTable] = useState<any>(null)
  const [bookingDetails, setBookingDetails] = useState<any>(null)

  const handleZoneSelect = (zone: BookingZone) => {
    setSelectedZone(zone)
    setCurrentStep('table-selection')
  }

  const handleTableSelect = async (table: any) => {
    setSelectedTable(table)
    
    try {
      const bookingData = {
        tableId: table.id,
        customerName: 'Test Customer',
        customerPhone: '+7 (999) 123-45-67',
        customerEmail: 'test@example.com',
        startTime: '18:00',
        endTime: '20:00',
        totalAmount: 2000
      }

      const booking = await createBooking(bookingData)
      setBookingDetails(booking)
      setCurrentStep('success')
    } catch (error) {
      console.error('Error creating booking:', error)
    }
  }

  const handleCloseSuccess = () => {
    setCurrentStep('zone-selection')
    setSelectedZone(null)
    setSelectedTable(null)
    setBookingDetails(null)
  }

  return (
    <Container>
      <Content>
        <Title>Бронирование стола</Title>
        
        {currentStep === 'zone-selection' && (
          <BookingZoneSelector onZoneSelect={handleZoneSelect} />
        )}
        
        {currentStep === 'table-selection' && selectedZone && (
          <BookingTableSelector 
            zone={selectedZone} 
            onBookingCreated={handleTableSelect}
            onBack={() => setCurrentStep('zone-selection')}
          />
        )}
        
        {currentStep === 'success' && bookingDetails && (
          <SuccessModal>
            <SuccessContent>
              <SuccessIcon>✓</SuccessIcon>
              <SuccessTitle>Бронирование успешно создано!</SuccessTitle>
              <SuccessMessage>
                Ваш стол забронирован. Мы свяжемся с вами для подтверждения деталей.
              </SuccessMessage>
              
              <BookingDetails>
                <DetailRow>
                  <span>Зона:</span>
                  <span>{selectedZone?.name}</span>
                </DetailRow>
                <DetailRow>
                  <span>Стол:</span>
                  <span>{selectedTable?.name}</span>
                </DetailRow>
                <DetailRow>
                  <span>Дата:</span>
                  <span>{bookingDetails.bookingDate}</span>
                </DetailRow>
                <DetailRow>
                  <span>Время:</span>
                  <span>{bookingDetails.bookingTime}</span>
                </DetailRow>
                <DetailRow>
                  <span>Продолжительность:</span>
                  <span>{bookingDetails.duration} часа</span>
                </DetailRow>
                <DetailRow>
                  <span>Сумма:</span>
                  <span>{selectedTable?.pricePerHour * bookingDetails.duration} ₽</span>
                </DetailRow>
              </BookingDetails>
              
              <CloseButton onClick={handleCloseSuccess}>
                Закрыть
              </CloseButton>
            </SuccessContent>
          </SuccessModal>
        )}
      </Content>
    </Container>
  )
}
