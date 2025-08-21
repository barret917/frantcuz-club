import { apiClient } from './client'

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
  const response = await apiClient.get('/billiards/services')
  return response.data
}

// Получить конкретную услугу бильярда
export const getBilliardsService = async (id: number): Promise<BilliardsService> => {
  const response = await apiClient.get(`/billiards/services/${id}`)
  return response.data
}

// Создать новую услугу бильярда
export const createBilliardsService = async (data: CreateBilliardsServiceData): Promise<BilliardsService> => {
  const response = await apiClient.post('/billiards/services', data)
  return response.data
}

// Обновить услугу бильярда
export const updateBilliardsService = async (id: number, data: UpdateBilliardsServiceData): Promise<BilliardsService> => {
  const response = await apiClient.put(`/billiards/services/${id}`, data)
  return response.data
}

// Удалить услугу бильярда
export const deleteBilliardsService = async (id: number): Promise<{ message: string }> => {
  const response = await apiClient.delete(`/billiards/services/${id}`)
  return response.data
}

// Получить настройки бильярда
export const getBilliardsSettings = async (): Promise<BilliardsSettings> => {
  const response = await apiClient.get('/billiards/settings')
  return response.data
}

// Обновить настройки бильярда
export const updateBilliardsSettings = async (data: UpdateBilliardsSettingsData): Promise<BilliardsSettings> => {
  const response = await apiClient.put('/billiards/settings', data)
  return response.data
} 