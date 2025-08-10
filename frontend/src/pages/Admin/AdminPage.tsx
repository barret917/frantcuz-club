import React, { useState } from 'react'
import { CreateZoneForm } from '@/features/create-zone'
import { ZoneCanvas } from '@/features/zone-constructor/components/ZoneCanvas'
import { ZoneSelector } from '@/features/zone-constructor/components/ZoneSelector'
import { MenuTypesTab } from '@/features/menu-management/components/MenuTypesTab'
import { MenuCategoriesTab } from '@/features/menu-management/components/MenuCategoriesTab'
import { MenuItemsTab } from '@/features/menu-management/components/MenuItemsTab'
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

type AdminTab = 'create-zone' | 'zone-constructor' | 'manage-zones' | 'menu' | 'bookings' | 'settings'

const tabs = [
  { key: 'create-zone', label: 'Создать зону' },
  { key: 'zone-constructor', label: 'Конструктор зоны' },
  { key: 'manage-zones', label: 'Управление зонами' },
  { key: 'menu', label: 'Меню' },
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
        return showCanvas ? (
          <ZoneCanvas 
            zoneId={selectedZone?.id || 0} 
            zoneName={selectedZone?.name}
          />
        ) : (
          <ZoneSelector
            zones={zones}
            onZoneSelect={handleZoneSelect}
            selectedZone={selectedZone}
            onContinue={handleContinueToCanvas}
          />
        )
      case 'manage-zones':
        return <div>Управление зонами (в разработке)</div>
      case 'menu':
        return <MenuManagement />
      case 'bookings':
        return <div>Бронирования (в разработке)</div>
      case 'settings':
        return <div>Настройки (в разработке)</div>
      default:
        return <CreateZoneForm />
    }
  }

  return (
    <AdminPageContainer>
      <Main>
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
            <Title>Панель администратора</Title>
            {renderContent()}
          </Content>
        </Layout>
      </Main>
    </AdminPageContainer>
  )
}

// Компонент управления меню
const MenuManagement: React.FC = () => {
  const [activeMenuTab, setActiveMenuTab] = useState<'types' | 'categories' | 'items'>('types')

  return (
    <div>
      <h2 style={{ color: '#ffd700', marginBottom: '1rem' }}>Управление меню</h2>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setActiveMenuTab('types')}
          style={{
            padding: '0.5rem 1rem',
            background: activeMenuTab === 'types' ? '#ffd700' : '#333',
            color: activeMenuTab === 'types' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Типы меню
        </button>
        <button
          onClick={() => setActiveMenuTab('categories')}
          style={{
            padding: '0.5rem 1rem',
            background: activeMenuTab === 'categories' ? '#ffd700' : '#333',
            color: activeMenuTab === 'categories' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Категории
        </button>
        <button
          onClick={() => setActiveMenuTab('items')}
          style={{
            padding: '0.5rem 1rem',
            background: activeMenuTab === 'items' ? '#ffd700' : '#333',
            color: activeMenuTab === 'items' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Блюда
        </button>
      </div>

      {activeMenuTab === 'types' && <MenuTypesTab />}
      {activeMenuTab === 'categories' && <MenuCategoriesTab />}
      {activeMenuTab === 'items' && <MenuItemsTab />}
    </div>
  )
}

 