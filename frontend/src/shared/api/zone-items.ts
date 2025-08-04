import { ZoneItem } from '@/entities/zone-item/model/types'
import { apiClient } from './client'

export const getZoneItems = async (zoneId: number): Promise<ZoneItem[]> => {
  try {
    const response = await apiClient.get(`/zones/${zoneId}/items`)
    return response.data
  } catch (error) {
    console.error('Ошибка загрузки элементов зоны:', error)
    return []
  }
}

export const saveZoneItems = async (zoneId: number, items: ZoneItem[]): Promise<void> => {
  try {
    await apiClient.post('/zones/items', items)
  } catch (error) {
    console.error('Ошибка сохранения элементов зоны:', error)
    throw error
  }
} 