import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Event, EventZone, EventTable, eventTicketsApi, PaymentResponse } from '@/shared/api/event-tickets'
import { PaymentProcessor } from './PaymentProcessor'
import { EventZoneCanvas } from '@/features/events-management/components/EventZoneCanvas'
import { TableCanvas } from '@/features/events-management/components/TableCanvas'

interface TicketPurchaseFlowProps {
  event: Event
  onClose: () => void
  onSuccess: (ticket: any) => void
}

const Overlay = styled.div`
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

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  min-height: 800px;
  max-height: 1000px;
  margin-bottom: 2rem;
  border-radius: 16px;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    min-height: 600px;
    max-height: 800px;
  }
  
  @media (max-width: 768px) {
    aspect-ratio: none;
    min-height: 500px;
    max-height: 600px;
    height: 600px;
    overflow: auto;
    
    /* Улучшенная видимость скроллбара на планшетах */
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(139, 92, 246, 0.1);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(139, 92, 246, 0.5);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(139, 92, 246, 0.7);
    }
  }
  
  @media (max-width: 480px) {
    aspect-ratio: none;
    min-height: 500px;
    max-height: 600px;
    height: 600px;
    overflow: auto;
    
    /* Яркий скроллбар на маленьких экранах для лучшей видимости */
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(139, 92, 246, 0.15);
      border-radius: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(139, 92, 246, 0.6);
      border-radius: 5px;
      border: 2px solid rgba(42, 42, 62, 0.5);
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(139, 92, 246, 0.8);
    }
  }
`

const Modal = styled.div`
  background: linear-gradient(135deg, #2a2a3e 0%, #1e1e32 50%, #0a0a1a 100%);
  border-radius: 20px;
  width: 95vw;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(139, 92, 246, 0.3);
  position: relative;
  z-index: 1001;
  border: 2px solid rgba(139, 92, 246, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    pointer-events: none;
    border-radius: 20px;
  }
  
  @media (max-width: 768px) {
    width: 98vw;
    max-height: 90vh;
  }
`

const Header = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  position: relative;
  z-index: 1;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(139, 92, 246, 0.2);
    color: white;
    transform: scale(1.1);
  }
`

const EventTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
`

const EventDate = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`

const Content = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const Step = styled.div<{ active: boolean; completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${props => 
    props.active 
      ? 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)' 
      : props.completed 
        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
        : 'rgba(255, 255, 255, 0.1)'
  };
  color: ${props => 
    props.active || props.completed ? 'white' : 'rgba(255, 255, 255, 0.7)'
  };
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid ${props => 
    props.active || props.completed ? 'transparent' : 'rgba(139, 92, 246, 0.2)'
  };
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:not(:last-child) {
    margin-right: 1rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
  }
`

const StepNumber = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
`

// ===== КОМПОНЕНТ ВЫБОРА ЗОНЫ =====

const ZoneSelector = styled.div`
  margin-bottom: 2rem;
`

const ZoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`

const ZoneCard = styled.div<{ selected: boolean }>`
  border: 2px solid ${props => props.selected ? '#3b82f6' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.selected ? '#eff6ff' : 'white'};
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const ZoneName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
`

const ZonePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 0.5rem;
`

const ZoneDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
`

const ZoneSeats = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
`

// ===== КОМПОНЕНТ ВЫБОРА СТОЛА =====

const TableSelector = styled.div`
  margin-bottom: 2rem;
`

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 600 / 400;
  background: #f8f9fa;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  margin: 0 auto;
  overflow: hidden;
`

const TableCard = styled.div<{ 
  x: number; 
  y: number; 
  width: number; 
  height: number; 
  selected: boolean;
  available: boolean;
}>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${props => props.available ? '#ffffff' : '#f3f4f6'};
  border: 2px solid ${props => 
    props.selected ? '#3b82f6' : 
    props.available ? '#10b981' : '#d1d5db'
  };
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.available ? 'pointer' : 'not-allowed'};
  transition: all 0.2s;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.25rem;
  
  &:hover {
    ${props => props.available && `
      border-color: #3b82f6;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    `}
  }
`

const TableName = styled.div`
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
`

const TableSeats = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.7rem;
`

// ===== КОМПОНЕНТ ДАННЫХ КЛИЕНТА =====

const CustomerForm = styled.div`
  margin-bottom: 2rem;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: border-color 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(255, 255, 255, 0.15);
  }
  
  &:invalid {
    border-color: #dc2626;
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: border-color 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(255, 255, 255, 0.15);
  }
`

const FullWidthGroup = styled(FormGroup)`
  grid-column: 1 / -1;
`

// ===== КНОПКИ =====

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    
    &:hover {
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.9);
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`

export const TicketPurchaseFlow: React.FC<TicketPurchaseFlowProps> = ({ 
  event, 
  onClose, 
  onSuccess 
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedZone, setSelectedZone] = useState<EventZone | null>(null)
  const [selectedTable, setSelectedTable] = useState<EventTable | null>(null)
  
  const [zones, setZones] = useState<EventZone[]>([])
  const [zoneTables, setZoneTables] = useState<{ [zoneId: number]: EventTable[] }>({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paymentData, setPaymentData] = useState<PaymentResponse | null>(null)
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  // Создаем пустые функции один раз, чтобы избежать ререндеров
  const emptyZoneUpdate = useCallback(() => {}, [])
  const emptyZoneDoubleClick = useCallback(() => {}, [])
  const emptyZoneSelect = useCallback(() => {}, [])
  const emptyTableUpdate = useCallback(() => {}, [])
  const emptyTableDoubleClick = useCallback(() => {}, [])
  const emptyAddTable = useCallback(() => {}, [])

  // Загружаем зоны мероприятия
  useEffect(() => {
    const loadZones = async () => {
      try {
        const response = await eventTicketsApi.getZonesByEvent(event.id)
        if (response.success) {
          setZones(response.data)
        }
      } catch (error) {
        console.error('Ошибка загрузки зон:', error)
      }
    }

    loadZones()
  }, [event.id])

  // Загружаем столы для всех зон
  useEffect(() => {
    const loadAllTables = async () => {
      const tablesData: { [zoneId: number]: EventTable[] } = {}
      
      for (const zone of zones) {
        try {
          const response = await eventTicketsApi.getTablesByZone(zone.id)
          if (response.success) {
            tablesData[zone.id] = response.data
          }
        } catch (error) {
          console.error(`Ошибка загрузки столов для зоны ${zone.id}:`, error)
        }
      }
      
      setZoneTables(tablesData)
    }
    
    if (zones.length > 0) {
      loadAllTables()
    }
  }, [zones])

  const handleZoneSelect = (zoneId: number) => {
    const zone = zones.find(z => z.id === zoneId)
    if (zone) {
      setSelectedZone(zone)
      setSelectedTable(null)
    }
  }

  const handleTableSelect = (tableId: number) => {
    // Находим стол во всех зонах
    let foundTable: EventTable | null = null
    let foundZone: EventZone | null = null
    
    Object.keys(zoneTables).forEach(zoneId => {
      const zoneIdNum = parseInt(zoneId)
      const table = zoneTables[zoneIdNum].find(t => t.id === tableId)
      if (table) {
        foundTable = table
        foundZone = zones.find(z => z.id === zoneIdNum) || null
      }
    })
    
    if (foundTable && foundZone) {
      // Проверяем количество доступных мест
      const table = foundTable as any
      const soldTickets = table.tickets?.length || 0
      const availableSeats = table.seats - soldTickets
      const isFullyOccupied = availableSeats <= 0
      
      if (!isFullyOccupied) {
        setSelectedTable(foundTable)
        setSelectedZone(foundZone)
        setError(null) // Очищаем ошибки
        // НЕ переходим автоматически - пользователь должен нажать "Далее"
      } else {
        setError(`Все места за этим столом заняты (${soldTickets}/${table.seats})`)
      }
    }
  }


  const handleCustomerDataChange = (field: string, value: string) => {
    setCustomerData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePurchase = async () => {
    if (!selectedZone || !selectedTable) {
      setError('Пожалуйста, выберите зону и стол')
      return
    }

    setIsLoading(true)
    setError(null)
    try {
      const purchaseData = {
        eventId: event.id,
        zoneId: selectedZone.id,
        tableId: selectedTable.id,
        customerName: customerData.name,
        customerEmail: customerData.email,
        customerPhone: customerData.phone
      }

      console.log('🛒 Отправляем данные покупки:', purchaseData)
      const paymentResponse = await eventTicketsApi.purchaseTicket(purchaseData)
      console.log('🛒 Ответ от сервера:', paymentResponse)
      setPaymentData(paymentResponse)
      setCurrentStep(3) // Переходим к шагу оплаты
      console.log('🛒 Переходим к шагу 3 (оплата)')
    } catch (error) {
      console.error('🛒 Ошибка при покупке билета:', error)
      setError('Произошла ошибка при покупке билета')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePaymentSuccess = (ticketNumber: string) => {
    onSuccess({ ticketNumber, ...paymentData })
  }

  const handlePaymentFailure = (error: string) => {
    setError(`Ошибка оплаты: ${error}`)
    setCurrentStep(2) // Возвращаемся к форме
    setPaymentData(null)
  }

  const handlePaymentCancel = () => {
    setCurrentStep(2) // Возвращаемся к форме
    setPaymentData(null)
  }

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return selectedTable !== null
      case 2:
        return !!(customerData.name && customerData.email && customerData.phone)
      default:
        return false
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Выберите стол'
      case 2:
        return 'Ваши данные'
      default:
        return ''
    }
  }

  return (
    <Overlay onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseButton onClick={onClose}>×</CloseButton>
          <EventTitle>{event.title}</EventTitle>
          <EventDate>
            {new Date(event.date).toLocaleDateString('ru-RU')} в {event.time}
          </EventDate>
        </Header>

        <Content>
          <StepIndicator>
            <Step active={currentStep === 1} completed={currentStep > 1}>
              <StepNumber>1</StepNumber>
              Стол
            </Step>
            <Step active={currentStep === 2} completed={currentStep > 2}>
              <StepNumber>2</StepNumber>
              Данные
            </Step>
            <Step active={currentStep === 3} completed={currentStep > 3}>
              <StepNumber>3</StepNumber>
              Оплата
            </Step>
          </StepIndicator>

          <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>
            {getStepTitle()}
          </h3>

          {currentStep === 1 && (
            <>
              <div style={{ 
                color: '#fff', 
                marginBottom: '1rem', 
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                Выберите стол на схеме ниже, затем нажмите "Далее" для перехода к заполнению данных.
              </div>
              
              <CanvasWrapper>
                <EventZoneCanvas
                  zones={zones as any}
                  selectedZoneId={undefined}
                  onZoneSelect={emptyZoneSelect}
                  onZoneUpdate={emptyZoneUpdate}
                  onZoneDoubleClick={emptyZoneDoubleClick}
                  zoneTables={zoneTables}
                  selectedTableId={selectedTable?.id}
                  onTableSelect={handleTableSelect}
                  onTableUpdate={emptyTableUpdate}
                  onTableDoubleClick={emptyTableDoubleClick}
                  onAddTable={emptyAddTable}
                  isEditMode={false}
                />
              </CanvasWrapper>
            </>
          )}

          {currentStep === 2 && (
            <CustomerForm>
              <FormGrid>
                <FormGroup>
                  <Label>Имя и фамилия *</Label>
                  <Input
                    type="text"
                    value={customerData.name}
                    onChange={(e) => handleCustomerDataChange('name', e.target.value)}
                    placeholder="Введите ваше имя"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Телефон *</Label>
                  <Input
                    type="tel"
                    value={customerData.phone}
                    onChange={(e) => handleCustomerDataChange('phone', e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </FormGroup>
                
                <FullWidthGroup>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    value={customerData.email}
                    onChange={(e) => handleCustomerDataChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </FullWidthGroup>
              </FormGrid>
            </CustomerForm>
          )}

          {currentStep === 3 && paymentData && (
            <PaymentProcessor
              paymentData={paymentData}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentFailure={handlePaymentFailure}
              onCancel={handlePaymentCancel}
            />
          )}

          {error && (
            <div style={{ 
              color: '#ff6b6b', 
              backgroundColor: '#ffe0e0', 
              padding: '1rem', 
              borderRadius: '8px', 
              marginBottom: '1rem',
              border: '1px solid #ff6b6b'
            }}>
              {error}
            </div>
          )}

          {currentStep < 3 && (
            <ButtonGroup>
            {currentStep > 1 && (
              <Button onClick={() => setCurrentStep(currentStep - 1)}>
                Назад
              </Button>
            )}
            
            {currentStep < 2 ? (
              <Button 
                variant="primary"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceedToNextStep()}
              >
                Далее
              </Button>
            ) : (
              <Button 
                variant="primary"
                onClick={handlePurchase}
                disabled={!canProceedToNextStep() || isLoading}
              >
                {isLoading ? 'Покупка...' : `Купить за ${selectedZone?.price} ₽`}
              </Button>
            )}
          </ButtonGroup>
          )}
        </Content>
      </Modal>
    </Overlay>
  )
}

