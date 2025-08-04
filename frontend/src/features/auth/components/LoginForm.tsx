import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '@/shared/ui/Container'

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #262935;
`

const LoginCard = styled.div`
  max-width: 400px;
  margin: 72px auto;
  padding: 32px 24px;
  background: #1f2633;
  border-radius: 8px;
  border: none;
  color: #fff;
`

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 24px;
  font-size: 1.8rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #fff;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #333;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #e87c5b;
  }

  &::placeholder {
    color: #888;
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #e87c5b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f39578;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  text-align: center;
`

interface LoginCredentials {
  username: string
  password: string
}

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void
  loading?: boolean
  error?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading = false, error }) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(credentials)
  }

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }))
  }

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>Admin Login</Title>

        <Form onSubmit={handleSubmit}>
          <FormItem>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="admin@example.com"
              value={credentials.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              autoComplete="username"
            />
          </FormItem>

          <FormItem>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              autoComplete="current-password"
            />
          </FormItem>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton
            type="submit"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </SubmitButton>
        </Form>
      </LoginCard>
    </LoginWrapper>
  )
} 