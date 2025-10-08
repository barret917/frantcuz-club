import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Rnd } from 'react-rnd'
import { EventZone } from '@/shared/api/event-zones'
import { EventTable } from '@/shared/api/event-tables'
import { TableCanvas } from './TableCanvas'

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  min-height: 600px;
  max-height: 1000px;
  background: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
  
  @media (max-width: 1200px) {
    min-height: 500px;
    max-height: 800px;
  }
  
  @media (max-width: 768px) {
    aspect-ratio: 4/3;
    min-height: 250px;
    max-height: 350px;
    overflow: auto;
    
    /* Улучшенная видимость скроллбара на мобильных */
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(33, 150, 243, 0.5);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(33, 150, 243, 0.7);
    }
  }
  
  @media (max-width: 480px) {
    aspect-ratio: 1/1;
    min-height: 150px;
    max-height: 250px;
    overflow: auto;
    
    /* Видимый скроллбар на маленьких экранах */
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(33, 150, 243, 0.6);
      border-radius: 5px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(33, 150, 243, 0.8);
    }
  }
`

const ZoneCard = styled.div<{ isSelected: boolean }>`
  background: ${props => props.isSelected ? '#e3f2fd' : '#ffffff'};
  border: 2px solid ${props => props.isSelected ? '#2196f3' : '#e0e0e0'};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: move;
  transition: all 0.2s ease;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const ZoneData = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 4px 6px;
    font-size: 9px;
  }
`

const ZoneName = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    font-size: 11px;
    margin-bottom: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 2px;
  }
`

const ZonePrice = styled.div`
  color: #4caf50;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`


const EmptyState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #6c757d;
  font-size: 16px;
`

interface EventZoneCanvasProps {
  zones: EventZone[]
  selectedZoneId?: number
  onZoneSelect: (zoneId: number) => void
  onZoneUpdate: (zoneId: number, updates: Partial<EventZone>) => void
  onZoneDoubleClick: (zoneId: number) => void
  // Для работы со столами
  zoneTables?: { [zoneId: number]: EventTable[] }
  selectedTableId?: number
  onTableSelect?: (tableId: number) => void
  onTableUpdate?: (tableId: number, updates: Partial<EventTable>) => void
  onTableDoubleClick?: (tableId: number) => void
  onAddTable?: (zoneId: number) => void
  isEditMode?: boolean
}

export const EventZoneCanvas: React.FC<EventZoneCanvasProps> = ({
  zones,
  selectedZoneId,
  onZoneSelect,
  onZoneUpdate,
  onZoneDoubleClick,
  zoneTables = {},
  selectedTableId,
  onTableSelect,
  onTableUpdate,
  onTableDoubleClick,
  onAddTable,
  isEditMode = false
}) => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getZoneMinSize = () => {
    // Увеличиваем минимальные размеры зон для лучшей видимости на мобильных
    if (screenSize.width <= 480) return { width: 120, height: 100 }
    if (screenSize.width <= 768) return { width: 140, height: 100 }
    return { width: 200, height: 120 }
  }

  const getZoneSize = (zone: EventZone) => {
    const minSize = getZoneMinSize()
    // На мобильных используем scale 0.6 вместо 0.4 для лучшей видимости
    const scale = screenSize.width <= 480 ? 0.6 : screenSize.width <= 768 ? 0.75 : 1
    
    return {
      width: Math.max(minSize.width, (zone.width || 200) * scale),
      height: Math.max(minSize.height, (zone.height || 120) * scale)
    }
  }

  const getTableMinSize = () => {
    // Согласуем с размерами из TableCanvas
    if (screenSize.width <= 480) return { width: 44, height: 44 }
    if (screenSize.width <= 768) return { width: 50, height: 40 }
    return { width: 60, height: 35 }
  }
  const [draggedZone, setDraggedZone] = useState<number | null>(null)

  const handleDragStart = useCallback((zoneId: number) => {
    setDraggedZone(zoneId)
  }, [])

  const handleDragStop = useCallback((zoneId: number, x: number, y: number) => {
    setDraggedZone(null)
    onZoneUpdate(zoneId, { x, y })
  }, [onZoneUpdate])

  const handleResizeStop = useCallback((zoneId: number, width: number, height: number) => {
    onZoneUpdate(zoneId, { width, height })
  }, [onZoneUpdate])

  const handleZoneClick = useCallback((zoneId: number) => {
    onZoneSelect(zoneId)
  }, [onZoneSelect])

  const handleZoneDoubleClick = useCallback((zoneId: number) => {
    onZoneDoubleClick(zoneId)
  }, [onZoneDoubleClick])

  const handleTableSelect = useCallback((tableId: number) => {
    if (onTableSelect) {
      onTableSelect(tableId)
    }
  }, [onTableSelect])

  if (zones.length === 0) {
    return (
      <CanvasContainer>
        <EmptyState>
          <div>🎯</div>
          <div>Создайте первую зону для мероприятия</div>
        </EmptyState>
      </CanvasContainer>
    )
  }

  return (
    <CanvasContainer>
      {zones.map((zone) => (
        <Rnd
          key={zone.id}
          position={{ x: zone.x, y: zone.y }}
          size={getZoneSize(zone)}
          onDragStart={() => handleDragStart(zone.id)}
          onDragStop={(e, d) => handleDragStop(zone.id, d.x, d.y)}
          onResizeStop={(e, direction, ref, delta, position) => 
            handleResizeStop(zone.id, ref.offsetWidth, ref.offsetHeight)
          }
          bounds="parent"
          minWidth={getZoneMinSize().width}
          minHeight={getZoneMinSize().height}
          dragHandleClassName="zone-drag-handle"
          disableDragging={!isEditMode}
          enableResizing={isEditMode}
        >
          <ZoneCard
            isSelected={selectedZoneId === zone.id}
            onClick={() => handleZoneClick(zone.id)}
            onDoubleClick={() => handleZoneDoubleClick(zone.id)}
            className={isEditMode ? "" : "zone-drag-handle"}
            style={{ 
              pointerEvents: isEditMode ? 'none' : 'auto'
            }}
          >
            <ZoneData>
              <ZoneName>{zone.name}</ZoneName>
              <div style={{ display: 'flex', gap: '12px' }}>
                <ZonePrice>₽{zone.price}</ZonePrice>
              </div>
            </ZoneData>
            
            <div style={{ 
              flex: 1,
              position: 'relative',
              padding: '8px',
              pointerEvents: 'auto'
            }}>
              <TableCanvas
                tables={zoneTables[zone.id] || []}
                selectedTableId={selectedTableId}
                onTableSelect={handleTableSelect}
                onTableUpdate={onTableUpdate || (() => {})}
                onTableDoubleClick={onTableDoubleClick || (() => {})}
                onAddTable={() => {
                  console.log('🪑 EventZoneCanvas: onAddTable вызван для зоны:', zone.id, 'isEditMode:', isEditMode)
                  onAddTable?.(zone.id)
                }}
                isEditMode={isEditMode}
                screenSize={screenSize}
              />
            </div>
          </ZoneCard>
        </Rnd>
      ))}
    </CanvasContainer>
  )
}
