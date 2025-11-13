import React from 'react'
import { SectionContainer } from '../../shared/ui/Container'
import { AboutSection, BilliardsSection, KaraokeSection, PlaystationSection, DiscoBarSection, AdditionalServicesSection, OurProjectsSection } from '@/features/home-page'
import styled from 'styled-components'

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  
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
    min-height: 70vh;
    padding: 0;
    padding-bottom: 25px;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://frantsuz-club.ru/wp-content/uploads/2025/05/pereezd.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  
  @media (max-width: 768px) {
    background-position: center center;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`

const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    max-width: 1000px;
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
    margin-top: 60px;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  /* Уменьшаем шрифт для второй строки */
  span:first-of-type {
    font-size: 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    
    span:first-of-type {
      font-size: 2rem;
    }
  }
`

const FoundedDate = styled.div`
  display: block;
  text-align: center;
  font-size: 1.2rem;
  opacity: 0.8;
  margin-top: 0;
  margin-bottom: 2rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Subtitle = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.9;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
  
  @media (max-width: 1200px) {
    gap: 1.8rem;
  }
  
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 0;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 0;
  }
`

const ServiceItem = styled.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 1.5rem 2.5rem;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    background: rgba(34, 34, 34, 0.95);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(102, 126, 234, 0.2);
  }
  
  @media (max-width: 1024px) {
    padding: 1.8rem 2.2rem;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
    font-size: 1rem;
    border-radius: 20px;
  }
`

const MovingCard = styled.div`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(102, 126, 234, 0.15) 100%);
  border: 2px solid rgba(139, 92, 246, 0.4);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.08) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
    max-width: 90%;
  }
`

const MovingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #8b5cf6;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const MovingText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
`

const NewAddress = styled.div`
  background: rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
  border: 1px solid rgba(139, 92, 246, 0.4);
`

const AddressTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #8b5cf6;
`

const AddressText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
`


export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Main>
        <HeroSection>
          <Overlay />
          
          <Content>
            <SectionContainer>
              <MovingCard>
                <MovingTitle>🎉 Мы переезжаем!</MovingTitle>
                <MovingText>
                  Рады сообщить, что мы переезжаем в новое, более просторное помещение для еще лучшего обслуживания наших гостей!
                </MovingText>
                <NewAddress>
                  <AddressTitle>Новый адрес:</AddressTitle>
                  <AddressText>
                    г. Москва,<br/>
                    ул. Салтыковская, 49А,<br/>
                    ТЦ Волна, -1 этаж
                  </AddressText>
                </NewAddress>
              </MovingCard>
              
              <Title>
                Француз<br />
                <span>развлекательный комплекс</span>
              </Title>
              
              <FoundedDate>основан в 2018</FoundedDate>
              
              <ServicesContainer>
                <ServiceItem>Бильярд</ServiceItem>
                <ServiceItem>Караоке</ServiceItem>
                <ServiceItem>Диско-бар</ServiceItem>
                <ServiceItem>Playstation</ServiceItem>
              </ServicesContainer>
            </SectionContainer>
          </Content>
          

        </HeroSection>
        <AboutSection />
        <BilliardsSection />
        <KaraokeSection />
        <DiscoBarSection />
        <PlaystationSection />
        <AdditionalServicesSection />
        <OurProjectsSection />
      </Main>
    </HomePageContainer>
  )
} 