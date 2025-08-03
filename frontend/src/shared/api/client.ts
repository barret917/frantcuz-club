import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

// Типы для API ответов
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}

// Конфигурация API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

// Создание axios инстанса
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Интерцептор для запросов
apiClient.interceptors.request.use(
  (config: any) => {
    // Добавляем токен авторизации если есть
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// Интерцептор для ответов
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    // Обработка ошибок
    if (error.response) {
      const status = error.response.status
      const data = error.response.data as any
      
      switch (status) {
        case 401:
          // Неавторизован - редирект на логин
          localStorage.removeItem('authToken')
          window.location.href = '/login'
          break
        case 403:
          // Доступ запрещен
          console.error('Доступ запрещен')
          break
        case 404:
          // Не найдено
          console.error('Ресурс не найден')
          break
        case 500:
          // Ошибка сервера
          console.error('Ошибка сервера')
          break
        default:
          console.error('Ошибка запроса:', data?.message || error.message)
      }
    } else if (error.request) {
      // Ошибка сети
      console.error('Ошибка сети')
    } else {
      // Другие ошибки
      console.error('Ошибка:', error.message)
    }
    
    return Promise.reject(error)
  }
)

// Утилиты для работы с API
export const handleApiError = (error: AxiosError): ApiError => {
  if (error.response) {
    return {
      message: (error.response.data as any)?.message || 'Ошибка запроса',
      status: error.response.status,
      errors: (error.response.data as any)?.errors,
    }
  }
  
  return {
    message: error.message || 'Ошибка сети',
    status: 0,
  }
}

export const createApiResponse = <T>(data: T, message?: string): ApiResponse<T> => ({
  data,
  message,
  success: true,
}) 