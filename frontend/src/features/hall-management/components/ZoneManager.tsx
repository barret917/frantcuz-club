import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { 
  getZones, 
  createZone, 
  updateZone, 
  deleteZone,
  Zone,
  CreateZoneData,
  UpdateZoneData
} from '@/shared/api/halls'
import { ImageUpload } from '@/shared/ui/ImageUpload'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`

const SectionTitle = styled.h3`
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`

const ZoneCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const ZoneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const ZoneName = styled.h4`
  color: #fff;
  margin: 0;
  font-size: 1.2rem;
`

const ZoneActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ActionButton = styled.button<{ $variant?: 'edit' | 'delete' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  background: ${props => props.$variant === 'delete' 
    ? 'rgba(239, 68, 68, 0.2)' 
    : 'rgba(102, 126, 234, 0.2)'};
  color: ${props => props.$variant === 'delete' ? '#ef4444' : '#667eea'};
  border: 1px solid ${props => props.$variant === 'delete' 
    ? 'rgba(239, 68, 68, 0.3)' 
    : 'rgba(102, 126, 234, 0.3)'};
  
  &:hover {
    background: ${props => props.$variant === 'delete' 
      ? 'rgba(239, 68, 68, 0.3)' 
      : 'rgba(102, 126, 234, 0.3)'};
    transform: translateY(-1px);
  }
`

const ZoneInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`

const InfoItem = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`

const AddZoneButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  color: #22c55e;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(34, 197, 94, 0.3);
    transform: translateY(-1px);
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
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`

const ModalTitle = styled.h3`
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  option {
    background: #333;
    color: #fff;
  }
`

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`

const Button = styled.button<{ $variant?: 'cancel' | 'delete' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  background: ${props => {
    if (props.$variant === 'cancel') return 'rgba(255, 255, 255, 0.1)'
    if (props.$variant === 'delete') return 'rgba(239, 68, 68, 0.2)'
    return 'rgba(102, 126, 234, 0.2)'
  }};
  
  color: ${props => {
    if (props.$variant === 'cancel') return '#fff'
    if (props.$variant === 'delete') return '#ef4444'
    return '#667eea'
  }};
  
  border: 1px solid ${props => {
    if (props.$variant === 'cancel') return 'rgba(255, 255, 255, 0.2)'
    if (props.$variant === 'delete') return 'rgba(239, 68, 68, 0.3)'
    return 'rgba(102, 126, 234, 0.3)'
  }};
  
  &:hover {
    transform: translateY(-1px);
  }
`

const zoneTypes = [
  { value: 'restaurant', label: 'Ресторан' },
  { value: 'karaoke', label: 'Караоке' },
  { value: 'billiards', label: 'Бильярд' },
  { value: 'disco', label: 'Диско-бар' },
  { value: 'playstation', label: 'Playstation' },
  { value: 'bowling', label: 'Боулинг' },
  { value: 'spa', label: 'SPA' },
  { value: 'cinema', label: 'Кинотеатр' },
  { value: 'custom', label: 'Другое' }
]

interface ZoneManagerProps {
  hallId: number
}

export const ZoneManager: React.FC<ZoneManagerProps> = ({ hallId }) => {
  const [zones, setZones] = useState<Zone[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingZone, setEditingZone] = useState<Zone | null>(null)
  const [formData, setFormData] = useState<CreateZoneData>({
    name: '',
    type: 'restaurant',
    hallId,
    openTime: '09:00',
    closeTime: '23:00',
    description: ''
  })

  useEffect(() => {
    loadZones()
  }, [hallId])

  const loadZones = async () => {
    try {
      const zonesData = await getZones(hallId)
      setZones(zonesData)
    } catch (error) {
      console.error('Ошибка загрузки зон:', error)
    }
  }

  const handleAddZone = () => {
    setEditingZone(null)
    setFormData({
      name: '',
      type: 'restaurant',
      hallId,
      openTime: '09:00',
      closeTime: '23:00',
      description: ''
    })
    setIsModalOpen(true)
  }

  const handleEditZone = (zone: Zone) => {
    setEditingZone(zone)
    setFormData({
      name: zone.name,
      type: zone.type,
      hallId: zone.hallId,
      openTime: zone.openTime,
      closeTime: zone.closeTime,
      description: zone.description || ''
    })
    setIsModalOpen(true)
  }

  const handleDeleteZone = async (zoneId: number) => {
    if (window.confirm('Вы уверены, что хотите удалить эту зону?')) {
      try {
        await deleteZone(zoneId)
        await loadZones()
      } catch (error) {
        console.error('Ошибка удаления зоны:', error)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingZone) {
        await updateZone(editingZone.id, formData as UpdateZoneData)
      } else {
        await createZone(formData)
      }
      
      await loadZones()
      setIsModalOpen(false)
    } catch (error) {
      console.error('Ошибка сохранения зоны:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Container>
      <SectionTitle>Управление зонами</SectionTitle>
      
      {zones.map(zone => (
        <ZoneCard key={zone.id}>
          <ZoneHeader>
            <ZoneName>{zone.name}</ZoneName>
            <ZoneActions>
              <ActionButton onClick={() => handleEditZone(zone)}>
                Редактировать
              </ActionButton>
              <ActionButton $variant="delete" onClick={() => handleDeleteZone(zone.id)}>
                Удалить
              </ActionButton>
            </ZoneActions>
          </ZoneHeader>
          
          <ZoneInfo>
            <InfoItem>
              <strong>Тип:</strong> {zone.type}
            </InfoItem>
            <InfoItem>
              <strong>Время работы:</strong> {zone.openTime} - {zone.closeTime}
            </InfoItem>
            <InfoItem>
              <strong>Столов:</strong> {zone.items.length}
            </InfoItem>
            {zone.description && (
              <InfoItem>
                <strong>Описание:</strong> {zone.description}
              </InfoItem>
            )}
          </ZoneInfo>
        </ZoneCard>
      ))}
      
      <AddZoneButton onClick={handleAddZone}>
        + Добавить зону
      </AddZoneButton>

      <Modal $isOpen={isModalOpen}>
        <ModalContent>
          <ModalTitle>
            {editingZone ? 'Редактирование зоны' : 'Создание новой зоны'}
          </ModalTitle>
          
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Название зоны *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="type">Тип зоны</Label>
              <Select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              >
                {zoneTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="openTime">Время открытия</Label>
              <Input
                id="openTime"
                name="openTime"
                type="time"
                value={formData.openTime}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="closeTime">Время закрытия</Label>
              <Input
                id="closeTime"
                name="closeTime"
                type="time"
                value={formData.closeTime}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Описание</Label>
              <Input
                id="description"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Описание зоны"
              />
            </FormGroup>

            <ModalActions>
              <Button type="button" $variant="cancel" onClick={() => setIsModalOpen(false)}>
                Отмена
              </Button>
              <Button type="submit">
                {editingZone ? 'Сохранить' : 'Создать'}
              </Button>
            </ModalActions>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  )
} 