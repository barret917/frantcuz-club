import { eventTicketsApi } from '../event-tickets'

// Мокаем fetch для тестов
global.fetch = jest.fn()

describe('Event Tickets API', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear()
  })

  describe('getEvents', () => {
    it('should fetch events without filter', async () => {
      const mockEvents = [
        {
          id: 1,
          title: 'Test Event',
          description: 'Test Description',
          date: '2024-12-31',
          time: '20:00',
          category: 'Test'
        }
      ]

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockEvents
        })
      })

      const result = await eventTicketsApi.getEvents()

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/events')
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockEvents)
    })

    it('should fetch events with filter', async () => {
      const mockEvents = [
        {
          id: 1,
          title: 'Upcoming Event',
          isUpcoming: true
        }
      ]

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockEvents
        })
      })

      const result = await eventTicketsApi.getEvents('upcoming')

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/events?filter=upcoming')
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockEvents)
    })

    it('should handle API errors', async () => {
      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({
          success: false,
          error: 'Server error'
        })
      })

      const result = await eventTicketsApi.getEvents()

      expect(result.success).toBe(false)
      expect(result.error).toBe('Server error')
    })
  })

  describe('getEventById', () => {
    it('should fetch event by id', async () => {
      const mockEvent = {
        id: 1,
        title: 'Test Event',
        description: 'Test Description'
      }

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockEvent
        })
      })

      const result = await eventTicketsApi.getEventById(1)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/events/1')
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockEvent)
    })
  })

  describe('createEvent', () => {
    it('should create new event', async () => {
      const eventData = {
        title: 'New Event',
        description: 'New Description',
        date: '2024-12-31',
        time: '20:00',
        category: 'Test'
      }

      const mockCreatedEvent = {
        id: 2,
        ...eventData
      }

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockCreatedEvent
        })
      })

      const result = await eventTicketsApi.createEvent(eventData)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockCreatedEvent)
    })
  })

  describe('getZonesByEvent', () => {
    it('should fetch zones for event', async () => {
      const mockZones = [
        {
          id: 1,
          name: 'VIP Zone',
          price: 5000
        }
      ]

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockZones
        })
      })

      const result = await eventTicketsApi.getZonesByEvent(1)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/events/1/zones')
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockZones)
    })
  })

  describe('createZone', () => {
    it('should create new zone', async () => {
      const zoneData = {
        eventId: 1,
        name: 'New Zone',
        price: 3000
      }

      const mockCreatedZone = {
        id: 2,
        ...zoneData
      }

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockCreatedZone
        })
      })

      const result = await eventTicketsApi.createZone(zoneData)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/zones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(zoneData)
      })
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockCreatedZone)
    })
  })

  describe('getTablesByZone', () => {
    it('should fetch tables for zone', async () => {
      const mockTables = [
        {
          id: 1,
          name: 'Table 1',
          x: 100,
          y: 100,
          width: 120,
          height: 80,
          seats: 4
        }
      ]

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockTables
        })
      })

      const result = await eventTicketsApi.getTablesByZone(1)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/zones/1/tables')
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockTables)
    })
  })

  describe('createTable', () => {
    it('should create new table', async () => {
      const tableData = {
        zoneId: 1,
        name: 'New Table',
        x: 200,
        y: 200,
        width: 100,
        height: 80,
        seats: 6
      }

      const mockCreatedTable = {
        id: 2,
        ...tableData
      }

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockCreatedTable
        })
      })

      const result = await eventTicketsApi.createTable(tableData)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/tables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tableData)
      })
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockCreatedTable)
    })
  })

  describe('createTicket', () => {
    it('should create new ticket', async () => {
      const ticketData = {
        eventId: 1,
        zoneId: 1,
        tableId: 1,
        customerName: 'Test Customer',
        customerEmail: 'test@example.com',
        customerPhone: '+7 (999) 123-45-67'
      }

      const mockCreatedTicket = {
        id: 1,
        ticketNumber: 'FR-12345678-0001',
        qrCode: 'data:image/png;base64,test-qr-code',
        status: 'sold',
        ...ticketData
      }

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockCreatedTicket
        })
      })

      const result = await eventTicketsApi.createTicket(ticketData)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticketData)
      })
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockCreatedTicket)
    })
  })

  describe('useTicket', () => {
    it('should use ticket', async () => {
      const ticketNumber = 'FR-12345678-0001'
      const mockUsedTicket = {
        id: 1,
        ticketNumber,
        status: 'used',
        usedAt: '2024-12-31T20:00:00Z'
      }

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockUsedTicket
        })
      })

      const result = await eventTicketsApi.useTicket(ticketNumber)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/tickets/FR-12345678-0001/use', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockUsedTicket)
    })
  })

  describe('getSalesStats', () => {
    it('should fetch sales statistics', async () => {
      const mockStats = {
        stats: [
          { status: 'sold', _count: { status: 5 }, _sum: { price: 15000 } },
          { status: 'used', _count: { status: 3 }, _sum: { price: 9000 } }
        ],
        totalRevenue: 15000
      }

      ;(fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: mockStats
        })
      })

      const result = await eventTicketsApi.getSalesStats(1)

      expect(fetch).toHaveBeenCalledWith('/api/event-tickets/events/1/stats')
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockStats)
    })
  })
})


