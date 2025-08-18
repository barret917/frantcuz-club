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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
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
  gap: 0.8rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 0.7rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
  }
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    
                    &:hover {
                  /* background: rgba(255, 255, 255, 0.2); */
                  /* border: 1px solid rgba(255, 255, 255, 0.4); */
                  /* transform: translateY(-3px); */
                  /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); */
                }
    
    &:active {
      transform: translateY(-1px);
    }
    
    img {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }
    
                    &:hover img {
                  /* transform: scale(1.1); */
                }
    
    @media (max-width: 768px) {
      padding: 0.6rem;
      
      img {
        width: 28px;
        height: 28px;
      }
    }
    
    @media (max-width: 480px) {
      padding: 0.5rem;
      
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`

const ProjectImage = styled.img`
  width: 140px;
  height: 80px;
  object-fit: contain;
  object-position: center;
  filter: grayscale(20%);
  transition: filter 0.3s ease;
  
  &:hover {
    filter: grayscale(0%);
  }
  
  @media (max-width: 1200px) {
    width: 120px;
    height: 70px;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 65px;
  }
  
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
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
              <a href="tel:+79680905550">+7 968 090-55-50</a>
            </ContactItem>
            <ContactItem>
              <a href="tel:+79680915550">+7 968 091-55-50</a>
            </ContactItem>
            <ContactItem>
              <a href="mailto:order@wetop.ru">order@wetop.ru</a>
            </ContactItem>
            <ContactItem>
              <a href="#">г. Москва,<br/>ул. Салтыковская, 49А,<br/>ТЦ Волна, -1 этаж</a>
            </ContactItem>
            <ContactItem>
              <a href="tel:+79680915550">Банкетный менеджер:<br/>+7 968 091-55-50</a>
            </ContactItem>
            
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
            </SocialLinks>
          </FooterSection>

          {/* Услуги */}
          <FooterSection>
            <h3>Услуги</h3>
            <a href="https://reiting.moscow/" target="_blank" rel="noopener noreferrer">Работа</a>
            <a href="https://tyteda.ru/" target="_blank" rel="noopener noreferrer">Доставка</a>
            <a href="https://frantsuz.ru/" target="_blank" rel="noopener noreferrer">Обучение</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Продажа киев и аксессуаров</a>
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

          {/* Наши проекты */}
          <FooterSection>
            <h3>Наши проекты</h3>
            <ProjectsGrid>
              <a href="https://shashlandia.ru/" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-шашландиа.png" 
                  alt="Шашландия"
                />
              </a>
              <a href="http://dostavka-pominki.ru/" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-доставка-поминки.png" 
                  alt="Доставка поминок"
                />
              </a>
              <a href="https://tyteda.ru/" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-тут-еда.png" 
                  alt="ТутЕда"
                />
              </a>
              <a href="https://wetop.ru/" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-ветоп.png" 
                  alt="WeTop"
                />
              </a>
              <a href="https://reiting.moscow/" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-рейтинг.png" 
                  alt="Рейтинг"
                />
              </a>
              <a href="https://frantsuz.ru/" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-франтуз-академия.png" 
                  alt="Франтуз Академия"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-дали-хинкали.png" 
                  alt="Дали Хинкали"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-комикадзе.png" 
                  alt="Комикадзе"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ProjectImage 
                  src="/logo-footer/лого-пою-всегда.png" 
                  alt="Пою Всегда"
                />
              </a>
            </ProjectsGrid>
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