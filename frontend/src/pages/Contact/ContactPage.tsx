import React from 'react'
import styled from 'styled-components'

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 0;
`

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 0.5rem;
    color: #333;
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
    text-align: center;
  }
`

export const ContactPage: React.FC = () => {
  return (
    <ContactPageContainer>
      <Main>
        <Container>
          <Content>
            <h1>Contact Us</h1>
            <p>Get in touch with us for any questions or feedback.</p>
          </Content>
        </Container>
      </Main>
    </ContactPageContainer>
  )
} 