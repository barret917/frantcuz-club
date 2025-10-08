import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { BookingZonesManagement } from '../BookingZonesManagement'
import { getBookingZones, createBookingZone, updateBookingZone, deleteBookingZone } from '@/shared/api/booking'

// Mock API functions
vi.mock('@/shared/api/booking', () => ({
  getBookingZones: vi.fn(),
  createBookingZone: vi.fn(),
  updateBookingZone: vi.fn(),
  deleteBookingZone: vi.fn(),
}))

const mockGetBookingZones = getBookingZones as any
const mockCreateBookingZone = createBookingZone as any
const mockUpdateBookingZone = updateBookingZone as any
const mockDeleteBookingZone = deleteBookingZone as any

describe('BookingZonesManagement', () => {
  const mockZones = [
    {
      id: 1,
      name: 'Бильярд',
      description: 'Зона для игры в бильярд',
      pricePerHour: 500,
      deposit: 100,
      openTime: '09:00',
      closeTime: '23:00',
      isActive: true,
      maxGuests: 8
    },
    {
      id: 2,
      name: 'Караоке',
      description: 'Зона для караоке',
      pricePerHour: 800,
      deposit: 200,
      openTime: '10:00',
      closeTime: '24:00',
      isActive: false,
      maxGuests: 6
    }
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders zones management page', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)

    render(<BookingZonesManagement />)
    
    expect(screen.getByText('Управление зонами бронирования')).toBeInTheDocument()
    expect(screen.getByText('Создать зону')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
      expect(screen.getByText('Караоке')).toBeInTheDocument()
    })
  })

  it('shows loading state', () => {
    mockGetBookingZones.mockImplementation(() => new Promise(() => {}))

    render(<BookingZonesManagement />)
    
    expect(screen.getByText('Загрузка зон...')).toBeInTheDocument()
  })

  it('shows empty state when no zones', async () => {
    mockGetBookingZones.mockResolvedValue([])

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Нет созданных зон')).toBeInTheDocument()
      expect(screen.getByText('Создайте первую зону для бронирования')).toBeInTheDocument()
    })
  })

  it('opens create zone modal', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
    })

    const createButton = screen.getByText('Создать зону')
    fireEvent.click(createButton)

    expect(screen.getByText('Создать зону')).toBeInTheDocument()
    expect(screen.getByLabelText('Название зоны *')).toBeInTheDocument()
  })

  it('opens edit zone modal', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
    })

    const editButtons = screen.getAllByText('Редактировать')
    fireEvent.click(editButtons[0])

    expect(screen.getByText('Редактировать зону')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Бильярд')).toBeInTheDocument()
  })

  it('creates new zone', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    mockCreateBookingZone.mockResolvedValue({
      id: 3,
      name: 'Новая зона',
      description: 'Описание новой зоны',
      pricePerHour: 600,
      deposit: 150,
      openTime: '09:00',
      closeTime: '22:00',
      isActive: true,
      maxGuests: 10
    })

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
    })

    // Open create modal
    const createButton = screen.getByText('Создать зону')
    fireEvent.click(createButton)

    // Fill form
    fireEvent.change(screen.getByLabelText('Название зоны *'), {
      target: { value: 'Новая зона' }
    })
    fireEvent.change(screen.getByLabelText('Описание'), {
      target: { value: 'Описание новой зоны' }
    })
    fireEvent.change(screen.getByLabelText('Цена за час (₽) *'), {
      target: { value: '600' }
    })
    fireEvent.change(screen.getByLabelText('Залог (₽) *'), {
      target: { value: '150' }
    })

    // Submit form
    const submitButton = screen.getByText('Создать')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mockCreateBookingZone).toHaveBeenCalledWith({
        name: 'Новая зона',
        description: 'Описание новой зоны',
        pricePerHour: 600,
        deposit: 150,
        openTime: '09:00',
        closeTime: '23:00',
        isActive: true,
        maxGuests: 10
      })
    })
  })

  it('updates existing zone', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    mockUpdateBookingZone.mockResolvedValue({
      ...mockZones[0],
      name: 'Обновленный бильярд'
    })

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
    })

    // Open edit modal
    const editButtons = screen.getAllByText('Редактировать')
    fireEvent.click(editButtons[0])

    // Update form
    fireEvent.change(screen.getByDisplayValue('Бильярд'), {
      target: { value: 'Обновленный бильярд' }
    })

    // Submit form
    const submitButton = screen.getByText('Обновить')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mockUpdateBookingZone).toHaveBeenCalledWith(1, {
        name: 'Обновленный бильярд',
        description: 'Зона для игры в бильярд',
        pricePerHour: 500,
        deposit: 100,
        openTime: '09:00',
        closeTime: '23:00',
        isActive: true,
        maxGuests: 8
      })
    })
  })

  it('deletes zone', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)
    mockDeleteBookingZone.mockResolvedValue({})

    // Mock window.confirm
    window.confirm = vi.fn(() => true)

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
    })

    const deleteButtons = screen.getAllByText('Удалить')
    fireEvent.click(deleteButtons[0])

    expect(window.confirm).toHaveBeenCalledWith('Вы уверены, что хотите удалить эту зону?')
    expect(mockDeleteBookingZone).toHaveBeenCalledWith(1)
  })

  it('handles form validation', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
    })

    // Open create modal
    const createButton = screen.getByText('Создать зону')
    fireEvent.click(createButton)

    // Try to submit without required fields
    const submitButton = screen.getByText('Создать')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Название зоны обязательно')).toBeInTheDocument()
    })
  })

  it('handles API errors', async () => {
    mockGetBookingZones.mockRejectedValue(new Error('API Error'))

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Ошибка загрузки зон')).toBeInTheDocument()
    })
  })

  it('closes modal on cancel', async () => {
    mockGetBookingZones.mockResolvedValue(mockZones)

    render(<BookingZonesManagement />)

    await waitFor(() => {
      expect(screen.getByText('Бильярд')).toBeInTheDocument()
    })

    // Open create modal
    const createButton = screen.getByText('Создать зону')
    fireEvent.click(createButton)

    expect(screen.getByText('Создать зону')).toBeInTheDocument()

    // Close modal
    const cancelButton = screen.getByText('Отмена')
    fireEvent.click(cancelButton)

    await waitFor(() => {
      expect(screen.queryByText('Создать зону')).not.toBeInTheDocument()
    })
  })
})
