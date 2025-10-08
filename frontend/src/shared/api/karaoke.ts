import { apiClient } from './client'

// Интерфейсы для караоке
export interface KaraokeService {
  id: number
  name: string
  type: 'standard'
  price: number
  description?: string
  imageUrl?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface CreateKaraokeServiceData {
  name: string
  type: 'standard'
  price: number
  description?: string
  imageUrl?: string
  sortOrder?: number
}

export interface UpdateKaraokeServiceData {
  name?: string
  type?: 'standard'
  price?: number
  description?: string
  imageUrl?: string
  isActive?: boolean
  sortOrder?: number
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