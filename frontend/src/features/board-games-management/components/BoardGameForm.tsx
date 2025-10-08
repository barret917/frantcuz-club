import React, { useState } from 'react'
import styled from 'styled-components'
import { boardGamesApi, CreateBoardGameData, UpdateBoardGameData, BoardGame } from '@/shared/api/board-games'

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
`

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const FormGroupFull = styled(FormGroup)`
  grid-column: 1 / -1;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  option {
    background: #1a1a2e;
    color: white;
  }
`

const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`

const SuccessMessage = styled.div`
  color: #10b981;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.2);
`

const ErrorMessage = styled.div`
  color: #ef4444;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.2);
`

interface BoardGameFormProps {
  boardGame?: BoardGame
  onSuccess?: () => void
  onCancel?: () => void
}

export const BoardGameForm: React.FC<BoardGameFormProps> = ({ boardGame, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<CreateBoardGameData>({
    name: boardGame?.name || '',
    description: boardGame?.description || '',
    price: boardGame?.price || 0,
    duration: boardGame?.duration || '',
    players: boardGame?.players || '',
    difficulty: boardGame?.difficulty || '',
    category: boardGame?.category || '',
    imageUrl: boardGame?.imageUrl || '',
    sortOrder: boardGame?.sortOrder || 0
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'sortOrder' ? parseFloat(value) || 0 : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      if (boardGame) {
        // Обновление существующей игры
        await boardGamesApi.updateBoardGame(boardGame.id, formData)
        setSuccessMessage('Настольная игра успешно обновлена!')
      } else {
        // Создание новой игры
        await boardGamesApi.createBoardGame(formData)
        setSuccessMessage('Настольная игра успешно создана!')
        setFormData({
          name: '',
          description: '',
          price: 0,
          duration: '',
          players: '',
          difficulty: '',
          category: '',
          imageUrl: '',
          sortOrder: 0
        })
      }
      
      if (onSuccess) {
        setTimeout(() => onSuccess(), 1500)
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.error || 'Произошла ошибка')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormContainer>
      <FormTitle>
        {boardGame ? 'Редактировать настольную игру' : 'Создать новую настольную игру'}
      </FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <Label htmlFor="name">Название игры *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Например: Монополия, Шахматы, Uno"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Цена (₽) *</Label>
            <Input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="500"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="duration">Время игры</Label>
            <Input
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="Например: 30-60 мин"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="players">Количество игроков</Label>
            <Input
              id="players"
              name="players"
              value={formData.players}
              onChange={handleInputChange}
              placeholder="Например: 2-6 игроков"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="difficulty">Сложность</Label>
            <Select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
            >
              <option value="">Выберите сложность</option>
              <option value="Легкая">Легкая</option>
              <option value="Средняя">Средняя</option>
              <option value="Сложная">Сложная</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="category">Категория</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Выберите категорию</option>
              <option value="Стратегия">Стратегия</option>
              <option value="Логика">Логика</option>
              <option value="Семейная">Семейная</option>
              <option value="Детская">Детская</option>
              <option value="Карточная">Карточная</option>
              <option value="Экономическая">Экономическая</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="sortOrder">Порядок сортировки</Label>
            <Input
              id="sortOrder"
              name="sortOrder"
              type="number"
              min="0"
              value={formData.sortOrder}
              onChange={handleInputChange}
              placeholder="0"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="imageUrl">URL изображения</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
            />
          </FormGroup>
        </FormGrid>

        <FormGroupFull>
          <Label htmlFor="description">Описание игры</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Подробное описание игры, правила, что включено в стоимость"
          />
        </FormGroupFull>

        <ButtonGroup>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Сохранение...' : (boardGame ? 'Обновить' : 'Создать')}
          </Button>
          {onCancel && (
            <Button type="button" onClick={onCancel}>
              Отмена
            </Button>
          )}
        </ButtonGroup>
      </form>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormContainer>
  )
} 