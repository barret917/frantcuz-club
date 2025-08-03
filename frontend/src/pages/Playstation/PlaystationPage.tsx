import React from 'react'
import { Header } from '@/widgets/Header'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 0;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`

export const PlaystationPage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      
      <Main>
        <Container>
          <Content>
            <h1>Playstation</h1>
            <p>Играйте в лучшие игры на PlayStation.</p>
          </Content>
        </Container>
      </Main>
    </PageContainer>
  )
} 