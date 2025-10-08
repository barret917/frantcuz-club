import { useState, useCallback } from 'react'

export interface CrudItem {
  id: number
}

export interface CrudOperations<T extends CrudItem> {
  // Состояние
  items: T[]
  loading: boolean
  error: string | null
  
  // Операции
  create: (data: Omit<T, 'id'>) => Promise<T | null>
  update: (id: number, data: Partial<T>) => Promise<T | null>
  delete: (id: number) => Promise<boolean>
  refresh: () => Promise<void>
  
  // Утилиты
  setItems: (items: T[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export interface UseCrudOptions<T extends CrudItem> {
  // Функции API
  onCreate?: (data: Omit<T, 'id'>) => Promise<T>
  onUpdate?: (id: number, data: Partial<T>) => Promise<T>
  onDelete?: (id: number) => Promise<void>
  onFetch?: () => Promise<T[]>
  
  // Начальные данные
  initialItems?: T[]
  
  // Обработчики событий
  onSuccess?: (operation: 'create' | 'update' | 'delete', item?: T) => void
  onError?: (operation: 'create' | 'update' | 'delete', error: string) => void
}

export function useCrudOperations<T extends CrudItem>(
  options: UseCrudOptions<T> = {}
): CrudOperations<T> {
  const {
    onCreate,
    onUpdate,
    onDelete,
    onFetch,
    initialItems = [],
    onSuccess,
    onError
  } = options

  const [items, setItems] = useState<T[]>(initialItems)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleError = useCallback((operation: 'create' | 'update' | 'delete', err: any) => {
    const errorMessage = err?.message || `Ошибка при ${operation === 'create' ? 'создании' : operation === 'update' ? 'обновлении' : 'удалении'}`
    setError(errorMessage)
    onError?.(operation, errorMessage)
    console.error(`Ошибка при ${operation}:`, err)
  }, [onError])

  const create = useCallback(async (data: Omit<T, 'id'>): Promise<T | null> => {
    if (!onCreate) {
      console.warn('onCreate функция не предоставлена')
      return null
    }

    try {
      setLoading(true)
      setError(null)
      
      const newItem = await onCreate(data)
      setItems(prev => [...prev, newItem])
      onSuccess?.('create', newItem)
      
      return newItem
    } catch (err) {
      handleError('create', err)
      return null
    } finally {
      setLoading(false)
    }
  }, [onCreate, onSuccess, handleError])

  const update = useCallback(async (id: number, data: Partial<T>): Promise<T | null> => {
    if (!onUpdate) {
      console.warn('onUpdate функция не предоставлена')
      return null
    }

    try {
      setLoading(true)
      setError(null)
      
      const updatedItem = await onUpdate(id, data)
      setItems(prev => prev.map(item => item.id === id ? updatedItem : item))
      onSuccess?.('update', updatedItem)
      
      return updatedItem
    } catch (err) {
      handleError('update', err)
      return null
    } finally {
      setLoading(false)
    }
  }, [onUpdate, onSuccess, handleError])

  const deleteItem = useCallback(async (id: number): Promise<boolean> => {
    if (!onDelete) {
      console.warn('onDelete функция не предоставлена')
      return false
    }

    try {
      setLoading(true)
      setError(null)
      
      await onDelete(id)
      setItems(prev => prev.filter(item => item.id !== id))
      onSuccess?.('delete')
      
      return true
    } catch (err) {
      handleError('delete', err)
      return false
    } finally {
      setLoading(false)
    }
  }, [onDelete, onSuccess, handleError])

  const refresh = useCallback(async (): Promise<void> => {
    if (!onFetch) {
      console.warn('onFetch функция не предоставлена')
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      const fetchedItems = await onFetch()
      setItems(fetchedItems)
    } catch (err) {
      handleError('update', err) // Используем 'update' для ошибок загрузки
    } finally {
      setLoading(false)
    }
  }, [onFetch, handleError])

  return {
    items,
    loading,
    error,
    create,
    update,
    delete: deleteItem,
    refresh,
    setItems,
    setLoading,
    setError
  }
}
