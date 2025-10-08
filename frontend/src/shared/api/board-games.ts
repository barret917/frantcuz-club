import { apiClient } from './client'

export interface BoardGame {
  id: number
  name: string
  description?: string
  price: number
  duration?: string
  players?: string
  difficulty?: string
  category?: string
  imageUrl?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface CreateBoardGameData {
  name: string
  description?: string
  price: number
  duration?: string
  players?: string
  difficulty?: string
  category?: string
  imageUrl?: string
  sortOrder?: number
}

export interface UpdateBoardGameData {
  name: string
  description?: string
  price: number
  duration?: string
  players?: string
  difficulty?: string
  category?: string
  imageUrl?: string
  sortOrder?: number
  isActive?: boolean
}

export interface BoardGamesResponse {
  success: boolean
  data: BoardGame[]
  message?: string
  error?: string
}

export interface SingleBoardGameResponse {
  success: boolean
  data: BoardGame
  message?: string
  error?: string
}

export const boardGamesApi = {
  // Получить все настольные игры
  async getBoardGames(): Promise<BoardGamesResponse> {
    try {
      const response = await apiClient.get('/board-games')
      return response.data
    } catch (error) {
      console.error('Ошибка при получении настольных игр:', error)
      throw error
    }
  },

  // Создать новую настольную игру
  async createBoardGame(boardGameData: CreateBoardGameData): Promise<SingleBoardGameResponse> {
    try {
      const response = await apiClient.post('/board-games', boardGameData)
      return response.data
    } catch (error) {
      console.error('Ошибка при создании настольной игры:', error)
      throw error
    }
  },

  // Обновить настольную игру
  async updateBoardGame(id: number, boardGameData: UpdateBoardGameData): Promise<SingleBoardGameResponse> {
    try {
      const response = await apiClient.put(`/board-games/${id}`, boardGameData)
      return response.data
    } catch (error) {
      console.error('Ошибка при обновлении настольной игры:', error)
      throw error
    }
  },

  // Удалить настольную игру
  async deleteBoardGame(id: number): Promise<{ success: boolean; message?: string; error?: string }> {
    try {
      const response = await apiClient.delete(`/board-games/${id}`)
      return response.data
    } catch (error) {
      console.error('Ошибка при удалении настольной игры:', error)
      throw error
    }
  }
} 