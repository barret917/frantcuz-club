import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BookingZone, BookingTable, getBookingZones, getTablesByZone, createBookingTable, updateBookingTable, deleteBookingTable } from '@/shared/api/booking'
import TableCanvas from './TableCanvas'

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: #3b82f6;
          color: white;
          
          &:hover:not(:disabled) {
            background: #2563eb;
          }
        `
      case 'danger':
        return `
          background: #ef4444;
          color: white;
          
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `
      default:
        return `
          background: #f3f4f6;
          color: #374151;
          
          &:hover:not(:disabled) {
            background: #e5e7eb;
          }
        `
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ZoneSelector = styled.div`
  margin-bottom: 2rem;
`

const ZoneSelect = styled.select`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const TableCard = styled.div<{ isActive: boolean }>`
  background: white;
  border: 2px solid ${props => props.isActive ? '#10b981' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const TableName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`

const TableStatus = styled.span<{ isActive: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => props.isActive ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.isActive ? '#065f46' : '#991b1b'};
`

const TableDetails = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

const TableActions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ErrorMessage = styled.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #fecaca;
`

const SuccessMessage = styled.div`
  background: #f0fdf4;
  color: #16a34a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #bbf7d0;
`

const EmptyState = styled.div`
  text-align: center;
  color: #6b7280;
  padding: 3rem;
`

export const BookingTablesManagement: React.FC = () => {
  const [zones, setZones] = useState<BookingZone[]>([])
  const [tables, setTables] = useState<BookingTable[]>([])
  const [selectedZoneId, setSelectedZoneId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingTable, setEditingTable] = useState<BookingTable | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    seats: 4,
    isActive: true,
    zoneId: 0
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'list' | 'canvas'>('canvas')

  useEffect(() => {
    loadZones()
  }, [])

  useEffect(() => {
    if (selectedZoneId) {
      loadTables(selectedZoneId)
    } else {
      setTables([])
    }
  }, [selectedZoneId])

  const loadZones = async () => {
    try {
      setLoading(true)
      setError(null)
      const zonesData = await getBookingZones()
      console.log('Loaded zones:', zonesData)
      setZones(zonesData)
      if (zonesData.length > 0) {
        // Выбираем зону "Магомед" (ID: 74) если она есть, иначе первую
        const magomedZone = zonesData.find(zone => zone.id === 74)
        const selectedId = magomedZone ? magomedZone.id : zonesData[0].id
        console.log('Selected zone ID:', selectedId)
        setSelectedZoneId(selectedId)
      }
    } catch (error) {
      console.error('Error loading zones:', error)
      setError('Ошибка загрузки зон')
    } finally {
      setLoading(false)
    }
  }

  const loadTables = async (zoneId: number) => {
    try {
      setLoading(true)
      setError(null)
      console.log('Loading tables for zone:', zoneId)
      const tablesData = await getTablesByZone(zoneId)
      console.log('Loaded tables:', tablesData)
      setTables(tablesData)
    } catch (error) {
      console.error('Error loading tables:', error)
      setError('Ошибка загрузки столов')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateTable = () => {
    if (!selectedZoneId) {
      setError('Выберите зону')
      return
    }
    
    setEditingTable(null)
    setFormData({
      name: '',
      seats: 4,
      isActive: true,
      zoneId: selectedZoneId
    })
    setShowModal(true)
    setSubmitError(null)
    setSuccessMessage(null)
  }

  const handleEditTable = (table: BookingTable) => {
    setEditingTable(table)
    setFormData({
      name: table.name,
      seats: table.seats,
      isActive: table.isActive,
      zoneId: table.zoneId
    })
    setShowModal(true)
    setSubmitError(null)
    setSuccessMessage(null)
  }

  const handleDeleteTable = async (tableId: number) => {
    if (!confirm('Вы уверены, что хотите удалить этот стол?')) return

    try {
      await deleteBookingTable(tableId)
      setTables(prev => prev.filter(table => table.id !== tableId))
      setSuccessMessage('Стол успешно удален')
    } catch (error) {
      console.error('Error deleting table:', error)
      setError('Ошибка удаления стола')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      setSubmitError('Название стола обязательно')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      if (editingTable) {
        const updatedTable = await updateBookingTable(editingTable.id, formData)
        setTables(prev => prev.map(table => 
          table.id === editingTable.id ? updatedTable : table
        ))
        setSuccessMessage('Стол успешно обновлен')
      } else {
        const newTable = await createBookingTable(formData)
        setTables(prev => [newTable, ...prev])
        setSuccessMessage('Стол успешно создан')
      }
      
      setShowModal(false)
    } catch (error) {
      console.error('Error saving table:', error)
      setSubmitError('Ошибка сохранения стола')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? Number(value) : value
    }))
  }

  const handleTableUpdate = async (updatedTable: BookingTable) => {
    try {
      // Фильтруем только нужные поля для обновления
      const updateData = {
        name: updatedTable.name,
        seats: updatedTable.seats,
        x: updatedTable.x,
        y: updatedTable.y,
        width: updatedTable.width,
        height: updatedTable.height,
        isActive: updatedTable.isActive,
        zoneId: updatedTable.zoneId
      }
      
      console.log('BookingTablesManagement: Updating table with data:', updateData)
      const result = await updateBookingTable(updatedTable.id, updateData)
      console.log('BookingTablesManagement: Update result:', result)
      setTables(prev => prev.map(table => 
        table.id === updatedTable.id ? updatedTable : table
      ))
      setSuccessMessage('Стол успешно обновлен')
    } catch (error) {
      console.error('Error updating table:', error)
      setError('Ошибка обновления стола')
    }
  }

  const handleTableCreate = async (tableData: Partial<BookingTable>) => {
    try {
      const newTable = await createBookingTable({
        ...tableData,
        zoneId: selectedZoneId!
      })
      setTables(prev => [...prev, newTable])
      setSuccessMessage('Стол успешно создан')
    } catch (error) {
      console.error('Error creating table:', error)
      setError('Ошибка создания стола')
    }
  }

  const handleTableDelete = async (tableId: number) => {
    if (!confirm('Вы уверены, что хотите удалить этот стол?')) return

    try {
      await deleteBookingTable(tableId)
      setTables(prev => prev.filter(table => table.id !== tableId))
      setSuccessMessage('Стол успешно удален')
    } catch (error) {
      console.error('Error deleting table:', error)
      setError('Ошибка удаления стола')
    }
  }

  const selectedZone = zones.find(zone => zone.id === selectedZoneId)

  if (loading && zones.length === 0) {
    return (
      <Container>
        <Header>
          <Title>Управление столами бронирования</Title>
        </Header>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <LoadingSpinner />
          <div style={{ marginTop: '1rem', color: '#6b7280' }}>Загрузка зон...</div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Управление столами бронирования</Title>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button 
              variant={viewMode === 'canvas' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('canvas')}
            >
              Визуальный режим
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('list')}
            >
              Список
            </Button>
          </div>
          {viewMode === 'list' && (
            <Button 
              variant="primary" 
              onClick={handleCreateTable}
              disabled={!selectedZoneId}
            >
              Создать стол
            </Button>
          )}
        </div>
      </Header>

      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}

      {successMessage && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}

      <ZoneSelector>
        <Label htmlFor="zoneSelect">Выберите зону:</Label>
        <ZoneSelect
          id="zoneSelect"
          value={selectedZoneId || ''}
          onChange={(e) => setSelectedZoneId(Number(e.target.value))}
        >
          <option value="">Выберите зону</option>
          {zones.map(zone => (
            <option key={zone.id} value={zone.id}>
              {zone.name}
            </option>
          ))}
        </ZoneSelect>
      </ZoneSelector>

      {selectedZone && (
        <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <strong>Выбранная зона:</strong> {selectedZone.name} ({selectedZone.pricePerHour} ₽ за бронирование)
        </div>
      )}

      {loading && selectedZoneId ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <LoadingSpinner />
          <div style={{ marginTop: '1rem', color: '#6b7280' }}>Загрузка столов...</div>
        </div>
      ) : !selectedZoneId ? (
        <EmptyState>
          <h3>Выберите зону</h3>
          <p>Выберите зону для управления столами</p>
        </EmptyState>
      ) : viewMode === 'canvas' ? (
        <TableCanvas
          tables={tables}
          onTableUpdate={handleTableUpdate}
          onTableDelete={handleTableDelete}
          onTableCreate={handleTableCreate}
        />
      ) : tables.length === 0 ? (
        <EmptyState>
          <h3>Нет созданных столов</h3>
          <p>Создайте первый стол в выбранной зоне</p>
          <Button variant="primary" onClick={handleCreateTable} style={{ marginTop: '1rem' }}>
            Создать стол
          </Button>
        </EmptyState>
      ) : (
        <TablesGrid>
          {tables.map(table => (
            <TableCard key={table.id} isActive={table.isActive}>
              <TableHeader>
                <TableName>{table.name}</TableName>
                <TableStatus isActive={table.isActive}>
                  {table.isActive ? 'Активен' : 'Неактивен'}
                </TableStatus>
              </TableHeader>
              
              <TableDetails>
                <div><strong>Количество мест:</strong> {table.seats}</div>
                <div><strong>Зона:</strong> {selectedZone?.name}</div>
              </TableDetails>
              
              <TableActions>
                <Button
                  variant="secondary"
                  onClick={() => handleEditTable(table)}
                >
                  Редактировать
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleTableDelete(table.id)}
                >
                  Удалить
                </Button>
              </TableActions>
            </TableCard>
          ))}
        </TablesGrid>
      )}

      {showModal && (
        <ModalOverlay onClick={() => !isSubmitting && setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>
              {editingTable ? 'Редактировать стол' : 'Создать стол'}
            </ModalTitle>

            {submitError && (
              <ErrorMessage>{submitError}</ErrorMessage>
            )}

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Название стола *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Например: Стол 1"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="seats">Количество мест *</Label>
                <Input
                  id="seats"
                  name="seats"
                  type="number"
                  required
                  min="1"
                  max="20"
                  value={formData.seats}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                  />
                  <span>Активный стол</span>
                </label>
              </FormGroup>

              <ModalActions>
                <Button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  disabled={isSubmitting}
                >
                  Отмена
                </Button>
                <Button 
                  type="submit" 
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner />
                      Сохранение...
                    </>
                  ) : (
                    editingTable ? 'Обновить' : 'Создать'
                  )}
                </Button>
              </ModalActions>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  )
}

export default BookingTablesManagement
