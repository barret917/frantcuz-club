import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Main = styled.main`
  flex: 1;
  padding: 0;
`

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 80vh;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`

const LeftContent = styled.div`
  flex: 1;
  max-width: 600px;
`

const RightContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const BookButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
`

const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

// Красивые анимации для игр
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

const GameSection = styled.section`
  padding: 6rem 0;
  text-align: center;
  
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
`

const GameTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${slideInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const GameDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 3rem;
  animation: ${slideInUp} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`

const GameFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`

const GameFeature = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${slideInUp} 1s ease-out 0.4s both;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${pulse} 0.6s ease-in-out;
    transform: scale(1.1);
  }
`

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 1rem;
`

const FeatureText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`

const FloatingGameIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`

const FloatingIcon = styled.div`
  position: absolute;
  font-size: 2rem;
  opacity: 0.3;
  animation: ${float} 4s ease-in-out infinite;
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 15%;
    animation-delay: 1s;
  }
  
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
    animation-delay: 2s;
  }
  
  &:nth-child(4) {
    bottom: 20%;
    right: 25%;
    animation-delay: 3s;
  }
`

// Секция с играми
const GamesSection = styled.section`
  padding: 6rem 0;
  text-align: center;
  
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`

const GamesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const GamesGrid = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0;
  padding: 0;
  margin: 0;
  align-items: stretch;
  justify-content: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    min-height: 70vh;
  }
`

const GameItem = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
    flex: 8; /* Растягиваем на всю доступную ширину */
    
    .game-image { transform: scale(1.1); }
    .game-overlay { background: rgba(0, 0, 0, 0.2); }
    .game-title { opacity: 1; transform: translateY(0); }
  }

  /* Сжимаем остальные карточки при наведении на любую */
  ${GamesGrid}:hover &:not(:hover) {
    flex: 0.5; /* Сжимаем остальные */
    opacity: 0.8;
    transform: scale(0.95);
  }

  @media (max-width: 900px) {
    height: 120px; /* Фиксированная высота для мобильных */
    min-height: 120px;
    
    &:hover { 
      height: 200px; /* Расширяем по вертикали */
      min-height: 200px;
    }
    ${GamesGrid}:hover &:not(:hover) { 
      height: 80px; /* Сжимаем по вертикали */
      min-height: 80px;
      opacity: 0.8;
    }
  }
  
  @media (max-width: 600px) {
    height: 100px;
    min-height: 100px;
    
    &:hover { 
      height: 180px;
      min-height: 180px;
    }
    ${GamesGrid}:hover &:not(:hover) { 
      height: 70px;
      min-height: 70px;
    }
  }
  
  @media (max-width: 400px) {
    height: 80px;
    min-height: 80px;
    
    &:hover { 
      height: 150px;
      min-height: 150px;
    }
    ${GamesGrid}:hover &:not(:hover) { 
      height: 60px;
      min-height: 60px;
    }
  }
`

const GameImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s ease;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`

const GameOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
  pointer-events: none;
  z-index: 2;
`

const GameItemTitle = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  opacity: 0.9;
  transform: translateY(10px);
  transition: all 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    bottom: 15px;
    left: 15px;
    right: 15px;
  }
`

const PricingSection = styled.section`
  padding: 6rem 0;
  text-align: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
`

const PricingTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${slideInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${slideInUp} 1s ease-out 0.4s both;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const PricingIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${pulse} 0.6s ease-in-out;
    transform: scale(1.1);
  }
`

const PricingPeriod = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 0.5rem;
`

const PricingDays = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`

const PricingPrice = styled.h4`
  font-size: 2rem;
  font-weight: 800;
  color: #667eea;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const PlaystationPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBooking = () => {
    navigate('/booking')
  }

  return (
    <PageContainer>
      <Main>
        <Container>
          <HeroSection>
            <HeroContent>
              <LeftContent>
                <Title>Компьютерный клуб Француз</Title>
                <Subtitle>Самое комфортное место для игр: приставки PS4 Pro</Subtitle>
                <Description>
                  Мы предлагаем удобное пространство, где вы сможете полностью погрузиться в игровой процесс и насладиться качественной графикой.
                </Description>
                <Description>
                  А чтобы ваши игровые сессии были еще более приятными, мы предлагаем разнообразную еду и напитки по демократичным ценам. Не упустите возможность насладиться игрой на PlayStation в уютной атмосфере нашего заведения.
                </Description>
                <BookButton onClick={handleBooking}>
                  Забронировать
                </BookButton>
              </LeftContent>
              
              <RightContent>
                <HeroImage 
                  src="/Playstation/game-hero-2.png" 
                  alt="PlayStation игровая зона"
                />
              </RightContent>
            </HeroContent>
          </HeroSection>

          <GameSection>
            <Container>
              <GameTitle>Окунитесь в мир удивительных игр с PS4 Pro</GameTitle>
              <GameDescription>
                Наша игровая зона это 2 VIP-комнаты, оборудованные комфортабельной мебелью, игровыми приставками PS4 Pro, и телевизорами 55 дюймов с разрешением 4к.
              </GameDescription>
               
               <GameFeatures>
                 <GameFeature>
                   <FeatureIcon>🎮</FeatureIcon>
                   <FeatureTitle>PS4 Pro</FeatureTitle>
                   <FeatureText>Мощные игровые приставки для максимального качества графики</FeatureText>
                 </GameFeature>
                 
                 <GameFeature>
                   <FeatureIcon>📺</FeatureIcon>
                   <FeatureTitle>4K Телевизоры</FeatureTitle>
                   <FeatureText>55-дюймовые экраны с разрешением 4K для потрясающих визуальных эффектов</FeatureText>
                 </GameFeature>
                 
                 <GameFeature>
                   <FeatureIcon>🪑</FeatureIcon>
                   <FeatureTitle>VIP-Комнаты</FeatureTitle>
                   <FeatureText>2 комфортабельные комнаты с удобной мебелью для полного погружения</FeatureText>
                 </GameFeature>
               </GameFeatures>
               
               <FloatingGameIcons>
                 <FloatingIcon>🎯</FloatingIcon>
                 <FloatingIcon>⚡</FloatingIcon>
                 <FloatingIcon>🏆</FloatingIcon>
                 <FloatingIcon>🚀</FloatingIcon>
               </FloatingGameIcons>
             </Container>
           </GameSection>

          <GamesSection>
            <GamesTitle>Доступные игры</GamesTitle>
            <GamesGrid>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/fifa-20.jpg" alt="FIFA 20" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">FIFA 20</GameItemTitle>
              </GameItem>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/mortal-kombat-11.jpg" alt="Mortal Kombat 11" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">Mortal Kombat 11</GameItemTitle>
              </GameItem>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/ufc-4.jpg" alt="UFC 4" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">UFC 4</GameItemTitle>
              </GameItem>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/diablo-3.jpg" alt="Diablo 3" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">Diablo 3</GameItemTitle>
              </GameItem>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/codbo5.jpg" alt="Call of Duty" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">Call of Duty</GameItemTitle>
              </GameItem>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/grand-turismo-sport.jpg" alt="Gran Turismo" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">Gran Turismo</GameItemTitle>
              </GameItem>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/knack-2.jpg" alt="Knack 2" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">Knack 2</GameItemTitle>
              </GameItem>
              <GameItem>
                <GameImage className="game-image">
                  <img src="/Playstation/star-wars-battlefront-2.jpg" alt="Star Wars Battlefront 2" />
                </GameImage>
                <GameOverlay className="game-overlay" />
                <GameItemTitle className="game-title">Star Wars Battlefront 2</GameItemTitle>
              </GameItem>
            </GamesGrid>
          </GamesSection>

          <PricingSection>
            <Container>
              <PricingTitle>Наши цены</PricingTitle>
              <PricingGrid>
                <PricingCard>
                  <PricingIcon>📅</PricingIcon>
                  <PricingPeriod>Будние дни</PricingPeriod>
                  <PricingDays>С воскресения по четверг</PricingDays>
                  <PricingPrice>540₽/час</PricingPrice>
                </PricingCard>
                
                <PricingCard>
                  <PricingIcon>🎉</PricingIcon>
                  <PricingPeriod>Выходные и праздники</PricingPeriod>
                  <PricingDays>Пятница, суббота и праздничные дни</PricingDays>
                  <PricingPrice>600₽/час</PricingPrice>
                </PricingCard>
                
                <PricingCard>
                  <PricingIcon>👥</PricingIcon>
                  <PricingPeriod>Количество игроков</PricingPeriod>
                  <PricingDays>В стоимость PlayStation зоны включено</PricingDays>
                  <PricingPrice>До 4 человек</PricingPrice>
                </PricingCard>
              </PricingGrid>
            </Container>
          </PricingSection>
        </Container>
      </Main>
    </PageContainer>
  )
}

export default PlaystationPage 