import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorContainer = styled.div`
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
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }
`

const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const ContactTitle = styled.h3`
  margin-bottom: 1rem;
  color: #667eea;
`

const ContactText = styled.p`
  margin-bottom: 0.5rem;
  opacity: 0.8;
`

export const ErrorPage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <ErrorContainer>
      <Content>
        <ErrorCode>500</ErrorCode>
        <ErrorTitle>Ошибка сервера</ErrorTitle>
        <ErrorDescription>
          К сожалению, произошла внутренняя ошибка сервера. 
          Наша команда уже работает над её устранением.
        </ErrorDescription>
        
        <ButtonGroup>
          <PrimaryButton onClick={handleRefresh}>
            🔄 Обновить страницу
          </PrimaryButton>
          <SecondaryButton to="/">
            🏠 На главную
          </SecondaryButton>
        </ButtonGroup>
        
        <ContactInfo>
          <ContactTitle>Нужна помощь?</ContactTitle>
          <ContactText>Если проблема повторяется, свяжитесь с нами:</ContactText>
          <ContactText>📞 Телефон: +7-XXX-XXX-XXXX</ContactText>
          <ContactText>📧 Email: info@frantsuz-club.ru</ContactText>
          <ContactText>💬 Telegram: @frantsuz_club</ContactText>
        </ContactInfo>
      </Content>
    </ErrorContainer>
  )
} 