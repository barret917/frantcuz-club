import React from 'react'
import styled, { keyframes } from 'styled-components'
import { PanoramViewer } from '@/shared/ui/PanoramViewer'

// Анимации
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const ThreeDTourPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Main = styled.main`
  flex: 1;
  padding: 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0 3rem;
  animation: ${fadeInUp} 0.8s ease-out;
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

export const ThreeDTourPage: React.FC = () => {
  return (
    <ThreeDTourPageContainer>
      <Main>
        <Container>
          <HeroSection>
            <HeroTitle>3D Тур по клубу</HeroTitle>
            <HeroSubtitle>
              Совершите виртуальную экскурсию по нашему развлекательному комплексу. 
              Исследуйте все зоны и помещения, не выходя из дома.
            </HeroSubtitle>
          </HeroSection>
          <PanoramViewer /> {/* Fixed typo in component name */}
        </Container>
      </Main>
    </ThreeDTourPageContainer>
  )
} 