import { useEffect, useState } from 'preact/hooks'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BookOpen,
  Bot,
  Building2,
  Check,
  ChevronRight,
  Dumbbell,
  GitBranch,
  Home,
  Mail,
  Scale,
  Shield,
  Sparkles,
  Stethoscope,
  Store,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import type { VerticalId } from '../../translations'
import { CheckBullet, Container, Eyebrow, IconBubble, MetaTag } from '../common'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const VERTICAL_ICONS: Record<VerticalId, LucideIcon> = {
  contable: Scale,
  inmobiliaria: Home,
  juridico: Building2,
  ecommerce: Store,
  clinica: Stethoscope,
  gimnasio: Dumbbell,
  taller: Wrench,
  academia: BookOpen,
}

function AgentsBody() {
  const { t } = useLang()
  const verticals = t.agents.verticals
  const [activeId, setActiveId] = useState<VerticalId>('inmobiliaria')
  const active = verticals.find((v) => v.id === activeId) ?? verticals[0]

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start fade-up">
      <div className="lg:col-span-4 flex flex-col gap-2">
        {verticals.map((v) => {
          const Ic = VERTICAL_ICONS[v.id] ?? Bot
          const isActive = v.id === activeId
          return (
            <button
              key={v.id}
              onClick={() => setActiveId(v.id)}
              className={cn(
                'w-full text-left rounded-2xl p-4 border transition-all flex items-start gap-3',
                isActive
                  ? 'bg-ink-900 text-paper border-ink-900'
                  : 'bg-cream text-ink-700 border-ink-200 hover:border-ink-900'
              )}
            >
              <div
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                  isActive ? 'bg-white/10 text-warm' : 'bg-brand-soft text-brand'
                )}
              >
                <Ic className="size-4.5" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{v.label}</div>
                <div className={cn('text-xs mt-0.5', isActive ? 'text-white/60' : 'text-ink-500')}>
                  {v.tagline}
                </div>
              </div>
              {isActive && <ChevronRight className="size-3.5" strokeWidth={2.5} />}
            </button>
          )
        })}
      </div>

      <div className="lg:col-span-8">
        <div
          key={active.id}
          className="fade-up rounded-3xl bg-cream border border-ink-900/15 shadow-card p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 dot-bg opacity-30 pointer-events-none" />
          <div className="relative">
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <Badge
                variant="outline"
                className="bg-paper text-ink-600 border-ink-200 rounded-full text-xs mono px-3 py-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-emerald" />
                AGENT.{active.id.toUpperCase()}
              </Badge>
              <div className="text-xs mono tracker uppercase text-ink-400">
                {t.agents.useCaseLabel}
              </div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink-900 leading-tight mb-2">
              {active.label}
            </h3>
            <p className="text-ink-600 mb-7">{active.tagline}</p>

            <div className="flex flex-col gap-3 mb-8">
              {active.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckBullet />
                  <span className="text-sm text-ink-700">{b}</span>
                </div>
              ))}
            </div>

            {active.note && (
              <div className="mb-7 px-4 py-3 rounded-xl bg-warm-soft border border-warm/30 text-xs text-warm-deep flex items-start gap-2">
                <Shield className="size-3.5 shrink-0 mt-0.5" strokeWidth={2} />
                <span className="font-medium">{active.note}</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-ink-900/10">
              <div>
                <div className="font-display text-4xl font-semibold italic text-ink-900">
                  {active.kpi.value}
                </div>
                <div className="text-xs text-ink-500 mt-1 leading-tight">{active.kpi.label}</div>
              </div>
              <div className="flex sm:items-end sm:justify-end">
                <Button asChild size="cta-md">
                  <a href="#diagnostic">
                    {t.agents.ctaCard}
                    <ArrowRight strokeWidth={2.5} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {t.agents.metaTags.map(([k, v]) => (
            <MetaTag key={k} k={k} v={v} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PipelineArrow() {
  return (
    <div className="hidden md:flex items-center justify-center w-10">
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none" aria-hidden>
        <defs>
          <linearGradient id="pipeflow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="12"
          x2="32"
          y2="12"
          stroke="url(#pipeflow)"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-10"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </line>
        <path
          d="M28 6l8 6-8 6"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function InternalBody() {
  const { t } = useLang()
  const data = t.internal
  const [pipeIdx, setPipeIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPipeIdx((i) => (i + 1) % data.pipelineInputs.length), 2200)
    return () => clearInterval(id)
  }, [data.pipelineInputs.length])

  const tagColors: ('brand' | 'accent' | 'warm')[] = ['brand', 'accent', 'warm', 'brand']
  const inputIcons: LucideIcon[] = [Mail, Mail, BookOpen, Terminal, GitBranch]
  const outputIcons: LucideIcon[] = [Scale, Bot, Zap, Zap, Check]
  const categoryIcons: LucideIcon[] = [BookOpen, Scale, Shield, Wrench]

  const tagClass: Record<'brand' | 'accent' | 'warm', string> = {
    brand: 'bg-brand-soft text-brand',
    accent: 'bg-accent-soft text-accent-deep',
    warm: 'bg-warm-soft text-warm-deep',
  }

  return (
    <div className="fade-up">
      <div className="mb-6 rounded-3xl bg-ink-950 text-paper p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-brand opacity-30 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent pulse-emerald" />
            <span className="text-[11px] mono tracker uppercase text-white/50 font-semibold">
              {data.pipelineLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-center">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
              <div className="text-[10px] mono tracker uppercase text-white/40 font-semibold mb-3">
                {data.pipelineInput}
              </div>
              <div className="flex flex-col gap-1.5">
                {data.pipelineInputs.map((label, i) => {
                  const isActive = i === pipeIdx
                  const Ic = inputIcons[i] ?? Mail
                  return (
                    <div
                      key={i}
                      className={cn(
                        'flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all',
                        isActive
                          ? 'bg-warm/15 border border-warm/40 text-white'
                          : 'border border-transparent text-white/50'
                      )}
                    >
                      <Ic
                        className={cn('size-3.5', isActive ? 'text-warm' : 'text-white/40')}
                        strokeWidth={2}
                      />
                      <span className="text-xs font-medium truncate">{label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <PipelineArrow />

            <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-deep p-5 lg:p-6 relative overflow-hidden">
              <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
              <div className="relative">
                <div className="text-[10px] mono tracker uppercase text-white/70 font-semibold mb-3">
                  {data.pipelineProcess}
                </div>
                <div className="flex items-center justify-center py-4">
                  <div
                    className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center pulse-emerald"
                    style={{ boxShadow: '0 0 0 0 rgba(255,255,255,.5)' }}
                  >
                    <Sparkles className="size-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="text-center text-[11px] mono text-white/80 mt-2">
                  extract · classify · validate
                </div>
              </div>
            </div>

            <PipelineArrow />

            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
              <div className="text-[10px] mono tracker uppercase text-white/40 font-semibold mb-3">
                {data.pipelineOutput}
              </div>
              <div className="flex flex-col gap-1.5">
                {data.pipelineOutputs.map((label, i) => {
                  const isActive = i === pipeIdx
                  const Ic = outputIcons[i] ?? Check
                  return (
                    <div
                      key={i}
                      className={cn(
                        'flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all',
                        isActive
                          ? 'bg-accent/15 border border-accent/40 text-white'
                          : 'border border-transparent text-white/50'
                      )}
                    >
                      <Ic
                        className={cn('size-3.5', isActive ? 'text-accent' : 'text-white/40')}
                        strokeWidth={2}
                      />
                      <span className="text-xs font-medium truncate">{label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {data.categories.map((cat, i) => {
          const c = tagColors[i] ?? 'brand'
          const Ic = categoryIcons[i] ?? BookOpen
          return (
            <Card
              key={cat.tag}
              className="rounded-2xl py-0 gap-0 p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <IconBubble icon={Ic} tone={c} size="xl" />
                <Badge
                  variant="secondary"
                  className={cn(
                    'rounded-md text-[10px] mono font-semibold tracker uppercase px-2 py-0.5',
                    tagClass[c]
                  )}
                >
                  {cat.tag}
                </Badge>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink-900 leading-snug">
                {cat.title}
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed mb-5">{cat.desc}</p>
              <div className="flex flex-col gap-2 pt-4 border-t border-ink-900/10">
                {cat.items.map((it) => (
                  <div key={it} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <div className="w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 bg-accent-soft border border-accent/30">
                      <Check className="size-2.5 text-accent-deep" strokeWidth={2.5} />
                    </div>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export function WhatWeBuild() {
  const { t } = useLang()
  const [tab, setTab] = useState<'agents' | 'internal'>('agents')
  const w = t.whatWeBuild

  return (
    <section id="what-we-build" className="bg-paper">
      <Container className="py-24 lg:py-32">
        <div className="max-w-3xl mb-10">
          <Eyebrow color="accent">{w.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-[1.08]">
            {w.title1} <br />
            <span className="italic font-medium text-ink-500">{w.title2}</span>
          </h2>
          <p className="mt-6 text-ink-600 text-lg leading-relaxed">{w.subtitle}</p>
        </div>

        <div className="mb-10 inline-flex items-center gap-1 p-1 bg-ink-900/5 rounded-full border border-ink-900/10">
          <button
            onClick={() => setTab('agents')}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2',
              tab === 'agents'
                ? 'bg-ink-900 text-paper shadow-card'
                : 'text-ink-500 hover:text-ink-900'
            )}
          >
            <Bot className={cn('size-3.5', tab === 'agents' ? 'text-warm' : '')} strokeWidth={2} />
            {w.tabAgents}
          </button>
          <button
            onClick={() => setTab('internal')}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2',
              tab === 'internal'
                ? 'bg-ink-900 text-paper shadow-card'
                : 'text-ink-500 hover:text-ink-900'
            )}
          >
            <Zap
              className={cn('size-3.5', tab === 'internal' ? 'text-warm' : '')}
              strokeWidth={2}
            />
            {w.tabInternal}
          </button>
        </div>

        {tab === 'agents' ? <AgentsBody key="a" /> : <InternalBody key="i" />}
      </Container>
    </section>
  )
}
