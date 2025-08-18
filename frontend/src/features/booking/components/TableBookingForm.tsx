import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui/Container'
import { tablesApi, Table, AvailableTablesRequest } from '@/shared/api/tables'

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 16px;
  color: #fff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid #333;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SectionTitle = styled.h3`
  color: #8b5cf6;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #8b5cf6;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }

  &::placeholder {
    color: #666;
  }
`

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }
`

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }

  &::placeholder {
    color: #666;
  }
`

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`

const SuccessMessage = styled.div`
  color: #10b981;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(16, 185, 129, 0.3);
`

const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`

const TableCard = styled.div<{ isSelected: boolean; isAvailable: boolean }>`
  padding: 1rem;
  background: ${props => props.isSelected 
    ? 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)' 
    : props.isAvailable 
      ? 'linear-gradient(135deg, #2a2a2a 0%, #333 100%)' 
      : 'linear-gradient(135deg, #444 0%, #555 100%)'
  };
  border: 2px solid ${props => props.isSelected ? '#8b5cf6' : props.isAvailable ? '#333' : '#666'};
  border-radius: 8px;
  text-align: center;
  cursor: ${props => props.isAvailable ? 'pointer' : 'not-allowed'};
  transition: all 0.3s ease;
  opacity: ${props => props.isAvailable ? 1 : 0.6};

  &:hover {
    transform: ${props => props.isAvailable ? 'translateY(-2px)' : 'none'};
    box-shadow: ${props => props.isAvailable ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none'};
  }
`

const TableLabel = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`

const TableInfo = styled.div`
  font-size: 0.85rem;
  opacity: 0.8;
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #8b5cf6;
  font-size: 1.1rem;
`

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-1px);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
  }
`

interface TableBookingFormProps {
  onSuccess?: () => void
}

export const TableBookingForm: React.FC<TableBookingFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: 120,
    guestsCount: 2,
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    comment: '',
    deposit: 0
  })

  const [availableTables, setAvailableTables] = useState<Table[]>([])
  const [selectedTable, setSelectedTable] = useState<Table | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Генерируем времена для выбора
  const timeOptions = []
  for (let hour = 10; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      timeOptions.push(time)
    }
  }

  const durationOptions = [
    { value: 60, label: '1 час' },
    { value: 120, label: '2 часа' },
    { value: 180, label: '3 часа' },
    { value: 240, label: '4 часа' },
    { value: 300, label: '5 часов' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'duration' || name === 'guestsCount' || name === 'deposit' ? Number(value) : value
    }))
  }

  const searchAvailableTables = async () => {
    if (!formData.date || !formData.time) {
      setError('Пожалуйста, выберите дату и время')
      return
    }

    setIsSearching(true)
    setError(null)
    setSelectedTable(null)

    try {
      const request: AvailableTablesRequest = {
        date: formData.date,
        time: formData.time,
        duration: formData.duration,
        guestsCount: formData.guestsCount
      }

      const response = await tablesApi.getAvailableTables(request)
      setAvailableTables(response.data.availableTables)
      
      if (response.data.availableTables.length === 0) {
        setError('На выбранное время нет свободных столов')
      }
    } catch (err: any) {
      setError(err.message || 'Ошибка при поиске столов')
    } finally {
      setIsSearching(false)
    }
  }

  const handleTableSelect = (table: Table) => {
    setSelectedTable(table)
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedTable) {
      setError('Пожалуйста, выберите стол')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const bookingData = {
        ...formData,
        tableId: selectedTable.id
      }

      await tablesApi.createTableBooking(bookingData)
      
      setSuccess('Стол успешно забронирован!')
      setFormData({
        date: '',
        time: '',
        duration: 120,
        guestsCount: 2,
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        comment: '',
        deposit: 0
      })
      setSelectedTable(null)
      setAvailableTables([])
      
      if (onSuccess) {
        onSuccess()
      }
    } catch (err: any) {
      setError(err.message || 'Ошибка при создании бронирования')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Устанавливаем сегодняшнюю дату по умолчанию
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    setFormData(prev => ({ ...prev, date: today }))
  }, [])

  return (
    <Container>
      <FormWrapper>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8b5cf6' }}>
          🍽️ Забронировать стол
        </h2>

        <Form onSubmit={handleSubmit}>
          {/* Основная информация */}
          <FormSection>
            <SectionTitle>📅 Дата и время</SectionTitle>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <FormItem>
                <Label>Дата</Label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </FormItem>

              <FormItem>
                <Label>Время</Label>
                <Select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Выберите время</option>
                  {timeOptions.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </Select>
              </FormItem>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <FormItem>
                <Label>Длительность</Label>
                <Select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  {durationOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </Select>
              </FormItem>

              <FormItem>
                <Label>Количество гостей</Label>
                <Input
                  type="number"
                  name="guestsCount"
                  value={formData.guestsCount}
                  onChange={handleInputChange}
                  min="1"
                  max="20"
                  required
                />
              </FormItem>
            </div>

            <SearchButton
              type="button"
              onClick={searchAvailableTables}
              disabled={!formData.date || !formData.time || isSearching}
            >
              {isSearching ? '🔍 Поиск...' : '🔍 Найти свободные столы'}
            </SearchButton>
          </FormSection>

          {/* Выбор стола */}
          {availableTables.length > 0 && (
            <FormSection>
              <SectionTitle>🪑 Выберите стол</SectionTitle>
              <TablesGrid>
                {availableTables.map(table => (
                  <TableCard
                    key={table.id}
                    isSelected={selectedTable?.id === table.id}
                    isAvailable={table.isAvailable}
                    onClick={() => handleTableSelect(table)}
                  >
                    <TableLabel>{table.label}</TableLabel>
                    <TableInfo>
                      {table.seats} мест<br />
                      {table.zoneName}
                    </TableInfo>
                  </TableCard>
                ))}
              </TablesGrid>
            </FormSection>
          )}

          {/* Информация о клиенте */}
          <FormSection>
            <SectionTitle>👤 Ваши данные</SectionTitle>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <FormItem>
                <Label>Имя *</Label>
                <Input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
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
            </div>

            <FormItem>
              <Label>Email</Label>
              <Input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                placeholder="your@email.com"
              />
            </FormItem>

            <FormItem>
              <Label>Депозит (₽)</Label>
              <Input
                type="number"
                name="deposit"
                value={formData.deposit}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
              />
            </FormItem>

            <FormItem>
              <Label>Комментарий</Label>
              <Textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Особые пожелания, аллергии, и т.д."
              />
            </FormItem>
          </FormSection>

          {/* Сообщения об ошибках и успехе */}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          {/* Кнопка отправки */}
          <SubmitButton
            type="submit"
            disabled={!selectedTable || isSubmitting}
          >
            {isSubmitting ? '⏳ Отправка...' : '✅ Забронировать стол'}
          </SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  )
} 