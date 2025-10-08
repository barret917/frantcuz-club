import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { BookingZoneSelector } from '../BookingZoneSelector'
import { getBookingZones } from '@/shared/api/booking'

// Mock getBookingZones
vi.mock('@/shared/api/booking', () => ({
  getBookingZones: vi.fn(),
}))

const mockGetBookingZones = getBookingZones as any

describe('BookingZoneSelector', () => {
  const mockZones = [
    {
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
    },
    {
      id: 2,
      name: 'Караоке комната',
      type: 'karaoke' as const,
      description: 'Современная караоке система',
      openTime: '12:00',
      closeTime: '24:00',
      pricePerHour: 800,
      deposit: 200,
      imageUrl: null,
      isActive: true,
      sortOrder: 1,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z'
    }
  ]

  const mockOnZoneSelect = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state initially', () => {
    mockGetBookingZones.mockImplementation(() => new Promise(() => {})) // Never resolves
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    expect(screen.getByText('Выберите зону для бронирования')).toBeInTheDocument()
    expect(screen.getByText('Загрузка зон...')).toBeInTheDocument()
  })

  it('renders zones when data is loaded', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Бильярдная зона')).toBeInTheDocument()
      expect(screen.getByText('Караоке комната')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Бильярд')).toBeInTheDocument()
    expect(screen.getAllByText('Караоке')).toHaveLength(2) // Заголовок и тип зоны
    expect(screen.getByText('500 ₽/час')).toBeInTheDocument()
    expect(screen.getByText('800 ₽/час')).toBeInTheDocument()
  })

  it('handles zone selection', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Бильярдная зона')).toBeInTheDocument()
    })
    
    const zoneCard = screen.getByText('Бильярдная зона').closest('div')
    expect(zoneCard).toBeInTheDocument()
    
    await userEvent.click(zoneCard!)
    
    expect(screen.getByText('Продолжить')).toBeInTheDocument()
    expect(screen.getByText('Продолжить')).not.toBeDisabled()
  })

  it('calls onZoneSelect when continue button is clicked', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Бильярдная зона')).toBeInTheDocument()
    })
    
    const zoneCard = screen.getByText('Бильярдная зона').closest('div')
    await userEvent.click(zoneCard!)
    
    const continueButton = screen.getByText('Продолжить')
    await userEvent.click(continueButton)
    
    expect(mockOnZoneSelect).toHaveBeenCalledWith(mockZones[0])
  })

  it('disables continue button when no zone is selected', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Продолжить')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Продолжить')).toBeDisabled()
  })

  it('renders error state when API fails', async () => {
    mockGetBookingZones.mockRejectedValue(new Error('API Error'))
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Ошибка загрузки зон бронирования')).toBeInTheDocument()
    })
  })

  it('renders no data message when no zones available', async () => {
    mockGetBookingZones.mockResolvedValue([])
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Нет доступных зон для бронирования')).toBeInTheDocument()
    })
  })

  it('displays correct zone type labels', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
      expect(screen.getAllByText('Караоке')).toHaveLength(2) // Заголовок и тип зоны
    })
  })

  it('displays zone information correctly', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    
    render(<BookingZoneSelector onZoneSelect={mockOnZoneSelect} />)
    
    await waitFor(() => {
      expect(screen.getByText('Время работы: 10:00 - 22:00')).toBeInTheDocument()
      expect(screen.getByText('Время работы: 12:00 - 24:00')).toBeInTheDocument()
      expect(screen.getByText('Залог: 100 ₽')).toBeInTheDocument()
      expect(screen.getByText('Залог: 200 ₽')).toBeInTheDocument()
    })
  })
})
