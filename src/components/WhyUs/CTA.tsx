import { Mail, Calendar, ChevronRight } from 'lucide-react'
import type { Translations } from '../../translations'

export default function CTA({
  t,
  handleEmailClick,
  handleBookingClick,
}: {
  t: Translations
  handleEmailClick: () => void
  handleBookingClick: () => void
}) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">{t.ctaTitle}</h3>
      <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
        {t.ctaDescription}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={handleEmailClick}
          className="group bg-white text-blue-600 px-5 py-3 md:px-8 md:py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-xl flex items-center justify-center text-base md:text-lg font-semibold"
        >
          <Mail className="w-5 h-5 mr-2" />
          {t.sendMessage}
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={handleBookingClick}
          className="group bg-transparent text-white px-5 py-3 md:px-8 md:py-4 rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-600 transition-all duration-200 flex items-center justify-center text-base md:text-lg font-semibold"
        >
          <Calendar className="w-5 h-5 mr-2" />
          {t.bookMeeting}
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
