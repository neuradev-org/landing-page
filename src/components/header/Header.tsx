import type { Translations } from '../../translations'
import Logo from './Logo'
import Navbar from './Navbar'
import { useEffect, useState } from 'preact/hooks'

export interface HeaderParams {
  t: Translations
}

export default function Header({ t }: HeaderParams) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        `sticky top-0 z-50 transition-colors duration-300 ` +
        (scrolled
          ? 'bg-white/90 dark:bg-gray-900/100 border-b border-gray-100 dark:border-gray-800'
          : 'bg-white/60 dark:bg-gray-900/70 border-b border-transparent')
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Navbar t={t} />
        </div>
      </div>
    </header>
  )
}
