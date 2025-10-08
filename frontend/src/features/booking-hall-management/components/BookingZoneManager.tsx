import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getBookingZones, createBookingZone, updateBookingZone, deleteBookingZone, BookingZone as Zone } from '@/shared/api/booking'
import { BookingZoneCanvas } from './BookingZoneCanvas'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const BackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`

const ZonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const ZoneCard = styled.div<{ $selected?: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid ${props => props.$selected ? '#667eea' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`

const ZoneName = styled.h3`
  color: #fff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`

const ZoneInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

const ZoneActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          }
        `
      case 'danger':
        return `
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
          }
        `
      default:
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
          }
        `
    }
  }}
`

const CreateZoneForm = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
`

const FormTitle = styled.h3`
  color: #fff;
  margin: 0 0 1.5rem 0;
`

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(34, 197, 94, 0.3);
          }
        `
      default:
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
          }
        `
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #667eea;
  font-size: 1.2rem;
  font-weight: 500;
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #ff6b6b;
  font-size: 1.2rem;
  font-weight: 500;
`

interface BookingZoneManagerProps {
  hallId: number
  onBack: () => void
}

export const BookingZoneManager: React.FC<BookingZoneManagerProps> = ({ hallId, onBack }) => {
  const [zones, setZones] = useState<Zone[]>([])
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newZone, setNewZone] = useState({
    name: '',
    description: '',
    openTime: '09:00',
    closeTime: '23:00'
  })

  useEffect(() => {
    loadZones()
  }, [hallId])

  const loadZones = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const zonesData = await getBookingZones()
      setZones(zonesData)
    } catch (err) {
      setError('Ошибка загрузки зон')
      console.error('Ошибка загрузки зон:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateZone = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newZone.name.trim()) {
      setError('Название зоны обязательно')
      return
    }

    try {
      setIsCreating(true)
      setError(null)
      
      const zoneData = {
        hallId,
        name: newZone.name,
        description: newZone.description,
        type: 'standard' as const,
        openTime: newZone.openTime,
        closeTime: newZone.closeTime,
        isActive: true
      }
      
      const createdZone = await createBookingZone(zoneData as any)
      setZones(prev => [...prev, createdZone])
      setNewZone({ name: '', description: '', openTime: '09:00', closeTime: '23:00' })
      setShowCreateForm(false)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка создания зоны')
    } finally {
      setIsCreating(false)
    }
  }

  const handleUpdateZone = async (zoneId: number, updates: Partial<Zone>) => {
    try {
      const updatedZone = await updateBookingZone(zoneId, updates)
      setZones(prev => prev.map(zone => 
        zone.id === zoneId ? updatedZone : zone
      ))
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка обновления зоны')
    }
  }

  const handleDeleteZone = async (zoneId: number) => {
    if (!confirm('Вы уверены, что хотите удалить эту зону?')) {
      return
    }

    try {
      await deleteBookingZone(zoneId)
      setZones(prev => prev.filter(zone => zone.id !== zoneId))
      if (selectedZone?.id === zoneId) {
        setSelectedZone(null)
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка удаления зоны')
    }
  }

  const handleZoneSelect = (zone: Zone) => {
    setSelectedZone(zone)
  }

  const handleBackToZones = () => {
    setSelectedZone(null)
  }

  if (selectedZone) {
    return (
      <BookingZoneCanvas
        zoneId={selectedZone.id}
        items={[]}
        onItemSelect={() => {}}
        selectedItems={[]}
      />
    )
  }

  if (isLoading) {
    return (
      <Container>
        <LoadingMessage>Загрузка зон...</LoadingMessage>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>🪑 Управление зонами для бронирований</Title>
        <BackButton onClick={onBack}>
          ← Назад к залам
        </BackButton>
      </Header>

      {showCreateForm ? (
        <CreateZoneForm>
          <FormTitle>Создать новую зону</FormTitle>
          <form onSubmit={handleCreateZone}>
            <FormGroup>
              <Label htmlFor="zoneName">Название зоны *</Label>
              <Input
                id="zoneName"
                type="text"
                value={newZone.name}
                onChange={(e) => setNewZone(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Введите название зоны"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="zoneDescription">Описание</Label>
              <Input
                id="zoneDescription"
                type="text"
                value={newZone.description}
                onChange={(e) => setNewZone(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Введите описание зоны"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="openTime">Время открытия</Label>
              <Input
                id="openTime"
                type="time"
                value={newZone.openTime}
                onChange={(e) => setNewZone(prev => ({ ...prev, openTime: e.target.value }))}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="closeTime">Время закрытия</Label>
              <Input
                id="closeTime"
                type="time"
                value={newZone.closeTime}
                onChange={(e) => setNewZone(prev => ({ ...prev, closeTime: e.target.value }))}
              />
            </FormGroup>

            <ButtonGroup>
              <Button 
                type="button" 
                onClick={() => setShowCreateForm(false)}
                disabled={isCreating}
              >
                Отмена
              </Button>
              <Button 
                type="submit" 
                $variant="primary"
                disabled={isCreating}
              >
                {isCreating ? 'Создание...' : 'Создать зону'}
              </Button>
            </ButtonGroup>
          </form>
        </CreateZoneForm>
      ) : (
        <Button 
          onClick={() => setShowCreateForm(true)}
          $variant="primary"
        >
          ➕ Создать зону
        </Button>
      )}

      <ZonesGrid>
        {zones.map((zone: Zone) => (
          <ZoneCard
            key={zone.id}
            $selected={(selectedZone as any)?.id === (zone as any).id}
            onClick={() => handleZoneSelect(zone)}
          >
            <ZoneName>{zone.name}</ZoneName>
            <ZoneInfo>
              <div>Тип: {zone.type}</div>
              <div>Время работы: {zone.openTime} - {zone.closeTime}</div>
              <div>Статус: {zone.isActive ? 'Активна' : 'Неактивна'}</div>
              {zone.description && <div>Описание: {zone.description}</div>}
            </ZoneInfo>
            <ZoneActions>
              <ActionButton 
                $variant="primary"
                onClick={(e) => {
                  e.stopPropagation()
                  handleZoneSelect(zone)
                }}
              >
                🎨 Конструктор
              </ActionButton>
              <ActionButton 
                onClick={(e) => {
                  e.stopPropagation()
                  handleUpdateZone(zone.id, { isActive: !zone.isActive })
                }}
              >
                {zone.isActive ? 'Деактивировать' : 'Активировать'}
              </ActionButton>
              <ActionButton 
                $variant="danger"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDeleteZone(zone.id)
                }}
              >
                🗑️ Удалить
              </ActionButton>
            </ZoneActions>
          </ZoneCard>
        ))}
      </ZonesGrid>
    </Container>
  )
}
