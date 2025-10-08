import React, { useState, useEffect } from 'react'
import { menuApi, MenuType } from '@/shared/api/menu'
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
  max-width: 500px;
  color: #fff;
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

export const MenuTypesTab: React.FC = () => {
  const [menuTypes, setMenuTypes] = useState<MenuType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingType, setEditingType] = useState<MenuType | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sortOrder: 0
  })

  useEffect(() => {
    loadMenuTypes()
  }, [])

  const loadMenuTypes = async () => {
    try {
      setIsLoading(true)
      const data = await menuApi.getMenuTypes()
      setMenuTypes(data)
    } catch (error) {
      console.error('Ошибка загрузки типов меню:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddNew = () => {
    setEditingType(null)
    setFormData({
      name: '',
      description: '',
      sortOrder: 0
    })
    setIsModalOpen(true)
  }

  const handleEdit = (menuType: MenuType) => {
    setEditingType(menuType)
    setFormData({
      name: menuType.name,
      description: menuType.description || '',
      sortOrder: menuType.sortOrder
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот тип меню?')) {
      try {
        await menuApi.deleteMenuType(id)
        await loadMenuTypes()
      } catch (error: any) {
        console.error('Ошибка удаления типа меню:', error)
        const errorMessage = error.response?.data?.error || error.message || 'Ошибка удаления типа меню'
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

      if (editingType) {
        await menuApi.updateMenuType(editingType.id, submitData)
      } else {
        await menuApi.createMenuType(submitData)
      }
      
      setIsModalOpen(false)
      await loadMenuTypes()
    } catch (error) {
      console.error('Ошибка сохранения типа меню:', error)
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
      <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Типы меню</h3>
      
      <Button onClick={handleAddNew}>
        + Добавить тип меню
      </Button>

      <Table>
        <thead>
          <tr>
            <Th>Название</Th>
            <Th>Slug</Th>
            <Th>Описание</Th>
            <Th>Статус</Th>
            <Th>Порядок</Th>
            <Th>Действия</Th>
          </tr>
        </thead>
        <tbody>
          {menuTypes.map(menuType => (
            <tr key={menuType.id}>
              <Td>{menuType.name}</Td>
              <Td>{menuType.slug}</Td>
              <Td>{menuType.description || '-'}</Td>
              <Td>
                <StatusBadge $isActive={menuType.isActive}>
                  {menuType.isActive ? 'Активен' : 'Неактивен'}
                </StatusBadge>
              </Td>
              <Td>{menuType.sortOrder}</Td>
              <Td>
                <Button $variant="secondary" onClick={() => handleEdit(menuType)}>
                  Редактировать
                </Button>
                <Button $variant="danger" onClick={() => handleDelete(menuType.id)}>
                  Удалить
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal $isOpen={isModalOpen}>
        <ModalContent>
          <h3 style={{ marginBottom: '1rem', color: '#ffd700' }}>
            {editingType ? 'Редактировать тип меню' : 'Добавить тип меню'}
          </h3>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Название</Label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Например: Основное меню"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Описание</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Описание типа меню"
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
                {editingType ? 'Сохранить' : 'Создать'}
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