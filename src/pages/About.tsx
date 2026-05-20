import AboutSection from '../components/About/About'
import type { Translations } from '../translations'

interface AboutPageProps {
  t: Translations
}

export default function AboutPage({ t }: AboutPageProps) {
  return <AboutSection t={t} />
}


