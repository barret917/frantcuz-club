import { apiClient, handleApiError, ApiResponse } from './client'

// Типы для столов
export interface Table {
  id: number
  zoneId: number
  zoneName: string
  floor: number
  label: string
  type: string
  seats: number
  x: number
  y: number
  width: number
  height: number
  isAvailable: boolean
  currentReservation?: TableReservation | null
}

export interface TableReservation {
  id: number
  startsAt: string
  endsAt: string
  userName: string
  phone: string
  deposit: number
  status: 'booked' | 'arrived' | 'no_show' | 'cancelled'
}

// Типы для бронирования
export interface TableBookingRequest {
  tableId: number
  date: string
  time: string
  duration: number
  guestsCount: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  services?: string[]
  comment?: string
  deposit?: number
}

export interface TableBookingResponse {
  id: number
  tableId: number
  tableLabel: string
  zoneName: string
  customerName: string
  customerPhone: string
  customerEmail?: string
  date: string
  time: string
  duration: number
  guestsCount: number
  endTime: string
  deposit: number
  status: string
  createdAt: string
}

export interface AvailableTablesRequest {
  date: string
  time: string
  duration?: number
  guestsCount?: number
}

export interface AvailableTablesResponse {
  requestedDate: string
  requestedTime: string
  duration: number
  guestsCount: number
  availableTables: Table[]
  totalAvailable: number
}

export interface TableBookingFilter {
  tableId?: number
  date?: string
  status?: string
}

export interface TablesStats {
  totalTables: number
  activeBookings: number
  cancelledBookings: number
  totalRevenue: number
  utilizationRate: string
}

// API методы для столов
export const tablesApi = {
  // Получить все столы с их статусом
  getAllTables: async (): Promise<ApiResponse<Table[]>> => {
    try {
      const response = await apiClient.get<Table[]>('/tables')
      return {
        data: response.data,
        success: true,
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Получить свободные столы на определенную дату и время
  getAvailableTables: async (params: AvailableTablesRequest): Promise<ApiResponse<AvailableTablesResponse>> => {
    try {
      const queryParams = new URLSearchParams()
      queryParams.append('date', params.date)
      queryParams.append('time', params.time)
      if (params.duration) queryParams.append('duration', params.duration.toString())
      if (params.guestsCount) queryParams.append('guestsCount', params.guestsCount.toString())

      const response = await apiClient.get<AvailableTablesResponse>(`/tables/available?${queryParams.toString()}`)
      return {
        data: response.data,
        success: true,
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Создать бронирование стола
  createTableBooking: async (data: TableBookingRequest): Promise<ApiResponse<TableBookingResponse>> => {
    try {
      const response = await apiClient.post<TableBookingResponse>('/tables/bookings', data)
      return {
        data: response.data,
        success: true,
        message: 'Стол успешно забронирован',
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Получить бронирования столов
  getTableBookings: async (filters?: TableBookingFilter): Promise<ApiResponse<TableBookingResponse[]>> => {
    try {
      const params = new URLSearchParams()
      if (filters?.tableId) params.append('tableId', filters.tableId.toString())
      if (filters?.date) params.append('date', filters.date)
      if (filters?.status) params.append('status', filters.status)

      const response = await apiClient.get<TableBookingResponse[]>(`/tables/bookings?${params.toString()}`)
      return {
        data: response.data,
        success: true,
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Обновить статус бронирования
  updateBookingStatus: async (id: number, status: string): Promise<ApiResponse<any>> => {
    try {
      const response = await apiClient.patch(`/tables/bookings/${id}/status`, { status })
      return {
        data: response.data,
        success: true,
        message: 'Статус бронирования обновлен',
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Отменить бронирование
  cancelBooking: async (id: number): Promise<ApiResponse<any>> => {
    try {
      const response = await apiClient.delete(`/tables/bookings/${id}`)
      return {
        data: response.data,
        success: true,
        message: 'Бронирование отменено',
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  },

  // Получить статистику по столам
  getTablesStats: async (date?: string): Promise<ApiResponse<TablesStats>> => {
    try {
      const params = date ? `?date=${date}` : ''
      const response = await apiClient.get<TablesStats>(`/tables/stats${params}`)
      return {
        data: response.data,
        success: true,
      }
    } catch (error) {
      throw handleApiError(error as any)
    }
  }
} 