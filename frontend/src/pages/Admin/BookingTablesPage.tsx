import React from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui'
import { BookingTablesManagement } from '@/features/booking-admin'

const PageContainer = styled.div`
  padding: 2rem 0;
`

export const BookingTablesPage: React.FC = () => {
  return (
    <Container>
      <PageContainer>
        <BookingTablesManagement />
      </PageContainer>
    </Container>
  )
}

export default BookingTablesPage
