import { apiClient } from './client'

export interface EventZone {
  id: number
  name: string
  description: string
  price: number
  maxSeats: number
  isActive: boolean
  sortOrder: number
  eventId: number
  x: number
  y: number
  width: number
  height: number
  tables?: EventTable[]
  tickets?: EventTicket[]
}

export interface EventTable {
  id: number
  name: string
  seats: number
  x: number
  y: number
  width: number
  height: number
  isActive: boolean
  sortOrder: number
  zoneId: number
}

export interface EventTicket {
  id: number
  ticketNumber: string
  status: 'available' | 'sold' | 'used' | 'cancelled'
  price: number
  customerName: string
  customerEmail: string
  customerPhone: string
  purchaseDate: string
  zoneId: number
  tableId: number
  eventId: number
}

export interface CreateEventZoneData {
  name: string
  description?: string
  price: number
  maxSeats: number
  sortOrder?: number
  x?: number
  y?: number
  width?: number
  height?: number
}

export interface UpdateEventZoneData extends Partial<CreateEventZoneData> {
  isActive?: boolean
}

export interface EventZoneResponse {
  success: boolean
  data: EventZone
  message?: string
  error?: string
}

export interface EventZonesResponse {
  success: boolean
  data: EventZone[]
  error?: string
}

export interface ZoneStatsResponse {
  success: boolean
  data: {
    totalSeats: number
    soldTickets: number
    availableSeats: number
    totalRevenue: number
    tablesCount: number
  }
  error?: string
}

export const eventZonesApi = {
  // Получить все зоны мероприятия
  async getEventZones(eventId: number): Promise<EventZonesResponse> {
    try {
      const response = await apiClient.get(`/events/${eventId}/zones`)
      return response.data
    } catch (error) {
      console.error('Ошибка при получении зон мероприятия:', error)
      throw error
    }
  },

  // Создать новую зону мероприятия
  async createEventZone(eventId: number, zoneData: CreateEventZoneData): Promise<EventZoneResponse> {
    try {
      const response = await apiClient.post(`/events/${eventId}/zones`, zoneData)
      return response.data
    } catch (error) {
      console.error('Ошибка при создании зоны мероприятия:', error)
      throw error
    }
  },

  // Обновить зону мероприятия
  async updateEventZone(eventId: number, zoneId: number, zoneData: UpdateEventZoneData): Promise<EventZoneResponse> {
    try {
      const response = await apiClient.put(`/events/${eventId}/zones/${zoneId}`, zoneData)
      return response.data
    } catch (error) {
      console.error('Ошибка при обновлении зоны мероприятия:', error)
      throw error
    }
  },

  // Удалить зону мероприятия
  async deleteEventZone(eventId: number, zoneId: number): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.delete(`/events/${eventId}/zones/${zoneId}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при удалении зоны мероприятия:', error)
      throw error
    }
  },

  // Получить статистику зоны
  async getZoneStats(eventId: number, zoneId: number): Promise<ZoneStatsResponse> {
    try {
      const response = await apiClient.get(`/events/${eventId}/zones/${zoneId}/stats`)
      return response.data
    } catch (error) {
      console.error('Ошибка при получении статистики зоны:', error)
      throw error
    }
  }
}


