import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { banquetRequestsApi, BanquetRequest, BanquetRequestStats } from '@/shared/api/banquet-requests'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0f0f23;
  color: #ffffff;
  padding: 2rem 0;
  
  /* Стилизация скроллбара */
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 6px;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  /* Стилизация скроллбара */
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 6px;
  }
`

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`

const StatCard = styled.div<{ $status?: string }>`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  ${({ $status }) => {
    switch ($status) {
      case 'pending':
        return 'border-color: #fbbf24; box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);'
      case 'approved':
        return 'border-color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);'
      case 'rejected':
        return 'border-color: #ef4444; box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);'
      case 'completed':
        return 'border-color: #3b82f6; box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);'
      default:
        return ''
    }
  }}
`

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const FiltersSection = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`

const FiltersTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 1rem;
`

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FilterLabel = styled.label`
  font-size: 0.9rem;
  color: #e2e8f0;
  font-weight: 500;
`

const FilterInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const FilterSelect = styled.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #7b61ff;
  }
  
  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`

const TableContainer = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  background: rgba(255, 255, 255, 0.05);
`

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #fbbf24;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`

const TableRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background-color 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`

const StatusBadge = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  
  ${({ $status }) => {
    switch ($status) {
      case 'pending':
        return 'background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3);'
      case 'approved':
        return 'background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);'
      case 'rejected':
        return 'background: rgba(239, 68, 68, 0.2); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.3);'
      case 'completed':
        return 'background: rgba(59, 130, 246, 0.2); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.3);'
      default:
        return 'background: rgba(255, 255, 255, 0.1); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.2);'
    }
  }}
`

const ActionButton = styled.button<{ $variant?: 'primary' | 'danger' }>`
  background: ${({ $variant }) => 
    $variant === 'danger' 
      ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`

const PageButton = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) => 
    $active 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'rgba(255, 255, 255, 0.1)'
  };
  color: ${({ $active }) => $active ? '#ffffff' : '#e2e8f0'};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ $active }) => 
      $active 
        ? 'linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%)'
        : 'rgba(255, 255, 255, 0.15)'
    };
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #94a3b8;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #94a3b8;
`

interface BanquetRequestsPageProps {
  onStatusUpdate?: () => void
}

export const BanquetRequestsPage: React.FC<BanquetRequestsPageProps> = ({ onStatusUpdate }) => {
  const [requests, setRequests] = useState<BanquetRequest[]>([])
  const [stats, setStats] = useState<BanquetRequestStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState({
    status: 'all',
    search: ''
  })

  // Загрузка данных
  useEffect(() => {
    loadData()
  }, [currentPage, filters])

  const loadData = async () => {
    try {
      setLoading(true)
      
      const [requestsResponse, statsResponse] = await Promise.all([
        banquetRequestsApi.getAll({
          page: currentPage,
          limit: 20,
          status: filters.status === 'all' ? undefined : filters.status,
          search: filters.search || undefined
        }),
        banquetRequestsApi.getStats()
      ])
      
      if (requestsResponse.success) {
        setRequests(requestsResponse.data.requests)
        setTotalPages(requestsResponse.data.pagination.totalPages)
      }
      
      if (statsResponse.success) {
        setStats(statsResponse.data)
      }
    } catch (error) {
      console.error('❌ Ошибка загрузки данных:', error)
    } finally {
      setLoading(false)
    }
  }

  // Обновление статуса заявки
  const handleStatusUpdate = async (id: number, newStatus: string) => {
    try {
      const response = await banquetRequestsApi.updateStatus(id, newStatus)
      if (response.success) {
        // Обновляем локальное состояние
        setRequests(prev => prev.map(req => 
          req.id === id ? { ...req, status: newStatus as any } : req
        ))
        // Перезагружаем статистику
        loadData()
        // Вызываем callback для обновления счетчика в админке
        onStatusUpdate?.()
      }
    } catch (error) {
      console.error('❌ Ошибка обновления статуса:', error)
      alert('Ошибка обновления статуса')
    }
  }

  // Удаление заявки
  const handleDelete = async (id: number) => {
    if (!confirm('Вы уверены, что хотите удалить эту заявку?')) return
    
    try {
      const response = await banquetRequestsApi.delete(id)
      if (response.success) {
        setRequests(prev => prev.filter(req => req.id !== id))
        loadData()
        // Вызываем callback для обновления счетчика в админке
        onStatusUpdate?.()
      }
    } catch (error) {
      console.error('❌ Ошибка удаления заявки:', error)
      alert('Ошибка удаления заявки')
    }
  }

  // Форматирование даты
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Получение названия статуса на русском
  const getStatusLabel = (status: string) => {
    const statusLabels: Record<string, string> = {
      pending: 'Ожидает',
      approved: 'Одобрена',
      rejected: 'Отклонена',
      completed: 'Завершена'
    }
    return statusLabels[status] || status
  }

  if (loading && !requests.length) {
    return (
      <PageWrapper>
        <Container>
          <LoadingSpinner>Загрузка заявок...</LoadingSpinner>
        </Container>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Container>
        <PageTitle>🎉 Заявки на банкеты</PageTitle>
        
        {/* Статистика */}
        {stats && (
          <StatsGrid>
            <StatCard>
              <StatNumber>{stats.total}</StatNumber>
              <StatLabel>Всего заявок</StatLabel>
            </StatCard>
            <StatCard $status="pending">
              <StatNumber>{stats.pending}</StatNumber>
              <StatLabel>Ожидают</StatLabel>
            </StatCard>
            <StatCard $status="approved">
              <StatNumber>{stats.approved}</StatNumber>
              <StatLabel>Одобрены</StatLabel>
            </StatCard>
            <StatCard $status="rejected">
              <StatNumber>{stats.rejected}</StatNumber>
              <StatLabel>Отклонены</StatLabel>
            </StatCard>
            <StatCard $status="completed">
              <StatNumber>{stats.completed}</StatNumber>
              <StatLabel>Завершены</StatLabel>
            </StatCard>
          </StatsGrid>
        )}
        
        {/* Фильтры */}
        <FiltersSection>
          <FiltersTitle>🔍 Фильтры</FiltersTitle>
          <FiltersRow>
            <FilterGroup>
              <FilterLabel>Статус</FilterLabel>
              <FilterSelect
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              >
                <option value="all">Все статусы</option>
                <option value="pending">Ожидают</option>
                <option value="approved">Одобрены</option>
                <option value="rejected">Отклонены</option>
                <option value="completed">Завершены</option>
                <option value="cancelled">Отменены</option>
              </FilterSelect>
            </FilterGroup>
            <FilterGroup>
              <FilterLabel>Поиск</FilterLabel>
              <FilterInput
                type="text"
                placeholder="Имя, телефон, email, тип мероприятия..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              />
            </FilterGroup>
          </FiltersRow>
        </FiltersSection>
        
        {/* Таблица заявок */}
        <TableContainer>
          {requests.length === 0 ? (
            <EmptyState>
              <h3>📭 Заявок не найдено</h3>
              <p>Попробуйте изменить фильтры или создать новую заявку</p>
            </EmptyState>
          ) : (
            <Table>
              <TableHead>
                <tr>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Дата создания</TableHeader>
                  <TableHeader>Клиент</TableHeader>
                  <TableHeader>Мероприятие</TableHeader>
                  <TableHeader>Дата и время</TableHeader>
                  <TableHeader>Гости</TableHeader>
                  <TableHeader>Бюджет</TableHeader>
                  <TableHeader>Детали</TableHeader>
                  <TableHeader>Статус</TableHeader>
                  <TableHeader>Действия</TableHeader>
                </tr>
              </TableHead>
              <tbody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>#{request.id}</TableCell>
                    <TableCell>{formatDate(request.createdAt)}</TableCell>
                    <TableCell>
                      <div><strong>{request.name}</strong></div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                        {request.phone}
                      </div>
                      {request.email && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          {request.email}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div><strong>{request.eventType}</strong></div>
                      {request.banquetType && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          🍽️ {request.banquetType}
                        </div>
                      )}
                      {request.specialMenu && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          🥗 {request.specialMenu}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div>{new Date(request.eventDate).toLocaleDateString('ru-RU')}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                        🕐 {request.eventTime}
                      </div>
                      {request.endTime && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          🕘 До {request.endTime}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>{request.guestCount} чел.</TableCell>
                    <TableCell>{request.budget}</TableCell>
                    <TableCell>
                      {request.music && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                          🎵 {request.music}
                        </div>
                      )}
                      {request.decor && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                          🎨 {request.decor}
                        </div>
                      )}
                      {request.additionalWishes && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          💬 {request.additionalWishes.length > 50 
                            ? request.additionalWishes.substring(0, 50) + '...' 
                            : request.additionalWishes
                          }
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <StatusBadge $status={request.status}>
                        {getStatusLabel(request.status)}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>
                      <ActionButton
                        onClick={() => handleStatusUpdate(request.id, 'approved')}
                        disabled={request.status === 'approved'}
                      >
                        ✅
                      </ActionButton>
                      <ActionButton
                        onClick={() => handleStatusUpdate(request.id, 'rejected')}
                        disabled={request.status === 'rejected'}
                      >
                        ❌
                      </ActionButton>
                      <ActionButton
                        onClick={() => handleStatusUpdate(request.id, 'completed')}
                        disabled={request.status === 'completed'}
                      >
                        🎯
                      </ActionButton>
                      <ActionButton
                        $variant="danger"
                        onClick={() => handleDelete(request.id)}
                      >
                        🗑️
                      </ActionButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          )}
        </TableContainer>
        
        {/* Пагинация */}
        {totalPages > 1 && (
          <Pagination>
            <PageButton
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Назад
            </PageButton>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PageButton
                key={page}
                $active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PageButton>
            ))}
            
            <PageButton
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Вперед →
            </PageButton>
          </Pagination>
        )}
      </Container>
    </PageWrapper>
  )
} 