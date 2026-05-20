import { ArrowRight, Zap, Mail, Calendar } from 'lucide-react'
import type { Translations } from '../translations'

interface HeroPageProps {
  t: Translations
  handleEmailClick: () => void
  handleBookingClick: () => void
}

export default function HeroPage({ t, handleEmailClick, handleBookingClick }: HeroPageProps) {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 py-20 lg:py-32 transition-colors duration-300 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            {t.heroTagline}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.heroTitle1}
            <br />
            <span className="text-blue-600">{t.heroTitle2}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleEmailClick}
              className="group bg-blue-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:shadow-blue-200/50 flex items-center justify-center text-base md:text-lg font-semibold"
            >
              <Mail className="w-5 h-5 md:w-5 md:h-5 mr-2" />
              {t.sendMessage}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleBookingClick}
              className="group bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-5 py-3 md:px-8 md:py-4 rounded-xl border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 flex items-center justify-center text-base md:text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 md:w-5 md:h-5 mr-2" />
              {t.bookMeeting}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


