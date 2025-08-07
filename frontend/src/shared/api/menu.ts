import { apiClient } from './client'

export interface MenuType {
  id: number
  name: string
  slug: string
  description: string | null
  sortOrder: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface MenuCategory {
  id: number
  name: string
  slug: string
  description: string | null
  menuTypeId: number
  sortOrder: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface MenuItem {
  id: number
  name: string
  description: string | null
  price: number
  currency: string
  imageUrl: string | null
  categoryId: number
  allergens: string[]
  weight: string | null
  calories: number | null
  preparation: string | null
  isPopular: boolean
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface CreateMenuTypeData {
  name: string
  slug: string
  description?: string
  sortOrder?: number
}

export interface UpdateMenuTypeData {
  name?: string
  slug?: string
  description?: string
  sortOrder?: number
}

export interface CreateMenuCategoryData {
  name: string
  slug: string
  description?: string
  menuTypeId: number
  sortOrder?: number
}

export interface UpdateMenuCategoryData {
  name?: string
  slug?: string
  description?: string
  menuTypeId?: number
  sortOrder?: number
}

export interface CreateMenuItemData {
  name: string
  description?: string
  price: number
  currency?: string
  imageUrl?: string
  categoryId: number
  allergens?: string[]
  weight?: string
  calories?: number
  preparation?: string
  isPopular?: boolean
  isActive?: boolean
  sortOrder?: number
}

export interface UpdateMenuItemData {
  name?: string
  description?: string
  price?: number
  currency?: string
  imageUrl?: string
  categoryId?: number
  allergens?: string[]
  weight?: string
  calories?: number
  preparation?: string
  isPopular?: boolean
  isActive?: boolean
  sortOrder?: number
}

export const menuApi = {
  // Типы меню
  getMenuTypes: async (): Promise<MenuType[]> => {
    console.log('🔍 Запрашиваем типы меню...')
    try {
      const response = await apiClient.get('/menu-types')
      console.log('✅ Типы меню получены:', response.data.length, 'шт.')
      return response.data
    } catch (error) {
      console.error('❌ Ошибка получения типов меню:', error)
      throw error
    }
  },

  getMenuType: async (id: number): Promise<MenuType> => {
    const response = await apiClient.get(`/menu-types/${id}`)
    return response.data
  },

  createMenuType: async (data: CreateMenuTypeData): Promise<MenuType> => {
    const response = await apiClient.post('/menu-types', data)
    return response.data
  },

  updateMenuType: async (id: number, data: UpdateMenuTypeData): Promise<MenuType> => {
    const response = await apiClient.put(`/menu-types/${id}`, data)
    return response.data
  },

  deleteMenuType: async (id: number): Promise<void> => {
    await apiClient.delete(`/menu-types/${id}`)
  },

  // Категории меню
  getMenuCategories: async (menuTypeId?: number): Promise<MenuCategory[]> => {
    console.log('🔍 Запрашиваем категории меню...', menuTypeId ? `для типа ${menuTypeId}` : 'все')
    try {
      const params = menuTypeId ? { menuTypeId } : {}
      const response = await apiClient.get('/menu-categories', { params })
      console.log('✅ Категории меню получены:', response.data.length, 'шт.')
      return response.data
    } catch (error) {
      console.error('❌ Ошибка получения категорий меню:', error)
      throw error
    }
  },

  getMenuCategory: async (id: number): Promise<MenuCategory> => {
    const response = await apiClient.get(`/menu-categories/${id}`)
    return response.data
  },

  createMenuCategory: async (data: CreateMenuCategoryData): Promise<MenuCategory> => {
    const response = await apiClient.post('/menu-categories', data)
    return response.data
  },

  updateMenuCategory: async (id: number, data: UpdateMenuCategoryData): Promise<MenuCategory> => {
    const response = await apiClient.put(`/menu-categories/${id}`, data)
    return response.data
  },

  deleteMenuCategory: async (id: number): Promise<void> => {
    await apiClient.delete(`/menu-categories/${id}`)
  },

  // Блюда меню
  getMenuItems: async (categoryId?: number): Promise<MenuItem[]> => {
    console.log('🔍 Запрашиваем блюда меню...', categoryId ? `для категории ${categoryId}` : 'все')
    try {
      const params = categoryId ? { categoryId } : {}
      const response = await apiClient.get('/menu-items', { params })
      console.log('✅ Блюда меню получены:', response.data.length, 'шт.')
      return response.data
    } catch (error) {
      console.error('❌ Ошибка получения блюд меню:', error)
      throw error
    }
  },

  getMenuItem: async (id: number): Promise<MenuItem> => {
    const response = await apiClient.get(`/menu-items/${id}`)
    return response.data
  },

  createMenuItem: async (data: CreateMenuItemData): Promise<MenuItem> => {
    console.log('🚀 Создаем блюдо:', data)
    try {
      const response = await apiClient.post('/menu-items', data)
      console.log('✅ Блюдо создано:', response.data)
      return response.data
    } catch (error) {
      console.error('❌ Ошибка создания блюда:', error)
      throw error
    }
  },

  updateMenuItem: async (id: number, data: UpdateMenuItemData): Promise<MenuItem> => {
    const response = await apiClient.put(`/menu-items/${id}`, data)
    return response.data
  },

  deleteMenuItem: async (id: number): Promise<void> => {
    await apiClient.delete(`/menu-items/${id}`)
  },

  // Получение полного меню для отображения
  getFullMenu: async (): Promise<{
    types: MenuType[]
    categories: MenuCategory[]
    items: MenuItem[]
  }> => {
    console.log('🚀 Запрашиваем полное меню...')
    try {
      const [types, categories, items] = await Promise.all([
        menuApi.getMenuTypes(),
        menuApi.getMenuCategories(),
        menuApi.getMenuItems()
      ])
      
      console.log('✅ Полное меню получено:', {
        types: types.length,
        categories: categories.length,
        items: items.length
      })
      
      return { types, categories, items }
    } catch (error) {
      console.error('❌ Ошибка получения полного меню:', error)
      throw error
    }
  }
} 