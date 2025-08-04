import { create } from 'zustand'
import { BookingStore } from './bookingTypes'

export const useBookingStore = create<BookingStore>((set) => ({
  date: null,
  zoneId: null,
  tableId: null,
  time: null,
  setDate: (date) => set({ date }),
  setZoneId: (zoneId) => set({ zoneId }),
  setTableId: (tableId) => set({ tableId }),
  setTime: (time) => set({ time }),
})) 