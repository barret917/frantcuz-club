import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  padding: ${({ size }) => {
    switch (size) {
      case 'small': return '0.5rem 1rem'
      case 'large': return '1rem 2rem'
      default: return '0.75rem 1.5rem'
    }
  }};
  border: none;
  border-radius: 6px;
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '0.875rem'
      case 'large': return '1.125rem'
      default: return '1rem'
    }
  }};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({ variant, disabled }) => {
    if (disabled) {
      return `
        background: #666;
        color: #999;
        cursor: not-allowed;
      `
    }
    
    switch (variant) {
      case 'secondary':
        return `
          background: transparent;
          color: #ffd700;
          border: 2px solid #ffd700;
          &:hover {
            background: #ffd700;
            color: #000;
          }
        `
      case 'danger':
        return `
          background: #dc3545;
          color: white;
          &:hover {
            background: #c82333;
          }
        `
      default:
        return `
          background: #ffd700;
          color: #000;
          &:hover {
            background: #ffed4e;
          }
        `
    }
  }}
`

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false,
  variant = 'primary',
  size = 'medium'
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      variant={variant}
      size={size}
    >
      {children}
    </StyledButton>
  )
} 