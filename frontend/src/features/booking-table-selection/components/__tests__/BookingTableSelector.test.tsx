import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { BookingTableSelector } from '../BookingTableSelector'
import { getTablesByZone, createBooking } from '@/shared/api/booking'

// Mock API functions
vi.mock('@/shared/api/booking', () => ({
  getTablesByZone: vi.fn(),
  createBooking: vi.fn(),
}))

const mockGetTablesByZone = getTablesByZone as any
const mockCreateBooking = createBooking as any

describe('BookingTableSelector', () => {
  const mockZone = {
    id: 1,
    name: 'Бильярдная зона',
    type: 'billiards' as const,
    description: 'Профессиональные бильярдные столы',
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

  const mockTables = [
    {
      id: 1,
      zoneId: 1,
      name: 'Стол 1',
      x: 100,
      y: 200,
      width: 150,
      height: 75,
      seats: 4,
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z'
    },
    {
      id: 2,
      zoneId: 1,
      name: 'Стол 2',
      x: 300,
      y: 200,
      width: 150,
      height: 75,
      seats: 6,
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z'
    }
  ]

  const mockOnBookingCreated = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state initially', () => {
    mockGetTablesByZone.mockImplementation(() => new Promise(() => {})) // Never resolves
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    expect(screen.getByText('Выберите стол и время бронирования')).toBeInTheDocument()
    expect(screen.getByText('Загрузка столов...')).toBeInTheDocument()
  })

  it('renders tables when data is loaded', async () => {
    mockGetTablesByZone.mockResolvedValue(mockTables)
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    await waitFor(() => {
      expect(screen.getByText('Стол 1')).toBeInTheDocument()
      expect(screen.getByText('Стол 2')).toBeInTheDocument()
    })
    
    expect(screen.getByText('4 места')).toBeInTheDocument()
    expect(screen.getByText('6 мест')).toBeInTheDocument()
  })

  it('handles table selection', async () => {
    mockGetTablesByZone.mockResolvedValue(mockTables)
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    await waitFor(() => {
      expect(screen.getByText('Стол 1')).toBeInTheDocument()
    })
    
    const tableCard = screen.getByText('Стол 1').closest('div')
    expect(tableCard).toBeInTheDocument()
    
    await userEvent.click(tableCard!)
    
    expect(screen.getByText('Забронировать')).toBeInTheDocument()
    expect(screen.getByText('Забронировать')).not.toBeDisabled()
  })

  it('renders booking form when table is selected', async () => {
    mockGetTablesByZone.mockResolvedValue(mockTables)
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    await waitFor(() => {
      expect(screen.getByText('Стол 1')).toBeInTheDocument()
    })
    
    const tableCard = screen.getByText('Стол 1').closest('div')
    await userEvent.click(tableCard!)
    
    expect(screen.getByText('Информация о бронировании')).toBeInTheDocument()
    expect(screen.getByText('Имя *')).toBeInTheDocument()
    expect(screen.getByText('Телефон *')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Количество гостей')).toBeInTheDocument()
    expect(screen.getByText('Время начала *')).toBeInTheDocument()
    expect(screen.getByText('Время окончания *')).toBeInTheDocument()
  })

  it('validates form fields', async () => {
    mockGetTablesByZone.mockResolvedValue(mockTables)
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    await waitFor(() => {
      expect(screen.getByText('Стол 1')).toBeInTheDocument()
    })
    
    const tableCard = screen.getByText('Стол 1').closest('div')
    await userEvent.click(tableCard!)
    
    const bookButton = screen.getByText('Забронировать')
    await userEvent.click(bookButton)
    
    expect(screen.getByText('Пожалуйста, заполните все поля')).toBeInTheDocument()
  })

  it('creates booking when form is valid', async () => {
    mockGetTablesByZone.mockResolvedValue(mockTables)
    mockCreateBooking.mockResolvedValue({ id: 1, status: 'pending' })
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    await waitFor(() => {
      expect(screen.getByText('Стол 1')).toBeInTheDocument()
    })
    
    const tableCard = screen.getByText('Стол 1').closest('div')
    await userEvent.click(tableCard!)
    
    // Fill form
    await userEvent.type(screen.getByLabelText('Имя *'), 'John Doe')
    await userEvent.type(screen.getByLabelText('Телефон *'), '+1234567890')
    await userEvent.type(screen.getByLabelText('Email'), 'john@example.com')
    await userEvent.selectOptions(screen.getByLabelText('Время начала *'), '14:00')
    await userEvent.selectOptions(screen.getByLabelText('Время окончания *'), '16:00')
    await userEvent.selectOptions(screen.getByLabelText('Количество гостей'), '4')
    
    const bookButton = screen.getByText('Забронировать')
    await userEvent.click(bookButton)
    
    await waitFor(() => {
      expect(mockCreateBooking).toHaveBeenCalledWith({
        tableId: 1,
        customerName: 'John Doe',
        customerPhone: '+1234567890',
        customerEmail: 'john@example.com',
        startTime: '14:00',
        endTime: '16:00',
        totalAmount: 1000,
        depositAmount: 100
      })
    })
  })

  it('renders error state when API fails', async () => {
    mockGetTablesByZone.mockRejectedValue(new Error('API Error'))
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    await waitFor(() => {
      expect(screen.getByText('Ошибка загрузки столов')).toBeInTheDocument()
    })
  })

  it('renders no data message when no tables available', async () => {
    mockGetTablesByZone.mockResolvedValue([])
    
    render(<BookingTableSelector zone={mockZone} onBookingCreated={mockOnBookingCreated} onBack={() => {}} />)
    
    await waitFor(() => {
      expect(screen.getByText('Нет доступных столов в этой зоне')).toBeInTheDocument()
    })
  })
})
