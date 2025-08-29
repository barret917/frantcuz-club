import { apiClient } from './client'

export interface Event {
  id: number;
  title: string;
  short_description: string | null;
  description: string | null;
  image_url: string | null;
  event_date: string;
  event_location: string;
  price: string;
  is_used: boolean;
  qr_code: string | null;
  ticket_number: string;
  user_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface CreateEventData {
  title: string;
  short_description: string | null;
  description: string | null;
  image_url: string | null;
  event_date: string;
  event_location: string;
  price: string;
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

// Типы для фильтрации
export type EventFilter = 'all' | 'upcoming' | 'past' | 'current'
export type EventStatus = 'upcoming' | 'active' | 'past'

// Утилиты для работы с мероприятиями
export const eventUtils = {
  // Функция для получения текущего московского времени
  getMoscowTime: (): Date => {
    return new Date() // Просто возвращаем текущее время
  },

  // Функция для конвертации даты в московское время
  toMoscowTime: (date: Date | string): Date => {
    const dateObj = new Date(date)
    // Не добавляем смещение, так как время уже должно быть правильным
    return new Date(dateObj)
  },

  // Функция для определения статуса мероприятия
  // Функция для определения статуса мероприятия
  getEventStatus: (event: Event): EventStatus => {
    const now = new Date()
    const eventDate = new Date(event.event_date)
    const oneHour = 60 * 60 * 1000 // 1 час в миллисекундах
    
    // Если мероприятие идет сейчас (в течение 3 часов до и после)
    const threeHoursBefore = new Date(eventDate.getTime() - 1 * oneHour)
    const threeHoursAfter = new Date(eventDate.getTime() + 3 * oneHour)
    
    if (now >= threeHoursBefore && now <= threeHoursAfter) {
      return 'active'
    }
    
    return now > eventDate ? 'past' : 'upcoming'
  },

  // Функция для форматирования даты и времени мероприятия
  formatEventDateTime: (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Moscow' // Указываем московский часовой пояс
    })
  },

  // Функция для форматирования только даты
  formatEventDate: (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Europe/Moscow'
    })
  },

  // Функция для форматирования только времени
  formatEventTime: (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Moscow'
    })
  },

  // Функция для фильтрации мероприятий на клиенте
  filterEvents: (events: Event[], filter: EventFilter): Event[] => {
    switch (filter) {
      case 'upcoming':
        return events.filter(event => eventUtils.getEventStatus(event) === 'upcoming')
      
      case 'past':
        return events.filter(event => eventUtils.getEventStatus(event) === 'past')
      
      case 'current':
        return events.filter(event => eventUtils.getEventStatus(event) === 'active')
      
      case 'all':
      default:
        return events
    }
  },

  // Функция для сортировки мероприятий по дате
  sortEvents: (events: Event[], sortBy: 'date-asc' | 'date-desc' = 'date-asc'): Event[] => {
    return [...events].sort((a, b) => {
      const dateA = eventUtils.toMoscowTime(a.event_date).getTime()
      const dateB = eventUtils.toMoscowTime(b.event_date).getTime()
      
      return sortBy === 'date-asc' ? dateA - dateB : dateB - dateA
    })
  },

  // Функция для получения статистики мероприятий
  getEventsStats: (events: Event[]): EventsStats => {
    const stats = {
      total: events.length,
      upcoming: 0,
      past: 0,
      active: 0  // меняем current на active
    }
    
    events.forEach(event => {
      const status = eventUtils.getEventStatus(event)
      // Преобразуем 'current' в 'active'
      const statKey = status === 'active' ? 'active' : status
      stats[statKey]++
    })
    
    return stats
  },

  // Функция для группировки мероприятий по датам
  groupEventsByDate: (events: Event[]): Map<string, Event[]> => {
    const grouped = new Map<string, Event[]>()
    
    events.forEach(event => {
      const dateKey = eventUtils.toMoscowTime(event.event_date).toISOString().split('T')[0]
      
      if (!grouped.has(dateKey)) {
        grouped.set(dateKey, [])
      }
      
      grouped.get(dateKey)!.push(event)
    })
    
    return grouped
  },

  // Функция для проверки, является ли дата сегодняшним днем в Москве
  // Функция для проверки, является ли дата сегодняшним днем
  isTodayInMoscow: (date: string | Date): boolean => {
    const today = new Date()
    const eventDate = new Date(date)
    
    // Устанавливаем оба времени в московский часовой пояс для сравнения
    const todayMoscow = today.toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' })
    const eventDateMoscow = eventDate.toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' })
    
    return todayMoscow === eventDateMoscow
  },

  // Функция для генерации изображения мероприятия (запасной вариант)
  generateEventImage: (title: string): string => {
    const colors = ['667eea', '8b5cf6', 'a855f7', 'ec4899', 'f59e0b', '10b981'];
    const pattern = ['abstract', 'nature', 'tech', 'music', 'art', 'party'];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const patternType = pattern[Math.floor(Math.random() * pattern.length)];
    
    return `https://via.placeholder.com/400x200/${color}/ffffff?text=${encodeURIComponent(title)}&pattern=${patternType}`;
  }
}

export const eventsApi = {
  // Получить все мероприятия с серверной фильтрацией
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
    console.log('🖼️ API: URL изображения:', eventData.image_url)
    
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
  async deleteEvent(id: number): Promise<{
    error: string; success: boolean; message: string 
}> {
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
  },

  // Дополнительные методы для клиентской фильтрации
  
  // Получить все мероприятия с клиентской фильтрацией
  async getEventsWithClientFilter(filter?: EventFilter): Promise<EventsResponse> {
    try {
      // Сначала получаем все мероприятия
      const response = await apiClient.get('/events')
      
      if (!response.data.success) {
        return response.data
      }
      
      // Применяем клиентскую фильтрацию
      let filteredData = response.data.data
      
      if (filter && filter !== 'all') {
        filteredData = eventUtils.filterEvents(response.data.data, filter)
      }
      
      // Сортируем по дате (новые сначала)
      filteredData = eventUtils.sortEvents(filteredData, 'date-asc')
      
      return {
        ...response.data,
        data: filteredData
      }
    } catch (error) {
      console.error('Ошибка при получении мероприятий:', error)
      throw error
    }
  },

  // Получить мероприятия по статусу (клиентская фильтрация)
  async getEventsByStatus(status: EventStatus): Promise<EventsResponse> {
    try {
      const response = await apiClient.get('/events')
      
      if (!response.data.success) {
        return response.data
      }
      
      const filteredData = response.data.data.filter((event: Event) => 
        eventUtils.getEventStatus(event) === status
      )
      
      return {
        ...response.data,
        data: eventUtils.sortEvents(filteredData, 'date-asc')
      }
    } catch (error) {
      console.error('Ошибка при получении мероприятий по статусу:', error)
      throw error
    }
  },

  // Получить текущие мероприятия (идут прямо сейчас)
  async getCurrentEvents(): Promise<EventsResponse> {
    return this.getEventsByStatus('active')
  },

  // Получить статистику на основе клиентских данных
  async getClientStats(): Promise<StatsResponse> {
    try {
      const response = await apiClient.get('/events')
      
      if (!response.data.success) {
        return {
          success: false,
          data: { total: 0, upcoming: 0, past: 0, active: 0 },
          error: response.data.error
        }
      }
      
      const stats = eventUtils.getEventsStats(response.data.data)
      
      return {
        success: true,
        data: stats
      }
    } catch (error) {
      console.error('Ошибка при получении статистики:', error)
      return {
        success: false,
        data: { total: 0, upcoming: 0, past: 0, active: 0 },
        error: 'Ошибка при получении статистики'
      }
    }
  }
}