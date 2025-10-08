import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PaymentProcessor } from '../PaymentProcessor'
import { PaymentResponse } from '../../../../shared/api/event-tickets'

// Мокаем window.open
const mockWindowOpen = jest.fn()
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
  writable: true
})

// Мокаем fetch для проверки статуса платежа
const mockFetch = jest.fn()
global.fetch = mockFetch

describe('PaymentProcessor Component', () => {
  const mockPaymentData: PaymentResponse = {
    ticketId: 123,
    ticketNumber: 'FR-250910-1234',
    paymentId: 'mock_payment_123',
    paymentUrl: 'https://demo.paykeeper.ru/bill/mock_payment/',
    price: 1500,
    event: {
      id: 1,
      title: 'Тестовое мероприятие',
      description: 'Описание тестового мероприятия',
      date: '2024-12-31T00:00:00.000Z',
      time: '20:00',
      isActive: true,
      isUpcoming: true,
      sortOrder: 0,
      createdAt: '2024-12-31T00:00:00.000Z',
      updatedAt: '2024-12-31T00:00:00.000Z'
    },
    zone: {
      id: 1,
      eventId: 1,
      name: 'Тестовая зона',
      description: 'Описание зоны',
      price: 1500,
      maxSeats: 50,
      isActive: true,
      sortOrder: 0,
      createdAt: '2024-12-31T00:00:00.000Z',
      updatedAt: '2024-12-31T00:00:00.000Z'
    },
    table: {
      id: 1,
      zoneId: 1,
      name: 'Тестовый стол',
      x: 100,
      y: 100,
      width: 100,
      height: 80,
      seats: 4,
      isActive: true,
      createdAt: '2024-12-31T00:00:00.000Z',
      updatedAt: '2024-12-31T00:00:00.000Z'
    }
  }

  const mockOnPaymentSuccess = jest.fn()
  const mockOnPaymentFailure = jest.fn()
  const mockOnCancel = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    mockWindowOpen.mockClear()
    mockFetch.mockClear()
  })

  it('should render payment information correctly', () => {
    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    expect(screen.getByText('Оплата билета')).toBeInTheDocument()
    expect(screen.getByText('Подтвердите данные и перейдите к оплате')).toBeInTheDocument()
    expect(screen.getByText('Тестовое мероприятие')).toBeInTheDocument()
    expect(screen.getByText('Тестовая зона')).toBeInTheDocument()
    expect(screen.getByText('Тестовый стол')).toBeInTheDocument()
    expect(screen.getByText('FR-250910-1234')).toBeInTheDocument()
    expect(screen.getByText('1 500 ₽')).toBeInTheDocument()
  })

  it('should open payment window when payment button is clicked', async () => {
    mockWindowOpen.mockReturnValue({
      close: jest.fn()
    })

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://demo.paykeeper.ru/bill/mock_payment/',
      'paykeeper',
      'width=800,height=600,scrollbars=yes,resizable=yes'
    )
  })

  it('should handle payment window blocked error', async () => {
    mockWindowOpen.mockReturnValue(null)

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    await waitFor(() => {
      expect(screen.getByText(/Не удалось открыть окно оплаты/)).toBeInTheDocument()
    })

    expect(mockOnPaymentFailure).toHaveBeenCalledWith(
      'Не удалось открыть окно оплаты. Проверьте блокировщик всплывающих окон.'
    )
  })

  it('should check payment status and handle success', async () => {
    const mockPaymentWindow = {
      close: jest.fn()
    }
    mockWindowOpen.mockReturnValue(mockPaymentWindow)

    // Мокаем успешный ответ от API
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        success: true,
        data: {
          status: 'paid'
        }
      })
    })

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    // Ждем проверки статуса платежа
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/payment/status/mock_payment_123')
    }, { timeout: 15000 })

    await waitFor(() => {
      expect(screen.getByText('Платеж успешно выполнен!')).toBeInTheDocument()
    })

    expect(mockPaymentWindow.close).toHaveBeenCalled()
    expect(mockOnPaymentSuccess).toHaveBeenCalledWith('FR-250910-1234')
  })

  it('should check payment status and handle failure', async () => {
    const mockPaymentWindow = {
      close: jest.fn()
    }
    mockWindowOpen.mockReturnValue(mockPaymentWindow)

    // Мокаем неуспешный ответ от API
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        success: true,
        data: {
          status: 'failed'
        }
      })
    })

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    // Ждем проверки статуса платежа
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/payment/status/mock_payment_123')
    }, { timeout: 15000 })

    await waitFor(() => {
      expect(screen.getByText('Платеж не был выполнен')).toBeInTheDocument()
    })

    expect(mockPaymentWindow.close).toHaveBeenCalled()
    expect(mockOnPaymentFailure).toHaveBeenCalledWith('Платеж не был выполнен')
  })

  it('should handle network error during status check', async () => {
    const mockPaymentWindow = {
      close: jest.fn()
    }
    mockWindowOpen.mockReturnValue(mockPaymentWindow)

    // Мокаем ошибку сети
    mockFetch.mockRejectedValueOnce(new Error('Network Error'))

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    // Проверяем, что ошибка обрабатывается корректно
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/payment/status/mock_payment_123')
    }, { timeout: 15000 })

    // Проверяем, что продолжается проверка статуса (не прерывается из-за ошибки)
    expect(mockFetch).toHaveBeenCalledTimes(1)
  })

  it('should call onCancel when cancel button is clicked', () => {
    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const cancelButton = screen.getByText('Отмена')
    fireEvent.click(cancelButton)

    expect(mockOnCancel).toHaveBeenCalledTimes(1)
  })

  it('should show loading state during payment processing', async () => {
    const mockPaymentWindow = {
      close: jest.fn()
    }
    mockWindowOpen.mockReturnValue(mockPaymentWindow)

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    expect(screen.getByText('Обработка...')).toBeInTheDocument()
    expect(screen.getByText('Открываем страницу оплаты...')).toBeInTheDocument()
  })

  it('should disable payment button during processing', async () => {
    const mockPaymentWindow = {
      close: jest.fn()
    }
    mockWindowOpen.mockReturnValue(mockPaymentWindow)

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    // Кнопка должна быть отключена во время обработки
    expect(paymentButton).toBeDisabled()
  })

  it('should format price correctly', () => {
    const customPaymentData = {
      ...mockPaymentData,
      price: 2500
    }

    render(
      <PaymentProcessor
        paymentData={customPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    expect(screen.getByText('2 500 ₽')).toBeInTheDocument()
  })

  it('should handle payment success status correctly', async () => {
    const mockPaymentWindow = {
      close: jest.fn()
    }
    mockWindowOpen.mockReturnValue(mockPaymentWindow)

    // Мокаем успешный ответ от API
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        success: true,
        data: {
          status: 'paid'
        }
      })
    })

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    await waitFor(() => {
      expect(screen.getByText('✅ Платеж успешно выполнен!')).toBeInTheDocument()
    }, { timeout: 15000 })

    expect(mockOnPaymentSuccess).toHaveBeenCalledWith('FR-250910-1234')
  })

  it('should handle payment failure status correctly', async () => {
    const mockPaymentWindow = {
      close: jest.fn()
    }
    mockWindowOpen.mockReturnValue(mockPaymentWindow)

    // Мокаем неуспешный ответ от API
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        success: true,
        data: {
          status: 'failed'
        }
      })
    })

    render(
      <PaymentProcessor
        paymentData={mockPaymentData}
        onPaymentSuccess={mockOnPaymentSuccess}
        onPaymentFailure={mockOnPaymentFailure}
        onCancel={mockOnCancel}
      />
    )

    const paymentButton = screen.getByText('Перейти к оплате')
    fireEvent.click(paymentButton)

    await waitFor(() => {
      expect(screen.getByText('❌ Платеж не был выполнен')).toBeInTheDocument()
    }, { timeout: 15000 })

    expect(mockOnPaymentFailure).toHaveBeenCalledWith('Платеж не был выполнен')
  })
})


