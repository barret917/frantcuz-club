import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { ImageUpload } from '../ImageUpload'
import { uploadImage } from '@/shared/config/cloudinary'

// Mock Cloudinary upload function
vi.mock('@/shared/config/cloudinary', () => ({
  uploadImage: vi.fn()
}))

// Mock environment variables
const mockEnv = {
  VITE_CLOUDINARY_CLOUD_NAME: 'test-cloud',
  VITE_CLOUDINARY_UPLOAD_PRESET: 'test-preset'
}

vi.stubGlobal('import', {
  meta: {
    env: mockEnv
  }
})

describe('ImageUpload', () => {
  const mockOnImageUpload = vi.fn()
  const mockOnImageRemove = vi.fn()
  const mockUploadImage = vi.mocked(uploadImage)

  beforeEach(() => {
    vi.clearAllMocks()
    // Mock FileReader
    global.FileReader = vi.fn().mockImplementation(() => ({
      EMPTY: 0,
      LOADING: 1,
      DONE: 2,
      readAsDataURL: vi.fn(),
      onload: null,
      result: 'data:image/jpeg;base64,test-image-data'
    })) as any
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders upload area with correct text', () => {
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    expect(screen.getByText('Перетащите изображение сюда или нажмите для выбора')).toBeInTheDocument()
    expect(screen.getByText('Поддерживаются: JPG, PNG, WebP (до 10MB)')).toBeInTheDocument()
    expect(screen.getByText('📷')).toBeInTheDocument()
  })

  it('shows current image when currentImageUrl is provided', () => {
    const imageUrl = 'https://example.com/image.jpg'
    render(
      <ImageUpload 
        onImageUpload={mockOnImageUpload} 
        currentImageUrl={imageUrl}
      />
    )
    
    const image = screen.getByAltText('Предварительный просмотр')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', imageUrl)
    expect(screen.getByText('Нажмите для замены изображения')).toBeInTheDocument()
  })

  it('handles file selection via input', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    mockUploadImage.mockResolvedValue('https://example.com/uploaded.jpg')
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(mockUploadImage).toHaveBeenCalledWith(file, 3, expect.any(Function))
    })
  })

  it('handles drag and drop', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    mockUploadImage.mockResolvedValue('https://example.com/uploaded.jpg')
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    
    fireEvent.dragOver(uploadArea!, { dataTransfer: { files: [file] } })
    fireEvent.drop(uploadArea!, { dataTransfer: { files: [file] } })
    
    await waitFor(() => {
      expect(mockUploadImage).toHaveBeenCalledWith(file, 3, expect.any(Function))
    })
  })

  it('shows error for invalid file type', async () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' })
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(screen.getByText('Пожалуйста, выберите изображение')).toBeInTheDocument()
    })
  })

  it('shows error for file too large', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    Object.defineProperty(file, 'size', { value: 11 * 1024 * 1024 }) // 11MB
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(screen.getByText('Размер файла не должен превышать 10MB')).toBeInTheDocument()
    })
  })

  it('shows error for unsupported format', async () => {
    const file = new File(['test'], 'test.gif', { type: 'image/gif' })
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(screen.getByText('Поддерживаются только JPG, PNG и WebP форматы')).toBeInTheDocument()
    })
  })

  it('shows progress during upload', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    mockUploadImage.mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve('https://example.com/uploaded.jpg'), 1000))
    )
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(screen.getByText('Загрузка...')).toBeInTheDocument()
    })
  })

  it('shows success message after upload', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    mockUploadImage.mockResolvedValue('https://example.com/uploaded.jpg')
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(screen.getByText('Изображение успешно загружено!')).toBeInTheDocument()
    })
    
    expect(mockOnImageUpload).toHaveBeenCalledWith('https://example.com/uploaded.jpg')
  })

  it('shows error when upload fails', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    mockUploadImage.mockRejectedValue(new Error('Upload failed'))
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(screen.getByText('Upload failed')).toBeInTheDocument()
    })
  })

  it('handles remove image when onImageRemove is provided', () => {
    const imageUrl = 'https://example.com/image.jpg'
    render(
      <ImageUpload 
        onImageUpload={mockOnImageUpload} 
        onImageRemove={mockOnImageRemove}
        currentImageUrl={imageUrl}
      />
    )
    
    const removeButton = screen.getByText('Удалить изображение')
    fireEvent.click(removeButton)
    
    expect(mockOnImageRemove).toHaveBeenCalled()
  })

  it('does not show remove button when onImageRemove is not provided', () => {
    const imageUrl = 'https://example.com/image.jpg'
    render(
      <ImageUpload 
        onImageUpload={mockOnImageUpload} 
        currentImageUrl={imageUrl}
      />
    )
    
    expect(screen.queryByText('Удалить изображение')).not.toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<ImageUpload onImageUpload={mockOnImageUpload} disabled />)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    expect(fileInput).toBeDisabled()
  })

  it('shows configuration error when Cloudinary is not configured', async () => {
    // Mock empty environment
    vi.stubGlobal('import', {
      meta: {
        env: {}
      }
    })
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    // The error should be shown immediately on mount
    await waitFor(() => {
      expect(screen.getByText(/Ошибка конфигурации Cloudinary/)).toBeInTheDocument()
    })
  })

  it('handles drag over and drag leave events', () => {
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    
    fireEvent.dragOver(uploadArea!)
    fireEvent.dragLeave(uploadArea!)
    
    // Component should handle these events without errors
    expect(uploadArea).toBeInTheDocument()
  })

  it('calls onImageUpload with correct URL after successful upload', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    const uploadedUrl = 'https://example.com/uploaded.jpg'
    mockUploadImage.mockResolvedValue(uploadedUrl)
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(mockOnImageUpload).toHaveBeenCalledWith(uploadedUrl)
    })
  })

  it('shows upload attempt counter during retries', async () => {
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    mockUploadImage.mockImplementation((file, maxAttempts, onAttempt) => {
      onAttempt?.(2)
      return Promise.resolve('https://example.com/uploaded.jpg')
    })
    
    render(<ImageUpload onImageUpload={mockOnImageUpload} />)
    
    const uploadArea = screen.getByText('Перетащите изображение сюда или нажмите для выбора').closest('div')
    fireEvent.click(uploadArea!)
    
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })
    
    await waitFor(() => {
      expect(screen.getByText('Попытка 2/3')).toBeInTheDocument()
    })
  })
})
