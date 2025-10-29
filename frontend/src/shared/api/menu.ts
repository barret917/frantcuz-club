import axios from 'axios'

// Используем переменную окружения или /api как fallback
const API_BASE_URL = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL.includes('localhost') 
  ? '/api' 
  : import.meta.env.VITE_API_URL

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
  slug?: string
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
  slug?: string
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
      const response = await axios.get(`${API_BASE_URL}/menu-types`)
      console.log('✅ Типы меню получены:', response.data.length, 'шт.')
      return response.data
    } catch (error) {
      console.error('❌ Ошибка получения типов меню:', error)
      throw error
    }
  },

  getMenuType: async (id: number): Promise<MenuType> => {
    const response = await axios.get(`${API_BASE_URL}/menu-types/${id}`)
    return response.data
  },

  createMenuType: async (data: CreateMenuTypeData): Promise<MenuType> => {
    const response = await axios.post(`${API_BASE_URL}/menu-types`, data)
    return response.data
  },

  updateMenuType: async (id: number, data: UpdateMenuTypeData): Promise<MenuType> => {
    const response = await axios.put(`${API_BASE_URL}/menu-types/${id}`, data)
    return response.data
  },

  deleteMenuType: async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/menu-types/${id}`)
  },

  // Категории меню
  getMenuCategories: async (menuTypeId?: number): Promise<MenuCategory[]> => {
    console.log('🔍 Запрашиваем категории меню...', menuTypeId ? `для типа ${menuTypeId}` : 'все')
    try {
      const params = menuTypeId ? { menuTypeId } : {}
      const response = await axios.get(`${API_BASE_URL}/menu-categories`, { params })
      console.log('✅ Категории меню получены:', response.data.length, 'шт.')
      return response.data
    } catch (error) {
      console.error('❌ Ошибка получения категорий меню:', error)
      throw error
    }
  },

  getMenuCategory: async (id: number): Promise<MenuCategory> => {
    const response = await axios.get(`${API_BASE_URL}/menu-categories/${id}`)
    return response.data
  },

  createMenuCategory: async (data: CreateMenuCategoryData): Promise<MenuCategory> => {
    const response = await axios.post(`${API_BASE_URL}/menu-categories`, data)
    return response.data
  },

  updateMenuCategory: async (id: number, data: UpdateMenuCategoryData): Promise<MenuCategory> => {
    const response = await axios.put(`${API_BASE_URL}/menu-categories/${id}`, data)
    return response.data
  },

  deleteMenuCategory: async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/menu-categories/${id}`)
  },

  // Блюда меню
  getMenuItems: async (categoryId?: number): Promise<MenuItem[]> => {
    console.log('🔍 Запрашиваем блюда меню...', categoryId ? `для категории ${categoryId}` : 'все')
    try {
      const params = categoryId ? { categoryId } : {}
      const response = await axios.get(`${API_BASE_URL}/menu-items`, { params })
      console.log('✅ Блюда меню получены:', response.data.length, 'шт.')
      return response.data
    } catch (error) {
      console.error('❌ Ошибка получения блюд меню:', error)
      throw error
    }
  },

  getMenuItem: async (id: number): Promise<MenuItem> => {
    const response = await axios.get(`${API_BASE_URL}/menu-items/${id}`)
    return response.data
  },

  createMenuItem: async (data: CreateMenuItemData): Promise<MenuItem> => {
    console.log('🚀 Создаем блюдо:', data)
    try {
      const response = await axios.post(`${API_BASE_URL}/menu-items`, data)
      console.log('✅ Блюдо создано:', response.data)
      return response.data
    } catch (error) {
      console.error('❌ Ошибка создания блюда:', error)
      throw error
    }
  },

  updateMenuItem: async (id: number, data: UpdateMenuItemData): Promise<MenuItem> => {
    const response = await axios.put(`${API_BASE_URL}/menu-items/${id}`, data)
    return response.data
  },

  deleteMenuItem: async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/menu-items/${id}`)
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
  },

  // Получение меню с фильтрацией
  getFilteredMenu: async (filters?: {
    searchQuery?: string
    priceRange?: { min: number; max: number }
    categoryId?: number
    menuTypeId?: number
    allergens?: string[]
    isPopular?: boolean
  }): Promise<{
    types: MenuType[]
    categories: MenuCategory[]
    items: MenuItem[]
    filteredItems: MenuItem[]
  }> => {
    console.log('🔍 Запрашиваем отфильтрованное меню...', filters)
    try {
      const fullMenu = await menuApi.getFullMenu()
      
      let filteredItems = fullMenu.items
      
      // Фильтрация по поисковому запросу
      if (filters?.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        filteredItems = filteredItems.filter(item => 
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
        )
      }
      
      // Фильтрация по ценовому диапазону
      if (filters?.priceRange) {
        filteredItems = filteredItems.filter(item => 
          item.price >= filters.priceRange!.min && item.price <= filters.priceRange!.max
        )
      }
      
      // Фильтрация по категории
      if (filters?.categoryId) {
        filteredItems = filteredItems.filter(item => item.categoryId === filters.categoryId)
      }
      
      // Фильтрация по типу меню
      if (filters?.menuTypeId) {
        const categoryIds = fullMenu.categories
          .filter(cat => cat.menuTypeId === filters.menuTypeId)
          .map(cat => cat.id)
        filteredItems = filteredItems.filter(item => categoryIds.includes(item.categoryId))
      }
      
      // Фильтрация по аллергенам
      if (filters?.allergens && filters.allergens.length > 0) {
        filteredItems = filteredItems.filter(item => 
          !filters.allergens!.some(allergen => 
            item.allergens.includes(allergen)
          )
        )
      }
      
      // Фильтрация по популярности
      if (filters?.isPopular !== undefined) {
        filteredItems = filteredItems.filter(item => item.isPopular === filters.isPopular)
      }
      
      console.log('✅ Отфильтрованное меню получено:', {
        total: fullMenu.items.length,
        filtered: filteredItems.length
      })
      
      return {
        ...fullMenu,
        filteredItems
      }
    } catch (error) {
      console.error('❌ Ошибка получения отфильтрованного меню:', error)
      throw error
    }
  }
} 