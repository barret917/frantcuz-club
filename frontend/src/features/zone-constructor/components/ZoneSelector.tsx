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
  color: #ffd700;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`

const Subtitle = styled.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`

const ZoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

const ZoneCard = styled.div<{ $selected: boolean }>`
  background: ${props => props.$selected ? '#ffd700' : '#1a1a1a'};
  color: ${props => props.$selected ? '#000' : '#fff'};
  padding: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.$selected ? '#ffd700' : 'transparent'};

  &:hover {
    background: ${props => props.$selected ? '#ffed4e' : '#333'};
  }
`

const ZoneName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`

const ZoneDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`

const ZoneDetails = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
`

const ContinueButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`

interface ZoneSelectorProps {
  zones: Zone[]
  onZoneSelect: (zone: Zone) => void
  selectedZone: Zone | null
  onContinue: () => void
}

export const ZoneSelector: React.FC<ZoneSelectorProps> = ({
  zones,
  onZoneSelect,
  selectedZone,
  onContinue
}) => {
  return (
    <Container>
      <SelectorWrapper>
        <Title>Выберите зал для конструктора</Title>
        <Subtitle>
          Выберите зал, для которого хотите создать столы и элементы
        </Subtitle>

        <ZoneGrid>
          {zones.map(zone => (
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
          ))}
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