import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getKaraokeServices, getKaraokeSettings, KaraokeService, KaraokeSettings } from '@/shared/api/karaoke'

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
  line-height: 1.6;
  color: #CCCCCC;
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroImage = styled.div`
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #333333 0%, #555555 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  
  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
    font-size: 2.5rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin: 0;
`

const PricingSection = styled.section`
  margin-bottom: 4rem;
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #ffffff;
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const SettingsSection = styled.section`
  margin-bottom: 4rem;
`

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
`

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
`

const CardDescription = styled.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const PriceContainer = styled.div`
  margin-bottom: 1rem;
`

const PriceLabel = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
`

const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
`

const SettingsContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const SettingsSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-align: center;
`

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`

const SettingItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const SettingLabel = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
`

const SettingValue = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
`

const DepositPolicy = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const PolicyTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;
`

const PolicyText = styled.p`
  color: #a0a0a0;
  text-align: center;
  line-height: 1.6;
  margin: 0;
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #a0a0a0;
  font-size: 1.1rem;
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #ff6b6b;
  font-size: 1.1rem;
`

export const KaraokePage: React.FC = () => {
  const [services, setServices] = useState<KaraokeService[]>([])
  const [settings, setSettings] = useState<KaraokeSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadKaraokeData = async () => {
      try {
        setLoading(true)
        const [servicesData, settingsData] = await Promise.all([
          getKaraokeServices(),
          getKaraokeSettings()
        ])
        setServices(servicesData)
        setSettings(settingsData)
      } catch (err) {
        setError('Ошибка при загрузке данных о караоке')
        console.error('Error loading karaoke data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadKaraokeData()
  }, [])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return '💰'
      case 'vip':
        return '👑'
      default:
        return '🎤'
    }
  }

  const getTypeTitle = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'Депозит'
      case 'vip':
        return 'VIP зал'
      default:
        return 'Караоке'
    }
  }

  if (loading) {
    return (
      <PageContainer>
        <Main>
          <Container>
            <LoadingMessage>Загрузка информации о караоке...</LoadingMessage>
          </Container>
        </Main>
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <Main>
          <Container>
            <ErrorMessage>{error}</ErrorMessage>
          </Container>
        </Main>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Main>
        <HeroSection>
          <Container>
            <HeroContent>
              <LeftContent>
                <Title>Караоке</Title>
                <Description>
                  Спойте свои любимые песни в уютной атмосфере. 
                  У нас есть все необходимое для незабываемого вечера: 
                  современное оборудование, огромная база песен и VIP залы для особых случаев.
                </Description>
              </LeftContent>
              <RightContent>
                <HeroImage>🎤</HeroImage>
              </RightContent>
            </HeroContent>
          </Container>
        </HeroSection>

        <Container>
          <PricingSection>
            <SectionTitle>Цены на услуги</SectionTitle>
            <PricingGrid>
              {services.map((service) => (
                <PricingCard key={service.id}>
                  <CardIcon>{getTypeIcon(service.type)}</CardIcon>
                  <CardTitle>{getTypeTitle(service.type)}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  
                  <PriceContainer>
                    <PriceLabel>Воскресенье - четверг</PriceLabel>
                    <Price>{service.weekdayPrice} ₽</Price>
                  </PriceContainer>
                  
                  <PriceContainer>
                    <PriceLabel>Пятница, суббота, воскресенье и праздничные дни</PriceLabel>
                    <Price>{service.weekendPrice} ₽</Price>
                  </PriceContainer>
                </PricingCard>
              ))}
            </PricingGrid>
          </PricingSection>

          {settings && (
            <SettingsSection>
              <SettingsSubtitle>Настройки VIP зала</SettingsSubtitle>
              <SettingsContent>
                <SettingsGrid>
                  <SettingItem>
                    <SettingLabel>Максимальное количество гостей</SettingLabel>
                    <SettingValue>{settings.maxVipGuests} человек</SettingValue>
                  </SettingItem>
                  <SettingItem>
                    <SettingLabel>Базовая цена VIP зала</SettingLabel>
                    <SettingValue>{settings.baseVipPrice} ₽</SettingValue>
                  </SettingItem>
                  <SettingItem>
                    <SettingLabel>Доплата за гостя</SettingLabel>
                    <SettingValue>{settings.additionalGuestPrice} ₽</SettingValue>
                  </SettingItem>
                </SettingsGrid>

                <DepositPolicy>
                  <PolicyTitle>Политика депозита</PolicyTitle>
                  <PolicyText>{settings.depositPolicy}</PolicyText>
                </DepositPolicy>
              </SettingsContent>
            </SettingsSection>
          )}
        </Container>
      </Main>
    </PageContainer>
  )
} 