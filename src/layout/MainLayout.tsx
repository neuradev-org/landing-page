import Header from '../components/header/Header'
import Footer from '../components/Footer'
import BackgroundCanvas from '../components/BackgroundCanvas'
import type { ReactNode } from 'preact/compat'
import BackToTop from '../components/BackToTop'

interface MainLayoutProps {
  children: ReactNode
  t: any
  handleBookingClick: () => void
}

export default function MainLayout({
  children,
  t,
  handleBookingClick,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <BackgroundCanvas />
      <div className="relative z-10">
        <Header t={t} />
        {children}
        <Footer t={t} handleEmailClick={() => {}} handleBookingClick={handleBookingClick} />
        <BackToTop />
      </div>
    </div>
  )
}


