import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`

export const SectionContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 10px;
  
  @media (max-width: 768px) {
    padding: 0 8px;
  }
  
  @media (max-width: 480px) {
    padding: 0 5px;
  }
` 