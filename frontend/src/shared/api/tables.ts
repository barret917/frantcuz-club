import { apiClient, handleApiError } from './client'

export interface Table {
  id: number
  name: string
  hallId: number
  zoneId: number
  capacity: number
  isAvailable: boolean
  pricePerHour?: number
  zone?: {
    id: number
    name: string
  }
  createdAt: string
  updatedAt: string
}

export interface AvailableTablesRequest {
  hallId: number
  zoneId?: number
  date: string
  time: string
  duration: number
}

export interface AvailableTablesResponse {
  tables: Table[]
  totalCount: number
}

// Получить все столы
export const getTables = async (): Promise<Table[]> => {
  try {
    const response = await apiClient.get('/tables')
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить доступные столы
export const getAvailableTables = async (request: AvailableTablesRequest): Promise<AvailableTablesResponse> => {
  try {
    const response = await apiClient.post('/tables/available', request)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Получить стол по ID
export const getTable = async (id: number): Promise<Table> => {
  try {
    const response = await apiClient.get(`/tables/${id}`)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Создать стол
export const createTable = async (data: Omit<Table, 'id' | 'createdAt' | 'updatedAt'>): Promise<Table> => {
  try {
    const response = await apiClient.post('/tables', data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Обновить стол
export const updateTable = async (id: number, data: Partial<Table>): Promise<Table> => {
  try {
    const response = await apiClient.put(`/tables/${id}`, data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

// Удалить стол
export const deleteTable = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/tables/${id}`)
  } catch (error) {
    handleApiError(error)
  }
}

// API объект для экспорта
export const tablesApi = {
  getTables,
  getAvailableTables,
  getTable,
  createTable,
  updateTable,
  deleteTable
}
