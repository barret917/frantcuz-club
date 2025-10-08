import { Hall, Zone } from '@/shared/api/halls'

export interface EventZoneItem {
  id: number
  zoneId: number
  floor: number
  label: string
  type: string
  isBooking: boolean
  isActive: boolean
  x: number
  y: number
  width: number
  height: number
  seats?: number
  capacity?: number
  pricePerSeat?: number
  rotation?: number
  createdAt?: string
  updatedAt?: string
}

export interface EventBooking {
  id: number
  type: 'seat'
  hallId: number
  hallName: string
  zoneId: number
  zoneName: string
  date: string
  time: string
  guestsCount: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  selectedSeats: number[]
  totalAmount: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface CreateEventBookingData {
  type: 'seat'
  hallId: number
  zoneId: number
  date: string
  time: string
  guestsCount: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  selectedSeats: number[]
  totalAmount: number
}

export interface EventHall extends Hall {
  hallType: 'seating'
}

export interface EventZone extends Zone {
  type: 'seating'
}
