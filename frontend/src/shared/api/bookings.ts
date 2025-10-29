import axios from 'axios'
import { Hall, Zone } from './halls'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

export enum BookingType {
  TABLE = 'table',
  SEAT = 'seat'
}

export interface Booking {
  id: number
  type: BookingType
  hallId: number
  hallName: string
  zoneId: number
  zoneName: string
  date: string
  time: string
  duration?: number
  guestsCount: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  selectedSeats?: number[]
  selectedTables?: number[]
  totalAmount: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface CreateBookingData {
  type: BookingType
  hallId: number
  zoneId: number
  date: string
  time: string
  duration?: number
  guestsCount: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  selectedSeats?: number[]
  selectedTables?: number[]
  totalAmount: number
}

export const createBooking = async (data: CreateBookingData): Promise<Booking> => {
  const response = await axios.post(`${API_BASE_URL}/bookings`, data)
  return response.data
}

export const getBookings = async (): Promise<Booking[]> => {
  const response = await axios.get(`${API_BASE_URL}/bookings`)
  return response.data
}

export const updateBooking = async (id: number, data: Partial<CreateBookingData>): Promise<Booking> => {
  const response = await axios.put(`${API_BASE_URL}/bookings/${id}`, data)
  return response.data
}

export const deleteBooking = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/bookings/${id}`)
}
