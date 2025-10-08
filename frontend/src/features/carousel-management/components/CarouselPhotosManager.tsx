import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { carouselPhotosApi, CarouselPhoto, CreateCarouselPhotoData } from '@/shared/api/carousel-photos'
import { ImageUpload } from '@/shared/ui/ImageUpload'

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const PhotoCard = styled.div<{ $isActive: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid ${props => props.$isActive ? '#4ade80' : 'rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`

const PhotoImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`

const PhotoTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const PhotoDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

const PhotoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const PhotoPage = styled.span`
  background: #667eea;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
`

const PhotoSortOrder = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  background: ${props => {
    switch (props.$variant) {
      case 'danger': return '#dc2626'
      case 'secondary': return '#6b7280'
      default: return '#667eea'
    }
  }};
  color: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`

const AddButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
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
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

const SuccessMessage = styled.div`
  color: #4ade80;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

export const CarouselPhotosManager: React.FC = () => {
  const [photos, setPhotos] = useState<CarouselPhoto[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPhoto, setEditingPhoto] = useState<CarouselPhoto | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<CreateCarouselPhotoData>({
    title: '',
    description: '',
    imageUrl: '',
    page: 'billiards',
    sortOrder: 0
  })

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      setIsLoading(true)
      const response = await carouselPhotosApi.getCarouselPhotos()
      setPhotos(response.data)
    } catch (error) {
      setError('Ошибка при загрузке фотографий')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof CreateCarouselPhotoData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (imageUrl: string) => {
    handleInputChange('imageUrl', imageUrl)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.imageUrl) {
      setError('Название и изображение обязательны')
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      
      if (editingPhoto) {
        await carouselPhotosApi.updateCarouselPhoto(editingPhoto.id, formData)
        setSuccess('Фотография успешно обновлена')
      } else {
        await carouselPhotosApi.createCarouselPhoto(formData)
        setSuccess('Фотография успешно создана')
      }
      
      fetchPhotos()
      handleCloseModal()
    } catch (error) {
      setError('Ошибка при сохранении фотографии')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (photo: CarouselPhoto) => {
    setEditingPhoto(photo)
    setFormData({
      title: photo.title,
      description: photo.description || '',
      imageUrl: photo.imageUrl,
      page: photo.page,
      sortOrder: photo.sortOrder
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Вы уверены, что хотите удалить эту фотографию?')) {
      return
    }

    try {
      await carouselPhotosApi.deleteCarouselPhoto(id)
      setSuccess('Фотография успешно удалена')
      fetchPhotos()
    } catch (error) {
      setError('Ошибка при удалении фотографии')
    }
  }

  const handleToggleActive = async (photo: CarouselPhoto) => {
    try {
      await carouselPhotosApi.updateCarouselPhoto(photo.id, {
        isActive: !photo.isActive
      })
      fetchPhotos()
    } catch (error) {
      setError('Ошибка при обновлении статуса')
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingPhoto(null)
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      page: 'billiards',
      sortOrder: 0
    })
    setError(null)
    setSuccess(null)
  }

  const getPageLabel = (page: string) => {
    switch (page) {
      case 'billiards': return 'Бильярд'
      case 'karaoke': return 'Караоке'
      case 'disco': return 'Диско'
      default: return page
    }
  }

  return (
    <Container>
      <Title>Управление фотографиями карусели</Title>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      <AddButton onClick={() => setIsModalOpen(true)}>
        + Добавить фотографию
      </AddButton>
      
      {isLoading ? (
        <div style={{ textAlign: 'center', color: '#ffffff' }}>Загрузка...</div>
      ) : (
        <Grid>
          {photos.map(photo => (
            <PhotoCard key={photo.id} $isActive={photo.isActive}>
              <PhotoImage src={photo.imageUrl} alt={photo.title} />
              <PhotoTitle>{photo.title}</PhotoTitle>
              {photo.description && (
                <PhotoDescription>{photo.description}</PhotoDescription>
              )}
              <PhotoMeta>
                <PhotoPage>{getPageLabel(photo.page)}</PhotoPage>
                <PhotoSortOrder>Порядок: {photo.sortOrder}</PhotoSortOrder>
              </PhotoMeta>
              <ButtonGroup>
                <Button onClick={() => handleEdit(photo)}>
                  Редактировать
                </Button>
                <Button 
                  $variant="secondary" 
                  onClick={() => handleToggleActive(photo)}
                >
                  {photo.isActive ? 'Скрыть' : 'Показать'}
                </Button>
                <Button 
                  $variant="danger" 
                  onClick={() => handleDelete(photo.id)}
                >
                  Удалить
                </Button>
              </ButtonGroup>
            </PhotoCard>
          ))}
        </Grid>
      )}
      
      <Modal $isOpen={isModalOpen}>
        <ModalContent>
          <h3 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
            {editingPhoto ? 'Редактировать фотографию' : 'Добавить фотографию'}
          </h3>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Название *</Label>
              <Input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Введите название фотографии"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Описание</Label>
              <TextArea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Введите описание фотографии"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Страница *</Label>
              <Select
                value={formData.page}
                onChange={(e) => handleInputChange('page', e.target.value as any)}
                required
              >
                <option value="billiards">Бильярд</option>
                <option value="karaoke">Караоке</option>
                <option value="disco">Диско</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Порядок сортировки</Label>
              <Input
                type="number"
                value={formData.sortOrder}
                onChange={(e) => handleInputChange('sortOrder', parseInt(e.target.value))}
                min="0"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Изображение *</Label>
              <ImageUpload
                onImageUpload={handleImageUpload}
                currentImageUrl={formData.imageUrl}
                onImageRemove={() => handleInputChange('imageUrl', '')}
              />
            </FormGroup>
            
            <ButtonGroup>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Сохранение...' : (editingPhoto ? 'Сохранить' : 'Создать')}
              </Button>
              <Button 
                type="button" 
                $variant="secondary"
                onClick={handleCloseModal}
              >
                Отмена
              </Button>
            </ButtonGroup>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  )
} 