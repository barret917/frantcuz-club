import { ZoneItem } from '@/entities/zone-item/model/types'
import { apiClient } from './client'

export const getZoneItems = async (zoneId: number): Promise<ZoneItem[]> => {
  try {
    console.log('🌐 API: Загружаем элементы зоны', zoneId)
    const response = await apiClient.get(`/zones/${zoneId}/items`)
    console.log('🌐 API: Ответ:', response.data)
    
    // Бэкенд возвращает { success: true, data: items }
    if (response.data && response.data.success && response.data.data) {
      console.log('🌐 API: Элементы зоны:', response.data.data)
      return response.data.data
    }
    
    // Если формат неожиданный, возвращаем пустой массив
    console.warn('🌐 API: Неожиданный формат ответа:', response.data)
    return []
  } catch (error) {
    console.error('❌ API: Ошибка загрузки элементов зоны:', error)
    return []
  }
}

export const saveZoneItems = async (zoneId: number, items: ZoneItem[]): Promise<void> => {
  try {
    console.log('🌐 API: Сохраняем элементы зоны', zoneId, items)
    
    // Подготавливаем данные для отправки
    const itemsToSave = items.map(item => ({
      zoneId,
      floor: item.floor || 1,
      label: item.label || 'Стол',
      type: item.type || 'table',
      x: item.x || 0,
      y: item.y || 0,
      width: item.width || 100,
      height: item.height || 100,
      seats: item.seats || 4,
      capacity: item.capacity || 4,
      pricePerHour: item.pricePerHour || 0,
      pricePerSeat: item.pricePerSeat || 0,
      pricePerSlot: item.pricePerSlot || 0,
      minDuration: item.minDuration || 1,
      maxDuration: item.maxDuration || 24,
      timeSlots: item.timeSlots || [],
      description: item.description || '',
      features: item.features || []
    }))
    
    console.log('🌐 API: Данные для сохранения:', itemsToSave)
    
    const response = await apiClient.post('/zones/items', itemsToSave)
    console.log('🌐 API: Ответ сохранения:', response.data)
    
    // Проверяем успешность операции
    if (response.data && response.data.success) {
      console.log('✅ API: Элементы зоны успешно сохранены')
    } else {
      throw new Error(response.data?.message || 'Неизвестная ошибка сохранения')
    }
  } catch (error) {
    console.error('❌ API: Ошибка сохранения элементов зоны:', error)
    throw error
  }
} 