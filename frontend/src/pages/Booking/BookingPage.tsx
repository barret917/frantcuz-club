import React, { useState } from 'react'
import { ZoneCard } from '@/shared/ui/ZoneCard'
import { BookingForm } from '@/features/booking'
import { TableGrid } from '@/features/table-selection/components/TableGrid'
import { getZones } from '@/shared/api/zones'
import { getZoneItems } from '@/shared/api/zone-items'
import { Zone } from '@/shared/model/types'
import { ZoneItem } from '@/entities/zone-item/model/types'
import styled, { keyframes, css } from 'styled-components'

// Анимации
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`

const BookingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Main = styled.main`
  flex: 1;
  padding: 0;
`

const BookingContent = styled.div`
  padding: 3rem 0;
  animation: ${css`${fadeInUp} 0.8s ease-out`};
  width: 100%;
`

const Title = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${css`${fadeInUp} 1s ease-out`};
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
`

const Subtitle = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${css`${fadeInUp} 1.2s ease-out`};
  padding: 0 clamp(1rem, 3vw, 3rem);
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    margin-bottom: 2rem;
  }
`

const StepContainer = styled.div`
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${css`${fadeInUp} 0.8s ease-out`};
  width: 100%;
  
  @media (max-width: 768px) {
    padding: clamp(1.25rem, 3vw, 2rem);
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: clamp(1rem, 2vw, 1.5rem);
    border-radius: 12px;
  }
`

const StepTitle = styled.h2`
  color: #667eea;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${css`${slideInLeft} 0.8s ease-out`};
  
  @media (max-width: 768px) {
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 2.5vw, 1.6rem);
    margin-bottom: 1.25rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(0.75rem, 2vw, 1.5rem);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: clamp(0.5rem, 1.5vw, 1rem);
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(150px, 20vh, 200px);
  color: #667eea;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 500;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  padding: clamp(1.5rem, 3vw, 2rem);
  animation: ${css`${pulse} 2s ease-in-out infinite`};
  width: 100%;
`

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(150px, 20vh, 200px);
  color: #ef4444;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 500;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  padding: clamp(1.5rem, 3vw, 2rem);
  width: 100%;
`

const ZoneInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: clamp(1.25rem, 3vw, 1.5rem);
  background: rgba(102, 126, 234, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  animation: ${css`${fadeInUp} 0.6s ease-out`};
  width: 100%;
`

const ZoneInfoText = styled.p`
  color: #667eea;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: clamp(1rem, 2vw, 1.2rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  }
`

const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  background: ${props => props.$variant === 'primary' 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'transparent'
  };
  border: ${props => props.$variant === 'primary' 
    ? 'none' 
    : '2px solid #667eea'
  };
  color: ${props => props.$variant === 'primary' ? '#ffffff' : '#667eea'};
  padding: clamp(0.625rem, 2vw, 0.75rem) clamp(1.25rem, 3vw, 1.5rem);
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$variant === 'primary' 
      ? '0 10px 25px rgba(102, 126, 234, 0.4)' 
      : '0 8px 20px rgba(102, 126, 234, 0.3)'
    };
    background: ${props => props.$variant === 'primary' 
      ? 'linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%)' 
      : 'rgba(102, 126, 234, 0.1)'
    };
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: clamp(0.5rem, 1.5vw, 0.625rem) clamp(1rem, 2.5vw, 1.25rem);
    font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  }
  
  @media (max-width: 480px) {
    padding: clamp(0.5rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem);
    font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  }
`

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  width: 100%;
`

const Step = styled.div<{ $active: boolean; $completed: boolean }>`
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 clamp(0.5rem, 2vw, 1rem);
  font-weight: bold;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  background: ${props => props.$completed ? 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)' : props.$active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.$completed || props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
  border: ${props => props.$completed || props.$active ? 'none' : '2px solid rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$active ? '0 0 20px rgba(102, 126, 234, 0.4)' : 'none'};
  
  &:hover {
    transform: ${props => props.$active || props.$completed ? 'scale(1.1)' : 'scale(1.05)'};
    box-shadow: ${props => props.$active 
      ? '0 0 25px rgba(102, 126, 234, 0.6)' 
      : props.$completed 
      ? '0 0 25px rgba(81, 207, 102, 0.6)' 
      : '0 0 15px rgba(255, 255, 255, 0.2)'
    };
  }
  
  @media (max-width: 768px) {
    width: clamp(35px, 7vw, 45px);
    height: clamp(35px, 7vw, 45px);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    margin: 0 clamp(0.4rem, 1.5vw, 0.75rem);
  }
  
  @media (max-width: 480px) {
    width: clamp(30px, 6vw, 40px);
    height: clamp(30px, 6vw, 40px);
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    margin: 0 clamp(0.3rem, 1vw, 0.5rem);
  }
`

export const BookingPage: React.FC = () => {
  const [zones, setZones] = useState<Zone[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null)
  const [selectedTable, setSelectedTable] = useState<ZoneItem | null>(null)
  const [zoneItems, setZoneItems] = useState<ZoneItem[]>([])
  const [isLoadingTables, setIsLoadingTables] = useState(false)

  React.useEffect(() => {
    const fetchZones = async () => {
      try {
        setIsLoading(true)
        const data = await getZones()
        setZones(data)
      } catch (err) {
        setError('Ошибка загрузки зон')
      } finally {
        setIsLoading(false)
      }
    }

    fetchZones()
  }, [])

  const handleZoneSelect = async (zone: Zone) => {
    setSelectedZone(zone)
    setCurrentStep(2)
    setIsLoadingTables(true)
    
    try {
      // Загружаем реальные столы для выбранной зоны
      const zoneItems = await getZoneItems(zone.id)
      setZoneItems(zoneItems)
    } catch (error) {
      console.error('Ошибка загрузки столов зоны:', error)
      // Если не удалось загрузить, показываем пустой список
      setZoneItems([])
    } finally {
      setIsLoadingTables(false)
    }
  }

  const handleBackToZones = () => {
    setSelectedZone(null)
    setSelectedTable(null)
    setCurrentStep(1)
  }

  const handleTableSelect = (table: ZoneItem) => {
    setSelectedTable(table)
  }

  const handleContinueToBooking = () => {
    setCurrentStep(3)
  }

  const handleBackToTables = () => {
    setSelectedTable(null)
    setCurrentStep(2)
  }

  return (
    <BookingPageContainer>
      <div style={{ width: '100%' }}>
        <BookingContent>
          <Title>Бронирование</Title>
          <Subtitle>
            Выберите зал и заполните форму для бронирования
          </Subtitle>

          <StepIndicator>
            <Step $active={currentStep === 1} $completed={currentStep > 1}>1</Step>
            <Step $active={currentStep === 2} $completed={currentStep > 2}>2</Step>
            <Step $active={currentStep === 3} $completed={false}>3</Step>
          </StepIndicator>

          {currentStep === 1 ? (
            <StepContainer>
              <StepTitle>Шаг 1: Выберите зал</StepTitle>
              
              {isLoading ? (
                <LoadingContainer>Загрузка зон...</LoadingContainer>
              ) : error ? (
                <ErrorContainer>{error}</ErrorContainer>
              ) : (
                <Grid>
                  {Array.isArray(zones) && zones.length > 0 ? (
                    zones.map((zone, index) => (
                      <div key={zone.id} onClick={() => handleZoneSelect(zone)}>
                        <ZoneCard 
                          zone={zone} 
                          $isFullWidth={index % 3 === 2} 
                        />
                      </div>
                    ))
                  ) : (
                    <div style={{ 
                      textAlign: 'center', 
                      padding: '2rem',
                      color: '#ffd700',
                      fontSize: '1.2rem'
                    }}>
                      Зоны не найдены
                    </div>
                  )}
                </Grid>
              )}
            </StepContainer>
          ) : currentStep === 2 ? (
            <StepContainer>
              <StepTitle>Шаг 2: Выберите стол</StepTitle>
              {selectedZone && (
                <ZoneInfo>
                  <ZoneInfoText>
                    Зал: {selectedZone.name}
                  </ZoneInfoText>
                  <StyledButton 
                    onClick={handleBackToZones}
                    $variant="secondary"
                  >
                    ← Выбрать другой зал
                  </StyledButton>
                </ZoneInfo>
              )}
              {isLoadingTables ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '2rem',
                  color: '#ffd700',
                  fontSize: '1.2rem'
                }}>
                  Загрузка столов...
                </div>
              ) : (
                <TableGrid 
                  zoneItems={zoneItems}
                  onTableSelect={handleTableSelect}
                  selectedTable={selectedTable}
                  onContinue={handleContinueToBooking}
                />
              )}
            </StepContainer>
          ) : (
            <StepContainer>
              <StepTitle>Шаг 3: Заполните форму бронирования</StepTitle>
              {selectedZone && selectedTable && (
                <ZoneInfo>
                  <ZoneInfoText>
                    Зал: {selectedZone.name} | Стол: {selectedTable.label}
                  </ZoneInfoText>
                  <StyledButton 
                    onClick={handleBackToTables}
                    $variant="secondary"
                  >
                    ← Выбрать другой стол
                  </StyledButton>
                </ZoneInfo>
              )}
              {selectedZone && selectedTable && (
                <BookingForm 
                  selectedZone={selectedZone}
                  selectedTable={selectedTable}
                />
              )}
            </StepContainer>
          )}
        </BookingContent>
      </div>
    </BookingPageContainer>
  )
} 