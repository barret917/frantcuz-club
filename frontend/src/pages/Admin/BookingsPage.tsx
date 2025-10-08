import React from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui'
import { BookingsManagement } from '@/features/booking-admin'

const PageContainer = styled.div`
  padding: 2rem 0;
`

export const BookingsPage: React.FC = () => {
  return (
    <Container>
      <PageContainer>
        <BookingsManagement />
      </PageContainer>
    </Container>
  )
}

export default BookingsPage
