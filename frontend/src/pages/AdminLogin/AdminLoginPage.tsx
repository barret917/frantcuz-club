import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

// Константы для аутентификации
const ADMIN_CREDENTIALS = {
  login: 'admin',
  password: 'frantcuz_2018'
}

const SESSION_KEY = 'admin_session'
const MAX_ATTEMPTS = 3
const LOCKOUT_DURATION = 30000 // 30 секунд
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 часа

// Анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  /* Декоративные элементы фона */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`

const LoginCard = styled.div<{ $isShaking: boolean }>`
  position: relative;
  z-index: 1;
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(102, 126, 234, 0.2);
  animation: ${fadeIn} 0.6s ease-out;
  
  ${props => props.$isShaking && `
    animation: ${shake} 0.4s ease-in-out;
  `}
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    max-width: 100%;
  }
`

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const Logo = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  animation: ${pulse} 2s ease-in-out infinite;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 600;
`

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid ${props => props.$hasError ? 'rgba(255, 107, 107, 0.5)' : 'rgba(102, 126, 234, 0.3)'};
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? 'rgba(255, 107, 107, 0.8)' : '#667eea'};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px ${props => props.$hasError ? 'rgba(255, 107, 107, 0.1)' : 'rgba(102, 126, 234, 0.1)'};
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 0.9rem;
    font-size: 0.95rem;
  }
`

const PasswordWrapper = styled.div`
  position: relative;
`

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  
  &:focus {
    outline: none;
  }
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${fadeIn} 0.3s ease-out;
`

const WarningMessage = styled.div`
  background: rgba(255, 152, 0, 0.1);
  border: 1px solid rgba(255, 152, 0, 0.3);
  color: #ff9800;
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
`

const SubmitButton = styled.button<{ $isLocked: boolean }>`
  width: 100%;
  padding: 1rem;
  background: ${props => props.$isLocked 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: ${props => props.$isLocked ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isLocked 
    ? 'none' 
    : '0 4px 16px rgba(102, 126, 234, 0.4)'};
  margin-top: 0.5rem;
  
  &:hover {
    ${props => !props.$isLocked && `
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.5);
    `}
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem;
    font-size: 1rem;
  }
`

const AttemptsCounter = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
`

const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [lockoutTime, setLockoutTime] = useState(0)
  const [isShaking, setIsShaking] = useState(false)

  // Проверка существующей сессии при монтировании
  useEffect(() => {
    checkExistingSession()
  }, [])

  // Таймер блокировки
  useEffect(() => {
    if (isLocked && lockoutTime > 0) {
      const timer = setInterval(() => {
        setLockoutTime(prev => {
          if (prev <= 1) {
            setIsLocked(false)
            setAttempts(0)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [isLocked, lockoutTime])

  const checkExistingSession = () => {
    try {
      const sessionData = sessionStorage.getItem(SESSION_KEY)
      if (sessionData) {
        const { timestamp } = JSON.parse(sessionData)
        const now = Date.now()
        
        // Проверка валидности сессии (24 часа)
        if (now - timestamp < SESSION_DURATION) {
          navigate('/admin', { replace: true })
        } else {
          // Сессия истекла
          sessionStorage.removeItem(SESSION_KEY)
        }
      }
    } catch (error) {
      sessionStorage.removeItem(SESSION_KEY)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isLocked) return

    setError('')

    // Валидация полей
    if (!login.trim() || !password.trim()) {
      setError('Заполните все поля')
      triggerShake()
      return
    }

    // Проверка учетных данных
    if (login === ADMIN_CREDENTIALS.login && password === ADMIN_CREDENTIALS.password) {
      // Успешная авторизация
      const sessionData = {
        authenticated: true,
        timestamp: Date.now()
      }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData))
      navigate('/admin', { replace: true })
    } else {
      // Неверные учетные данные
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setError('Неверный логин или пароль')
      triggerShake()

      // Блокировка после MAX_ATTEMPTS неудачных попыток
      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true)
        setLockoutTime(LOCKOUT_DURATION / 1000) // Конвертируем в секунды
        setError(`Слишком много попыток. Попробуйте через ${LOCKOUT_DURATION / 1000} секунд`)
      }
    }
  }

  const triggerShake = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 400)
  }

  return (
    <Container>
      <LoginCard $isShaking={isShaking}>
        <LogoContainer>
          <Logo>🔐</Logo>
          <Title>Вход в админ-панель</Title>
          <Subtitle>Введите учетные данные для доступа</Subtitle>
        </LogoContainer>

        {isLocked && (
          <WarningMessage>
            ⏳ Превышен лимит попыток входа. Подождите {lockoutTime} сек
          </WarningMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="login">Логин</Label>
            <InputWrapper>
              <Input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Введите логин"
                $hasError={!!error}
                disabled={isLocked}
                autoComplete="username"
              />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Пароль</Label>
            <PasswordWrapper>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                $hasError={!!error}
                disabled={isLocked}
                autoComplete="current-password"
              />
              <TogglePasswordButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLocked}
                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              >
                {showPassword ? '🙈' : '👁️'}
              </TogglePasswordButton>
            </PasswordWrapper>
            {error && (
              <ErrorMessage>
                ⚠️ {error}
              </ErrorMessage>
            )}
          </InputGroup>

          <SubmitButton type="submit" disabled={isLocked} $isLocked={isLocked}>
            {isLocked ? `Подождите ${lockoutTime} сек` : 'Войти'}
          </SubmitButton>
        </Form>

        {attempts > 0 && !isLocked && (
          <AttemptsCounter>
            Попытка {attempts} из {MAX_ATTEMPTS}
          </AttemptsCounter>
        )}
      </LoginCard>
    </Container>
  )
}

export { AdminLoginPage }

