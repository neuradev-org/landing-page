import { Brain, Zap } from 'lucide-react'
import type { Translations } from '../../translations'
import MiniCard from './MiniCard'

export default function About({ t }: { t: Translations }) {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.whoWeAre}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.whoWeAreDescription}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.pioneersTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t.pioneersDescription1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.pioneersDescription2}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <MiniCard
              title={t.aiFirst}
              description={t.aiFirstDesc}
              icon={<Brain className="w-6 h-6 text-blue-600" />}
            />
            <MiniCard
              title={t.lightningFast}
              description={t.lightningFastDesc}
              icon={<Zap className="w-6 h-6 text-emerald-600" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
