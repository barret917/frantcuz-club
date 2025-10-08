import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Event, EventZone, EventTable, eventTicketsApi } from '@/shared/api/event-tickets'

interface EventZonesManagementProps {
  event: Event
  onClose: () => void
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

const Modal = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`

const Header = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
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

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
`

const Subtitle = styled.p`
  color: #6b7280;
  margin: 0;
`

const Content = styled.div`
  padding: 2rem;
`

const Tabs = styled.div`
  display: flex;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 2rem;
`

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  color: ${props => props.active ? '#3b82f6' : '#6b7280'};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#3b82f6' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
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
    background: #f3f4f6;
    color: #6b7280;
    
    &:hover {
      background: #e5e7eb;
      color: #374151;
    }
  `}
`

const ZonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const ZoneCard = styled.div`
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const ZoneName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
`

const ZonePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 0.75rem;
`

const ZoneDescription = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
`

const ZoneActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.85rem;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: #3b82f6;
          color: white;
          &:hover { background: #2563eb; }
        `
      case 'danger':
        return `
          background: #dc2626;
          color: white;
          &:hover { background: #b91c1c; }
        `
      default:
        return `
          background: #f3f4f6;
          color: #6b7280;
          &:hover { background: #e5e7eb; }
        `
    }
  }}
`

const CanvasContainer = styled.div`
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
  x: number; 
  y: number; 
  width: number; 
  height: number; 
  isActive: boolean;
}>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${props => props.isActive ? '#ffffff' : '#f3f4f6'};
  border: 2px solid ${props => props.isActive ? '#10b981' : '#d1d5db'};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.25rem;
  
  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`

const TableName = styled.div`
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
`

const TableSeats = styled.div`
  color: #6b7280;
  font-size: 0.7rem;
`

const FormModal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 1rem;
`

const FormModalContent = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`

const FormHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
`

const FormTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`

const FormBody = styled.div`
  padding: 2rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

const FormFooter = styled.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`

const LoadingState = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #6b7280;
  font-size: 1.1rem;
`

interface ZoneFormData {
  name: string
  description: string
  price: string
  maxSeats: string
}

const initialZoneFormData: ZoneFormData = {
  name: '',
  description: '',
  price: '',
  maxSeats: ''
}

export const EventZonesManagement: React.FC<EventZonesManagementProps> = ({ 
  event, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'zones' | 'tables'>('zones')
  const [zones, setZones] = useState<EventZone[]>([])
  const [tables, setTables] = useState<EventTable[]>([])
  const [selectedZone, setSelectedZone] = useState<EventZone | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showZoneForm, setShowZoneForm] = useState(false)
  const [editingZone, setEditingZone] = useState<EventZone | null>(null)
  const [zoneFormData, setZoneFormData] = useState<ZoneFormData>(initialZoneFormData)

  // Загружаем зоны мероприятия
  useEffect(() => {
    loadZones()
  }, [event.id])

  // Загружаем столы выбранной зоны
  useEffect(() => {
    if (selectedZone) {
      loadTables()
    }
  }, [selectedZone])

  const loadZones = async () => {
    try {
      setIsLoading(true)
      const response = await eventTicketsApi.getZonesByEvent(event.id)
      if (response.success) {
        setZones(response.data)
        if (response.data.length > 0 && !selectedZone) {
          setSelectedZone(response.data[0])
        }
      }
    } catch (error) {
      console.error('Ошибка загрузки зон:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadTables = async () => {
    if (!selectedZone) return

    try {
      setIsLoading(true)
      const response = await eventTicketsApi.getTablesByZone(selectedZone.id)
      if (response.success) {
        setTables(response.data)
      }
    } catch (error) {
      console.error('Ошибка загрузки столов:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateZone = () => {
    setEditingZone(null)
    setZoneFormData(initialZoneFormData)
    setShowZoneForm(true)
  }

  const handleEditZone = (zone: EventZone) => {
    setEditingZone(zone)
    setZoneFormData({
      name: zone.name,
      description: zone.description || '',
      price: zone.price.toString(),
      maxSeats: zone.maxSeats?.toString() || ''
    })
    setShowZoneForm(true)
  }

  const handleZoneInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setZoneFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleZoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const zoneData = {
        eventId: event.id,
        name: zoneFormData.name,
        description: zoneFormData.description,
        price: parseFloat(zoneFormData.price),
        maxSeats: zoneFormData.maxSeats ? parseInt(zoneFormData.maxSeats) : undefined
      }

      if (editingZone) {
        const response = await eventTicketsApi.updateZone(editingZone.id, zoneData)
        if (response.success) {
          await loadZones()
          setShowZoneForm(false)
        } else {
          alert(response.error || 'Ошибка при обновлении зоны')
        }
      } else {
        const response = await eventTicketsApi.createZone(zoneData)
        if (response.success) {
          await loadZones()
          setShowZoneForm(false)
        } else {
          alert(response.error || 'Ошибка при создании зоны')
        }
      }
    } catch (error) {
      console.error('Ошибка при сохранении зоны:', error)
      alert('Ошибка при сохранении зоны')
    }
  }

  const handleDeleteZone = async (zone: EventZone) => {
    if (!confirm(`Вы уверены, что хотите удалить зону "${zone.name}"?`)) {
      return
    }

    try {
      const response = await eventTicketsApi.deleteZone(zone.id)
      if (response.success) {
        await loadZones()
        if (selectedZone?.id === zone.id) {
          setSelectedZone(null)
        }
      } else {
        alert(response.error || 'Ошибка при удалении зоны')
      }
    } catch (error) {
      console.error('Ошибка при удалении зоны:', error)
      alert('Ошибка при удалении зоны')
    }
  }

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedZone) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Создаем новый стол
    const tableData = {
      zoneId: selectedZone.id,
      name: `Стол-${tables.length + 1}`,
      x: x - 50, // Центрируем относительно клика
      y: y - 40,
      width: 100,
      height: 80,
      seats: 4
    }

    eventTicketsApi.createTable(tableData)
      .then(response => {
        if (response.success) {
          loadTables()
        } else {
          alert(response.error || 'Ошибка при создании стола')
        }
      })
      .catch(error => {
        console.error('Ошибка при создании стола:', error)
        alert('Ошибка при создании стола')
      })
  }

  const handleTableClick = (table: EventTable) => {
    // Переключаем активность стола
    const updatedTable = {
      ...table,
      isActive: !table.isActive
    }

    eventTicketsApi.updateTable(table.id, updatedTable)
      .then(response => {
        if (response.success) {
          loadTables()
        } else {
          alert(response.error || 'Ошибка при обновлении стола')
        }
      })
      .catch(error => {
        console.error('Ошибка при обновлении стола:', error)
        alert('Ошибка при обновлении стола')
      })
  }

  const handleDeleteTable = async (table: EventTable) => {
    if (!confirm(`Вы уверены, что хотите удалить стол "${table.name}"?`)) {
      return
    }

    try {
      const response = await eventTicketsApi.deleteTable(table.id)
      if (response.success) {
        loadTables()
      } else {
        alert(response.error || 'Ошибка при удалении стола')
      }
    } catch (error) {
      console.error('Ошибка при удалении стола:', error)
      alert('Ошибка при удалении стола')
    }
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseButton onClick={onClose}>×</CloseButton>
          <Title>{event.title}</Title>
          <Subtitle>Управление зонами и столами</Subtitle>
        </Header>

        <Content>
          <Tabs>
            <Tab 
              active={activeTab === 'zones'} 
              onClick={() => setActiveTab('zones')}
            >
              Зоны ({zones.length})
            </Tab>
            <Tab 
              active={activeTab === 'tables'} 
              onClick={() => setActiveTab('tables')}
            >
              Столы ({tables.length})
            </Tab>
          </Tabs>

          {activeTab === 'zones' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ margin: 0, color: '#1a1a1a' }}>Зоны мероприятия</h3>
                <Button variant="primary" onClick={handleCreateZone}>
                  Создать зону
                </Button>
              </div>

              {isLoading ? (
                <LoadingState>Загружаем зоны...</LoadingState>
              ) : (
                <ZonesGrid>
                  {zones.map((zone) => (
                    <ZoneCard key={zone.id}>
                      <ZoneName>{zone.name}</ZoneName>
                      <ZonePrice>{zone.price} ₽</ZonePrice>
                      {zone.description && (
                        <ZoneDescription>{zone.description}</ZoneDescription>
                      )}
                      <ZoneActions>
                        <ActionButton onClick={() => handleEditZone(zone)}>
                          Редактировать
                        </ActionButton>
                        <ActionButton 
                          variant="danger" 
                          onClick={() => handleDeleteZone(zone)}
                        >
                          Удалить
                        </ActionButton>
                      </ZoneActions>
                    </ZoneCard>
                  ))}
                </ZonesGrid>
              )}
            </>
          )}

          {activeTab === 'tables' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#1a1a1a' }}>Столы зоны</h3>
                  {selectedZone && (
                    <p style={{ margin: '0.5rem 0 0 0', color: '#6b7280' }}>
                      Выбранная зона: {selectedZone.name}
                    </p>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {zones.map((zone) => (
                    <Button
                      key={zone.id}
                      variant={selectedZone?.id === zone.id ? 'primary' : 'secondary'}
                      onClick={() => setSelectedZone(zone)}
                    >
                      {zone.name}
                    </Button>
                  ))}
                </div>
              </div>

              {selectedZone ? (
                <>
                  <CanvasContainer onClick={handleCanvasClick}>
                    {tables.map((table) => (
                      <TableCard
                        key={table.id}
                        x={table.x}
                        y={table.y}
                        width={table.width}
                        height={table.height}
                        isActive={table.isActive}
                        onClick={() => handleTableClick(table)}
                        title={`${table.name} - ${table.seats} мест`}
                      >
                        <TableName>{table.name}</TableName>
                        <TableSeats>{table.seats} мест</TableSeats>
                      </TableCard>
                    ))}
                  </CanvasContainer>
                  
                  <p style={{ textAlign: 'center', color: '#6b7280', margin: '0 0 1rem 0' }}>
                    Кликните на пустом месте для создания нового стола
                  </p>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: '#6b7280' }}>
                  Выберите зону для управления столами
                </div>
              )}
            </>
          )}
        </Content>
      </Modal>

      <FormModal show={showZoneForm}>
        <FormModalContent onClick={(e) => e.stopPropagation()}>
          <FormHeader>
            <CloseButton onClick={() => setShowZoneForm(false)}>×</CloseButton>
            <FormTitle>
              {editingZone ? 'Редактировать зону' : 'Создать зону'}
            </FormTitle>
          </FormHeader>

          <form onSubmit={handleZoneSubmit}>
            <FormBody>
              <FormGroup>
                <Label>Название зоны *</Label>
                <Input
                  type="text"
                  name="name"
                  value={zoneFormData.name}
                  onChange={handleZoneInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Описание</Label>
                <TextArea
                  name="description"
                  value={zoneFormData.description}
                  onChange={handleZoneInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Цена (₽) *</Label>
                <Input
                  type="number"
                  name="price"
                  value={zoneFormData.price}
                  onChange={handleZoneInputChange}
                  min="0"
                  step="100"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Максимум мест</Label>
                <Input
                  type="number"
                  name="maxSeats"
                  value={zoneFormData.maxSeats}
                  onChange={handleZoneInputChange}
                  min="1"
                />
              </FormGroup>
            </FormBody>

            <FormFooter>
              <Button type="button" onClick={() => setShowZoneForm(false)}>
                Отмена
              </Button>
              <Button type="submit" variant="primary">
                {editingZone ? 'Обновить' : 'Создать'}
              </Button>
            </FormFooter>
          </form>
        </FormModalContent>
      </FormModal>
    </Overlay>
  )
}


