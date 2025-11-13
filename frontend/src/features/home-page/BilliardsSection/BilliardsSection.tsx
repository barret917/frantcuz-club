import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { SectionContainer } from '../../../shared/ui/Container'
import { use3DTilt } from '@/shared/hooks/use3DTilt'

// Анимация для текста
const hueText = keyframes`
  0% {
    -webkit-filter: hue-rotate(0deg);
  }
  100% {
    -webkit-filter: hue-rotate(-360deg);
  }
`

const BilliardsSectionContainer = styled.section`
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

const BilliardsContent = styled.div`
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    order: -1;
  }
`

const BackgroundContainer = styled.div<{ rotateX: number; rotateY: number }>`
  background-image: url('/images/man-billiard-bg-2.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 600px;
  height: 800px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(1000px) translateZ(0) rotateX(${props => props.rotateX}deg) rotateY(${props => props.rotateY}deg);
  transition: transform 0.05s linear;
  will-change: transform;
  backface-visibility: hidden;
  touch-action: none;
  
  @media (max-width: 1024px) {
    max-width: 550px;
    height: 750px;
  }
  
  @media (max-width: 768px) {
    max-width: 500px;
    height: 574px;
  }
`

const BilliardsImage = styled.img`
  position: absolute;
  left: 25%;
  top: 5%;
  max-width: 100%;
  max-height: 100%;
  z-index: 2;
  
  @media (max-width: 1024px) {
    left: 20%;
    top: 3%;
    max-width: 90%;
    max-height: 90%;
  }
  
  @media (max-width: 768px) {
    left: 15%;
    top: 2%;
    max-width: 80%;
    max-height: 80%;
  }
  
  @media (max-width: 480px) {
    left: 10%;
    top: 1%;
    max-width: 70%;
    max-height: 70%;
  }
`

const VerticalText = styled.div`
  color: #ffffff;
  font-size: 3.5vw;
  font-weight: 700;
  line-height: 1;
  position: absolute;
  right: 18%;
  top: 15%;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hueText} 5s infinite linear;
  transform: translateZ(50px);
  z-index: 3;
  
  @media (max-width: 768px) {
    font-size: 6vw;
    right: 11%;
    top: 10%;
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

export const BilliardsSection: React.FC = () => {
  const {
    rotateX,
    rotateY,
    containerRef,
    handleMouseMove,
    handleTouchMove,
    handleMouseLeave,
    handleTouchEnd
  } = use3DTilt()

  return (
    <BilliardsSectionContainer>
      <SectionContainer>
        <BilliardsContent>
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
              <VerticalText>
                Б<br/>И<br/>Л<br/>Ь<br/>Я<br/>Р<br/>Д
              </VerticalText>
              <BilliardsImage 
                src="/images/мужикБильярд.png" 
                alt="Бильярдный стол с аксессуарами"
              />
            </BackgroundContainer>
          </ImageContainer>
          
          <TextContent>
            <Title>Бильярд</Title>
            
            <Description>
              В нашем развлекательном комплексе вы найдете 12 классических бильярдных столов 
              с роскошным зеленым сукном и профессиональными аксессуарами. У нас вы сможете 
              насладиться игрой в различные виды бильярда, включая американский пул, русский 
              бильярд и снукер.
            </Description>
            
            <Description>
              Если вы новичок в этой игре, мы предлагаем вам пройти интересный и информативный 
              курс молодого бойца в нашей школе бильярда.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton as={Link} to="/booking?page=/billiards">Забронировать стол</PrimaryButton>
              <SecondaryButton as={Link} to="/billiards">Подробнее</SecondaryButton>
            </ButtonGroup>
          </TextContent>
        </BilliardsContent>
      </SectionContainer>
    </BilliardsSectionContainer>
  )
} 