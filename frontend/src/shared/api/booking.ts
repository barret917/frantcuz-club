import { apiClient, handleApiError, ApiResponse } from './client'

// Типы для бронирования
export interface BookingRequest {
  zoneId: number
  date: string
  time: string
  duration: number
  guestsCount: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  services?: string[]
  comment?: string
}

export interface BookingResponse {
  id: number
  zoneId: number
  zoneName: string
  date: string
  time: string
  duration: number
  guestsCount: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  services?: string[]
  comment?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  totalPrice: number
  createdAt: string
  updatedAt: string
}

export interface BookingFilter {
  date?: string
  zoneId?: number
  status?: string
}

// API методы для бронирования
export const bookingApi = {
  // Создать бронирование
  createBooking: async (data: BookingRequest): Promise<ApiResponse<BookingResponse>> => {
    try {
      const response = await apiClient.post<BookingResponse>('/bookings', data)
      return {
        data: response.data,
        success: true,
        message: 'Бронирование успешно создано',
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Получить все бронирования
  getBookings: async (filters?: BookingFilter): Promise<ApiResponse<BookingResponse[]>> => {
    try {
      const params = new URLSearchParams()
      if (filters?.date) params.append('date', filters.date)
      if (filters?.zoneId) params.append('zoneId', filters.zoneId.toString())
      if (filters?.status) params.append('status', filters.status)

      const response = await apiClient.get<BookingResponse[]>(`/bookings?${params.toString()}`)
      return {
        data: response.data,
        success: true,
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Получить бронирование по ID
  getBookingById: async (id: number): Promise<ApiResponse<BookingResponse>> => {
    try {
      const response = await apiClient.get<BookingResponse>(`/bookings/${id}`)
      return {
        data: response.data,
        success: true,
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Обновить бронирование
  updateBooking: async (id: number, data: Partial<BookingRequest>): Promise<ApiResponse<BookingResponse>> => {
    try {
      const response = await apiClient.put<BookingResponse>(`/bookings/${id}`, data)
      return {
        data: response.data,
        success: true,
        message: 'Бронирование успешно обновлено',
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Отменить бронирование
  cancelBooking: async (id: number): Promise<ApiResponse<BookingResponse>> => {
    try {
      const response = await apiClient.patch<BookingResponse>(`/bookings/${id}/cancel`)
      return {
        data: response.data,
        success: true,
        message: 'Бронирование отменено',
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Подтвердить бронирование
  confirmBooking: async (id: number): Promise<ApiResponse<BookingResponse>> => {
    try {
      const response = await apiClient.patch<BookingResponse>(`/bookings/${id}/confirm`)
      return {
        data: response.data,
        success: true,
        message: 'Бронирование подтверждено',
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Проверить доступность зоны
  checkAvailability: async (zoneId: number, date: string, time: string): Promise<ApiResponse<boolean>> => {
    try {
      const response = await apiClient.get<boolean>(`/zones/${zoneId}/availability`, {
        params: { date, time }
      })
      return {
        data: response.data,
        success: true,
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },
} 