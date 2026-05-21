import { useState } from 'preact/hooks'
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

declare global {
  interface Window {
    claude?: {
      complete: (prompt: string) => Promise<string>
    }
  }
}

export function AIRecommender() {
  const { t } = useLang()
  const [biz, setBiz] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Recommendation | null>(null)
  const [error, setError] = useState<string | null>(null)

  const generate = async () => {
    if (!biz.trim() || loading) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      if (!window.claude?.complete) throw new Error('claude.complete unavailable')
      const text = await window.claude.complete(t.recommenderPrompt(biz))
      const jsonStart = text.indexOf('{')
      const jsonEnd = text.lastIndexOf('}')
      if (jsonStart === -1 || jsonEnd === -1) throw new Error('No JSON in response')
      const parsed = JSON.parse(text.substring(jsonStart, jsonEnd + 1)) as Recommendation
      setResult(parsed)
    } catch (e) {
      console.error(e)
      setError(t.recommender.errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="recommender" className="bg-white">
      <Container className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow color="accent">{t.recommender.eyebrow}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              {t.recommender.title1} <br />
              <span className="grad-text">{t.recommender.title2}</span>
            </h2>
            <p className="mt-5 text-ink-600 text-lg leading-relaxed">{t.recommender.subtitle}</p>

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
                onChange={e => setBiz((e.target as HTMLTextAreaElement).value)}
                rows={4}
                placeholder={t.recommender.placeholder}
                maxLength={500}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="text-[11px] mono text-ink-400">{biz.length}/500</div>
                <Button
                  onClick={generate}
                  disabled={!biz.trim() || loading}
                  size="cta-md"
                >
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
              </div>
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
                    className="w-full text-left px-3.5 py-2.5 rounded-xl bg-ink-50 hover:bg-brand-soft text-xs text-ink-600 hover:text-ink-900 transition-colors flex items-start gap-2 border border-ink-200/60 hover:border-brand/30"
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
      <div className="rounded-3xl bg-ink-50 border-2 border-dashed border-ink-200 p-10 lg:p-14 text-center min-h-[480px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-white border border-ink-200 flex items-center justify-center mb-5 shadow-card">
          <Sparkles className="size-6 text-brand" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-bold text-ink-900 mb-2">{t.recommender.emptyTitle}</h3>
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
      <div className="rounded-3xl bg-gradient-to-br from-brand-softer to-white border border-ink-200/80 p-10 lg:p-14 min-h-[480px] flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand to-accent flex items-center justify-center shadow-cta">
            <Loader2 className="size-7 text-white animate-spin" strokeWidth={2.5} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-ink-900 mt-7 mb-2">{t.recommender.loadTitle}</h3>
        <p className="text-sm text-ink-500 max-w-sm text-center leading-relaxed">
          {t.recommender.loadDesc}
        </p>
        <div className="mt-6 flex items-center gap-2 text-[11px] mono text-ink-400">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" style={{ animationDelay: '200ms' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-white border border-warm/30 p-10 text-center min-h-[480px] flex flex-col items-center justify-center">
        <IconBubble icon={X} tone="warm" size="xl" className="mb-4" />
        <h3 className="text-lg font-bold text-ink-900 mb-2">{t.recommender.errorTitle}</h3>
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
    <div className="fade-up rounded-3xl bg-gradient-to-br from-brand-softer via-white to-accent-soft/40 border border-ink-200/80 p-7 lg:p-9 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 dot-bg opacity-40 pointer-events-none" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-accent flex items-center justify-center shadow-cta text-white">
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

        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-ink-900 leading-[1.05] mb-2">
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
                  className="bg-white text-ink-700 border-ink-200 rounded-lg gap-1.5"
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
            <div className="sm:col-span-2 rounded-2xl bg-ink-900 text-white p-5">
              <div className="text-3xl font-extrabold tracking-tighter">{r.kpi.value}</div>
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
