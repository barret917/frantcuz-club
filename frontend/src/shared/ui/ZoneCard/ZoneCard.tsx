import React from 'react'
import styled from 'styled-components'
import { Zone } from '@/shared/model/types'

interface ZoneCardProps {
  zone: Zone
  $isFullWidth?: boolean
}

const Card = styled.div<{ $isFullWidth?: boolean }>`
  border: none;
  overflow: hidden;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`

const ImageContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const ZoneName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffd700;
`

export const ZoneCard: React.FC<ZoneCardProps> = ({ zone, $isFullWidth }) => {
  return (
    <Card $isFullWidth={$isFullWidth}>
      <ImageContainer>
        <Image src={zone.imageUrl} alt={zone.name} />
        <Overlay>
          <ZoneName>{zone.name}</ZoneName>
        </Overlay>
      </ImageContainer>
    </Card>
  )
} 