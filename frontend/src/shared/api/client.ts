import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Типы для API ответов
export interface ApiResponse<T = any> {
  data: T
  success: boolean
  message?: string
}

// Функция для обработки ошибок API
export const handleApiError = (error: any): never => {
  const message = error.response?.data?.message || error.message || 'Произошла ошибка'
  console.error('API Error:', error.response?.data || error.message)
  throw new Error(message)
}

// Интерцепторы для обработки ошибок
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
) 