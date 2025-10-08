import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { BookingTable } from '@/shared/api/booking'

const CanvasContainer = styled.div`
  width: 100%;
  height: 600px;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  background: #f8f9fa;
  position: relative;
  overflow: hidden;
  margin: 1rem 0;
`

const TableItem = styled.div<{ 
  x: number; 
  y: number; 
  width: number; 
  height: number; 
  isActive: boolean;
  isDragging?: boolean;
}>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${props => props.isActive ? '#3b82f6' : '#9ca3af'};
  border: 2px solid ${props => props.isActive ? '#1d4ed8' : '#6b7280'};
  border-radius: 8px;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  opacity: ${props => props.isDragging ? 0.8 : 1};
  transition: ${props => props.isDragging ? 'none' : 'all 0.2s'};
  user-select: none;
  box-shadow: ${props => props.isDragging ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'};
  
  &:hover {
    transform: ${props => props.isDragging ? 'none' : 'scale(1.05)'};
    box-shadow: ${props => props.isDragging ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.15)'};
  }
  
  &:active {
    cursor: grabbing;
  }
`

const ControlsPanel = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: #3b82f6;
          color: white;
          
          &:hover:not(:disabled) {
            background: #2563eb;
          }
        `
      case 'danger':
        return `
          background: #ef4444;
          color: white;
          
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `
      default:
        return `
          background: #f3f4f6;
          color: #374151;
          border: 1px solid #d1d5db;
          
          &:hover:not(:disabled) {
            background: #e5e7eb;
          }
        `
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const InfoPanel = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`

const TableInfo = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

// Типы для drag & drop
interface DragItem {
  type: 'table'
  table: BookingTable
}

interface TableCanvasProps {
  tables: BookingTable[]
  onTableUpdate: (table: BookingTable) => void
  onTableDelete: (tableId: number) => void
  onTableCreate: (table: Partial<BookingTable>) => void
}

// Компонент отдельного стола
const TableItemComponent: React.FC<{
  table: BookingTable
  onUpdate: (table: BookingTable) => void
  onDelete: (tableId: number) => void
  onDragStart: (table: BookingTable) => void
  isDragging: boolean
}> = ({ table, onUpdate, onDelete, onDragStart, isDragging }) => {
  const [isResizing, setIsResizing] = useState(false)
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onDragStart(table)
  }

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: table.width,
      height: table.height
    })
  }

  const handleResizeMouseMove = (e: React.MouseEvent) => {
    if (!isResizing) return
    
    e.preventDefault()
    
    const deltaX = e.clientX - resizeStart.x
    const deltaY = e.clientY - resizeStart.y
    
    const newWidth = Math.max(50, Math.min(300, resizeStart.width + deltaX))
    const newHeight = Math.max(30, Math.min(200, resizeStart.height + deltaY))
    
    const updatedTable = {
      ...table,
      width: newWidth,
      height: newHeight,
    }
    
    onUpdate(updatedTable)
  }

  const handleResizeMouseUp = () => {
    setIsResizing(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Переключение активности при клике (но не обновляем сразу)
    const updatedTable = {
      ...table,
      isActive: !table.isActive,
    }
    
    onUpdate(updatedTable)
  }

  return (
    <>
      <TableItem
        x={table.x}
        y={table.y}
        width={table.width}
        height={table.height}
        isActive={table.isActive}
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        title={`Перетащите для перемещения или кликните для ${table.isActive ? 'деактивации' : 'активации'}`}
        style={{
          cursor: 'grab',
          zIndex: isDragging ? 1000 : 1,
        }}
      >
        {table.name}
      </TableItem>
      
      {/* Элемент для изменения размера */}
      <div
        style={{
          position: 'absolute',
          left: table.x + table.width - 8,
          top: table.y + table.height - 8,
          width: 16,
          height: 16,
          background: '#3b82f6',
          border: '2px solid white',
          borderRadius: '50%',
          cursor: 'nw-resize',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          color: 'white',
          fontWeight: 'bold',
        }}
        onMouseDown={handleResizeMouseDown}
        onMouseMove={handleResizeMouseMove}
        onMouseUp={handleResizeMouseUp}
        title="Перетащите для изменения размера"
      >
        ↖
      </div>
    </>
  )
}

// Основной компонент канваса
const TableCanvas: React.FC<TableCanvasProps> = ({
  tables,
  onTableUpdate,
  onTableDelete,
  onTableCreate,
}) => {
  console.log('TableCanvas received tables:', tables)
  const [newTableName, setNewTableName] = useState('')
  const [newTableSeats, setNewTableSeats] = useState(4)
  const [newTableWidth, setNewTableWidth] = useState(150)
  const [newTableHeight, setNewTableHeight] = useState(75)
  const [isCreating, setIsCreating] = useState(false)
  const [draggedTable, setDraggedTable] = useState<BookingTable | null>(null)
  const [localTables, setLocalTables] = useState<BookingTable[]>(tables)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  // Синхронизация локального состояния с пропсами
  useEffect(() => {
    console.log('TableCanvas: Syncing tables from props:', tables)
    setLocalTables(tables)
    setHasUnsavedChanges(false)
  }, [tables])

  // Глобальные обработчики для перетаскивания
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!draggedTable) return
      
      const canvas = document.querySelector('[data-canvas]') as HTMLElement
      if (!canvas) return
      
      const rect = canvas.getBoundingClientRect()
      const newX = Math.max(0, Math.min(e.clientX - rect.left - 75, 800 - draggedTable.width))
      const newY = Math.max(0, Math.min(e.clientY - rect.top - 37, 550 - draggedTable.height))
      
      const updatedTable = {
        ...draggedTable,
        x: newX,
        y: newY,
      }
      
      // Обновляем локальное состояние
      setLocalTables(prev => prev.map(table => 
        table.id === draggedTable.id ? updatedTable : table
      ))
      setHasUnsavedChanges(true)
    }

    const handleGlobalMouseUp = () => {
      setDraggedTable(null)
    }

    if (draggedTable) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [draggedTable, onTableUpdate])

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isCreating) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Проверяем, что клик не на существующем столе
    const clickedTable = localTables.find(table => 
      x >= table.x && x <= table.x + table.width &&
      y >= table.y && y <= table.y + table.height
    )

    if (!clickedTable && newTableName.trim()) {
      onTableCreate({
        name: newTableName.trim(),
        seats: newTableSeats,
        x: Math.max(0, x - newTableWidth / 2), // Центрируем стол
        y: Math.max(0, y - newTableHeight / 2),
        width: newTableWidth,
        height: newTableHeight,
        isActive: true,
      })
      
      setNewTableName('')
      setIsCreating(false)
    }
  }, [isCreating, newTableName, newTableSeats, newTableWidth, newTableHeight, localTables, onTableCreate])

  const startCreating = () => {
    if (newTableName.trim()) {
      setIsCreating(true)
    }
  }

  const cancelCreating = () => {
    setIsCreating(false)
    setNewTableName('')
  }

  const handleSaveChanges = async () => {
    try {
      console.log('Saving changes for tables:', localTables)
      // Сохраняем все изменения
      for (const table of localTables) {
        console.log('Updating table:', table)
        await onTableUpdate(table)
      }
      setHasUnsavedChanges(false)
      console.log('All changes saved successfully')
    } catch (error) {
      console.error('Error saving changes:', error)
    }
  }

  const handleDiscardChanges = () => {
    setLocalTables(tables)
    setHasUnsavedChanges(false)
  }

  return (
    <div>
      <ControlsPanel>
        <FormGroup>
          <Label>Название стола</Label>
          <Input
            type="text"
            value={newTableName}
            onChange={(e) => setNewTableName(e.target.value)}
            placeholder="Введите название стола"
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Количество мест</Label>
          <Input
            type="number"
            min="1"
            max="20"
            value={newTableSeats}
            onChange={(e) => setNewTableSeats(Number(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <Label>Ширина (px)</Label>
          <Input
            type="number"
            min="50"
            max="300"
            value={newTableWidth}
            onChange={(e) => setNewTableWidth(Number(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <Label>Высота (px)</Label>
          <Input
            type="number"
            min="30"
            max="200"
            value={newTableHeight}
            onChange={(e) => setNewTableHeight(Number(e.target.value))}
          />
        </FormGroup>
        
        <div style={{ display: 'flex', alignItems: 'end', gap: '0.5rem' }}>
          {!isCreating ? (
            <Button 
              variant="primary" 
              onClick={startCreating}
              disabled={!newTableName.trim()}
            >
              Создать стол
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={cancelCreating}>
                Отмена
              </Button>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Кликните на канвасе для размещения стола
              </div>
            </>
          )}
        </div>
        
        {/* Кнопки сохранения изменений */}
        {hasUnsavedChanges && (
          <div style={{ display: 'flex', alignItems: 'end', gap: '0.5rem', marginLeft: '1rem' }}>
            <Button 
              variant="primary" 
              onClick={handleSaveChanges}
              style={{ background: '#10b981' }}
            >
              💾 Сохранить изменения
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleDiscardChanges}
            >
              ❌ Отменить изменения
            </Button>
          </div>
        )}
      </ControlsPanel>

      <CanvasContainer onClick={handleCanvasClick} data-canvas>
        {localTables.map(table => (
          <TableItemComponent
            key={table.id}
            table={table}
            onUpdate={(updatedTable) => {
              setLocalTables(prev => prev.map(t => 
                t.id === updatedTable.id ? updatedTable : t
              ))
              setHasUnsavedChanges(true)
            }}
            onDelete={onTableDelete}
            onDragStart={setDraggedTable}
            isDragging={draggedTable?.id === table.id}
          />
        ))}
        
        {isCreating && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: '500',
          }}>
            Режим создания стола
          </div>
        )}
      </CanvasContainer>

      <InfoPanel>
        <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
          Информация о столах
        </h4>
        {localTables.length === 0 ? (
          <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
            Столы не созданы. Используйте панель управления выше для создания столов.
          </div>
        ) : (
          localTables.map(table => (
            <TableInfo key={table.id}>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                {table.name}
              </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Мест: {table.seats} • Позиция: ({table.x}, {table.y}) •
              Размер: {table.width}×{table.height}px •
              Статус: {table.isActive ? 'Активен' : 'Неактивен'}
            </div>
            </TableInfo>
          ))
        )}
      </InfoPanel>
    </div>
  )
}

export default TableCanvas
