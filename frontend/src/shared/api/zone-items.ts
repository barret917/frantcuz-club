import { apiClient, handleApiError } from './client'

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
    const response = await apiClient.get(`/zones/${zoneId}/items`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить все элементы зон
export const getAllZoneItems = async (): Promise<ZoneItem[]> => {
  try {
    const response = await apiClient.get('/zone-items')
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить элемент зоны по ID
export const getZoneItem = async (id: number): Promise<ZoneItem> => {
  try {
    const response = await apiClient.get(`/zone-items/${id}`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Создать элемент зоны
export const createZoneItem = async (data: CreateZoneItemData): Promise<ZoneItem> => {
  try {
    const response = await apiClient.post('/zone-items', data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Обновить элемент зоны
export const updateZoneItem = async (id: number, data: Partial<CreateZoneItemData>): Promise<ZoneItem> => {
  try {
    const response = await apiClient.put(`/zone-items/${id}`, data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Удалить элемент зоны
export const deleteZoneItem = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/zone-items/${id}`)
  } catch (error) {
    handleApiError(error)
  }
}
