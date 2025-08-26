import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { SectionContainer } from '../../shared/ui/Container'
import { getBilliardsServices, BilliardsService } from '../../shared/api/billiards'

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
  
  @media (max-width: 320px) {
    padding: 2rem 0;
    min-height: 50vh;
  }
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
  
  @media (max-width: 320px) {
    gap: 1.5rem;
  }
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 320px) {
    gap: 1rem;
  }
`

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  line-height: 0.9;
  margin: 0;
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
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 1;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 2.8rem;
  }
`

const Description = styled.div`
  font-size: 1.8rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  font-weight: 400;
  animation: ${fadeInUp} 1.4s ease-out 0.3s both;
  
  @media (max-width: 1024px) {
    font-size: 1.7rem;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`

const BookButton = styled.a`
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

const VideoPlaceholder = styled.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 30px;
  height: 600px;
  width: 600px;
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
    height: 500px;
    width: 500px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 768px) {
    height: 400px;
    width: 400px;
    justify-self: center;
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    width: 300px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 320px) {
    height: 250px;
    width: 250px;
    font-size: 1.1rem;
  }
`

// Новые стили для секции прайс-листа
const PricingSection = styled.section`
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
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
  
  @media (max-width: 480px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 320px) {
    padding: 2rem 0;
  }
`

const PricingTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 4rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 1s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 320px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`

const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
    margin: 0 auto 3rem auto;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 320px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(25px);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 25px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
  
  @media (max-width: 320px) {
    padding: 1.5rem 0.8rem;
  }
`

const AnimatedPricingCard = styled.div<{ delay: number }>`
  animation: ${fadeInUp} 0.8s ease-out ${props => 0.8 + props.delay * 0.2}s both;
`

const CardTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  color: #FFFFFF;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`

const PricingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`

const PriceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const PriceLabel = styled.div`
  font-size: 1.1rem;
  color: #FFFFFF;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const PriceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FFFFFF;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const VIPPricingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  text-align: left;
`

const VIPPriceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const VIPPriceLabel = styled.div`
  font-size: 1.1rem;
  color: #FFFFFF;
  font-weight: 600;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const VIPPriceValue = styled.div`
  font-size: 1.1rem;
  color: #FFFFFF;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CardBookButton = styled.a`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1.3rem 2.5rem;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-decoration: none;
  display: inline-block;
  box-shadow: 
    0 6px 20px rgba(102, 126, 234, 0.3),
    0 0 15px rgba(102, 126, 234, 0.2);
  position: relative;
  overflow: hidden;
  
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
    background: linear-gradient(135deg, #5a67d8 0%, #7c3aed 100%);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 12px 30px rgba(102, 126, 234, 0.4),
      0 0 25px rgba(102, 126, 234, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1.2rem 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 1.1rem 1.8rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
`

const FooterInfo = styled.div`
  color: #FFFFFF;
  font-size: 1.1rem;
  font-weight: 400;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  animation: ${fadeInUp} 1.2s ease-out 1s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 1.2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`

const LoadingMessage = styled.div`
  color: #FFFFFF;
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 2rem 0;
  }
  
  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 1.5rem 0;
  }
`

const ErrorMessage = styled.div`
  color: #ef4444;
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 2rem 0;
  }
  
  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 1.5rem 0;
  }
`

export const BilliardsPage: React.FC = () => {
  const [services, setServices] = useState<BilliardsService[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadBilliardsServices()
  }, [])

  const loadBilliardsServices = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getBilliardsServices()
      setServices(data)
    } catch (err) {
      setError('Ошибка при загрузке данных о бильярде')
      console.error('Ошибка загрузки:', err)
    } finally {
      setLoading(false)
    }
  }

  const renderPricingCard = (service: BilliardsService) => {
    if (service.type === 'vip') {
      return (
        <PricingCard key={service.id}>
          <CardTitle>{service.name}</CardTitle>
          <VIPPricingInfo>
            <VIPPriceRow>
              <VIPPriceLabel>VIP зал русского бильярда:</VIPPriceLabel>
              <VIPPriceValue>{service.price}₽</VIPPriceValue>
            </VIPPriceRow>
            <VIPPriceRow>
              <VIPPriceLabel>VIP зал пула:</VIPPriceLabel>
              <VIPPriceValue>{service.price}₽</VIPPriceValue>
            </VIPPriceRow>
          </VIPPricingInfo>
          <CardBookButton href="/booking" target="_self">
            Забронировать стол
          </CardBookButton>
        </PricingCard>
      )
    }

    return (
      <PricingCard key={service.id}>
        <CardTitle>{service.name}</CardTitle>
        <PricingInfo>
          <PriceRow>
            <PriceLabel>Цена за час:</PriceLabel>
            <PriceValue>{service.price}₽</PriceValue>
          </PriceRow>
        </PricingInfo>
        <CardBookButton href="/booking" target="_self">
          Забронировать стол
        </CardBookButton>
      </PricingCard>
    )
  }

  if (loading) {
    return (
      <PageContainer>
        <Main>
          <PricingSection>
            <SectionContainer>
              <LoadingMessage>Загрузка данных о бильярде...</LoadingMessage>
            </SectionContainer>
          </PricingSection>
        </Main>
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <Main>
          <PricingSection>
            <SectionContainer>
              <ErrorMessage>{error}</ErrorMessage>
            </SectionContainer>
          </PricingSection>
        </Main>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Main>
        <HeroSection>
          <SectionContainer>
            <HeroContent>
              <LeftContent>
                <Title>
                  Бильярдный клуб Француз
                </Title>
                <Description>
                  Проведите приятное время в компании друзей, наслаждаясь игрой в бильярд
                </Description>
                <BookButton href="/booking" target="_self">
                  Забронировать стол
                </BookButton>
              </LeftContent>
              <VideoPlaceholder>
                Видео
              </VideoPlaceholder>
            </HeroContent>
          </SectionContainer>
        </HeroSection>
        
        <PricingSection>
          <SectionContainer>
            <PricingTitle>цены на бильярд</PricingTitle>
            <PricingCards>
              {services.map((service, index) => (
                <AnimatedPricingCard key={service.id} delay={index}>
                  {renderPricingCard(service)}
                </AnimatedPricingCard>
              ))}
            </PricingCards>
            
            <FooterInfo>
              <div>Цены указаны за час игры, с поминутной тарификацией!</div>
              <div>Бронирование стола - 200₽</div>
              <div>Стол может быть передан другому гостю, если клиент не появится в течение 20 минут после указанного времени</div>
            </FooterInfo>
          </SectionContainer>
        </PricingSection>
      </Main>
    </PageContainer>
  )
} 