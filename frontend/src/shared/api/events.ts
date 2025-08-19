import { apiClient } from './client'

export interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  price?: string
  category: string
  isUpcoming: boolean
  isActive: boolean
  imageUrl?: string
  maxGuests?: number
  location?: string
  organizer?: string
  contactInfo?: string
  tags: string[]
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface CreateEventData {
  title: string
  description: string
  date: string
  time: string
  price?: string
  category: string
  isUpcoming: boolean
  maxGuests?: number
  location?: string
  organizer?: string
  contactInfo?: string
  tags?: string[]
}

export interface UpdateEventData extends Partial<CreateEventData> {}

export interface EventsResponse {
  success: boolean
  data: Event[]
  error?: string
  message?: string
}

export interface EventResponse {
  success: boolean
  data: Event
  error?: string
  message?: string
}

export interface CreateEventResponse {
  success: boolean
  data: Event
  message: string
  error?: string
}

export interface EventsStats {
  total: number
  upcoming: number
  past: number
  active: number
}

export interface StatsResponse {
  success: boolean
  data: EventsStats
  error?: string
}

export const eventsApi = {
  // Получить все мероприятия
  async getEvents(filter?: 'upcoming' | 'past'): Promise<EventsResponse> {
    try {
      const params = filter ? `?filter=${filter}` : ''
      const response = await apiClient.get(`/events${params}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при получении мероприятий:', error)
      throw error
    }
  },

  // Получить мероприятие по ID
  async getEvent(id: number): Promise<EventResponse> {
    try {
      const response = await apiClient.get(`/events/${id}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при получении мероприятия:', error)
      throw error
    }
  },

  // Создать новое мероприятие
  async createEvent(eventData: CreateEventData): Promise<CreateEventResponse> {
    try {
      const response = await apiClient.post('/events', eventData)
      return response.data
    } catch (error) {
      console.error('Ошибка при создании мероприятия:', error)
      throw error
    }
  },

  // Обновить мероприятие
  async updateEvent(id: number, eventData: UpdateEventData): Promise<EventResponse> {
    try {
      const response = await apiClient.put(`/events/${id}`, eventData)
      return response.data
    } catch (error) {
      console.error('Ошибка при обновлении мероприятия:', error)
      throw error
    }
  },

  // Удалить мероприятие
  async deleteEvent(id: number): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.delete(`/events/${id}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при удалении мероприятия:', error)
      throw error
    }
  },

  // Получить статистику мероприятий
  async getStats(): Promise<StatsResponse> {
    try {
      const response = await apiClient.get('/events/stats/overview')
      return response.data
    } catch (error) {
      console.error('Ошибка при получении статистики мероприятий:', error)
      throw error
    }
  }
} 