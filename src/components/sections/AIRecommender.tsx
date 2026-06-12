import { useRef, useState } from 'preact/hooks'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Calendar,
  Link as LinkIcon,
  Loader2,
  Sparkles,
  X,
} from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { CheckBullet, Container, Eyebrow, IconBubble, StatusPill } from '../common'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface RecommendationKpi {
  value: string
  label: string
}

interface Recommendation {
  agentName?: string
  tagline?: string
  industry?: string
  capabilities?: string[]
  integrations?: string[]
  firstWin?: string
  kpi?: RecommendationKpi
}

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000'

export function AIRecommender() {
  const { t } = useLang()
  const [biz, setBiz] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Recommendation | null>(null)
  const [error, setError] = useState<string | null>(null)
  const triesRef = useRef(parseInt(sessionStorage.getItem('rec_tries') ?? '0', 10))
  const [tries, setTries] = useState(triesRef.current)

  const generate = async () => {
    if (!biz.trim() || loading || triesRef.current >= 3) return
    triesRef.current += 1
    sessionStorage.setItem('rec_tries', String(triesRef.current))
    setTries(triesRef.current)
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch(`${API_BASE}/api/v1/recommendation/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: biz.trim() }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const { recommendation } = (await res.json()) as {
        recommendation: Recommendation
        savedId: string
      }
      setResult(recommendation)
    } catch (e) {
      console.error(e)
      setError(t.recommender.errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="recommender" className="bg-paper">
      <Container className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow color="accent">{t.recommender.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-[1.08]">
              {t.recommender.title1} <br />
              <span className="italic font-medium text-brand">{t.recommender.title2}</span>
            </h2>
            <p className="mt-6 text-ink-600 text-lg leading-relaxed">{t.recommender.subtitle}</p>

            <div className="mt-7 flex flex-col gap-2">
              <Label
                htmlFor="rec-biz"
                className="text-[11px] mono tracker uppercase text-ink-500 font-semibold"
              >
                {t.recommender.inputLabel}
              </Label>
              <Textarea
                id="rec-biz"
                value={biz}
                onChange={(e) => setBiz((e.target as HTMLTextAreaElement).value)}
                rows={4}
                placeholder={t.recommender.placeholder}
                maxLength={500}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="text-[11px] mono text-ink-400">{biz.length}/500</div>
                {tries < 3 && (
                  <Button onClick={generate} disabled={!biz.trim() || loading} size="cta-md">
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" strokeWidth={2.5} />
                        {t.recommender.designing}
                      </>
                    ) : (
                      <>
                        <Sparkles strokeWidth={2} />
                        {t.recommender.generate}
                      </>
                    )}
                  </Button>
                )}
              </div>
              {tries >= 3 && (
                <div className="mt-3 rounded-xl border border-accent/30 bg-accent-soft/30 p-3.5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-ink-900">
                      {t.recommender.limitTitle}
                    </div>
                    <div className="text-[11px] text-ink-500 mt-0.5 leading-snug">
                      {t.recommender.limitDesc}
                    </div>
                  </div>
                  <Button asChild size="cta-md" className="shrink-0">
                    <a href="#diagnostic">
                      <Calendar strokeWidth={2.25} />
                      {t.recommender.limitCta}
                    </a>
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-6">
              <div className="text-[11px] mono tracker uppercase text-ink-400 font-semibold mb-2.5">
                {t.recommender.tryExample}
              </div>
              <div className="flex flex-col gap-1.5">
                {t.recommender.examples.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => setBiz(ex)}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl bg-cream hover:bg-brand-softer text-xs text-ink-600 hover:text-ink-900 transition-colors flex items-start gap-2 border border-ink-200 hover:border-brand/40"
                  >
                    <ArrowUpRight className="size-3 shrink-0 mt-0.5" strokeWidth={2.25} />
                    <span className="flex-1">{ex}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <RecommenderResult result={result} loading={loading} error={error} />
          </div>
        </div>
      </Container>
    </section>
  )
}

interface ResultProps {
  result: Recommendation | null
  loading: boolean
  error: string | null
}

function RecommenderResult({ result, loading, error }: ResultProps) {
  const { t } = useLang()

  if (!result && !loading && !error) {
    return (
      <div className="rounded-3xl bg-paper-deep/50 border border-dashed border-ink-300 p-10 lg:p-14 text-center min-h-[480px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-cream border border-ink-200 flex items-center justify-center mb-6 shadow-card">
          <Sparkles className="size-6 text-brand" strokeWidth={2} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink-900 mb-2.5">
          {t.recommender.emptyTitle}
        </h3>
        <p className="text-sm text-ink-500 max-w-sm leading-relaxed">{t.recommender.emptyDesc}</p>
        <div className="mt-7 flex items-center gap-2 text-[11px] mono tracker uppercase text-ink-400">
          <span className="w-2 h-2 rounded-full bg-accent" />
          {t.recommender.emptyPower}
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-ink-900 border border-ink-900 p-10 lg:p-14 min-h-[480px] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-48 rounded-full bg-brand opacity-30 blur-3xl pointer-events-none" />
        <div className="relative w-20 h-20 rounded-3xl bg-white/10 border border-white/15 flex items-center justify-center">
          <Loader2 className="size-7 text-warm animate-spin" strokeWidth={2.5} />
        </div>
        <h3 className="relative font-display text-2xl font-semibold text-paper mt-7 mb-2">
          {t.recommender.loadTitle}
        </h3>
        <p className="relative text-sm text-white/60 max-w-sm text-center leading-relaxed">
          {t.recommender.loadDesc}
        </p>
        <div className="relative mt-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse" />
          <span
            className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse"
            style={{ animationDelay: '200ms' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse"
            style={{ animationDelay: '400ms' }}
          />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-cream border border-warm/40 p-10 text-center min-h-[480px] flex flex-col items-center justify-center">
        <IconBubble icon={X} tone="warm" size="xl" className="mb-4" />
        <h3 className="font-display text-xl font-semibold text-ink-900 mb-2">
          {t.recommender.errorTitle}
        </h3>
        <p className="text-sm text-ink-500 max-w-sm leading-relaxed mb-5">{error}</p>
        <Button asChild size="cta-md">
          <a href="#diagnostic">
            {t.recommender.errorCta}
            <ArrowRight strokeWidth={2.5} />
          </a>
        </Button>
      </div>
    )
  }

  const r = result!

  return (
    <div className="fade-up rounded-3xl bg-cream border border-ink-900/15 shadow-card-hover p-7 lg:p-9 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 dot-bg opacity-30 pointer-events-none" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-7 pb-6 border-b border-ink-900/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center text-white">
              <Bot className="size-5" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[11px] mono tracker uppercase text-brand font-semibold">
                {t.recommender.readyLabel}
              </div>
              <div className="text-xs text-ink-500 mt-0.5">{r.industry || 'Custom'}</div>
            </div>
          </div>
          <StatusPill label="AGENT.READY" />
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 leading-[1.08] mb-2">
          {r.agentName || 'YourAgent'}
        </h3>
        <p className="text-ink-600 text-base leading-relaxed mb-7">{r.tagline}</p>

        <div className="mb-6">
          <div className="text-[11px] mono tracker uppercase text-ink-500 font-semibold mb-3">
            {t.recommender.whatItSolves}
          </div>
          <div className="flex flex-col gap-2">
            {(r.capabilities || []).map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-3 fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CheckBullet />
                <span className="text-sm text-ink-700">{c}</span>
              </div>
            ))}
          </div>
        </div>

        {r.integrations && r.integrations.length > 0 && (
          <div className="mb-6">
            <div className="text-[11px] mono tracker uppercase text-ink-500 font-semibold mb-3">
              {t.recommender.integrations}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {r.integrations.map((it, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-paper text-ink-700 border-ink-200 rounded-full gap-1.5"
                >
                  <LinkIcon className="size-3 text-brand" strokeWidth={2} />
                  {it}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-5 gap-4 pt-6 border-t border-ink-200/60 items-start">
          <div className="sm:col-span-3">
            <div className="text-[11px] mono tracker uppercase text-ink-500 font-semibold mb-2">
              {t.recommender.firstStepLabel}
            </div>
            <p className="text-sm text-ink-700 leading-relaxed">{r.firstWin}</p>
          </div>
          {r.kpi && (
            <div className="sm:col-span-2 rounded-2xl bg-ink-900 text-paper p-5">
              <div className="font-display text-3xl font-semibold">{r.kpi.value}</div>
              <div className="text-xs text-white/70 mt-1 leading-tight">{r.kpi.label}</div>
            </div>
          )}
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-6 border-t border-ink-200/60">
          <Button asChild size="cta-md" className="flex-1">
            <a href="#diagnostic">
              <Calendar strokeWidth={2.25} />
              {t.recommender.resultCta}
              <ArrowRight strokeWidth={2.5} />
            </a>
          </Button>
          <Button
            variant="outline"
            size="cta-md"
            onClick={() => {
              window.location.hash = '#recommender'
            }}
          >
            {t.recommender.adjust}
          </Button>
        </div>
      </div>
    </div>
  )
}
