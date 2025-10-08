import React, { useState } from 'react'
import styled from 'styled-components'
import { Event } from '@/shared/api/events'
import { EventsAdminPanel } from './EventsAdminPanel'
import { EventZonesManagement } from './EventZonesManagement'

interface EventsManagementProps {
  onEventSelect?: (event: Event) => void
}

const Container = styled.div`
  padding: 2rem;
`

export const EventsManagement: React.FC<EventsManagementProps> = ({ onEventSelect }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event)
  }

  const handleBack = () => {
    setSelectedEvent(null)
  }

  const handleManageTables = (zoneId: number, zoneName: string) => {
    console.log(`Управление столами для зоны: ${zoneName} (ID: ${zoneId})`)
    // TODO: Реализовать переход к интерфейсу управления столами
    alert(`Переход к управлению столами для зоны: ${zoneName}\nID: ${zoneId}`)
  }

  if (selectedEvent) {
    return (
      <Container>
        <EventZonesManagement 
          event={selectedEvent} 
          onBack={handleBack} 
          onManageTables={handleManageTables}
        />
      </Container>
    )
  }

  return (
    <Container>
      <EventsAdminPanel onEventSelect={handleEventSelect} />
    </Container>
  )
}