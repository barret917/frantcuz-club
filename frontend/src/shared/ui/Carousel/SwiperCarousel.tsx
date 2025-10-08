import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import styled from 'styled-components'

// Импортируем стили Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Типы
export interface CarouselSlide {
  id: string
  imageUrl: string
  title?: string
  description?: string
}

interface SwiperCarouselProps {
  slides: CarouselSlide[]
  title?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showNavigation?: boolean
  showDots?: boolean
  className?: string
}

// Стили
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
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

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 500px;
  
  @media (max-width: 1200px) {
    height: 450px;
  }
  
  @media (max-width: 1024px) {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 640px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
  
  @media (max-width: 375px) {
    height: 200px;
  }

  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(0, 0, 0, 0.8);
      transform: scale(1.1);
    }
    
    &:active {
      transform: scale(0.95);
    }
    
    @media (max-width: 1024px) {
      width: 44px;
      height: 44px;
    }
    
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
    
    @media (max-width: 640px) {
      width: 36px;
      height: 36px;
    }
    
    @media (max-width: 480px) {
      width: 32px;
      height: 32px;
    }
    
    @media (max-width: 375px) {
      width: 28px;
      height: 28px;
    }
  }

  .swiper-pagination {
    bottom: 1rem;
    
    @media (max-width: 1024px) {
      bottom: 0.875rem;
    }
    
    @media (max-width: 768px) {
      bottom: 0.75rem;
    }
    
    @media (max-width: 640px) {
      bottom: 0.625rem;
    }
    
    @media (max-width: 480px) {
      bottom: 0.5rem;
    }
    
    @media (max-width: 375px) {
      bottom: 0.375rem;
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.7);
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
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
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

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  slides,
  title,
  autoPlay = true,
  autoPlayInterval = 3000,
  showNavigation = true,
  showDots = true,
  className
}) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  // Обработка загрузки изображений
  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set([...prev, imageUrl]))
  }

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className={className}>
      {title && <CarouselTitle>{title}</CarouselTitle>}
      
      <CarouselContainer>
        <StyledSwiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={showNavigation && slides.length > 1}
          pagination={showDots && slides.length > 1 ? { clickable: true } : false}
          autoplay={autoPlay && slides.length > 1 ? {
            delay: autoPlayInterval,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          } : false}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          loop={slides.length > 1}
          speed={500}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {!loadedImages.has(slide.imageUrl) && <LoadingIndicator />}
              <SlideImage 
                src={slide.imageUrl} 
                alt={slide.title || `Slide`}
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
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </CarouselContainer>
    </div>
  )
} 