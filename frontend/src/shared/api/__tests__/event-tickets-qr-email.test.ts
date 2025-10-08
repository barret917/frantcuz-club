import { eventTicketsApi } from '../event-tickets'
import { apiClient } from '../client'

// Мокаем apiClient
jest.mock('../client', () => ({
  apiClient: {
    post: jest.fn(),
    get: jest.fn(),
    put: jest.fn(),
    delete: jest.fn()
  }
}))

const mockApiClient = apiClient as jest.Mocked<typeof apiClient>

describe('Event Tickets API - QR Code and Email Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('sendTicketToEmail', () => {
    it('should send ticket to email successfully', async () => {
      const mockResponse = {
        data: {
          success: true,
          message: 'Билет отправлен на email'
        }
      }

      mockApiClient.post.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.sendTicketToEmail(123)

      expect(mockApiClient.post).toHaveBeenCalledWith('/event-tickets/tickets/123/send-email')
      expect(result).toEqual(mockResponse.data)
    })

    it('should handle email sending failure', async () => {
      const mockResponse = {
        data: {
          success: false,
          error: 'Не удалось отправить email'
        }
      }

      mockApiClient.post.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.sendTicketToEmail(123)

      expect(mockApiClient.post).toHaveBeenCalledWith('/event-tickets/tickets/123/send-email')
      expect(result).toEqual(mockResponse.data)
    })

    it('should handle network errors', async () => {
      const networkError = new Error('Network Error')
      mockApiClient.post.mockRejectedValue(networkError)

      await expect(eventTicketsApi.sendTicketToEmail(123)).rejects.toThrow('Network Error')
      expect(mockApiClient.post).toHaveBeenCalledWith('/event-tickets/tickets/123/send-email')
    })

    it('should handle 404 error for non-existent ticket', async () => {
      const mockResponse = {
        data: {
          success: false,
          error: 'Билет не найден'
        }
      }

      mockApiClient.post.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.sendTicketToEmail(99999)

      expect(mockApiClient.post).toHaveBeenCalledWith('/event-tickets/tickets/99999/send-email')
      expect(result).toEqual(mockResponse.data)
    })

    it('should handle 400 error for unpaid ticket', async () => {
      const mockResponse = {
        data: {
          success: false,
          error: 'Билет не оплачен'
        }
      }

      mockApiClient.post.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.sendTicketToEmail(456)

      expect(mockApiClient.post).toHaveBeenCalledWith('/event-tickets/tickets/456/send-email')
      expect(result).toEqual(mockResponse.data)
    })
  })

  describe('purchaseTicket integration with email', () => {
    it('should return payment data with ticket information for email sending', async () => {
      const mockPurchaseData = {
        eventId: 1,
        zoneId: 1,
        tableId: 1,
        customerName: 'Тестовый Покупатель',
        customerEmail: 'test@example.com',
        customerPhone: '+7 (999) 123-45-67'
      }

      const mockPaymentResponse = {
        data: {
          data: {
            ticketId: 123,
            ticketNumber: 'FR-250910-1234',
            paymentId: 'mock_payment_123',
            paymentUrl: 'https://demo.paykeeper.ru/bill/mock_payment/',
            price: 1500,
            event: {
              id: 1,
              title: 'Тестовое мероприятие',
              date: '2024-12-31T00:00:00.000Z',
              time: '20:00'
            },
            zone: {
              id: 1,
              name: 'Тестовая зона',
              price: 1500
            },
            table: {
              id: 1,
              name: 'Тестовый стол',
              seats: 4
            }
          }
        }
      }

      mockApiClient.post.mockResolvedValue(mockPaymentResponse)

      const result = await eventTicketsApi.purchaseTicket(mockPurchaseData)

      expect(mockApiClient.post).toHaveBeenCalledWith('/event-tickets/tickets/purchase', mockPurchaseData)
      expect(result).toEqual(mockPaymentResponse.data.data)
      expect(result).toBeDefined()
      expect(result.ticketId).toBeDefined()
      expect(result.ticketNumber).toBeDefined()
      expect(result.paymentId).toBeDefined()
      expect(result.paymentUrl).toBeDefined()
    })
  })

  describe('getTicketByNumber for QR code verification', () => {
    it('should return ticket data with QR code information', async () => {
      const mockTicketData = {
        data: {
          success: true,
          data: {
            id: 123,
            ticketNumber: 'FR-250910-1234',
            qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
            status: 'sold',
            paymentStatus: 'paid',
            price: 1500,
            customerName: 'Тестовый Покупатель',
            customerEmail: 'test@example.com',
            customerPhone: '+7 (999) 123-45-67',
            purchasedAt: '2024-12-31T20:00:00.000Z',
            event: {
              id: 1,
              title: 'Тестовое мероприятие',
              date: '2024-12-31T00:00:00.000Z',
              time: '20:00'
            },
            zone: {
              id: 1,
              name: 'Тестовая зона'
            },
            table: {
              id: 1,
              name: 'Тестовый стол',
              seats: 4
            }
          }
        }
      }

      mockApiClient.get.mockResolvedValue(mockTicketData)

      const result = await eventTicketsApi.getTicketByNumber('FR-250910-1234')

      expect(mockApiClient.get).toHaveBeenCalledWith('/event-tickets/tickets/FR-250910-1234')
      expect(result).toEqual(mockTicketData.data)
      expect(result.data.qrCode).toBeDefined()
      expect(result.data.qrCode).toMatch(/^data:image\/png;base64,/)
    })

    it('should handle ticket not found error', async () => {
      const mockResponse = {
        data: {
          success: false,
          error: 'Билет не найден'
        }
      }

      mockApiClient.get.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.getTicketByNumber('INVALID-TICKET')

      expect(mockApiClient.get).toHaveBeenCalledWith('/event-tickets/tickets/INVALID-TICKET')
      expect(result).toEqual(mockResponse.data)
    })
  })

  describe('useTicket for QR code scanning', () => {
    it('should mark ticket as used successfully', async () => {
      const mockResponse = {
        data: {
          success: true,
          message: 'Билет успешно использован',
          data: {
            id: 123,
            ticketNumber: 'FR-250910-1234',
            status: 'used',
            usedAt: '2024-12-31T20:30:00.000Z'
          }
        }
      }

      mockApiClient.put.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.useTicket('FR-250910-1234')

      expect(mockApiClient.put).toHaveBeenCalledWith('/event-tickets/tickets/FR-250910-1234/use')
      expect(result).toEqual(mockResponse.data)
      expect(result.data.status).toBe('used')
      expect(result.data.usedAt).toBeDefined()
    })

    it('should handle already used ticket error', async () => {
      const mockResponse = {
        data: {
          success: false,
          error: 'Билет уже использован'
        }
      }

      mockApiClient.put.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.useTicket('FR-250910-1234')

      expect(mockApiClient.put).toHaveBeenCalledWith('/event-tickets/tickets/FR-250910-1234/use')
      expect(result).toEqual(mockResponse.data)
    })

    it('should handle invalid ticket error', async () => {
      const mockResponse = {
        data: {
          success: false,
          error: 'Билет не найден'
        }
      }

      mockApiClient.put.mockResolvedValue(mockResponse)

      const result = await eventTicketsApi.useTicket('INVALID-TICKET')

      expect(mockApiClient.put).toHaveBeenCalledWith('/event-tickets/tickets/INVALID-TICKET/use')
      expect(result).toEqual(mockResponse.data)
    })
  })
})
