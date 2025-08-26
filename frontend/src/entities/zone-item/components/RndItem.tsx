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
  background: ${props => props.$isSelected 
    ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' 
    : 'rgba(255, 255, 255, 0.9)'
  };
  height: 100%;
  width: 100%;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.$isSelectable ? 'pointer' : 'default'};
  transition: all 0.2s ease;
  border: ${props => props.$isSelected 
    ? '2px solid #000' 
    : '1px solid rgba(255, 255, 255, 0.3)'
  };
  box-shadow: ${props => props.$isSelected 
    ? '0 4px 20px rgba(255, 215, 0, 0.4)' 
    : '0 4px 16px rgba(0, 0, 0, 0.15)'
  };

  &:hover {
    transform: ${props => props.$isSelectable ? 'scale(1.02)' : 'none'};
    box-shadow: ${props => props.$isSelectable 
      ? '0 6px 20px rgba(0, 0, 0, 0.25)' 
      : 'none'
    };
    border-color: ${props => props.$isSelectable ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)'};
  }
`

const NameCard = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 0.9rem;
  color: #2c3e50;
`

const NameType = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #7f8c8d;
  font-weight: 400;
  text-transform: capitalize;
  margin-top: 2px;
`

const Seats = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #34495e;
  font-weight: 500;
  background: rgba(149, 165, 166, 0.2);
  padding: 2px 6px;
  border-radius: 8px;
  margin: 3px 0;
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
      position={{ x: item.x + 50, y: item.y + 50 }}
      size={{ width: item.width, height: item.height }}
      {...(!isSelectable && {
        enableDragging: true,
        enableResizing: true
      })}
      onDragStop={(e, d) => {
        if (!isSelectable) {
          updatePosition(item.id, d.x - 50, d.y - 50)
        }
      }}
      onResizeStop={(e, dir, ref, delta, position) => {
        if (!isSelectable) {
          const newWidth = parseFloat(ref.style.width)
          const newHeight = parseFloat(ref.style.height)
          updateSize(item.id, newWidth, newHeight)
          updatePosition(item.id, position.x - 50, position.y - 50)
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