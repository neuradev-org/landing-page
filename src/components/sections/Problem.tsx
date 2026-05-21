import { Sparkles, X } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { Container, Eyebrow, IconBubble } from '../common'
import { Card } from '@/components/ui/card'

export function Problem() {
  const { t } = useLang()
  return (
    <section id="problem" className="bg-ink-50 border-y border-ink-200/60">
      <Container className="py-24 lg:py-32">
        <div className="max-w-3xl mb-14">
          <Eyebrow>{t.problem.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
            {t.problem.title1} <span className="text-ink-400">{t.problem.title2}</span>
          </h2>
          <p className="mt-5 text-ink-600 text-lg leading-relaxed">{t.problem.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.problem.fails.map((f, i) => (
            <Card
              key={i}
              className="rounded-2xl py-0 gap-0 p-7 lg:p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)]"
            >
              <div className="flex items-start gap-3 mb-5">
                <IconBubble icon={X} tone="warm" size="sm" />
                <div className="text-xs mono tracker uppercase text-ink-400 pt-2.5">
                  {String(i + 1).padStart(2, '0')} / {t.problem.failLabel}
                </div>
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3 leading-snug">{f.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-12 rounded-2xl py-0 gap-0 p-6 lg:p-8 flex-row items-start gap-4">
          <IconBubble icon={Sparkles} tone="brand" size="lg" />
          <div>
            <div className="text-xs mono tracker uppercase text-brand font-semibold mb-1.5">
              {t.problem.solveLabel}
            </div>
            <p className="text-ink-700 text-base leading-relaxed">
              <strong className="text-ink-900">{t.problem.solveText1}</strong>
              {t.problem.solveText2}
            </p>
          </div>
        </Card>
      </Container>
    </section>
  )
}
