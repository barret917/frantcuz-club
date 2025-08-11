import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@/shared/ui/Container'

const PlaystationSectionContainer = styled.section`
  padding: 4rem 0;
  background: #1a1a1a;
  color: white;
`

const PlaystationContent = styled.div`
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PlaystationImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 350px;
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`

const TextContent = styled.div`
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const PrimaryButton = styled.button`
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
  }
`

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid #4b5563;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6b7280;
    background: rgba(255, 255, 255, 0.1);
  }
`

export const PlaystationSection: React.FC = () => {
  return (
    <PlaystationSectionContainer>
      <SectionContainer>
        <PlaystationContent>
          <ImageContainer>
            <PlaystationImage 
              src="/images/месси.png" 
              alt="Футболист Месси в действии"
            />
          </ImageContainer>
          
          <TextContent>
            <Title>Playstation</Title>
            
            <Description>
              В нашем развлекательном комплексе есть отдельная зона PlayStation и широкий выбор настольных игр, 
              которые обязательно понравятся азартным гостям всех возрастов. Приходите к нам в выходные в большой 
              компании спортивных болельщиков или вдвоем с другом или подругой.
            </Description>
            
            <Description>
              Вы сможете насладиться захватывающими победами ваших любимых команд, следя за прямыми трансляциями 
              матчей на большом экране, сопровождая их холодным пивом и вкусными снеками. А в случае поражения, 
              вы сможете развеять горечь стаканом виски и насладиться вкусным ужином.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton>Забронировать стол</PrimaryButton>
              <SecondaryButton>Подробнее</SecondaryButton>
            </ButtonGroup>
          </TextContent>
        </PlaystationContent>
      </SectionContainer>
    </PlaystationSectionContainer>
  )
} 