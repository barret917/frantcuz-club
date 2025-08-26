import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CreateHallForm } from './CreateHallForm'
import { ZoneManager } from './ZoneManager'
import { getHalls, Hall } from '@/shared/api/halls'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const TabButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)' 
    : 'transparent'
  };
  color: ${props => props.$active ? '#ffffff' : '#a0a0a0'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)' 
      : 'rgba(255, 255, 255, 0.1)'
    };
    color: #ffffff;
    transform: translateY(-1px);
  }
`

const HallsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const HallCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.3);
  }
`

const HallImage = styled.div<{ $imageUrl?: string }>`
  width: 100%;
  height: 200px;
  background: ${props => props.$imageUrl 
    ? `url(${props.$imageUrl}) center/cover` 
    : 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)'
  };
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  
  ${props => !props.$imageUrl && `
    &::before {
      content: '🏢';
    }
  `}
`

const HallName = styled.h3`
  color: #fff;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
`

const HallType = styled.div`
  color: #667eea;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`

const HallDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
`

const HallStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const ZonesCount = styled.div`
  color: #22c55e;
  font-size: 0.9rem;
  font-weight: 500;
`

const TablesCount = styled.div`
  color: #f59e0b;
  font-size: 0.9rem;
  font-weight: 500;
`

const HallActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  background: ${props => props.$variant === 'primary' 
    ? 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  color: white;
  border: 1px solid ${props => props.$variant === 'primary' 
    ? 'transparent' 
    : 'rgba(255, 255, 255, 0.2)'
  };
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
`

const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`

const EmptyStateTitle = styled.h3`
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

const EmptyStateText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
`

type TabType = 'list' | 'create' | 'zones'

export const HallsManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('list')
  const [halls, setHalls] = useState<Hall[]>([])
  const [selectedHall, setSelectedHall] = useState<Hall | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadHalls()
  }, [])

  const loadHalls = async () => {
    try {
      setIsLoading(true)
      const hallsData = await getHalls()
      setHalls(hallsData)
    } catch (error) {
      console.error('Ошибка загрузки залов:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleHallCreated = () => {
    loadHalls()
    setActiveTab('list')
  }

  const handleManageZones = (hall: Hall) => {
    setSelectedHall(hall)
    setActiveTab('zones')
  }

  const handleBackToList = () => {
    setActiveTab('list')
    setSelectedHall(null)
  }

  const getHallTypeLabel = (type: string) => {
    const typeLabels: Record<string, string> = {
      restaurant: 'Ресторан',
      karaoke: 'Караоке',
      billiards: 'Бильярд',
      disco: 'Диско-бар',
      playstation: 'Playstation',
      bowling: 'Боулинг',
      spa: 'SPA',
      cinema: 'Кинотеатр',
      banquet: 'Банкетный зал',
      custom: 'Другое'
    }
    return typeLabels[type] || type
  }

  const getTotalTables = (hall: Hall) => {
    return hall.zones.reduce((total, zone) => {
      return total + zone.items.filter(item => item.type === 'table').length
    }, 0)
  }

  if (activeTab === 'create') {
    return (
      <Container>
        <TabsContainer>
          <TabButton $active={false} onClick={handleBackToList}>
            ← Назад к списку
          </TabButton>
          <TabButton $active={true}>
            Создание зала
          </TabButton>
        </TabsContainer>
        <CreateHallForm onHallCreated={handleHallCreated} />
      </Container>
    )
  }

  if (activeTab === 'zones' && selectedHall) {
    return (
      <Container>
        <TabsContainer>
          <TabButton $active={false} onClick={handleBackToList}>
            ← Назад к списку
          </TabButton>
          <TabButton $active={true}>
            Управление зонами: {selectedHall.name}
          </TabButton>
        </TabsContainer>
        <ZoneManager hallId={selectedHall.id} />
      </Container>
    )
  }

  return (
    <Container>
      <TabsContainer>
        <TabButton $active={activeTab === 'list'} onClick={() => setActiveTab('list')}>
          Список залов
        </TabButton>
        <TabButton $active={activeTab === 'create'} onClick={() => setActiveTab('create')}>
          + Создать зал
        </TabButton>
      </TabsContainer>

      {activeTab === 'list' && (
        <>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              Загрузка залов...
            </div>
          ) : halls.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>🏢</EmptyStateIcon>
              <EmptyStateTitle>Залов пока нет</EmptyStateTitle>
              <EmptyStateText>
                Создайте первый зал для вашего заведения. 
                В каждом зале можно создать несколько зон с разными типами столов.
              </EmptyStateText>
            </EmptyState>
          ) : (
            <HallsList>
              {halls.map(hall => (
                <HallCard key={hall.id}>
                  <HallImage $imageUrl={hall.imageUrl} />
                  <HallName>{hall.name}</HallName>
                  <HallType>{getHallTypeLabel(hall.type)}</HallType>
                  {hall.description && (
                    <HallDescription>{hall.description}</HallDescription>
                  )}
                  
                  <HallStats>
                    <ZonesCount>
                      🏷️ {hall.zones.length} зон
                    </ZonesCount>
                    <TablesCount>
                      🪑 {getTotalTables(hall)} столов
                    </TablesCount>
                  </HallStats>
                  
                  <HallActions>
                    <ActionButton onClick={() => handleManageZones(hall)}>
                      Управлять зонами
                    </ActionButton>
                  </HallActions>
                </HallCard>
              ))}
            </HallsList>
          )}
        </>
      )}
    </Container>
  )
} 