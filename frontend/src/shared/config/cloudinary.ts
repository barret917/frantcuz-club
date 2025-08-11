// Конфигурация Cloudinary
export const cloudinary = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name'
}

// Function for uploading image with retry logic
export const uploadImage = async (
  file: File, 
  maxRetries: number = 3,
  onAttempt?: (attempt: number) => void
): Promise<string> => {
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    // Notify about current attempt
    if (onAttempt) {
      onAttempt(attempt);
    }
    
    try {
      return await new Promise((resolve, reject) => {
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        
        console.log(`🚀 Попытка ${attempt}/${maxRetries} загрузки в Cloudinary:`, {
          cloudName,
          uploadPreset,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type
        })
        
        if (!cloudName || !uploadPreset) {
          const error = 'Не настроены переменные окружения для Cloudinary'
          console.error('❌', error)
          reject(new Error(error))
          return
        }

        // Check that the file actually exists and is not empty
        if (!file || file.size === 0) {
          const error = 'Файл пустой или поврежден'
          console.error('❌', error)
          reject(new Error(error))
          return
        }

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', uploadPreset)
        formData.append('folder', 'menu-items')
        // Убираем потенциально проблемные параметры
        // formData.append('transformation', 'f_auto,q_auto,fl_progressive')
        // formData.append('format', 'auto')

        const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
        console.log(`📤 Отправляем запрос на:`, uploadUrl)

        // Add timeout to the fetch request
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

        fetch(uploadUrl, {
          method: 'POST',
          body: formData,
          signal: controller.signal
        })
        .then(response => {
          clearTimeout(timeoutId)
          console.log('📥 Получен ответ от Cloudinary:', response.status, response.statusText)
          if (!response.ok) {
            return response.text().then(text => {
              console.error('❌ Ответ Cloudinary:', text)
              reject(new Error(`Ошибка Cloudinary: ${response.status} ${response.statusText}`))
            })
          }
          return response.json()
        })
        .then(data => {
          console.log('✅ Успешная загрузка:', data)
          if (data.secure_url) {
            resolve(data.secure_url)
          } else {
            const error = 'Не получен URL изображения от Cloudinary'
            console.error('❌', error, data)
            reject(new Error(error))
          }
        })
        .catch(error => {
          clearTimeout(timeoutId)
          console.error(`❌ Ошибка загрузки в Cloudinary (попытка ${attempt}):`, error)
          
          // Check if it's a network error that we should retry
          if (error.name === 'AbortError') {
            reject(new Error('Превышено время ожидания загрузки'))
          } else if (error.message && (
            error.message.includes('Failed to fetch') ||
            error.message.includes('ERR_PROXY_CONNECTION_FAILED') ||
            error.message.includes('ERR_NETWORK') ||
            error.message.includes('ERR_INTERNET_DISCONNECTED')
          )) {
            lastError = error
            // Don't reject here, let the retry loop continue
            throw error
          } else {
            reject(error)
          }
        })
      })
    } catch (error) {
      lastError = error as Error
      
      // If this is the last attempt, throw the error
      if (attempt === maxRetries) {
        console.error(`❌ Все ${maxRetries} попытки загрузки не удались. Последняя ошибка:`, error)
        
        // Provide user-friendly error message
        if (error instanceof Error) {
          if (error.message.includes('Failed to fetch') || error.message.includes('ERR_PROXY_CONNECTION_FAILED')) {
            throw new Error('Проблема с сетевым подключением. Проверьте интернет-соединение и попробуйте снова.')
          } else if (error.message.includes('Превышено время ожидания')) {
            throw new Error('Загрузка занимает слишком много времени. Попробуйте еще раз.')
          } else {
            throw error
          }
        } else {
          throw new Error('Неизвестная ошибка при загрузке изображения')
        }
      }
      
      // Wait before retrying (exponential backoff)
      const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000)
      console.log(`⏳ Ожидание ${delay}ms перед повторной попыткой...`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  
  // This should never be reached, but just in case
  throw lastError || new Error('Неизвестная ошибка при загрузке изображения')
}

// Функция для получения оптимизированного URL
export const getOptimizedImageUrl = (url: string, width: number = 800, height: number = 600): string => {
  if (!url.includes('cloudinary.com')) return url
  
  // Упрощенная трансформация без потенциально проблемных параметров
  return url.replace('/upload/', `/upload/c_fill,w_${width},h_${height},q_auto/`)
}

// Функция для получения URL без белых точек
export const getCleanImageUrl = (url: string): string => {
  if (!url.includes('cloudinary.com')) return url
  
  // Упрощенная трансформация
  return url.replace('/upload/', `/upload/q_auto/`)
} 