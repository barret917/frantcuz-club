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
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 4rem 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    pointer-events: none;
  }
  
  @media (max-width: 1024px) {
    padding: 3rem 0;
    min-height: 50vh;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 0;
    min-height: 40vh;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
    min-height: 35vh;
  }
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${css`fadeIn`} 0.8s ease-out;
`

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 0.9;
  margin: 0 0 2rem 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const ContentSection = styled.section`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`

const PaymentMethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`

const PaymentCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`

const CardContent = styled.div`
  color: #a0a0a0;
  line-height: 1.6;
  
  p {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`

const SecuritySection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${css`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 2rem 0;
  }
`

const SecurityTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #4CAF50;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`

const CardIllustration = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${css`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 2rem 0;
  }
`

const CardImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  display: block;
`

const Icon = styled.span`
  font-size: 1.5rem;
  
  &.lock {
    color: #4CAF50;
  }
  
  &.heart {
    color: #ff6b6b;
  }
  
  &.card {
    color: #667eea;
  }
`

export const PaymentRulesPage: React.FC = () => {
  return (
    <PageContainer>
      <Main>
        <HeroSection>
          <SectionContainer>
            <HeroContent>
              <Title>Правила оплаты</Title>
              <Subtitle>
                Безопасные и удобные способы оплаты для вашего комфорта
              </Subtitle>
            </HeroContent>
          </SectionContainer>
        </HeroSection>

        <ContentSection>
          <SectionContainer>
            <SectionTitle>Способы оплаты</SectionTitle>
            
            <PaymentMethodsGrid>
              <PaymentCard>
                <CardTitle>
                  <Icon className="card">💳</Icon>
                  Банковские карты
                </CardTitle>
                <CardContent>
                  <p>К оплате принимаются банковские карты платёжных систем:</p>
                  <ul>
                    <li>Visa</li>
                    <li>MasterCard</li>
                    <li>МИР</li>
                  </ul>
                  <p>После ввода данных вы будете перенаправлены на платёжный шлюз ПАО «Сбербанк России» / ПАО «Банк ВТБ» / платёжной системы PayKeeper для подтверждения операции.</p>
                  <p>Соединение с платёжным шлюзом и передача информации осуществляются в защищённом режиме с использованием технологии шифрования SSL.</p>
                </CardContent>
              </PaymentCard>

              <PaymentCard>
                <CardTitle>
                  <Icon className="lock">🔒</Icon>
                  Процесс оплаты
                </CardTitle>
                <CardContent>
                  <p>Для оплаты товара банковской картой при оформлении заказа выберите способ оплаты: «Банковской картой».</p>
                  <p>Обработка платежа производится на авторизационной странице банка, где необходимо ввести следующие данные:</p>
                  <ul>
                    <li>Номер карты</li>
                    <li>Срок действия карты (указан на лицевой стороне)</li>
                    <li>Имя держателя карты (латинскими буквами, как указано на карте)</li>
                    <li>CVC2 / CVV2 код (три цифры на обороте карты)</li>
                  </ul>
                </CardContent>
              </PaymentCard>
            </PaymentMethodsGrid>

            <SecuritySection>
              <SecurityTitle>
                <Icon className="heart">🛡</Icon>
                Безопасность обработки платежей
              </SecurityTitle>
              <CardContent>
                <p>Безопасность интернет-платежей гарантируется соответствием международному стандарту PCI DSS.</p>
                <p>Передача данных осуществляется с использованием технологии шифрования SSL, что полностью исключает возможность их перехвата или использования третьими лицами.</p>
              </CardContent>
            </SecuritySection>

            <SecuritySection>
              <SecurityTitle>
                <Icon className="heart">❤️</Icon>
                Рекомендации по безопасности
              </SecurityTitle>
              <CardContent>
                <ul>
                  <li>Берегите пластиковые карты так же, как наличные</li>
                  <li>Не передавайте номер карты по телефону посторонним лицам</li>
                  <li>Всегда держите под рукой номер телефона банка для экстренной блокировки карты</li>
                  <li>Вводите реквизиты карты только при оплате покупок на проверенных сайтах</li>
                </ul>
              </CardContent>
            </SecuritySection>

            <CardIllustration>
              <SectionTitle style={{ color: '#ffffff', marginBottom: '2rem' }}>
                Как найти данные карты
              </SectionTitle>
              <CardImage 
                src="/pay-rules/payCard.png" 
                alt="Схема банковской карты с указанием расположения данных"
              />
            </CardIllustration>

            <div style={{ textAlign: 'center', margin: '3rem 0', padding: '0 2rem' }}>
              <SectionTitle style={{ marginBottom: '2rem' }}>
                Поддерживаемые платежные системы
              </SectionTitle>
              <img 
                src="/pay-rules/cards.png" 
                alt="Логотипы платежных систем: Visa, MasterCard, МИР, СБП, PayKeeper"
                style={{ 
                  maxWidth: '300px', 
                  height: 'auto'
                }}
              />
            </div>

            <PaymentCard>
              <CardTitle>
                <Icon className="lock">🔐</Icon>
                3D-Secure защита
              </CardTitle>
              <CardContent>
                <p>Если ваш банк поддерживает технологию безопасной оплаты в интернете 3D-Secure (Verified by Visa, MasterCard Secure Code или MirAccept), для подтверждения платежа потребуется ввести одноразовый пароль, отправленный вашим банком.</p>
                <p>Информацию о способах получения этого пароля уточняйте в банке, выпустившем карту.</p>
              </CardContent>
            </PaymentCard>

            <div style={{ margin: '3rem 0' }}></div>

            <PaymentCard>
              <CardTitle>
                <Icon className="card">🏢</Icon>
                Реквизиты
              </CardTitle>
              <CardContent>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <strong style={{ color: '#667eea' }}>Название компании:</strong> ООО "ЭкоСтар"
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>ИНН:</strong> 5041214554
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>ОГРН:</strong> 1235000052330
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>Юридический адрес:</strong> г. Москва, ул. Салтыковская, д. 49А
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>Фактический адрес:</strong> г. Москва, ул. Салтыковская, д. 49А
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>Почтовый адрес:</strong> г. Москва, ул. Салтыковская, д. 49А
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>Режим работы:</strong> 11:00 - 23:00
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>Телефон:</strong> +7 (968) 091-55-53
                  </div>
                  <div>
                    <strong style={{ color: '#667eea' }}>E-mail:</strong> info@tyteda.ru
                  </div>
                </div>
              </CardContent>
            </PaymentCard>
          </SectionContainer>
        </ContentSection>
      </Main>
    </PageContainer>
  )
} 