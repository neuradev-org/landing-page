import type { Translations } from '../../translations'
import { LanguageDropdown } from '../LanguageDropdown'
import { useState } from 'preact/hooks'
import { Menu, X } from 'lucide-react'

export default function Navbar({
  t,
}: {
  t: Translations
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#about"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.about}
        </a>
        <a
          href="#services"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.services}
        </a>
        <a
          href="#team"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.team}
        </a>
        <a
          href="#why-us"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.whyChooseUs}
        </a>
        <LanguageDropdown />
      </div>
      <div className="md:hidden flex items-center gap-3">
        <LanguageDropdown />
        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {open ? <X className="w-5 h-5 text-white/90" /> : <Menu className="w-5 h-5 text-white/90" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden absolute left-0 right-0 top-full border-b border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t.about}
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t.services}
            </a>
            <a
              href="#team"
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t.team}
            </a>
            <a
              href="#why-us"
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t.whyChooseUs}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
