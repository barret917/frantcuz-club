import React from 'react'
import { Container } from '@/shared/ui/Container'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  padding: 4rem 0 2rem;
  margin-top: auto;
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
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0 1rem;
  }
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 2.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    max-width: 900px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
    max-width: 600px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
`

const FooterSection = styled.div`
  text-align: left;
  position: relative;
  z-index: 2;
  
  h3 {
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
      border-radius: 1px;
    }
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
  
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    display: block;
    margin-bottom: 0.8rem;
    font-size: 0.95rem;
    line-height: 1.5;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.7rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
    }
    
    &:hover {
      color: #667eea;
      transform: translateX(5px);
    }
  }
`

const ContactItem = styled.div`
  margin-bottom: 0.8rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.7rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.6rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-top: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.7rem;
    margin-top: 1rem;
  }
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(102, 126, 234, 0.3);
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
    }
    
    &:active {
      transform: translateY(-1px);
    }
    
    img {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }
    
    &:hover img {
      transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
      padding: 0.8rem;
      
      img {
        width: 32px;
        height: 32px;
      }
    }
    
    @media (max-width: 480px) {
      padding: 0.7rem;
      
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
`



const Copyright = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 1.5rem;
    font-size: 0.85rem;
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
              <a href="tel:+79680905550">+7 968 090-55-50</a>
            </ContactItem>
            <ContactItem>
              <a href="tel:+79680915550">+7 968 091-55-50</a>
            </ContactItem>
            <ContactItem>
              <a href="mailto:online@frantcuz-club.ru">online@frantcuz-club.ru</a>
            </ContactItem>
            <ContactItem>
              <a href="#">г. Москва,<br/>ул. Салтыковская, 49А,<br/>ТЦ Волна, -1 этаж</a>
            </ContactItem>
            <ContactItem>
              <a href="tel:+79680915550">Банкетный менеджер:<br/>+7 968 091-55-50</a>
            </ContactItem>
          </FooterSection>

          {/* Услуги */}
          <FooterSection>
            <h3>Услуги</h3>
            <a href="https://reiting.moscow/" target="_blank" rel="noopener noreferrer">Работа</a>
            <a href="https://tyteda.ru/" target="_blank" rel="noopener noreferrer">Доставка</a>
            <a href="https://frantsuz.ru/" target="_blank" rel="noopener noreferrer">Обучение</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Продажа киев и аксессуаров</a>
            
            <h3>Мы в соц сетях</h3>
            <SocialLinks>
              <a href="https://vk.com/dali_hinkali/" target="_blank" rel="noreferrer" title="VK">
                <img src="/images/vk-logo.svg" alt="VK" />
              </a>
              <a href="https://rutube.ru/channel/60860525/" target="_blank" rel="noreferrer" title="Rutube">
                <img src="/images/rutube-logo.svg" alt="Rutube" />
              </a>
              <a href="https://t.me/dali_hinkali/" target="_blank" rel="noreferrer" title="Telegram">
                <img src="/images/telegram-logo.svg" alt="Telegram" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" title="WhatsApp">
                <img src="/images/WhatsApp.svg" alt="WhatsApp" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" title="Max">
                <img src="/images/max.svg" alt="Max" />
              </a>
            </SocialLinks>
          </FooterSection>

          {/* Гостям */}
          <FooterSection>
            <h3>Гостям</h3>
            <a href="/club-rules">Правила клуба</a>
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/payment-rules">Правила оплаты</a>
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