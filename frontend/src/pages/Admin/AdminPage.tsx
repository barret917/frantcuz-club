import React, { useState } from 'react'
import { Header } from '@/widgets/Header'
import { CreateZoneForm } from '@/features/create-zone'
import { ZoneCanvas } from '@/features/zone-constructor/components/ZoneCanvas'
import { ZoneSelector } from '@/features/zone-constructor/components/ZoneSelector'
import { getZones } from '@/shared/api/zones'
import { Zone } from '@/shared/model/types'
import styled from 'styled-components'

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #262935;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 0;
`

const Sidebar = styled.div`
  width: 250px;
  background: #1a1a1a;
  padding: 2rem 0;
  border-right: 1px solid #333;
`

const SidebarItem = styled.div<{ $active: boolean }>`
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${props => props.$active ? '#ffd700' : '#fff'};
  background: ${props => props.$active ? '#333' : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    color: #ffd700;
  }
`

const Content = styled.div`
  flex: 1;
  padding: 2rem;
`

const Layout = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
`

const Title = styled.h1`
  color: #ffd700;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

type AdminTab = 'create-zone' | 'zone-constructor' | 'manage-zones' | 'bookings' | 'settings'

const tabs = [
  { key: 'create-zone', label: 'Создать зону' },
  { key: 'zone-constructor', label: 'Конструктор зоны' },
  { key: 'manage-zones', label: 'Управление зонами' },
  { key: 'bookings', label: 'Бронирования' },
  { key: 'settings', label: 'Настройки' }
]

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('create-zone')
  const [zones, setZones] = useState<Zone[]>([])
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null)
  const [showCanvas, setShowCanvas] = useState(false)

  // Загружаем зоны при монтировании компонента
  React.useEffect(() => {
    const fetchZones = async () => {
      try {
        const data = await getZones()
        setZones(data)
      } catch (error) {
        console.error('Ошибка загрузки зон:', error)
      }
    }
    fetchZones()
  }, [])

  const handleZoneSelect = (zone: Zone) => {
    setSelectedZone(zone)
  }

  const handleContinueToCanvas = () => {
    setShowCanvas(true)
  }

  const handleBackToSelector = () => {
    setShowCanvas(false)
    setSelectedZone(null)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'create-zone':
        return <CreateZoneForm />
      case 'zone-constructor':
        if (showCanvas && selectedZone) {
          return (
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <button 
                  onClick={handleBackToSelector}
                  style={{
                    background: 'transparent',
                    border: '1px solid #ffd700',
                    color: '#ffd700',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  ← Назад к выбору зоны
                </button>
              </div>
              <ZoneCanvas zoneId={selectedZone.id} zoneName={selectedZone.name} />
            </div>
          )
        } else {
          return (
            <ZoneSelector
              zones={zones}
              onZoneSelect={handleZoneSelect}
              selectedZone={selectedZone}
              onContinue={handleContinueToCanvas}
            />
          )
        }
      case 'manage-zones':
        return <div style={{ color: '#fff', textAlign: 'center' }}>Управление зонами (в разработке)</div>
      case 'bookings':
        return <div style={{ color: '#fff', textAlign: 'center' }}>Бронирования (в разработке)</div>
      case 'settings':
        return <div style={{ color: '#fff', textAlign: 'center' }}>Настройки (в разработке)</div>
      default:
        return <CreateZoneForm />
    }
  }

  return (
    <AdminPageContainer>
      <Header />
      
      <Main>
        <Title>Админ панель</Title>
        
        <Layout>
          <Sidebar>
            {tabs.map(tab => (
              <SidebarItem
                key={tab.key}
                $active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key as AdminTab)}
              >
                {tab.label}
              </SidebarItem>
            ))}
          </Sidebar>
          
          <Content>
            {renderContent()}
          </Content>
        </Layout>
      </Main>
    </AdminPageContainer>
  )
} 