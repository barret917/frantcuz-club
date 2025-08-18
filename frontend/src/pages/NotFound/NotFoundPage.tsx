import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Content = styled.div`
  max-width: 600px;
  padding: 2rem;
  text-align: center;
`

const ErrorCode = styled.div`
  font-size: 8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ErrorDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const HomeButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
  margin-bottom: 2rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceLink = styled(Link)`
  display: block;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`

export const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <Content>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Страница не найдена</ErrorTitle>
        <ErrorDescription>
          К сожалению, запрашиваемая страница не существует. 
          Возможно, она была удалена или перемещена.
        </ErrorDescription>
        
        <HomeButton to="/">
          🏠 Вернуться на главную
        </HomeButton>
        
        <div>
          <p style={{ marginBottom: '1rem', opacity: 0.7 }}>
            Популярные разделы:
          </p>
          <ServicesGrid>
            <ServiceLink to="/billiards">🎱 Бильярд</ServiceLink>
            <ServiceLink to="/karaoke">🎤 Караоке</ServiceLink>
            <ServiceLink to="/disco">💃 Диско-бар</ServiceLink>
            <ServiceLink to="/playstation">🎮 Игровая зона</ServiceLink>
            <ServiceLink to="/menu">🍽️ Меню</ServiceLink>
            <ServiceLink to="/booking">📅 Бронирование</ServiceLink>
          </ServicesGrid>
        </div>
      </Content>
    </NotFoundContainer>
  )
} 