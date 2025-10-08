import { apiClient } from './client'

export interface CarouselPhoto {
  id: number
  title: string
  description?: string
  imageUrl: string
  page: 'billiards' | 'karaoke' | 'disco'
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface CreateCarouselPhotoData {
  title: string
  description?: string
  imageUrl: string
  page: 'billiards' | 'karaoke' | 'disco'
  sortOrder?: number
}

export interface UpdateCarouselPhotoData {
  title?: string
  description?: string
  imageUrl?: string
  page?: 'billiards' | 'karaoke' | 'disco'
  sortOrder?: number
  isActive?: boolean
}

export interface CarouselPhotosResponse {
  success: boolean
  data: CarouselPhoto[]
}

export interface CarouselPhotoResponse {
  success: boolean
  data: CarouselPhoto
}

export interface CreateCarouselPhotoResponse {
  success: boolean
  data: CarouselPhoto
  message: string
}

export const carouselPhotosApi = {
  // Получить все фотографии карусели
  async getCarouselPhotos(page?: string): Promise<CarouselPhotosResponse> {
    try {
      const params = page ? { page } : {}
      const response = await apiClient.get('/carousel-photos', { params })
      return response.data
    } catch (error) {
      console.error('Ошибка при получении фотографий карусели:', error)
      throw error
    }
  },

  // Получить фотографию по ID
  async getCarouselPhoto(id: number): Promise<CarouselPhotoResponse> {
    try {
      const response = await apiClient.get(`/carousel-photos/${id}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при получении фотографии:', error)
      throw error
    }
  },

  // Создать новую фотографию
  async createCarouselPhoto(photoData: CreateCarouselPhotoData): Promise<CreateCarouselPhotoResponse> {
    try {
      const response = await apiClient.post('/carousel-photos', photoData)
      return response.data
    } catch (error) {
      console.error('Ошибка при создании фотографии:', error)
      throw error
    }
  },

  // Обновить фотографию
  async updateCarouselPhoto(id: number, photoData: UpdateCarouselPhotoData): Promise<CarouselPhotoResponse> {
    try {
      const response = await apiClient.put(`/carousel-photos/${id}`, photoData)
      return response.data
    } catch (error) {
      console.error('Ошибка при обновлении фотографии:', error)
      throw error
    }
  },

  // Удалить фотографию
  async deleteCarouselPhoto(id: number): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.delete(`/carousel-photos/${id}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при удалении фотографии:', error)
      throw error
    }
  }
} 