import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/widgets/Layout'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ContactPage } from '@/pages/Contact'
import { BilliardsPage } from '@/pages/Billiards'
import { KaraokePage } from '@/pages/Karaoke'
import { DiscoPage } from '@/pages/Disco'
import { PlaystationPage } from '@/pages/Playstation'
import { LoungePage } from '@/pages/Lounge'
import { GamesPage } from '@/pages/Games'
import { BookingPage } from '@/pages/Booking'
import { MenuPage } from '@/pages/Menu'
import { EventsPage } from '@/pages/Events'
import { CardsPage } from '@/pages/Cards'
import { ThreeDTourPage } from '@/pages/3DTour'
import { SecurityPage } from '@/pages/Security'
import { AdminPage } from '@/pages/Admin/AdminPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/3d-tour" element={<ThreeDTourPage />} />
          <Route path="/billiards" element={<BilliardsPage />} />
          <Route path="/karaoke" element={<KaraokePage />} />
          <Route path="/disco" element={<DiscoPage />} />
          <Route path="/playstation" element={<PlaystationPage />} />
          <Route path="/lounge" element={<LoungePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { App } 