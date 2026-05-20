import { Zap, CheckCircle, Brain } from 'lucide-react'
import type { Translations } from '../../translations'
import Feature from './Feature'
import CTA from './CTA'

export default function WhyUs({
  t,
  handleEmailClick,
  handleBookingClick,
}: {
  t: Translations
  handleEmailClick: () => void
  handleBookingClick: () => void
}) {
  return (
    <section id="why-us" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.whyChooseUsTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.whyChooseUsDescription}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Feature
            title={t.innovationFirst}
            description={t.innovationFirstDesc}
            icon={<Zap className="w-8 h-8 text-white" />}
          />
          <Feature
            title={t.maximumEfficiency}
            description={t.maximumEfficiencyDesc}
            icon={<CheckCircle className="w-8 h-8 text-white" />}
          />
          <Feature
            title={t.fastResults}
            description={t.fastResultsDesc}
            icon={<Brain className="w-8 h-8 text-white" />}
          />
        </div>
        <CTA t={t} handleEmailClick={handleEmailClick} handleBookingClick={handleBookingClick} />
      </div>
    </section>
  )
}
