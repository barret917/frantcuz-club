import React from 'react'
import { Rnd } from 'react-rnd'
import styled from 'styled-components'
import { ZoneItem } from '../model/types'

interface RndItemProps {
  item: ZoneItem
  updatePosition: (id: number, x: number, y: number) => void
  updateSize: (id: number, width: number, height: number) => void
  onSelect?: (item: ZoneItem) => void
  isSelectable?: boolean
}

const InnerCard = styled.div<{ $isSelectable?: boolean; $isSelected?: boolean }>`
  background: ${props => props.$isSelected ? '#ffd700' : 'white'};
  height: 100%;
  width: 100%;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.$isSelectable ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  border: ${props => props.$isSelected ? '2px solid #000' : '1px solid #ddd'};

  &:hover {
    transform: ${props => props.$isSelectable ? 'scale(1.05)' : 'none'};
    box-shadow: ${props => props.$isSelectable ? '0 4px 8px rgba(0,0,0,0.2)' : 'none'};
  }
`

const NameCard = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
`

const NameType = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
`

const Seats = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #888;
`

export const RndItem: React.FC<RndItemProps> = ({ 
  item, 
  updatePosition, 
  updateSize, 
  onSelect,
  isSelectable = false 
}) => {
  const handleClick = () => {
    if (isSelectable && onSelect) {
      onSelect(item)
    }
  }

  return (
    <Rnd
      bounds="parent"
      position={{ x: item.x, y: item.y }}
      size={{ width: item.width, height: item.height }}
      enableResizing={!isSelectable}
      enableDragging={!isSelectable}
      onDragStop={(e, d) => {
        if (!isSelectable) {
          updatePosition(item.id, d.x, d.y)
        }
      }}
      onResizeStop={(e, dir, ref, delta, position) => {
        if (!isSelectable) {
          const newWidth = parseFloat(ref.style.width)
          const newHeight = parseFloat(ref.style.height)
          updateSize(item.id, newWidth, newHeight)
          updatePosition(item.id, position.x, position.y)
        }
      }}
    >
      <InnerCard 
        $isSelectable={isSelectable}
        $isSelected={false}
        onClick={handleClick}
      >
        <NameCard>{item.label}</NameCard>
        {item.seats && <Seats>{item.seats} мест</Seats>}
        <NameType>{item.type}</NameType>
      </InnerCard>
    </Rnd>
  )
} 