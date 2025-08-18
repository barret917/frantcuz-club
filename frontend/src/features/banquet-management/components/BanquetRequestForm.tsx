import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { banquetRequestsApi, CreateBanquetRequestData } from '@/shared/api/banquet-requests'

interface BanquetRequestFormProps {
  isOpen: boolean
  onClose: () => void
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${css`${fadeIn} 0.3s ease-out`};
  padding: 1rem;
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

const ModalContent = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${css`${slideUp} 0.3s ease-out`};
  
  /* Стилизация скроллбара для Webkit браузеров (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 10px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 95vh;
    border-radius: 16px;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    max-width: 98%;
    max-height: 98vh;
    border-radius: 12px;
  }
`

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 1rem 1rem 0.5rem;
  }
`

const ModalTitle = styled.h2`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.4rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.3rem;
  }
`

const ModalBody = styled.div`
  padding: 2rem;
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  /* Адаптивность для планшетов и мобильных */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 8px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.95rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`

const Select = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  option {
    background: #1a1a2e;
    color: #ffffff;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 8px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.95rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`

const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 8px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.95rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(123, 97, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  /* Адаптивность для планшетов */
  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
  
  /* Адаптивность для мобильных */
  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    border-radius: 10px;
  }
`

const SuccessMessage = styled.div`
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #10b981;
  text-align: center;
  margin-top: 1rem;
`

const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ef4444;
  text-align: center;
  margin-top: 1rem;
`

export const BanquetRequestForm: React.FC<BanquetRequestFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<CreateBanquetRequestData>({
    eventDate: '',
    eventTime: '',
    endTime: '',
    guestCount: 0,
    eventType: '',
    budget: '',
    banquetType: '',
    specialMenu: '',
    music: '',
    decor: '',
    name: '',
    phone: '',
    email: '',
    additionalWishes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (field: keyof CreateBanquetRequestData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      await banquetRequestsApi.create(formData)
      setSubmitStatus('success')
      setFormData({
        eventDate: '',
        eventTime: '',
        endTime: '',
        guestCount: 0,
        eventType: '',
        budget: '',
        banquetType: '',
        specialMenu: '',
        music: '',
        decor: '',
        name: '',
        phone: '',
        email: '',
        additionalWishes: ''
      })
      
      // Закрываем модал через 3 секунды после успешной отправки
      setTimeout(() => {
        onClose()
        setSubmitStatus('idle')
      }, 3000)
    } catch (error: any) {
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Произошла ошибка при отправке заявки')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Заявка на банкет</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label>Дата мероприятия *</Label>
                <Input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Время начала *</Label>
                <Input
                  type="time"
                  value={formData.eventTime}
                  onChange={(e) => handleInputChange('eventTime', e.target.value)}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Время окончания</Label>
                <Input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => handleInputChange('endTime', e.target.value)}
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Количество гостей *</Label>
                <Input
                  type="number"
                  min="1"
                  value={formData.guestCount || ''}
                  onChange={(e) => handleInputChange('guestCount', parseInt(e.target.value) || 0)}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Тип мероприятия *</Label>
                <Select
                  value={formData.eventType}
                  onChange={(e) => handleInputChange('eventType', e.target.value)}
                  required
                >
                  <option value="">Выберите тип</option>
                  <option value="corporate">Корпоратив</option>
                  <option value="birthday">День рождения</option>
                  <option value="wedding">Свадьба</option>
                  <option value="anniversary">Юбилей</option>
                  <option value="other">Другое</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Бюджет *</Label>
                <Select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  required
                >
                  <option value="">Выберите бюджет</option>
                  <option value="low">До 50,000 ₽</option>
                  <option value="medium">50,000 - 100,000 ₽</option>
                  <option value="high">100,000 - 200,000 ₽</option>
                  <option value="premium">Более 200,000 ₽</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Тип банкета</Label>
                <Select
                  value={formData.banquetType}
                  onChange={(e) => handleInputChange('banquetType', e.target.value)}
                >
                  <option value="">Выберите тип</option>
                  <option value="buffet">Фуршет</option>
                  <option value="seated">Сидячий</option>
                  <option value="cocktail">Коктейль</option>
                  <option value="banquet">Банкет</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Особые пожелания по меню</Label>
                <Input
                  type="text"
                  value={formData.specialMenu}
                  onChange={(e) => handleInputChange('specialMenu', e.target.value)}
                  placeholder="Например: вегетарианское, без глютена"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Музыка</Label>
                <Select
                  value={formData.music}
                  onChange={(e) => handleInputChange('music', e.target.value)}
                >
                  <option value="">Выберите музыку</option>
                  <option value="dj">DJ</option>
                  <option value="live">Живая музыка</option>
                  <option value="karaoke">Караоке</option>
                  <option value="none">Без музыки</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Декор</Label>
                <Select
                  value={formData.decor}
                  onChange={(e) => handleInputChange('decor', e.target.value)}
                >
                  <option value="">Выберите декор</option>
                  <option value="simple">Простой</option>
                  <option value="elegant">Элегантный</option>
                  <option value="festive">Праздничный</option>
                  <option value="thematic">Тематический</option>
                  <option value="none">Без декора</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Имя *</Label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Телефон *</Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="example@email.com"
              />
            </FormGroup>

            <FormGroup>
              <Label>Дополнительные пожелания</Label>
              <Textarea
                value={formData.additionalWishes}
                onChange={(e) => handleInputChange('additionalWishes', e.target.value)}
                placeholder="Расскажите о ваших особых пожеланиях..."
                rows={4}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </SubmitButton>

            {submitStatus === 'success' && (
              <SuccessMessage>
                ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
              </SuccessMessage>
            )}

            {submitStatus === 'error' && (
              <ErrorMessage>
                ❌ {errorMessage}
              </ErrorMessage>
            )}
          </Form>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
} 