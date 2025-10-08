import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BookingTable, getTablesByZone } from '@/shared/api/booking'

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const BackButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1rem;
  
  &:hover {
    color: #374151;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
`

const HallInfo = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
`

const HallTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

const HallDetails = styled.div`
  color: #6b7280;
  font-size: 1rem;
`

const Legend = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LegendColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${props => props.color};
`

const LegendText = styled.span`
  color: #6b7280;
  font-size: 0.9rem;
`

const TablesContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 800 / 550;
  background: #f8f9fa;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  margin: 0 auto 2rem;
  overflow: hidden;
`

const TableCard = styled.div<{ 
  isSelected: boolean; 
  isAvailable: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${props => props.isAvailable ? '#ffffff' : '#f3f4f6'};
  border: 2px solid ${props => 
    props.isSelected ? '#3b82f6' : 
    props.isAvailable ? '#10b981' : '#d1d5db'
  };
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.isAvailable ? 'pointer' : 'not-allowed'};
  transition: all 0.2s;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.25rem;
  
  &:hover {
    ${props => props.isAvailable && `
      border-color: #3b82f6;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    `}
  }
`

const TableName = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.1rem;
  line-height: 1;
`

const TableInfo = styled.div`
  color: #6b7280;
  font-size: 0.6rem;
  line-height: 1;
`

const TransitionOverlay = styled.div<{ $isVisible: boolean }>`
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
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`

const TransitionContent = styled.div`
  text-align: center;
  color: white;
`

const TransitionSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #8b5cf6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const TransitionText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`

const ErrorMessage = styled.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #fecaca;
`

export interface BookingTableSelectorProps {
  zone: {
    id: number
    name: string
    pricePerHour: number
    openTime: string
    closeTime: string
  }
  onBookingCreated: (booking: any) => void
  onBack: () => void
}

export const BookingTableSelector: React.FC<BookingTableSelectorProps> = ({
  zone,
  onBookingCreated,
  onBack,
}) => {
  const navigate = useNavigate()
  const [tables, setTables] = useState<BookingTable[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedTable, setSelectedTable] = useState<BookingTable | null>(null)
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

  // Проверка на существование зоны
  if (!zone) {
    return (
      <Container>
        <Header>
          <BackButton onClick={onBack}>← Назад</BackButton>
          <Title>Ошибка: Зона не найдена</Title>
        </Header>
        <ErrorMessage>Зона не была передана в компонент</ErrorMessage>
      </Container>
    )
  }

  useEffect(() => {
    if (zone?.id) {
      loadTables()
    }
  }, [zone?.id])

  const loadTables = async () => {
    try {
      setLoading(true)
      setError(null)
      const tablesData = await getTablesByZone(zone.id)
      console.log('BookingTableSelector: Loaded tables:', tablesData)
      setTables(tablesData)
    } catch (error) {
      console.error('Error loading tables:', error)
      setError('Ошибка загрузки столов')
    } finally {
      setLoading(false)
    }
  }

  const handleTableSelect = (table: BookingTable) => {
    setSelectedTable(table)
    setIsTransitioning(true)
    
    // Сохраняем данные выбора
    const bookingData = {
      zone: zone,
      table: table
    }
    
    sessionStorage.setItem('bookingSelection', JSON.stringify(bookingData))
    
    // Плавный переход с задержкой
    setTimeout(() => {
      navigate('/booking/form')
    }, 2000)
  }

  if (loading) {
    return (
      <Container>
        <Header>
          <BackButton onClick={onBack}>← Назад</BackButton>
          <Title>Загрузка столов...</Title>
        </Header>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <Header>
          <BackButton onClick={onBack}>← Назад</BackButton>
          <Title>Ошибка загрузки столов</Title>
        </Header>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    )
  }

  if (tables.length === 0) {
    return (
      <Container>
        <Header>
          <BackButton onClick={onBack}>← Назад</BackButton>
          <Title>Нет доступных столов в этом зале</Title>
        </Header>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>← Назад</BackButton>
        <Title>Выберите стол</Title>
      </Header>

      <HallInfo>
        <HallTitle>{zone.name}</HallTitle>
        <HallDetails>
          {zone.pricePerHour} ₽ за бронирование • {zone.openTime} - {zone.closeTime}
        </HallDetails>
      </HallInfo>

      <Legend>
        <LegendItem>
          <LegendColor color="#10b981" />
          <LegendText>Доступен</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#3b82f6" />
          <LegendText>Выбран</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#d1d5db" />
          <LegendText>Недоступен</LegendText>
        </LegendItem>
      </Legend>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0, color: '#374151', fontSize: '1.1rem' }}>
          План зала - {zone.name}
        </h3>
        <p style={{ margin: '0.5rem 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
          Кликните на доступный стол для бронирования
        </p>
      </div>

      <TablesContainer>
        {tables.map(table => {
          console.log('BookingTableSelector: Rendering table:', {
            id: table.id,
            name: table.name,
            x: table.x,
            y: table.y,
            width: table.width,
            height: table.height,
            isActive: table.isActive
          })
          return (
            <TableCard
              key={table.id}
              isSelected={selectedTable?.id === table.id}
              isAvailable={table.isActive}
              x={table.x}
              y={table.y}
              width={table.width}
              height={table.height}
              onClick={() => table.isActive && handleTableSelect(table)}
            >
              <TableName>{table.name}</TableName>
              <TableInfo>{table.seats} мест</TableInfo>
            </TableCard>
          )
        })}
      </TablesContainer>

      <TransitionOverlay $isVisible={isTransitioning}>
        <TransitionContent>
          <TransitionSpinner />
          <TransitionText>Переход к форме бронирования...</TransitionText>
        </TransitionContent>
      </TransitionOverlay>
    </Container>
  )
}

export default BookingTableSelector
