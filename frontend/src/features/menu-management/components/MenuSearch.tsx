import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

interface MenuSearchProps {
  onSearch: (filters: {
    searchQuery: string
    priceRange: { min: number; max: number }
    allergens: string[]
    isPopular: boolean | null
  }) => void
  onReset: () => void
}

const SearchContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const SearchRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const SearchInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: #fff;
  font-size: 1rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
`

const PriceRangeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const PriceInput = styled.input`
  width: 120px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #fff;
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
  }
`

const PriceLabel = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  white-space: nowrap;
`

const FilterRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const FilterButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => $active ? '#7b61ff' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${({ $active }) => $active ? '#7b61ff' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: ${({ $active }) => $active ? '#8b71ff' : 'rgba(255, 255, 255, 0.2)'};
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SearchButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`

const ResetButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const allergens = [
  'глютен', 'молоко', 'яйца', 'рыба', 'морепродукты', 
  'орехи', 'арахис', 'соя', 'сельдерей', 'горчица', 
  'кунжут', 'сульфиты', 'люпин', 'моллюски'
]

export const MenuSearch: React.FC<MenuSearchProps> = ({ onSearch, onReset }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])
  const [isPopular, setIsPopular] = useState<boolean | null>(null)

  const handleSearch = useCallback(() => {
    onSearch({
      searchQuery,
      priceRange,
      allergens: selectedAllergens,
      isPopular
    })
  }, [searchQuery, priceRange, selectedAllergens, isPopular, onSearch])

  const handleReset = useCallback(() => {
    setSearchQuery('')
    setPriceRange({ min: 0, max: 10000 })
    setSelectedAllergens([])
    setIsPopular(null)
    onReset()
  }, [onReset])

  const toggleAllergen = useCallback((allergen: string) => {
    setSelectedAllergens(prev => 
      prev.includes(allergen) 
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    )
  }, [])

  const togglePopular = useCallback(() => {
    setIsPopular(prev => {
      if (prev === null) return true
      if (prev === true) return false
      return null
    })
  }, [])

  return (
    <SearchContainer>
      <SearchRow>
        <SearchInput
          type="text"
          placeholder="Поиск по названию или описанию блюда..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </SearchRow>

      <SearchRow>
        <PriceRangeContainer>
          <PriceLabel>Цена от:</PriceLabel>
          <PriceInput
            type="number"
            min="0"
            max="10000"
            value={priceRange.min}
            onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
          />
          <PriceLabel>до:</PriceLabel>
          <PriceInput
            type="number"
            min="0"
            max="10000"
            value={priceRange.max}
            onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
          />
          <PriceLabel>₽</PriceLabel>
        </PriceRangeContainer>
      </SearchRow>

      <FilterRow>
        <FilterButton
          $active={isPopular === true}
          onClick={togglePopular}
        >
          {isPopular === true ? '★' : '☆'} Популярные
        </FilterButton>
        
        <FilterButton
          $active={isPopular === false}
          onClick={togglePopular}
        >
          {isPopular === false ? '★' : '☆'} Все блюда
        </FilterButton>
      </FilterRow>

      <FilterRow>
        {allergens.map(allergen => (
          <FilterButton
            key={allergen}
            $active={selectedAllergens.includes(allergen)}
            onClick={() => toggleAllergen(allergen)}
          >
            {selectedAllergens.includes(allergen) ? '✓' : '○'} {allergen}
          </FilterButton>
        ))}
      </FilterRow>

      <ActionButtons>
        <SearchButton onClick={handleSearch}>
          🔍 Поиск
        </SearchButton>
        <ResetButton onClick={handleReset}>
          ↺ Сбросить
        </ResetButton>
      </ActionButtons>
    </SearchContainer>
  )
} 