import { apiClient, handleApiError } from './client'

export interface Hall {
  id: number
  name: string
  description?: string
  capacity: number
  createdAt: string
  updatedAt: string
}

export interface Zone {
  id: number
  name: string
  hallId: number
  capacity: number
  description?: string
  openTime?: string
  closeTime?: string
  createdAt: string
  updatedAt: string
}

export interface ZoneItem {
  id: number
  name: string
  zoneId: number
  type: string
  capacity?: number
  pricePerHour?: number
  createdAt: string
  updatedAt: string
}

export interface CreateHallData {
  name: string
  description?: string
  capacity: number
  type?: string
  imageUrl?: string
}

// Получить все залы
export const getHalls = async (): Promise<Hall[]> => {
  try {
    const response = await apiClient.get('/halls')
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить зоны зала
export const getZones = async (hallId: number): Promise<Zone[]> => {
  try {
    const response = await apiClient.get(`/halls/${hallId}/zones`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Создать зал
export const createHall = async (data: CreateHallData): Promise<Hall> => {
  try {
    const response = await apiClient.post('/halls', data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить зал по ID
export const getHall = async (id: number): Promise<Hall> => {
  try {
    const response = await apiClient.get(`/halls/${id}`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Обновить зал
export const updateHall = async (id: number, data: Partial<CreateHallData>): Promise<Hall> => {
  try {
    const response = await apiClient.put(`/halls/${id}`, data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Удалить зал
export const deleteHall = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/halls/${id}`)
  } catch (error) {
    handleApiError(error)
  }
}
