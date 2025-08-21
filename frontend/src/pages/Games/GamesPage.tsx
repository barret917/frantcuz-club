import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { boardGamesApi, BoardGame } from '@/shared/api/board-games'

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
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const GamesSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const GamesContainer = styled.div`
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
  animation: ${fadeInUp} 0.8s ease-out;
  
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

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.8rem;
    margin: 2.5rem 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    margin: 1.5rem 0;
  }
`

const GameCard = styled.div`
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

const GameName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`

const GamePrice = styled.div`
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

const GameDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const GameDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`

const DetailIcon = styled.span`
  font-size: 1.2rem;
`

const DetailLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
`

const DetailValue = styled.span`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
`

export const GamesPage: React.FC = () => {
  const [games, setGames] = useState<BoardGame[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Статические игры как fallback
  const staticGames = [
    {
      id: 1,
      name: 'Монополия',
      description: 'Классическая экономическая игра для всей семьи',
      price: 500,
      duration: '2-4 часа',
      players: '2-8 игроков',
      difficulty: 'Средняя',
      category: 'Экономическая'
    },
    {
      id: 2,
      name: 'Шахматы',
      description: 'Интеллектуальная игра для развития логического мышления',
      price: 300,
      duration: '30-120 мин',
      players: '2 игрока',
      difficulty: 'Сложная',
      category: 'Логика'
    },
    {
      id: 3,
      name: 'Uno',
      description: 'Быстрая и веселая карточная игра для всех возрастов',
      price: 200,
      duration: '15-30 мин',
      players: '2-10 игроков',
      difficulty: 'Легкая',
      category: 'Карточная'
    }
  ]

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        const response = await boardGamesApi.getBoardGames()
        if (response.success) {
          setGames(response.data)
        } else {
          setError(response.error || 'Ошибка загрузки игр')
        }
      } catch (err) {
        setError('Ошибка при загрузке настольных игр')
        console.error('Ошибка API настольных игр:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  // Используем API данные или fallback
  const displayGames = games.length > 0 ? games : staticGames

  if (loading && games.length === 0) {
    return (
      <PageContainer>
        <Main>
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem',
            color: '#667eea',
            fontSize: '1.2rem'
          }}>
            Загрузка настольных игр...
          </div>
        </Main>
      </PageContainer>
    )
  }

  if (error) {
    return <PageContainer>{error}</PageContainer>
  }

  if (games.length === 0) {
    return <PageContainer>No board games found.</PageContainer>
  }

  return (
    <PageContainer>
      <Main>
        <HeroSection>
          <HeroContent>
            <Title>Настольные игры</Title>
            <Subtitle>
              Погрузитесь в мир стратегии, логики и веселья с нашими настольными играми
            </Subtitle>
          </HeroContent>
        </HeroSection>

        <GamesSection>
          <GamesContainer>
            <Title>Почему выбирают нас</Title>
            <Subtitle>
              Большой выбор игр для любого возраста и уровня сложности
            </Subtitle>
            
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>🎯</FeatureIcon>
                <FeatureTitle>Разнообразие игр</FeatureTitle>
                <FeatureDescription>
                  От простых семейных игр до сложных стратегий для опытных игроков
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>👥</FeatureIcon>
                <FeatureTitle>Для любой компании</FeatureTitle>
                <FeatureDescription>
                  Игры для двоих, семьи или большой компании друзей
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>🧠</FeatureIcon>
                <FeatureTitle>Развитие навыков</FeatureTitle>
                <FeatureDescription>
                  Улучшайте логику, стратегическое мышление и коммуникацию
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </GamesContainer>
        </GamesSection>

        <GamesSection>
          <GamesContainer>
            <Title>Наши игры</Title>
            <Subtitle>
              Выберите игру по душе и начните увлекательное приключение
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
                ⚠️ {error} (показаны базовые игры)
              </div>
            )}
            
            <GamesGrid>
              {displayGames.map((game) => (
                <GameCard key={game.id}>
                  <GameName>{game.name}</GameName>
                  <GamePrice>{game.price}₽</GamePrice>
                  {game.description && (
                    <GameDescription>{game.description}</GameDescription>
                  )}
                  <GameDetails>
                    {game.duration && (
                      <DetailItem>
                        <DetailIcon>⏱️</DetailIcon>
                        <DetailLabel>Время</DetailLabel>
                        <DetailValue>{game.duration}</DetailValue>
                      </DetailItem>
                    )}
                    {game.players && (
                      <DetailItem>
                        <DetailIcon>👥</DetailIcon>
                        <DetailLabel>Игроки</DetailLabel>
                        <DetailValue>{game.players}</DetailValue>
                      </DetailItem>
                    )}
                    {game.difficulty && (
                      <DetailItem>
                        <DetailIcon>🧠</DetailIcon>
                        <DetailLabel>Сложность</DetailLabel>
                        <DetailValue>{game.difficulty}</DetailValue>
                      </DetailItem>
                    )}
                    {game.category && (
                      <DetailItem>
                        <DetailIcon>🏷️</DetailIcon>
                        <DetailLabel>Категория</DetailLabel>
                        <DetailValue>{game.category}</DetailValue>
                      </DetailItem>
                    )}
                  </GameDetails>
                </GameCard>
              ))}
            </GamesGrid>
          </GamesContainer>
        </GamesSection>
      </Main>
    </PageContainer>
  )
} 