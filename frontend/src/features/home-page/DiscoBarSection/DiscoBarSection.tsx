import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@/shared/ui/Container'

const DiscoBarSectionContainer = styled.section`
  padding: 4rem 0;
  background: #1a1a1a;
  color: white;
`

const DiscoBarContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ButtonContainer = styled.div`
  margin-top: 1rem;
`

const DetailsButton = styled.button`
  background: #4b5563;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #6b7280;
    transform: translateY(-2px);
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DiscoImage = styled.img`
  width: 100%;
  max-width: 224px;
  max-height: 474px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
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
              <DetailsButton>Подробнее</DetailsButton>
            </ButtonContainer>
          </TextContainer>
          
          <ImageContainer>
            <DiscoImage 
              src="/images/диско.png" 
              alt="Диско бар - уютная атмосфера лаунджа"
            />
          </ImageContainer>
        </DiscoBarContent>
      </SectionContainer>
    </DiscoBarSectionContainer>
  )
} 