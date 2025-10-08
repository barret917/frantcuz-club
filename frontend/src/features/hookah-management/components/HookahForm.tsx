import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { hookahApi, CreateHookahData, UpdateHookahData, Hookah } from '@/shared/api/hookah'

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

const FeaturesInput = styled.div`
  margin-top: 0.5rem;
`

const FeatureTag = styled.span`
  display: inline-block;
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.3rem 0.6rem;
  border-radius: 16px;
  margin: 0.2rem;
  font-size: 0.9rem;
  
  button {
    background: none;
    border: none;
    color: #667eea;
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    
    &:hover {
      color: #ef4444;
    }
  }
`

const AddFeatureInput = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

interface HookahFormProps {
  hookah?: Hookah
  onSuccess?: () => void
  onCancel?: () => void
}

export const HookahForm: React.FC<HookahFormProps> = ({ hookah, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<CreateHookahData>({
    name: hookah?.name || '',
    description: hookah?.description || '',
    price: hookah?.price || 0,
    features: hookah?.features || [],
    sortOrder: hookah?.sortOrder || 0
  })
  
  const [newFeature, setNewFeature] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'sortOrder' ? parseFloat(value) || 0 : value
    }))
  }

  const addFeature = () => {
    if (newFeature.trim() && !formData.features?.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()]
      }))
      setNewFeature('')
    }
  }

  const removeFeature = (featureToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      features: (prev.features || []).filter(f => f !== featureToRemove)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      if (hookah) {
        // Обновление существующего тарифа
        await hookahApi.updateHookah(hookah.id, formData)
        setSuccessMessage('Тариф кальяна успешно обновлен!')
      } else {
        // Создание нового тарифа
        await hookahApi.createHookah(formData)
        setSuccessMessage('Тариф кальяна успешно создан!')
        setFormData({
          name: '',
          description: '',
          price: 0,
          features: [],
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
        {hookah ? 'Редактировать тариф кальяна' : 'Создать новый тариф кальяна'}
      </FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Название тарифа *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Например: Классический, Премиум, VIP"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Описание</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Описание тарифа, что включено в стоимость"
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
            placeholder="800"
            required
          />
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
          <Label>Особенности тарифа</Label>
          <FeaturesInput>
            {(formData.features || []).map((feature, index) => (
              <FeatureTag key={index}>
                {feature}
                <button type="button" onClick={() => removeFeature(feature)}>
                  ×
                </button>
              </FeatureTag>
            ))}
            <AddFeatureInput>
              <Input
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Добавить особенность"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
              />
              <Button type="button" onClick={addFeature}>
                +
              </Button>
            </AddFeatureInput>
          </FeaturesInput>
        </FormGroup>

        <ButtonGroup>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Сохранение...' : (hookah ? 'Обновить' : 'Создать')}
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