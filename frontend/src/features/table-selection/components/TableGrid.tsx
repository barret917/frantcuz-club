import React from 'react'
import styled from 'styled-components'
import { RndItem } from '@/entities/zone-item'
import { ZoneItem } from '@/entities/zone-item/model/types'
import { Container } from '@/shared/ui/Container'

const GridWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: #f5f5f5;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`

const Title = styled.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const Instructions = styled.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`

const SelectedTableInfo = styled.div`
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #fff;
`

const TableName = styled.h3`
  color: #ffd700;
  margin: 0 0 0.5rem 0;
`

const TableDetails = styled.p`
  margin: 0;
  color: #ccc;
`

const ContinueButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #ffed4e;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`

interface TableGridProps {
  zoneItems: ZoneItem[]
  onTableSelect: (table: ZoneItem) => void
  selectedTable: ZoneItem | null
  onContinue: () => void
}

export const TableGrid: React.FC<TableGridProps> = ({ 
  zoneItems, 
  onTableSelect, 
  selectedTable,
  onContinue 
}) => {
  // Фильтруем только столы (не сцены, бары и т.д.)
  const tables = zoneItems.filter(item => item.type === 'table')

  const handleTableClick = (table: ZoneItem) => {
    onTableSelect(table)
  }

  return (
    <Container>
      <Title>Выберите стол для бронирования</Title>
      <Instructions>
        Кликните на стол, который хотите забронировать
      </Instructions>

      {selectedTable && (
        <SelectedTableInfo>
          <TableName>Выбранный стол: {selectedTable.name}</TableName>
          <TableDetails>
            Количество мест: {selectedTable.seats || 'Не указано'}
          </TableDetails>
          <ContinueButton onClick={onContinue}>
            Продолжить бронирование
          </ContinueButton>
        </SelectedTableInfo>
      )}

      <GridWrapper>
        {tables.map(table => (
          <RndItem
            key={table.id}
            item={table}
            updatePosition={() => {}} // Не позволяем двигать в режиме выбора
            updateSize={() => {}} // Не позволяем изменять размер
            onSelect={handleTableClick}
            isSelectable={true}
          />
        ))}
      </GridWrapper>
    </Container>
  )
} 