import React, { useState, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Rnd } from 'react-rnd'
import { EventTable } from '@/shared/api/event-tables'

const TableContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible;
  min-height: 120px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  
  /* Адаптивные размеры для столов */
  @media (max-width: 1200px) {
    min-height: 100px;
  }
  
  @media (max-width: 768px) {
    min-height: 80px;
  }
  
  @media (max-width: 480px) {
    min-height: 60px;
  }
`

const TableCard = styled.div<{ isSelected: boolean; isOccupied?: boolean }>`
  background: ${props => 
    props.isOccupied ? '#ffebee' : 
    props.isSelected ? '#fff3cd' : '#f8f9fa'
  };
  border: 2px solid ${props => 
    props.isOccupied ? '#f44336' : 
    props.isSelected ? '#ffc107' : '#dee2e6'
  };
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  cursor: ${props => props.isOccupied ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.isOccupied ? '#d32f2f' : '#495057'};
  
  &:hover {
    ${props => !props.isOccupied && `
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      border-color: #ffc107;
    `}
  }
`

const TableName = styled.div`
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 2px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 9px;
  }
  
  @media (max-width: 480px) {
    font-size: 8px;
  }
`

const TableSeats = styled.div`
  font-size: 10px;
  color: #6c757d;
  display: flex;
  align-items: center;
  gap: 2px;
  
  @media (max-width: 768px) {
    font-size: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 8px;
  }
`

const AddTableButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #28a745;
  color: white;
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10000;
  min-width: 60px;
  min-height: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  pointer-events: auto;
  user-select: none;
  
  &:hover {
    background: #218838;
    transform: scale(1.05);
  }
  
  &:active {
    background: #1e7e34;
    transform: scale(0.95);
  }
`

const EmptyState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #6c757d;
  font-size: 12px;
`

interface TableCanvasProps {
  tables: EventTable[]
  selectedTableId?: number
  onTableSelect: (tableId: number) => void
  onTableUpdate: (tableId: number, updates: Partial<EventTable>) => void
  onTableDoubleClick: (tableId: number) => void
  onAddTable: () => void
  isEditMode?: boolean
  screenSize?: { width: number; height: number }
}

export const TableCanvas: React.FC<TableCanvasProps> = ({
  tables,
  selectedTableId,
  onTableSelect,
  onTableUpdate,
  onTableDoubleClick,
  onAddTable,
  isEditMode = false,
  screenSize = { width: 1200, height: 800 }
}) => {
  // Используем ref для стабилизации функции
  const onTableSelectRef = useRef(onTableSelect)
  onTableSelectRef.current = onTableSelect

  const getTableMinSize = () => {
    // Минимум 44x44px для комфортного тапа на мобильных (iOS/Android стандарт)
    if (screenSize.width <= 480) return { width: 44, height: 44 }
    if (screenSize.width <= 768) return { width: 50, height: 40 }
    return { width: 60, height: 35 }
  }

  const getTableSize = (table: EventTable) => {
    const minSize = getTableMinSize()
    // На мобильных используем scale 0.7 вместо 0.4 для лучшей видимости
    const scale = screenSize.width <= 480 ? 0.7 : screenSize.width <= 768 ? 0.75 : 1
    
    return {
      width: Math.max(minSize.width, (table.width || 60) * scale),
      height: Math.max(minSize.height, (table.height || 35) * scale)
    }
  }
  const [draggedTable, setDraggedTable] = useState<number | null>(null)

  const handleDragStart = useCallback((tableId: number) => {
    setDraggedTable(tableId)
  }, [])

  const handleDragStop = useCallback((tableId: number, x: number, y: number) => {
    setDraggedTable(null)
    onTableUpdate(tableId, { x, y })
  }, [onTableUpdate])

  const handleResizeStop = useCallback((tableId: number, width: number, height: number) => {
    onTableUpdate(tableId, { width, height })
  }, [onTableUpdate])

  const handleTableClick = useCallback((tableId: number) => {
    onTableSelectRef.current(tableId)
  }, [])

  const handleTableDoubleClick = useCallback((tableId: number) => {
    onTableDoubleClick(tableId)
  }, [onTableDoubleClick])

  const handleAddTableClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onAddTable()
  }, [onAddTable])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  return (
    <TableContainer>
      {isEditMode && (
        <>
          <AddTableButton 
            onClick={handleAddTableClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => console.log('🪑 TableCanvas: MouseEnter на кнопке')}
            onMouseLeave={() => console.log('🪑 TableCanvas: MouseLeave на кнопке')}
          >
            + Стол
          </AddTableButton>
        </>
      )}
      
      {tables.length === 0 ? (
        <EmptyState>
          <div>🪑</div>
          <div>Нет столов</div>
          {isEditMode && (
            <div style={{ fontSize: '10px', marginTop: '4px' }}>
              Нажмите "+ Стол" для добавления
            </div>
          )}
        </EmptyState>
      ) : (
        tables.map((table) => (
          <Rnd
            key={table.id}
            position={{ x: table.x, y: table.y }}
            size={getTableSize(table)}
            onDragStart={() => handleDragStart(table.id)}
            onDragStop={(e, d) => handleDragStop(table.id, d.x, d.y)}
            onResizeStop={(e, direction, ref, delta, position) => 
              handleResizeStop(table.id, ref.offsetWidth, ref.offsetHeight)
            }
            bounds="parent"
            minWidth={getTableMinSize().width}
            minHeight={getTableMinSize().height}
            dragHandleClassName="table-drag-handle"
            disableDragging={!isEditMode}
            enableClick={true}
            enableResizing={isEditMode}
          >
            <TableCard
              isSelected={selectedTableId === table.id}
              isOccupied={table.tickets && table.tickets.length >= table.seats}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                const soldTickets = table.tickets?.length || 0
                const isFullyOccupied = soldTickets >= table.seats
                if (!isFullyOccupied) {
                  handleTableClick(table.id)
                }
              }}
              onDoubleClick={() => {
                const soldTickets = table.tickets?.length || 0
                const isFullyOccupied = soldTickets >= table.seats
                if (!isFullyOccupied) {
                  handleTableDoubleClick(table.id)
                }
              }}
              className="table-drag-handle"
            >
              <TableName>{table.name}</TableName>
              <TableSeats>
                {(() => {
                  const soldTickets = table.tickets?.length || 0
                  const availableSeats = table.seats - soldTickets
                  
                  if (availableSeats === 0) {
                    return `❌ 0/${table.seats}`
                  } else if (soldTickets > 0) {
                    return `🪑 ${availableSeats}/${table.seats}`
                  } else {
                    return `🪑 ${table.seats}`
                  }
                })()}
              </TableSeats>
            </TableCard>
          </Rnd>
        ))
      )}
    </TableContainer>
  )
}
