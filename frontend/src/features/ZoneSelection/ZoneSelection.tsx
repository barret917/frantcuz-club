import React, { useState } from 'react'
import { Zone } from '@/entities/Zone'
import { Zone as ZoneType } from '@/shared/model/types'

interface ZoneSelectionProps {
  zones: ZoneType[]
  onZoneSelect: (zone: ZoneType) => void
}

export const ZoneSelection: React.FC<ZoneSelectionProps> = ({ zones, onZoneSelect }) => {
  const [selectedZone, setSelectedZone] = useState<ZoneType | null>(null)

  const handleZoneSelect = (zone: ZoneType) => {
    setSelectedZone(zone)
    onZoneSelect(zone)
  }

  return (
    <div>
      <h2>Выберите зал</h2>
      {zones.map(zone => (
        <Zone 
          key={zone.id} 
          zone={zone} 
          onSelect={handleZoneSelect}
        />
      ))}
    </div>
  )
} 