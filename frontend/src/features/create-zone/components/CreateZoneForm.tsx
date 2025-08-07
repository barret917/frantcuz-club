import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui/Container'
import { createZone } from '@/shared/api/zones'
import { uploadImage } from '@/shared/config/cloudinary'

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 32px;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`

const Title = styled.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &::placeholder {
    color: #888;
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }

  &::placeholder {
    color: #888;
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`

const ImageUpload = styled.div`
  border: 2px dashed #333;
  border-radius: 6px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ffd700;
  }
`

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 6px;
  margin-top: 1rem;
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

const SuccessMessage = styled.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

interface CreateZoneData {
  name: string
  openTime: string
  closeTime: string
  imageUrl: string
}

export const CreateZoneForm: React.FC = () => {
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