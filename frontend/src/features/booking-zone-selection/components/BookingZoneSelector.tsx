import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BookingZone, getBookingZones } from '@/shared/api/booking'

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`


const ZonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const ZoneCard = styled.div<{ $isSelected: boolean }>`
  background: ${props => props.$isSelected ? '#4f46e5' : 'transparent'};
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  height: 300px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  }
`

const ZoneImage = styled.div<{ $imageUrl?: string }>`
  width: 100%;
  height: 100%;
  background: ${props => props.$imageUrl 
    ? `url(${props.$imageUrl})` 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
`

const ZoneName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

const ZoneType = styled.span`
  display: inline-block;
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const ZoneInfo = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
`

const PriceInfo = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
`

const Deposit = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #6b7280;
`

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: 2rem 0;
`

const NoDataMessage = styled.div`
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  padding: 3rem;
`

interface BookingZoneSelectorProps {
  onZoneSelect: (zone: BookingZone) => void
}

export const BookingZoneSelector: React.FC<BookingZoneSelectorProps> = ({ onZoneSelect }) => {
  const [zones, setZones] = useState<BookingZone[]>([])
  const [selectedZone, setSelectedZone] = useState<BookingZone | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchZones = async () => {
      try {
        setLoading(true)
        setError(null)
        const zonesData = await getBookingZones()
        setZones(zonesData)
      } catch (err) {
        setError('Ошибка загрузки зон бронирования')
        console.error('Error fetching zones:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchZones()
  }, [])

  const handleZoneSelect = (zone: BookingZone) => {
    setSelectedZone(zone)
    // Сразу переходим к следующему шагу при клике на плашку
    onZoneSelect(zone)
  }

  const getZoneTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      billiards: 'Бильярд',
      karaoke: 'Караоке',
      playstation: 'PlayStation',
      disco: 'Диско'
    }
    return labels[type] || type
  }

  if (loading) {
    return (
      <Container>
        <LoadingSpinner>Загрузка зон...</LoadingSpinner>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    )
  }

  if (zones.length === 0) {
    return (
      <Container>
        <NoDataMessage>Нет доступных зон для бронирования</NoDataMessage>
      </Container>
    )
  }

  return (
    <Container>
      <ZonesGrid>
        {zones.map((zone) => (
          <ZoneCard
            key={zone.id}
            $isSelected={selectedZone?.id === zone.id}
            onClick={() => handleZoneSelect(zone)}
          >
            <ZoneImage $imageUrl={zone.imageUrl}>
              {!zone.imageUrl && getZoneTypeLabel(zone.type)}
            </ZoneImage>
            
            {/* Скрытые поля - остаются для доступности, но не видны */}
            <div style={{ display: 'none' }}>
              <ZoneName>{zone.name}</ZoneName>
              <ZoneType>{getZoneTypeLabel(zone.type)}</ZoneType>
              <ZoneInfo>
                <div>Время работы: {zone.openTime} - {zone.closeTime}</div>
                {zone.description && <div>{zone.description}</div>}
              </ZoneInfo>
              <PriceInfo>
                <Price>{zone.pricePerHour} ₽ за бронирование</Price>
              </PriceInfo>
            </div>
          </ZoneCard>
        ))}
      </ZonesGrid>
    </Container>
  )
}
