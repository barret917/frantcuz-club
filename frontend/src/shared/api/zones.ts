import { Zone } from '../model/types'
import { apiClient } from './client'

export const getZones = async (): Promise<Zone[]> => {
  try {
    const response = await apiClient.get('/zones')
    console.log('API Response:', response.data)
    
    // Проверяем структуру ответа
    if (response.data && response.data.success && Array.isArray(response.data.data)) {
      return response.data.data
    } else if (Array.isArray(response.data)) {
      return response.data
    } else {
      console.warn('Неожиданная структура ответа:', response.data)
      return []
    }
  } catch (error) {
    console.error('Ошибка загрузки зон:', error)
    // Возвращаем пустой массив в случае ошибки
    return []
  }
}

 