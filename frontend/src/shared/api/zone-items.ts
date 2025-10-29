import axios from 'axios'
import { handleApiError } from './client'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

export interface ZoneItem {
  id: number
  name: string
  zoneId: number
  type: string
  capacity?: number
  pricePerHour?: number
  isAvailable: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateZoneItemData {
  name: string
  zoneId: number
  type: string
  capacity?: number
}

// Получить элементы зоны
export const getZoneItems = async (zoneId: number): Promise<ZoneItem[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/zones/${zoneId}/items`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить все элементы зон
export const getAllZoneItems = async (): Promise<ZoneItem[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/zone-items`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить элемент зоны по ID
export const getZoneItem = async (id: number): Promise<ZoneItem> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/zone-items/${id}`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Создать элемент зоны
export const createZoneItem = async (data: CreateZoneItemData): Promise<ZoneItem> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/zone-items`, data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Обновить элемент зоны
export const updateZoneItem = async (id: number, data: Partial<CreateZoneItemData>): Promise<ZoneItem> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/zone-items/${id}`, data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Удалить элемент зоны
export const deleteZoneItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/zone-items/${id}`)
  } catch (error) {
    handleApiError(error)
  }
}
