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
import { CardsPage } from '@/pages/Cards'
import { ThreeDTourPage } from '@/pages/3DTour'
import { SecurityPage } from '@/pages/Security'
import { PaymentRulesPage } from '@/pages/PaymentRules'
import { RefundPage } from '@/pages/Refund'
import { ClubRulesPage } from '@/pages/ClubRules'
import { PrivacyPage } from '@/pages/Privacy'
import { RequisitesPage } from '@/pages/Requisites'
import { BanquetsPage } from '@/pages/Banquets'
import { HookahPage } from '@/pages/Hookah'
import { AdminPage } from '@/pages/Admin/AdminPage'
import { NotFoundPage } from '@/pages/NotFound'
import { ErrorPage } from '@/pages/Error'

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
          <Route path="/hookah" element={<HookahPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/banquets" element={<BanquetsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/payment-rules" element={<PaymentRulesPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/club-rules" element={<ClubRulesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/requisites" element={<RequisitesPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Тестовый роут для страницы ошибки 500 */}
          <Route path="/error" element={<ErrorPage />} />
          
          {/* Catch-all роут для несуществующих страниц */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { App } 