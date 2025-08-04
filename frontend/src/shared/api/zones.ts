import { Zone } from '../model/types'
import { apiClient } from './client'

export const getZones = async (): Promise<Zone[]> => {
  try {
    const response = await apiClient.get('/zones')
    return response.data
  } catch (error) {
    console.error('Ошибка загрузки зон:', error)
    // Возвращаем пустой массив в случае ошибки
    return []
  }
}

export const createZone = async (zoneData: {
  name: string
  openTime: string
  closeTime: string
  imageUrl: string
}): Promise<Zone> => {
  const response = await apiClient.post('/zones', zoneData)
  return response.data
} 