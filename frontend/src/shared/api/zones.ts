import { Zone } from '../model/types'

// Временные данные для демонстрации
const mockZones: Zone[] = [
  {
    id: 1,
    name: 'Бильярдная зона',
    imageUrl: 'https://res.cloudinary.com/dgclbjhp0/image/upload/w_768,h_768,q_auto/v1747745322/kojr8h0ltsdxahq7z03i.png',
    description: 'Профессиональные бильярдные столы',
    capacity: 8,
    price: 500
  },
  {
    id: 2,
    name: 'Караоке зона',
    imageUrl: 'https://res.cloudinary.com/dgclbjhp0/image/upload/w_768,h_768,q_auto/v1747745322/kojr8h0ltsdxahq7z03i.png',
    description: 'Современное караоке оборудование',
    capacity: 12,
    price: 800
  },
  {
    id: 3,
    name: 'Банкетный зал',
    imageUrl: 'https://res.cloudinary.com/dgclbjhp0/image/upload/w_768,h_768,q_auto/v1747745322/kojr8h0ltsdxahq7z03i.png',
    description: 'Просторный зал для мероприятий',
    capacity: 30,
    price: 1500
  },
  {
    id: 4,
    name: 'VIP зона',
    imageUrl: 'https://res.cloudinary.com/dgclbjhp0/image/upload/w_768,h_768,q_auto/v1747745322/kojr8h0ltsdxahq7z03i.png',
    description: 'Эксклюзивная зона для особых гостей',
    capacity: 6,
    price: 2000
  }
]

export const getZones = async (): Promise<Zone[]> => {
  // Имитация API запроса
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockZones
} 