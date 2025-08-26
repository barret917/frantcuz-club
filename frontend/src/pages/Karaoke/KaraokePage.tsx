import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { getKaraokeServices, KaraokeService } from '@/shared/api/karaoke'

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
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroImage = styled.div`
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  border: 2px solid rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(102, 126, 234, 0.2);
  animation: ${fadeInUp} 1.6s ease-out 0.6s both;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(102, 126, 234, 0.4);
    border-color: rgba(102, 126, 234, 0.6);
  }
  
  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
    font-size: 5rem;
  }
  
  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
    font-size: 4.5rem;
  }
  
  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
    font-size: 4rem;
  }
  
  @media (max-width: 320px) {
    width: 250px;
    height: 250px;
    font-size: 3.5rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 1024px) {
    max-width: 1000px;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.8rem;
  }
  
  @media (max-width: 320px) {
    padding: 0 0.5rem;
  }
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
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
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
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 320px) {
    padding: 1.5rem 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
  
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
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto 3rem auto;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 320px) {
    gap: 0.8rem;
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

const CardIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 320px) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
`

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.4rem;
  }
`

const CardDescription = styled.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }
`

const PriceContainer = styled.div`
  margin-bottom: 1rem;
`

const PriceLabel = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffd700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3));
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.8rem;
  }
`















const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #a0a0a0;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 320px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #ff6b6b;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 320px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`

export const KaraokePage: React.FC = () => {
  const [services, setServices] = useState<KaraokeService[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadKaraokeData = async () => {
      try {
        setLoading(true)
        const servicesData = await getKaraokeServices()
        setServices(servicesData)
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
    return '🎤'
  }

  const getTypeTitle = (type: string) => {
    return 'Караоке'
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
                  современное оборудование, огромная база песен и уютный зал для вашего отдыха.
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
            <SectionTitle>Цены на караоке</SectionTitle>
            <PricingGrid>
              {services.slice(0, 1).map((service, index) => (
                <AnimatedPricingCard key={service.id} delay={index}>
                  <PricingCard>
                  <CardIcon>{getTypeIcon(service.type)}</CardIcon>
                  <CardTitle>{getTypeTitle(service.type)}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  
                  <PriceContainer>
                    <PriceLabel>Цена за час</PriceLabel>
                    <Price>{service.price} ₽</Price>
                  </PriceContainer>
                </PricingCard>
                </AnimatedPricingCard>
              ))}
            </PricingGrid>
            
            <div style={{
              textAlign: 'center',
              marginTop: '4rem',
              padding: '3rem',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '25px',
              border: '2px solid rgba(102, 126, 234, 0.3)',
              backdropFilter: 'blur(25px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              '@media (max-width: 768px)': {
                marginTop: '3rem',
                padding: '2rem',
                borderRadius: '20px'
              },
              '@media (max-width: 480px)': {
                marginTop: '2rem',
                padding: '1.5rem',
                borderRadius: '15px'
              }
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                pointerEvents: 'none'
              }} />
              <h3 style={{ 
                color: '#ffd700', 
                fontSize: '2rem', 
                marginBottom: '1.5rem',
                fontWeight: '700',
                position: 'relative',
                zIndex: 2,
                '@media (max-width: 768px)': {
                  fontSize: '1.8rem',
                  marginBottom: '1.2rem'
                },
                '@media (max-width: 480px)': {
                  fontSize: '1.6rem',
                  marginBottom: '1rem'
                }
              }}>
                💰 Информация о депозите
              </h3>
              <p style={{ 
                color: '#ffffff', 
                fontSize: '1.3rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 2,
                '@media (max-width: 768px)': {
                  fontSize: '1.2rem',
                  marginBottom: '1.2rem'
                },
                '@media (max-width: 480px)': {
                  fontSize: '1.1rem',
                  marginBottom: '1rem'
                }
              }}>
                Для бронирования караоке зала требуется внести депозит в размере <strong style={{color: '#ffd700'}}>3000 рублей</strong>.
              </p>
              <p style={{ 
                color: '#cccccc', 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 2,
                '@media (max-width: 768px)': {
                  fontSize: '1rem'
                },
                '@media (max-width: 480px)': {
                  fontSize: '0.95rem'
                }
              }}>
                Депозит возвращается после завершения мероприятия при отсутствии повреждений.
              </p>
            </div>
          </PricingSection>


        </Container>
      </Main>
    </PageContainer>
  )
} 