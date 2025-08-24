import React, { useEffect, useRef, useState } from 'react';
import "pannellum/build/pannellum.css";

// Динамический импорт pannellum
let pannellum: any = null;

const loadPannellum = async () => {
  if (!pannellum) {
    try {
      // Пробуем CDN версию напрямую
      return new Promise((resolve) => {
        if (typeof window !== 'undefined' && (window as any).pannellum) {
          pannellum = (window as any).pannellum;
          console.log('✅ Pannellum уже загружен в window');
          resolve(pannellum);
        } else {
          // Загружаем CDN версию
          console.log('📥 Загружаем pannellum через CDN...');
          
          // Загружаем CSS
          const cssLink = document.createElement('link');
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
          document.head.appendChild(cssLink);
          
          // Загружаем JS
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
          script.onload = () => {
            pannellum = (window as any).pannellum;
            console.log('✅ Pannellum загружен через CDN скрипт');
            resolve(pannellum);
          };
          script.onerror = () => {
            console.error('❌ Не удалось загрузить pannellum через CDN');
            resolve(null);
          };
          document.head.appendChild(script);
        }
      });
    } catch (error) {
      console.error('❌ Ошибка загрузки pannellum:', error);
      return null;
    }
  }
  return pannellum;
};

interface Hotspot {
  pitch: number;
  yaw: number;
  text: string;
  zone: string;
}

interface Zone {
  name: string;
  description: string;
  panorama: string;
  hotspots: Hotspot[];
}

type ZoneKey = 'main-hall' | 'bar' | 'dance-floor' | 'vip';

export default function PanoramViewer() { 
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentZone, setCurrentZone] = useState<ZoneKey>('main-hall');
  const [isLoading, setIsLoading] = useState(true);

  // Зоны клуба с панорамами (используем простые изображения)
  const zones: Record<ZoneKey, Zone> = {
    'main-hall': {
      name: 'Главный зал',
      description: 'Центральная зона клуба с баром и танцполом',
      panorama: 'data:image/svg+xml;base64,' + btoa(`
        <svg width="2048" height="1024" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#667eea"/>
        </svg>
      `),
      hotspots: [
        { pitch: 0, yaw: 90, text: 'Бар', zone: 'bar' },
        { pitch: 0, yaw: -90, text: 'Танцпол', zone: 'dance-floor' },
        { pitch: 0, yaw: 180, text: 'VIP зона', zone: 'vip' }
      ]
    },
    'bar': {
      name: 'Бар',
      description: 'Стильный бар с широким выбором напитков',
      panorama: 'data:image/svg+xml;base64,' + btoa(`
        <svg width="2048" height="1024" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#f59e0b"/>
        </svg>
      `),
      hotspots: [
        { pitch: 0, yaw: 0, text: 'Вернуться в главный зал', zone: 'main-hall' }
      ]
    },
    'dance-floor': {
      name: 'Танцпол',
      description: 'Просторная танцевальная зона с профессиональным звуком',
      panorama: 'data:image/svg+xml;base64,' + btoa(`
        <svg width="2048" height="1024" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#ec4899"/>
        </svg>
      `),
      hotspots: [
        { pitch: 0, yaw: 0, text: 'Вернуться в главный зал', zone: 'main-hall' }
      ]
    },
    'vip': {
      name: 'VIP зона',
      description: 'Эксклюзивная зона для особых гостей',
      panorama: 'data:image/svg+xml;base64,' + btoa(`
        <svg width="2048" height="1024" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#10b981"/>
        </svg>
      `),
      hotspots: [
        { pitch: 0, yaw: 0, text: 'Вернуться в главный зал', zone: 'main-hall' }
      ]
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    console.log('🚀 Инициализация pannellum для зоны:', currentZone);
    console.log('📸 URL панорамы:', zones[currentZone].panorama);

    // Очищаем предыдущий viewer
    if (mountRef.current.children.length > 0) {
      mountRef.current.innerHTML = '';
    }

    const initializeViewer = async () => {
      try {
        const pannellumModule = await loadPannellum();
        if (!pannellumModule) {
          throw new Error('Не удалось загрузить pannellum');
        }

        console.log('🔍 Структура pannellum модуля:', pannellumModule);
        console.log('🔍 Доступные методы:', Object.keys(pannellumModule));

        // Проверяем разные варианты вызова
        let viewer;
        if (typeof pannellumModule.viewer === 'function') {
          console.log('✅ Используем pannellumModule.viewer');
          viewer = pannellumModule.viewer(mountRef.current, {
            type: 'equirectangular',
            panorama: zones[currentZone].panorama,
            autoLoad: true,
            showControls: true,
            hotSpots: zones[currentZone].hotspots.map(hotspot => ({
              pitch: hotspot.pitch,
              yaw: hotspot.yaw,
              text: hotspot.text,
              cssClass: 'custom-hotspot',
              clickHandlerFunc: () => {
                console.log('🔄 Переход в зону:', hotspot.zone);
                setCurrentZone(hotspot.zone as ZoneKey);
              }
            })),
            onLoad: () => {
              console.log('✅ Панорама загружена успешно');
              setIsLoading(false);
            },
            onError: (error: any) => {
              console.error('❌ Ошибка загрузки панорамы:', error);
              setIsLoading(false);
            }
          });
        } else if (typeof pannellumModule.default?.viewer === 'function') {
          console.log('✅ Используем pannellumModule.default.viewer');
          viewer = pannellumModule.default.viewer(mountRef.current, {
            type: 'equirectangular',
            panorama: zones[currentZone].panorama,
            autoLoad: true,
            showControls: true,
            hotSpots: zones[currentZone].hotspots.map(hotspot => ({
              pitch: hotspot.pitch,
              yaw: hotspot.yaw,
              text: hotspot.text,
              cssClass: 'custom-hotspot',
              clickHandlerFunc: () => {
                console.log('🔄 Переход в зону:', hotspot.zone);
                setCurrentZone(hotspot.zone as ZoneKey);
              }
            })),
            onLoad: () => {
              console.log('✅ Панорама загружена успешно');
              setIsLoading(false);
            },
            onError: (error: any) => {
              console.error('❌ Ошибка загрузки панорамы:', error);
              setIsLoading(false);
            }
          });
        } else {
          console.log('❌ Метод viewer не найден, доступные методы:', Object.keys(pannellumModule));
          throw new Error('Метод viewer не найден в pannellum модуле');
        }

        // Добавляем стили для горячих точек
        const style = document.createElement('style');
        style.textContent = `
          .custom-hotspot {
            background: rgba(255, 255, 255, 0.9);
            color: #333;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            border: 2px solid #667eea;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .custom-hotspot:hover {
            background: #667eea;
            color: white;
            transform: scale(1.1);
          }
        `;
        document.head.appendChild(style);

        // Очистка при размонтировании
        return () => {
          if (viewer && typeof viewer.destroy === 'function') {
            viewer.destroy();
          }
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
        };
      } catch (error) {
        console.error('❌ Ошибка создания pannellum viewer:', error);
        setIsLoading(false);
      }
    };

    initializeViewer();
  }, [currentZone]);

  return (
    <div 
      ref={mountRef}
      style={{ 
        width: '100%', 
        height: '500px',
        borderRadius: '15px',
        overflow: 'hidden',
        marginTop: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative'
      }}
    >
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '10px',
          zIndex: 10
        }}>
          Загрузка 3D тура...
        </div>
      )}
      
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        fontSize: '0.9rem',
        zIndex: 10
      }}>
        🏠 {zones[currentZone].name} | 🖱️ Перетащите для осмотра | 👆 Кликните на точки для перехода
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        fontSize: '0.8rem',
        zIndex: 10,
        maxWidth: '300px'
      }}>
        {zones[currentZone].description}
      </div>
    </div>
  );
}

