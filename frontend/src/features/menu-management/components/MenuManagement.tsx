import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuTypesTab } from './MenuTypesTab'
import { MenuCategoriesTab } from './MenuCategoriesTab'
import { MenuItemsTab } from './MenuItemsTab'

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

type MenuTab = 'types' | 'categories' | 'items'

export const MenuManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>('types')

  const renderContent = () => {
    switch (activeTab) {
      case 'types':
        return <MenuTypesTab />
      case 'categories':
        return <MenuCategoriesTab />
      case 'items':
        return <MenuItemsTab />
      default:
        return <MenuTypesTab />
    }
  }

  return (
    <Container>
      <TabsContainer>
        <TabButton 
          $active={activeTab === 'types'} 
          onClick={() => setActiveTab('types')}
        >
          Типы меню
        </TabButton>
        <TabButton 
          $active={activeTab === 'categories'} 
          onClick={() => setActiveTab('categories')}
        >
          Категории
        </TabButton>
        <TabButton 
          $active={activeTab === 'items'} 
          onClick={() => setActiveTab('items')}
        >
          Блюда
        </TabButton>
      </TabsContainer>

      {renderContent()}
    </Container>
  )
} 