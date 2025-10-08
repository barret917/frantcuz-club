import axios from 'axios'
import { vi } from 'vitest'
import {
  getBookingZones,
  getBookingZoneById,
  createBookingZone,
  updateBookingZone,
  deleteBookingZone,
  getTablesByZone,
  createBookingTable,
  updateBookingTable,
  deleteBookingTable,
  createBooking,
  getBookingsByDate,
  updateBookingStatus,
  cancelBooking
} from '../booking'

// Mock axios
vi.mock('axios')
const mockedAxios = axios as any

describe('Booking API', () => {
  const mockZone = {
    id: 1,
    name: 'Test Zone',
    type: 'billiards' as const,
    description: 'Test description',
    openTime: '10:00',
    closeTime: '22:00',
    pricePerHour: 500,
    deposit: 100,
    imageUrl: 'https://example.com/image.jpg',
    isActive: true,
    sortOrder: 0,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }

  const mockTable = {
    id: 1,
    zoneId: 1,
    name: 'Table 1',
    x: 100,
    y: 200,
    width: 150,
    height: 75,
    seats: 4,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }

  const mockBooking = {
    id: 1,
    zoneId: 1,
    tableId: 1,
    customerName: 'John Doe',
    customerPhone: '+1234567890',
    customerEmail: 'john@example.com',
    bookingDate: '2024-01-15',
    startTime: '14:00',
    endTime: '16:00',
    duration: 120,
    guestsCount: 4,
    totalPrice: 1000,
    deposit: 100,
    status: 'pending' as const,
    paymentStatus: 'pending' as const,
    paymentId: null,
    comment: null,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Zone API', () => {
    it('should fetch all booking zones', async () => {
      mockedAxios.get.mockResolvedValue({ data: [mockZone] })

      const result = await getBookingZones()

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3002/api/booking/zones')
      expect(result).toEqual([mockZone])
    })

    it('should fetch zone by ID', async () => {
      mockedAxios.get.mockResolvedValue({ data: mockZone })

      const result = await getBookingZoneById(1)

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3002/api/booking/zones/1')
      expect(result).toEqual(mockZone)
    })

    it('should create new zone', async () => {
      const newZone = { name: 'New Zone', type: 'karaoke' as const, pricePerHour: 800 }
      mockedAxios.post.mockResolvedValue({ data: mockZone })

      const result = await createBookingZone(newZone)

      expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3002/api/booking/zones', newZone)
      expect(result).toEqual(mockZone)
    })

    it('should update zone', async () => {
      const updateData = { name: 'Updated Zone' }
      mockedAxios.put.mockResolvedValue({ data: mockZone })

      const result = await updateBookingZone(1, updateData)

      expect(mockedAxios.put).toHaveBeenCalledWith('http://localhost:3002/api/booking/zones/1', updateData)
      expect(result).toEqual(mockZone)
    })

    it('should delete zone', async () => {
      mockedAxios.delete.mockResolvedValue({ data: {} })

      await deleteBookingZone(1)

      expect(mockedAxios.delete).toHaveBeenCalledWith('http://localhost:3002/api/booking/zones/1')
    })
  })

  describe('Table API', () => {
    it('should fetch tables by zone', async () => {
      mockedAxios.get.mockResolvedValue({ data: [mockTable] })

      const result = await getTablesByZone(1)

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3002/api/booking/zones/1/tables')
      expect(result).toEqual([mockTable])
    })

    it('should create new table', async () => {
      const newTable = { zoneId: 1, name: 'New Table', x: 200, y: 300, width: 150, height: 75, seats: 4 }
      mockedAxios.post.mockResolvedValue({ data: mockTable })

      const result = await createBookingTable(newTable)

      expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3002/api/booking/tables', newTable)
      expect(result).toEqual(mockTable)
    })

    it('should update table', async () => {
      const updateData = { name: 'Updated Table' }
      mockedAxios.put.mockResolvedValue({ data: mockTable })

      const result = await updateBookingTable(1, updateData)

      expect(mockedAxios.put).toHaveBeenCalledWith('http://localhost:3002/api/booking/tables/1', updateData)
      expect(result).toEqual(mockTable)
    })

    it('should delete table', async () => {
      mockedAxios.delete.mockResolvedValue({ data: {} })

      await deleteBookingTable(1)

      expect(mockedAxios.delete).toHaveBeenCalledWith('http://localhost:3002/api/booking/tables/1')
    })
  })

  describe('Booking API', () => {
    it('should create new booking', async () => {
      const bookingData = {
        tableId: 1,
        customerName: 'John Doe',
        customerPhone: '+1234567890',
        customerEmail: 'john@example.com',
        startTime: '14:00',
        endTime: '16:00',
        totalAmount: 1000,
        depositAmount: 100
      }
      mockedAxios.post.mockResolvedValue({ data: mockBooking })

      const result = await createBooking(bookingData)

      expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3002/api/booking/reservations', bookingData)
      expect(result).toEqual(mockBooking)
    })

    it('should fetch bookings by date', async () => {
      mockedAxios.get.mockResolvedValue({ data: [mockBooking] })

      const result = await getBookingsByDate('2024-01-15')

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3002/api/booking/reservations', {
        params: { date: '2024-01-15' }
      })
      expect(result).toEqual([mockBooking])
    })

    it('should update booking status', async () => {
      const statusData = { status: 'confirmed' as const }
      mockedAxios.put.mockResolvedValue({ data: mockBooking })

      const result = await updateBookingStatus(1, statusData)

      expect(mockedAxios.put).toHaveBeenCalledWith('http://localhost:3002/api/booking/reservations/1/status', statusData)
      expect(result).toEqual(mockBooking)
    })

    it('should cancel booking', async () => {
      mockedAxios.put.mockResolvedValue({ data: mockBooking })

      const result = await cancelBooking(1)

      expect(mockedAxios.put).toHaveBeenCalledWith('http://localhost:3002/api/booking/reservations/1/cancel')
      expect(result).toEqual(mockBooking)
    })
  })
})
