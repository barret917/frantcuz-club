import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui/Container'
import { Zone } from '@/shared/model/types'

const SelectorWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  color: #a0a0a0;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
`

const ZoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

const ZoneCard = styled.div<{ $selected: boolean }>`
  background: ${props => props.$selected 
    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)' 
    : 'rgba(255, 255, 255, 0.03)'
  };
  color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid ${props => props.$selected 
    ? 'rgba(102, 126, 234, 0.5)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  backdrop-filter: blur(20px);
  box-shadow: ${props => props.$selected 
    ? '0 8px 32px rgba(102, 126, 234, 0.3)' 
    : '0 4px 16px rgba(0, 0, 0, 0.2)'
  };

  &:hover {
    background: ${props => props.$selected 
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)' 
      : 'rgba(255, 255, 255, 0.08)'
    };
    transform: translateY(-4px);
    box-shadow: ${props => props.$selected 
      ? '0 12px 40px rgba(102, 126, 234, 0.4)' 
      : '0 8px 24px rgba(0, 0, 0, 0.3)'
    };
  }

  &:active {
    transform: translateY(-2px);
  }
`

const ZoneName = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
`

const ZoneDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
`

const ZoneDetails = styled.div`
  margin-top: 1rem;
  font-size: 0.85rem;
  opacity: 0.7;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const ContinueButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

interface ZoneSelectorProps {
  zones?: Zone[]
  onZoneSelect: (zone: Zone) => void
  selectedZone: Zone | null
  onContinue: () => void
  onRefresh?: () => void
}

export const ZoneSelector: React.FC<ZoneSelectorProps> = ({
  zones = [],
  onZoneSelect,
  selectedZone,
  onContinue,
  onRefresh
}) => {
  // Отладочная информация
  console.log('🔍 ZoneSelector получил zones:', zones)
  console.log('🔍 Тип zones:', typeof zones)
  console.log('🔍 Array.isArray(zones):', Array.isArray(zones))
  console.log('🔍 zones.length:', zones?.length)
  
  return (
    <Container>
      <SelectorWrapper>
        <Title>Выберите зал для конструктора</Title>
        <Subtitle>
          Выберите зал, для которого хотите создать столы и элементы
        </Subtitle>
        
        {/* Кнопка обновления */}
        {onRefresh && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <button
              onClick={onRefresh}
              style={{
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              🔄 Обновить список зон
            </button>
          </div>
        )}

        {/* Отладочная информация на странице */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginBottom: '1rem',
          fontSize: '0.9rem',
          color: '#ccc'
        }}>
          <strong>Отладка:</strong> Получено зон: {zones?.length || 0} | 
          Тип: {typeof zones} | 
          Массив: {Array.isArray(zones) ? 'Да' : 'Нет'}
        </div>

        <ZoneGrid>
          {zones && zones.length > 0 ? (
            zones.map(zone => (
              <ZoneCard
                key={zone.id}
                $selected={selectedZone?.id === zone.id}
                onClick={() => onZoneSelect(zone)}
              >
                <ZoneName>{zone.name}</ZoneName>
                <ZoneDescription>Время работы: {zone.openTime} - {zone.closeTime}</ZoneDescription>
                <ZoneDetails>
                  <div>Зал: {zone.name}</div>
                </ZoneDetails>
              </ZoneCard>
            ))
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem',
              color: '#ccc',
              fontSize: '1.1rem',
              gridColumn: '1 / -1'
            }}>
              Зоны не найдены. Создайте зоны через админ-панель.
            </div>
          )}
        </ZoneGrid>

        {selectedZone && (
          <ContinueButton onClick={onContinue}>
            Открыть конструктор для зоны "{selectedZone.name}"
          </ContinueButton>
        )}
      </SelectorWrapper>
    </Container>
  )
} 