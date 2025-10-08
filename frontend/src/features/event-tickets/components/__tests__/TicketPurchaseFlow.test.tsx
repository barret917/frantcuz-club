import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TicketPurchaseFlow } from '../TicketPurchaseFlow'
import { Event, EventZone, EventTable } from '@/shared/api/event-tickets'
import { eventTicketsApi } from '@/shared/api/event-tickets'

// Мокаем styled-components
jest.mock('styled-components', () => ({
  __esModule: true,
  default: (tag: any) => (props: any) => {
    const Component = typeof tag === 'string' ? tag : 'div'
    return React.createElement(Component, props)
  }
}))

// Мокаем API
jest.mock('@/shared/api/event-tickets', () => ({
  eventTicketsApi: {
    getZonesByEvent: jest.fn(),
    getTablesByZone: jest.fn(),
    createTicket: jest.fn()
  }
}))

const mockEvent: Event = {
  id: 1,
  title: 'Тестовое мероприятие',
  description: 'Описание тестового мероприятия',
  date: '2024-12-31T00:00:00.000Z',
  time: '20:00',
  isActive: true,
  isUpcoming: true,
  sortOrder: 0,
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z'
}

const mockZones: EventZone[] = [
  {
    id: 1,
    eventId: 1,
    name: 'VIP зона',
    description: 'Премиум места',
    price: 5000,
    maxSeats: 20,
    isActive: true,
    sortOrder: 1,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 2,
    eventId: 1,
    name: 'Стандартная зона',
    description: 'Обычные места',
    price: 2500,
    maxSeats: 60,
    isActive: true,
    sortOrder: 2,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

const mockTables: EventTable[] = [
  {
    id: 1,
    zoneId: 1,
    name: 'VIP-1',
    x: 100,
    y: 100,
    width: 120,
    height: 80,
    seats: 5,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 2,
    zoneId: 1,
    name: 'VIP-2',
    x: 250,
    y: 100,
    width: 120,
    height: 80,
    seats: 5,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

describe('TicketPurchaseFlow', () => {
  const mockOnClose = jest.fn()
  const mockOnSuccess = jest.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
    mockOnSuccess.mockClear()
    
    // Мокаем API ответы
    ;(eventTicketsApi.getZonesByEvent as jest.Mock).mockResolvedValue({
      success: true,
      data: mockZones
    })
    ;(eventTicketsApi.getTablesByZone as jest.Mock).mockResolvedValue({
      success: true,
      data: mockTables
    })
    ;(eventTicketsApi.createTicket as jest.Mock).mockResolvedValue({
      success: true,
      data: {
        id: 1,
        ticketNumber: 'FR-12345678-0001',
        qrCode: 'data:image/png;base64,test-qr-code',
        status: 'sold'
      }
    })
  })

  it('should render initial step with zones', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    expect(screen.getByText('Тестовое мероприятие')).toBeInTheDocument()
    expect(screen.getByText('31 декабря 2024 г. в 20:00')).toBeInTheDocument()
    expect(screen.getByText('Выберите зону')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
      expect(screen.getByText('Стандартная зона')).toBeInTheDocument()
    })
  })

  it('should show step indicators', () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Зона')).toBeInTheDocument()
    expect(screen.getByText('Стол')).toBeInTheDocument()
    expect(screen.getByText('Данные')).toBeInTheDocument()
  })

  it('should proceed to table selection when zone is selected', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('VIP зона'))

    await waitFor(() => {
      expect(screen.getByText('Выберите стол')).toBeInTheDocument()
      expect(screen.getByText('VIP-1')).toBeInTheDocument()
      expect(screen.getByText('VIP-2')).toBeInTheDocument()
    })
  })

  it('should proceed to customer data form when table is selected', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    // Выбираем зону
    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP зона'))

    // Выбираем стол
    await waitFor(() => {
      expect(screen.getByText('VIP-1')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP-1'))

    await waitFor(() => {
      expect(screen.getByText('Ваши данные')).toBeInTheDocument()
      expect(screen.getByLabelText('Имя и фамилия *')).toBeInTheDocument()
      expect(screen.getByLabelText('Телефон *')).toBeInTheDocument()
      expect(screen.getByLabelText('Email *')).toBeInTheDocument()
    })
  })

  it('should validate required fields in customer form', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    // Проходим до формы данных клиента
    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP зона'))

    await waitFor(() => {
      expect(screen.getByText('VIP-1')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP-1'))

    await waitFor(() => {
      expect(screen.getByText('Ваши данные')).toBeInTheDocument()
    })

    // Кнопка "Далее" должна быть неактивна без заполненных полей
    const nextButton = screen.getByText('Далее')
    expect(nextButton).toBeDisabled()
  })

  it('should enable next button when all required fields are filled', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    // Проходим до формы данных клиента
    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP зона'))

    await waitFor(() => {
      expect(screen.getByText('VIP-1')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP-1'))

    await waitFor(() => {
      expect(screen.getByText('Ваши данные')).toBeInTheDocument()
    })

    // Заполняем обязательные поля
    fireEvent.change(screen.getByLabelText('Имя и фамилия *'), {
      target: { value: 'Тестовый клиент' }
    })
    fireEvent.change(screen.getByLabelText('Телефон *'), {
      target: { value: '+7 (999) 123-45-67' }
    })
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'test@example.com' }
    })

    // Кнопка "Далее" должна стать активной
    const nextButton = screen.getByText('Далее')
    expect(nextButton).toBeEnabled()
  })

  it('should show purchase button with correct price on final step', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    // Проходим до финального шага
    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP зона'))

    await waitFor(() => {
      expect(screen.getByText('VIP-1')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP-1'))

    await waitFor(() => {
      expect(screen.getByText('Ваши данные')).toBeInTheDocument()
    })

    // Заполняем поля
    fireEvent.change(screen.getByLabelText('Имя и фамилия *'), {
      target: { value: 'Тестовый клиент' }
    })
    fireEvent.change(screen.getByLabelText('Телефон *'), {
      target: { value: '+7 (999) 123-45-67' }
    })
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'test@example.com' }
    })

    fireEvent.click(screen.getByText('Далее'))

    await waitFor(() => {
      expect(screen.getByText('Купить за 5000 ₽')).toBeInTheDocument()
    })
  })

  it('should handle successful ticket purchase', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    // Проходим весь процесс покупки
    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP зона'))

    await waitFor(() => {
      expect(screen.getByText('VIP-1')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP-1'))

    await waitFor(() => {
      expect(screen.getByText('Ваши данные')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByLabelText('Имя и фамилия *'), {
      target: { value: 'Тестовый клиент' }
    })
    fireEvent.change(screen.getByLabelText('Телефон *'), {
      target: { value: '+7 (999) 123-45-67' }
    })
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'test@example.com' }
    })

    fireEvent.click(screen.getByText('Далее'))

    await waitFor(() => {
      expect(screen.getByText('Купить за 5000 ₽')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Купить за 5000 ₽'))

    await waitFor(() => {
      expect(eventTicketsApi.createTicket).toHaveBeenCalledWith({
        eventId: 1,
        zoneId: 1,
        tableId: 1,
        customerName: 'Тестовый клиент',
        customerEmail: 'test@example.com',
        customerPhone: '+7 (999) 123-45-67'
      })
      expect(mockOnSuccess).toHaveBeenCalled()
    })
  })

  it('should handle API errors during ticket creation', async () => {
    ;(eventTicketsApi.createTicket as jest.Mock).mockResolvedValue({
      success: false,
      error: 'Стол уже занят'
    })

    // Мокаем alert
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {})

    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    // Проходим весь процесс покупки
    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP зона'))

    await waitFor(() => {
      expect(screen.getByText('VIP-1')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP-1'))

    await waitFor(() => {
      expect(screen.getByText('Ваши данные')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByLabelText('Имя и фамилия *'), {
      target: { value: 'Тестовый клиент' }
    })
    fireEvent.change(screen.getByLabelText('Телефон *'), {
      target: { value: '+7 (999) 123-45-67' }
    })
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'test@example.com' }
    })

    fireEvent.click(screen.getByText('Далее'))

    await waitFor(() => {
      expect(screen.getByText('Купить за 5000 ₽')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Купить за 5000 ₽'))

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Стол уже занят')
    })

    mockAlert.mockRestore()
  })

  it('should allow going back to previous steps', async () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    // Проходим до второго шага
    await waitFor(() => {
      expect(screen.getByText('VIP зона')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('VIP зона'))

    await waitFor(() => {
      expect(screen.getByText('Выберите стол')).toBeInTheDocument()
    })

    // Возвращаемся назад
    fireEvent.click(screen.getByText('Назад'))

    await waitFor(() => {
      expect(screen.getByText('Выберите зону')).toBeInTheDocument()
    })
  })

  it('should close modal when close button is clicked', () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    const closeButton = screen.getByText('×')
    fireEvent.click(closeButton)

    expect(mockOnClose).toHaveBeenCalled()
  })

  it('should close modal when clicking outside', () => {
    render(
      <TicketPurchaseFlow
        event={mockEvent}
        onClose={mockOnClose}
        onSuccess={mockOnSuccess}
      />
    )

    const overlay = screen.getByText('Тестовое мероприятие').closest('div')?.parentElement
    if (overlay) {
      fireEvent.click(overlay)
      expect(mockOnClose).toHaveBeenCalled()
    }
  })
})


