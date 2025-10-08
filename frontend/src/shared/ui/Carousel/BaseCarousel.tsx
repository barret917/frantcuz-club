import React, { useState, useEffect, useCallback } from 'react'
import styled, { keyframes, css } from 'styled-components'

// Анимации
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`

// Стили
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 1024px) {
    max-width: 1000px;
    border-radius: 14px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 640px) {
    border-radius: 10px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 375px) {
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }
`

const CarouselTrack = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-${props => props.$currentIndex * 100}%);
  width: ${props => props.children ? `${React.Children.count(props.children) * 100}%` : '100%'};
`

const CarouselSlide = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  flex-shrink: 0;
  
  @media (max-width: 1200px) {
    height: 650px;
  }
  
  @media (max-width: 1024px) {
    height: 600px;
  }
  
  @media (max-width: 768px) {
    height: 550px;
  }
  
  @media (max-width: 640px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 450px;
  }
  
  @media (max-width: 375px) {
    height: 400px;
  }
`

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background: #1a1a1a;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
`

const LoadingIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  
  @media (max-width: 1024px) {
    padding: 1.75rem 1.25rem 1.25rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem 0.75rem;
  }
  
  @media (max-width: 375px) {
    padding: 1rem 0.5rem 0.5rem;
  }
`

const SlideTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
  
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  
  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
`

const SlideDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  
  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`

const NavigationButton = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.2rem;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (max-width: 1024px) {
    width: 44px;
    height: 44px;
    font-size: 1.1rem;
    ${props => props.$direction === 'prev' ? 'left: 0.75rem;' : 'right: 0.75rem;'}
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    ${props => props.$direction === 'prev' ? 'left: 0.5rem;' : 'right: 0.5rem;'}
  }
  
  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
    ${props => props.$direction === 'prev' ? 'left: 0.5rem;' : 'right: 0.5rem;'}
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
    ${props => props.$direction === 'prev' ? 'left: 0.25rem;' : 'right: 0.25rem;'}
  }
  
  @media (max-width: 375px) {
    width: 28px;
    height: 28px;
    font-size: 0.7rem;
    ${props => props.$direction === 'prev' ? 'left: 0.25rem;' : 'right: 0.25rem;'}
  }
`

const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
  
  @media (max-width: 1024px) {
    bottom: 0.875rem;
    gap: 0.4375rem;
  }
  
  @media (max-width: 768px) {
    bottom: 0.75rem;
    gap: 0.375rem;
  }
  
  @media (max-width: 640px) {
    bottom: 0.625rem;
    gap: 0.3125rem;
  }
  
  @media (max-width: 480px) {
    bottom: 0.5rem;
    gap: 0.25rem;
  }
  
  @media (max-width: 375px) {
    bottom: 0.375rem;
    gap: 0.1875rem;
  }
`

const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    transform: scale(1.2);
  }
  
  @media (max-width: 1024px) {
    width: 11px;
    height: 11px;
  }
  
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
  
  @media (max-width: 640px) {
    width: 9px;
    height: 9px;
  }
  
  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
  
  @media (max-width: 375px) {
    width: 7px;
    height: 7px;
  }
`

const CarouselTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.3rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1.1rem;
    margin-bottom: 0.625rem;
  }
`

// Типы
export interface CarouselSlide {
  id: string
  imageUrl: string
  title?: string
  description?: string
}

interface BaseCarouselProps {
  slides: CarouselSlide[]
  title?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showNavigation?: boolean
  showDots?: boolean
  className?: string
}

export const BaseCarousel: React.FC<BaseCarouselProps> = ({
  slides,
  title,
  autoPlay = true,
  autoPlayInterval = 5000,
  showNavigation = true,
  showDots = true,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  // Обработка загрузки изображений
  const handleImageLoad = useCallback((imageUrl: string) => {
    setLoadedImages(prev => new Set([...prev, imageUrl]))
  }, [])

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, autoPlayInterval, slides.length])

  // Пауза при наведении
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(autoPlay)
  }, [autoPlay])

  // Навигация
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  // Клавиатурная навигация
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className={className}>
      {title && <CarouselTitle>{title}</CarouselTitle>}
      
      <CarouselContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselTrack $currentIndex={currentIndex}>
          {slides.map((slide, index) => (
            <CarouselSlide key={slide.id}>
              {!loadedImages.has(slide.imageUrl) && <LoadingIndicator />}
              <SlideImage 
                src={slide.imageUrl} 
                alt={slide.title || `Slide ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/default-food.svg';
                }}
                onLoad={() => handleImageLoad(slide.imageUrl)}
                style={{ opacity: loadedImages.has(slide.imageUrl) ? 1 : 0 }}
              />
              {(slide.title || slide.description) && (
                <SlideOverlay>
                  {slide.title && <SlideTitle>{slide.title}</SlideTitle>}
                  {slide.description && (
                    <SlideDescription>{slide.description}</SlideDescription>
                  )}
                </SlideOverlay>
              )}
            </CarouselSlide>
          ))}
        </CarouselTrack>

        {showNavigation && slides.length > 1 && (
          <>
            <NavigationButton $direction="prev" onClick={goToPrevious}>
              ‹
            </NavigationButton>
            <NavigationButton $direction="next" onClick={goToNext}>
              ›
            </NavigationButton>
          </>
        )}

        {showDots && slides.length > 1 && (
          <DotsContainer>
            {slides.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </DotsContainer>
        )}
      </CarouselContainer>
    </div>
  )
} 