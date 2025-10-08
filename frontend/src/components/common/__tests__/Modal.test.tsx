import React from 'react'
import { render, screen } from '@testing-library/react'
import { Modal, ModalContent, ModalHeader, ModalTitle, CloseButton } from '../Modal'

describe('Modal Components', () => {
  it('renders Modal when open', () => {
    render(
      <Modal $isOpen={true}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Test Modal</ModalTitle>
            <CloseButton>×</CloseButton>
          </ModalHeader>
        </ModalContent>
      </Modal>
    )
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /×/i })).toBeInTheDocument()
  })

  it('does not render Modal when closed', () => {
    const { container } = render(
      <Modal $isOpen={false}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Test Modal</ModalTitle>
            <CloseButton>×</CloseButton>
          </ModalHeader>
        </ModalContent>
      </Modal>
    )
    
    // Проверяем что модальное окно имеет display: none
    const modal = container.firstChild as HTMLElement
    expect(modal).toHaveStyle('display: none')
  })

  it('renders ModalContent with correct styles', () => {
    render(
      <Modal $isOpen={true}>
        <ModalContent>Content</ModalContent>
      </Modal>
    )
    
    const content = screen.getByText('Content')
    expect(content).toHaveStyle('background: rgba(255, 255, 255, 0.03)')
    expect(content).toHaveStyle('border-radius: 16px')
  })

  it('renders CloseButton with correct styles', () => {
    render(
      <Modal $isOpen={true}>
        <ModalContent>
          <ModalHeader>
            <CloseButton>×</CloseButton>
          </ModalHeader>
        </ModalContent>
      </Modal>
    )
    
    const closeButton = screen.getByRole('button', { name: /×/i })
    expect(closeButton).toHaveStyle('color: #a0a0a0')
    expect(closeButton).toHaveStyle('font-size: 1.5rem')
  })
})
