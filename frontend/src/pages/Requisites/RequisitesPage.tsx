import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { SectionContainer } from '../../shared/ui/Container'

// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Main = styled.main`
  flex: 1;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${css`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${css`fadeIn`} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`

const RequisitesCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  animation: ${css`fadeIn`} 0.8s ease-out;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`

const CompanyHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`

const CompanyName = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const CompanySubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const RequisitesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`

const RequisitesItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`

const ItemIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  width: 40px;
  text-align: center;
  animation: ${css`pulse`} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    margin-right: 1rem;
    width: 30px;
  }
`

const ItemContent = styled.div`
  flex: 1;
`

const ItemLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const ItemValue = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
  
  a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const ContactSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  margin-top: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${css`slideIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #4CAF50;
  margin: 0 0 2rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-3px);
  }
`

const ContactCardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #667eea;
`

const ContactCardTitle = styled.h4`
  color: #667eea;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
`

const ContactCardValue = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  
  a {
    color: #667eea;
    text-decoration: none;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
`

export const RequisitesPage: React.FC = () => {
  return (
    <PageContainer>
      <Main>
        <SectionContainer>
          <Title>Реквизиты организации</Title>
          <Subtitle>
            Полная информация о компании ООО "ЭкоСтар"
          </Subtitle>
          
          <RequisitesCard>
            <CompanyHeader>
              <CompanyName>ООО "ЭкоСтар"</CompanyName>
              <CompanySubtitle>Развлекательный комплекс «ФРАНЦУЗ»</CompanySubtitle>
            </CompanyHeader>
            
            <RequisitesGrid>
              <RequisitesItem>
                <ItemIcon>🏢</ItemIcon>
                <ItemContent>
                  <ItemLabel>ОГРН / ИНН</ItemLabel>
                  <ItemValue>1235000052330 / 5041214554</ItemValue>
                </ItemContent>
              </RequisitesItem>
              
              <RequisitesItem>
                <ItemIcon>📞</ItemIcon>
                <ItemContent>
                  <ItemLabel>Телефон</ItemLabel>
                  <ItemValue>
                    <a href="tel:+79680905550">+7 968 090-55-50</a><br />
                    <a href="tel:+79680915550">+7 968 091-55-50</a>
                  </ItemValue>
                </ItemContent>
              </RequisitesItem>
              
              <RequisitesItem>
                <ItemIcon>🕒</ItemIcon>
                <ItemContent>
                  <ItemLabel>Режим работы</ItemLabel>
                  <ItemValue>11:00 – 23:00</ItemValue>
                </ItemContent>
              </RequisitesItem>
              
              <RequisitesItem>
                <ItemIcon>📧</ItemIcon>
                <ItemContent>
                  <ItemLabel>E-mail</ItemLabel>
                  <ItemValue>Скоро будет другая почта</ItemValue>
                </ItemContent>
              </RequisitesItem>
            </RequisitesGrid>
          </RequisitesCard>
          
          <ContactSection>
            <ContactTitle>
              📍 Адреса
            </ContactTitle>
            <ContactGrid>
              <ContactCard>
                <ContactCardIcon>🏠</ContactCardIcon>
                <ContactCardTitle>Фактический адрес</ContactCardTitle>
                <ContactCardValue>г. Москва,<br />ул. Салтыковская, 49А,<br />ТЦ Волна, -1 этаж</ContactCardValue>
              </ContactCard>
              
              <ContactCard>
                <ContactCardIcon>⚖️</ContactCardIcon>
                <ContactCardTitle>Юридический адрес</ContactCardTitle>
                <ContactCardValue>г. Москва,<br />ул. Салтыковская, 49А,<br />ТЦ Волна, -1 этаж</ContactCardValue>
              </ContactCard>
              
              <ContactCard>
                <ContactCardIcon>📮</ContactCardIcon>
                <ContactCardTitle>Почтовый адрес</ContactCardTitle>
                <ContactCardValue>г. Москва,<br />ул. Салтыковская, 49А,<br />ТЦ Волна, -1 этаж<br />111672</ContactCardValue>
              </ContactCard>
            </ContactGrid>
          </ContactSection>
        </SectionContainer>
      </Main>
    </PageContainer>
  )
} 