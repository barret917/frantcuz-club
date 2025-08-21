import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { boardGamesApi, BoardGame } from '@/shared/api/board-games'
import { BoardGameForm } from './BoardGameForm'

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

const BoardGameGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`

const BoardGameCard = styled.div`
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

const BoardGameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const BoardGameInfo = styled.div`
  flex: 1;
`

const BoardGameName = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
`

const BoardGamePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 0.5rem;
`

const BoardGameDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
`

const BoardGameDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`

const DetailIcon = styled.span`
  font-size: 1rem;
`

const BoardGameActions = styled.div`
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

const NoBoardGames = styled.div`
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

export const BoardGameList: React.FC = () => {
  const [boardGames, setBoardGames] = useState<BoardGame[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingBoardGame, setEditingBoardGame] = useState<BoardGame | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchBoardGames = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await boardGamesApi.getBoardGames()
      if (response.success) {
        setBoardGames(response.data)
      } else {
        setError(response.error || 'Ошибка загрузки игр')
      }
    } catch (err: any) {
      setError('Ошибка при загрузке настольных игр')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBoardGames()
  }, [])

  const handleEdit = (boardGame: BoardGame) => {
    setEditingBoardGame(boardGame)
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить эту игру?')) {
      try {
        await boardGamesApi.deleteBoardGame(id)
        await fetchBoardGames()
      } catch (error) {
        console.error('Ошибка при удалении игры:', error)
      }
    }
  }

  const handleFormSuccess = () => {
    setShowForm(false)
    setEditingBoardGame(null)
    fetchBoardGames()
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingBoardGame(null)
  }

  if (showForm) {
    return (
      <BoardGameForm
        boardGame={editingBoardGame || undefined}
        onSuccess={handleFormSuccess}
        onCancel={handleCancel}
      />
    )
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>Управление настольными играми</ListTitle>
        <AddButton onClick={() => setShowForm(true)}>
          + Добавить игру
        </AddButton>
      </ListHeader>

      {isLoading ? (
        <LoadingMessage>Загрузка игр...</LoadingMessage>
      ) : error ? (
        <div style={{ color: '#ef4444', textAlign: 'center', padding: '2rem' }}>
          {error}
        </div>
      ) : boardGames.length > 0 ? (
        <BoardGameGrid>
          {boardGames.map((boardGame) => (
            <BoardGameCard key={boardGame.id}>
              <BoardGameHeader>
                <BoardGameInfo>
                  <BoardGameName>{boardGame.name}</BoardGameName>
                  <BoardGamePrice>{boardGame.price}₽</BoardGamePrice>
                  {boardGame.description && (
                    <BoardGameDescription>{boardGame.description}</BoardGameDescription>
                  )}
                  <BoardGameDetails>
                    {boardGame.duration && (
                      <DetailItem>
                        <DetailIcon>⏱️</DetailIcon>
                        {boardGame.duration}
                      </DetailItem>
                    )}
                    {boardGame.players && (
                      <DetailItem>
                        <DetailIcon>👥</DetailIcon>
                        {boardGame.players}
                      </DetailItem>
                    )}
                    {boardGame.difficulty && (
                      <DetailItem>
                        <DetailIcon>🧠</DetailIcon>
                        {boardGame.difficulty}
                      </DetailItem>
                    )}
                    {boardGame.category && (
                      <DetailItem>
                        <DetailIcon>🏷️</DetailIcon>
                        {boardGame.category}
                      </DetailItem>
                    )}
                  </BoardGameDetails>
                </BoardGameInfo>
                <BoardGameActions>
                  <ActionButton $variant="edit" onClick={() => handleEdit(boardGame)}>
                    ✏️
                  </ActionButton>
                  <ActionButton $variant="delete" onClick={() => handleDelete(boardGame.id)}>
                    🗑️
                  </ActionButton>
                </BoardGameActions>
              </BoardGameHeader>
            </BoardGameCard>
          ))}
        </BoardGameGrid>
      ) : (
        <NoBoardGames>
          Настольные игры не найдены. Создайте первую игру!
        </NoBoardGames>
      )}
    </ListContainer>
  )
} 