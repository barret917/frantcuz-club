import axios from 'axios'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

// Типы для системы бронирования
export interface BookingZone {
  id: number
  name: string
  type: 'billiards' | 'karaoke' | 'playstation' | 'disco'
  description?: string
  openTime: string
  closeTime: string
  pricePerHour: number
  deposit?: number
  imageUrl?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
  tables?: BookingTable[]
}

export interface BookingTable {
  id: number
  zoneId: number
  name: string
  x: number
  y: number
  width: number
  height: number
  seats: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  zone?: BookingZone
}

export interface Booking {
  id: number
  zoneId: number
  tableId?: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  bookingDate: string
  startTime: string
  endTime: string
  duration: number
  guestsCount: number
  totalPrice: number
  deposit?: number
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled' | 'no_show'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  paymentId?: string
  comment?: string
  createdAt: string
  updatedAt: string
  table?: BookingTable
}

export interface CreateBookingRequest {
  tableId: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  startTime: string
  endTime: string
  totalAmount: number
  depositAmount?: number
}

export interface UpdateBookingStatusRequest {
  status: Booking['status']
}

// API функции для зон бронирования
export const getBookingZones = async (): Promise<BookingZone[]> => {
  const response = await axios.get(`${API_BASE_URL}/booking/zones`)
  return response.data
}

export const getBookingZoneById = async (id: number): Promise<BookingZone> => {
  const response = await axios.get(`${API_BASE_URL}/booking/zones/${id}`)
  return response.data
}

export const createBookingZone = async (zone: Partial<BookingZone>): Promise<BookingZone> => {
  const response = await axios.post(`${API_BASE_URL}/booking/zones`, zone)
  return response.data
}

export const updateBookingZone = async (id: number, zone: Partial<BookingZone>): Promise<BookingZone> => {
  const response = await axios.put(`${API_BASE_URL}/booking/zones/${id}`, zone)
  return response.data
}

export const deleteBookingZone = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/booking/zones/${id}`)
}

// API функции для столов
export const getTablesByZone = async (zoneId: number): Promise<BookingTable[]> => {
  const response = await axios.get(`${API_BASE_URL}/booking/zones/${zoneId}/tables`)
  return response.data
}

// API функции для столов по залам
export const getTablesByHall = async (hallId: number): Promise<BookingTable[]> => {
  const response = await axios.get(`${API_BASE_URL}/booking/halls/${hallId}/tables`)
  return response.data
}

export const createBookingTable = async (table: Partial<BookingTable>): Promise<BookingTable> => {
  const response = await axios.post(`${API_BASE_URL}/booking/tables`, table)
  return response.data
}

export const updateBookingTable = async (id: number, table: Partial<BookingTable>): Promise<BookingTable> => {
  const response = await axios.put(`${API_BASE_URL}/booking/tables/${id}`, table)
  return response.data
}

export const deleteBookingTable = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/booking/tables/${id}`)
}

// API функции для бронирований
export const createBooking = async (booking: CreateBookingRequest): Promise<Booking> => {
  const response = await axios.post(`${API_BASE_URL}/booking/reservations`, booking)
  return response.data
}

export const getBookings = async (): Promise<Booking[]> => {
  const response = await axios.get(`${API_BASE_URL}/booking/reservations`)
  return response.data
}

export const getBookingsByDate = async (date: string): Promise<Booking[]> => {
  const response = await axios.get(`${API_BASE_URL}/booking/reservations`, {
    params: { date }
  })
  return response.data
}

export const updateBookingStatus = async (id: number, status: UpdateBookingStatusRequest): Promise<Booking> => {
  const response = await axios.put(`${API_BASE_URL}/booking/reservations/${id}/status`, status)
  return response.data
}

export const cancelBooking = async (id: number): Promise<Booking> => {
  const response = await axios.put(`${API_BASE_URL}/booking/reservations/${id}/cancel`)
  return response.data
}
