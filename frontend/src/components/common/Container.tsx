import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #a0a0a0;
  font-size: 1.1rem;
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: #a0a0a0;
`

export const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const EmptyStateTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
`

export const EmptyStateText = styled.p`
  color: #a0a0a0;
  margin: 0;
`
