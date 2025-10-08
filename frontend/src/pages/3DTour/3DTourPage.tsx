import React from 'react'
import { KrpanoViewer } from '@/features/3d-tour'

const ThreeDTourPage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
    }}>
      <main style={{ padding: '2rem 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              3D Тур по Клубу
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6'
            }}>
              Исследуйте наш клуб в интерактивном 3D туре
            </p>
          </div>
          
          <KrpanoViewer />
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '2rem',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#ffd700', marginBottom: '1rem' }}>
              Как использовать 3D тур
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
              Используйте мышь для навигации по туру. Кликайте на стрелки для перемещения между комнатами.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ThreeDTourPage 