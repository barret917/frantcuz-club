import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useForm } from '../useForm'

interface TestFormData {
  name: string
  email: string
  age: number
}

describe('useForm', () => {
  const initialValues: TestFormData = {
    name: '',
    email: '',
    age: 0
  }

  it('should initialize with provided values', () => {
    const { result } = renderHook(() => useForm({ initialValues }))

    expect(result.current.values).toEqual(initialValues)
    expect(result.current.errors).toEqual({})
    expect(result.current.touched).toEqual({})
    expect(result.current.isValid).toBe(true)
    expect(result.current.isSubmitting).toBe(false)
  })

  it('should update field value', () => {
    const { result } = renderHook(() => useForm({ initialValues }))

    act(() => {
      result.current.actions.setValue('name', 'John Doe')
    })

    expect(result.current.values.name).toBe('John Doe')
    expect(result.current.touched.name).toBeUndefined()
  })

  it('should update field value and mark as touched', () => {
    const { result } = renderHook(() => useForm({ initialValues }))

    act(() => {
      result.current.actions.setFieldValue('name', 'John Doe')
    })

    expect(result.current.values.name).toBe('John Doe')
    expect(result.current.touched.name).toBe(true)
  })

  it('should set field error', () => {
    const { result } = renderHook(() => useForm({ initialValues }))

    act(() => {
      result.current.actions.setError('name', 'Name is required')
    })

    expect(result.current.errors.name).toBe('Name is required')
    expect(result.current.isValid).toBe(false)
  })

  it('should validate field', () => {
    const validate = (values: TestFormData) => {
      const errors: Partial<Record<keyof TestFormData, string>> = {}
      if (!values.name) errors.name = 'Name is required'
      if (!values.email) errors.email = 'Email is required'
      return errors
    }

    const { result } = renderHook(() => 
      useForm({ initialValues, validate })
    )

    act(() => {
      result.current.actions.validateField('name')
    })

    expect(result.current.errors.name).toBe('Name is required')
    expect(result.current.isValid).toBe(false)
  })

  it('should validate entire form', () => {
    const validate = (values: TestFormData) => {
      const errors: Partial<Record<keyof TestFormData, string>> = {}
      if (!values.name) errors.name = 'Name is required'
      if (!values.email) errors.email = 'Email is required'
      return errors
    }

    const { result } = renderHook(() => 
      useForm({ initialValues, validate })
    )

    act(() => {
      result.current.actions.validate()
    })

    expect(result.current.errors.name).toBe('Name is required')
    expect(result.current.errors.email).toBe('Email is required')
    expect(result.current.isValid).toBe(false)
  })

  it('should reset form to initial values', () => {
    const { result } = renderHook(() => useForm({ initialValues }))

    act(() => {
      result.current.actions.setFieldValue('name', 'John Doe')
      result.current.actions.setError('name', 'Some error')
    })

    expect(result.current.values.name).toBe('John Doe')
    expect(result.current.errors.name).toBe('Some error')

    act(() => {
      result.current.actions.reset()
    })

    expect(result.current.values).toEqual(initialValues)
    expect(result.current.errors).toEqual({})
    expect(result.current.touched).toEqual({})
  })

  it('should submit form successfully', async () => {
    const mockOnSubmit = vi.fn().mockResolvedValue(undefined)
    const { result } = renderHook(() => 
      useForm({ initialValues, onSubmit: mockOnSubmit })
    )

    await act(async () => {
      await result.current.actions.submit()
    })

    expect(mockOnSubmit).toHaveBeenCalledWith(initialValues)
  })

  it('should not submit form if validation fails', async () => {
    const validate = (values: TestFormData) => {
      const errors: Partial<Record<keyof TestFormData, string>> = {}
      if (!values.name) errors.name = 'Name is required'
      return errors
    }

    const mockOnSubmit = vi.fn()
    const { result } = renderHook(() => 
      useForm({ initialValues, validate, onSubmit: mockOnSubmit })
    )

    await act(async () => {
      await result.current.actions.submit()
    })

    expect(mockOnSubmit).not.toHaveBeenCalled()
    expect(result.current.errors.name).toBe('Name is required')
  })

  it('should handle submit error', async () => {
    const mockOnSubmit = vi.fn().mockRejectedValue(new Error('Submit failed'))
    const { result } = renderHook(() => 
      useForm({ initialValues, onSubmit: mockOnSubmit })
    )

    await act(async () => {
      await result.current.actions.submit()
    })

    expect(mockOnSubmit).toHaveBeenCalledWith(initialValues)
    // Error should be handled gracefully
  })

  it('should clear error when field value changes', () => {
    const { result } = renderHook(() => useForm({ initialValues }))

    act(() => {
      result.current.actions.setError('name', 'Name is required')
    })

    expect(result.current.errors.name).toBe('Name is required')

    act(() => {
      result.current.actions.setValue('name', 'John Doe')
    })

    expect(result.current.errors.name).toBeUndefined()
  })
})
