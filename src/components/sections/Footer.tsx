import { Calendar, Globe, Mail } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { Container, NeuradevLogo } from '../common'
import { Button } from '@/components/ui/button'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-ink-950 text-paper border-t border-white/10">
      <Container className="py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <NeuradevLogo tone="dark" />
              <span className="font-display text-2xl font-semibold tracking-tight">Neuradev</span>
            </div>
            <p className="text-white/60 max-w-sm mb-7 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <Button asChild variant="light" size="cta-md">
              <a href="#diagnostic">
                <Calendar strokeWidth={2.25} /> {t.footer.cta}
              </a>
            </Button>
          </div>
          <div className="md:col-span-3">
            <div className="text-[11px] mono tracker uppercase text-white/40 mb-4 font-semibold">
              {t.footer.servicesTitle}
            </div>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {t.footer.servicesLinks.map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[11px] mono tracker uppercase text-white/40 mb-4 font-semibold">
              {t.footer.contactTitle}
            </div>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 text-white/60" strokeWidth={2} />
                <a href="mailto:neuradev.aisolutions@gmail.com" className="hover:text-white">
                  neuradev.aisolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="size-3.5 text-white/60" strokeWidth={2} />
                {t.footer.region}
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="size-3.5 text-white/60" strokeWidth={2} />
                {t.footer.hours}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/40">
          <div>{t.footer.copy}</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/80">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white/80">
              {t.footer.terms}
            </a>
            <span className="mono">{t.footer.version}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
