import ServicesSection from '../components/Services/Services'
import type { Translations } from '../translations'

interface ServicesPageProps {
  t: Translations
}

export default function ServicesPage({ t }: ServicesPageProps) {
  return <ServicesSection t={t} />
}


