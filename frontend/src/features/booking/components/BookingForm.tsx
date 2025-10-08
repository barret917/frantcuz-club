import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BookingType } from '@/shared/api/bookings'
import { getHalls, getZones, Hall, Zone, ZoneItem } from '@/shared/api/halls'
import { getZoneItems } from '@/shared/api/zone-items'

const FormContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
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
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

const FormTitle = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
  
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

const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  gap: 1rem;
  position: relative;
  z-index: 2;
`

const Step = styled.div<{ $active?: boolean; $completed?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.3s ease;
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.2);
  
  background: ${props => {
    if (props.$active) return 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)'
    if (props.$completed) return 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
    return 'rgba(34, 34, 34, 0.9)'
  }};
  
  color: ${props => {
    if (props.$active || props.$completed) return '#fff'
    return 'rgba(255, 255, 255, 0.7)'
  }};
  
  border: 1px solid ${props => {
    if (props.$active) return 'rgba(102, 126, 234, 0.4)'
    if (props.$completed) return 'rgba(34, 197, 94, 0.4)'
    return 'rgba(102, 126, 234, 0.2)'
  }};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  }
`

const StepLine = styled.div<{ $completed?: boolean }>`
  width: 80px;
  height: 2px;
  background: ${props => props.$completed 
    ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' 
    : 'rgba(102, 126, 234, 0.2)'
  };
  transition: all 0.3s ease;
`

const HallsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`

const HallCard = styled.div<{ $selected?: boolean }>`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.05), transparent);
    transition: left 0.4s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
  }
  
  border-color: ${props => props.$selected ? 'rgba(102, 126, 234, 0.4)' : 'rgba(102, 126, 234, 0.2)'};
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
`

const HallName = styled.h3`
  color: #fff;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
`

const HallInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const ZonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`

const ZoneCard = styled.div<{ $selected?: boolean }>`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.05), transparent);
    transition: left 0.4s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
  }
  
  border-color: ${props => props.$selected ? 'rgba(102, 126, 234, 0.4)' : 'rgba(102, 126, 234, 0.2)'};
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
`

const ZoneName = styled.h3`
  color: #fff;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
`

const ZoneInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`

const TableCard = styled.div<{ $selected?: boolean }>`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.05), transparent);
    transition: left 0.4s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
  }
  
  border-color: ${props => props.$selected ? 'rgba(102, 126, 234, 0.4)' : 'rgba(102, 126, 234, 0.2)'};
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
`

const TableName = styled.h3`
  color: #fff;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
`

const TableInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const TablePrice = styled.div`
  color: #22c55e;
  font-weight: bold;
  font-size: 1.1rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
          }
        `
      default:
        return `
          background: transparent;
          color: white;
          border: 2px solid rgba(102, 126, 234, 0.2);
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(102, 126, 234, 0.4);
            transform: translateY(-2px);
          }
        `
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  margin: 1rem 0;
  font-size: 1rem;
  position: relative;
  z-index: 2;
`

const SelectedInfo = styled.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  position: relative;
  z-index: 2;
`

const SelectedTitle = styled.h3`
  color: #8b5cf6;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`

const SelectedText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

export const BookingForm: React.FC = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedHall, setSelectedHall] = useState<Hall | null>(null)
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null)
  const [selectedTable, setSelectedTable] = useState<ZoneItem | null>(null)
  const [halls, setHalls] = useState<Hall[]>([])
  const [zones, setZones] = useState<Zone[]>([])
  const [tables, setTables] = useState<ZoneItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadHalls()
  }, [])

  const loadHalls = async () => {
    try {
      const hallsData = await getHalls()
      setHalls(hallsData)
    } catch (err) {
      setError('Ошибка загрузки залов')
    }
  }

  const loadZones = async (hallId: number) => {
    try {
      const zonesData = await getZones(hallId)
      setZones(zonesData)
    } catch (err) {
      setError('Ошибка загрузки зон')
    }
  }

  const loadTables = async (zoneId: number) => {
    try {
      const tablesData = await getZoneItems(zoneId)
      setTables(tablesData)
    } catch (err) {
      setError('Ошибка загрузки столов')
    }
  }

  const handleHallSelect = (hall: Hall) => {
    setSelectedHall(hall)
    setSelectedZone(null)
    setSelectedTable(null)
    setZones([])
    setTables([])
    loadZones(hall.id)
    setCurrentStep(2)
  }

  const handleZoneSelect = (zone: Zone) => {
    setSelectedZone(zone)
    setSelectedTable(null)
    setTables([])
    loadTables(zone.id)
    setCurrentStep(3)
  }

  const handleTableSelect = (table: ZoneItem) => {
    setSelectedTable(table)
    setCurrentStep(4)
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }


  return (
    <FormContainer>
      <FormTitle>Выбор стола</FormTitle>
      
      <StepIndicator>
        <Step $active={currentStep === 1} $completed={currentStep > 1}>1</Step>
        <StepLine $completed={currentStep > 1} />
        <Step $active={currentStep === 2} $completed={currentStep > 2}>2</Step>
        <StepLine $completed={currentStep > 2} />
        <Step $active={currentStep === 3} $completed={currentStep > 3}>3</Step>
        <StepLine $completed={currentStep > 3} />
      </StepIndicator>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {currentStep === 1 && (
        <>
          <HallsGrid>
            {halls.map((hall) => (
              <HallCard 
                key={hall.id} 
                $selected={selectedHall?.id === hall.id}
                onClick={() => handleHallSelect(hall)}
              >
                <HallName>{hall.name}</HallName>
                <HallInfo>{hall.description}</HallInfo>
              </HallCard>
            ))}
          </HallsGrid>
        </>
      )}

      {currentStep === 2 && (
        <>
          {selectedHall && (
            <SelectedInfo>
              <SelectedTitle>Выбранный зал:</SelectedTitle>
              <SelectedText>{selectedHall.name}</SelectedText>
            </SelectedInfo>
          )}
          
          <ZonesGrid>
            {zones.map((zone) => (
              <ZoneCard 
                key={zone.id} 
                $selected={selectedZone?.id === zone.id}
                onClick={() => handleZoneSelect(zone)}
              >
                <ZoneName>{zone.name}</ZoneName>
                <ZoneInfo>{zone.description}</ZoneInfo>
              </ZoneCard>
            ))}
          </ZonesGrid>
          
          <ButtonGroup>
            <Button onClick={handleBack}>Назад</Button>
          </ButtonGroup>
        </>
      )}

      {currentStep === 3 && (
        <>
          {selectedHall && (
            <SelectedInfo>
              <SelectedTitle>Выбранный зал:</SelectedTitle>
              <SelectedText>{selectedHall.name}</SelectedText>
            </SelectedInfo>
          )}
          
          {selectedZone && (
            <SelectedInfo>
              <SelectedTitle>Выбранная зона:</SelectedTitle>
              <SelectedText>{selectedZone.name}</SelectedText>
            </SelectedInfo>
          )}
          
          <TablesGrid>
            {tables.map((table) => (
              <TableCard 
                key={table.id} 
                $selected={selectedTable?.id === table.id}
                onClick={() => handleTableSelect(table)}
              >
                <TableName>{table.name}</TableName>
                <TableInfo>Мест: {table.capacity}</TableInfo>
                <TablePrice>{table.pricePerHour} ₽ за бронирование</TablePrice>
              </TableCard>
            ))}
          </TablesGrid>
          
          <ButtonGroup>
            <Button onClick={handleBack}>Назад</Button>
          </ButtonGroup>
        </>
      )}

    </FormContainer>
  )
}
