import { apiClient } from './client'

// Интерфейсы для караоке
export interface KaraokeService {
  id: number
  name: string
  type: 'standard' | 'vip' | 'premium'
  price: number
  description?: string
  imageUrl?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface KaraokeSettings {
  id: number
  maxVipGuests: number
  baseVipPrice: number
  additionalGuestPrice: number
  depositPolicy: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateKaraokeServiceData {
  name: string
  type: 'standard' | 'vip' | 'premium'
  price: number
  description?: string
  imageUrl?: string
  sortOrder?: number
}

export interface UpdateKaraokeServiceData {
  name?: string
  type?: 'standard' | 'vip' | 'premium'
  price?: number
  description?: string
  imageUrl?: string
  isActive?: boolean
  sortOrder?: number
}

export interface UpdateKaraokeSettingsData {
  maxVipGuests?: number
  baseVipPrice?: number
  additionalGuestPrice?: number
  depositPolicy?: string
  isActive?: boolean
}

// API функции для караоке
export const getKaraokeServices = async (): Promise<KaraokeService[]> => {
  const response = await apiClient.get('/karaoke/services')
  return response.data
}

export const getKaraokeService = async (id: number): Promise<KaraokeService> => {
  const response = await apiClient.get(`/karaoke/services/${id}`)
  return response.data
}

export const createKaraokeService = async (data: CreateKaraokeServiceData): Promise<KaraokeService> => {
  const response = await apiClient.post('/karaoke/services', data)
  return response.data
}

export const updateKaraokeService = async (id: number, data: UpdateKaraokeServiceData): Promise<KaraokeService> => {
  const response = await apiClient.put(`/karaoke/services/${id}`, data)
  return response.data
}

export const deleteKaraokeService = async (id: number): Promise<void> => {
  await apiClient.delete(`/karaoke/services/${id}`)
}

export const getKaraokeSettings = async (): Promise<KaraokeSettings> => {
  const response = await apiClient.get('/karaoke/settings')
  return response.data
}

export const updateKaraokeSettings = async (data: UpdateKaraokeSettingsData): Promise<KaraokeSettings> => {
  const response = await apiClient.put('/karaoke/settings', data)
  return response.data
} 