import { apiClient } from './client'

export interface Hall {
  id: number
  name: string
  description?: string
  type: 'restaurant' | 'karaoke' | 'billiards' | 'disco' | 'playstation' | 'bowling' | 'spa' | 'cinema' | 'banquet' | 'custom'
  imageUrl?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
  zones: Zone[]
}

export interface Zone {
  id: number
  name: string
  type: 'karaoke' | 'billiards' | 'restaurant' | 'disco' | 'playstation' | 'bowling' | 'spa' | 'cinema' | 'custom'
  hallId: number
  openTime: string
  closeTime: string
  imageUrl?: string
  description?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
  items: ZoneItem[]
}

export interface ZoneItem {
  id: number
  zoneId: number
  floor: number
  label: string
  type: 'table' | 'booth' | 'stage' | 'bar' | 'danceFloor' | 'gameTable' | 'lounge' | 'spaRoom' | 'cinemaHall' | 'custom'
  isBooking: boolean
  isActive: boolean
  x: number
  y: number
  width: number
  height: number
  seats?: number
  capacity?: number
  pricePerHour?: number
  pricePerSeat?: number
  pricePerSlot?: number
  minDuration?: number
  maxDuration?: number
  timeSlots: string[]
  description?: string
  features: string[]
}

export interface CreateHallData {
  name: string
  description?: string
  type?: 'restaurant' | 'karaoke' | 'billiards' | 'disco' | 'playstation' | 'bowling' | 'spa' | 'cinema' | 'banquet' | 'custom'
  imageUrl?: string
}

export interface UpdateHallData {
  name?: string
  description?: string
  type?: 'restaurant' | 'karaoke' | 'billiards' | 'disco' | 'playstation' | 'bowling' | 'spa' | 'cinema' | 'banquet' | 'custom'
  imageUrl?: string
  isActive?: boolean
  sortOrder?: number
}

export interface CreateZoneData {
  name: string
  type?: 'karaoke' | 'billiards' | 'restaurant' | 'disco' | 'playstation' | 'bowling' | 'spa' | 'cinema' | 'custom'
  hallId: number
  openTime?: string
  closeTime?: string
  imageUrl?: string
  description?: string
}

export interface UpdateZoneData {
  name?: string
  type?: 'karaoke' | 'billiards' | 'restaurant' | 'disco' | 'playstation' | 'bowling' | 'spa' | 'cinema' | 'custom'
  openTime?: string
  closeTime?: string
  imageUrl?: string
  description?: string
  isActive?: boolean
  sortOrder?: number
}

// API функции для залов
export const getHalls = async (): Promise<Hall[]> => {
  const response = await apiClient.get('/halls')
  return response.data
}

export const getHallById = async (id: number): Promise<Hall> => {
  const response = await apiClient.get(`/halls/${id}`)
  return response.data
}

export const createHall = async (data: CreateHallData): Promise<Hall> => {
  const response = await apiClient.post('/halls', data)
  return response.data
}

export const updateHall = async (id: number, data: UpdateHallData): Promise<Hall> => {
  const response = await apiClient.put(`/halls/${id}`, data)
  return response.data
}

export const deleteHall = async (id: number): Promise<void> => {
  await apiClient.delete(`/halls/${id}`)
}

// API функции для зон
export const getZones = async (hallId?: number): Promise<Zone[]> => {
  const params = hallId ? { hallId } : {}
  const response = await apiClient.get('/zones', { params })
  return response.data
}

export const getZoneById = async (id: number): Promise<Zone> => {
  const response = await apiClient.get(`/zones/${id}`)
  return response.data
}

export const createZone = async (data: CreateZoneData): Promise<Zone> => {
  const response = await apiClient.post('/zones', data)
  return response.data
}

export const updateZone = async (id: number, data: UpdateZoneData): Promise<Zone> => {
  const response = await apiClient.put(`/zones/${id}`, data)
  return response.data
}

export const deleteZone = async (id: number): Promise<void> => {
  await apiClient.delete(`/zones/${id}`)
} 