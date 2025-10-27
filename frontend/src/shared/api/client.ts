import axios from 'axios'

// Если VITE_API_URL не установлен или содержит localhost, используем /api
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

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