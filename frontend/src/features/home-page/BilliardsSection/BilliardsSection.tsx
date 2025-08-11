import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '../../../shared/ui/Container'

const BilliardsSectionContainer = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const BilliardsContent = styled.div`
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
    text-align: center;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`

const BilliardsImage = styled.img`
  width: 100%;
  max-width: 288px;
  max-height: 556px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 250px;
    max-height: 500px;
  }
  
  @media (max-width: 768px) {
    max-width: 220px;
    max-height: 450px;
  }
`

const TextContent = styled.div`
  color: white;
`

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
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
  return (
    <BilliardsSectionContainer>
      <SectionContainer>
        <BilliardsContent>
          <ImageContainer>
            <BilliardsImage 
              src="/images/мужикБильярд.png" 
              alt="Бильярдный стол с аксессуарами"
            />
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
              <PrimaryButton>Забронировать стол</PrimaryButton>
              <SecondaryButton>Подробнее</SecondaryButton>
            </ButtonGroup>
          </TextContent>
        </BilliardsContent>
      </SectionContainer>
    </BilliardsSectionContainer>
  )
} 