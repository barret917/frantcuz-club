import React from 'react'
import { Header } from '@/widgets/Header'
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

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Header />
      
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
                <ServiceItem>Кафе & Бар</ServiceItem>
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
      </Main>
      

    </HomePageContainer>
  )
} 