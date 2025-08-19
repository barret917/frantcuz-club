import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SectionContainer } from '@/shared/ui/Container'

const DiscoBarSectionContainer = styled.section`
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

const DiscoBarContent = styled.div`
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
    max-width: 90%;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const DetailsButton = styled.button`
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
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`

const DiscoImage = styled.img`
  width: 100%;
  max-width: 224px;
  max-height: 474px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  filter: brightness(1.05) contrast(1.05);
  transition: all 0.3s ease;
  
  @media (max-width: 1024px) {
    max-width: 200px;
    max-height: 430px;
  }
  
  @media (max-width: 768px) {
    max-width: 180px;
    max-height: 380px;
  }
`

export const DiscoBarSection: React.FC = () => {
  return (
    <DiscoBarSectionContainer>
      <SectionContainer>
        <DiscoBarContent>
          <ImageContainer>
            <DiscoImage 
              src="/images/диско.png" 
              alt="Диско бар - уютная атмосфера лаунджа"
            />
          </ImageContainer>
          
          <TextContainer>
            <Title>Диско Бар</Title>
            
            <Description>
              В нашем развлекательном комплексе вы сможете насладиться уютной аурой лаунджа, идеальной для приятного 
              времяпровождения в компании или вдвоем. Здесь вы сможете расслабиться, устроившись на роскошных бархатных 
              и шелковых подушках и комфортабельных мягких диванах. Мы предлагаем вам попробовать необычные паровые 
              коктейли, приготовленные по особым рецептам.
            </Description>
            
            <Description>
              В нашем VIP-зале вы найдете уютное местечко и сможете оценить богатый выбор благородных вин, как истинный 
              сомелье. Фирменные блюда и десерты от наших шеф-поваров, а также элитный алкоголь из нашего бара порадуют 
              гурманов. Мы постараемся обслужить вас деликатно и ненавязчиво, чтобы вы могли насладиться своим свободным 
              временем весело и приятно.
            </Description>
            
            <ButtonContainer>
              <DetailsButton as={Link} to="/booking">Забронировать</DetailsButton>
              <SecondaryButton as={Link} to="/disco">Подробнее</SecondaryButton>
            </ButtonContainer>
          </TextContainer>
        </DiscoBarContent>
      </SectionContainer>
    </DiscoBarSectionContainer>
  )
} 