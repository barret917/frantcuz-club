import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

// Типы для Яндекс.Карт
declare global {
  interface Window {
    ymaps: any
  }
}

// Анимации
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
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
  padding: 0;
`

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    min-height: 50vh;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    max-width: 1000px;
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`

const Subtitle = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`

const ContactSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`

const ContactInfo = styled.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  padding: 2.5rem;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const ContactForm = styled.div`
  background: rgba(34, 34, 34, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  padding: 2.5rem;
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #667eea;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-bottom: 1rem;
  }
`

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`

const InfoContent = styled.div`
  flex: 1;
  
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: white;
  }
  
  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
  
  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #667eea;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const FormLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const QuickActions = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`

const QuickActionsTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
`

const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const QuickActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const MapSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #16213e 0%, #0f0f23 100%);
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(102, 126, 234, 0.3);
  position: relative;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`

const MapContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  
  /* Стили для Яндекс.Карт */
  .ymaps-2-1-79-map {
    border-radius: 16px;
  }
  
  .ymaps-2-1-79-controls__control {
    background: rgba(34, 34, 34, 0.9) !important;
    border: 1px solid rgba(102, 126, 234, 0.3) !important;
    border-radius: 8px !important;
  }
  
  .ymaps-2-1-79-controls__control:hover {
    background: rgba(34, 34, 34, 1) !important;
  }
  
  .ymaps-2-1-79-controls__control_toolbar {
    background: rgba(34, 34, 34, 0.9) !important;
    border: 1px solid rgba(102, 126, 234, 0.3) !important;
    border-radius: 8px !important;
  }
`

const MapLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
`

const MapError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  text-align: center;
  padding: 2rem;
`

const MapErrorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.7;
`

const MapErrorText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 400px;
  margin: 0;
`

const MapText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const [mapState, setMapState] = useState<'loading' | 'loaded' | 'error'>('loading')
  const mapRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Сброс статуса через 3 секунды
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1500)
  }

  // Загрузка Яндекс.Карт
  useEffect(() => {
    const loadYandexMaps = () => {
      console.log('🔄 Начинаем загрузку Яндекс.Карт...')
      
      // Проверяем, загружены ли уже карты
      if (window.ymaps) {
        console.log('✅ Яндекс.Карты уже загружены')
        initMap()
        return
      }

      // Создаем скрипт для загрузки Яндекс.Карт
      const script = document.createElement('script')
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
      script.async = true
      
      script.onerror = () => {
        console.error('❌ Ошибка загрузки скрипта Яндекс.Карт')
        setMapState('error')
      }
      
      // Таймаут для загрузки
      const timeout = setTimeout(() => {
        if (mapState === 'loading') {
          console.warn('⏰ Таймаут загрузки Яндекс.Карт')
          setMapState('error')
        }
      }, 10000) // 10 секунд
      
      script.onload = () => {
        console.log('📦 Скрипт Яндекс.Карт загружен')
        clearTimeout(timeout)
        // Ждем инициализации API
        const checkYMaps = () => {
          if (window.ymaps) {
            console.log('🎯 API Яндекс.Карт готов')
            window.ymaps.ready(() => {
              console.log('🚀 Инициализируем карту...')
              initMap()
            })
          } else {
            setTimeout(checkYMaps, 100)
          }
        }
        checkYMaps()
      }
      
      document.head.appendChild(script)
    }

    const initMap = () => {
      console.log('🗺️ Начинаем инициализацию карты...')
      if (!mapRef.current) {
        console.error('❌ mapRef не найден')
        return
      }
      
      try {
        console.log('🔧 Создаем карту...')
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map(mapRef.current, {
            center: [55.7452, 37.88 ], // Координаты Салтыковская 49а
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl']
          }, {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true
          })

          // Добавляем метку
          const placemark = new window.ymaps.Placemark([55.7452, 37.88 ], {
            balloonContent: `
              <div style="padding: 10px;">
                <h3 style="margin: 0 0 10px 0; color: #333;">Клуб "Франтцуз"</h3>
                <p style="margin: 0; color: #666;">г. Москва, ул. Салтыковская, д. 49а</p>
                <p style="margin: 5px 0 0 0; color: #666;">Метро: Новокосино (10 минут пешком)</p>
              </div>
            `
          }, {
            preset: 'islands#redDotIcon'
          })

          map.geoObjects.add(placemark)
          console.log('✅ Карта успешно загружена!')
          setMapState('loaded')
        })
      } catch (error) {
        console.error('❌ Ошибка инициализации карты:', error)
        setMapState('error')
      }
    }

    loadYandexMaps()
  }, [])

  return (
    <PageContainer>
      <Main>
        <HeroSection>
          <HeroContent>
            <Title>Контакты</Title>
            <Subtitle>
              Свяжитесь с нами для бронирования, вопросов или предложений. 
              Мы всегда рады помочь и ответить на все ваши вопросы!
            </Subtitle>
          </HeroContent>
        </HeroSection>

        <ContactSection>
          <SectionContainer>
            <SectionTitle>Свяжитесь с нами</SectionTitle>
            
            <ContactGrid>
              <ContactInfo>
                <InfoTitle>Информация о клубе</InfoTitle>
                
                <InfoItem>
                  <InfoIcon>📍</InfoIcon>
                  <InfoContent>
                    <h4>Адрес</h4>
                    <p>г. Москва, ул. Салтыковская, 49А, ТЦ Волна, -1 этаж</p>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>📞</InfoIcon>
                  <InfoContent>
                    <h4>Телефон</h4>
                    <p>+7 968 090-55-50<br />+7 968 091-55-50</p>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>✉️</InfoIcon>
                  <InfoContent>
                    <h4>Email</h4>
                    <p>online@frantsuz-club.ru</p>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>🕒</InfoIcon>
                  <InfoContent>
                    <h4>Режим работы</h4>
                    <p>Ежедневно с 11:00 до 23:00</p>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>🚇</InfoIcon>
                  <InfoContent>
                    <h4>Метро и транспорт</h4>
                    <p><strong>Метро:</strong> Новокосино (2-й выход)</p>
                    <p><strong>Автобусы:</strong> 760К, Н4, 706, 723, 760 до Новокосинская улица 51</p>
                    <p><strong>Остановка:</strong> В1</p>
                    <p><strong>Пешком:</strong> 6 минут до ТЦ Волна</p>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>🌐</InfoIcon>
                  <InfoContent>
                    <h4>Социальные сети</h4>
                    <p>VK, Telegram, Rutube, WhatsApp, Max</p>
                  </InfoContent>
                </InfoItem>
              </ContactInfo>
              
              <ContactForm>
                <FormTitle>Отправить сообщение</FormTitle>
                
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormLabel htmlFor="name">Ваше имя *</FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="email">Email *</FormLabel>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Введите ваш email"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="phone">Телефон</FormLabel>
                    <FormInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Введите ваш телефон"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="subject">Тема *</FormLabel>
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Введите тему сообщения"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="message">Сообщение *</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Введите ваше сообщение"
                      required
                    />
                  </FormGroup>
                  
                  <SubmitButton 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </SubmitButton>
                  
                  {submitStatus === 'success' && (
                    <div style={{ 
                      marginTop: '1rem', 
                      padding: '1rem', 
                      background: 'rgba(34, 197, 94, 0.2)', 
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '8px',
                      color: '#22c55e',
                      textAlign: 'center'
                    }}>
                      Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}
                </form>
                
                <QuickActions>
                  <QuickActionsTitle>Быстрые действия</QuickActionsTitle>
                  <QuickActionsGrid>
                                         <QuickActionButton href="tel:+79680905550">
                       📞 Позвонить
                     </QuickActionButton>
                    <QuickActionButton href="https://t.me/frantsuz_club" target="_blank" rel="noopener noreferrer">
                      💬 Написать в Telegram
                    </QuickActionButton>
                  </QuickActionsGrid>
                </QuickActions>
              </ContactForm>
            </ContactGrid>
          </SectionContainer>
        </ContactSection>

        <MapSection>
          <SectionContainer>
            <SectionTitle>Как нас найти</SectionTitle>
            
            <MapWrapper>
              {mapState === 'loading' && (
                <MapLoading>
                  <div>🔄 Загрузка карты...</div>
                </MapLoading>
              )}
              
              {mapState === 'error' && (
                <MapError>
                  <MapErrorIcon>🗺️</MapErrorIcon>
                  <MapErrorText>
                    <strong>Интерактивная карта недоступна</strong><br />
                    Но вы можете найти нас по адресу: <strong>г. Москва, ул. Салтыковская, д. 49а</strong><br />
                    <a 
                      href="https://yandex.ru/maps/213/moscow/?ll=37.8641%2C55.7447&z=15&text=Салтыковская%2049а&mode=search" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      🔗 Открыть в Яндекс.Картах
                    </a>
                  </MapErrorText>
                </MapError>
              )}
              
              <MapContainerStyled ref={mapRef} />
            </MapWrapper>
            
            <MapText>
              Мы находимся в удобном месте на улице Салтыковская. 
              Добраться можно на автомобиле или общественном транспорте. 
              Есть бесплатная парковка для гостей.
            </MapText>
          </SectionContainer>
        </MapSection>
      </Main>
    </PageContainer>
  )
}
