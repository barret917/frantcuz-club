import React from 'react'
import { Container } from '@/shared/ui/Container'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
  
  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0 1rem;
  }
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`

const FooterSection = styled.div`
  h3 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
      margin-bottom: 0.4rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
      margin-bottom: 0.3rem;
    }
    
    &:hover {
      color: #ffd700;
    }
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-bottom: 0.3rem;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #ffd700;
    
    @media (max-width: 768px) {
      width: 14px;
      height: 14px;
    }
    
    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
  }
  
  a {
    color: #ccc;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
    
    &:hover {
      color: #ffd700;
    }
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #ffffff;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    padding-top: 1.5rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 1rem;
    font-size: 0.8rem;
  }
`

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          {/* Контакты */}
          <FooterSection>
            <h3>Контакты</h3>
            <ContactItem>
              <svg>📞</svg>
              <a href="tel:+79680905550">+7(968) 090-55-50</a>
            </ContactItem>
            <ContactItem>
              <svg>📞</svg>
              <a href="tel:+79680915550">+7(968) 091-55-50</a>
            </ContactItem>
            <ContactItem>
              <svg>📧</svg>
              <a href="mailto:order@wetop.ru">order@wetop.ru</a>
            </ContactItem>
            <ContactItem>
              <svg>📍</svg>
              <a href="#">город Москва,<br/>ул. Салтыковская, 49А,<br/>ТЦ Волна, Цокольный этаж</a>
            </ContactItem>
            <ContactItem>
              <svg>🎂</svg>
              <a href="tel:+79680915550">Банкетный менеджер:<br/>+7 (968)091-55-50</a>
            </ContactItem>
            
            <h3>Мы в соцсети</h3>
            <SocialLinks>
              <a href="https://vk.com/frant_rk">VK</a>
              <a href="https://www.instagram.com/frant_rk/">Instagram</a>
              <a href="https://t.me/francuz_klub">Telegram</a>
            </SocialLinks>
          </FooterSection>

          {/* Услуги */}
          <FooterSection>
            <h3>Услуги</h3>
            <a href="https://reiting.moscow/" target="_blank" rel="noopener noreferrer">Работа</a>
            <a href="https://tyteda.ru/" target="_blank" rel="noopener noreferrer">Доставка</a>
            <a href="https://frantsuz.ru/" target="_blank" rel="noopener noreferrer">Обучение</a>
          </FooterSection>

          {/* Гостям */}
          <FooterSection>
            <h3>Гостям</h3>
            <a href="/contact">Правила клуба</a>
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/payment">Правила оплаты</a>
            <a href="/refund">Возврат и отказ от услуги</a>
            <a href="/requisites">Реквизиты</a>
            <a href="/security">Безопасность</a>
          </FooterSection>
        </FooterContent>

        <Copyright>
          <div>© 2021 Frantsuz-club.ru все права защищены.</div>
          <div>Сделано WeTop digital agency.</div>
        </Copyright>
      </Container>
    </FooterWrapper>
  )
} 