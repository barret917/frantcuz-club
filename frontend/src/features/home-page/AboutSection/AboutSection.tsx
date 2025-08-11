import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@/shared/ui/Container'

const AboutSectionContainer = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`

const TextContent = styled.div`
  color: white;
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
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`

const AboutImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  
  @media (max-width: 1024px) {
    max-width: 250px;
  }
  
  @media (max-width: 768px) {
    max-width: 200px;
  }
  
  @media (max-width: 480px) {
    max-width: 180px;
  }
`

export const AboutSection: React.FC = () => {
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
              Ищете место для ярких вечеринок и атмосферных посиделок в районе Новогиреево, Реутов? 
              Развлекательный комплекс "Француз" - это место, где можно реализовать свои мечты и 
              получить оригинальные и креативные развлечения для создания праздничной атмосферы.
            </Paragraph>
            
            <Paragraph>
              Мы - идеальное решение для компании или романтического вечера вдвоем в Перово, 
              Новогиреево и Реутове. Наш комплекс предлагает уникальные развлечения, включая 
              бильярд и караоке, приглашая вас окунуться в атмосферу незабываемого отдыха и развлечений.
            </Paragraph>
          </TextContent>
          
          <ImageContainer>
            <AboutImage 
              src="/images/девушка с задумчивым взглядом.png" 
              alt="Девушка с задумчивым взглядом"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </ImageContainer>
        </AboutContent>
      </SectionContainer>
    </AboutSectionContainer>
  )
} 