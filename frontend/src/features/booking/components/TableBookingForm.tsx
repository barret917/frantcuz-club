import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui/Container'
import { tablesApi, Table, AvailableTablesRequest } from '@/shared/api/tables'

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SectionTitle = styled.h3`
  color: #8b5cf6;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const Label = styled.label`
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
`

const Input = styled.input`
  padding: 1rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Select = styled.select`
  padding: 1rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid rgba(102, 126, 234, 0.2);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(102, 126, 234, 0.4);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`

const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

const TableCard = styled.div<{ $selected?: boolean }>`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.05), transparent);
    transition: left 0.4s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
  }
  
  border-color: ${props => props.$selected ? 'rgba(102, 126, 234, 0.4)' : 'rgba(102, 126, 234, 0.2)'};
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 20px;
  }
`

const TableName = styled.h3`
  color: #fff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
`

const TableInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const TablePrice = styled.div`
  color: #22c55e;
  font-weight: bold;
  font-size: 1rem;
`

export const TableBookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    hallId: 1, // По умолчанию первый зал
    bookingDate: '',
    bookingTime: '',
    duration: 2,
    notes: ''
  })
  
  const [availableTables, setAvailableTables] = useState<Table[]>([])
  const [selectedTable, setSelectedTable] = useState<Table | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearchTables = async () => {
    if (!formData.bookingDate || !formData.bookingTime) {
      setError('Пожалуйста, выберите дату и время')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const request: AvailableTablesRequest = {
        hallId: formData.hallId,
        date: formData.bookingDate,
        time: formData.bookingTime,
        duration: formData.duration
      }
      
      const response = await tablesApi.getAvailableTables(request)
      setAvailableTables(response.tables)
    } catch (err) {
      setError('Ошибка поиска доступных столов')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedTable) {
      setError('Пожалуйста, выберите стол')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Здесь будет логика создания бронирования
      console.log('Creating booking:', { ...formData, tableId: selectedTable.id })
      setSuccess('Бронирование создано успешно!')
    } catch (err) {
      setError('Ошибка создания бронирования')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormWrapper>
      <Title>Бронирование стола</Title>
      
      {error && <div style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}
      {success && <div style={{ color: '#22c55e', textAlign: 'center', marginBottom: '1rem' }}>{success}</div>}
      
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <SectionTitle>Контактная информация</SectionTitle>
          
          <FormItem>
            <Label>Ваше имя *</Label>
            <Input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              placeholder="Введите ваше имя"
              required
            />
          </FormItem>
          
          <FormItem>
            <Label>Телефон *</Label>
            <Input
              type="tel"
              name="customerPhone"
              value={formData.customerPhone}
              onChange={handleInputChange}
              placeholder="+7 (999) 123-45-67"
              required
            />
          </FormItem>
          
          <FormItem>
            <Label>Email *</Label>
            <Input
              type="email"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleInputChange}
              placeholder="example@email.com"
              required
            />
          </FormItem>
        </FormSection>

        <FormSection>
          <SectionTitle>Детали бронирования</SectionTitle>
          
          <FormItem>
            <Label>Дата бронирования *</Label>
            <Input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleInputChange}
              required
            />
          </FormItem>
          
          <FormItem>
            <Label>Время *</Label>
            <Input
              type="time"
              name="bookingTime"
              value={formData.bookingTime}
              onChange={handleInputChange}
              required
            />
          </FormItem>
          
          <FormItem>
            <Label>Продолжительность (часы) *</Label>
            <Select
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
            >
              <option value={1}>1 час</option>
              <option value={2}>2 часа</option>
              <option value={3}>3 часа</option>
              <option value={4}>4 часа</option>
              <option value={5}>5 часов</option>
              <option value={6}>6 часов</option>
              <option value={7}>7 часов</option>
              <option value={8}>8 часов</option>
            </Select>
          </FormItem>
          
          <FormItem>
            <Label>Дополнительные пожелания</Label>
            <Textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Особые требования или пожелания"
            />
          </FormItem>
        </FormSection>

        <ButtonGroup>
          <SecondaryButton type="button" onClick={handleSearchTables} disabled={loading}>
            {loading ? 'Поиск...' : 'Найти доступные столы'}
          </SecondaryButton>
        </ButtonGroup>

        {availableTables.length > 0 && (
          <FormSection>
            <SectionTitle>Выберите стол</SectionTitle>
            <TablesGrid>
              {availableTables.map((table) => (
                <TableCard
                  key={table.id}
                  $selected={selectedTable?.id === table.id}
                  onClick={() => setSelectedTable(table)}
                >
                  <TableName>{table.name}</TableName>
                  <TableInfo>Мест: {table.capacity}</TableInfo>
                  <TableInfo>Зона: {table.zone?.name}</TableInfo>
                  <TablePrice>{table.pricePerHour} ₽ за бронирование</TablePrice>
                </TableCard>
              ))}
            </TablesGrid>
          </FormSection>
        )}

        <ButtonGroup>
          <PrimaryButton type="submit" disabled={loading || !selectedTable}>
            {loading ? 'Создание...' : 'Забронировать стол'}
          </PrimaryButton>
        </ButtonGroup>
      </Form>
    </FormWrapper>
  )
}
