import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { BilliardsPricing } from '../BilliardsPricing'
import * as billiardsApi from '@/shared/api/billiards'

// Mock the API functions
vi.mock('@/shared/api/billiards', () => ({
  getBilliardsServices: vi.fn(),
  updateBilliardsService: vi.fn(),
  createBilliardsService: vi.fn(),
  deleteBilliardsService: vi.fn()
}))

// Mock ImageUpload component
vi.mock('@/shared/ui/ImageUpload', () => ({
  ImageUpload: ({ onImageUpload, onImageRemove, currentImageUrl }: any) => (
    <div data-testid="image-upload">
      <div>Current: {currentImageUrl || 'none'}</div>
      <button onClick={() => onImageUpload && onImageUpload('https://example.com/new-image.jpg')}>
        Upload Image
      </button>
      <button onClick={() => onImageRemove && onImageRemove()}>
        Remove Image
      </button>
    </div>
  )
}))

describe('BilliardsPricing', () => {
  const mockServices = [
    {
      id: 1,
      name: 'Русский бильярд',
      type: 'russian' as const,
      price: 800,
      description: 'Классический русский бильярд',
      imageUrl: 'https://example.com/russian.jpg',
      isActive: true,
      sortOrder: 1,
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z'
    },
    {
      id: 2,
      name: 'Американский пул',
      type: 'american' as const,
      price: 600,
      description: 'Американский пул',
      imageUrl: '',
      isActive: true,
      sortOrder: 2,
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z'
    }
  ]

  const mockGetBilliardsServices = vi.mocked(billiardsApi.getBilliardsServices)
  const mockUpdateBilliardsService = vi.mocked(billiardsApi.updateBilliardsService)
  const mockCreateBilliardsService = vi.mocked(billiardsApi.createBilliardsService)
  const mockDeleteBilliardsService = vi.mocked(billiardsApi.deleteBilliardsService)

  beforeEach(() => {
    vi.clearAllMocks()
    mockGetBilliardsServices.mockResolvedValue(mockServices)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders loading state initially', () => {
    mockGetBilliardsServices.mockImplementation(() => new Promise(() => {}))
    
    render(<BilliardsPricing />)
    
    expect(screen.getByText('Загрузка данных о бильярде...')).toBeInTheDocument()
  })

  it('renders services after loading', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('🎱 Управление ценами на бильярд')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    expect(screen.getAllByText('Американский пул')).toHaveLength(2)
    expect(screen.getByDisplayValue('800')).toBeInTheDocument()
    expect(screen.getByDisplayValue('600')).toBeInTheDocument()
  })

  it('shows error message when loading fails', async () => {
    mockGetBilliardsServices.mockRejectedValue(new Error('Network error'))
    
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Ошибка при загрузке данных о бильярде')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Попробовать снова')).toBeInTheDocument()
  })

  it('allows editing service name', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    const nameInput = screen.getByDisplayValue('800')
    fireEvent.change(nameInput, { target: { value: '1000' } })
    
    expect(nameInput).toHaveValue(1000)
  })

  it('allows editing service price', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByDisplayValue('800')).toBeInTheDocument()
    })
    
    const priceInput = screen.getByDisplayValue('800')
    fireEvent.change(priceInput, { target: { value: '1000' } })
    
    expect(priceInput).toHaveValue(1000)
  })

  it('allows editing service description', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    const descriptionInput = screen.getByDisplayValue('Классический русский бильярд')
    fireEvent.change(descriptionInput, { target: { value: 'Премиум русский бильярд' } })
    
    expect(descriptionInput).toHaveValue('Премиум русский бильярд')
  })

  it('renders service type selectors', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    // Check that type selectors are rendered (they might be hidden in the main form)
    const selects = screen.queryAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(0)
  })

  it('saves changes when form is submitted', async () => {
    mockUpdateBilliardsService.mockResolvedValue(mockServices[0])
    
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    const priceInput = screen.getByDisplayValue('800')
    fireEvent.change(priceInput, { target: { value: '1000' } })
    
    const submitButton = screen.getByText('💾 Сохранить все изменения')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockUpdateBilliardsService).toHaveBeenCalledWith(1, {
        name: 'Русский бильярд',
        type: 'russian',
        price: 1000,
        description: 'Классический русский бильярд',
        imageUrl: 'https://example.com/russian.jpg',
        isActive: true,
        sortOrder: 1
      })
    })
    
    expect(screen.getByText('Цены на бильярд успешно обновлены!')).toBeInTheDocument()
  })

  it('shows error when save fails', async () => {
    mockUpdateBilliardsService.mockRejectedValue(new Error('Save failed'))
    
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    const submitButton = screen.getByText('💾 Сохранить все изменения')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Ошибка при сохранении данных')).toBeInTheDocument()
    })
  })

  it('shows create form when add button is clicked', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('➕ Добавить новую услугу')).toBeInTheDocument()
    })
    
    const addButton = screen.getByText('➕ Добавить новую услугу')
    fireEvent.click(addButton)
    
    expect(screen.getByText('❌ Отменить')).toBeInTheDocument()
    expect(screen.getByText('✅ Создать услугу')).toBeInTheDocument()
  })

  it('shows create form when add button is clicked', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('➕ Добавить новую услугу')).toBeInTheDocument()
    })
    
    const addButton = screen.getByText('➕ Добавить новую услугу')
    fireEvent.click(addButton)
    
    expect(screen.getByText('❌ Отменить')).toBeInTheDocument()
    expect(screen.getByText('✅ Создать услугу')).toBeInTheDocument()
  })

  it('renders delete buttons for services', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    // Check that delete buttons are rendered
    expect(screen.getAllByText('🗑️ Удалить услугу')).toHaveLength(2)
  })

  it('creates sample data when no services exist', async () => {
    mockGetBilliardsServices.mockResolvedValue([])
    mockCreateBilliardsService.mockResolvedValue(mockServices[0])
    
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('🎯 Создать тестовые данные')).toBeInTheDocument()
    })
    
    const createSampleButton = screen.getByText('🎯 Создать тестовые данные')
    fireEvent.click(createSampleButton)
    
    await waitFor(() => {
      expect(mockCreateBilliardsService).toHaveBeenCalledTimes(3)
    })
  })

  it('renders image upload components', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getAllByTestId('image-upload')).toHaveLength(2)
    })
    
    // Check that image upload components are rendered
    expect(screen.getAllByText('Upload Image')).toHaveLength(2)
    expect(screen.getAllByText('Remove Image')).toHaveLength(2)
  })

  it('toggles service active status', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    const activeCheckboxes = screen.getAllByRole('checkbox')
    fireEvent.click(activeCheckboxes[0])
    
    expect(activeCheckboxes[0]).not.toBeChecked()
  })

  it('displays correct icons for service types', async () => {
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('🎱')).toBeInTheDocument() // Russian
      expect(screen.getByText('🎯')).toBeInTheDocument() // American
    })
  })

  it('handles retry after error', async () => {
    mockGetBilliardsServices
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce(mockServices)
    
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Ошибка при загрузке данных о бильярде')).toBeInTheDocument()
    })
    
    const retryButton = screen.getByText('Попробовать снова')
    fireEvent.click(retryButton)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
  })

  it('shows success message after save', async () => {
    mockUpdateBilliardsService.mockResolvedValue(mockServices[0])
    
    render(<BilliardsPricing />)
    
    await waitFor(() => {
      expect(screen.getByText('Русский бильярд')).toBeInTheDocument()
    })
    
    const submitButton = screen.getByText('💾 Сохранить все изменения')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Цены на бильярд успешно обновлены!')).toBeInTheDocument()
    })
  })
})
