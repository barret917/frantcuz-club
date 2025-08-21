import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { SectionContainer } from '../../../shared/ui/Container'

// Анимации
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.2); }
  50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.4); }
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const AdditionalServicesContainer = styled.section`
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

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`

const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ServiceCard = styled.div<{ $isHovered: boolean }>`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(102, 126, 234, 0.2);
  }
  
  ${props => props.$isHovered && css`
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(102, 126, 234, 0.2);
  `}
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }
`

const ServiceIcon = styled.div<{ $isHovered: boolean }>`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border-radius: 20px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #667eea, #8b5cf6, #a855f7, #667eea);
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  ${props => props.$isHovered && css`
    transform: scale(1.1) rotate(5deg);
    border-color: rgba(102, 126, 234, 0.6);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    
    &::after {
      opacity: 1;
      animation: ${css`rotate`} 1.5s linear infinite;
    }
  `}
  
  svg {
    width: 40px;
    height: 40px;
    fill: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    ${props => props.$isHovered && css`
      transform: scale(1.1);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.7));
    `}
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    
    svg {
      width: 35px;
      height: 35px;
    }
  }
`

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  color: white;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${ServiceCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 1rem 0 0 0;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${ServiceCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`

const FloatingParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`

const Particle = styled.div<{ $delay: number; $duration: number; $size: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  border-radius: 50%;
  animation: ${css`float`} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0.6;
`

const AdditionalServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <AdditionalServicesContainer>
      <FloatingParticles>
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            $delay={Math.random() * 3}
            $duration={1.5 + Math.random() * 2}
            $size={2 + Math.random() * 4}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </FloatingParticles>
      
      <SectionContainer>
        <SectionTitle>✨ А еще у нас Вы можете ✨</SectionTitle>
        <ServicesContent>
          {/* Первые услуги по приоритету */}
          <ServiceCard
            $isHovered={hoveredCard === 0}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 0}>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>🎉 Банкеты</ServiceTitle>
            <ServiceDescription>
              Организация незабываемых банкетов, корпоративов и торжеств
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard
            $isHovered={hoveredCard === 1}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 1}>
              <svg viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>🎭 Посетить концерты</ServiceTitle>
            <ServiceDescription>
              Живые выступления артистов, музыкальные вечера и развлекательные шоу
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard
            $isHovered={hoveredCard === 2}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 2}>
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>💨 Насладиться паровым коктейлем</ServiceTitle>
            <ServiceDescription>
              Эксклюзивные кальянные композиции с премиальными табаками
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard
            $isHovered={hoveredCard === 3}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 3}>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="6" height="6" rx="1" fill="white"/>
                <rect x="15" y="3" width="6" height="6" rx="1" fill="white"/>
                <rect x="9" y="9" width="6" height="6" rx="1" fill="white"/>
                <circle cx="6" cy="6" r="1" fill="#667eea"/>
                <circle cx="18" cy="6" r="1" fill="#8b5cf6"/>
                <circle cx="12" cy="12" r="1" fill="#a855f7"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>🎲 Поиграть в настольные игры</ServiceTitle>
            <ServiceDescription>
              Увлекательные стратегии, логические головоломки и веселые игры для компании
            </ServiceDescription>
          </ServiceCard>
          
          {/* Остальные услуги */}
          <ServiceCard
            $isHovered={hoveredCard === 4}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 4}>
              <svg viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09v6L12 23 1 15v-6l11-6z" fill="white"/>
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="white"/>
                <path d="M12 12l3-1.64L12 9l-3 1.64L12 12z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>🎯 Академия франтцуз</ServiceTitle>
            <ServiceDescription>
              Вы можете пройти образовательные курсы по 12 дисциплинам
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard
            $isHovered={hoveredCard === 5}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 5}>
              <svg viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>🛍️ Магазин Франтцуз</ServiceTitle>
            <ServiceDescription>
              Продажа профессиональных киев для бильярда и аксессуаров высокого качества
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard
            $isHovered={hoveredCard === 6}
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 6}>
              <svg viewBox="0 0 24 24">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>🔧 Ремонтная мастерская киев</ServiceTitle>
            <ServiceDescription>
              Профессиональный ремонт и восстановление киев для бильярда
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard
            $isHovered={hoveredCard === 7}
            onMouseEnter={() => setHoveredCard(7)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 7}>
              <svg viewBox="0 0 24 24">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>🍕 Заказать доставку еды</ServiceTitle>
            <ServiceDescription>
              Быстрая доставка вкусных блюд прямо к вашему столику или на дом
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard
            $isHovered={hoveredCard === 8}
            onMouseEnter={() => setHoveredCard(8)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ServiceIcon $isHovered={hoveredCard === 8}>
              <svg viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.24 3.74c-.31.36-.61.69-.92 1.01.76.28 1.47.64 2.18 1.09.71-.45 1.42-.81 2.18-1.09.31-.32.61-.65.92-1.01L19 12.28V22h1zM12.5 11.5c.72-.41 1.33-.88 1.85-1.35.52.47 1.13.94 1.85 1.35V22h-3.7v-10.5zM5 22v-6H2.5l2.54-7.63A1.5 1.5 0 0 1 6.54 8H7c.8 0 1.54.37 2.01 1l3.24 3.74c.31.36.61.69.92 1.01-.76.28-1.47.64-2.18 1.09-.71-.45-1.42-.81-2.18-1.09-.31-.32-.61-.65-.92-1.01L5 12.28V22H5z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>⭐ Рейтинг. Кадровое агентство</ServiceTitle>
            <ServiceDescription>
              Профессиональный подбор персонала и кадровое консультирование для вашего бизнеса
            </ServiceDescription>
          </ServiceCard>
        </ServicesContent>
      </SectionContainer>
    </AdditionalServicesContainer>
  )
}

export { AdditionalServicesSection } 