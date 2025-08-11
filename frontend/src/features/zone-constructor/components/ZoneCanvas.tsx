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
  background: rgba(255, 255, 255, 0.02);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(20px);
`

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const FloorButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  color: ${props => props.$active ? '#ffffff' : '#a0a0a0'};
  border: ${props => props.$active ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(255, 255, 255, 0.15)'
    };
    color: #ffffff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const Modal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 16px;
  color: #fff;
  min-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`

const ModalTitle = styled.h3`
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const Label = styled.label`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Input = styled.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Select = styled.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  margin-left: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const ZoneTitle = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #667eea;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #ff6b6b;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Notification = styled.div<{ $type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  background: ${props => props.$type === 'success' 
    ? 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)' 
    : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)'
  };
  color: white;
  border-radius: 12px;
  z-index: 10000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const NotificationTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`

const NotificationMessage = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
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
        <ZoneTitle>
          Конструктор зоны: {zoneName}
        </ZoneTitle>
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
        <LoadingMessage>
          Загрузка элементов зоны...
        </LoadingMessage>
      ) : error ? (
        <ErrorMessage>
          {error}
        </ErrorMessage>
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
          <ModalTitle>Добавить элемент</ModalTitle>
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
        <Notification $type={notification.type}>
          <NotificationTitle>{notification.title}</NotificationTitle>
          <NotificationMessage>{notification.message}</NotificationMessage>
        </Notification>
      )}
    </Container>
  )
  } 