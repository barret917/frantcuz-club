import React from 'react'
import { Zone as ZoneType } from '@/shared/model/types'

interface ZoneProps {
  zone: ZoneType
  onSelect?: (zone: ZoneType) => void
}

export const Zone: React.FC<ZoneProps> = ({ zone, onSelect }) => {
  return (
    <div onClick={() => onSelect?.(zone)}>
      <h3>{zone.name}</h3>
      <p>Время работы: {zone.openTime} - {zone.closeTime}</p>
    </div>
  )
} 