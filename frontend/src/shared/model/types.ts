export interface Zone {
  id: number
  name: string
  openTime: string
  closeTime: string
  imageUrl: string
  isActive?: boolean
  items?: ZoneItem[]
}

export interface ZoneItem {
  id: number
  zoneId: number
  floor: number
  label: string
  type: string
  isBooking: boolean
  isActive: boolean
  x: number
  y: number
  width: number
  height: number
  seats?: number
} 