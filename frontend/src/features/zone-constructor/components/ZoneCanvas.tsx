import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { RndItem } from '@/entities/zone-item'
import { ZoneItem, ZoneItemForm } from '@/entities/zone-item/model/types'
import { Container } from '@/shared/ui/Container'
import { getZoneItems, saveZoneItems } from '@/shared/api/zone-items'

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background: #f5f5f5;
  border: 2px dashed #ccc;
  border-radius: 8px;
  overflow: hidden;
`

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

const FloorButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background: ${props => props.$active ? '#ffd700' : '#333'};
  color: ${props => props.$active ? '#000' : '#fff'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${props => props.$active ? '#ffed4e' : '#444'};
  }
`

const Modal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  color: #fff;
  min-width: 300px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #fff;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #ffed4e;
  }
`

const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #fff;
  border: 1px solid #666;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background: #333;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

interface ZoneCanvasProps {
  zoneId: number
  zoneName?: string
  onSave?: (items: ZoneItem[]) => void
}

export const ZoneCanvas: React.FC<ZoneCanvasProps> = ({ zoneId, zoneName, onSave }) => {
  const [items, setItems] = useState<ZoneItem[]>([])
  const [selectedFloor, setSelectedFloor] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notification, setNotification] = useState<{
    type: 'success' | 'error'
    title: string
    message: string
    isVisible: boolean
  }>({
    type: 'success',
    title: '',
    message: '',
    isVisible: false
  })
  const [formData, setFormData] = useState<ZoneItemForm>({
    label: '',
    type: 'table',
    floor: 1,
    seats: 0
  })
  const canvasRef = useRef<HTMLDivElement>(null)

  // Загружаем существующие элементы зоны
  useEffect(() => {
    const loadZoneItems = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const zoneItems = await getZoneItems(zoneId)
        setItems(zoneItems)
      } catch (err) {
        setError('Ошибка загрузки элементов зоны')
        console.error('Ошибка загрузки элементов зоны:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadZoneItems()
  }, [zoneId])

  const updatePosition = (id: number, x: number, y: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, x, y } : item
    ))
  }

  const updateSize = (id: number, width: number, height: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, width, height } : item
    ))
  }

  const addItem = (formData: ZoneItemForm) => {
    const newItem: ZoneItem = {
      id: Date.now(),
      label: formData.label,
      type: formData.type,
      floor: formData.floor,
      seats: formData.seats,
      x: 50,
      y: 50,
      width: 200,
      height: 100,
      zoneId: zoneId,
      isBooking: false,
      isActive: true
    }
    setItems(prev => [...prev, newItem])
    setIsModalOpen(false)
    setFormData({ label: '', type: 'table', floor: 1, seats: 0 })
    
    showNotification(
      'success',
      'Элемент добавлен!',
      `"${formData.label}" добавлен в зону`
    )
  }

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addItem(formData)
  }

  const showNotification = (type: 'success' | 'error', title: string, message: string) => {
    setNotification({
      type,
      title,
      message,
      isVisible: true
    })
    
    // Автоматически скрываем через 3 секунды
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }))
    }, 3000)
  }

  const handleSave = async () => {
    try {
      await saveZoneItems(zoneId, items)
      if (onSave) {
        onSave(items)
      }
      showNotification(
        'success',
        'Успешно сохранено!',
        `Элементы зоны "${zoneName || 'Зона'}" сохранены`
      )
      console.log('Сохранено:', items)
    } catch (err) {
      showNotification(
        'error',
        'Ошибка сохранения',
        'Не удалось сохранить элементы зоны. Попробуйте еще раз.'
      )
      console.error('Ошибка сохранения:', err)
    }
  }

  const filteredItems = items.filter(item => item.floor === selectedFloor)

    return (
    <Container>
      {zoneName && (
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '1rem',
          color: '#ffd700',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          Конструктор зоны: {zoneName}
        </div>
      )}
      <Controls>
        <Button onClick={() => setIsModalOpen(true)}>
          Добавить элемент
        </Button>
        <Button onClick={handleSave}>
          Сохранить зону
        </Button>
        <FloorButton 
          $active={selectedFloor === 1}
          onClick={() => setSelectedFloor(1)}
        >
          1 этаж
        </FloorButton>
        <FloorButton 
          $active={selectedFloor === 2}
          onClick={() => setSelectedFloor(2)}
        >
          2 этаж
        </FloorButton>
      </Controls>

      {isLoading ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem',
          color: '#ffd700',
          fontSize: '1.2rem'
        }}>
          Загрузка элементов зоны...
        </div>
      ) : error ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem',
          color: '#ff6b6b',
          fontSize: '1.2rem'
        }}>
          {error}
        </div>
      ) : (
        <CanvasWrapper ref={canvasRef}>
          {filteredItems.map(item => (
            <RndItem
              key={item.id}
              item={item}
              updatePosition={updatePosition}
              updateSize={updateSize}
            />
          ))}
        </CanvasWrapper>
      )}

      <Modal $isOpen={isModalOpen}>
        <ModalContent>
          <h3>Добавить элемент</h3>
          <Form onSubmit={handleSubmit}>
            <FormItem>
              <Label>Название</Label>
              <Input
                type="text"
                value={formData.label}
                onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                placeholder="Например: Стол 1"
                required
              />
            </FormItem>

            <FormItem>
              <Label>Тип</Label>
              <Select
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
              >
                <option value="table">Стол</option>
                <option value="stage">Сцена</option>
                <option value="bar">Бар</option>
                <option value="entrance">Вход</option>
              </Select>
            </FormItem>

            <FormItem>
              <Label>Этаж</Label>
              <Select
                value={formData.floor}
                onChange={(e) => setFormData(prev => ({ ...prev, floor: parseInt(e.target.value) }))}
              >
                <option value={1}>1 этаж</option>
                <option value={2}>2 этаж</option>
              </Select>
            </FormItem>

            <FormItem>
              <Label>Количество мест</Label>
              <Input
                type="number"
                value={formData.seats}
                onChange={(e) => setFormData(prev => ({ ...prev, seats: parseInt(e.target.value) || 0 }))}
                placeholder="0"
              />
            </FormItem>

            <ButtonGroup>
              <SubmitButton type="submit">
                Добавить
              </SubmitButton>
              <CancelButton type="button" onClick={() => setIsModalOpen(false)}>
                Отмена
              </CancelButton>
            </ButtonGroup>
          </Form>
        </ModalContent>
      </Modal>

      {notification.isVisible && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '1rem',
          background: notification.type === 'success' ? '#51cf66' : '#ff6b6b',
          color: 'white',
          borderRadius: '8px',
          zIndex: 10000
        }}>
          <div style={{ fontWeight: 'bold' }}>{notification.title}</div>
          <div>{notification.message}</div>
        </div>
      )}
    </Container>
  )
  } 