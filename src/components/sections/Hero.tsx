import { Fragment } from 'preact'
import { useState } from 'preact/hooks'
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  Dumbbell,
  Home,
  Scale,
  Shield,
  Stethoscope,
  Store,
  Wrench,
} from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { Container } from '../common'
import { AgentDemo, VERTICAL_ORDER } from '../AgentDemo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const MARQUEE_ICONS = [Scale, Home, Stethoscope, Store, Building2, Wrench, Dumbbell, BookOpen]

export function Hero() {
  const { t } = useLang()
  const [activeIdx, setActiveIdx] = useState(0)
  const verticals = VERTICAL_ORDER
  const active = verticals[activeIdx]
  const cycle = () => setActiveIdx((i) => (i + 1) % verticals.length)

  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <Container className="relative pt-12 lg:pt-20 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h1
              className="font-display font-semibold text-ink-900 leading-[1.04]"
              style={{ fontSize: 'clamp(46px, 7vw, 76px)' }}
            >
              {t.hero.titleA}
              <br />
              <span className="relative inline-block italic font-medium text-brand pr-2">
                {t.hero.titleB}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9 C 80 3, 220 11, 298 5"
                    stroke="#E8A33D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
              </span>
              <br />
              {t.hero.titleC}
            </h1>

            <p
              className="mt-8 text-ink-600 max-w-xl"
              style={{ fontSize: 'clamp(15px, 4vw, 19px)', lineHeight: 1.65 }}
            >
              {t.hero.desc1}
              <strong className="text-ink-900 font-semibold">{t.hero.desc2}</strong>
              {t.hero.desc3}
              <strong className="text-ink-900 font-semibold">{t.hero.desc4}</strong>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="cta">
                <a href="#diagnostic">
                  <Calendar strokeWidth={2.25} />
                  {t.hero.ctaPrimary}
                  <ArrowRight strokeWidth={2.5} />
                </a>
              </Button>
              <Button asChild variant="outline" size="cta">
                <a href="#what-we-build">{t.hero.ctaSecondary}</a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <Shield className="size-3.5" strokeWidth={2} />
                {t.hero.trust}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="mb-5 flex flex-wrap justify-center lg:justify-start gap-1.5 items-center">
              <div className="text-[11px] mono tracker uppercase text-ink-500 font-semibold w-full lg:w-auto lg:mr-2">
                {t.hero.tryLabel}
              </div>
              {verticals.map((v, i) => (
                <button
                  key={v}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs font-semibold transition-all',
                    i === activeIdx
                      ? 'bg-ink-900 text-paper shadow-card-hover'
                      : 'bg-cream text-ink-600 border border-ink-200 hover:border-ink-900 hover:text-ink-900'
                  )}
                >
                  {t.agentDemo.scripts[v].label}
                </button>
              ))}
            </div>
            <AgentDemo active={active} onCycle={cycle} />
          </div>
        </div>
      </Container>

      <Container className="relative pb-12">
        <div className="text-[11px] mono tracker uppercase text-ink-400 text-center mb-6">
          {t.hero.marqueeTitle}
        </div>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track flex gap-12 items-center w-max">
            {[0, 1].map((dup) => (
              <Fragment key={dup}>
                {t.hero.marqueeItems.map((label, i) => {
                  const Icn = MARQUEE_ICONS[i % MARQUEE_ICONS.length]
                  return (
                    <div
                      key={`${dup}-${i}`}
                      className="flex items-center gap-2.5 text-ink-500 shrink-0"
                    >
                      <Icn className="size-4.5 text-ink-400" strokeWidth={1.5} />
                      <span className="font-display italic text-[17px]">{label}</span>
                    </div>
                  )
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
