import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getBookings, Booking } from '@/shared/api/bookings'

interface BookingsManagementProps {
  onBookingSelect?: (booking: Booking) => void
}

const Container = styled.div`
  padding: 2rem;
`

const Title = styled.h2`
  margin-bottom: 2rem;
  color: #2c3e50;
`

const BookingsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`

const BookingCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: white;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`

export const BookingsManagement: React.FC<BookingsManagementProps> = ({ onBookingSelect }) => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBookings()
  }, [])

  const loadBookings = async () => {
    try {
      setLoading(true)
      const data = await getBookings()
      setBookings(data)
    } catch (error) {
      console.error('Ошибка при загрузке бронирований:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Container>Загрузка бронирований...</Container>
  }

  return (
    <Container>
      <Title>Управление бронированиями</Title>
      <BookingsList>
        {bookings.map((booking) => (
          <BookingCard key={booking.id} onClick={() => onBookingSelect?.(booking)}>
            <h3>{booking.customerName}</h3>
            <div>Зал: {booking.hallName}</div>
            <div>Зона: {booking.zoneName}</div>
            <div>Дата: {booking.date}</div>
            <div>Статус: {booking.status}</div>
          </BookingCard>
        ))}
      </BookingsList>
    </Container>
  )
}
