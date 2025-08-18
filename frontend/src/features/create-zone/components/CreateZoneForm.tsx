import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui/Container'
import { createZone } from '@/shared/api/zones'
import { uploadImage } from '@/shared/config/cloudinary'

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const Label = styled.label`
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
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

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
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

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const ImageUpload = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.02);

  &:hover {
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.2);
`

const SuccessMessage = styled.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(81, 207, 102, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(81, 207, 102, 0.2);
`

interface CreateZoneData {
  name: string
  openTime: string
  closeTime: string
  imageUrl: string
}

interface CreateZoneFormProps {
  onZoneCreated?: () => void
}

export const CreateZoneForm: React.FC<CreateZoneFormProps> = ({ onZoneCreated }) => {
  const [formData, setFormData] = useState<CreateZoneData>({
    name: '',
    openTime: '',
    closeTime: '',
    imageUrl: ''
  })
  const [errors, setErrors] = useState<string[]>([])
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)

  const handleInputChange = (field: keyof CreateZoneData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageUploading(true)
      try {
        const imageUrl = await uploadImage(file)
        handleInputChange('imageUrl', imageUrl)
      } catch (error) {
        setErrors(['Ошибка загрузки изображения'])
      } finally {
        setImageUploading(false)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors([])
    setSuccess(false)
    setIsLoading(true)

    // Валидация
    const newErrors: string[] = []
    if (!formData.name) newErrors.push('Введите название зала')
    if (!formData.openTime) newErrors.push('Укажите время открытия')
    if (!formData.closeTime) newErrors.push('Укажите время закрытия')
    if (!formData.imageUrl) newErrors.push('Загрузите изображение')

    if (newErrors.length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      // Здесь был бы API запрос
      console.log('Создание зоны:', formData)
      await createZone(formData)
      
      setSuccess(true)
      setFormData({
        name: '',
        openTime: '',
        closeTime: '',
        imageUrl: ''
      })
      
      // Вызываем callback для обновления списка зон
      if (onZoneCreated) {
        onZoneCreated()
      }
    } catch (error) {
      setErrors(['Ошибка создания зала'])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Создание зала</Title>

        <Form onSubmit={handleSubmit}>
          <FormItem>
            <Label>Название зала</Label>
            <Input
              type="text"
              placeholder="Например: Караоке, Бильярд"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </FormItem>

          <FormItem>
            <Label>Время открытия</Label>
            <Input
              type="time"
              value={formData.openTime}
              onChange={(e) => handleInputChange('openTime', e.target.value)}
            />
          </FormItem>

          <FormItem>
            <Label>Время закрытия</Label>
            <Input
              type="time"
              value={formData.closeTime}
              onChange={(e) => handleInputChange('closeTime', e.target.value)}
            />
          </FormItem>

          <FormItem>
            <Label>Изображение зала</Label>
            <ImageUpload>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                id="image-upload"
                disabled={imageUploading}
              />
              <label htmlFor="image-upload" style={{ cursor: imageUploading ? 'not-allowed' : 'pointer' }}>
                {imageUploading ? 'Загрузка...' : formData.imageUrl ? 'Изменить изображение' : 'Нажмите для загрузки изображения'}
              </label>
              {formData.imageUrl && (
                <ImagePreview src={formData.imageUrl} alt="Preview" />
              )}
            </ImageUpload>
          </FormItem>

          {errors.length > 0 && (
            <div>
              {errors.map((error, index) => (
                <ErrorMessage key={index}>{error}</ErrorMessage>
              ))}
            </div>
          )}

          {success && (
            <SuccessMessage>Зал успешно создан!</SuccessMessage>
          )}

          <SubmitButton
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Создается...' : 'Создать зал'}
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  )
} 