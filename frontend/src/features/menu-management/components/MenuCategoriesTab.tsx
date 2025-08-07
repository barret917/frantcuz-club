import React, { useState, useEffect } from 'react'
import { menuApi, MenuCategory, MenuType } from '@/shared/api/menu'
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

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;

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

const StatusBadge = styled.span<{ $isActive: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => props.$isActive ? '#28a745' : '#dc3545'};
  color: white;
`

export const MenuCategoriesTab: React.FC = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [menuTypes, setMenuTypes] = useState<MenuType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<MenuCategory | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    menuTypeId: 0,
    sortOrder: 0
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setIsLoading(true)
      const [categoriesData, typesData] = await Promise.all([
        menuApi.getMenuCategories(),
        menuApi.getMenuTypes()
      ])
      setCategories(categoriesData)
      setMenuTypes(typesData)
    } catch (error) {
      console.error('Ошибка загрузки данных:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddNew = () => {
    setEditingCategory(null)
    setFormData({
      name: '',
      slug: '',
      description: '',
      menuTypeId: 0,
      sortOrder: 0
    })
    setIsModalOpen(true)
  }

  const handleEdit = (category: MenuCategory) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      menuTypeId: category.menuTypeId,
      sortOrder: category.sortOrder
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить эту категорию?')) {
      try {
        await menuApi.deleteMenuCategory(id)
        await loadData()
      } catch (error: any) {
        console.error('Ошибка удаления категории:', error)
        const errorMessage = error.response?.data?.error || error.message || 'Ошибка удаления категории'
        alert(`Ошибка: ${errorMessage}`)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingCategory) {
        await menuApi.updateMenuCategory(editingCategory.id, formData)
      } else {
        await menuApi.createMenuCategory(formData)
      }
      
      setIsModalOpen(false)
      await loadData()
    } catch (error) {
      console.error('Ошибка сохранения категории:', error)
    }
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isLoading) {
    return <div style={{ color: '#ccc' }}>Загрузка...</div>
  }

  return (
    <Container>
      <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Категории меню</h3>
      
      <Button onClick={handleAddNew}>
        + Добавить категорию
      </Button>

      <Table>
        <thead>
          <tr>
            <Th>Название</Th>
            <Th>Slug</Th>
            <Th>Тип меню</Th>
            <Th>Описание</Th>
            <Th>Статус</Th>
            <Th>Порядок</Th>
            <Th>Действия</Th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => {
            const menuType = menuTypes.find(type => type.id === category.menuTypeId)
            return (
              <tr key={category.id}>
                <Td>{category.name}</Td>
                <Td>{category.slug}</Td>
                <Td>{menuType?.name || 'Неизвестно'}</Td>
                <Td>{category.description || '-'}</Td>
                <Td>
                  <StatusBadge $isActive={category.isActive}>
                    {category.isActive ? 'Активна' : 'Неактивна'}
                  </StatusBadge>
                </Td>
                <Td>{category.sortOrder}</Td>
                <Td>
                  <Button $variant="secondary" onClick={() => handleEdit(category)}>
                    Редактировать
                  </Button>
                  <Button $variant="danger" onClick={() => handleDelete(category.id)}>
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
            {editingCategory ? 'Редактировать категорию' : 'Добавить категорию'}
          </h3>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Тип меню</Label>
              <Select
                value={formData.menuTypeId}
                onChange={(e) => handleInputChange('menuTypeId', parseInt(e.target.value))}
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
              <Label>Название</Label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Название категории"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Slug</Label>
              <Input
                type="text"
                value={formData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                placeholder="Slug для URL (например: hot-dishes)"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Описание</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Описание категории"
              />
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
                {editingCategory ? 'Сохранить' : 'Создать'}
              </Button>
              <Button 
                type="button" 
                $variant="secondary"
                onClick={() => setIsModalOpen(false)}
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