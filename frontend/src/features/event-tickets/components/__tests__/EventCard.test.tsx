import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { EventCard } from '../EventCard'
import type { Event } from '@/shared/api/event-tickets'

// Мокаем styled-components
jest.mock('styled-components', () => ({
  __esModule: true,
  default: (tag: any) => (props: any) => {
    const Component = typeof tag === 'string' ? tag : 'div'
    return React.createElement(Component, props)
  }
}))

const mockEvent: Event = {
  id: 1,
  title: 'Тестовое мероприятие',
  description: 'Описание тестового мероприятия для проверки функциональности',
  date: '2024-12-31T00:00:00.000Z',
  time: '20:00',
  imageUrl: 'https://example.com/image.jpg',
  location: 'Тестовый зал',
  organizer: 'Тестовый организатор',
  contactInfo: '+7 (999) 123-45-67',
  isActive: true,
  isUpcoming: true,
  maxGuests: 100,
  sortOrder: 0,
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
  zones: [
    {
      id: 1,
      eventId: 1,
      name: 'VIP зона',
      price: 5000,
      maxSeats: 20,
      isActive: true,
      sortOrder: 1,
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
      tables: [
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
        }
      ]
    },
    {
      id: 2,
      eventId: 1,
      name: 'Стандартная зона',
      price: 2500,
      maxSeats: 60,
      isActive: true,
      sortOrder: 2,
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
      tables: [
        {
          id: 2,
          zoneId: 2,
          name: 'Стол-1',
          x: 200,
          y: 200,
          width: 120,
          height: 80,
          seats: 5,
          isActive: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      ]
    }
  ]
}

describe('EventCard', () => {
  const mockOnBuyTicket = jest.fn()

  beforeEach(() => {
    mockOnBuyTicket.mockClear()
  })

  it('should render event information correctly', () => {
    render(<EventCard event={mockEvent} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Тестовое мероприятие')).toBeInTheDocument()
    expect(screen.getByText('Описание тестового мероприятия для проверки функциональности')).toBeInTheDocument()
    expect(screen.getByText('31 декабря 2024 г. в 20:00')).toBeInTheDocument()
    expect(screen.getByText('📍 Тестовый зал')).toBeInTheDocument()
    expect(screen.getByText('👤 Тестовый организатор')).toBeInTheDocument()
  })

  it('should display correct price range', () => {
    render(<EventCard event={mockEvent} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('2500 - 5000 ₽')).toBeInTheDocument()
  })

  it('should display available tickets count', () => {
    render(<EventCard event={mockEvent} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('10 из 10 мест')).toBeInTheDocument()
  })

  it('should show upcoming status badge', () => {
    render(<EventCard event={mockEvent} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Предстоящее')).toBeInTheDocument()
  })

  it('should show past status badge for past events', () => {
    const pastEvent = { ...mockEvent, isUpcoming: false }
    render(<EventCard event={pastEvent} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Прошедшее')).toBeInTheDocument()
  })

  it('should call onBuyTicket when buy button is clicked', () => {
    render(<EventCard event={mockEvent} onBuyTicket={mockOnBuyTicket} />)

    const buyButton = screen.getByText('Купить билет')
    fireEvent.click(buyButton)

    expect(mockOnBuyTicket).toHaveBeenCalledWith(mockEvent)
  })

  it('should handle event without image', () => {
    const eventWithoutImage = { ...mockEvent, imageUrl: undefined }
    render(<EventCard event={eventWithoutImage} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Тестовое мероприятие')).toBeInTheDocument()
  })

  it('should handle event without location', () => {
    const eventWithoutLocation = { ...mockEvent, location: undefined }
    render(<EventCard event={eventWithoutLocation} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Тестовое мероприятие')).toBeInTheDocument()
    expect(screen.queryByText(/📍/)).not.toBeInTheDocument()
  })

  it('should handle event without organizer', () => {
    const eventWithoutOrganizer = { ...mockEvent, organizer: undefined }
    render(<EventCard event={eventWithoutOrganizer} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Тестовое мероприятие')).toBeInTheDocument()
    expect(screen.queryByText(/👤/)).not.toBeInTheDocument()
  })

  it('should handle event without zones', () => {
    const eventWithoutZones = { ...mockEvent, zones: [] }
    render(<EventCard event={eventWithoutZones} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Цена не указана')).toBeInTheDocument()
    expect(screen.getByText('Места не настроены')).toBeInTheDocument()
  })

  it('should handle single price zone', () => {
    const eventWithSingleZone = {
      ...mockEvent,
      zones: [mockEvent.zones![0]] // Только VIP зона
    }
    render(<EventCard event={eventWithSingleZone} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('5000 ₽')).toBeInTheDocument()
  })

  it('should handle image load error', () => {
    // Мокаем onError для изображения
    const originalImage = global.Image
    global.Image = class extends originalImage {
      constructor() {
        super()
        setTimeout(() => {
          this.onerror?.(new Event('error'))
        }, 0)
      }
    }

    render(<EventCard event={mockEvent} onBuyTicket={mockOnBuyTicket} />)

    expect(screen.getByText('Тестовое мероприятие')).toBeInTheDocument()

    global.Image = originalImage
  })
})


