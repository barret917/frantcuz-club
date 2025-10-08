import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BookingZone, getBookingZones, createBookingZone, updateBookingZone, deleteBookingZone } from '@/shared/api/booking'
import { ImageUpload } from '@/shared/ui/ImageUpload'

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

const ZonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const ZoneCard = styled.div<{ isActive: boolean }>`
  background: white;
  border: 2px solid ${props => props.isActive ? '#10b981' : '#e5e7eb'};
  border-radius: 12px;
  padding: 0;
  transition: all 0.2s;
  overflow: hidden;
  height: 300px;
  position: relative;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const ZoneImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 100%;
  background: ${props => props.imageUrl 
    ? `url(${props.imageUrl}) center/cover` 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

const ZoneContent = styled.div`
  padding: 1.5rem;
`

const ZoneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const ZoneName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`

const ZoneStatus = styled.span<{ isActive: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => props.isActive ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.isActive ? '#065f46' : '#991b1b'};
`

const ZoneDetails = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

const ZoneActions = styled.div`
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
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

export const BookingZonesManagement: React.FC = () => {
  const [zones, setZones] = useState<BookingZone[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingZone, setEditingZone] = useState<BookingZone | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pricePerHour: 0,
    openTime: '09:00',
    closeTime: '23:00',
    isActive: true,
    imageUrl: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    loadZones()
  }, [])

  const loadZones = async () => {
    try {
      setLoading(true)
      setError(null)
      const zonesData = await getBookingZones()
      setZones(zonesData)
    } catch (error) {
      console.error('Error loading zones:', error)
      setError('Ошибка загрузки зон')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateZone = () => {
    setEditingZone(null)
    setFormData({
      name: '',
      description: '',
      pricePerHour: 0,
      openTime: '09:00',
      closeTime: '23:00',
      isActive: true,
      imageUrl: ''
    })
    setShowModal(true)
    setSubmitError(null)
    setSuccessMessage(null)
  }

  const handleEditZone = (zone: BookingZone) => {
    setEditingZone(zone)
    setFormData({
      name: zone.name,
      description: zone.description || '',
      pricePerHour: zone.pricePerHour,
      openTime: zone.openTime,
      closeTime: zone.closeTime,
      isActive: zone.isActive,
      imageUrl: zone.imageUrl || ''
    })
    setShowModal(true)
    setSubmitError(null)
    setSuccessMessage(null)
  }

  const handleDeleteZone = async (zoneId: number) => {
    if (!confirm('Вы уверены, что хотите удалить эту зону?')) return

    try {
      await deleteBookingZone(zoneId)
      setZones(prev => prev.filter(zone => zone.id !== zoneId))
      setSuccessMessage('Зона успешно удалена')
    } catch (error) {
      console.error('Error deleting zone:', error)
      setError('Ошибка удаления зоны')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      setSubmitError('Название зоны обязательно')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      if (editingZone) {
        const updatedZone = await updateBookingZone(editingZone.id, formData)
        setZones(prev => prev.map(zone => 
          zone.id === editingZone.id ? updatedZone : zone
        ))
        setSuccessMessage('Зона успешно обновлена')
      } else {
        const newZone = await createBookingZone(formData)
        setZones(prev => [newZone, ...prev])
        setSuccessMessage('Зона успешно создана')
      }
      
      setShowModal(false)
    } catch (error) {
      console.error('Error saving zone:', error)
      setSubmitError('Ошибка сохранения зоны')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? Number(value) : value
    }))
  }

  const handleImageChange = (imageUrl: string) => {
    setFormData(prev => ({
      ...prev,
      imageUrl
    }))
  }

  const generateTimeOptions = () => {
    const options = []
    for (let hour = 0; hour < 24; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`
      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      )
    }
    return options
  }

  if (loading) {
    return (
      <Container>
        <Header>
          <Title>Управление зонами бронирования</Title>
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
        <Title>Управление зонами бронирования</Title>
        <Button variant="primary" onClick={handleCreateZone}>
          Создать зону
        </Button>
      </Header>

      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}

      {successMessage && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}

      {zones.length === 0 ? (
        <EmptyState>
          <h3>Нет созданных зон</h3>
          <p>Создайте первую зону для бронирования</p>
          <Button variant="primary" onClick={handleCreateZone} style={{ marginTop: '1rem' }}>
            Создать зону
          </Button>
        </EmptyState>
      ) : (
        <ZonesGrid>
          {zones.map(zone => (
            <ZoneCard key={zone.id} isActive={zone.isActive}>
              <ZoneImage imageUrl={zone.imageUrl}>
                {!zone.imageUrl && zone.name}
              </ZoneImage>
              
              {/* Скрытые поля - остаются для доступности, но не видны */}
              <div style={{ display: 'none' }}>
                <ZoneContent>
                  <ZoneHeader>
                    <ZoneName>{zone.name}</ZoneName>
                    <ZoneStatus isActive={zone.isActive}>
                      {zone.isActive ? 'Активна' : 'Неактивна'}
                    </ZoneStatus>
                  </ZoneHeader>
                  
                  <ZoneDetails>
                    <div><strong>Описание:</strong> {zone.description || 'Не указано'}</div>
                    <div><strong>Цена за бронирование:</strong> {zone.pricePerHour} ₽</div>
                    <div><strong>Время работы:</strong> {zone.openTime} - {zone.closeTime}</div>
                  </ZoneDetails>

                  <ZoneActions>
                    <Button 
                      variant="secondary" 
                      onClick={() => handleEditZone(zone)}
                    >
                      Редактировать
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => handleDeleteZone(zone.id)}
                    >
                      Удалить
                    </Button>
                  </ZoneActions>
                </ZoneContent>
              </div>
            </ZoneCard>
          ))}
        </ZonesGrid>
      )}

      {showModal && (
        <ModalOverlay onClick={() => !isSubmitting && setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>
              {editingZone ? 'Редактировать зону' : 'Создать зону'}
            </ModalTitle>

            {submitError && (
              <ErrorMessage>{submitError}</ErrorMessage>
            )}

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Название зоны *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Например: Бильярд"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="description">Описание</Label>
                <TextArea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Описание зоны..."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="imageUrl">Фотография зоны</Label>
                <ImageUpload
                  currentImageUrl={formData.imageUrl}
                  onImageUpload={handleImageChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="pricePerHour">Цена за бронирование (₽) *</Label>
                <Input
                  id="pricePerHour"
                  name="pricePerHour"
                  type="number"
                  required
                  min="0"
                  value={formData.pricePerHour}
                  onChange={handleInputChange}
                />
              </FormGroup>


              <FormGroup>
                <Label htmlFor="openTime">Время открытия *</Label>
                <Select
                  id="openTime"
                  name="openTime"
                  required
                  value={formData.openTime}
                  onChange={handleInputChange}
                >
                  {generateTimeOptions()}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="closeTime">Время закрытия *</Label>
                <Select
                  id="closeTime"
                  name="closeTime"
                  required
                  value={formData.closeTime}
                  onChange={handleInputChange}
                >
                  {generateTimeOptions()}
                </Select>
              </FormGroup>

              <FormGroup>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                  />
                  <span>Активная зона</span>
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
                    editingZone ? 'Обновить' : 'Создать'
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

export default BookingZonesManagement
