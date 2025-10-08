import React from 'react'
import styled from 'styled-components'

interface BookingZoneCanvasProps {
  zoneId: number
  items: any[]
  onItemSelect: (item: any) => void
  selectedItems: any[]
}

const Canvas = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
  position: relative;
  background: #f9f9f9;
`

const Item = styled.div<{ $x: number; $y: number; $width: number; $height: number; $selected: boolean }>`
  position: absolute;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
  border: 2px solid ${props => props.$selected ? '#3498db' : '#bdc3c7'};
  background: ${props => props.$selected ? '#e3f2fd' : 'white'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  
  &:hover {
    border-color: #3498db;
  }
`

export const BookingZoneCanvas: React.FC<BookingZoneCanvasProps> = ({
  zoneId,
  items,
  onItemSelect,
  selectedItems
}) => {
  return (
    <Canvas>
      {items.map((item) => (
        <Item
          key={item.id}
          $x={item.x}
          $y={item.y}
          $width={item.width}
          $height={item.height}
          $selected={selectedItems.some(selected => selected.id === item.id)}
          onClick={() => onItemSelect(item)}
        >
          {item.label}
        </Item>
      ))}
    </Canvas>
  )
}
