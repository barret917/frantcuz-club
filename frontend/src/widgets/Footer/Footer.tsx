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
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
  text-align: left;
  
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
    line-height: 1.4;
    
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
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.3rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
  
  a {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.7rem 1.1rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 70px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    /* VK стили */
    &[href*="vk.com"] {
      background: linear-gradient(135deg, #4C75A3 0%, #5B7BB3 100%);
      border: 2px solid #4C75A3;
      
      &:hover {
        background: linear-gradient(135deg, #5B7BB3 0%, #6B8BC3 100%);
        border-color: #6B8BC3;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(76, 117, 163, 0.4);
      }
      
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(76, 117, 163, 0.3);
      }
    }
    
    /* Telegram стили */
    &[href*="t.me"] {
      background: linear-gradient(135deg, #0088CC 0%, #0099DD 100%);
      border: 2px solid #0088CC;
      
      &:hover {
        background: linear-gradient(135deg, #0099DD 0%, #00AADD 100%);
        border-color: #00AADD;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 136, 204, 0.4);
      }
      
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(0, 136, 204, 0.3);
      }
    }
    
    /* Общие hover эффекты */
    &:hover {
      color: #ffffff;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.6rem 1rem;
      min-width: 60px;
      border-radius: 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.5rem 0.9rem;
      min-width: 55px;
      border-radius: 8px;
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
              <a href="tel:+79680905550">+7(968) 090-55-50</a>
            </ContactItem>
            <ContactItem>
              <a href="tel:+79680915550">+7(968) 091-55-50</a>
            </ContactItem>
            <ContactItem>
              <a href="mailto:order@wetop.ru">order@wetop.ru</a>
            </ContactItem>
            <ContactItem>
              <a href="#">город Москва,<br/>ул. Салтыковская, 49А,<br/>ТЦ Волна, Цокольный этаж</a>
            </ContactItem>
            <ContactItem>
              <a href="tel:+79680915550">Банкетный менеджер:<br/>+7 (968)091-55-50</a>
            </ContactItem>
            
            <h3>Мы в соцсети</h3>
            <SocialLinks>
              <a href="https://vk.com/frant_rk" title="ВКонтакте">VK</a>
              <a href="https://t.me/francuz_klub" title="Telegram">TG</a>
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
          <div>© 2018 Frantsuz-club.ru все права защищены.</div>
          <div>Сделано WeTop digital agency.</div>
        </Copyright>
      </Container>
    </FooterWrapper>
  )
} 