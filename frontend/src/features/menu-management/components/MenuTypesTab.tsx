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
  max-width: 500px;
  color: #fff;
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

export const MenuTypesTab: React.FC = () => {
  const [menuTypes, setMenuTypes] = useState<MenuType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingType, setEditingType] = useState<MenuType | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
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
      slug: '',
      description: '',
      sortOrder: 0
    })
    setIsModalOpen(true)
  }

  const handleEdit = (menuType: MenuType) => {
    setEditingType(menuType)
    setFormData({
      name: menuType.name,
      slug: menuType.slug,
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
      if (editingType) {
        await menuApi.updateMenuType(editingType.id, formData)
      } else {
        await menuApi.createMenuType(formData)
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
              <Label>Slug</Label>
              <Input
                type="text"
                value={formData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                placeholder="Например: main"
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