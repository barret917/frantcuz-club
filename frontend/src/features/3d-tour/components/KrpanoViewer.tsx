import React from 'react'

export const KrpanoViewer: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '600px',
      borderRadius: '20px',
      overflow: 'hidden',
      background: '#000'
    }}>
      <iframe
        src="/fra3 (2)/francuz3d-3.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '20px'
        }}
        title="3D Тур Французского Клуба"
      />
    </div>
  )
} 