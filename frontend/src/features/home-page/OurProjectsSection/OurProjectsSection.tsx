import React from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui/Container'

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #222 50%, #2a2a2a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const SectionContent = styled.div`
  position: relative;
  z-index: 2;
`

const Title = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.9;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`

const ProjectsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0;
  
  /* Скрываем скроллбар для красоты */
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Плавный скролл */
  scroll-behavior: smooth;
`

const ProjectsGrid = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  min-width: max-content;
  
  /* Добавляем отступы по краям для лучшего скролла */
  &::before,
  &::after {
    content: '';
    min-width: 2rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 1.5rem;
    
    &::before,
    &::after {
      min-width: 1.5rem;
    }
  }
`

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-width: 160px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
  }
  
  @media (max-width: 768px) {
    min-width: 140px;
    padding: 1rem;
  }
`

const ProjectLogo = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.9) contrast(1.1);
    transition: all 0.3s ease;
  }
  
  ${ProjectCard}:hover & {
    background: rgba(102, 126, 234, 0.1);
    transform: scale(1.1);
    
    img {
      filter: brightness(1.1) contrast(1.2);
    }
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const ProjectName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: white;
  margin: 0;
  line-height: 1.3;
  max-width: 100px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 80px;
  }
`

const ScrollHint = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  opacity: 0.8;
  
  &::before {
    content: '← →';
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`

const projects = [
  {
    id: 1,
    name: 'Витоп',
    logo: '/logo-footer/лого-ветоп.png',
    url: 'https://wetop.ru/'
  },
  {
    id: 2,
    name: 'Дали Хинкали',
    logo: '/logo-footer/лого-дали-хинкали.png',
    url: 'https://dali-khinkali.ru/'
  },
  {
    id: 3,
    name: 'Корп Питание',
    logo: '/logo-footer/лого-кор-питание.png',
    url: 'https://corp-pitanie.tyteda.ru'
  },
  {
    id: 4,
    name: 'Шашляндия',
    logo: '/logo-footer/лого-шашландиа.png',
    url: 'https://shashlandia.ru/'
  },
  {
    id: 5,
    name: 'Француз Шоп',
    logo: '/logo-footer/лого-фратцуз-шоп.png',
    url: 'https://frantsuz-shop.ru/'
  },
  {
    id: 6,
    name: 'Комикадзе',
    logo: '/logo-footer/лого-комикадзе.png',
    url: 'https://comicadze.ru/'
  },
  {
    id: 7,
    name: 'Тут Еда',
    logo: '/logo-footer/лого-тут-еда.png',
    url: 'https://tyteda.ru/'
  },
  {
    id: 8,
    name: 'Пою Всегда',
    logo: '/logo-footer/лого-пою-всегда.png',
    url: 'https://poyuvsegda.ru/'
  },
  {
    id: 9,
    name: 'Рейтинг',
    logo: '/logo-footer/лого-рейтинг.png',
    url: 'https://reiting.moscow/'
  },
  {
    id: 10,
    name: 'Доставка Поминки',
    logo: '/logo-footer/лого-доставка-поминки.png',
    url: 'https://dostavka-pominki.ru/'
  },
  {
    id: 11,
    name: 'Француз Академия',
    logo: '/logo-footer/лого-франтуз-академия.png',
    url: 'https://frantsuz.ru/'
  }
]

export const OurProjectsSection: React.FC = () => {
  return (
    <Section>
      <SectionContent>
        <Container>
          <Title>Наши проекты</Title>
          <Subtitle>
            Откройте для себя разнообразие наших проектов и услуг, 
            каждый из которых создан с заботой о качестве и комфорте
          </Subtitle>
          
          <ProjectsContainer>
            <ProjectsGrid>
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  onClick={() => {
                    if (project.url) {
                      window.open(project.url, '_blank', 'noopener,noreferrer')
                    }
                  }}
                >
                  <ProjectLogo>
                    <img src={project.logo} alt={project.name} />
                  </ProjectLogo>
                  <ProjectName>{project.name}</ProjectName>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ProjectsContainer>
          
          <ScrollHint>
            Используйте горизонтальный скролл для просмотра всех проектов
          </ScrollHint>
        </Container>
      </SectionContent>
    </Section>
  )
} 