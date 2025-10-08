import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminPage } from './AdminPage'

const SESSION_KEY = 'admin_session'
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 часа

const ProtectedAdminPage: React.FC = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    checkAuthentication()
  }, [])

  const checkAuthentication = () => {
    try {
      const sessionData = sessionStorage.getItem(SESSION_KEY)
      
      if (!sessionData) {
        // Нет сессии - редирект на логин
        navigate('/admin/login', { replace: true })
        return
      }

      const { authenticated, timestamp } = JSON.parse(sessionData)
      const now = Date.now()

      // Проверка валидности сессии
      if (authenticated && now - timestamp < SESSION_DURATION) {
        setIsAuthenticated(true)
      } else {
        // Сессия истекла
        sessionStorage.removeItem(SESSION_KEY)
        navigate('/admin/login', { replace: true })
      }
    } catch (error) {
      sessionStorage.removeItem(SESSION_KEY)
      navigate('/admin/login', { replace: true })
    } finally {
      setIsChecking(false)
    }
  }

  // Показываем пустой экран пока проверяем аутентификацию
  if (isChecking) {
    return null
  }

  // Если не аутентифицирован, не показываем AdminPage
  if (!isAuthenticated) {
    return null
  }

  return <AdminPage />
}

export { ProtectedAdminPage }

