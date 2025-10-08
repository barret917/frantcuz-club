import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getBookingZones, createBookingZone, updateBookingZone, deleteBookingZone, BookingZone as Hall } from '@/shared/api/booking'
import { BookingZoneManager } from './BookingZoneManager'

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

const HallsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const HallCard = styled.div<{ $selected?: boolean }>`
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

const HallName = styled.h3`
  color: #fff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`

const HallInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

const HallActions = styled.div`
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

const CreateHallForm = styled.div`
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

export const BookingHallsManagement: React.FC = () => {
  const [halls, setHalls] = useState<Hall[]>([])
  const [selectedHall, setSelectedHall] = useState<Hall | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newHall, setNewHall] = useState({
    name: '',
    description: '',
    openTime: '09:00',
    closeTime: '23:00',
    deposit: 0
  })

  useEffect(() => {
    loadHalls()
  }, [])

  const loadHalls = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const hallsData = await getBookingZones()
      // Filter only standard halls for bookings
      const standardHalls = hallsData.filter((hall: Hall) => hall.type === 'billiards')
      setHalls(standardHalls)
    } catch (err) {
      setError('Ошибка загрузки залов')
      console.error('Ошибка загрузки залов:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateHall = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newHall.name.trim()) {
      setError('Название зала обязательно')
      return
    }

    try {
      setIsCreating(true)
      setError(null)
      
      const hallData = {
        name: newHall.name,
        description: newHall.description,
        hallType: 'standard' as const,
        openTime: newHall.openTime,
        closeTime: newHall.closeTime,
        isActive: true,
        deposit: newHall.deposit
      }
      
      const createdHall = await createBookingZone(hallData)
      setHalls(prev => [...prev, createdHall])
      setNewHall({ name: '', description: '', openTime: '09:00', closeTime: '23:00', deposit: 0 })
      setShowCreateForm(false)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка создания зала')
    } finally {
      setIsCreating(false)
    }
  }

  const handleUpdateHall = async (hallId: number, updates: Partial<Hall>) => {
    try {
      const updatedHall = await updateBookingZone(hallId, updates)
      setHalls(prev => prev.map(hall => 
        hall.id === hallId ? updatedHall : hall
      ))
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка обновления зала')
    }
  }

  const handleDeleteHall = async (hallId: number) => {
    if (!confirm('Вы уверены, что хотите удалить этот зал?')) {
      return
    }

    try {
      await deleteBookingZone(hallId)
      setHalls(prev => prev.filter(hall => hall.id !== hallId))
      if (selectedHall?.id === hallId) {
        setSelectedHall(null)
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка удаления зала')
    }
  }

  const handleHallSelect = (hall: Hall) => {
    setSelectedHall(hall)
  }

  const handleBackToHalls = () => {
    setSelectedHall(null)
  }

  if (selectedHall) {
    return (
      <BookingZoneManager
        hallId={selectedHall.id}
        onBack={handleBackToHalls}
      />
    )
  }

  if (isLoading) {
    return (
      <Container>
        <LoadingMessage>Загрузка залов...</LoadingMessage>
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
        <Title>🪑 Управление залами для бронирований</Title>
        <BackButton onClick={() => window.history.back()}>
          ← Назад
        </BackButton>
      </Header>

      {showCreateForm ? (
        <CreateHallForm>
          <FormTitle>Создать новый зал для бронирований</FormTitle>
          <form onSubmit={handleCreateHall}>
            <FormGroup>
              <Label htmlFor="hallName">Название зала *</Label>
              <Input
                id="hallName"
                type="text"
                value={newHall.name}
                onChange={(e) => setNewHall(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Введите название зала"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="hallDescription">Описание</Label>
              <Input
                id="hallDescription"
                type="text"
                value={newHall.description}
                onChange={(e) => setNewHall(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Введите описание зала"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="openTime">Время открытия</Label>
              <Input
                id="openTime"
                type="time"
                value={newHall.openTime}
                onChange={(e) => setNewHall(prev => ({ ...prev, openTime: e.target.value }))}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="closeTime">Время закрытия</Label>
              <Input
                id="closeTime"
                type="time"
                value={newHall.closeTime}
                onChange={(e) => setNewHall(prev => ({ ...prev, closeTime: e.target.value }))}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="deposit">Депозит (₽)</Label>
              <Input
                id="deposit"
                type="number"
                min="0"
                step="0.01"
                value={newHall.deposit}
                onChange={(e) => setNewHall(prev => ({ ...prev, deposit: parseFloat(e.target.value) || 0 }))}
                placeholder="0"
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
                {isCreating ? 'Создание...' : 'Создать зал'}
              </Button>
            </ButtonGroup>
          </form>
        </CreateHallForm>
      ) : (
        <Button 
          onClick={() => setShowCreateForm(true)}
          $variant="primary"
        >
          ➕ Создать зал для бронирований
        </Button>
      )}

      <HallsGrid>
        {halls.map((hall: Hall) => (
          <HallCard
            key={hall.id}
            $selected={(selectedHall as any)?.id === (hall as any).id}
            onClick={() => handleHallSelect(hall)}
          >
            <HallName>{hall.name}</HallName>
            <HallInfo>
              <div>Тип: {hall.type}</div>
              <div>Время работы: {hall.openTime} - {hall.closeTime}</div>
              <div>Статус: {hall.isActive ? 'Активен' : 'Неактивен'}</div>
              {hall.description && <div>Описание: {hall.description}</div>}
              {hall.deposit && <div>Депозит: {hall.deposit} ₽</div>}
            </HallInfo>
            <HallActions>
              <ActionButton 
                $variant="primary"
                onClick={(e) => {
                  e.stopPropagation()
                  handleHallSelect(hall)
                }}
              >
                🎨 Управление зонами
              </ActionButton>
              <ActionButton 
                onClick={(e) => {
                  e.stopPropagation()
                  handleUpdateHall(hall.id, { isActive: !hall.isActive })
                }}
              >
                {hall.isActive ? 'Деактивировать' : 'Активировать'}
              </ActionButton>
              <ActionButton 
                $variant="danger"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDeleteHall(hall.id)
                }}
              >
                🗑️ Удалить
              </ActionButton>
            </HallActions>
          </HallCard>
        ))}
      </HallsGrid>
    </Container>
  )
}
