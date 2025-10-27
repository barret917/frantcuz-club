import styled from 'styled-components'

export interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'danger' | 'success'
  $size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: ${props => {
    switch (props.$size) {
      case 'small': return '0.5rem 1rem'
      case 'large': return '1rem 2rem'
      default: return '0.75rem 1.5rem'
    }
  }};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '0.85rem'
      case 'large': return '1.1rem'
      default: return '0.95rem'
    }
  }};
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  ${props => {
    switch (props.$variant) {
      case 'danger':
        return `
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
          }
        `
      case 'success':
        return `
          background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(76, 175, 80, 0.4);
          }
        `
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover { 
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
          }
        `
      default:
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
          &:hover { 
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
          }
        `
    }
  }}

  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`
