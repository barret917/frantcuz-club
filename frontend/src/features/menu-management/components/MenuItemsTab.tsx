import React, { useState, useEffect } from 'react'
import { menuApi, MenuItem, MenuCategory, MenuType } from '@/shared/api/menu'
import { ImageUpload } from '@/shared/ui/ImageUpload'
import styled from 'styled-components'

const Container = styled.div`
  color: #fff;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`

const Th = styled.th`
  padding: 1.5rem 1rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Td = styled.td`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Button = styled.button<{ $variant?: 'primary' | 'danger' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'danger':
        return `
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
          }
        `
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover { 
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
          }
        `
      default:
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
          }
        `
    }
  }}

  &:active {
    transform: translateY(0);
  }
`

const Modal = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  color: #fff;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
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

const Select = styled.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    background: #1a1a2e;
    color: #fff;
    padding: 0.5rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const StatusBadge = styled.span<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: ${props => props.$isActive 
    ? 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)' 
    : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)'
  };
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

const SectionTitle = styled.h3`
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

const ModalTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const PlaceholderImage = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

export const MenuItemsTab: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [menuTypes, setMenuTypes] = useState<MenuType[]>([])
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    currency: '₽',
    imageUrl: '',
    menuTypeId: 0,
    categoryId: 0,
    allergens: [] as string[],
    weight: '',
    calories: 0,
    preparation: '',
    isPopular: false,
    isActive: true,
    sortOrder: 0
  })

  // Логирование Cloudinary переменных для сравнения
  console.log('🍽️ MenuItemsTab компонент загружен')
  console.log('☁️ Cloudinary переменные в меню:')
  console.log('☁️ VITE_CLOUDINARY_CLOUD_NAME:', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
  console.log('☁️ VITE_CLOUDINARY_UPLOAD_PRESET:', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setIsLoading(true)
      const [itemsData, typesData, categoriesData] = await Promise.all([
        menuApi.getMenuItems(),
        menuApi.getMenuTypes(),
        menuApi.getMenuCategories()
      ])
      setMenuItems(itemsData)
      setMenuTypes(typesData)
      setCategories(categoriesData)
    } catch (error) {
      console.error('Ошибка загрузки данных:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddNew = () => {
    setEditingItem(null)
    setFormData({
      name: '',
      description: '',
      price: 0,
      currency: '₽',
      imageUrl: '',
      menuTypeId: 0,
      categoryId: 0,
      allergens: [],
      weight: '',
      calories: 0,
      preparation: '',
      isPopular: false,
      isActive: true,
      sortOrder: 0
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('🚀 Отправляем форму:', formData)
    
    // Валидация формы
    if (!formData.name.trim()) {
      alert('Пожалуйста, введите название блюда')
      return
    }
    
    if (formData.menuTypeId === 0) {
      alert('Пожалуйста, выберите тип меню')
      return
    }
    
    if (formData.categoryId === 0) {
      alert('Пожалуйста, выберите категорию')
      return
    }
    
    if (formData.price <= 0) {
      alert('Пожалуйста, введите корректную цену')
      return
    }
    
    try {
      if (editingItem) {
        console.log('📝 Обновляем блюдо:', editingItem.id)
        await menuApi.updateMenuItem(editingItem.id, formData)
      } else {
        console.log('➕ Создаем новое блюдо')
        await menuApi.createMenuItem(formData)
      }
      
      console.log('✅ Блюдо сохранено успешно')
      handleCloseModal()
      await loadData()
    } catch (error: any) {
      console.error('❌ Ошибка сохранения блюда:', error)
      const errorMessage = error.response?.data?.error || error.message || 'Ошибка сохранения блюда'
      alert(`Ошибка: ${errorMessage}`)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({
      ...prev,
      imageUrl: url
    }))
  }

  const handleImageRemove = () => {
    setFormData(prev => ({
      ...prev,
      imageUrl: ''
    }))
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить это блюдо?')) {
      try {
        await menuApi.deleteMenuItem(id)
        await loadData()
        console.log('✅ Блюдо удалено успешно')
      } catch (error: any) {
        console.error('❌ Ошибка удаления блюда:', error)
        const errorMessage = error.response?.data?.error || error.message || 'Ошибка удаления блюда'
        alert(`Ошибка: ${errorMessage}`)
      }
    }
  }

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item)
    const category = categories.find(cat => cat.id === item.categoryId)
    setFormData({
      name: item.name,
      description: item.description || '',
      price: item.price,
      currency: item.currency || '₽',
      imageUrl: item.imageUrl || '',
      menuTypeId: category?.menuTypeId || 0,
      categoryId: item.categoryId,
      allergens: item.allergens || [],
      weight: item.weight || '',
      calories: item.calories || 0,
      preparation: item.preparation || '',
      isPopular: item.isPopular,
      isActive: item.isActive,
      sortOrder: item.sortOrder
    })
    setIsModalOpen(true)
  }

  // Получаем категории для выбранного типа меню
  const getCategoriesForMenuType = (menuTypeId: number): MenuCategory[] => {
    return categories.filter(cat => cat.menuTypeId === menuTypeId)
  }

  // Обработчик изменения типа меню
  const handleMenuTypeChange = (menuTypeId: number) => {
    setFormData(prev => ({
      ...prev,
      menuTypeId,
      categoryId: 0 // Сбрасываем категорию при смене типа меню
    }))
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingItem(null)
    setFormData({
      name: '',
      description: '',
      price: 0,
      currency: '₽',
      imageUrl: '',
      menuTypeId: 0,
      categoryId: 0,
      allergens: [],
      weight: '',
      calories: 0,
      preparation: '',
      isPopular: false,
      isActive: true,
      sortOrder: 0
    })
  }

  if (isLoading) {
    return <div style={{ color: '#ccc' }}>Загрузка...</div>
  }

  return (
    <Container>
      <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Блюда</h3>
      
      <Button onClick={handleAddNew}>
        + Добавить блюдо
      </Button>

      <Table>
        <thead>
          <tr>
            <Th>Изображение</Th>
            <Th>Название</Th>
            <Th>Тип меню</Th>
            <Th>Категория</Th>
            <Th>Цена</Th>
            <Th>Статус</Th>
            <Th>Действия</Th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => {
            const category = categories.find(cat => cat.id === item.categoryId)
            const menuType = menuTypes.find(type => type.id === category?.menuTypeId)
            return (
              <tr key={item.id}>
                <Td>
                  {item.imageUrl ? (
                    <ItemImage src={item.imageUrl} alt={item.name} />
                  ) : (
                    <PlaceholderImage />
                  )}
                </Td>
                <Td>{item.name}</Td>
                <Td>{menuType?.name || 'Неизвестно'}</Td>
                <Td>{category?.name || 'Неизвестно'}</Td>
                <Td>{item.price} ₽</Td>
                <Td>
                  <StatusBadge $isActive={item.isActive}>
                    {item.isActive ? 'Активно' : 'Неактивно'}
                  </StatusBadge>
                </Td>
                <Td>
                  <Button $variant="secondary" onClick={() => handleEdit(item)}>
                    Редактировать
                  </Button>
                  <Button $variant="danger" onClick={() => handleDelete(item.id)}>
                    Удалить
                  </Button>
                </Td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      <Modal $isOpen={isModalOpen}>
        <ModalContent>
          <ModalTitle>
            {editingItem ? 'Редактировать блюдо' : 'Добавить блюдо'}
          </ModalTitle>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Тип меню</Label>
              <Select
                value={formData.menuTypeId}
                onChange={(e) => handleMenuTypeChange(parseInt(e.target.value))}
                required
              >
                <option value={0}>Выберите тип меню</option>
                {menuTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Категория</Label>
              <Select
                value={formData.categoryId}
                onChange={(e) => handleInputChange('categoryId', parseInt(e.target.value))}
                required
                disabled={formData.menuTypeId === 0}
              >
                <option value={0}>
                  {formData.menuTypeId === 0 ? 'Сначала выберите тип меню' : 'Выберите категорию'}
                </option>
                {getCategoriesForMenuType(formData.menuTypeId).map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Название</Label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Название блюда"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Описание</Label>
              <Input
                type="text"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Описание блюда"
              />
            </FormGroup>

            <FormGroup>
              <Label>Цена (₽)</Label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                min="0"
                step="0.01"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Вес/Объем</Label>
              <Input
                type="text"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                placeholder="Например: 300г, 0.5л"
              />
            </FormGroup>

            <FormGroup>
              <Label>Калории</Label>
              <Input
                type="number"
                value={formData.calories}
                onChange={(e) => handleInputChange('calories', parseInt(e.target.value))}
                min="0"
              />
            </FormGroup>

            <FormGroup>
              <Label>Время приготовления</Label>
              <Input
                type="text"
                value={formData.preparation}
                onChange={(e) => handleInputChange('preparation', e.target.value)}
                placeholder="Например: 15 мин"
              />
            </FormGroup>

            <FormGroup>
              <Label>Изображение</Label>
              <ImageUpload
                onImageUpload={handleImageUpload}
                onImageRemove={handleImageRemove}
                currentImageUrl={formData.imageUrl}
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <input
                  type="checkbox"
                  checked={formData.isPopular}
                  onChange={(e) => handleInputChange('isPopular', e.target.checked)}
                />
                Популярное блюдо
              </Label>
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

            <ButtonGroup>
              <Button type="submit">
                {editingItem ? 'Сохранить' : 'Создать'}
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