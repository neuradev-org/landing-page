import WhyUsSection from '../components/WhyUs/WhyUs'
import type { Translations } from '../translations'

interface WhyUsPageProps {
  t: Translations
  handleEmailClick: () => void
  handleBookingClick: () => void
}

export default function WhyUsPage({ t, handleEmailClick, handleBookingClick }: WhyUsPageProps) {
  return <WhyUsSection t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
}