import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { uploadImage } from '@/shared/config/cloudinary'

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const UploadArea = styled.div<{ $isDragOver: boolean; $hasImage: boolean }>`
  border: 2px dashed ${props => props.$isDragOver ? '#ffd700' : '#333'};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$hasImage ? '#1a1a1a' : 'transparent'};
  
  &:hover {
    border-color: #ffd700;
    background: #1a1a1a;
  }
`

const UploadIcon = styled.div`
  font-size: 3rem;
  color: #666;
  margin-bottom: 1rem;
`

const UploadText = styled.p`
  color: #ccc;
  margin: 0;
  font-size: 1rem;
`

const FileInput = styled.input`
  display: none;
`

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  margin-top: 1rem;
`

const ProgressBar = styled.div<{ $progress: number }>`
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`

const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  background: #ffd700;
  width: ${props => props.$progress}%;
  transition: width 0.3s ease;
`

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

const SuccessMessage = styled.div`
  color: #28a745;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

const RemoveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  
  &:hover {
    background: #c82333;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

interface ImageUploadProps {
  onImageUpload: (url: string) => void
  onImageRemove?: () => void
  currentImageUrl?: string
  disabled?: boolean
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  onImageRemove,
  currentImageUrl,
  disabled = false
}) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Пожалуйста, выберите изображение')
      return
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB
      setError('Размер файла не должен превышать 5MB')
      return
    }

    setError(null)
    setIsUploading(true)
    setProgress(0)

    try {
      // Создаем предварительный просмотр
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Имитируем прогресс загрузки
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 100)

      // Загружаем в Cloudinary
      const imageUrl = await uploadImage(file)
      
      clearInterval(progressInterval)
      setProgress(100)
      
      onImageUpload(imageUrl)
      setSuccess(true)
      
      // Очищаем input после успешной загрузки
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
      
    } catch (err: any) {
      console.error('❌ Ошибка в ImageUpload:', err)
      const errorMessage = err.message || 'Ошибка загрузки изображения'
      setError(errorMessage)
      setPreviewUrl(null)
      
      // Очищаем input при ошибке
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } finally {
      setIsUploading(false)
      setProgress(0)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) {
      setIsDragOver(true)
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    if (disabled) return
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleRemoveImage = () => {
    setPreviewUrl(null)
    setError(null)
    setSuccess(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    if (onImageRemove) {
      onImageRemove()
    }
  }

  return (
    <UploadContainer>
      <UploadArea
        $isDragOver={isDragOver}
        $hasImage={!!previewUrl}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {!previewUrl ? (
          <>
            <UploadIcon>📷</UploadIcon>
            <UploadText>
              {isUploading ? 'Загрузка...' : 'Перетащите изображение сюда или нажмите для выбора'}
            </UploadText>
            <UploadText style={{ fontSize: '0.8rem', color: '#666' }}>
              Поддерживаются: JPG, PNG, GIF (до 5MB)
            </UploadText>
          </>
        ) : (
          <>
            <PreviewImage src={previewUrl} alt="Предварительный просмотр" />
            <UploadText style={{ marginTop: '1rem' }}>
              Нажмите для замены изображения
            </UploadText>
          </>
        )}
      </UploadArea>

      <FileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        disabled={disabled}
      />

      {isUploading && (
        <ProgressBar $progress={progress}>
          <ProgressFill $progress={progress} />
        </ProgressBar>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Изображение успешно загружено!</SuccessMessage>}
      
      {previewUrl && onImageRemove && (
        <RemoveButton 
          type="button" 
          onClick={handleRemoveImage}
          disabled={isUploading}
        >
          Удалить изображение
        </RemoveButton>
      )}
    </UploadContainer>
  )
} 