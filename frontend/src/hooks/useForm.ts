import { useState, useCallback, useMemo } from 'react'

export interface FormField {
  value: any
  error?: string
  touched?: boolean
}

export interface FormState {
  [key: string]: FormField
}

export interface FormOptions<T> {
  initialValues: T
  validate?: (values: T) => Partial<Record<keyof T, string>>
  onSubmit?: (values: T) => Promise<void> | void
}

export interface FormActions<T> {
  setValue: (field: keyof T, value: any) => void
  setError: (field: keyof T, error: string) => void
  setTouched: (field: keyof T, touched: boolean) => void
  setFieldValue: (field: keyof T, value: any) => void
  setFieldError: (field: keyof T, error: string) => void
  setFieldTouched: (field: keyof T, touched: boolean) => void
  reset: () => void
  submit: () => Promise<void>
  validate: () => boolean
  validateField: (field: keyof T) => boolean
}

export interface UseFormReturn<T> {
  values: T
  errors: Partial<Record<keyof T, string>>
  touched: Partial<Record<keyof T, boolean>>
  isValid: boolean
  isSubmitting: boolean
  actions: FormActions<T>
}

export function useForm<T extends Record<string, any>>(
  options: FormOptions<T>
): UseFormReturn<T> {
  const { initialValues, validate, onSubmit } = options

  // Создаем начальное состояние формы
  const createInitialState = useCallback(() => {
    const state: FormState = {}
    Object.keys(initialValues).forEach(key => {
      state[key] = {
        value: initialValues[key],
        error: undefined,
        touched: false
      }
    })
    return state
  }, [initialValues])

  const [formState, setFormState] = useState<FormState>(createInitialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Извлекаем значения, ошибки и touched состояния
  const values = useMemo(() => {
    const result = {} as T
    Object.keys(formState).forEach(key => {
      result[key as keyof T] = formState[key].value
    })
    return result
  }, [formState])

  const errors = useMemo(() => {
    const result: Partial<Record<keyof T, string>> = {}
    Object.keys(formState).forEach(key => {
      if (formState[key].error) {
        result[key as keyof T] = formState[key].error
      }
    })
    return result
  }, [formState])

  const touched = useMemo(() => {
    const result: Partial<Record<keyof T, boolean>> = {}
    Object.keys(formState).forEach(key => {
      if (formState[key].touched) {
        result[key as keyof T] = true
      }
    })
    return result
  }, [formState])

  const isValid = useMemo(() => {
    return Object.keys(errors).length === 0
  }, [errors])

  // Действия формы
  const setValue = useCallback((field: keyof T, value: any) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...(prev as any)[field],
        value,
        error: undefined // Очищаем ошибку при изменении значения
      }
    }))
  }, [])

  const setError = useCallback((field: keyof T, error: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...(prev as any)[field],
        error
      }
    }))
  }, [])

  const setTouched = useCallback((field: keyof T, touched: boolean) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...(prev as any)[field],
        touched
      }
    }))
  }, [])

  const setFieldValue = useCallback((field: keyof T, value: any) => {
    setValue(field, value)
    setTouched(field, true)
  }, [setValue, setTouched])

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setError(field, error)
  }, [setError])

  const setFieldTouched = useCallback((field: keyof T, touched: boolean) => {
    setTouched(field, touched)
  }, [setTouched])

  const reset = useCallback(() => {
    setFormState(createInitialState())
  }, [createInitialState])

  const validateField = useCallback((field: keyof T): boolean => {
    if (!validate) return true

    const fieldErrors = validate(values)
    const fieldError = fieldErrors[field]

    if (fieldError) {
      setError(field, fieldError)
      return false
    } else {
      setError(field, undefined as any)
      return true
    }
  }, [validate, values, setError])

  const validateForm = useCallback((): boolean => {
    if (!validate) return true

    const fieldErrors = validate(values)
    let isValid = true

    Object.keys(fieldErrors).forEach(key => {
      const error = fieldErrors[key as keyof T]
      if (error) {
        setError(key as keyof T, error)
        isValid = false
      }
    })

    return isValid
  }, [validate, values, setError])

  const submit = useCallback(async () => {
    if (!onSubmit) return

    // Валидируем форму
    if (!validateForm()) return

    try {
      setIsSubmitting(true)
      await onSubmit(values)
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
    } finally {
      setIsSubmitting(false)
    }
  }, [onSubmit, values, validateForm])

  const actions: FormActions<T> = {
    setValue,
    setError,
    setTouched,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    reset,
    submit,
    validate: validateForm,
    validateField
  }

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    actions
  }
}
