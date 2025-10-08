import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ImageUpload } from '../../../shared/ui/ImageUpload'
import { 
  getKaraokeServices, 
  updateKaraokeService, 
  createKaraokeService, 
  deleteKaraokeService,
  KaraokeService 
} from '../../../shared/api/karaoke'

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const PricingCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 500;
  color: #4a5568;
  font-size: 0.9rem;
`

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const Button = styled.button<{ variant?: 'primary' | 'danger' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ variant }) => {
    switch (variant) {
      case 'danger':
        return `
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #ff5252 0%, #d32f2f 100%);
            transform: translateY(-2px);
          }
        `
      case 'secondary':
        return `
          background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
            transform: translateY(-2px);
          }
        `
      default:
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
            transform: translateY(-2px);
          }
        `
    }
  }}
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  color: #4a5568;
`

const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  border: 2px dashed #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  margin-top: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SaveAllButton = styled.button`
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  &:hover {
    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(72, 187, 120, 0.3);
  }
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #4a5568;
  font-size: 1.1rem;
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #e53e3e;
  font-size: 1.1rem;
  background: rgba(229, 62, 62, 0.1);
  border-radius: 12px;
  margin: 1rem 0;
`

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #38a169;
  font-size: 1.1rem;
  background: rgba(56, 161, 105, 0.1);
  border-radius: 12px;
  margin: 1rem 0;
`

export const KaraokePricing: React.FC = () => {
  const [pricingData, setPricingData] = useState<KaraokeService[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    loadKaraokeServices()
  }, [])

  const loadKaraokeServices = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getKaraokeServices()
      setPricingData(data)
    } catch (err) {
      setError('Ошибка при загрузке данных о караоке')
      console.error('Ошибка загрузки:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setError(null)
      setSuccess(null)

      // Обновляем каждую услугу
      for (const item of pricingData) {
        await updateKaraokeService(item.id, {
          name: item.name,
          type: item.type,
          price: item.price,
          description: item.description,
          imageUrl: item.imageUrl,
          isActive: item.isActive,
          sortOrder: item.sortOrder
        })
      }

      setSuccess('Цены на караоке успешно обновлены!')
      await loadKaraokeServices() // Перезагружаем данные
    } catch (err) {
      setError('Ошибка при сохранении данных')
      console.error('Ошибка сохранения:', err)
    }
  }

  const handleImageUpload = (imageUrl: string, index: number) => {
    const newData = [...pricingData]
    newData[index].imageUrl = imageUrl
    setPricingData(newData)
  }

  const handleImageRemove = (index: number) => {
    const newData = [...pricingData]
    newData[index].imageUrl = ''
    setPricingData(newData)
  }

  const getTypeIcon = (type: string) => {
    return '🎤'
  }

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Загрузка данных о караоке...</LoadingMessage>
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
      <h2>Управление ценами на караоке</h2>
      
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      <Form onSubmit={handleSubmit}>
        <PricingGrid>
          {pricingData.map((item, index) => (
            <PricingCard key={item.id}>
              <CardHeader>
                <CardIcon>{getTypeIcon(item.type)}</CardIcon>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>

              <FormGroup>
                <Label>Название:</Label>
                <Input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    const newData = [...pricingData]
                    newData[index].name = e.target.value
                    setPricingData(newData)
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label>Цена (₽):</Label>
                <Input
                  type="number"
                  value={item.price}
                  onChange={(e) => {
                    const newData = [...pricingData]
                    newData[index].price = parseFloat(e.target.value) || 0
                    setPricingData(newData)
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label>Описание:</Label>
                <Textarea
                  value={item.description || ''}
                  onChange={(e) => {
                    const newData = [...pricingData]
                    newData[index].description = e.target.value
                    setPricingData(newData)
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label>Изображение:</Label>
                <ImageUpload
                  onImageUpload={(url) => handleImageUpload(url, index)}
                  onImageRemove={() => handleImageRemove(index)}
                  currentImageUrl={item.imageUrl || undefined}
                />
                {item.imageUrl && (
                  <ImagePreview>
                    <img src={item.imageUrl} alt={item.name} />
                  </ImagePreview>
                )}
              </FormGroup>

              <FormGroup>
                <CheckboxLabel>
                  <input
                    type="checkbox"
                    checked={item.isActive}
                    onChange={(e) => {
                      const newData = [...pricingData]
                      newData[index].isActive = e.target.checked
                      setPricingData(newData)
                    }}
                  />
                  Активна
                </CheckboxLabel>
              </FormGroup>
            </PricingCard>
          ))}
        </PricingGrid>

        <SaveAllButton type="submit">
          Сохранить все изменения
        </SaveAllButton>
      </Form>
    </Container>
  )
} 