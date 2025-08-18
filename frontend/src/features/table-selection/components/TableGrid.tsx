import React from 'react'
import styled from 'styled-components'
import { RndItem } from '@/entities/zone-item'
import { ZoneItem } from '@/entities/zone-item/model/types'

const StyledContainer = styled.div`
  width: 100%;
  padding: clamp(1rem, 3vw, 3rem);
  
  @media (max-width: 768px) {
    padding: clamp(0.75rem, 2vw, 2rem);
  }
  
  @media (max-width: 480px) {
    padding: clamp(0.5rem, 1.5vw, 1.5rem);
  }
`

const FullBleed = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: clamp(16px, 4vw, 48px);
  padding-right: clamp(16px, 4vw, 48px);
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    padding-left: clamp(12px, 3vw, 24px);
    padding-right: clamp(12px, 3vw, 24px);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding-left: clamp(8px, 2vw, 16px);
    padding-right: clamp(8px, 2vw, 16px);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

const GridWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
  border: 2px solid #95a5a6;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 100px rgba(255, 255, 255, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(149, 165, 166, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(52, 73, 94, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    height: 70vh;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    height: 65vh;
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2), inset 0 0 80px rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 480px) {
    height: 60vh;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 0 60px rgba(255, 255, 255, 0.05);
  }
`

const Title = styled.h2`
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
`

const Instructions = styled.p`
  color: #6c757d;
  text-align: center;
  margin-bottom: 3rem;
  font-size: clamp(1rem, 3vw, 1.25rem);
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
`

const SelectedTableInfo = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%);
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: 16px;
  margin-bottom: 2rem;
  color: #2c3e50;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  @media (max-width: 768px) {
    padding: clamp(1.25rem, 2.5vw, 1.5rem);
    margin-bottom: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: clamp(1rem, 2vw, 1.25rem);
    margin-bottom: 1rem;
    border-radius: 10px;
  }
`

const TableName = styled.h3`
  color: #2c3e50;
  margin: 0 0 0.75rem 0;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.01em;
`

const TableDetails = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1.25rem;
  font-weight: 400;
`

const ContinueButton = styled.button`
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.25);
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.35);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &::before {
      display: none;
    }
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    box-shadow: 0 3px 12px rgba(102, 126, 234, 0.25);
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
  // Фильтруем столы и кабинки (booth)
  const tables = zoneItems.filter(item => item.type === 'table' || item.type === 'booth')

  const handleTableClick = (table: ZoneItem) => {
    onTableSelect(table)
  }

  return (
    <StyledContainer>
      <FullBleed>
        <Title>Выберите место для бронирования</Title>
        <Instructions>
          Кликните по столу или кабинке, чтобы выбрать место для вашего мероприятия
        </Instructions>

        {selectedTable && (
          <SelectedTableInfo>
            <TableName>Выбрано: {selectedTable.label}</TableName>
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
      </FullBleed>
    </StyledContainer>
  )
} 