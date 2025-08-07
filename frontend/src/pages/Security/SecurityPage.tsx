import React from 'react'
import { Header } from '@/widgets/Header'
import styled from 'styled-components'

const SecurityContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffd700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #ccc;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const SecurityCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const CardDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const ContactSection = styled.div`
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const ContactTitle = styled.h2`
  color: #ffd700;
  font-size: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  
  a {
    color: #ffd700;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const SecurityPage: React.FC = () => {
  return (
    <SecurityContainer>
      <Header />
      <Content>
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
            <CardTitle>Аварийные выходы</CardTitle>
            <CardDescription>
              Четко обозначенные аварийные выходы и пути эвакуации. 
              Регулярные проверки и тренировки по эвакуации персонала.
            </CardDescription>
          </SecurityCard>
        </SecurityGrid>
        
        <ContactSection>
          <ContactTitle>Нужна помощь?</ContactTitle>
          <p style={{ color: '#ccc', marginBottom: '1rem' }}>
            Если у вас возникли вопросы по безопасности или нужна помощь, 
            свяжитесь с нами:
          </p>
          <ContactInfo>
            <ContactItem>
              <span>📞</span>
              <a href="tel:+79680905550">+7(968) 090-55-50</a>
            </ContactItem>
            <ContactItem>
              <span>📞</span>
              <a href="tel:+79680915550">+7(968) 091-55-50</a>
            </ContactItem>
            <ContactItem>
              <span>📧</span>
              <a href="mailto:order@wetop.ru">order@wetop.ru</a>
            </ContactItem>
          </ContactInfo>
        </ContactSection>
      </Content>
    </SecurityContainer>
  )
} 