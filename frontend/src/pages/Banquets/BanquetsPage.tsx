import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { BanquetRequestForm } from '@/features/banquet-management';

const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const pulse = keyframes`
  0%, 100% { 
    transform: scale(1); 
  }
  50% { 
    transform: scale(1.08); 
  }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(123, 97, 255, 0.3); 
  }
  50% { 
    box-shadow: 0 0 35px rgba(123, 97, 255, 0.7); 
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
  padding: 2rem 0;
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
      radial-gradient(circle at 20% 80%, rgba(123, 97, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 15px rgba(123, 97, 255, 0.6);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  /* Стилизация скроллбара для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 10px rgba(123, 97, 255, 0.5);
  }
  
  /* Стилизация скроллбара для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.03);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #e2e8f0;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;



const ContactSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-out 0.5s both;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    animation: ${pulse} 2s ease-in-out infinite;
  }
  
  .label {
    font-size: 0.9rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .value {
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 600;
  }
`;

const CTAButton = styled.button`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  animation: ${glow} 2s ease-in-out infinite;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(123, 97, 255, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`

const FeaturesSection = styled.section`
  background: linear-gradient(135deg, #222 0%, #2a2a2a 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  margin: 4rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(123, 97, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
    margin: 3rem 0;
  }
`

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const FeatureCard = styled.div`
  background: rgba(34, 34, 34, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(123, 97, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  overflow: hidden;
  will-change: transform, box-shadow, border-color;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(123, 97, 255, 0.05) 0%, rgba(88, 28, 135, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(123, 97, 255, 0.5);
    box-shadow: 0 20px 40px rgba(123, 97, 255, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: ${pulse} 3s ease-in-out infinite;
  transition: transform 0.3s ease;
  
  ${FeatureCard}:hover & {
    transform: scale(1.1);
  }
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #8b5cf6;
`

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.9);
`

const BanquetsPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <PageWrapper>
      <Container>
        <Title>Банкеты и мероприятия</Title>
        <Subtitle>
          Организуем незабываемые банкеты, корпоративы и торжества в стильной атмосфере клуба Frantsuz
        </Subtitle>
        
        <FeaturesSection>
          <FeaturesContainer>
            <FeaturesTitle>Особенности банкетного обслуживания</FeaturesTitle>
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>🎉</FeatureIcon>
                <FeatureTitle>Профессиональная организация</FeatureTitle>
                <FeatureDescription>
                  Полный цикл организации мероприятий от планирования до проведения с вниманием к каждой детали
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>🍽️</FeatureIcon>
                <FeatureTitle>Качественное питание</FeatureTitle>
                <FeatureDescription>
                  Разнообразное меню от классических блюд до авторских рецептов от наших поваров
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>🎵</FeatureIcon>
                <FeatureTitle>Атмосфера и развлечения</FeatureTitle>
                <FeatureDescription>
                  Современное звуковое оборудование, профессиональные ведущие и развлекательная программа
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </FeaturesContainer>
        </FeaturesSection>
        
        <ContactSection>
          <ContactTitle>Зарезервировать банкет</ContactTitle>
          <ContactInfo>
            <ContactItem>
              <div className="icon">📞</div>
              <div className="label">Телефон</div>
              <div className="value">+7 968 091-55-50</div>
            </ContactItem>
            <ContactItem>
              <div className="icon">📧</div>
              <div className="label">Email</div>
              <div className="value">banket@frantsuz-club.ru</div>
            </ContactItem>
            <ContactItem>
              <div className="icon">⏰</div>
              <div className="label">Время работы</div>
              <div className="value">11:00 - 06:00</div>
            </ContactItem>
          </ContactInfo>
          <CTAButton onClick={openForm}>Оставить заявку на банкет</CTAButton>
        </ContactSection>
              </Container>
        
        {/* Форма заявки на банкет */}
        <BanquetRequestForm 
          isOpen={isFormOpen}
          onClose={closeForm}
        />
      </PageWrapper>
    );
  };

export default BanquetsPage; 