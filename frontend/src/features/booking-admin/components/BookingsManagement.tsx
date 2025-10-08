import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Booking, BookingZone, getBookings, getBookingZones, updateBookingStatus, cancelBooking } from '@/shared/api/booking'

const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
`

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const FilterSelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const BookingsTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
`

const TableRow = styled.div<{ status: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  transition: background 0.2s;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`

const StatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  
  ${props => {
    switch (props.status) {
      case 'confirmed':
        return `
          background: #d1fae5;
          color: #065f46;
        `
      case 'pending':
        return `
          background: #fef3c7;
          color: #92400e;
        `
      case 'cancelled':
        return `
          background: #fee2e2;
          color: #991b1b;
        `
      default:
        return `
          background: #f3f4f6;
          color: #374151;
        `
    }
  }}
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: #3b82f6;
          color: white;
          
          &:hover:not(:disabled) {
            background: #2563eb;
          }
        `
      case 'danger':
        return `
          background: #ef4444;
          color: white;
          
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `
      default:
        return `
          background: #f3f4f6;
          color: #374151;
          
          &:hover:not(:disabled) {
            background: #e5e7eb;
          }
        `
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ErrorMessage = styled.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #fecaca;
`

const SuccessMessage = styled.div`
  background: #f0fdf4;
  color: #16a34a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #bbf7d0;
`

const EmptyState = styled.div`
  text-align: center;
  color: #6b7280;
  padding: 3rem;
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
`

export const BookingsManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [zones, setZones] = useState<BookingZone[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    status: '',
    zoneId: '',
    date: ''
  })

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    loadBookings()
  }, [filters])

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      const [bookingsData, zonesData] = await Promise.all([
        getBookings(),
        getBookingZones()
      ])
      setBookings(bookingsData)
      setZones(zonesData)
    } catch (error) {
      console.error('Error loading data:', error)
      setError('Ошибка загрузки данных')
    } finally {
      setLoading(false)
    }
  }

  const loadBookings = async () => {
    try {
      setLoading(true)
      setError(null)
      const bookingsData = await getBookings()
      setBookings(bookingsData)
    } catch (error) {
      console.error('Error loading bookings:', error)
      setError('Ошибка загрузки бронирований')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (bookingId: number, newStatus: string) => {
    try {
      await updateBookingStatus(bookingId, { status: newStatus as Booking['status'] })
      setBookings(prev => prev.map(booking => 
        booking.id === bookingId ? { ...booking, status: newStatus as Booking['status'] } : booking
      ))
      setSuccessMessage('Статус бронирования обновлен')
    } catch (error) {
      console.error('Error updating status:', error)
      setError('Ошибка обновления статуса')
    }
  }

  const handleCancelBooking = async (bookingId: number) => {
    if (!confirm('Вы уверены, что хотите отменить это бронирование?')) return

    try {
      await cancelBooking(bookingId)
      setBookings(prev => prev.map(booking => 
        booking.id === bookingId ? { ...booking, status: 'cancelled' } : booking
      ))
      setSuccessMessage('Бронирование отменено')
    } catch (error) {
      console.error('Error cancelling booking:', error)
      setError('Ошибка отмены бронирования')
    }
  }

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const filteredBookings = bookings.filter(booking => {
    if (filters.status && booking.status !== filters.status) return false
    if (filters.zoneId && booking.zoneId !== Number(filters.zoneId)) return false
    if (filters.date) {
      const bookingDate = new Date(booking.createdAt).toISOString().split('T')[0]
      if (bookingDate !== filters.date) return false
    }
    return true
  })

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    pending: bookings.filter(b => b.status === 'pending').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  const getZoneName = (zoneId: number) => {
    const zone = zones.find(z => z.id === zoneId)
    return zone ? zone.name : `Зона ${zoneId}`
  }

  if (loading && bookings.length === 0) {
    return (
      <Container>
        <Header>
          <Title>Управление бронированиями</Title>
        </Header>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <LoadingSpinner />
          <div style={{ marginTop: '1rem', color: '#6b7280' }}>Загрузка данных...</div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Управление бронированиями</Title>
      </Header>

      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}

      {successMessage && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}

      <StatsContainer>
        <StatCard>
          <StatValue>{stats.total}</StatValue>
          <StatLabel>Всего бронирований</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.confirmed}</StatValue>
          <StatLabel>Подтверждено</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.pending}</StatValue>
          <StatLabel>Ожидает</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.cancelled}</StatValue>
          <StatLabel>Отменено</StatLabel>
        </StatCard>
      </StatsContainer>

      <FiltersContainer>
        <FilterSelect
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
        >
          <option value="">Все статусы</option>
          <option value="pending">Ожидает</option>
          <option value="confirmed">Подтверждено</option>
          <option value="cancelled">Отменено</option>
        </FilterSelect>

        <FilterSelect
          value={filters.zoneId}
          onChange={(e) => handleFilterChange('zoneId', e.target.value)}
        >
          <option value="">Все зоны</option>
          {zones.map(zone => (
            <option key={zone.id} value={zone.id}>
              {zone.name}
            </option>
          ))}
        </FilterSelect>

        <FilterSelect
          value={filters.date}
          onChange={(e) => handleFilterChange('date', e.target.value)}
        >
          <option value="">Все даты</option>
          <option value={new Date().toISOString().split('T')[0]}>Сегодня</option>
          <option value={new Date(Date.now() + 86400000).toISOString().split('T')[0]}>Завтра</option>
        </FilterSelect>
      </FiltersContainer>

      {filteredBookings.length === 0 ? (
        <EmptyState>
          <h3>Нет бронирований</h3>
          <p>Бронирования не найдены по выбранным фильтрам</p>
        </EmptyState>
      ) : (
        <BookingsTable>
          <TableHeader>
            <div>ID</div>
            <div>Клиент</div>
            <div>Зона</div>
            <div>Время</div>
            <div>Сумма</div>
            <div>Статус</div>
            <div>Действия</div>
          </TableHeader>
          
          {filteredBookings.map(booking => (
            <TableRow key={booking.id} status={booking.status}>
              <div>#{booking.id}</div>
              <div>
                <div>{booking.customerName}</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                  {booking.customerPhone}
                </div>
              </div>
              <div>{getZoneName(booking.zoneId)}</div>
              <div>
                <div>{formatTime(booking.startTime)} - {formatTime(booking.endTime)}</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                  {formatDate(booking.createdAt)}
                </div>
              </div>
              <div>
                <div>{booking.totalPrice} ₽</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                </div>
              </div>
              <div>
                <StatusBadge status={booking.status}>
                  {booking.status === 'confirmed' ? 'Подтверждено' :
                   booking.status === 'pending' ? 'Ожидает' :
                   booking.status === 'cancelled' ? 'Отменено' : booking.status}
                </StatusBadge>
              </div>
              <div>
                <ButtonGroup>
                  {booking.status === 'pending' && (
                    <Button 
                      variant="primary"
                      onClick={() => handleStatusChange(booking.id, 'confirmed')}
                    >
                      Подтвердить
                    </Button>
                  )}
                  {booking.status !== 'cancelled' && (
                    <Button 
                      variant="danger"
                      onClick={() => handleCancelBooking(booking.id)}
                    >
                      Отменить
                    </Button>
                  )}
                </ButtonGroup>
              </div>
            </TableRow>
          ))}
        </BookingsTable>
      )}
    </Container>
  )
}

export default BookingsManagement
