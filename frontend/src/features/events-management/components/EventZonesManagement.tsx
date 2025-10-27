import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Event } from '@/shared/api/events'
import { eventZonesApi, EventZone, CreateEventZoneData } from '@/shared/api/event-zones'
import { eventTablesApi, EventTable, CreateEventTableData } from '@/shared/api/event-tables'
import { Button, Modal, ModalContent, ModalHeader, ModalTitle, CloseButton, Form, FormGroup, Label, Input, TextArea, Container, LoadingSpinner, EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateText } from '@/components/common'
import { useCrudOperations, useForm } from '@/hooks'
import { EventZoneCanvas } from './EventZoneCanvas'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

// Стилизованный компонент для модального окна, которое не блокирует канвас
const NonBlockingModal = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3); // Более прозрачный фон
  z-index: 1000;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  pointer-events: none; // Не блокирует клики
  
  & > * {
    pointer-events: auto; // Контент модалки кликабелен
  }
`

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const EventInfo = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`

const EventTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`

const EventDetails = styled.div`
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.5;
`

const ZonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const ZoneCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
  }
`

const ZoneTitle = styled.h4`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`

const ZoneInfo = styled.div`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`

const ZoneActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// EventZone interface is now imported from API

interface EventZonesManagementProps {
  event: Event
  onBack: () => void
  onManageTables?: (zoneId: number, zoneName: string) => void
}

export const EventZonesManagement: React.FC<EventZonesManagementProps> = ({ event, onBack, onManageTables }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingZone, setEditingZone] = useState<EventZone | null>(null)
  const [selectedZoneId, setSelectedZoneId] = useState<number | undefined>(undefined)
  const [viewMode, setViewMode] = useState<'list' | 'canvas'>('canvas')
  
  // Состояние для столов
  const [zoneTables, setZoneTables] = useState<{ [zoneId: number]: EventTable[] }>({})
  const [selectedTableId, setSelectedTableId] = useState<number | undefined>(undefined)
  const [isEditModeZones, setIsEditModeZones] = useState(false) // Режим редактирования зон
  const [isEditModeTables, setIsEditModeTables] = useState(false) // Режим редактирования столов
  const [isSaving, setIsSaving] = useState(false) // Статус сохранения
  const [lastSaved, setLastSaved] = useState<string | null>(null) // Время последнего сохранения
  
  console.log('🪑 EventZonesManagement: render, isEditModeZones:', isEditModeZones, 'isEditModeTables:', isEditModeTables, 'viewMode:', viewMode)
  const [isTableModalOpen, setIsTableModalOpen] = useState(false)
  const [editingTable, setEditingTable] = useState<EventTable | null>(null)

  // Используем общий хук для CRUD операций
  const crudOperations = useCrudOperations<EventZone>({
    onCreate: async (data) => {
      const response = await eventZonesApi.createEventZone(event.id, data)
      if (!response.success) throw new Error('Ошибка при создании зоны')
      return response.data
    },
    onUpdate: async (id, data) => {
      const response = await eventZonesApi.updateEventZone(event.id, id, data)
      if (!response.success) throw new Error('Ошибка при обновлении зоны')
      return response.data
    },
    onDelete: async (id) => {
      const response = await eventZonesApi.deleteEventZone(event.id, id)
      if (!response.success) throw new Error('Ошибка при удалении зоны')
    },
    onFetch: async () => {
      const response = await eventZonesApi.getEventZones(event.id)
      if (!response.success) throw new Error('Ошибка при загрузке зон')
      return response.data
    },
    onSuccess: (operation) => {
      if (operation === 'create' || operation === 'update' || operation === 'delete') {
        setIsModalOpen(false)
      }
    },
    onError: (operation, error) => {
      alert(`Ошибка при ${operation === 'create' ? 'создании' : operation === 'update' ? 'обновлении' : 'удалении'} зоны: ${error}`)
    }
  })

  // Используем общий хук для формы
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      maxSeats: 10,
      isActive: true,
      sortOrder: 1
    },
    validate: (values) => {
      const errors: Partial<Record<keyof typeof values, string>> = {}
      if (!values.name.trim()) errors.name = 'Название зоны обязательно'
      if (values.price <= 0) errors.price = 'Цена должна быть больше 0'
      if (values.maxSeats <= 0) errors.maxSeats = 'Количество мест должно быть больше 0'
      return errors
    },
    onSubmit: async (values) => {
      if (editingZone) {
        await crudOperations.update(editingZone.id, values)
      } else {
        await crudOperations.create({ ...values, eventId: event.id, x: 0, y: 0, width: 200, height: 150 })
      }
    }
  })

  // Загружаем зоны при изменении event.id
  useEffect(() => {
    crudOperations.refresh()
  }, [event.id])

  // Загружаем столы для всех зон
  useEffect(() => {
    const loadTables = async () => {
      const tablesData: { [zoneId: number]: EventTable[] } = {}
      for (const zone of crudOperations.items) {
        try {
          const response = await eventTablesApi.getTablesByZone(zone.id)
          if (response.success) {
            tablesData[zone.id] = response.data
          }
        } catch (error) {
          console.error(`Ошибка загрузки столов для зоны ${zone.id}:`, error)
        }
      }
      setZoneTables(tablesData)
    }
    
    if (crudOperations.items.length > 0) {
      loadTables()
    }
  }, [crudOperations.items])

  const handleCreateZone = () => {
    setEditingZone(null)
    form.actions.reset()
    form.actions.setValue('sortOrder', crudOperations.items.length + 1)
    setIsModalOpen(true)
  }

  const handleEditZone = (zone: EventZone) => {
    setEditingZone(zone)
    form.actions.setValue('name', zone.name)
    form.actions.setValue('description', zone.description)
    form.actions.setValue('price', zone.price)
    form.actions.setValue('maxSeats', zone.maxSeats)
    form.actions.setValue('isActive', zone.isActive)
    form.actions.setValue('sortOrder', zone.sortOrder)
    setIsEditModeZones(true) // Автоматически включаем режим редактирования зон
    setIsEditModeTables(false) // Отключаем режим редактирования столов
    setIsModalOpen(true)
  }

  const handleToggleZonesEdit = () => {
    setIsEditModeZones(!isEditModeZones)
    if (!isEditModeZones) {
      setIsEditModeTables(false) // Отключаем режим редактирования столов
    }
  }

  const handleToggleTablesEdit = () => {
    setIsEditModeTables(!isEditModeTables)
    if (!isEditModeTables) {
      setIsEditModeZones(false) // Отключаем режим редактирования зон
    }
  }

  const handleSaveChanges = async () => {
    try {
      setIsSaving(true)
      
      // Обновляем текущие изменения (они уже сохранены при перетаскивании)
      // Здесь мы просто обновляем список зон для получения актуальных данных
      await crudOperations.refresh()
      
      // Обновляем столы для всех зон
      for (const zone of crudOperations.items) {
        try {
          const response = await eventTablesApi.getTablesByZone(zone.id)
          if (response.success) {
            setZoneTables(prev => ({
              ...prev,
              [zone.id]: response.data
            }))
          }
        } catch (error) {
          console.error(`Ошибка загрузки столов для зоны ${zone.id}:`, error)
        }
      }
      
      // Деактивируем все режимы редактирования
      setIsEditModeZones(false)
      setIsEditModeTables(false)
      
      // Устанавливаем время сохранения
      setLastSaved(new Date().toLocaleTimeString('ru-RU'))
      
      // Показываем сообщение об успехе
      setTimeout(() => {
        setIsSaving(false)
      }, 500)
      
    } catch (error) {
      console.error('Ошибка при сохранении изменений:', error)
      setIsSaving(false)
      alert('Ошибка при сохранении изменений')
    }
  }

  const handleDeleteZone = async (zoneId: number) => {
    if (window.confirm('Вы уверены, что хотите удалить эту зону?')) {
      await crudOperations.delete(zoneId)
    }
  }

  const handleManageTables = (zoneId: number) => {
    // Находим зону по ID
    const zone = crudOperations.items.find(z => z.id === zoneId)
    if (zone) {
      if (onManageTables) {
        // Вызываем callback для перехода к управлению столами
        onManageTables(zoneId, zone.name)
      } else {
        // Fallback: показываем информацию о зоне
        console.log('Переход к управлению столами для зоны:', zone.name)
        alert(`Переход к управлению столами для зоны: ${zone.name}\nID: ${zoneId}`)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await form.actions.submit()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      form.actions.setFieldValue(name as keyof typeof form.values, checked)
    } else if (type === 'number') {
      form.actions.setFieldValue(name as keyof typeof form.values, Number(value))
    } else {
      form.actions.setFieldValue(name as keyof typeof form.values, value)
    }
  }

  const handleZoneSelect = (zoneId: number) => {
    setSelectedZoneId(zoneId)
  }

  const handleZoneUpdate = async (zoneId: number, updates: Partial<EventZone>) => {
    try {
      await crudOperations.update(zoneId, updates)
    } catch (error) {
      console.error('Ошибка при обновлении зоны:', error)
    }
  }

  const handleZoneDoubleClick = (zoneId: number) => {
    const zone = crudOperations.items.find(z => z.id === zoneId)
    if (zone) {
      setEditingZone(zone)
    }
  }

  // Обработчики для столов
  const handleTableSelect = (tableId: number) => {
    setSelectedTableId(tableId)
  }

  const handleTableUpdate = async (tableId: number, updates: Partial<EventTable>) => {
    try {
      const response = await eventTablesApi.updateTable(tableId, updates)
      if (response.success) {
        // Обновляем локальное состояние
        setZoneTables(prev => {
          const newTables = { ...prev }
          Object.keys(newTables).forEach(zoneId => {
            const zoneIdNum = parseInt(zoneId)
            const tableIndex = newTables[zoneIdNum].findIndex(t => t.id === tableId)
            if (tableIndex !== -1) {
              newTables[zoneIdNum] = [...newTables[zoneIdNum]]
              newTables[zoneIdNum][tableIndex] = { ...newTables[zoneIdNum][tableIndex], ...updates }
            }
          })
          return newTables
        })
      }
    } catch (error) {
      console.error('Ошибка при обновлении стола:', error)
    }
  }

  const handleTableDoubleClick = (tableId: number) => {
    // Находим стол во всех зонах
    let foundTable: EventTable | null = null
    Object.values(zoneTables).forEach(tables => {
      const table = tables.find(t => t.id === tableId)
      if (table) foundTable = table
    })
    
    if (foundTable) {
      setEditingTable(foundTable)
      setIsTableModalOpen(true)
    }
  }

  const handleAddTable = (zoneId: number) => {
    console.log('🪑 Frontend: handleAddTable вызван для зоны:', zoneId)
    setEditingTable(null)
    setIsTableModalOpen(true)
    // Сохраняем zoneId для создания нового стола
    setSelectedZoneId(zoneId)
    console.log('🪑 Frontend: Модальное окно открыто, selectedZoneId:', zoneId)
  }

  if (crudOperations.loading) {
    return (
      <Container>
        <LoadingSpinner>Загрузка зон...</LoadingSpinner>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <div>
          <Button onClick={onBack} style={{ marginRight: '1rem' }}>
            ← Назад к мероприятиям
          </Button>
          <Title>Управление зонами</Title>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button 
              $variant={viewMode === 'canvas' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('canvas')}
            >
              🎯 Канвас
            </Button>
            <Button 
              $variant={viewMode === 'list' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('list')}
            >
              📋 Список
            </Button>
          </div>
          <Button $variant="primary" onClick={handleCreateZone}>
            + Создать зону
          </Button>
        </div>
      </Header>

      <EventInfo>
        <EventTitle>{event.title}</EventTitle>
        <EventDetails>
          <div><strong>Дата:</strong> {new Date(event.date).toLocaleDateString('ru-RU')}</div>
          <div><strong>Время:</strong> {event.time}</div>
          <div><strong>Место:</strong> {event.location || 'Не указано'}</div>
        </EventDetails>
      </EventInfo>

      {viewMode === 'canvas' ? (
        <div>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button 
              $variant={isEditModeZones ? 'primary' : 'secondary'}
              onClick={handleToggleZonesEdit}
              style={{ flex: '1', minWidth: '180px' }}
              disabled={isSaving}
            >
              {isEditModeZones ? '✅ Редактировать зоны' : '✏️ Редактировать зоны'}
            </Button>
            <Button 
              $variant={isEditModeTables ? 'primary' : 'secondary'}
              onClick={handleToggleTablesEdit}
              style={{ flex: '1', minWidth: '180px' }}
              disabled={isSaving}
            >
              {isEditModeTables ? '✅ Редактировать столы' : '🪑 Редактировать столы'}
            </Button>
            <Button 
              $variant={isEditModeZones || isEditModeTables ? 'success' : 'secondary'}
              onClick={handleSaveChanges}
              style={{ flex: '1', minWidth: '180px' }}
              disabled={!isEditModeZones && !isEditModeTables || isSaving}
            >
              {isSaving ? '💾 Сохранение...' : isEditModeZones || isEditModeTables ? '💾 Сохранить изменения' : '💾 Изменения сохранены'}
            </Button>
            {lastSaved && (
              <span style={{ 
                color: '#4caf50', 
                fontSize: '0.85rem', 
                width: '100%', 
                textAlign: 'center',
                marginTop: '0.5rem',
                fontWeight: 600
              }}>
                ✓ Сохранено в {lastSaved}
              </span>
            )}
            {(isEditModeZones || isEditModeTables) && (
              <span style={{ color: '#a0a0a0', fontSize: '0.9rem', width: '100%', marginTop: '0.5rem' }}>
                {isEditModeZones && '💡 Можно перетаскивать и изменять размер зон'}
                {isEditModeTables && '💡 Можно перетаскивать и добавлять столы внутри зон'}
              </span>
            )}
          </div>
          <EventZoneCanvas
            zones={crudOperations.items}
            selectedZoneId={selectedZoneId}
            onZoneSelect={handleZoneSelect}
            onZoneUpdate={handleZoneUpdate}
            onZoneDoubleClick={handleZoneDoubleClick}
            zoneTables={zoneTables}
            selectedTableId={selectedTableId}
            onTableSelect={handleTableSelect}
            onTableUpdate={handleTableUpdate}
            onTableDoubleClick={handleTableDoubleClick}
            onAddTable={handleAddTable}
            isEditMode={isEditModeZones}
            isTableEditMode={isEditModeTables}
          />
        </div>
      ) : crudOperations.items.length === 0 ? (
        <EmptyState>
          <EmptyStateIcon>🏢</EmptyStateIcon>
          <EmptyStateTitle>Зоны не найдены</EmptyStateTitle>
          <EmptyStateText>Создайте первую зону для этого мероприятия</EmptyStateText>
        </EmptyState>
      ) : (
        <ZonesGrid>
          {crudOperations.items.map((zone) => (
            <ZoneCard key={zone.id}>
              <ZoneTitle>{zone.name}</ZoneTitle>
              <ZoneInfo>
                <div><strong>Описание:</strong> {zone.description}</div>
                <div><strong>Цена:</strong> {zone.price} ₽</div>
                <div><strong>Макс. мест:</strong> {zone.maxSeats}</div>
                <div><strong>Статус:</strong> {zone.isActive ? 'Активна' : 'Неактивна'}</div>
                <div><strong>Порядок:</strong> {zone.sortOrder}</div>
              </ZoneInfo>
              <ZoneActions>
                <Button 
                  onClick={() => handleEditZone(zone)}
                  style={{ flex: '1', minWidth: '120px' }}
                >
                  ✏️ Редактировать
                </Button>
                <Button 
                  $variant="danger" 
                  onClick={() => handleDeleteZone(zone.id)}
                  style={{ flex: '1', minWidth: '100px' }}
                >
                  🗑️ Удалить
                </Button>
                <Button 
                  $variant="primary" 
                  onClick={() => handleManageTables(zone.id)}
                  style={{ flex: '1', minWidth: '140px' }}
                >
                  🪑 Управлять столами
                </Button>
              </ZoneActions>
            </ZoneCard>
          ))}
        </ZonesGrid>
      )}

      <NonBlockingModal $isOpen={isModalOpen}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              {editingZone ? 'Редактировать зону' : 'Создать зону'}
            </ModalTitle>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
          </ModalHeader>
          {editingZone && isEditModeZones && (
            <div style={{ 
              marginBottom: '1rem', 
              padding: '0.75rem', 
              background: 'rgba(33, 150, 243, 0.1)', 
              border: '1px solid rgba(33, 150, 243, 0.3)',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#90caf9'
            }}>
              💡 Можно перетаскивать и изменять размер зоны на канвасе внизу
            </div>
          )}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Название зоны *</Label>
              <Input
                type="text"
                name="name"
                value={form.values.name}
                onChange={handleInputChange}
                placeholder="Введите название зоны"
                required
              />
              {form.errors.name && <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.25rem' }}>{form.errors.name}</div>}
            </FormGroup>

            <FormGroup>
              <Label>Описание</Label>
              <TextArea
                name="description"
                value={form.values.description}
                onChange={handleInputChange}
                placeholder="Опишите зону"
              />
            </FormGroup>

            <FormGroup>
              <Label>Цена за место (₽) *</Label>
              <Input
                type="number"
                name="price"
                value={form.values.price}
                onChange={handleInputChange}
                min="0"
                step="100"
                required
              />
              {form.errors.price && <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.25rem' }}>{form.errors.price}</div>}
            </FormGroup>

            <FormGroup>
              <Label>Максимальное количество мест *</Label>
              <Input
                type="number"
                name="maxSeats"
                value={form.values.maxSeats}
                onChange={handleInputChange}
                min="1"
                max="1000"
                required
              />
              {form.errors.maxSeats && <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.25rem' }}>{form.errors.maxSeats}</div>}
            </FormGroup>

            <FormGroup>
              <Label>Порядок сортировки</Label>
              <Input
                type="number"
                name="sortOrder"
                value={form.values.sortOrder}
                onChange={handleInputChange}
                min="1"
              />
            </FormGroup>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Button type="submit" $variant="primary" disabled={form.isSubmitting}>
                {form.isSubmitting ? 'Сохранение...' : editingZone ? 'Сохранить изменения' : 'Создать зону'}
              </Button>
              <Button type="button" onClick={() => setIsModalOpen(false)}>
                Отмена
              </Button>
            </div>
          </Form>
        </ModalContent>
      </NonBlockingModal>

      {/* Модальное окно для создания/редактирования столов */}
      <Modal $isOpen={isTableModalOpen}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              {editingTable ? 'Редактировать стол' : 'Создать новый стол'}
            </ModalTitle>
            <CloseButton onClick={() => setIsTableModalOpen(false)}>×</CloseButton>
          </ModalHeader>
          
          <Form onSubmit={async (e) => {
            e.preventDefault()
            console.log('🪑 Frontend: Отправка формы стола')
            
            if (!selectedZoneId) {
              console.error('🪑 Frontend: Нет selectedZoneId')
              return
            }

            const formData = new FormData(e.target as HTMLFormElement)
            const tableData = {
              zoneId: selectedZoneId,
              name: formData.get('name') as string,
              x: 50,
              y: 50,
              width: 80,
              height: 60,
              seats: parseInt(formData.get('seats') as string) || 4
            }

            console.log('🪑 Frontend: Данные стола:', tableData)

            try {
              if (editingTable) {
                // Обновление существующего стола
                const response = await eventTablesApi.updateTable(editingTable.id, tableData)
                if (response.success) {
                  console.log('🪑 Frontend: Стол обновлен:', response.data)
                  // Обновляем локальное состояние
                  setZoneTables(prev => {
                    const newTables = { ...prev }
                    Object.keys(newTables).forEach(zoneId => {
                      const zoneIdNum = parseInt(zoneId)
                      const tableIndex = newTables[zoneIdNum].findIndex(t => t.id === editingTable.id)
                      if (tableIndex !== -1) {
                        newTables[zoneIdNum] = [...newTables[zoneIdNum]]
                        newTables[zoneIdNum][tableIndex] = response.data
                      }
                    })
                    return newTables
                  })
                }
              } else {
                // Создание нового стола
                const response = await eventTablesApi.createTable(tableData)
                if (response.success) {
                  console.log('🪑 Frontend: Стол создан:', response.data)
                  // Добавляем стол в локальное состояние
                  setZoneTables(prev => ({
                    ...prev,
                    [selectedZoneId]: [...(prev[selectedZoneId] || []), response.data]
                  }))
                }
              }
              setIsTableModalOpen(false)
              setEditingTable(null)
            } catch (error) {
              console.error('🪑 Frontend: Ошибка при сохранении стола:', error)
              alert('Ошибка при сохранении стола')
            }
          }}>
            <FormGroup>
              <Label htmlFor="tableName">Название стола</Label>
              <Input
                id="tableName"
                name="name"
                type="text"
                defaultValue={editingTable?.name || ''}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="tableSeats">Количество мест</Label>
              <Input
                id="tableSeats"
                name="seats"
                type="number"
                defaultValue={editingTable?.seats || 4}
                min="1"
                max="20"
                required
              />
            </FormGroup>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Button type="submit" $variant="primary">
                {editingTable ? 'Сохранить изменения' : 'Создать стол'}
              </Button>
              <Button type="button" onClick={() => setIsTableModalOpen(false)}>
                Отмена
              </Button>
            </div>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  )
}
