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

const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
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

export const MenuCategoriesTab: React.FC = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [menuTypes, setMenuTypes] = useState<MenuType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<MenuCategory | null>(null)
  const [formData, setFormData] = useState({
    name: '',
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
      // Генерируем slug автоматически на основе названия
      const slug = formData.name
        .toLowerCase()
        .replace(/[^а-яёa-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

      const submitData = {
        ...formData,
        slug
      }

      if (editingCategory) {
        await menuApi.updateMenuCategory(editingCategory.id, submitData)
      } else {
        await menuApi.createMenuCategory(submitData)
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