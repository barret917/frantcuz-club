import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { hookahApi, Hookah } from '@/shared/api/hookah'

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

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
`

const Main = styled.main`
  padding-top: 0;
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

const HookahSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const HookahContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.8rem;
    margin: 2.5rem 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${css`${fadeInUp} 0.8s ease-out`};
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
  
  @media (max-width: 1024px) {
    padding: 1.8rem;
    border-radius: 18px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 14px;
  }
`

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
`

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`

const FlavorsSection = styled.div`
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`

const FlavorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.3rem;
    margin: 1.8rem 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin: 1.2rem 0;
  }
`

const FlavorCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`

const FlavorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`

const FlavorDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`

const PricingSection = styled.div`
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.8rem;
    margin: 1.8rem 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    margin: 1.2rem 0;
  }
`

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 14px;
  }
`

const PricingTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`

const PricingPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }
`

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`

const PricingFeature = styled.li`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: bold;
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    margin-top: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    margin-top: 0.7rem;
  }
`

export const HookahPage: React.FC = () => {
  const [prices, setPrices] = useState<Hookah[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true)
        const response = await hookahApi.getHookahs()
        if (response.success) {
          setPrices(response.data)
        } else {
          setError(response.error || 'Ошибка загрузки тарифов')
        }
      } catch (err) {
        setError('Ошибка при загрузке тарифов кальяна')
        console.error('Ошибка API кальяна:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  // Статические карточки как fallback
  const staticPrices = [
    {
      id: 1,
      name: 'Классический',
      description: 'Базовый тариф с качественным табаком и всеми необходимыми аксессуарами',
      price: 800,
      features: ['Качественный табак', 'Угли и аксессуары', 'Смена мундштука', 'Время курения 1-1.5 часа']
    },
    {
      id: 2,
      name: 'Премиум',
      description: 'Расширенный тариф с дополнительными услугами и фруктовыми добавками',
      price: 1200,
      features: ['Премиум табак', 'Фруктовые добавки', 'Лед в колбе', 'Время курения 1.5-2 часа', 'Дополнительные вкусы']
    },
    {
      id: 3,
      name: 'VIP',
      description: 'Элитный тариф с персональным мастером и эксклюзивными смесями',
      price: 1800,
      features: ['Элитный табак', 'Эксклюзивные смеси', 'Персональный мастер', 'Время курения 2-3 часа', 'Дополнительные услуги']
    }
  ]

  // Используем API данные или fallback
  const displayPrices = prices.length > 0 ? prices : staticPrices

  return (
    <PageContainer>
      <Main>
        <HeroSection>
          <HeroContent>
            <Title>Кальян</Title>
            <Subtitle>
              Погрузитесь в мир ароматного дыма и незабываемых вкусов
            </Subtitle>
          </HeroContent>
        </HeroSection>

        <HookahSection>
          <HookahContainer>
            <Title>Почему выбирают нас</Title>
            <Subtitle>
              Профессиональный подход к каждому кальяну
            </Subtitle>
            
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>🌿</FeatureIcon>
                <FeatureTitle>Качественные табаки</FeatureTitle>
                <FeatureDescription>
                  Используем только премиальные сорта табака от проверенных производителей
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>👨‍🍳</FeatureIcon>
                <FeatureTitle>Опытные мастера</FeatureTitle>
                <FeatureDescription>
                  Наши кальянщики знают все секреты приготовления идеального кальяна
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>✨</FeatureIcon>
                <FeatureTitle>Уютная атмосфера</FeatureTitle>
                <FeatureDescription>
                  Комфортные места для отдыха с друзьями и приятной музыкой
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </HookahContainer>
        </HookahSection>

        <HookahSection>
          <HookahContainer>
            <Title>Популярные вкусы</Title>
            <Subtitle>
              Широкий выбор ароматных смесей для любого настроения
            </Subtitle>
            
            <FlavorsGrid>
              <FlavorCard>
                <FlavorName>Двойное яблоко</FlavorName>
                <FlavorDescription>Классический вкус с освежающими нотками</FlavorDescription>
              </FlavorCard>
              
              <FlavorCard>
                <FlavorName>Мята + Ментол</FlavorName>
                <FlavorDescription>Освежающий и бодрящий вкус</FlavorDescription>
              </FlavorCard>
              
              <FlavorCard>
                <FlavorName>Клубника + Сливки</FlavorName>
                <FlavorDescription>Сладкий и нежный десертный вкус</FlavorDescription>
              </FlavorCard>
              
              <FlavorCard>
                <FlavorName>Грейпфрут + Лимон</FlavorName>
                <FlavorDescription>Цитрусовый микс с кислинкой</FlavorDescription>
              </FlavorCard>
              
              <FlavorCard>
                <FlavorName>Кокос + Ананас</FlavorName>
                <FlavorDescription>Тропический вкус лета</FlavorDescription>
              </FlavorCard>
              
              <FlavorCard>
                <FlavorName>Шоколад + Вишня</FlavorName>
                <FlavorDescription>Богатый и насыщенный вкус</FlavorDescription>
              </FlavorCard>
            </FlavorsGrid>
          </HookahContainer>
        </HookahSection>

        <HookahSection>
          <HookahContainer>
            <Title>Тарифы</Title>
            <Subtitle>
              Доступные цены для незабываемого отдыха
            </Subtitle>
            
            {/* Показываем сообщение об ошибке, если есть */}
            {error && (
              <div style={{ 
                textAlign: 'center', 
                padding: '1rem',
                margin: '1rem 0',
                color: '#fbbf24',
                fontSize: '0.9rem',
                background: 'rgba(251, 191, 36, 0.1)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                borderRadius: '8px'
              }}>
                ⚠️ {error} (показаны базовые тарифы)
              </div>
            )}
            
            <PricingGrid>
              {displayPrices.map((price) => (
                <PricingCard key={price.id}>
                  <PricingTitle>{price.name}</PricingTitle>
                  <PricingPrice>{price.price}₽</PricingPrice>
                  {price.description && (
                    <div style={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      fontSize: '0.9rem', 
                      marginBottom: '1rem',
                      lineHeight: '1.5'
                    }}>
                      {price.description}
                    </div>
                  )}
                  <PricingFeatures>
                    {price.features.map((feature, index) => (
                      <PricingFeature key={index}>{feature}</PricingFeature>
                    ))}
                  </PricingFeatures>
                </PricingCard>
              ))}
            </PricingGrid>
          </HookahContainer>
        </HookahSection>
      </Main>
    </PageContainer>
  )
} 