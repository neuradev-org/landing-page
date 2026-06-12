import { Clock } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { Container, Eyebrow, Reveal } from '../common'

export function Process() {
  const { t } = useLang()
  return (
    <section id="process" className="bg-paper-deep border-y border-ink-900/10">
      <Container className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>{t.process.eyebrow}</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-[1.08]">
                {t.process.title1}{' '}
                <span className="italic font-medium text-brand">{t.process.title2}</span>
              </h2>
              <p className="mt-6 text-ink-600 leading-relaxed">{t.process.subtitle}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-xs mono text-ink-600 border border-ink-900/15 rounded-full px-3.5 py-2 bg-cream">
                <Clock className="size-3.5" strokeWidth={2} /> {t.process.avgTime}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-ink-900/15">
              {t.process.steps.map((s, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div className="group grid grid-cols-[64px_1fr] sm:grid-cols-[96px_1fr] gap-5 sm:gap-8 py-8 border-b border-ink-900/15 transition-colors hover:bg-cream/60">
                    <div className="font-display text-5xl sm:text-6xl font-light italic text-ink-300 leading-none transition-colors group-hover:text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="min-w-0 pr-1">
                      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2.5">
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink-900">
                          {s.title}
                        </h3>
                        <span className="text-[11px] mono tracker uppercase text-ink-400 shrink-0">
                          {s.duration}
                        </span>
                      </div>
                      <p className="text-sm text-ink-600 leading-relaxed max-w-xl">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
