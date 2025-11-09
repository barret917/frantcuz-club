import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { 
  PageZoneBinding, 
  BookingZone, 
  getPageZoneBindings, 
  getBookingZones,
  upsertPageZoneBinding,
  deletePageZoneBinding
} from '@/shared/api/booking'

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
`

const BindingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const BindingCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const BindingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const PageRoute = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
`

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const Button = styled.button<{ variant?: 'primary' | 'danger' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: #3b82f6;
          color: white;
          
          &:hover:not(:disabled) {
            background: #2563eb;
          }
        `
      case 'danger':
        return `
          background: #ef4444;
          color: white;
          
          &:hover:not(:disabled) {
            background: #dc2626;
          }
        `
      default:
        return `
          background: #f3f4f6;
          color: #374151;
          
          &:hover:not(:disabled) {
            background: #e5e7eb;
          }
        `
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ErrorMessage = styled.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #fecaca;
`

const SuccessMessage = styled.div`
  background: #f0fdf4;
  color: #16a34a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #bbf7d0;
`

const CurrentZone = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

// Список страниц для привязки
const PAGES = [
  { route: '/billiards', label: 'Бильярд' },
  { route: '/karaoke', label: 'Караоке' },
  { route: '/playstation', label: 'PlayStation' },
  { route: '/disco', label: 'Диско' },
  { route: '/games', label: 'Настольные игры' }
]

export const PageZoneBindingsManagement: React.FC = () => {
  const [bindings, setBindings] = useState<PageZoneBinding[]>([])
  const [zones, setZones] = useState<BookingZone[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [saving, setSaving] = useState<Record<string, boolean>>({})

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      const [bindingsData, zonesData] = await Promise.all([
        getPageZoneBindings(),
        getBookingZones()
      ])
      setBindings(bindingsData)
      setZones(zonesData.filter(z => z.isActive))
    } catch (error) {
      console.error('Error loading data:', error)
      setError('Ошибка загрузки данных')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (pageRoute: string, zoneId: number) => {
    if (!zoneId) {
      setError('Выберите зону')
      return
    }

    setSaving(prev => ({ ...prev, [pageRoute]: true }))
    setError(null)
    setSuccessMessage(null)

    try {
      const binding = await upsertPageZoneBinding(pageRoute, zoneId)
      setBindings(prev => {
        const existing = prev.find(b => b.pageRoute === pageRoute)
        if (existing) {
          return prev.map(b => b.pageRoute === pageRoute ? binding : b)
        }
        return [...prev, binding]
      })
      setSuccessMessage(`Привязка для ${PAGES.find(p => p.route === pageRoute)?.label} сохранена`)
    } catch (error) {
      console.error('Error saving binding:', error)
      setError('Ошибка сохранения привязки')
    } finally {
      setSaving(prev => ({ ...prev, [pageRoute]: false }))
    }
  }

  const handleDelete = async (bindingId: number, pageRoute: string) => {
    if (!confirm('Вы уверены, что хотите удалить эту привязку?')) return

    try {
      await deletePageZoneBinding(bindingId)
      setBindings(prev => prev.filter(b => b.id !== bindingId))
      setSuccessMessage(`Привязка для ${PAGES.find(p => p.route === pageRoute)?.label} удалена`)
    } catch (error) {
      console.error('Error deleting binding:', error)
      setError('Ошибка удаления привязки')
    }
  }

  const getCurrentZoneId = (pageRoute: string): number | '' => {
    const binding = bindings.find(b => b.pageRoute === pageRoute)
    return binding?.zoneId || ''
  }

  const getCurrentZoneName = (pageRoute: string): string => {
    const binding = bindings.find(b => b.pageRoute === pageRoute)
    return binding?.zone?.name || ''
  }

  if (loading) {
    return (
      <Container>
        <Header>
          <Title>Привязка страниц к зонам</Title>
        </Header>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <LoadingSpinner />
          <div style={{ marginTop: '1rem', color: '#6b7280' }}>Загрузка данных...</div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Привязка страниц к зонам</Title>
      </Header>

      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}

      {successMessage && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}

      <BindingsList>
        {PAGES.map(page => (
          <BindingCard key={page.route}>
            <BindingHeader>
              <PageRoute>{page.label}</PageRoute>
              {getCurrentZoneId(page.route) && (
                <Button
                  variant="danger"
                  onClick={() => {
                    const binding = bindings.find(b => b.pageRoute === page.route)
                    if (binding) {
                      handleDelete(binding.id, page.route)
                    }
                  }}
                >
                  Удалить привязку
                </Button>
              )}
            </BindingHeader>

            <FormGroup>
              <Label htmlFor={`zone-${page.route}`}>Выберите зону для привязки</Label>
              <Select
                id={`zone-${page.route}`}
                value={getCurrentZoneId(page.route)}
                onChange={(e) => {
                  const zoneId = e.target.value ? parseInt(e.target.value) : 0
                  if (zoneId) {
                    handleSave(page.route, zoneId)
                  }
                }}
              >
                <option value="">Не привязано</option>
                {zones.map(zone => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name} ({zone.type})
                  </option>
                ))}
              </Select>
              {getCurrentZoneName(page.route) && (
                <CurrentZone>
                  Текущая привязка: {getCurrentZoneName(page.route)}
                </CurrentZone>
              )}
            </FormGroup>
          </BindingCard>
        ))}
      </BindingsList>
    </Container>
  )
}

export default PageZoneBindingsManagement

