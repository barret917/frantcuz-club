import axios from 'axios'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

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
  const response = await axios.get(`${API_BASE_URL}/karaoke/services`)
  return response.data
}

export const getKaraokeService = async (id: number): Promise<KaraokeService> => {
  const response = await axios.get(`${API_BASE_URL}/karaoke/services/${id}`)
  return response.data
}

export const createKaraokeService = async (data: CreateKaraokeServiceData): Promise<KaraokeService> => {
  const response = await axios.post(`${API_BASE_URL}/karaoke/services`, data)
  return response.data
}

export const updateKaraokeService = async (id: number, data: UpdateKaraokeServiceData): Promise<KaraokeService> => {
  const response = await axios.put(`${API_BASE_URL}/karaoke/services/${id}`, data)
  return response.data
}

export const deleteKaraokeService = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/karaoke/services/${id}`)
} 