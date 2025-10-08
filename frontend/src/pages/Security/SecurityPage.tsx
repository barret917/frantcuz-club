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

const SecurityContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Content = styled.div`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${css`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
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

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`

const SecurityCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${css`fadeIn`} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const CardIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #667eea;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-align: center;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ContactSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${css`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`

const ContactTitle = styled.h2`
  color: #667eea;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const ContactDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #fff;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #667eea;
    transform: translateY(-2px);
  }
  
  span {
    font-size: 1.2rem;
  }
  
  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    
    &:hover {
      color: #764ba2;
    }
  }
`

export const SecurityPage: React.FC = () => {
  return (
    <SecurityContainer>
      <Content>
        <SectionContainer>
          <Title>Безопасность гостей</Title>
          <Subtitle>
            Мы обеспечиваем максимальную безопасность для всех посетителей клуба. 
            Ваша безопасность - наш приоритет.
          </Subtitle>
          
          <SecurityGrid>
            <SecurityCard>
              <CardIcon>📹</CardIcon>
              <CardTitle>Видеонаблюдение</CardTitle>
              <CardDescription>
                По всему клубу установлены современные камеры видеонаблюдения 
                с высоким разрешением. Все зоны находятся под постоянным контролем 
                службы безопасности.
              </CardDescription>
            </SecurityCard>
            
            <SecurityCard>
              <CardIcon>👮‍♂️</CardIcon>
              <CardTitle>Служба безопасности</CardTitle>
              <CardDescription>
                Круглосуточная служба безопасности с быстрым реагированием. 
                Опытные сотрудники всегда готовы помочь и обеспечить порядок 
                в клубе.
              </CardDescription>
            </SecurityCard>
            
            <SecurityCard>
              <CardIcon>🚨</CardIcon>
              <CardTitle>Система оповещения</CardTitle>
              <CardDescription>
                Современная система оповещения и связи с экстренными службами. 
                В случае необходимости помощь прибудет в кратчайшие сроки.
              </CardDescription>
            </SecurityCard>
            
            <SecurityCard>
              <CardIcon>🔒</CardIcon>
              <CardTitle>Контроль доступа</CardTitle>
              <CardDescription>
                Система контроля доступа на входе и в VIP-зонах. 
                Все посетители проходят проверку для обеспечения безопасности.
              </CardDescription>
            </SecurityCard>
            
            <SecurityCard>
              <CardIcon>💡</CardIcon>
              <CardTitle>Освещение</CardTitle>
              <CardDescription>
                Полное освещение всех зон клуба, включая парковку и прилегающую территорию. 
                Хорошая видимость обеспечивает дополнительную безопасность.
              </CardDescription>
            </SecurityCard>
            
            <SecurityCard>
              <CardIcon>🚪</CardIcon>
              <CardTitle>Пожарная безопасность</CardTitle>
              <CardDescription>
                Четко обозначенные аварийные выходы и пути эвакуации. 
                Регулярно проводятся профилактические работы по обеспечению пожарной безопасности.
              </CardDescription>
            </SecurityCard>
          </SecurityGrid>
          
          <ContactSection>
            <ContactTitle>Нужна помощь?</ContactTitle>
            <ContactDescription>
              Если у вас возникли вопросы по безопасности или нужна помощь, 
              свяжитесь с нами:
            </ContactDescription>
            <ContactInfo>
              <ContactItem>
                <span>📞</span>
                <a href="tel:+79680905550">+7 968 090-55-50</a>
              </ContactItem>
              <ContactItem>
                <span>📞</span>
                <a href="tel:+79680915550">+7 968 091-55-50</a>
              </ContactItem>
              <ContactItem>
                <span>📧</span>
                <a href="mailto:order@wetop.ru">order@wetop.ru</a>
              </ContactItem>
            </ContactInfo>
          </ContactSection>
        </SectionContainer>
      </Content>
    </SecurityContainer>
  )
} 