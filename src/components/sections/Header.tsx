import { useEffect, useState } from 'preact/hooks'
import { Calendar, Check, ChevronDown, Globe } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import type { Language } from '../../hooks/useLanguage'
import { Container, NeuradevLogo } from '../common'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#problem', label: t.nav.problem },
    { href: '#recommender', label: t.nav.recommender },
    { href: '#what-we-build', label: t.nav.build },
    { href: '#process', label: t.nav.process },
  ]

  const langOptions: { code: Language; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
  ]

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-ink-200/70'
          : 'bg-transparent',
      )}
    >
      <Container className="py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <NeuradevLogo size="sm" />
          <div className="flex items-center gap-2">
            <span className="text-[17px] font-bold tracking-tight text-ink-900">
              Neuradev
            </span>
            <Badge
              variant="secondary"
              className="hidden md:inline-flex rounded-md bg-accent-soft text-accent-deep text-[10px] mono font-semibold"
            >
              v2
            </Badge>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-ink-600 hover:text-ink-900 rounded-lg hover:bg-ink-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 relative">
          <button
            onClick={() => setLangOpen(o => !o)}
            onBlur={() => setTimeout(() => setLangOpen(false), 150)}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-ink-600 hover:text-ink-900 hover:bg-ink-50 rounded-lg mono transition-colors"
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            <Globe className="size-3" strokeWidth={2} />
            {t.nav.langLabel}
            <ChevronDown className="size-2.5" strokeWidth={2.5} />
          </button>

          {langOpen && (
            <div className="absolute top-full right-12 mt-1 w-32 rounded-xl bg-white border border-ink-200 shadow-card-hover overflow-hidden z-50">
              {langOptions.map(o => (
                <button
                  key={o.code}
                  onMouseDown={e => {
                    e.preventDefault()
                    setLang(o.code)
                    setLangOpen(false)
                  }}
                  className={cn(
                    'w-full text-left px-3.5 py-2.5 text-xs hover:bg-ink-50 flex items-center justify-between mono',
                    lang === o.code
                      ? 'text-brand font-semibold bg-brand-soft'
                      : 'text-ink-700',
                  )}
                >
                  {o.label}
                  {lang === o.code && (
                    <Check className="size-3 text-brand" strokeWidth={2.5} />
                  )}
                </button>
              ))}
            </div>
          )}

          <Button asChild size="cta-sm">
            <a href="#diagnostic">
              <Calendar strokeWidth={2.25} />
              {t.nav.diagnostic}
            </a>
          </Button>
        </div>
      </Container>
    </header>
  )
}
