import React from 'react'
import styled from 'styled-components'
import { ZoneItem } from '@/entities/zone-item/model/types'

const TableContainer = styled.div<{ $isSelected: boolean }>`
  position: absolute;
  background: ${props => props.$isSelected ? '#ffd700' : '#4a90e2'};
  border: 2px solid ${props => props.$isSelected ? '#ffed4e' : '#357abd'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.$isSelected ? '#000' : '#fff'};
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
  min-width: 60px;
  min-height: 40px;

  &:hover {
    background: ${props => props.$isSelected ? '#ffed4e' : '#357abd'};
    transform: scale(1.05);
  }
`

const TableInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`

const TableName = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
`

const TableSeats = styled.div`
  font-size: 0.7rem;
  opacity: 0.8;
`

interface TableItemProps {
  table: ZoneItem
  isSelected: boolean
  onClick: (table: ZoneItem) => void
}

export const TableItem: React.FC<TableItemProps> = ({ 
  table, 
  isSelected, 
  onClick 
}) => {
  const handleClick = () => {
    onClick(table)
  }

  return (
    <TableContainer
      $isSelected={isSelected}
      onClick={handleClick}
      style={{
        left: `${Number(table.x) * 100}%`,
        top: `${Number(table.y) * 100}%`,
        width: `${Number(table.width) * 100}%`,
        height: `${Number(table.height) * 100}%`,
      }}
    >
      <TableInfo>
                        <TableName>{table.label}</TableName>
        {table.seats && (
          <TableSeats>{table.seats} мест</TableSeats>
        )}
      </TableInfo>
    </TableContainer>
  )
} 