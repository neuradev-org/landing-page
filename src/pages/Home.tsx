import Hero from './Hero'
import type { Translations } from '../translations'
import About from './About'
import Services from './Services'
import WhyUs from './WhyUs'
import Team from './Team'

interface HomeProps {
  t: Translations
  handleEmailClick: () => void
  handleBookingClick: () => void
}

export default function Home({ t, handleEmailClick, handleBookingClick }: HomeProps) {
  return (
    <>
      <Hero t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
      <About t={t} />
      <Services t={t} />
      <Team t={t} />
      <WhyUs t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
    </>
  )
}


