import React from 'react'
import { Container } from '@/shared/ui/Container'
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
  
  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 1rem;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 1024px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 60px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
`

const Subtitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.5;
  
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 1024px) {
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
`

const ServiceItem = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }
`

const GirlImage = styled.div`
  position: absolute;
  right: 10%;
  bottom: 10%;
  z-index: 3;
  
  @media (max-width: 1024px) {
    right: 5%;
    bottom: 5%;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`

const GirlImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  
  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`

const GirlMain = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`

const Flower = styled.img`
  position: absolute;
  top: -20px;
  right: -30px;
  width: 80px;
  height: auto;
  z-index: 3;
  
  @media (max-width: 1024px) {
    width: 60px;
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
  
  @media (max-width: 1024px) {
    width: 50px;
    bottom: 40px;
    left: -30px;
  }
`

const ServicesSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`

const ServiceCard = styled.div`
  background: #222;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 16/9;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    aspect-ratio: 4/3;
  }
  
  @media (max-width: 480px) {
    aspect-ratio: 1/1;
  }
`

const ServiceCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const ServiceCardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem 0.8rem;
  }
`

const ServiceCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffd700;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const ServiceCardDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Main>
        <HeroSection>
          <Overlay />
          
          <Content>
            <Container>
              <Title>
                Развлекательный комплекс<br />
                "Француз"
              </Title>
              
              <Subtitle>
                Уникальное место, идеальное для ярких вечеринок<br />
                и уютных посиделок с друзьями
              </Subtitle>
              
              <ServicesContainer>
                <ServiceItem>Караоке</ServiceItem>
                <ServiceItem>Бильярд</ServiceItem>
                <ServiceItem>Диско Бар</ServiceItem>
              </ServicesContainer>
            </Container>
          </Content>
          
          <GirlImage>
            <GirlImageContainer>
              <GirlMain 
                src="https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2.png" 
                alt="Девушка с коктейлем"
              />
              <Flower 
                src="https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-flower.png" 
                alt="Цветок"
              />
              <Microphone 
                src="https://frantsuz-club.ru/wp-content/uploads/2021/02/girl-headline-2-microphone.png" 
                alt="Микрофон"
              />
            </GirlImageContainer>
          </GirlImage>
        </HeroSection>

        <ServicesSection>
          <Container>
            <ServicesGrid>
              <ServiceCard>
                <ServiceCardImage src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZkNzAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=" alt="Караоке" />
                <ServiceCardOverlay>
                  <ServiceCardTitle>Караоке</ServiceCardTitle>
                  <ServiceCardDescription>Современное оборудование и огромная база песен для незабываемого вечера</ServiceCardDescription>
                </ServiceCardOverlay>
              </ServiceCard>
              <ServiceCard>
                <ServiceCardImage src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZkNzAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=" alt="Бильярд" />
                <ServiceCardOverlay>
                  <ServiceCardTitle>Бильярд</ServiceCardTitle>
                  <ServiceCardDescription>Профессиональные столы для любителей и мастеров игры</ServiceCardDescription>
                </ServiceCardOverlay>
              </ServiceCard>
              <ServiceCard>
                <ServiceCardImage src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZkNzAwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKXjzwvdGV4dD48L3N2Zz4=" alt="Кальян" />
                <ServiceCardOverlay>
                  <ServiceCardTitle>Кальян</ServiceCardTitle>
                  <ServiceCardDescription>Уютная атмосфера и разнообразные вкусы для расслабления</ServiceCardDescription>
                </ServiceCardOverlay>
              </ServiceCard>
            </ServicesGrid>
          </Container>
        </ServicesSection>
      </Main>
      

    </HomePageContainer>
  )
} 