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
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background: #333;
  color: #ffd700;
  font-weight: 600;
`

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #333;
`

const Button = styled.button<{ $variant?: 'primary' | 'danger' | 'secondary' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'danger':
        return `
          background: #dc3545;
          color: white;
          &:hover { background: #c82333; }
        `
      case 'secondary':
        return `
          background: #6c757d;
          color: white;
          &:hover { background: #5a6268; }
        `
      default:
        return `
          background: #ffd700;
          color: #000;
          &:hover { background: #ffed4e; }
        `
    }
  }}
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
`

const ModalContent = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  color: #fff;
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
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    background: #333;
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
  border-radius: 4px;
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
                    <div style={{ width: 60, height: 60, background: '#333', borderRadius: 4 }} />
                  )}
                </Td>
                <Td>{item.name}</Td>
                <Td>{menuType?.name || 'Неизвестно'}</Td>
                <Td>{category?.name || 'Неизвестно'}</Td>
                <Td>{item.price} ₽</Td>
                <Td>
                  <span style={{ 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    background: item.isActive ? '#28a745' : '#dc3545',
                    color: 'white'
                  }}>
                    {item.isActive ? 'Активно' : 'Неактивно'}
                  </span>
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
          <h3 style={{ marginBottom: '1rem', color: '#ffd700' }}>
            {editingItem ? 'Редактировать блюдо' : 'Добавить блюдо'}
          </h3>
          
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