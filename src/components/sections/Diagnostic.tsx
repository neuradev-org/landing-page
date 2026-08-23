import { useState } from 'preact/hooks'
import { ArrowRight, Calendar } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { trackContact } from '../../lib/tracking'
import { CheckBullet, Container, IconBubble, Reveal } from '../common'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CALENDLY_URL = 'https://calendly.com/neuradev/30min'

export function Diagnostic() {
  const { t, lang } = useLang()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [biz, setBiz] = useState('inmobiliaria')

  const submit = (e: Event) => {
    e.preventDefault()
    trackContact({ name, email, businessType: biz, language: lang })
    const params = new URLSearchParams({ name, email })
    window.location.href = `${CALENDLY_URL}?${params.toString()}`
  }

  return (
    <section id="diagnostic" className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[520px] h-[320px] rounded-full bg-brand opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-accent opacity-15 blur-3xl pointer-events-none" />

      <Container className="py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-paper">
            <Reveal>
              <h2
                className="font-display font-semibold leading-[1.04]"
                style={{ fontSize: 'clamp(38px, 5.6vw, 68px)' }}
              >
                {t.diagnostic.title1}
                <br />
                <span className="italic font-medium text-warm">{t.diagnostic.title2}</span>
                <br />
                {t.diagnostic.title3}
              </h2>
              <p className="mt-7 text-white/70 max-w-xl text-lg leading-relaxed">
                {t.diagnostic.desc1}
                <strong className="text-paper font-semibold">{t.diagnostic.desc2}</strong>
                {t.diagnostic.desc3}
              </p>
              <div className="mt-9 flex flex-col gap-3.5">
                {t.diagnostic.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckBullet tone="inverse" />
                    <span className="text-white/85 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="rounded-3xl bg-cream p-7 lg:p-8 shadow-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-7 pb-6 border-b border-ink-900/10">
                  <IconBubble icon={Calendar} tone="brand" size="lg" />
                  <div>
                    <div className="font-display text-lg font-semibold text-ink-900">
                      {t.diagnostic.formTitle}
                    </div>
                    <div className="text-xs text-ink-500">{t.diagnostic.formSubtitle}</div>
                  </div>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="d-name"
                      className="text-[11px] mono tracker uppercase text-ink-500 font-semibold"
                    >
                      {t.diagnostic.nameLabel}
                    </Label>
                    <Input
                      id="d-name"
                      value={name}
                      onChange={(e) => setName((e.target as HTMLInputElement).value)}
                      required
                      placeholder={t.diagnostic.namePlaceholder}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="d-email"
                      className="text-[11px] mono tracker uppercase text-ink-500 font-semibold"
                    >
                      {t.diagnostic.emailLabel}
                    </Label>
                    <Input
                      id="d-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                      required
                      placeholder={t.diagnostic.emailPlaceholder}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="d-biz"
                      className="text-[11px] mono tracker uppercase text-ink-500 font-semibold"
                    >
                      {t.diagnostic.bizLabel}
                    </Label>
                    <select
                      id="d-biz"
                      value={biz}
                      onChange={(e) => setBiz((e.target as HTMLSelectElement).value)}
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-paper/60 text-sm text-ink-900 focus:outline-none focus:border-brand focus:bg-white transition-colors appearance-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%237A7060' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                      }}
                    >
                      {t.diagnostic.bizOptions.map(([v, l]) => (
                        <option key={v} value={v}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" size="cta" className="w-full mt-2">
                    {t.diagnostic.submit}
                    <ArrowRight strokeWidth={2.5} />
                  </Button>
                  <div className="text-[11px] text-ink-400 text-center pt-1">
                    {t.diagnostic.orWriteUs}{' '}
                    <a
                      className="text-brand font-medium"
                      href="mailto:neuradev.aisolutions@gmail.com"
                    >
                      neuradev.aisolutions@gmail.com
                    </a>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
