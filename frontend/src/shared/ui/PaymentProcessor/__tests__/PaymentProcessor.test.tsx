import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { PaymentProcessor } from '../PaymentProcessor'
import payKeeperService from '../../../services/paykeeper'

// Mock PayKeeper service
vi.mock('@/shared/services/paykeeper', () => ({
  payKeeperService: {
    createBookingPayment: vi.fn(),
    checkPaymentStatus: vi.fn(),
  }
}))

const mockPayKeeperService = payKeeperService as any

describe('PaymentProcessor', () => {
  const mockProps = {
    bookingId: 'booking-123',
    amount: 1000,
    deposit: 200,
    customerInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890'
    },
    onPaymentSuccess: vi.fn(),
    onPaymentFailure: vi.fn(),
    onCancel: vi.fn(),
  }

  const mockPaymentResponse = {
    id: 'payment-123',
    orderid: 'booking_booking-123_1234567890',
    sum: 1200,
    status: 'pending' as const,
    payment_url: 'https://demo.paykeeper.ru/pay/payment-123',
    created_at: '2024-01-01T00:00:00Z',
    expires_at: '2024-01-01T01:00:00Z'
  }

  beforeEach(() => {
    vi.clearAllMocks()
    // Mock window.open to return a mock window
    global.open = vi.fn(() => ({
      close: vi.fn()
    } as any))
  })

  it('renders payment information correctly', () => {
    render(<PaymentProcessor {...mockProps} />)
    
    expect(screen.getByText('Оплата бронирования')).toBeInTheDocument()
    expect(screen.getByText('#booking-123')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('+1234567890')).toBeInTheDocument()
    expect(screen.getByText('1000 ₽')).toBeInTheDocument()
    expect(screen.getByText('200 ₽')).toBeInTheDocument()
    expect(screen.getByText('1200 ₽')).toBeInTheDocument()
  })

  it('creates payment when pay button is clicked', async () => {
    mockPayKeeperService.createBookingPayment.mockResolvedValue(mockPaymentResponse)

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(mockPayKeeperService.createBookingPayment).toHaveBeenCalledWith(
        'booking-123',
        1200,
        mockProps.customerInfo
      )
    })

    expect(global.open).toHaveBeenCalledWith(
      mockPaymentResponse.payment_url,
      'paykeeper',
      'width=800,height=600,scrollbars=yes,resizable=yes'
    )
  })

  it('handles payment creation error', async () => {
    mockPayKeeperService.createBookingPayment.mockRejectedValue(new Error('Network error'))

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(screen.getByText('Network error')).toBeInTheDocument()
    })
  })

  it('handles payment success', async () => {
    mockPayKeeperService.createBookingPayment.mockResolvedValue(mockPaymentResponse)
    mockPayKeeperService.checkPaymentStatus.mockResolvedValue({
      ...mockPaymentResponse,
      status: 'success'
    })

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(mockPayKeeperService.createBookingPayment).toHaveBeenCalledWith(
        'booking-123',
        1200,
        mockProps.customerInfo
      )
    })

    // Wait for status check
    await waitFor(() => {
      expect(mockPayKeeperService.checkPaymentStatus).toHaveBeenCalledWith('payment-123')
    }, { timeout: 6000 })

    await waitFor(() => {
      expect(mockProps.onPaymentSuccess).toHaveBeenCalledWith('payment-123')
    })
  })

  it('handles payment failure', async () => {
    mockPayKeeperService.createBookingPayment.mockResolvedValue(mockPaymentResponse)
    mockPayKeeperService.checkPaymentStatus.mockResolvedValue({
      ...mockPaymentResponse,
      status: 'failed'
    })

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(mockPayKeeperService.createBookingPayment).toHaveBeenCalledWith(
        'booking-123',
        1200,
        mockProps.customerInfo
      )
    })

    // Wait for status check
    await waitFor(() => {
      expect(mockPayKeeperService.checkPaymentStatus).toHaveBeenCalledWith('payment-123')
    }, { timeout: 6000 })

    await waitFor(() => {
      expect(mockProps.onPaymentFailure).toHaveBeenCalledWith('Платеж был отклонен или отменен')
    })
  })

  it('shows success state when payment is successful', async () => {
    mockPayKeeperService.createBookingPayment.mockResolvedValue(mockPaymentResponse)
    mockPayKeeperService.checkPaymentStatus.mockResolvedValue({
      ...mockPaymentResponse,
      status: 'success'
    })

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(screen.getByText('Платеж успешно выполнен!')).toBeInTheDocument()
      expect(screen.getByText('Ваш платеж был успешно обработан. Бронирование подтверждено.')).toBeInTheDocument()
    })
  })

  it('shows failure state when payment fails', async () => {
    mockPayKeeperService.createBookingPayment.mockRejectedValue(new Error('Payment failed'))

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(screen.getByText('Ошибка платежа')).toBeInTheDocument()
      expect(screen.getByText('Payment failed')).toBeInTheDocument()
    })
  })

  it('calls onCancel when cancel button is clicked', () => {
    render(<PaymentProcessor {...mockProps} />)
    
    const cancelButton = screen.getByText('Отменить')
    fireEvent.click(cancelButton)

    expect(mockProps.onCancel).toHaveBeenCalled()
  })

  it('disables pay button while processing', async () => {
    mockPayKeeperService.createBookingPayment.mockImplementation(
      () => new Promise(() => {}) // Never resolves
    )

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(screen.getByText('Создание платежа...')).toBeInTheDocument()
    })

    expect(payButton).toBeDisabled()
  })

  it('handles retry payment', async () => {
    mockPayKeeperService.createBookingPayment.mockRejectedValue(new Error('Payment failed'))

    render(<PaymentProcessor {...mockProps} />)
    
    const payButton = screen.getByText('Оплатить')
    fireEvent.click(payButton)

    await waitFor(() => {
      expect(screen.getByText('Ошибка платежа')).toBeInTheDocument()
    })

    const retryButton = screen.getByText('Попробовать снова')
    fireEvent.click(retryButton)

    await waitFor(() => {
      expect(mockPayKeeperService.createBookingPayment).toHaveBeenCalledTimes(2)
    })
  })
})
