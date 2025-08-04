export interface ZoneItem {
  id: string
  name: string
  type: string
  floor: number
  seats?: number
  x: number
  y: number
  width: number
  height: number
  idZone: number
  isBooking?: boolean
  isActive?: boolean
}

export interface ZoneItemForm {
  name: string
  type: string
  floor: number
  seats?: number
} 