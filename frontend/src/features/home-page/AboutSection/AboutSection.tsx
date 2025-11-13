import React, { useState, useRef, useCallback, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { SectionContainer } from '@/shared/ui/Container'

// Анимация вращения цветка
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AboutSectionContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    gap: 3rem;
    max-width: 1000px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 90%;
  }
`

const TextContent = styled.div`
  color: white;
  position: relative;
  z-index: 2;
`

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

const BackgroundContainer = styled.div<{ rotateX: number; rotateY: number }>`
  position: relative;
  width: min(100%, 420px);
  aspect-ratio: 2 / 3;
  background-image: url('/images/фон для девушки с койктелем.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2.5rem;
  transform-style: preserve-3d;
  transform: perspective(1000px) translateZ(0) rotateX(${props => props.rotateX}deg) rotateY(${props => props.rotateY}deg);
  transition: transform 0.05s linear;
  will-change: transform;
  backface-visibility: hidden;
  touch-action: none;
  
  @media (max-width: 1024px) {
    width: min(100%, 360px);
    padding-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    width: min(100%, 300px);
    padding-bottom: 1.5rem;
  }
`

const AboutImage = styled.img`
  width: 70%;
  height: auto;
  position: relative;
  z-index: 3;
  filter: brightness(1.1) contrast(1.05);
  transition: all 0.3s ease;
  
  @media (max-width: 1024px) {
    width: 75%;
  }
  
  @media (max-width: 768px) {
    width: 80%;
  }
`

const Flower = styled.img`
  position: absolute;
  top: -8%;
  right: -8%;
  width: 24%;
  min-width: 60px;
  max-width: 100px;
  height: auto;
  z-index: 4;
  filter: brightness(1.1) contrast(1.05);
  transition: all 0.3s ease;
  animation: ${rotate} 8s linear infinite;
  
  @media (max-width: 1024px) {
    top: -10%;
    right: -6%;
  }
  
  @media (max-width: 768px) {
    top: -12%;
    right: -4%;
  }
`

const Microphone = styled.img`
  position: absolute;
  bottom: 10%;
  left: -10%;
  width: 18%;
  min-width: 45px;
  max-width: 70px;
  height: auto;
  z-index: 4;
  filter: brightness(1.1) contrast(1.05);
  transition: all 0.3s ease;
  animation: ${rotate} 15s linear infinite;
  
  @media (max-width: 1024px) {
    bottom: 12%;
    left: -6%;
  }
  
  @media (max-width: 768px) {
    bottom: 14%;
    left: -4%;
  }
`

export const AboutSection: React.FC = () => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const lastMousePosition = useRef({ x: 0, y: 0 })

  const updateRotation = useCallback(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = lastMousePosition.current.x - centerX
    const mouseY = lastMousePosition.current.y - centerY
    
    // Адаптивный максимальный угол: меньше на мобильных для оптимизации производительности
    const isMobile = window.innerWidth <= 768
    const maxRotation = isMobile ? 15 : 20
    
    const rotateYValue = (mouseX / (rect.width / 2)) * maxRotation
    const rotateXValue = -(mouseY / (rect.height / 2)) * maxRotation
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    
    rafRef.current = null
  }, [])

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    lastMousePosition.current = { x: clientX, y: clientY }
    
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(updateRotation)
    }
  }, [updateRotation])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY)
  }, [updatePosition])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.touches.length > 0) {
      const touch = e.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    }
  }, [updatePosition])

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setRotateX(0)
    setRotateY(0)
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setRotateX(0)
    setRotateY(0)
  }, [])

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <AboutSectionContainer>
      <SectionContainer>
        <AboutContent>
          <TextContent>
            <Title>
              Куда сходить на выходные<br />
              в Москве
            </Title>
            
            <Paragraph>
              Ищете место для ярких вечеринок и атмосферных посиделок в районе Новокосино, Реутов? 
              Развлекательный комплекс "Француз" - это место, где можно реализовать свои мечты и 
              получить оригинальные и креативные развлечения для создания праздничной атмосферы.
            </Paragraph>
            
            <Paragraph>
              Мы - идеальное решение для компании или романтического вечера вдвоем в Перово, 
              Новокосино и Реутове. Наш комплекс предлагает уникальные развлечения, включая 
              бильярд, караоке, диско-бар и многое другое.
            </Paragraph>
          </TextContent>
          
          <ImageContainer>
            <BackgroundContainer
              ref={containerRef}
              rotateX={rotateX}
              rotateY={rotateY}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AboutImage 
                src="/images/девушка с койктелем.png" 
                alt="Девушка с коктейлем"
              />
              <Flower 
                src="/images/цветок.png" 
                alt="Цветок"
              />
              <Microphone 
                src="/images/микрофон.png" 
                alt="Микрофон"
              />
            </BackgroundContainer>
          </ImageContainer>
        </AboutContent>
      </SectionContainer>
    </AboutSectionContainer>
  )
} 