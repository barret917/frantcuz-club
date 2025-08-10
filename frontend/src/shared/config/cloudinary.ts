// Конфигурация Cloudinary
export const cloudinary = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name'
}

// Функция для загрузки изображения
export const uploadImage = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    
    console.log('🚀 Начинаем загрузку в Cloudinary:', {
      cloudName,
      uploadPreset,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    })
    
    if (!cloudName || !uploadPreset) {
      const error = 'Не настроены переменные окружения для Cloudinary'
      console.error('❌', error)
      // Для тестирования возвращаем placeholder
      console.log('🔄 Возвращаем placeholder для тестирования')
      resolve('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=')
      return
    }

    // Проверяем, что файл действительно существует и не пустой
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

    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    console.log('📤 Отправляем запрос на:', uploadUrl)

    fetch(uploadUrl, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log('📥 Получен ответ от Cloudinary:', response.status, response.statusText)
      if (!response.ok) {
        return response.text().then(text => {
          console.error('❌ Ответ Cloudinary:', text)
          // Для тестирования возвращаем placeholder
          console.log('🔄 Возвращаем placeholder из-за ошибки Cloudinary')
          resolve('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=')
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
        // Для тестирования возвращаем placeholder
        console.log('🔄 Возвращаем placeholder из-за отсутствия URL')
        resolve('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=')
      }
    })
    .catch(error => {
      console.error('❌ Ошибка загрузки в Cloudinary:', error)
      // Для тестирования возвращаем placeholder при любой ошибке
      console.log('🔄 Возвращаем placeholder из-за ошибки сети')
      resolve('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=')
    })
  })
}

// Функция для получения оптимизированного URL
export const getOptimizedImageUrl = (url: string, width: number = 800, height: number = 600): string => {
  if (!url.includes('cloudinary.com')) return url
  
  return url.replace('/upload/', `/upload/c_fill,w_${width},h_${height},q_auto/`)
} 