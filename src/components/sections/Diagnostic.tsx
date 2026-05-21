import { useState } from 'preact/hooks'
import { ArrowRight, Calendar, Check } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { CheckBullet, Container, IconBubble } from '../common'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Diagnostic() {
  const { t } = useLang()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [biz, setBiz] = useState('inmobiliaria')
  const [sent, setSent] = useState(false)

  const submit = (e: Event) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="diagnostic"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4F46E6 0%, #6D28D9 50%, #10B981 100%)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-warm opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl pointer-events-none" />

      <Container className="py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <h2
              className="font-extrabold tracking-tighter leading-[0.95]"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              {t.diagnostic.title1}
              <br />
              <span className="text-white/70">{t.diagnostic.title2}</span>
              <br />
              {t.diagnostic.title3}
            </h2>
            <p className="mt-6 text-white/85 max-w-xl text-lg leading-relaxed">
              {t.diagnostic.desc1}
              <strong className="text-white">{t.diagnostic.desc2}</strong>
              {t.diagnostic.desc3}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {t.diagnostic.bullets.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <CheckBullet tone="inverse" />
                  <span className="text-white/90 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-7 lg:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <IconBubble icon={Calendar} tone="brand" size="lg" />
                <div>
                  <div className="font-bold text-ink-900">{t.diagnostic.formTitle}</div>
                  <div className="text-xs text-ink-500">{t.diagnostic.formSubtitle}</div>
                </div>
              </div>

              {sent ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center mx-auto mb-4">
                    <Check className="size-6 text-accent-deep" strokeWidth={2.5} />
                  </div>
                  <div className="font-bold text-ink-900 mb-1">{t.diagnostic.sentTitle}</div>
                  <div className="text-sm text-ink-500">
                    {t.diagnostic.sentDesc1}
                    {email || t.diagnostic.sentDescYourMail}
                    {t.diagnostic.sentDesc2}
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="d-name" className="text-[11px] mono tracker uppercase text-ink-500 font-semibold">
                      {t.diagnostic.nameLabel}
                    </Label>
                    <Input
                      id="d-name"
                      value={name}
                      onChange={e => setName((e.target as HTMLInputElement).value)}
                      required
                      placeholder={t.diagnostic.namePlaceholder}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="d-email" className="text-[11px] mono tracker uppercase text-ink-500 font-semibold">
                      {t.diagnostic.emailLabel}
                    </Label>
                    <Input
                      id="d-email"
                      type="email"
                      value={email}
                      onChange={e => setEmail((e.target as HTMLInputElement).value)}
                      required
                      placeholder={t.diagnostic.emailPlaceholder}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="d-biz" className="text-[11px] mono tracker uppercase text-ink-500 font-semibold">
                      {t.diagnostic.bizLabel}
                    </Label>
                    <select
                      id="d-biz"
                      value={biz}
                      onChange={e => setBiz((e.target as HTMLSelectElement).value)}
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50/40 text-sm focus:outline-none focus:border-brand focus:bg-white transition-colors appearance-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")",
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
                    <a className="text-brand font-medium" href="mailto:neuradev.aisolutions@gmail.com">
                      neuradev.aisolutions@gmail.com
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
