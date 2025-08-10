import React from 'react'
import styled from 'styled-components'

const ThreeDTourPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Content = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    color: #ffd700;
    font-size: 2.5rem;
  }

  p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`

const TourPlaceholder = styled.div`
  background: #333;
  border: 2px dashed #ffd700;
  border-radius: 8px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  color: #ffd700;
  font-size: 1.2rem;
  text-align: center;
`

export const ThreeDTourPage: React.FC = () => {
  return (
    <ThreeDTourPageContainer>
      <Main>
        <Container>
          <Content>
            <h1>3D Тур по клубу</h1>
            <p>
              Совершите виртуальную экскурсию по нашему развлекательному комплексу. 
              Исследуйте все зоны и помещения, не выходя из дома.
            </p>
            
            <TourPlaceholder>
              🏠 3D Тур будет доступен в ближайшее время
              <br />
              <small style={{ color: '#888', fontSize: '1rem' }}>
                Мы работаем над созданием интерактивного 3D тура
              </small>
            </TourPlaceholder>
            
            <p>
              В 3D туре вы сможете:
            </p>
            <ul style={{ 
              textAlign: 'left', 
              maxWidth: '600px', 
              margin: '0 auto',
              color: '#ccc',
              lineHeight: '1.8'
            }}>
              <li>Пройтись по всем зонам клуба</li>
              <li>Рассмотреть детали интерьера</li>
              <li>Увидеть расположение столов и оборудования</li>
              <li>Оценить атмосферу каждого помещения</li>
              <li>Познакомиться с планировкой клуба</li>
            </ul>
          </Content>
        </Container>
      </Main>
    </ThreeDTourPageContainer>
  )
} 