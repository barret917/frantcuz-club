import React, { useState, useEffect } from 'react'
import { Header } from '@/widgets/Header'
import { Container } from '@/shared/ui/Container'
import { menuApi, MenuType, MenuCategory, type MenuItem } from '@/shared/api/menu'
import styled from 'styled-components'

const MenuPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

const MenuLayout = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 0; /* Важно для flex-контейнера */
  
  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`

const LeftPanel = styled.div`
  width: 250px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const MenuTypeButton = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${props => props.$active ? '#ffd700' : 'transparent'};
  color: ${props => props.$active ? '#000' : '#fff'};
  border: 1px solid ${props => props.$active ? '#ffd700' : '#333'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: left;
  
  &:hover {
    background: ${props => props.$active ? '#ffd700' : '#333'};
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`

const RightPanel = styled.div`
  flex: 1;
  min-width: 0; /* Важно для предотвращения переполнения */
  overflow: hidden; /* Предотвращает вылетание контента */
`

const CategoriesContainer = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
`

const CategoriesScroll = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  /* Скрываем скроллбар для WebKit браузеров */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Для Firefox */
  scrollbar-width: none;
  
  /* Для IE и Edge */
  -ms-overflow-style: none;
`

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background: ${props => props.$active ? '#ffd700' : 'transparent'};
  color: ${props => props.$active ? '#000' : '#fff'};
  border: 1px solid ${props => props.$active ? '#ffd700' : '#555'};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: ${props => props.$active ? '#ffd700' : '#555'};
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`

const MenuContent = styled.div`
  padding: 2rem 0;
`

const MenuSection = styled.div`
  h2 {
    color: #ffd700;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const MenuItem = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #333;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
  }
`

const MenuImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #333;
`

const MenuItemContent = styled.div`
  padding: 1.5rem;
`

const MenuItemTitle = styled.h3`
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

const MenuItemDescription = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  min-height: 2.7rem;
`

const MenuItemPrice = styled.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: right;
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffd700;
  font-size: 1.2rem;
`

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #dc3545;
  font-size: 1.2rem;
  text-align: center;
`

export const MenuPage: React.FC = () => {
  const [menuTypes, setMenuTypes] = useState<MenuType[]>([])
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [activeMenuType, setActiveMenuType] = useState<MenuType | null>(null)
  const [activeCategory, setActiveCategory] = useState<MenuCategory | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadMenuData()
  }, [])

  const loadMenuData = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const fullMenu = await menuApi.getFullMenu()
      setMenuTypes(fullMenu.types.filter(type => type.isActive))
      setCategories(fullMenu.categories.filter(cat => cat.isActive))
      setMenuItems(fullMenu.items.filter(item => item.isActive))
      
      // Устанавливаем первый активный тип меню
      if (fullMenu.types.filter(type => type.isActive).length > 0) {
        setActiveMenuType(fullMenu.types.filter(type => type.isActive)[0])
      }
    } catch (err) {
      console.error('Ошибка загрузки меню:', err)
      setError('Не удалось загрузить меню. Пожалуйста, попробуйте позже.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleMenuTypeClick = (menuType: MenuType) => {
    setActiveMenuType(menuType)
    // Сбрасываем активную категорию
    setActiveCategory(null)
  }

  const handleCategoryClick = (category: MenuCategory) => {
    setActiveCategory(category)
  }

  const getCategoriesForMenuType = (menuTypeId: number): MenuCategory[] => {
    return categories.filter(cat => cat.menuTypeId === menuTypeId)
  }

  const getMenuItemsForCategory = (categoryId: number): MenuItem[] => {
    return menuItems.filter(item => item.categoryId === categoryId)
  }

  const getAllMenuItemsForMenuType = (menuTypeId: number): MenuItem[] => {
    const categoryIds = getCategoriesForMenuType(menuTypeId).map(cat => cat.id)
    return menuItems.filter(item => categoryIds.includes(item.categoryId))
  }

  const formatPrice = (price: number): string => {
    return `${price} ₽`
  }

  if (isLoading) {
    return (
      <MenuPageContainer>
        <Header />
        <Main>
          <LoadingSpinner>Загрузка меню...</LoadingSpinner>
        </Main>
      </MenuPageContainer>
    )
  }

  if (error) {
    return (
      <MenuPageContainer>
        <Header />
        <Main>
          <ErrorMessage>{error}</ErrorMessage>
        </Main>
      </MenuPageContainer>
    )
  }

  if (menuTypes.length === 0) {
    return (
      <MenuPageContainer>
        <Header />
        <Main>
          <ErrorMessage>Меню пока не доступно</ErrorMessage>
        </Main>
      </MenuPageContainer>
    )
  }

  const currentCategories = activeMenuType 
    ? getCategoriesForMenuType(activeMenuType.id)
    : []

  const currentItems = activeCategory
    ? getMenuItemsForCategory(activeCategory.id)
    : activeMenuType
    ? getAllMenuItemsForMenuType(activeMenuType.id)
    : []

  return (
    <MenuPageContainer>
      <Header />
      
      <Main>
        <MenuLayout>
          <LeftPanel>
            {menuTypes.map(menuType => (
              <MenuTypeButton
                key={menuType.id}
                $active={activeMenuType?.id === menuType.id}
                onClick={() => handleMenuTypeClick(menuType)}
              >
                {menuType.name}
              </MenuTypeButton>
            ))}
          </LeftPanel>

          <RightPanel>
            {currentCategories.length > 0 && (
              <CategoriesContainer>
                <CategoriesScroll>
                  <CategoryButton
                    $active={activeCategory === null}
                    onClick={() => setActiveCategory(null)}
                  >
                    Все блюда
                  </CategoryButton>
                  {currentCategories.map(category => (
                    <CategoryButton
                      key={category.id}
                      $active={activeCategory?.id === category.id}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.name}
                    </CategoryButton>
                  ))}
                </CategoriesScroll>
              </CategoriesContainer>
            )}

            <MenuContent>
              <MenuSection>
                <h2>
                  {activeCategory 
                    ? activeCategory.name 
                    : activeMenuType 
                    ? `${activeMenuType.name} - Все блюда`
                    : 'Меню'
                  }
                </h2>
                <MenuGrid>
                  {currentItems.map((item) => (
                    <MenuItem key={item.id}>
                      <MenuImage 
                        src={item.imageUrl || 'https://via.placeholder.com/300x200/333/666?text=Фото'} 
                        alt={item.name} 
                      />
                      <MenuItemContent>
                        <MenuItemTitle>{item.name}</MenuItemTitle>
                        <MenuItemDescription>
                          {item.description || 'Описание блюда'}
                        </MenuItemDescription>
                        <MenuItemPrice>{formatPrice(item.price)}</MenuItemPrice>
                      </MenuItemContent>
                    </MenuItem>
                  ))}
                </MenuGrid>
                {currentItems.length === 0 && (
                  <div style={{ textAlign: 'center', color: '#ccc', padding: '2rem' }}>
                    В этой категории пока нет блюд
                  </div>
                )}
              </MenuSection>
            </MenuContent>
          </RightPanel>
        </MenuLayout>
      </Main>
    </MenuPageContainer>
  )
}