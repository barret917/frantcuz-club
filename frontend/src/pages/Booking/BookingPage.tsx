import React, { useEffect, useState } from 'react'
import { Header } from '@/widgets/Header'
import { Container } from '@/shared/ui/Container'
import { ZoneCard } from '@/shared/ui/ZoneCard'
import { getZones } from '@/shared/api/zones'
import { Zone } from '@/shared/model/types'
import styled from 'styled-components'

const BookingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

const BookingContent = styled.div`
  padding: 2rem 0;
`

const Title = styled.h1`
  text-align: center;
  color: #ffd700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-auto-rows: 300px;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 10px;
    gap: 15px;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffd700;
  font-size: 1.2rem;
`

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ff6b6b;
  font-size: 1.2rem;
`

export const BookingPage: React.FC = () => {
  const [zones, setZones] = useState<Zone[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchZones = async () => {
      try {
        setIsLoading(true)
        const data = await getZones()
        setZones(data)
      } catch (err) {
        setError('Ошибка загрузки зон')
      } finally {
        setIsLoading(false)
      }
    }

    fetchZones()
  }, [])

  return (
    <BookingPageContainer>
      <Header />
      
      <Main>
        <Container>
          <BookingContent>
            <Title>Бронирование</Title>
            <Subtitle>
              Выберите зону для бронирования и мы свяжемся с вами
            </Subtitle>

            {isLoading ? (
              <LoadingContainer>Загрузка зон...</LoadingContainer>
            ) : error ? (
              <ErrorContainer>{error}</ErrorContainer>
            ) : (
              <Grid>
                {zones.map((zone, index) => (
                  <ZoneCard 
                    key={zone.id} 
                    zone={zone} 
                    $isFullWidth={index % 3 === 2} 
                  />
                ))}
              </Grid>
            )}
          </BookingContent>
        </Container>
      </Main>
    </BookingPageContainer>
  )
} 