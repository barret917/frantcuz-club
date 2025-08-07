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

export interface ZoneItemForm {
  label: string
  type: string
  floor: number
  seats?: number
} 