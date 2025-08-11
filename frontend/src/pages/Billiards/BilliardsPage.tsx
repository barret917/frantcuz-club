import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SectionContainer } from '../../shared/ui/Container'
import { getBilliardsServices, BilliardsService } from '../../shared/api/billiards'

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
  background: #222222;
  color: white;
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 1024px) {
    padding: 3rem 0;
    min-height: 70vh;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 0;
    min-height: 60vh;
  }
  
  @media (max-width: 480px) {
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
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  line-height: 0.9;
  margin: 0;
  font-family: 'Arial', sans-serif;
  letter-spacing: -0.02em;
  
  @media (max-width: 1024px) {
    font-size: 4.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: 1;
  }
  
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  color: #f3f4f6;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`

const BookButton = styled.a`
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 1.4rem 3rem;
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  align-self: flex-start;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
    color: white;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding: 1.3rem 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1.2rem 2.5rem;
    align-self: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 1.1rem 2.2rem;
  }
`

const VideoPlaceholder = styled.div`
  background: #1f2937;
  border-radius: 20px;
  height: 600px;
  width: 600px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.2rem;
  border: 2px solid #374151;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 1024px) {
    height: 500px;
    width: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
    width: 400px;
    justify-self: center;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    width: 300px;
  }
`

// Новые стили для секции прайс-листа
const PricingSection = styled.section`
  background: #1A1A1A;
  color: white;
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`

const PricingTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 4rem 0;
  font-family: 'Arial', sans-serif;
  color: #FFFFFF;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
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
`

const PricingCard = styled.div`
  background: #282828;
  border-radius: 15px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`

const CardTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  color: #FFFFFF;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
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
  background: #404040;
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  display: inline-block;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: #505050;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.1rem 1.8rem;
  }
`

const FooterInfo = styled.div`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`

const LoadingMessage = styled.div`
  color: #FFFFFF;
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem 0;
  font-family: 'Arial', sans-serif;
`

const ErrorMessage = styled.div`
  color: #ef4444;
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem 0;
  font-family: 'Arial', sans-serif;
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
              <VIPPriceValue>Понедельник - четверг - {service.weekdayPrice}₽</VIPPriceValue>
              <VIPPriceValue>Пятница, суббота, воскресенье и праздничные дни - {service.weekendPrice}₽</VIPPriceValue>
            </VIPPriceRow>
            <VIPPriceRow>
              <VIPPriceLabel>VIP зал пула:</VIPPriceLabel>
              <VIPPriceValue>Понедельник - четверг - {service.weekdayPrice}₽</VIPPriceValue>
              <VIPPriceValue>Пятница, суббота, воскресенье и праздничные дни - {service.weekendPrice}₽</VIPPriceValue>
            </VIPPriceRow>
          </VIPPricingInfo>
          <CardBookButton href="https://frantsuz-club.ru/booking-new/" target="_self">
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
            <PriceLabel>Понедельник - четверг:</PriceLabel>
            <PriceValue>{service.weekdayPrice}₽</PriceValue>
          </PriceRow>
          <PriceRow>
            <PriceLabel>Пятница, суббота, воскресенье и праздничные дни:</PriceLabel>
            <PriceValue>{service.weekendPrice}₽</PriceValue>
          </PriceRow>
        </PricingInfo>
        <CardBookButton href="https://frantsuz-club.ru/booking-new/" target="_self">
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
                <BookButton href="https://frantsuz-club.ru/booking-new/" target="_self">
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
            <PricingTitle>Цены на бильярд</PricingTitle>
            <PricingCards>
              {services.map(renderPricingCard)}
            </PricingCards>
            
            <FooterInfo>
              <div>Цены указаны за час игры, с поминутной тарификацией!</div>
              <div>Бронирование стола - 100₽.</div>
              <div>Если в течении 20 мин после времени бронирования, заказчик не является, то стол может быть передан другому гостю.</div>
            </FooterInfo>
          </SectionContainer>
        </PricingSection>
      </Main>
    </PageContainer>
  )
} 