import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #0f0f23;
    color: #ffffff;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Глобальные стили для скроллбара */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #7b61ff 0%, #8b71ff 100%);
    box-shadow: 0 0 20px rgba(123, 97, 255, 0.7);
    transform: scale(1.05);
  }

  ::-webkit-scrollbar-corner {
    background: rgba(255, 255, 255, 0.05);
  }

  /* Стилизация скроллбара для Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
  }

  /* Стили для выделения текста */
  ::selection {
    background: rgba(123, 97, 255, 0.3);
    color: #ffffff;
  }

  ::-moz-selection {
    background: rgba(123, 97, 255, 0.3);
    color: #ffffff;
  }

  /* Убираем стандартные стили для кнопок и ссылок */
  button {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Стили для фокуса */
  *:focus {
    outline: 2px solid #7b61ff;
    outline-offset: 2px;
  }

  /* Анимации для плавного появления элементов */
  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Стили для мобильных устройств */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-thumb {
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  }
` 