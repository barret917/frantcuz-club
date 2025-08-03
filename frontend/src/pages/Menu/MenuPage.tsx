import React, { useState } from 'react'
import { Header } from '@/widgets/Header'
import { Container } from '@/shared/ui/Container'
import styled from 'styled-components'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
}

interface MenuData {
  [key: string]: MenuItem[]
}

const MenuPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

const CategoriesContainer = styled.div`
  padding: 1rem 0;
  // background: #1a1a1a;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 10;
`

const CategoriesScroll = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 0.8rem 1.5rem;
  background: ${props => props.$active ? '#ffd700' : 'transparent'};
  color: ${props => props.$active ? '#000' : '#fff'};
  border: 1px solid ${props => props.$active ? '#ffd700' : '#333'};
  border-radius: 25px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: ${props => props.$active ? '#ffd700' : '#333'};
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`

const MenuContent = styled.div`
  padding: 2rem 0;
`

const MenuSection = styled.div`
  margin-bottom: 2rem;
  
  h2 {
    color: #ffd700;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const MenuItem = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`

const MenuImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const MenuItemContent = styled.div`
  padding: 1.5rem;
`

const MenuItemTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const MenuItemDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`

const MenuItemPrice = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffd700;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const categories = [
  'Все блюда',
  'Холодные закуски', 
  'Салаты',
  'Горячие закуски',
  'Первые блюда',
  'Горячие блюда',
  'Гарнир',
  'Пицца',
  'Хачапури',
  'Закуски к пиву',
  'Блюда для большой компании',
  'Блюда на мангале',
  'Соусы',
  'Хлеб',
  'Десерты'
]

// Пример данных меню
const menuData: MenuData = {
  'Все блюда': [
    {
      id: 1,
      name: 'Стейк Рибай',
      description: 'Сочный стейк из говядины с овощами гриль',
      price: '1200 ₽',
      image: 'https://via.placeholder.com/300x200/ffd700/000?text=Стейк'
    },
    {
      id: 2,
      name: 'Цезарь с курицей',
      description: 'Классический салат с куриным филе',
      price: '450 ₽',
      image: 'https://via.placeholder.com/300x200/ffd700/000?text=Салат'
    }
  ],
  'Холодные закуски': [
    {
      id: 3,
      name: 'Карпаччо из говядины',
      description: 'Тонко нарезанная говядина с оливковым маслом',
      price: '650 ₽',
      image: 'https://via.placeholder.com/300x200/ffd700/000?text=Карпаччо'
    }
  ],
  'Салаты': [
    {
      id: 4,
      name: 'Греческий салат',
      description: 'Свежие овощи с фетой и оливками',
      price: '380 ₽',
      image: 'https://via.placeholder.com/300x200/ffd700/000?text=Греческий'
    }
  ]
}

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Все блюда')

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }

  const getMenuItems = (): MenuItem[] => {
    if (activeCategory === 'Все блюда') {
      return Object.values(menuData).flat()
    }
    return menuData[activeCategory] || []
  }

  return (
    <MenuPageContainer>
      <Header />
      
      <Main>
        <CategoriesContainer>
          <Container>
            <CategoriesScroll>
              {categories.map(category => (
                <CategoryButton
                  key={category}
                  $active={activeCategory === category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </CategoryButton>
              ))}
            </CategoriesScroll>
          </Container>
        </CategoriesContainer>

        <Container>
          <MenuContent>
            <MenuSection>
              <h2>{activeCategory}</h2>
                             <MenuGrid>
                 {getMenuItems().map((item: MenuItem) => (
                   <MenuItem key={item.id}>
                     <MenuImage src={item.image} alt={item.name} />
                     <MenuItemContent>
                       <MenuItemTitle>{item.name}</MenuItemTitle>
                       <MenuItemDescription>{item.description}</MenuItemDescription>
                       <MenuItemPrice>{item.price}</MenuItemPrice>
                     </MenuItemContent>
                   </MenuItem>
                 ))}
               </MenuGrid>
            </MenuSection>
          </MenuContent>
        </Container>
      </Main>
    </MenuPageContainer>
  )
} 