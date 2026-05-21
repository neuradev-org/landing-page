import { Clock } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { Container, Eyebrow } from '../common'
import { Card } from '@/components/ui/card'

export function Process() {
  const { t } = useLang()
  return (
    <section id="process" className="bg-ink-50 border-y border-ink-200/60">
      <Container className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{t.process.eyebrow}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              {t.process.title1} <span className="grad-text">{t.process.title2}</span>
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed">{t.process.subtitle}</p>
            <div className="mt-7 flex items-center gap-2 text-xs mono text-ink-500">
              <Clock className="size-3.5" strokeWidth={2} /> {t.process.avgTime}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-ink-200 hidden md:block" />
              <div className="flex flex-col gap-4">
                {t.process.steps.map((s, i) => (
                  <Card key={i} className="rounded-2xl py-0 gap-0 p-6 lg:p-7 md:ml-0">
                    <div className="flex items-start gap-5">
                      <div className="relative w-10 h-10 rounded-xl bg-ink-900 text-white flex items-center justify-center font-bold text-sm shrink-0 mono">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
                          <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                          <span className="text-[11px] mono tracker uppercase text-ink-400 shrink-0">
                            {s.duration}
                          </span>
                        </div>
                        <p className="text-sm text-ink-600 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
