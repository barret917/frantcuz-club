import { useState, useRef, useCallback } from 'react'

interface Use3DTiltOptions {
  maxRotation?: number
  mobileMaxRotation?: number
}

export const use3DTilt = (options: Use3DTiltOptions = {}) => {
  const { maxRotation = 20, mobileMaxRotation = 15 } = options
  
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    const isMobile = window.innerWidth <= 768
    const rotation = isMobile ? mobileMaxRotation : maxRotation
    
    const rotateYValue = (mouseX / (rect.width / 2)) * rotation
    const rotateXValue = -(mouseY / (rect.height / 2)) * rotation
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }, [maxRotation, mobileMaxRotation])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (!containerRef.current || e.touches.length === 0) return

    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const touchX = touch.clientX - centerX
    const touchY = touch.clientY - centerY
    
    const isMobile = window.innerWidth <= 768
    const rotation = isMobile ? mobileMaxRotation : maxRotation
    
    const rotateYValue = (touchX / (rect.width / 2)) * rotation
    const rotateXValue = -(touchY / (rect.height / 2)) * rotation
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }, [maxRotation, mobileMaxRotation])

  const handleMouseLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
  }, [])

  const handleTouchEnd = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
  }, [])

  return {
    rotateX,
    rotateY,
    containerRef,
    handleMouseMove,
    handleTouchMove,
    handleMouseLeave,
    handleTouchEnd
  }
}

