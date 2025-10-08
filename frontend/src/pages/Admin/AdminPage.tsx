import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuManagement } from '@/features/menu-management'
import { BilliardsPricing } from '@/features/billiards-pricing'
import { KaraokePricing } from '@/features/karaoke-pricing'
import { HookahList } from '@/features/hookah-management'
import { BoardGameList } from '@/features/board-games-management'
import { CarouselPhotosManager } from '@/features/carousel-management'
import { BanquetRequestsPage } from './BanquetRequestsPage'
import { banquetRequestsApi } from '@/shared/api/banquet-requests'
import { EventsManagement } from '@/features/events-management'
import { BookingsManagement } from '@/features/bookings-management'
import { BookingZonesManagement } from '@/features/booking-admin/components/BookingZonesManagement'
import { BookingTablesManagement } from '@/features/booking-admin/components/BookingTablesManagement'
import styled, { keyframes, css } from 'styled-components'

const SESSION_KEY = 'admin_session'


// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Main = styled.main`
  flex: 1;
  padding: 0;
`

const Header = styled.header`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`

const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 12px;
  color: #ff6b6b;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background: rgba(255, 107, 107, 0.2);
    border-color: rgba(255, 107, 107, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    
    span {
      display: none;
    }
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    gap: 0.5rem;
  }
`

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  font-size: 0.9rem;
`

const UserName = styled.span`
  font-weight: 500;
  color: #ffffff;
`

const Layout = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
`

const Sidebar = styled.div`
  width: 280px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  animation: ${css`slideIn`} 0.6s ease-out;
`

const SidebarHeader = styled.div`
  padding: 0 2rem 2rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`

const SidebarTitle = styled.h3`
  color: #a0a0a0;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.5rem 0;
`

const SidebarItem = styled.div<{ $active: boolean }>`
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${props => props.$active ? '#ffffff' : '#a0a0a0'};
  background: ${props => props.$active ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)' : 'transparent'};
  border-left: 3px solid ${props => props.$active ? '#667eea' : 'transparent'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0.25rem 1rem;
  border-radius: 0 12px 12px 0;
  font-weight: 500;
  position: relative;
  overflow: visible;

  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)' 
      : 'rgba(255, 255, 255, 0.05)'
    };
    color: #ffffff;
    transform: translateX(4px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`

const SidebarItemIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.1rem;
  opacity: 0.8;
`

const SidebarItemBadge = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  animation: ${css`pulse`} 2s infinite;
  
  @media (max-width: 768px) {
    min-width: 18px;
    height: 18px;
    font-size: 0.7rem;
    top: 0.25rem;
    right: 0.75rem;
  }
`

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  animation: ${css`fadeIn`} 0.6s ease-out;
  overflow-y: auto;
`

const ContentHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const ContentTitle = styled.h2`
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ContentSubtitle = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
`

const TabContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`

const TabButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const TabButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'transparent'
  };
  color: ${props => props.$active ? '#ffffff' : '#a0a0a0'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(255, 255, 255, 0.1)'
    };
    color: #ffffff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const ComingSoonCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  animation: ${css`pulse`} 2s infinite;
`

const ComingSoonIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`

const ComingSoonTitle = styled.h3`
  color: #a0a0a0;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`

const ComingSoonText = styled.p`
  color: #808080;
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
`

type AdminTab = 'booking-zones' | 'booking-tables' | 'menu' | 'bookings' | 'billiards' | 'karaoke' | 'banquet-requests' | 'hookah' | 'board-games'| 'events'| 'carousel-photos'

const tabs = [
  { key: 'booking-zones', label: 'Зоны бронирования', icon: '🏢' },
  { key: 'menu', label: 'Меню', icon: '🍽️' },
  { key: 'bookings', label: 'Бронирования', icon: '📅' },
  { key: 'billiards', label: 'Бильярд', icon: '🎱' },
  { key: 'karaoke', label: 'Караоке', icon: '🎤' },
  { key: 'banquet-requests', label: 'Заявки на банкеты', icon: '🎉' },
  { key: 'hookah', label: 'Кальян', icon: '💨' },
  { key: 'board-games', label: 'Настольные игры', icon: '🎲' },
  { key: 'events', label: 'Мероприятия', icon: '🎲' },
  { key: 'booking-tables', label: 'Управление столами', icon: '🪑' },
  { key: 'carousel-photos', label: 'Фотографии карусели', icon: '📸' }
]

export const AdminPage: React.FC = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<AdminTab>('booking-zones')
  const [pendingRequestsCount, setPendingRequestsCount] = useState(0)

  // Загружаем количество ожидающих заявок
  useEffect(() => {
    const fetchPendingRequestsCount = async () => {
      try {
        const stats = await banquetRequestsApi.getStats()
        if (stats.success) {
          setPendingRequestsCount(stats.data.pending)
        }
      } catch (error) {
        // Игнорируем ошибки загрузки статистики
      }
    }
    
    fetchPendingRequestsCount()
    
    // Обновляем каждые 30 секунд для актуальности
    const interval = setInterval(fetchPendingRequestsCount, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const handleLogout = () => {
    // Удаляем сессию
    sessionStorage.removeItem(SESSION_KEY)
    // Редирект на страницу логина
    navigate('/admin/login', { replace: true })
  }


  const renderContent = () => {
    switch (activeTab) {
      case 'booking-zones':
        return <BookingZonesManagement />
      case 'booking-tables':
        return <BookingTablesManagement />
      case 'menu':
        return <MenuManagement />
      case 'billiards':
        return <BilliardsPricing />
      case 'karaoke':
        return <KaraokePricing />
      case 'banquet-requests':
        return <BanquetRequestsPage onStatusUpdate={() => {
          // Обновляем счетчик при изменении статуса
          banquetRequestsApi.getStats().then(stats => {
            if (stats.success) {
              setPendingRequestsCount(stats.data.pending)
            }
          }).catch(() => {
            // Игнорируем ошибки обновления статистики
          })
        }} />
      case 'hookah':
        return <HookahList />
      case 'board-games':
        return <BoardGameList />
      case 'carousel-photos':
        return <CarouselPhotosManager />
      case 'bookings':
        return <BookingsManagement />
      case 'events':
        return <EventsManagement />
    }
  }

  const getTabDescription = () => {
    const descriptions = {
      'booking-zones': 'Создавайте зоны бронирования и управляйте столами',
      'booking-tables': 'Визуальное создание и управление столами в зонах',
      'menu': 'Редактируйте меню, категории и блюда',
      'billiards': 'Управляйте ценами и изображениями бильярда',
      'karaoke': 'Управляйте ценами и настройками караоке',
      'banquet-requests': 'Управляйте заявками на банкеты и мероприятия',
      'bookings': 'Управляйте бронированиями и резервациями',
      'hookah': 'Управляйте тарифами и особенностями кальяна',
      'board-games': 'Управляйте настольными играми и их ценами',
      'events': 'Управляйте мероприятиями',
      'carousel-photos': 'Управляйте фотографиями для галереи',
    }
    return descriptions[activeTab] || ''
  }

  return (
    <AdminPageContainer>
      <Main>
        <Header>
          <HeaderTitle>Панель администратора</HeaderTitle>
          <HeaderActions>
            <UserInfo>
              <UserAvatar>A</UserAvatar>
              <UserName>Администратор</UserName>
            </UserInfo>
            <LogoutButton onClick={handleLogout}>
              <span>🚪</span>
              <span>Выйти</span>
            </LogoutButton>
          </HeaderActions>
        </Header>
        
        <Layout>
          <Sidebar>
            <SidebarHeader>
              <SidebarTitle>Навигация</SidebarTitle>
            </SidebarHeader>
            {tabs.map(tab => (
              <SidebarItem
                key={tab.key}
                $active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key as AdminTab)}
              >
                <SidebarItemIcon>{tab.icon}</SidebarItemIcon>
                {tab.label}
                {tab.key === 'banquet-requests' && pendingRequestsCount > 0 && (
                  <SidebarItemBadge>
                    {pendingRequestsCount > 99 ? '99+' : pendingRequestsCount}
                  </SidebarItemBadge>
                )}
              </SidebarItem>
            ))}
          </Sidebar>
          
          <Content>
            <ContentHeader>
              <ContentTitle>{tabs.find(t => t.key === activeTab)?.label}</ContentTitle>
              <ContentSubtitle>{getTabDescription()}</ContentSubtitle>
            </ContentHeader>
            {renderContent()}
          </Content>
        </Layout>
      </Main>
    </AdminPageContainer>
  )
}



 