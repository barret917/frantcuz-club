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
      <p>{zone.description}</p>
      <p>Вместимость: {zone.capacity} гостей</p>
      <p>Цена: от {zone.price} ₽/час</p>
    </div>
  )
} 