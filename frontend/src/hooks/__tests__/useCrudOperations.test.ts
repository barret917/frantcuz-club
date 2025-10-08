import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useCrudOperations, type CrudItem } from '../useCrudOperations'

interface TestItem extends CrudItem {
  id: number
  name: string
  value: number
}

describe('useCrudOperations', () => {
  const mockItem: TestItem = { id: 1, name: 'Test Item', value: 100 }
  const mockItems: TestItem[] = [mockItem]

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useCrudOperations<TestItem>())

    expect(result.current.items).toEqual([])
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe(null)
  })

  it('should initialize with provided initial items', () => {
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ initialItems: mockItems })
    )

    expect(result.current.items).toEqual(mockItems)
  })

  it('should create item successfully', async () => {
    const mockCreate = vi.fn().mockResolvedValue(mockItem)
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ onCreate: mockCreate })
    )

    await act(async () => {
      const newItem = await result.current.create({ name: 'New Item', value: 200 })
      expect(newItem).toEqual(mockItem)
    })

    expect(result.current.items).toContain(mockItem)
    expect(mockCreate).toHaveBeenCalledWith({ name: 'New Item', value: 200 })
  })

  it('should update item successfully', async () => {
    const updatedItem = { ...mockItem, name: 'Updated Item' }
    const mockUpdate = vi.fn().mockResolvedValue(updatedItem)
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ 
        initialItems: mockItems,
        onUpdate: mockUpdate 
      })
    )

    await act(async () => {
      const resultItem = await result.current.update(1, { name: 'Updated Item' })
      expect(resultItem).toEqual(updatedItem)
    })

    expect(result.current.items[0]).toEqual(updatedItem)
    expect(mockUpdate).toHaveBeenCalledWith(1, { name: 'Updated Item' })
  })

  it('should delete item successfully', async () => {
    const mockDelete = vi.fn().mockResolvedValue(undefined)
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ 
        initialItems: mockItems,
        onDelete: mockDelete 
      })
    )

    await act(async () => {
      const success = await result.current.delete(1)
      expect(success).toBe(true)
    })

    expect(result.current.items).toEqual([])
    expect(mockDelete).toHaveBeenCalledWith(1)
  })

  it('should refresh items successfully', async () => {
    const mockFetch = vi.fn().mockResolvedValue(mockItems)
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ onFetch: mockFetch })
    )

    await act(async () => {
      await result.current.refresh()
    })

    expect(result.current.items).toEqual(mockItems)
    expect(mockFetch).toHaveBeenCalled()
  })

  it('should handle create error', async () => {
    const mockCreate = vi.fn().mockRejectedValue(new Error('Create failed'))
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ onCreate: mockCreate })
    )

    await act(async () => {
      const newItem = await result.current.create({ name: 'New Item', value: 200 })
      expect(newItem).toBe(null)
    })

    expect(result.current.error).toBe('Create failed')
    expect(result.current.items).toEqual([])
  })

  it('should handle update error', async () => {
    const mockUpdate = vi.fn().mockRejectedValue(new Error('Update failed'))
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ 
        initialItems: mockItems,
        onUpdate: mockUpdate 
      })
    )

    await act(async () => {
      const resultItem = await result.current.update(1, { name: 'Updated Item' })
      expect(resultItem).toBe(null)
    })

    expect(result.current.error).toBe('Update failed')
    expect(result.current.items).toEqual(mockItems) // Items should remain unchanged
  })

  it('should handle delete error', async () => {
    const mockDelete = vi.fn().mockRejectedValue(new Error('Delete failed'))
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ 
        initialItems: mockItems,
        onDelete: mockDelete 
      })
    )

    await act(async () => {
      const success = await result.current.delete(1)
      expect(success).toBe(false)
    })

    expect(result.current.error).toBe('Delete failed')
    expect(result.current.items).toEqual(mockItems) // Items should remain unchanged
  })

  it('should call success callback on successful operations', async () => {
    const mockCreate = vi.fn().mockResolvedValue(mockItem)
    const mockOnSuccess = vi.fn()
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ 
        onCreate: mockCreate,
        onSuccess: mockOnSuccess 
      })
    )

    await act(async () => {
      await result.current.create({ name: 'New Item', value: 200 })
    })

    expect(mockOnSuccess).toHaveBeenCalledWith('create', mockItem)
  })

  it('should call error callback on failed operations', async () => {
    const mockCreate = vi.fn().mockRejectedValue(new Error('Create failed'))
    const mockOnError = vi.fn()
    const { result } = renderHook(() => 
      useCrudOperations<TestItem>({ 
        onCreate: mockCreate,
        onError: mockOnError 
      })
    )

    await act(async () => {
      await result.current.create({ name: 'New Item', value: 200 })
    })

    expect(mockOnError).toHaveBeenCalledWith('create', 'Create failed')
  })
})
