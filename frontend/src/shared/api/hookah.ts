import { apiClient } from './client'

export interface Hookah {
  id: number
  name: string
  description?: string
  price: number
  features: string[]
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface CreateHookahData {
  name: string
  description?: string
  price: number
  features?: string[]
  sortOrder?: number
}

export interface UpdateHookahData {
  name: string
  description?: string
  price: number
  features?: string[]
  sortOrder?: number
  isActive?: boolean
}

export interface HookahResponse {
  success: boolean
  data: Hookah[]
  message?: string
  error?: string
}

export interface SingleHookahResponse {
  success: boolean
  data: Hookah
  message?: string
  error?: string
}

export const hookahApi = {
  // Получить все тарифы кальяна
  async getHookahs(): Promise<HookahResponse> {
    try {
      const response = await apiClient.get('/hookah')
      return response.data
    } catch (error) {
      console.error('Ошибка при получении тарифов кальяна:', error)
      throw error
    }
  },

  // Создать новый тариф кальяна
  async createHookah(hookahData: CreateHookahData): Promise<SingleHookahResponse> {
    try {
      const response = await apiClient.post('/hookah', hookahData)
      return response.data
    } catch (error) {
      console.error('Ошибка при создании тарифа кальяна:', error)
      throw error
    }
  },

  // Обновить тариф кальяна
  async updateHookah(id: number, hookahData: UpdateHookahData): Promise<SingleHookahResponse> {
    try {
      const response = await apiClient.put(`/hookah/${id}`, hookahData)
      return response.data
    } catch (error) {
      console.error('Ошибка при обновлении тарифа кальяна:', error)
      throw error
    }
  },

  // Удалить тариф кальяна
  async deleteHookah(id: number): Promise<{ success: boolean; message?: string; error?: string }> {
    try {
      const response = await apiClient.delete(`/hookah/${id}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при удалении тарифа кальяна:', error)
      throw error
    }
  }
} 