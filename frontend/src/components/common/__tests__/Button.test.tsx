import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Test Button</Button>)
    const button = screen.getByRole('button', { name: /test button/i })
    expect(button).toBeInTheDocument()
  })

  it('renders with primary variant by default', () => {
    render(<Button>Primary Button</Button>)
    const button = screen.getByRole('button', { name: /primary button/i })
    expect(button).toHaveStyle('background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)')
  })

  it('renders with danger variant', () => {
    render(<Button $variant="danger">Danger Button</Button>)
    const button = screen.getByRole('button', { name: /danger button/i })
    expect(button).toHaveStyle('background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)')
  })

  it('renders with secondary variant', () => {
    render(<Button $variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button', { name: /secondary button/i })
    expect(button).toHaveStyle('background: rgba(255, 255, 255, 0.1)')
  })

  it('renders with small size', () => {
    render(<Button $size="small">Small Button</Button>)
    const button = screen.getByRole('button', { name: /small button/i })
    expect(button).toHaveStyle('padding: 0.5rem 1rem')
    expect(button).toHaveStyle('font-size: 0.85rem')
  })

  it('renders with large size', () => {
    render(<Button $size="large">Large Button</Button>)
    const button = screen.getByRole('button', { name: /large button/i })
    expect(button).toHaveStyle('padding: 1rem 2rem')
    expect(button).toHaveStyle('font-size: 1.1rem')
  })

  it('renders with full width', () => {
    render(<Button $fullWidth>Full Width Button</Button>)
    const button = screen.getByRole('button', { name: /full width button/i })
    expect(button).toHaveStyle('width: 100%')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
    expect(button).toHaveStyle('opacity: 0.5')
  })
})
