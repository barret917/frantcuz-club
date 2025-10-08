import { vi } from 'vitest'
import axios from 'axios'
import { payKeeperService, PayKeeperConfig } from '../paykeeper'

// Mock axios
vi.mock('axios')
const mockedAxios = axios as any

// Mock crypto
vi.mock('crypto', () => ({
  createHmac: vi.fn(() => ({
    update: vi.fn().mockReturnThis(),
    digest: vi.fn(() => 'mocked-signature')
  }))
}))

describe('PayKeeperService', () => {
  const mockConfig: PayKeeperConfig = {
    baseUrl: 'https://demo.paykeeper.ru',
    merchantId: 'test-merchant',
    secretKey: 'test-secret',
    successUrl: 'https://example.com/success',
    failureUrl: 'https://example.com/failure',
    notifyUrl: 'https://example.com/webhook'
  }

  let payKeeperService: any

  beforeEach(() => {
    vi.clearAllMocks()
    payKeeperService = payKeeperService
  })

  describe('createPayment', () => {
    it('should create payment successfully', async () => {
      const mockPaymentRequest = {
        orderid: 'test-order-123',
        sum: 1000,
        clientid: 'client@example.com',
        client_name: 'John Doe',
        client_email: 'client@example.com',
        client_phone: '+1234567890',
        service_name: 'Test Service',
        payment_type: 'booking' as const,
        success_url: 'https://example.com/success',
        failure_url: 'https://example.com/failure',
        notify_url: 'https://example.com/webhook'
      }

      const mockResponse = {
        id: 'payment-123',
        orderid: 'test-order-123',
        sum: 1000,
        status: 'pending' as const,
        payment_url: 'https://demo.paykeeper.ru/pay/payment-123',
        created_at: '2024-01-01T00:00:00Z',
        expires_at: '2024-01-01T01:00:00Z'
      }

      mockedAxios.post.mockResolvedValue({ data: mockResponse })

      const result = await payKeeperService.createPayment(mockPaymentRequest)

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://demo.paykeeper.ru/create',
        {
          ...mockPaymentRequest,
          merchant_id: 'test-merchant',
          success_url: 'https://example.com/success',
          failure_url: 'https://example.com/failure',
          notify_url: 'https://example.com/webhook'
        }
      )
      expect(result).toEqual(mockResponse)
    })

    it('should handle payment creation error', async () => {
      mockedAxios.post.mockRejectedValue(new Error('Network error'))

      await expect(payKeeperService.createPayment({
        orderid: 'test-order-123',
        sum: 1000,
        clientid: 'client@example.com',
        client_name: 'John Doe',
        client_email: 'client@example.com',
        client_phone: '+1234567890',
        service_name: 'Test Service',
        payment_type: 'booking' as const,
        success_url: 'https://example.com/success',
        failure_url: 'https://example.com/failure',
        notify_url: 'https://example.com/webhook'
      })).rejects.toThrow('Не удалось создать платеж')
    })
  })

  describe('checkPaymentStatus', () => {
    it('should check payment status successfully', async () => {
      const mockResponse = {
        id: 'payment-123',
        orderid: 'test-order-123',
        sum: 1000,
        status: 'success' as const,
        payment_url: 'https://demo.paykeeper.ru/pay/payment-123',
        created_at: '2024-01-01T00:00:00Z',
        expires_at: '2024-01-01T01:00:00Z'
      }

      mockedAxios.get.mockResolvedValue({ data: mockResponse })

      const result = await payKeeperService.checkPaymentStatus('payment-123')

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://demo.paykeeper.ru/status/payment-123'
      )
      expect(result).toEqual(mockResponse)
    })

    it('should handle status check error', async () => {
      mockedAxios.get.mockRejectedValue(new Error('Network error'))

      await expect(payKeeperService.checkPaymentStatus('payment-123'))
        .rejects.toThrow('Не удалось проверить статус платежа')
    })
  })

  describe('handleWebhook', () => {
    it('should handle valid webhook', async () => {
      const webhookData = {
        id: 'payment-123',
        status: 'success',
        sum: 1000
      }

      const result = await payKeeperService.handleWebhook(webhookData, 'mocked-signature')

      expect(result).toBe(true)
    })

    it('should reject invalid webhook signature', async () => {
      const webhookData = {
        id: 'payment-123',
        status: 'success',
        sum: 1000
      }

      const result = await payKeeperService.handleWebhook(webhookData, 'invalid-signature')

      expect(result).toBe(false)
    })
  })

  describe('createBookingPayment', () => {
    it('should create booking payment', async () => {
      const mockResponse = {
        id: 'payment-123',
        orderid: 'booking_test-123_1234567890',
        sum: 1500,
        status: 'pending' as const,
        payment_url: 'https://demo.paykeeper.ru/pay/payment-123',
        created_at: '2024-01-01T00:00:00Z',
        expires_at: '2024-01-01T01:00:00Z'
      }

      mockedAxios.post.mockResolvedValue({ data: mockResponse })

      const result = await payKeeperService.createBookingPayment(
        'test-123',
        1500,
        {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1234567890'
        }
      )

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://demo.paykeeper.ru/create',
        expect.objectContaining({
          orderid: expect.stringMatching(/^booking_test-123_\d+$/),
          sum: 1500,
          clientid: 'john@example.com',
          client_name: 'John Doe',
          client_email: 'john@example.com',
          client_phone: '+1234567890',
          service_name: 'Бронирование стола',
          payment_type: 'booking',
          merchant_id: 'test-merchant'
        })
      )
      expect(result).toEqual(mockResponse)
    })
  })
})
