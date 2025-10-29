import axios from 'axios'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

export interface BanquetRequest {
  id: number
  eventDate: string
  eventTime: string
  endTime?: string
  guestCount: number
  eventType: string
  budget: string
  banquetType?: string
  specialMenu?: string
  music?: string
  decor?: string
  name: string
  phone: string
  email?: string
  additionalWishes?: string
  status: 'pending' | 'approved' | 'rejected' | 'completed'
  createdAt: string
  updatedAt: string
}

export interface CreateBanquetRequestData {
  eventDate: string
  eventTime: string
  endTime?: string
  guestCount: string | number
  eventType: string
  budget: string
  banquetType?: string
  specialMenu?: string
  music?: string
  decor?: string
  name: string
  phone: string
  email?: string
  additionalWishes?: string
}

export interface BanquetRequestsResponse {
  success: boolean
  data: {
    requests: BanquetRequest[]
    pagination: {
      currentPage: number
      totalPages: number
      totalItems: number
      itemsPerPage: number
    }
  }
}

export interface BanquetRequestStats {
  total: number
  pending: number
  approved: number
  rejected: number
  completed: number
}

export const banquetRequestsApi = {
  // Создание новой заявки на банкет
  create: async (data: CreateBanquetRequestData): Promise<{ success: boolean; message: string; data?: BanquetRequest }> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/banquet-requests`, data)
      return response.data
    } catch (error: any) {
      console.error('❌ Ошибка создания заявки на банкет:', error)
      throw new Error(error.response?.data?.message || 'Ошибка отправки заявки')
    }
  },

  // Получение всех заявок (для админки)
  getAll: async (params?: {
    page?: number
    limit?: number
    status?: string
    search?: string
  }): Promise<BanquetRequestsResponse> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/banquet-requests`, { params })
      return response.data
    } catch (error: any) {
      console.error('❌ Ошибка получения заявок на банкеты:', error)
      throw new Error(error.response?.data?.message || 'Ошибка получения заявок')
    }
  },

  // Получение заявки по ID
  getById: async (id: number): Promise<{ success: boolean; data: BanquetRequest }> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/banquet-requests/${id}`)
      return response.data
    } catch (error: any) {
      console.error('❌ Ошибка получения заявки:', error)
      throw new Error(error.response?.data?.message || 'Ошибка получения заявки')
    }
  },

  // Обновление статуса заявки
  updateStatus: async (id: number, status: string): Promise<{ success: boolean; message: string; data: BanquetRequest }> => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/banquet-requests/${id}/status`, { status })
      return response.data
    } catch (error: any) {
      console.error('❌ Ошибка обновления статуса заявки:', error)
      throw new Error(error.response?.data?.message || 'Ошибка обновления статуса')
    }
  },

  // Удаление заявки
  delete: async (id: number): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/banquet-requests/${id}`)
      return response.data
    } catch (error: any) {
      console.error('❌ Ошибка удаления заявки:', error)
      throw new Error(error.response?.data?.message || 'Ошибка удаления заявки')
    }
  },

  // Получение статистики по заявкам
  getStats: async (): Promise<{ success: boolean; data: BanquetRequestStats }> => {
    try {
      const response = await axios.get('/banquet-requests/stats/overview')
      return response.data
    } catch (error: any) {
      console.error('❌ Ошибка получения статистики:', error)
      throw new Error(error.response?.data?.message || 'Ошибка получения статистики')
    }
  }
} 