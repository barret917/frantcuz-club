import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '../../../shared/ui/Container'

const AdditionalServicesContainer = styled.section`
  padding: 4rem 0;
  background: #1f2937;
  color: white;
`

const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: #374151;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #4b5563;
`

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 32px;
    height: 32px;
    fill: white;
  }
`

const ServiceTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
  color: white;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const AdditionalServicesSection: React.FC = () => {
  return (
    <AdditionalServicesContainer>
      <SectionContainer>
        <SectionTitle>А еще у нас Вы можете</SectionTitle>
        <ServicesContent>
          <ServiceCard>
            <ServiceIcon>
              {/* Кубики */}
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="6" height="6" rx="1" fill="white"/>
                <rect x="15" y="3" width="6" height="6" rx="1" fill="white"/>
                <rect x="9" y="9" width="6" height="6" rx="1" fill="white"/>
                <circle cx="6" cy="6" r="1" fill="#1f2937"/>
                <circle cx="18" cy="6" r="1" fill="#1f2937"/>
                <circle cx="12" cy="12" r="1" fill="#1f2937"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Поиграть в<br />настольные игры</ServiceTitle>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              {/* Спортивные трансляции */}
              <svg viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="14" rx="2" fill="white"/>
                <polygon points="9,8 9,16 17,12" fill="#1f2937"/>
                <circle cx="20" cy="6" r="1" fill="white"/>
                <circle cx="20" cy="8" r="1" fill="white"/>
                <circle cx="20" cy="10" r="1" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Смотреть<br />спортивные трансляции</ServiceTitle>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              {/* Кальян */}
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Насладиться паровым коктейлем</ServiceTitle>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              {/* Лаунж зона */}
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Отдохнуть в лаунж зоне</ServiceTitle>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              {/* Бильярд */}
              <svg viewBox="0 0 24 24">
                <ellipse cx="12" cy="12" rx="8" ry="4" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="8" cy="10" r="1" fill="white"/>
                <circle cx="16" cy="14" r="1" fill="white"/>
                <line x1="6" y1="8" x2="18" y2="16" stroke="white" strokeWidth="1"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Учиться в школе бильярда</ServiceTitle>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>
              {/* Музыкальная нота */}
              <svg viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="white"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Учиться в школе вокала</ServiceTitle>
          </ServiceCard>
        </ServicesContent>
      </SectionContainer>
    </AdditionalServicesContainer>
  )
} 