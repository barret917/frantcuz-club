import axios from 'axios'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

export interface BilliardsService {
  id: number
  name: string
  type: 'russian' | 'american' | 'vip'
  price: number
  description?: string
  imageUrl?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface BilliardsSettings {
  id: number
  bookingFee: number
  bookingTimeoutMinutes: number
  minBookingDuration: number
  maxBookingDuration: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateBilliardsServiceData {
  name: string
  type: 'russian' | 'american' | 'vip'
  price: number
  description?: string
  imageUrl?: string
  sortOrder?: number
}

export interface UpdateBilliardsServiceData {
  name?: string
  type?: 'russian' | 'american' | 'vip'
  price?: number
  description?: string
  imageUrl?: string
  isActive?: boolean
  sortOrder?: number
}

export interface UpdateBilliardsSettingsData {
  bookingFee?: number
  bookingTimeoutMinutes?: number
  minBookingDuration?: number
  maxBookingDuration?: number
}

// Получить все услуги бильярда
export const getBilliardsServices = async (): Promise<BilliardsService[]> => {
  const response = await axios.get(`${API_BASE_URL}/billiards/services`)
  return response.data
}

// Получить конкретную услугу бильярда
export const getBilliardsService = async (id: number): Promise<BilliardsService> => {
  const response = await axios.get(`${API_BASE_URL}/billiards/services/${id}`)
  return response.data
}

// Создать новую услугу бильярда
export const createBilliardsService = async (data: CreateBilliardsServiceData): Promise<BilliardsService> => {
  const response = await axios.post(`${API_BASE_URL}/billiards/services`, data)
  return response.data
}

// Обновить услугу бильярда
export const updateBilliardsService = async (id: number, data: UpdateBilliardsServiceData): Promise<BilliardsService> => {
  const response = await axios.put(`${API_BASE_URL}/billiards/services/${id}`, data)
  return response.data
}

// Удалить услугу бильярда
export const deleteBilliardsService = async (id: number): Promise<{ message: string }> => {
  const response = await axios.delete(`${API_BASE_URL}/billiards/services/${id}`)
  return response.data
}

// Получить настройки бильярда
export const getBilliardsSettings = async (): Promise<BilliardsSettings> => {
  const response = await axios.get(`${API_BASE_URL}/billiards/settings`)
  return response.data
}

// Обновить настройки бильярда
export const updateBilliardsSettings = async (data: UpdateBilliardsSettingsData): Promise<BilliardsSettings> => {
  const response = await axios.put(`${API_BASE_URL}/billiards/settings`, data)
  return response.data
} 