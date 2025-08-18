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

const ContentSection = styled.section`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: ${css`fadeIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const SectionContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${css`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const Text = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: 1.1rem;
  
  p {
    margin: 0 0 1.5rem 0;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
  
  strong {
    color: #ffffff;
    font-weight: 600;
  }
  
  ul {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.8);
      
      &:last-child {
        margin-bottom: 0;
      }
      
      @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 0.8rem;
      }
    }
  }
`

const ContactInfo = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  margin-top: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${css`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #4CAF50;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`

const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  
  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 1rem;
  }
`

const Icon = styled.span`
  font-size: 1.5rem;
  
  &.general {
    color: #667eea;
  }
  
  &.operator {
    color: #4CAF50;
  }
  
  &.processing {
    color: #ff9800;
  }
  
  &.clients {
    color: #9c27b0;
  }
  
  &.security {
    color: #f44336;
  }
  
  &.rights {
    color: #2196f3;
  }
  
  &.contact {
    color: #4CAF50;
  }
`

export const PrivacyPage: React.FC = () => {
  return (
    <PageContainer>
      <Main>
        <SectionContainer>
          <Title>Политика конфиденциальности</Title>
          <Subtitle>
            Информация об обработке и защите персональных данных
          </Subtitle>
          
          <ContentSection>
            <SectionTitle>
              <Icon className="general">📋</Icon>
              Общие положения
            </SectionTitle>
            <SectionContent>
              <Text>
                <p>
                  Политика в отношении обработки персональных данных (далее — «Политика») направлена на защиту прав и свобод физических лиц, персональные данные которых обрабатывает развлекательный комплекс «ФРАНЦУЗ» (далее — «Оператор»). Политика разработана в соответствии с п. 2 ч. 1 ст. 18.1 Федерального закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных» (далее — ФЗ «О персональных данных»). Политика содержит сведения, подлежащие раскрытию в соответствии с ч. 1 ст. 14 ФЗ «О персональных данных», и является общедоступным документом.
                </p>
              </Text>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <Icon className="operator">🏢</Icon>
              Сведения об операторе
            </SectionTitle>
            <SectionContent>
              <Text>
                <p>
                  <strong>Оператор:</strong> ООО «ЭкоСтар», адрес: г. Москва, ул. Салтыковская, д. 49А. Оператор осуществляет деятельность в сфере общественного питания и развлечений.
                </p>
              </Text>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <Icon className="processing">⚙️</Icon>
              Сведения об обработке персональных данных
            </SectionTitle>
            <SectionContent>
              <Text>
                <p>
                  Оператор обрабатывает персональные данные на законной и справедливой основе для выполнения требований законодательства РФ, исполнения договоров, оказания услуг, а также в иных законных целях. Персональные данные получаются непосредственно от субъектов персональных данных (далее – «ПДн») и обрабатываются автоматизированным и неавтоматизированным способами.
                </p>
                <p>
                  В состав обработки входят: сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, передача (в том числе предоставление доступа), обезличивание, блокирование, удаление и уничтожение.
                </p>
              </Text>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <Icon className="clients">👥</Icon>
              Обработка персональных данных клиентов
            </SectionTitle>
            <SectionContent>
              <Text>
                <p>
                  Оператор обрабатывает персональные данные клиентов в рамках правоотношений, возникающих в процессе использования услуг, оформления заказов, бронирований и взаимодействия с сайтом. Обработка осуществляется в целях:
                </p>
                <ul>
                  <li>приёма обращений и заявок;</li>
                  <li>оформления заказов;</li>
                  <li>направления уведомлений и сообщений;</li>
                  <li>исполнения условий договоров.</li>
                </ul>
                <p>
                  Персональные данные обрабатываются с согласия клиента, выраженного путём оформления заказа, заявки или подписки на сайте.
                </p>
                <p>
                  Оператор может обрабатывать следующие данные: фамилия, имя, отчество; адрес; контактный телефон; адрес электронной почты.
                </p>
                <p>
                  <strong>Специальные категории персональных данных</strong> (о здоровье, политических взглядах и т.п.) не обрабатываются.
                </p>
              </Text>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <Icon className="security">🔒</Icon>
              Сведения об обеспечении безопасности персональных данных
            </SectionTitle>
            <SectionContent>
              <Text>
                <p>
                  Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий. Обеспечение безопасности осуществляется в соответствии со ст. 19 ФЗ «О персональных данных».
                </p>
              </Text>
            </SectionContent>
          </ContentSection>

          <ContentSection>
            <SectionTitle>
              <Icon className="rights">⚖️</Icon>
              Права субъектов персональных данных
            </SectionTitle>
            <SectionContent>
              <Text>
                <p>
                  <strong>Субъект персональных данных имеет право:</strong>
                </p>
                <ul>
                  <li>получать сведения об обработке его персональных данных;</li>
                  <li>требовать уточнения, блокировки или уничтожения некорректных или незаконно полученных данных;</li>
                  <li>отозвать согласие на обработку персональных данных;</li>
                  <li>обжаловать действия Оператора в уполномоченный орган или в суд;</li>
                  <li>требовать возмещения убытков и компенсации морального вреда в случае нарушения прав.</li>
                </ul>
                <p>
                  Для реализации своих прав субъект персональных данных может обратиться к Оператору лично либо направить письменный запрос по электронной почте.
                </p>
              </Text>
            </SectionContent>
          </ContentSection>

          <ContactInfo>
            <ContactTitle>
              <Icon className="contact">📧</Icon>
              Контактная информация
            </ContactTitle>
            <ContactDetails>
              <span>📧</span>
              <span>
                Для реализации своих прав субъект персональных данных может обратиться к Оператору лично либо направить письменный запрос по электронной почте: <a href="mailto:info@tyteda.ru">info@tyteda.ru</a>
              </span>
            </ContactDetails>
          </ContactInfo>
        </SectionContainer>
      </Main>
    </PageContainer>
  )
} 