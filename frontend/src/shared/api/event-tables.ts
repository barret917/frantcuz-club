import { apiClient } from './client'

export interface EventTable {
  id: number
  zoneId: number
  name: string
  x: number
  y: number
  width: number
  height: number
  seats: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  tickets?: any[]
}

export interface CreateEventTableData {
  zoneId: number
  name: string
  x: number
  y: number
  width: number
  height: number
  seats?: number
}

export interface UpdateEventTableData {
  name?: string
  x?: number
  y?: number
  width?: number
  height?: number
  seats?: number
  isActive?: boolean
}

export interface CreateEventTableResponse {
  success: boolean
  data: EventTable
  message: string
}

export interface UpdateEventTableResponse {
  success: boolean
  data: EventTable
  message: string
}

export interface GetEventTablesResponse {
  success: boolean
  data: EventTable[]
}

export interface UpdateTablesBatchResponse {
  success: boolean
  data: EventTable[]
  message: string
}

export const eventTablesApi = {
  // Получить все столы зоны
  async getTablesByZone(zoneId: number): Promise<GetEventTablesResponse> {
    const response = await apiClient.get(`/events/zones/${zoneId}/tables`)
    return response.data
  },

  // Создать новый стол
  async createTable(tableData: CreateEventTableData): Promise<CreateEventTableResponse> {
    const response = await apiClient.post('/events/tables', tableData)
    return response.data
  },

  // Обновить стол
  async updateTable(tableId: number, updateData: UpdateEventTableData): Promise<UpdateEventTableResponse> {
    const response = await apiClient.put(`/events/tables/${tableId}`, updateData)
    return response.data
  },

  // Удалить стол
  async deleteTable(tableId: number): Promise<{ success: boolean; message: string }> {
    const response = await apiClient.delete(`/events/tables/${tableId}`)
    return response.data
  },

  // Массовое обновление столов
  async updateTablesBatch(tables: EventTable[]): Promise<UpdateTablesBatchResponse> {
    const response = await apiClient.put('/events/tables/batch', { tables })
    return response.data
  }
}
