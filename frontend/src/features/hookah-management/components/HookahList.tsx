import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { hookahApi, Hookah } from '@/shared/api/hookah'
import { HookahForm } from './HookahForm'

const ListContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const ListTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
`

const AddButton = styled.button`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(16, 185, 129, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const HookahGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`

const HookahCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(102, 126, 234, 0.3);
  }
`

const HookahHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const HookahInfo = styled.div`
  flex: 1;
`

const HookahName = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
`

const HookahPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 0.5rem;
`

const HookahDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
`

const HookahFeatures = styled.div`
  margin-bottom: 1rem;
`

const FeatureTag = styled.span`
  display: inline-block;
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  margin: 0.2rem;
  font-size: 0.9rem;
`

const HookahActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ActionButton = styled.button<{ $variant: 'edit' | 'delete' }>`
  background: ${({ $variant }) => 
    $variant === 'edit' 
      ? 'linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)'
      : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
  };
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const NoHookahs = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #667eea;
  font-size: 1.2rem;
`

export const HookahList: React.FC = () => {
  const [hookahs, setHookahs] = useState<Hookah[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingHookah, setEditingHookah] = useState<Hookah | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchHookahs = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await hookahApi.getHookahs()
      if (response.success) {
        setHookahs(response.data)
      } else {
        setError(response.error || 'Ошибка загрузки тарифов')
      }
    } catch (err: any) {
      setError('Ошибка при загрузке тарифов кальяна')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchHookahs()
  }, [])

  const handleEdit = (hookah: Hookah) => {
    setEditingHookah(hookah)
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот тариф?')) {
      try {
        await hookahApi.deleteHookah(id)
        await fetchHookahs()
      } catch (error) {
        console.error('Ошибка при удалении тарифа:', error)
      }
    }
  }

  const handleFormSuccess = () => {
    setShowForm(false)
    setEditingHookah(null)
    fetchHookahs()
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingHookah(null)
  }

  if (showForm) {
    return (
      <HookahForm
        hookah={editingHookah || undefined}
        onSuccess={handleFormSuccess}
        onCancel={handleCancel}
      />
    )
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>Управление тарифами кальяна</ListTitle>
        <AddButton onClick={() => setShowForm(true)}>
          + Добавить тариф
        </AddButton>
      </ListHeader>

      {isLoading ? (
        <LoadingMessage>Загрузка тарифов...</LoadingMessage>
      ) : error ? (
        <div style={{ color: '#ef4444', textAlign: 'center', padding: '2rem' }}>
          {error}
        </div>
      ) : hookahs.length > 0 ? (
        <HookahGrid>
          {hookahs.map((hookah) => (
            <HookahCard key={hookah.id}>
              <HookahHeader>
                <HookahInfo>
                  <HookahName>{hookah.name}</HookahName>
                  <HookahPrice>{hookah.price}₽</HookahPrice>
                  {hookah.description && (
                    <HookahDescription>{hookah.description}</HookahDescription>
                  )}
                  {hookah.features.length > 0 && (
                    <HookahFeatures>
                      {hookah.features.map((feature, index) => (
                        <FeatureTag key={index}>{feature}</FeatureTag>
                      ))}
                    </HookahFeatures>
                  )}
                </HookahInfo>
                <HookahActions>
                  <ActionButton $variant="edit" onClick={() => handleEdit(hookah)}>
                    ✏️
                  </ActionButton>
                  <ActionButton $variant="delete" onClick={() => handleDelete(hookah.id)}>
                    🗑️
                  </ActionButton>
                </HookahActions>
              </HookahHeader>
            </HookahCard>
          ))}
        </HookahGrid>
      ) : (
        <NoHookahs>
          Тарифы кальяна не найдены. Создайте первый тариф!
        </NoHookahs>
      )}
    </ListContainer>
  )
} 