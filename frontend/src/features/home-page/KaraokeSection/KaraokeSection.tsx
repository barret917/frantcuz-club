import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { SectionContainer } from '@/shared/ui/Container'

// Анимация для баров эквалайзера
const barAnimation = keyframes`
  0%, 100% {
    transform: scaleY(0.1);
  }
  50% {
    transform: scaleY(1);
  }
`

const KaraokeSectionContainer = styled.section`
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

const KaraokeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    text-align: center;
    max-width: 90%;
  }
`

const TextContent = styled.div`
  color: white;
  position: relative;
  z-index: 2;
`

const Title = styled.h2`
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

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid #4b5563;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #6b7280;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  height: 693px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
    order: -1;
  }
`

const BackgroundContainer = styled.div`
  background-image: url('/images/karaoke-main-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
  transform: perspective(1000px);
  max-width: 400px;
  height: 600px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: perspective(1000px) rotateX(8deg) rotateY(8deg) scale3d(1.08, 1.08, 1.08);
  }
  
  @media (max-width: 1024px) {
    max-width: 350px;
    height: 550px;
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
    height: 500px;
  }
`

const EqualizerBars = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  height: 14px;
  width: 180px;
  margin: -7px 0 0 -90px;
  transform: scale(2) translateY(-50%);
  opacity: 1;
  transition: 0.2s ease-in-out;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
`

const Bar = styled.div<{ left: number; duration: number; height: number }>`
  position: absolute;
  left: ${props => props.left}px;
  width: 2px;
  height: ${props => props.height}px;
  background: #ff6b6b;
  animation: ${barAnimation} ${props => props.duration}ms infinite ease-in-out;
  transform-origin: bottom;
`

const KaraokeImage = styled.img`
  position: absolute;
  bottom: 0px;
  left: 35%;
  transform: translateZ(50px);
  max-width: 100%;
  max-height: 100%;
  z-index: 2;
  transition: all 0.3s ease;
  
  ${BackgroundContainer}:hover & {
    transform: translateZ(80px) scale(1.08);
  }
  
  @media (max-width: 1024px) {
    left: 30%;
    max-width: 90%;
    max-height: 90%;
  }
  
  @media (max-width: 768px) {
    left: 25%;
    max-width: 80%;
    max-height: 80%;
  }
  
  @media (max-width: 480px) {
    left: 20%;
    max-width: 70%;
    max-height: 70%;
  }
`

export const KaraokeSection: React.FC = () => {
  // Генерируем бары эквалайзера
  const generateBars = () => {
    const bars = []
    for (let i = 0; i < 90; i++) {
      const left = i * 2 + 1
      const duration = 400 + Math.random() * 80 // 400-480ms
      const height = Math.random() * 24 + 3 // 3-27px
      bars.push(
        <Bar
          key={i}
          left={left}
          duration={duration}
          height={height}
        />
      )
    }
    return bars
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Вычисляем расстояние от центра
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Вычисляем угол наклона (максимум 15 градусов)
    const maxTilt = 15;
    const tiltX = (deltaY / (rect.height / 2)) * maxTilt;
    const tiltY = (deltaX / (rect.width / 2)) * maxTilt;
    
    // Применяем наклон к самому контейнеру (фон + девушка вместе)
    container.style.transform = `perspective(1000px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Возвращаем в исходное положение
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <KaraokeSectionContainer>
      <SectionContainer>
        <KaraokeContent>
          <TextContent>
            <Title>Караоке</Title>
            
            <Description>
              В нашем развлекательном комплексе есть двухуровневый караоке клуб, 
              который привлечет меломанов. Наши залы оборудованы сценами и прожекторами 
              направленного света, чтобы вы могли почувствовать себя настоящей звездой, 
              создать камерную атмосферу и запечатлеть уникальные моменты на фотографиях.
            </Description>
            
            <Description>
              Если вам хочется раскрыть себя как певец или певица, у нас функционирует 
              Школа вокала для всех желающих.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton as={Link} to="/booking">Забронировать</PrimaryButton>
              <SecondaryButton as={Link} to="/karaoke">Подробнее</SecondaryButton>
            </ButtonGroup>
          </TextContent>
          
          <ImageContainer>
            <BackgroundContainer 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <EqualizerBars>
                {generateBars()}
              </EqualizerBars>
              <KaraokeImage 
                src="/images/караокеЖенщина.png" 
                alt="Поющая девушка"
              />
            </BackgroundContainer>
          </ImageContainer>
        </KaraokeContent>
      </SectionContainer>
    </KaraokeSectionContainer>
  )
} 