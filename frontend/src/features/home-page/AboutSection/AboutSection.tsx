import React from 'react'
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
  width: 300px;
  height: 400px;
  z-index: 2;
  
  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
    margin: 0 auto;
  }
`

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
  filter: brightness(1.1) contrast(1.05);
  transition: all 0.3s ease;
`

const Flower = styled.img`
  position: absolute;
  top: -25px;
  right: -35px;
  width: 100px;
  height: auto;
  z-index: 3;
  filter: brightness(1.1) contrast(1.05);
  transition: all 0.3s ease;
  animation: ${rotate} 8s linear infinite;
  
  @media (max-width: 1024px) {
    width: 80px;
    top: -20px;
    right: -30px;
  }
  
  @media (max-width: 768px) {
    width: 70px;
    top: -15px;
    right: -25px;
  }
`

const Microphone = styled.img`
  position: absolute;
  bottom: 50px;
  left: -40px;
  width: 60px;
  height: auto;
  z-index: 1;
  filter: brightness(1.1) contrast(1.05);
  transition: all 0.3s ease;
  animation: ${rotate} 15s linear infinite;
  
  @media (max-width: 1024px) {
    width: 50px;
    bottom: 40px;
    left: -30px;
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
          </ImageContainer>
        </AboutContent>
      </SectionContainer>
    </AboutSectionContainer>
  )
} 