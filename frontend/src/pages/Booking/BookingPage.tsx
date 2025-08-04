import React, { useState } from 'react'
import { Header } from '@/widgets/Header'
import { Container } from '@/shared/ui/Container'
import { ZoneCard } from '@/shared/ui/ZoneCard'
import { BookingForm } from '@/features/booking'
import { TableGrid } from '@/features/table-selection/components/TableGrid'
import { getZones } from '@/shared/api/zones'
import { getZoneItems } from '@/shared/api/zone-items'
import { Zone } from '@/shared/model/types'
import { ZoneItem } from '@/entities/zone-item/model/types'
import styled from 'styled-components'

const BookingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

const BookingContent = styled.div`
  padding: 2rem 0;
`

const Title = styled.h1`
  text-align: center;
  color: #ffd700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const StepContainer = styled.div`
  margin-bottom: 3rem;
`

const StepTitle = styled.h2`
  color: #ffd700;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-auto-rows: 300px;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 10px;
    gap: 15px;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffd700;
  font-size: 1.2rem;
`

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ff6b6b;
  font-size: 1.2rem;
`

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const Step = styled.div<{ $active: boolean; $completed: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  font-weight: bold;
  background: ${props => props.$completed ? '#51cf66' : props.$active ? '#ffd700' : '#333'};
  color: ${props => props.$completed || props.$active ? '#000' : '#fff'};
  transition: all 0.3s ease;
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
      <Header />
      
      <Main>
        <Container>
          <BookingContent>
            <Title>Бронирование</Title>
            <Subtitle>
              Выберите зону и заполните форму для бронирования
            </Subtitle>

            <StepIndicator>
              <Step $active={currentStep === 1} $completed={currentStep > 1}>1</Step>
              <Step $active={currentStep === 2} $completed={currentStep > 2}>2</Step>
              <Step $active={currentStep === 3} $completed={false}>3</Step>
            </StepIndicator>

            {currentStep === 1 ? (
              <StepContainer>
                <StepTitle>Шаг 1: Выберите зону</StepTitle>
                
                {isLoading ? (
                  <LoadingContainer>Загрузка зон...</LoadingContainer>
                ) : error ? (
                  <ErrorContainer>{error}</ErrorContainer>
                ) : (
                  <Grid>
                    {zones.map((zone, index) => (
                      <div key={zone.id} onClick={() => handleZoneSelect(zone)}>
                        <ZoneCard 
                          zone={zone} 
                          $isFullWidth={index % 3 === 2} 
                        />
                      </div>
                    ))}
                  </Grid>
                )}
              </StepContainer>
            ) : currentStep === 2 ? (
              <StepContainer>
                <StepTitle>Шаг 2: Выберите стол</StepTitle>
                {selectedZone && (
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ color: '#ffd700', fontSize: '1.2rem' }}>
                      Зона: {selectedZone.name}
                    </p>
                    <button 
                      onClick={handleBackToZones}
                      style={{
                        background: 'transparent',
                        border: '1px solid #ffd700',
                        color: '#ffd700',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '1rem'
                      }}
                    >
                      ← Выбрать другую зону
                    </button>
                  </div>
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
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ color: '#ffd700', fontSize: '1.2rem' }}>
                      Зона: {selectedZone.name} | Стол: {selectedTable.name}
                    </p>
                    <button 
                      onClick={handleBackToTables}
                      style={{
                        background: 'transparent',
                        border: '1px solid #ffd700',
                        color: '#ffd700',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '1rem'
                      }}
                    >
                      ← Выбрать другой стол
                    </button>
                  </div>
                )}
                <BookingForm />
              </StepContainer>
            )}
          </BookingContent>
        </Container>
      </Main>
    </BookingPageContainer>
  )
} 