import React from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui'
import { BookingZonesManagement } from '@/features/booking-admin'

const PageContainer = styled.div`
  padding: 2rem 0;
`

export const BookingZonesPage: React.FC = () => {
  return (
    <Container>
      <PageContainer>
        <BookingZonesManagement />
      </PageContainer>
    </Container>
  )
}

export default BookingZonesPage
