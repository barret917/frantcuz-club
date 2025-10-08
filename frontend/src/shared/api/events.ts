import { apiClient } from './client'

export interface Event {
  id: number
  name: string
  title: string
  description: string
  date: string
  startsAt: string
  endsAt?: string
  hallId: number
  hall?: { id: number; name: string }
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
  imageUrl?: string
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
    console.log('🚀 API: Создаем мероприятие:', eventData)
    console.log('🖼️ API: URL изображения:', eventData.imageUrl)
    
    try {
      const response = await apiClient.post('/events', eventData)
      console.log('✅ API: Мероприятие создано:', response.data)
      return response.data
    } catch (error) {
      console.error('❌ API: Ошибка при создании мероприятия:', error)
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
// Получить все события
export const getAllEvents = async (): Promise<Event[]> => {
  const response = await apiClient.get('/events')
  return response.data.data || response.data || []
}

// Создать событие
export const createEvent = async (data: CreateEventData): Promise<Event> => {
  const response = await apiClient.post('/events', data)
  return response.data
}

// Обновить событие
export const updateEvent = async (id: number, data: Partial<CreateEventData>): Promise<Event> => {
  const response = await apiClient.put(`/events/${id}`, data)
  return response.data
}

// Удалить событие
export const deleteEvent = async (id: number): Promise<void> => {
  await apiClient.delete(`/events/${id}`)
}

// Создать событие с залом
export const createEventWithHall = async (data: CreateEventData & { hallName: string; hallDescription?: string }): Promise<Event> => {
  const response = await apiClient.post('/events/with-hall', data)
  return response.data
}
