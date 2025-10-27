import React, { useState, useCallback, useMemo, useEffect } from 'react'

import { MenuType, MenuCategory, type MenuItem, menuApi } from '@/shared/api/menu'
// import { MenuSearch } from '@/features/menu-management'
import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(123, 97, 255, 0.3); }
  50% { box-shadow: 0 0 30px rgba(123, 97, 255, 0.6); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const MenuPageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(123, 97, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #e2e8f0;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const MenuLayout = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  margin: 0;
  padding: 2rem 0 0 0;
  min-height: 0;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const LeftPanel = styled.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PanelTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  
  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

const MenuTypeButton = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'rgba(255, 255, 255, 0.05)'
  };
  color: ${props => props.$active ? '#ffffff' : '#e2e8f0'};
  border: 1px solid ${props => props.$active 
    ? 'rgba(123, 97, 255, 0.5)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: left;
  backdrop-filter: blur(20px);
  
  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(255, 255, 255, 0.1)'
    };
    border-color: rgba(123, 97, 255, 0.3);
    /* transform: translateY(-2px); */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

const CategoriesContainer = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  
  &::after {
    content: '→';
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(123, 97, 255, 0.8);
    font-size: 1.5rem;
    font-weight: bold;
    pointer-events: none;
    animation: ${pulse} 2s ease-in-out infinite;
    
    @media (max-width: 768px) {
      right: 1rem;
      font-size: 1.2rem;
    }
  }
`;

const CategoriesScroll = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 0.8rem 1.5rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'rgba(255, 255, 255, 0.05)'
  };
  color: ${props => props.$active ? '#ffffff' : '#e2e8f0'};
  border: 1px solid ${props => props.$active 
    ? 'rgba(123, 97, 255, 0.5)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  white-space: nowrap;
  flex-shrink: 0;
  backdrop-filter: blur(20px);
  font-weight: 500;
  
  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(255, 255, 255, 0.1)'
    };
    border-color: rgba(123, 97, 255, 0.3);
    /* transform: translateY(-2px); */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }
`;

const MenuContent = styled.div`
  padding: 1rem 0;
`;

const MenuSection = styled.div`
  h2 {
    color: #ffffff;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MenuItemCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${slideIn} 0.8s ease-out both;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
  
  &:hover {
    /* transform: translateY(-8px); */
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(123, 97, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const MenuImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s ease;
  border-radius: 20px 20px 0 0;
  
  ${MenuItemCard}:hover & {
    transform: scale(1.05);
  }
  
  /* Fallback для изображений без src */
  &:not([src]), &[src=""], &[src*="undefined"], &[src*="null"] {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    content: "🍽️";
  }
`;

const MenuItemContent = styled.div`
  padding: 1.5rem;
`;

const MenuItemTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  line-height: 1.3;
`;

const MenuItemDescription = styled.p`
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const MenuItemPrice = styled.div`
  color: #10b981;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: right;
  margin-top: 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #94a3b8;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #e2e8f0;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #94a3b8;
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(123, 97, 255, 0.3);
    border-top: 3px solid #667eea;
    border-radius: 50%;
    animation: ${pulse} 1s linear infinite;
    margin: 0 auto 1rem;
  }
`;



const ErrorState = styled.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  
  p {
    color: #ef4444;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  button {
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    
    &:hover {
      background: #dc2626;
      transform: translateY(-2px);
    }
  }
`;



const MenuPage: React.FC = () => {
  // Моковые данные вместо API
  const mockMenuTypes: MenuType[] = [
    { id: 1, name: 'Основное меню', slug: 'main-menu', description: 'Основные блюда', sortOrder: 1, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 2, name: 'Барная карта', slug: 'bar-menu', description: 'Напитки и коктейли', sortOrder: 2, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 3, name: 'Десерты', slug: 'desserts', description: 'Сладкие блюда', sortOrder: 3, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 4, name: 'Закуски', slug: 'snacks', description: 'Легкие закуски', sortOrder: 4, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' }
  ]

  const mockCategories: MenuCategory[] = [
    { id: 1, name: 'Горячие блюда', slug: 'hot-dishes', description: 'Основные горячие блюда', menuTypeId: 1, sortOrder: 1, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 2, name: 'Салаты', slug: 'salads', description: 'Свежие салаты', menuTypeId: 1, sortOrder: 2, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 3, name: 'Супы', slug: 'soups', description: 'Горячие супы', menuTypeId: 1, sortOrder: 3, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 4, name: 'Коктейли', slug: 'cocktails', description: 'Алкогольные коктейли', menuTypeId: 2, sortOrder: 1, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 5, name: 'Вино', slug: 'wine', description: 'Винная карта', menuTypeId: 2, sortOrder: 2, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 6, name: 'Пиво', slug: 'beer', description: 'Пиво и крафт', menuTypeId: 2, sortOrder: 3, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 7, name: 'Торты', slug: 'cakes', description: 'Домашние торты', menuTypeId: 3, sortOrder: 1, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 8, name: 'Мороженое', slug: 'ice-cream', description: 'Мороженое и сорбеты', menuTypeId: 3, sortOrder: 2, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 9, name: 'Холодные закуски', slug: 'cold-snacks', description: 'Холодные закуски', menuTypeId: 4, sortOrder: 1, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 10, name: 'Горячие закуски', slug: 'hot-snacks', description: 'Горячие закуски', menuTypeId: 4, sortOrder: 2, isActive: true, createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' }
  ]

  const mockMenuItems: MenuItem[] = [
    // Горячие блюда
    { id: 1, name: 'Стейк Рибай', description: 'Сочный стейк из мраморной говядины', price: 1200, currency: 'RUB', categoryId: 1, allergens: [], weight: '300г', calories: 450, preparation: 'Средняя прожарка', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 2, name: 'Лосось на гриле', description: 'Филе лосося с овощами', price: 800, currency: 'RUB', categoryId: 1, allergens: ['рыба'], weight: '250г', calories: 320, preparation: 'На гриле', isPopular: false, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 3, name: 'Паста Карбонара', description: 'Классическая итальянская паста', price: 450, currency: 'RUB', categoryId: 1, allergens: ['глютен', 'молочные'], weight: '350г', calories: 520, preparation: 'Аль денте', isPopular: true, isActive: true, sortOrder: 3, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Салаты
    { id: 4, name: 'Цезарь', description: 'Салат с курицей и пармезаном', price: 350, currency: 'RUB', categoryId: 2, allergens: ['глютен', 'молочные'], weight: '200г', calories: 280, preparation: 'Свежий', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 5, name: 'Греческий', description: 'Салат с фетой и оливками', price: 280, currency: 'RUB', categoryId: 2, allergens: ['молочные'], weight: '180г', calories: 220, preparation: 'Свежий', isPopular: false, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Супы
    { id: 6, name: 'Борщ', description: 'Традиционный украинский борщ', price: 250, currency: 'RUB', categoryId: 3, allergens: [], weight: '400г', calories: 180, preparation: 'Горячий', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 7, name: 'Суп-пюре', description: 'Суп-пюре из грибов', price: 200, currency: 'RUB', categoryId: 3, allergens: ['глютен', 'молочные'], weight: '350г', calories: 150, preparation: 'Горячий', isPopular: false, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Коктейли
    { id: 8, name: 'Мохито', description: 'Классический коктейль с мятой', price: 350, currency: 'RUB', categoryId: 4, allergens: [], weight: '300мл', calories: 120, preparation: 'Со льдом', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 9, name: 'Маргарита', description: 'Коктейль с текилой и лаймом', price: 400, currency: 'RUB', categoryId: 4, allergens: [], weight: '200мл', calories: 180, preparation: 'Со льдом', isPopular: true, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 10, name: 'Пина Колада', description: 'Тропический коктейль', price: 380, currency: 'RUB', categoryId: 4, allergens: ['молочные'], weight: '250мл', calories: 250, preparation: 'Со льдом', isPopular: false, isActive: true, sortOrder: 3, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Вино
    { id: 11, name: 'Красное вино', description: 'Бордо, Франция', price: 120, currency: 'RUB', categoryId: 5, allergens: [], weight: '150мл', calories: 85, preparation: 'Комнатная температура', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 12, name: 'Белое вино', description: 'Шардоне, Италия', price: 110, currency: 'RUB', categoryId: 5, allergens: [], weight: '150мл', calories: 80, preparation: 'Охлажденное', isPopular: false, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Пиво
    { id: 13, name: 'Светлое пиво', description: 'Пиво местного производства', price: 150, currency: 'RUB', categoryId: 6, allergens: ['глютен'], weight: '500мл', calories: 200, preparation: 'Охлажденное', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 14, name: 'Темное пиво', description: 'Портер, 0.5л', price: 180, currency: 'RUB', categoryId: 6, allergens: ['глютен'], weight: '500мл', calories: 220, preparation: 'Охлажденное', isPopular: false, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Торты
    { id: 15, name: 'Тирамису', description: 'Итальянский десерт', price: 280, currency: 'RUB', categoryId: 7, allergens: ['глютен', 'молочные', 'яйца'], weight: '150г', calories: 380, preparation: 'Охлажденный', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 16, name: 'Чизкейк', description: 'Классический чизкейк', price: 250, currency: 'RUB', categoryId: 7, allergens: ['глютен', 'молочные', 'яйца'], weight: '120г', calories: 320, preparation: 'Охлажденный', isPopular: true, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Мороженое
    { id: 17, name: 'Ванильное мороженое', description: 'Домашнее мороженое', price: 120, currency: 'RUB', categoryId: 8, allergens: ['молочные'], weight: '100г', calories: 180, preparation: 'Замороженное', isPopular: false, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 18, name: 'Шоколадное мороженое', description: 'Мороженое с шоколадом', price: 140, currency: 'RUB', categoryId: 8, allergens: ['молочные'], weight: '100г', calories: 220, preparation: 'Замороженное', isPopular: true, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Холодные закуски
    { id: 19, name: 'Карпаччо', description: 'Тонко нарезанная говядина', price: 450, currency: 'RUB', categoryId: 9, allergens: [], weight: '120г', calories: 180, preparation: 'Холодное', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 20, name: 'Брускетта', description: 'Тосты с томатами', price: 180, currency: 'RUB', categoryId: 9, allergens: ['глютен'], weight: '100г', calories: 120, preparation: 'Свежая', isPopular: false, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    
    // Горячие закуски
    { id: 21, name: 'Кальмары в кляре', description: 'Жареные кальмары', price: 320, currency: 'RUB', categoryId: 10, allergens: ['глютен', 'морепродукты'], weight: '150г', calories: 280, preparation: 'Горячие', isPopular: true, isActive: true, sortOrder: 1, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
    { id: 22, name: 'Крылышки Буффало', description: 'Острые куриные крылышки', price: 280, currency: 'RUB', categoryId: 10, allergens: [], weight: '200г', calories: 350, preparation: 'Горячие', isPopular: true, isActive: true, sortOrder: 2, imageUrl: '/images/default-food.svg', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' }
  ]

  const [menuTypes, setMenuTypes] = useState<MenuType[]>([])
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedType, setSelectedType] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Загрузка данных меню при монтировании компонента
  useEffect(() => {
    const loadMenuData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        console.log('📋 Загружаем меню из API...')
        const [types, categoriesData, items] = await Promise.all([
          menuApi.getMenuTypes(),
          menuApi.getMenuCategories(),
          menuApi.getMenuItems()
        ])
        
        console.log('✅ Меню загружено:', {
          types: types.length,
          categories: categoriesData.length,
          items: items.length
        })
        
        setMenuTypes(types)
        setCategories(categoriesData)
        setMenuItems(items)
        
        // Устанавливаем первый тип меню по умолчанию
        if (types.length > 0 && !selectedType) {
          setSelectedType(types[0].id)
        }
      } catch (error) {
        console.error('❌ Ошибка загрузки меню:', error)
        setError('Ошибка загрузки меню. Используются демо-данные.')
        // Используем mock данные в случае ошибки
        setMenuTypes(mockMenuTypes)
        setCategories(mockCategories)
        setMenuItems(mockMenuItems)
        setSelectedType(1)
      } finally {
        setLoading(false)
      }
    }
    
    loadMenuData()
  }, [])

  // Фильтрация блюд только по выбранной категории
  const filteredItems = useMemo(() => {
    return menuItems
      .filter(item => selectedCategory ? item.categoryId === selectedCategory : true)
      .sort((a, b) => a.sortOrder - b.sortOrder)
  }, [menuItems, selectedCategory])

  return (
    <MenuPageContainer>
      <PageContainer>
        <PageTitle>Меню клуба</PageTitle>
        <PageSubtitle>
          Откройте для себя изысканные блюда и напитки в атмосфере клуба Frantsuz
        </PageSubtitle>
        
        {/* Отображение ошибки */}
        {error && (
          <ErrorState>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>
              Обновить страницу
            </button>
          </ErrorState>
        )}
        

        
        <MenuLayout>
          <LeftPanel>
            <PanelTitle>Типы меню</PanelTitle>
            {menuTypes.map((type) => (
              <MenuTypeButton
                key={type.id}
                $active={selectedType === type.id}
                onClick={() => {
                  setSelectedType(type.id)
                  // Автоматически выбираем первую категорию нового типа
                  const typeCategories = categories.filter(cat => cat.menuTypeId === type.id)
                  if (typeCategories.length > 0) {
                    setSelectedCategory(typeCategories[0].id)
                  }
                }}
              >
                {type.name}
              </MenuTypeButton>
            ))}
          </LeftPanel>

          <RightPanel>
            <CategoriesContainer>
              <CategoriesScroll>
                {categories
                  .filter(category => category.menuTypeId === selectedType)
                  .map((category) => (
                    <CategoryButton
                      key={category.id}
                      $active={selectedCategory === category.id}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </CategoryButton>
                  ))}
              </CategoriesScroll>
            </CategoriesContainer>

            <MenuContent>
              {filteredItems.length > 0 ? (
                <MenuSection>
                  <h2>
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <span style={{ fontSize: '0.9em', color: '#94a3b8', marginLeft: '1rem' }}>
                      ({filteredItems.length} блюд)
                    </span>
                  </h2>
                  <MenuGrid>
                    {filteredItems.map((item, index) => {
                      // Используем фото если оно есть, иначе моковую картинку
                      const imageSrc = (item.imageUrl && item.imageUrl.trim() !== '') 
                        ? item.imageUrl 
                        : '/images/default-food.svg'
                      
                      return (
                        <MenuItemCard key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
                          <MenuImage 
                            src={imageSrc} 
                            alt={item.name}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/default-food.svg';
                            }}
                          />
                          <MenuItemContent>
                            <MenuItemTitle>{item.name}</MenuItemTitle>
                            {item.description && (
                              <MenuItemDescription>{item.description}</MenuItemDescription>
                            )}
                            <MenuItemPrice>{item.price} ₽</MenuItemPrice>
                          </MenuItemContent>
                        </MenuItemCard>
                      );
                    })}
                  </MenuGrid>
                </MenuSection>
              ) : (
                <EmptyState>
                  <h3>Блюда не найдены</h3>
                  <p>В выбранной категории пока нет блюд</p>
                </EmptyState>
              )}
            </MenuContent>
          </RightPanel>
        </MenuLayout>
      </PageContainer>
    </MenuPageContainer>
  )
}

export default MenuPage