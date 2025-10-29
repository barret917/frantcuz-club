import axios from 'axios'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

// ===== ТИПЫ ДАННЫХ =====

export interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  imageUrl?: string
  location?: string
  organizer?: string
  contactInfo?: string
  isActive: boolean
  isUpcoming: boolean
  maxGuests?: number
  sortOrder: number
  createdAt: string
  updatedAt: string
  zones?: EventZone[]
  tickets?: EventTicket[]
}

export interface EventZone {
  id: number
  eventId: number
  name: string
  description?: string
  price: number
  maxSeats?: number
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
  tables?: EventTable[]
  tickets?: EventTicket[]
}

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
  tickets?: EventTicket[]
}

export interface EventTicket {
  id: number
  eventId: number
  zoneId: number
  tableId: number
  ticketNumber: string
  qrCode?: string
  price: number
  status: 'available' | 'sold' | 'used' | 'cancelled'
  customerName: string
  customerEmail: string
  customerPhone: string
  paymentId?: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  purchasedAt?: string
  usedAt?: string
  createdAt: string
  updatedAt: string
  event?: Event
  zone?: EventZone
  table?: EventTable
}

// ===== ТИПЫ ДЛЯ СОЗДАНИЯ =====

export interface CreateEventData {
  title: string
  description: string
  date: string
  time: string
  imageUrl?: string
  location?: string
  organizer?: string
  contactInfo?: string
  maxGuests?: number
  isUpcoming?: boolean
}

export interface CreateZoneData {
  eventId: number
  name: string
  description?: string
  price: number
  maxSeats?: number
  sortOrder?: number
}

export interface CreateTableData {
  zoneId: number
  name: string
  x: number
  y: number
  width: number
  height: number
  seats?: number
}

export interface CreateTicketData {
  eventId: number
  zoneId: number
  tableId: number
  customerName: string
  customerEmail: string
  customerPhone: string
  paymentId?: string
}

export interface PurchaseTicketData {
  eventId: number
  zoneId: number
  tableId: number
  customerName: string
  customerEmail: string
  customerPhone: string
}

export interface PaymentResponse {
  ticketId: number
  ticketNumber: string
  paymentId: string
  paymentUrl: string
  price: number
  event: Event
  zone: EventZone
  table: EventTable
}

// ===== API ФУНКЦИИ =====

export const eventTicketsApi = {
  // Мероприятия
  async getEvents(filter?: 'upcoming' | 'past') {
    const params = filter ? `?filter=${filter}` : ''
    const response = await axios.get(`${API_BASE_URL}/event-tickets/events${params}`)
    return response.data
  },

  async getEventById(id: number) {
    const response = await axios.get(`${API_BASE_URL}/event-tickets/events/${id}`)
    return response.data
  },

  async createEvent(data: CreateEventData) {
    const response = await axios.post(`${API_BASE_URL}/event-tickets/events`, data)
    return response.data
  },

  async updateEvent(id: number, data: Partial<CreateEventData>) {
    const response = await axios.put(`${API_BASE_URL}/event-tickets/events/${id}`, data)
    return response.data
  },

  async deleteEvent(id: number) {
    const response = await axios.delete(`${API_BASE_URL}/event-tickets/events/${id}`)
    return response.data
  },

  // Зоны
  async getZonesByEvent(eventId: number) {
    const response = await axios.get(`${API_BASE_URL}/event-tickets/events/${eventId}/zones`)
    return response.data
  },

  async createZone(data: CreateZoneData) {
    const response = await axios.post(`${API_BASE_URL}/event-tickets/zones`, data)
    return response.data
  },

  async updateZone(id: number, data: Partial<CreateZoneData>) {
    const response = await axios.put(`${API_BASE_URL}/event-tickets/zones/${id}`, data)
    return response.data
  },

  async deleteZone(id: number) {
    const response = await axios.delete(`${API_BASE_URL}/event-tickets/zones/${id}`)
    return response.data
  },

  // Столы
  async getTablesByZone(zoneId: number) {
    const response = await axios.get(`${API_BASE_URL}/event-tickets/zones/${zoneId}/tables`)
    return response.data
  },

  async createTable(data: CreateTableData) {
    const response = await axios.post(`${API_BASE_URL}/event-tickets/tables`, data)
    return response.data
  },

  async updateTable(id: number, data: Partial<CreateTableData>) {
    const response = await axios.put(`${API_BASE_URL}/event-tickets/tables/${id}`, data)
    return response.data
  },

  async deleteTable(id: number) {
    const response = await axios.delete(`${API_BASE_URL}/event-tickets/tables/${id}`)
    return response.data
  },

  async updateTablesBatch(tables: Array<Partial<CreateTableData> & { id: number }>) {
    const response = await axios.put(`${API_BASE_URL}/event-tickets/tables/batch`, { tables })
    return response.data
  },

  // Билеты
  async getTicketsByEvent(eventId: number) {
    const response = await axios.get(`${API_BASE_URL}/event-tickets/events/${eventId}/tickets`)
    return response.data
  },

  async getTicketByNumber(ticketNumber: string) {
    const response = await axios.get(`${API_BASE_URL}/event-tickets/tickets/${ticketNumber}`)
    return response.data
  },

  async createTicket(data: CreateTicketData) {
    const response = await axios.post(`${API_BASE_URL}/event-tickets/tickets`, data)
    return response.data
  },

  async purchaseTicket(data: PurchaseTicketData): Promise<PaymentResponse> {
    const response = await axios.post(`${API_BASE_URL}/event-tickets/tickets/purchase`, data)
    return response.data.data
  },

  async sendTicketToEmail(ticketId: number) {
    const response = await axios.post(`${API_BASE_URL}/event-tickets/tickets/${ticketId}/send-email`)
    return response.data
  },

  async useTicket(ticketNumber: string) {
    const response = await axios.put(`${API_BASE_URL}/event-tickets/tickets/${ticketNumber}/use`)
    return response.data
  },

  async cancelTicket(id: number) {
    const response = await axios.put(`${API_BASE_URL}/event-tickets/tickets/${id}/cancel`)
    return response.data
  },

  async getSalesStats(eventId: number) {
    const response = await axios.get(`${API_BASE_URL}/event-tickets/events/${eventId}/stats`)
    return response.data
  }
}
