import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ImageUpload } from '@/shared/ui/ImageUpload'
import { 
  BilliardsService, 
  getBilliardsServices, 
  updateBilliardsService,
  createBilliardsService,
  deleteBilliardsService
} from '@/shared/api/billiards'

const Container = styled.div`
  color: #fff;
  padding: 2rem;
`

const Title = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const CardIcon = styled.div`
  font-size: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const CardTitle = styled.h4`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
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

const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  resize: vertical;
  min-height: 80px;

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
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  option {
    background: #1a1a1a;
    color: #fff;
  }
`

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
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

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  cursor: pointer;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #667eea;
  }
`

const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  margin-top: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SaveAllButton = styled(Button)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  align-self: center;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);

  &:hover {
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  }
`

const LoadingMessage = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
`

const ErrorMessage = styled.div`
  color: #ef4444;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`

const SuccessMessage = styled.div`
  color: #10b981;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.3);
`

export const BilliardsPricing: React.FC = () => {
  const [pricingData, setPricingData] = useState<BilliardsService[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newService, setNewService] = useState({
    name: '',
    type: 'russian' as 'russian' | 'american' | 'vip',
    weekdayPrice: 0,
    weekendPrice: 0,
    description: '',
    imageUrl: '',
    sortOrder: 0
  })

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    loadBilliardsServices()
  }, [])

  const loadBilliardsServices = async () => {
    try {
      setLoading(true)
      setError(null)
      const services = await getBilliardsServices()
      setPricingData(services)
    } catch (err) {
      setError('Ошибка при загрузке данных о бильярде')
      console.error('Ошибка загрузки:', err)
    } finally {
      setLoading(false)
    }
  }

  const handlePriceChange = (id: number, field: keyof BilliardsService, value: any) => {
    setPricingData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    )
  }

  const handleImageUpload = (id: number, url: string) => {
    handlePriceChange(id, 'imageUrl', url)
  }

  const handleImageRemove = (id: number) => {
    handlePriceChange(id, 'imageUrl', '')
  }

  const handleCreateService = async () => {
    try {
      setError(null)
      setSuccess(null)
      
      const service = await createBilliardsService(newService)
      setPricingData(prev => [...prev, service])
      setShowCreateForm(false)
      setNewService({
        name: '',
        type: 'russian',
        weekdayPrice: 0,
        weekendPrice: 0,
        description: '',
        imageUrl: '',
        sortOrder: 0
      })
      setSuccess('Новая услуга успешно создана!')
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError('Ошибка при создании услуги')
      console.error('Ошибка создания:', err)
    }
  }

  const handleDeleteService = async (id: number) => {
    if (!confirm('Вы уверены, что хотите удалить эту услугу?')) return
    
    try {
      setError(null)
      setSuccess(null)
      
      await deleteBilliardsService(id)
      setPricingData(prev => prev.filter(service => service.id !== id))
      setSuccess('Услуга успешно удалена!')
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError('Ошибка при удалении услуги')
      console.error('Ошибка удаления:', err)
    }
  }

  const createSampleData = async () => {
    try {
      setError(null)
      setSuccess(null)
      setLoading(true)
      
      const sampleServices = [
        {
          name: 'Русский бильярд',
          type: 'russian' as const,
          weekdayPrice: 800,
          weekendPrice: 1000,
          description: 'Классический русский бильярд с профессиональными столами',
          imageUrl: '',
          sortOrder: 1
        },
        {
          name: 'Американский пул',
          type: 'american' as const,
          weekdayPrice: 600,
          weekendPrice: 800,
          description: 'Американский пул для любителей быстрой игры',
          imageUrl: '',
          sortOrder: 2
        },
        {
          name: 'VIP зал',
          type: 'vip' as const,
          weekdayPrice: 1200,
          weekendPrice: 1500,
          description: 'Премиум VIP залы с эксклюзивным обслуживанием',
          imageUrl: '',
          sortOrder: 3
        }
      ]
      
      const createdServices = []
      for (const service of sampleServices) {
        try {
          const created = await createBilliardsService(service)
          createdServices.push(created)
        } catch (err) {
          console.error('Ошибка создания услуги:', service.name, err)
        }
      }
      
      if (createdServices.length > 0) {
        setPricingData(createdServices)
        setSuccess(`Создано ${createdServices.length} тестовых услуг!`)
        setTimeout(() => setSuccess(null), 3000)
      } else {
        setError('Не удалось создать тестовые данные')
      }
    } catch (err) {
      setError('Ошибка при создании тестовых данных')
      console.error('Ошибка создания тестовых данных:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setError(null)
      setSuccess(null)
      
      // Обновляем все измененные услуги
      const updatePromises = pricingData.map(service => 
        updateBilliardsService(service.id, {
          name: service.name,
          type: service.type,
          weekdayPrice: service.weekdayPrice,
          weekendPrice: service.weekendPrice,
          description: service.description,
          imageUrl: service.imageUrl,
          isActive: service.isActive,
          sortOrder: service.sortOrder
        })
      )
      
      await Promise.all(updatePromises)
      
      setSuccess('Цены на бильярд успешно обновлены!')
      
      // Перезагружаем данные для обновления временных меток
      await loadBilliardsServices()
      
      // Скрываем сообщение об успехе через 3 секунды
      setTimeout(() => setSuccess(null), 3000)
      
    } catch (err) {
      setError('Ошибка при сохранении данных')
      console.error('Ошибка сохранения:', err)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'russian': return '🎱'
      case 'american': return '🎯'
      case 'vip': return '👑'
      default: return '🎱'
    }
  }

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Загрузка данных о бильярде...</LoadingMessage>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
        <Button onClick={loadBilliardsServices} style={{ margin: '0 auto', display: 'block' }}>
          Попробовать снова
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <Title>🎱 Управление ценами на бильярд</Title>
      
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      {/* Кнопки управления */}
      <div style={{ marginBottom: '2rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          style={{ 
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            fontSize: '1.1rem',
            padding: '1rem 2rem'
          }}
        >
          {showCreateForm ? '❌ Отменить' : '➕ Добавить новую услугу'}
        </Button>
        
        {pricingData.length === 0 && (
          <Button 
            onClick={createSampleData}
            style={{ 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              fontSize: '1.1rem',
              padding: '1rem 2rem'
            }}
          >
            🎯 Создать тестовые данные
          </Button>
        )}
      </div>

      {/* Форма создания новой услуги */}
      {showCreateForm && (
        <PricingCard style={{ marginBottom: '2rem', border: '2px solid #10b981' }}>
          <CardHeader>
            <CardIcon>🆕</CardIcon>
            <CardTitle>Новая услуга</CardTitle>
          </CardHeader>
          
          <Form>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <FormGroup>
                <Label>Название услуги</Label>
                <Input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Например: Русский бильярд"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Тип услуги</Label>
                <Select
                  value={newService.type}
                  onChange={(e) => setNewService(prev => ({ ...prev, type: e.target.value as any }))}
                  required
                >
                  <option value="russian">Русский бильярд</option>
                  <option value="american">Американский пул</option>
                  <option value="vip">VIP зал</option>
                </Select>
              </FormGroup>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <FormGroup>
                <Label>Цена в будни (₽/час)</Label>
                <Input
                  type="number"
                  value={newService.weekdayPrice}
                  onChange={(e) => setNewService(prev => ({ ...prev, weekdayPrice: parseFloat(e.target.value) }))}
                  min="0"
                  step="0.01"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Цена в выходные (₽/час)</Label>
                <Input
                  type="number"
                  value={newService.weekendPrice}
                  onChange={(e) => setNewService(prev => ({ ...prev, weekendPrice: parseFloat(e.target.value) }))}
                  min="0"
                  step="0.01"
                  required
                />
              </FormGroup>
            </div>
            
            <FormGroup>
              <Label>Описание</Label>
              <Textarea
                value={newService.description}
                onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Краткое описание услуги..."
              />
            </FormGroup>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Button 
                type="button"
                onClick={handleCreateService}
                style={{ 
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  fontSize: '1.1rem',
                  padding: '0.75rem 1.5rem'
                }}
                disabled={!newService.name || newService.weekdayPrice <= 0 || newService.weekendPrice <= 0}
              >
                ✅ Создать услугу
              </Button>
            </div>
          </Form>
        </PricingCard>
      )}
      
      {/* Существующие услуги */}
      {pricingData.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <PricingGrid>
            {pricingData.map((item) => (
              <PricingCard key={item.id}>
                <CardHeader>
                  <CardIcon>{getTypeIcon(item.type)}</CardIcon>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                
                <Form>
                  <FormGroup>
                    <Label>Цена в будни (₽/час)</Label>
                    <Input
                      type="number"
                      value={item.weekdayPrice}
                      onChange={(e) => handlePriceChange(item.id, 'weekdayPrice', parseFloat(e.target.value))}
                      min="0"
                      step="0.01"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Цена в выходные (₽/час)</Label>
                    <Input
                      type="number"
                      value={item.weekendPrice}
                      onChange={(e) => handlePriceChange(item.id, 'weekendPrice', parseFloat(e.target.value))}
                      min="0"
                      step="0.01"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Описание</Label>
                    <Textarea
                      value={item.description || ''}
                      onChange={(e) => handlePriceChange(item.id, 'description', e.target.value)}
                      placeholder="Краткое описание услуги..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Изображение</Label>
                    <ImageUpload
                      onImageUpload={(url) => handleImageUpload(item.id, url)}
                      onImageRemove={() => handleImageRemove(item.id)}
                      currentImageUrl={item.imageUrl || ''}
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
                        onChange={(e) => handlePriceChange(item.id, 'isActive', e.target.checked)}
                      />
                      {item.name} активен
                    </CheckboxLabel>
                  </FormGroup>
                  
                  <FormGroup>
                    <Button 
                      type="button"
                      onClick={() => handleDeleteService(item.id)}
                      style={{ 
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        width: '100%',
                        marginTop: '1rem'
                      }}
                    >
                      🗑️ Удалить услугу
                    </Button>
                  </FormGroup>
                </Form>
              </PricingCard>
            ))}
          </PricingGrid>

          <SaveAllButton type="submit">
            💾 Сохранить все изменения
          </SaveAllButton>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎱</div>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Услуги бильярда не найдены</div>
          <div style={{ fontSize: '1rem' }}>Создайте первую услугу, используя форму выше</div>
        </div>
      )}
    </Container>
  )
} 