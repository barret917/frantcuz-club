import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Link } from 'react-router-dom'
import { SectionContainer } from '../../shared/ui/Container'
import { SwiperCarousel, CarouselSlide } from '@/shared/ui/Carousel'
import { carouselPhotosApi } from '@/shared/api/carousel-photos'

// Анимации
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1A1A1A;
`

const Main = styled.main`
  flex: 1;
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  padding: 6rem 0;
  min-height: 90vh;
  display: flex;
  align-items: center;
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
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 1024px) {
    padding: 4rem 0;
    min-height: 80vh;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
    min-height: 70vh;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 0;
    min-height: 60vh;
  }
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: stretch;
  min-height: 500px;
  
  @media (max-width: 1024px) {
    gap: 3rem;
    min-height: 450px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    min-height: auto;
  }
`

const TextContent = styled.div`
  color: white;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  line-height: 0.9;
  margin: 0 0 3rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  animation: ${fadeInUp} 1.2s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 120px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
    animation: ${slideInLeft} 1.5s ease-out 0.5s both;
  }
  
  @media (max-width: 1024px) {
    font-size: 5rem;
    margin: 0 0 2.5rem 0;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 1;
    margin: 0 0 2rem 0;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 3.2rem;
    margin: 0 0 1.8rem 0;
  }
  
  @media (max-width: 320px) {
    font-size: 2.8rem;
    margin: 0 0 1.5rem 0;
  }
`

const Description = styled.div`
  font-size: 1.4rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  font-weight: 400;
  animation: ${fadeInUp} 1.4s ease-out 0.3s both;
  margin-bottom: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding: 0 0.8rem;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    font-size: 1.2rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0 0.3rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1rem;
    padding: 0 0.2rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
  padding: 0 1rem;
  
  @media (max-width: 1024px) {
    padding: 0 0.8rem;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0 0.3rem;
  }
  
  @media (max-width: 320px) {
    padding: 0 0.2rem;
  }
`

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: white;
  border: none;
  padding: 1.5rem 3.5rem;
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  align-self: flex-start;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-shadow: 
    0 8px 25px rgba(139, 92, 246, 0.4),
    0 0 20px rgba(139, 92, 246, 0.2);
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 1.6s ease-out 0.6s both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
    transform: translateY(-5px) scale(1.02);
    box-shadow: 
      0 15px 35px rgba(139, 92, 246, 0.5),
      0 0 30px rgba(139, 92, 246, 0.3);
    color: white;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.01);
  }
  
  @media (max-width: 1024px) {
    font-size: 1.4rem;
    padding: 1.4rem 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 1.3rem 2.5rem;
    align-self: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 1.2rem 2.2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 1.1rem 2rem;
  }
`



const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  animation: ${css`${slideInLeft} 1s ease-out 0.6s both`};
  
  @media (max-width: 768px) {
    order: -1;
  }
`

const HeroImage = styled.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 30px;
  height: 500px;
  width: 500px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  font-size: 1.5rem;
  font-weight: 600;
  border: 2px solid rgba(102, 126, 234, 0.3);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(102, 126, 234, 0.2);
  animation: ${fadeInUp} 1.8s ease-out 0.8s both;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(102, 126, 234, 0.4);
    border-color: rgba(102, 126, 234, 0.6);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 1024px) {
    height: 450px;
    width: 450px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    width: 350px;
    justify-self: center;
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    height: 280px;
    width: 280px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 320px) {
    height: 220px;
    width: 220px;
    font-size: 1.1rem;
  }
`

const FeaturesSection = styled.section`
  background: linear-gradient(135deg, #222 0%, #2a2a2a 100%);
  color: white;
  padding: 6rem 0;
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
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${css`${fadeInUp} 1s ease-out`};
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const FeatureCard = styled.div`
  background: rgba(34, 34, 34, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
  animation: ${css`${fadeInUp} 1s ease-out`};
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: ${css`${float} 3s ease-in-out infinite`};
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #8b5cf6;
`

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.9);
`

const PricingSection = styled.section`
  background: linear-gradient(135deg, #1a1a1a 0%, #222 100%);
  color: white;
  padding: 6rem 0;
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
      radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const PricingCard = styled.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  border: 2px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${css`${fadeInUp} 1s ease-out`};
  
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3);
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
    border-color: rgba(102, 126, 234, 0.3);
    
    &:hover {
      border-color: rgba(102, 126, 234, 0.6);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    }
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
    border-color: rgba(118, 75, 162, 0.3);
    
    &:hover {
      border-color: rgba(118, 75, 162, 0.6);
      box-shadow: 0 15px 40px rgba(118, 75, 162, 0.3);
    }
  }
`

const PricingTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #8b5cf6;
`

const PricingPeriod = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
`

const PricingPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
`

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`

const PricingFeature = styled.li`
  padding: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #8b5cf6;
    font-weight: bold;
  }
`

const CarouselSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`

const CarouselContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const DiscoPage: React.FC = () => {
  const [carouselSlides, setCarouselSlides] = useState<CarouselSlide[]>([])

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const carouselData = await carouselPhotosApi.getCarouselPhotos('disco')
        
        // Преобразуем данные из API в формат карусели
        const slides = carouselData.data.map(photo => ({
          id: photo.id.toString(),
          imageUrl: photo.imageUrl,
          title: photo.title,
          description: photo.description || ''
        }))
        setCarouselSlides(slides)
      } catch (err) {
        console.error('Ошибка загрузки данных карусели:', err)
      }
    }

    fetchCarouselData()
  }, [])

  return (
    <PageContainer>
      <Main>
        <HeroSection>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <HeroContent>
              <TextContent>
                <Title>Диско-бар</Title>
                
                <Description>
                  Погрузитесь в атмосферу настоящего ночного клуба с лучшей музыкой, 
                  стильным интерьером и премиальными напитками. Наш диско-бар создан 
                  для тех, кто ценит качественный отдых и хочет провести незабываемый вечер.
                </Description>
                
                <ButtonGroup>
                  <PrimaryButton to="/booking">Забронировать</PrimaryButton>
                </ButtonGroup>
              </TextContent>
              
              <ImageContainer>
                <HeroImage>🎧🎵</HeroImage>
              </ImageContainer>
            </HeroContent>
          </div>
        </HeroSection>

        <FeaturesSection>
          <FeaturesContainer>
            <SectionTitle>Особенности диско-бара</SectionTitle>
            
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>🎧</FeatureIcon>
                <FeatureTitle>Профессиональное звуковое оборудование</FeatureTitle>
                <FeatureDescription>
                  Мощные колонки и качественный звук для идеального восприятия музыки
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>💃</FeatureIcon>
                <FeatureTitle>Просторная танцевальная зона</FeatureTitle>
                <FeatureDescription>
                  Удобное пространство для танцев с современным освещением и эффектами
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>🍸</FeatureIcon>
                <FeatureTitle>Премиальная барная карта</FeatureTitle>
                <FeatureDescription>
                  Широкий выбор коктейлей, вина и других напитков от опытных барменов
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </FeaturesContainer>
        </FeaturesSection>

        <PricingSection>
          <PricingContainer>
            <SectionTitle>Тарифы и услуги</SectionTitle>
            
            <PricingGrid>
              <PricingCard>
                <PricingTitle>Вход в диско-бар</PricingTitle>
                <PricingPeriod>Любой день недели</PricingPeriod>
                <PricingPrice>3000₽</PricingPrice>
                <PricingFeatures>
                  <PricingFeature>Вход в диско-бар</PricingFeature>
                  <PricingFeature>Приветственный напиток</PricingFeature>
                  <PricingFeature>Доступ к танцевальной зоне</PricingFeature>
                  <PricingFeature>Современное звуковое оборудование</PricingFeature>
                </PricingFeatures>
              </PricingCard>
            </PricingGrid>
          </PricingContainer>
        </PricingSection>

        {/* Карусель фотографий */}
        <CarouselSection>
          <CarouselContainer>
            <SwiperCarousel
              slides={carouselSlides}
              title="Фотографии диско-бара"
              autoPlay={true}
              autoPlayInterval={3000}
              showNavigation={true}
              showDots={true}
            />
          </CarouselContainer>
        </CarouselSection>
      </Main>
    </PageContainer>
  )
} 