import { Sparkles } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { Container, Eyebrow, IconBubble, Reveal } from '../common'

export function Problem() {
  const { t } = useLang()
  return (
    <section id="problem" className="bg-paper-deep border-y border-ink-900/10">
      <Container className="py-24 lg:py-32">
        <Reveal className="max-w-3xl mb-16">
          <Eyebrow>{t.problem.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-[1.08]">
            {t.problem.title1}{' '}
            <span className="italic font-medium text-ink-500">{t.problem.title2}</span>
          </h2>
          <p className="mt-6 text-ink-600 text-lg leading-relaxed">{t.problem.subtitle}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {t.problem.fails.map((f, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="h-full rounded-2xl bg-cream border border-ink-900/10 p-7 lg:p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-baseline justify-between gap-3 mb-7 border-b border-ink-900/10 pb-5">
                  <span className="font-display text-5xl font-light italic text-ink-300 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] mono tracker uppercase text-warm-deep font-semibold">
                    {t.problem.failLabel}
                  </span>
                </div>
                <h3 className="font-display text-[22px] font-semibold text-ink-900 mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 rounded-2xl bg-ink-900 text-paper p-7 lg:p-9 flex flex-col sm:flex-row items-start gap-5 relative overflow-hidden">
            <div className="absolute -top-24 right-10 w-72 h-40 rounded-full bg-brand opacity-25 blur-3xl pointer-events-none" />
            <IconBubble icon={Sparkles} tone="inverse" size="lg" className="relative" />
            <div className="relative">
              <div className="text-xs mono tracker uppercase text-warm font-semibold mb-2">
                {t.problem.solveLabel}
              </div>
              <p className="text-base leading-relaxed text-white/70">
                <strong className="font-display text-lg font-medium italic text-paper">
                  {t.problem.solveText1}
                </strong>
                {t.problem.solveText2}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
