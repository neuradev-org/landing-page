import type { ComponentChildren } from 'preact'
import { useEffect, useId, useRef, useState } from 'preact/hooks'
import { Check, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Reveals children with a fade/rise when they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ComponentChildren
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('reveal', seen && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export function Container({
  children,
  className,
}: {
  children: ComponentChildren
  className?: string
}) {
  return <div className={cn('max-w-7xl mx-auto px-6', className)}>{children}</div>
}

export function Eyebrow({
  children,
  color = 'brand',
}: {
  children: ComponentChildren
  color?: 'brand' | 'accent'
}) {
  const tone = color === 'brand' ? 'text-brand' : 'text-accent-deep'
  return (
    <div
      className={cn(
        'text-[11px] mono tracker uppercase font-semibold mb-5 flex items-center gap-2.5',
        tone,
      )}
    >
      <span className="size-1.5 rotate-45 bg-current" />
      {children}
    </div>
  )
}

interface IconBubbleProps {
  icon: LucideIcon
  tone?: 'brand' | 'accent' | 'warm' | 'ink' | 'inverse'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const bubbleTone: Record<NonNullable<IconBubbleProps['tone']>, string> = {
  brand: 'bg-brand-soft text-brand',
  accent: 'bg-accent-soft text-accent-deep',
  warm: 'bg-warm-soft text-warm-deep',
  ink: 'bg-ink-100 text-ink-700',
  inverse: 'bg-white/10 text-white',
}

const bubbleSize: Record<NonNullable<IconBubbleProps['size']>, string> = {
  sm: 'w-9 h-9 rounded-xl [&_svg]:size-4',
  md: 'w-10 h-10 rounded-xl [&_svg]:size-[18px]',
  lg: 'w-11 h-11 rounded-xl [&_svg]:size-[18px]',
  xl: 'w-12 h-12 rounded-2xl [&_svg]:size-5',
}

export function IconBubble({
  icon: Icon,
  tone = 'brand',
  size = 'md',
  className,
}: IconBubbleProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center shrink-0',
        bubbleSize[size],
        bubbleTone[tone],
        className,
      )}
    >
      <Icon strokeWidth={2} />
    </div>
  )
}

export function CheckBullet({
  tone = 'accent',
  className,
}: {
  tone?: 'accent' | 'inverse'
  className?: string
}) {
  const palette =
    tone === 'inverse'
      ? 'bg-white/15 border border-white/25 text-white'
      : 'bg-accent-soft text-accent-deep'
  return (
    <div
      className={cn(
        'w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5',
        palette,
        className,
      )}
    >
      <Check className="size-3" strokeWidth={2.5} />
    </div>
  )
}

export function StatusPill({
  label,
  tone = 'light',
  className,
}: {
  label: ComponentChildren
  tone?: 'light' | 'dark'
  className?: string
}) {
  const palette =
    tone === 'dark'
      ? 'bg-white/[0.06] border-white/10 text-white/70'
      : 'bg-cream border-ink-200 text-ink-600'
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs mono',
        palette,
        className,
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-emerald" />
      {label}
    </div>
  )
}

// Neural-brain mark geometry (viewBox 0 0 120 100). Coordinates exported from
// the brand logo source. Edges are [x1,y1,x2,y2]; nodes are [cx,cy]; accents
// are [cx,cy,kind] glowing hubs.
const LOGO_EDGES = [[24, 68, 15, 56],[24, 68, 36, 69],[24, 68, 40, 60],[24, 68, 30, 53],[15, 56, 16, 42],[15, 56, 30, 53],[16, 42, 24, 30],[16, 42, 33, 42],[16, 42, 30, 53],[24, 30, 37, 21],[24, 30, 33, 42],[37, 21, 52, 17],[37, 21, 45, 31],[52, 17, 68, 16],[52, 17, 45, 31],[52, 17, 60, 28],[68, 16, 83, 20],[68, 16, 60, 28],[68, 16, 75, 33],[83, 20, 96, 29],[83, 20, 75, 33],[96, 29, 103, 42],[96, 29, 87, 43],[103, 42, 100, 56],[103, 42, 87, 43],[100, 56, 90, 66],[100, 56, 87, 43],[100, 56, 85, 55],[90, 66, 78, 70],[90, 66, 85, 55],[78, 70, 64, 71],[78, 70, 70, 61],[78, 70, 85, 55],[64, 71, 49, 70],[64, 71, 56, 59],[64, 71, 70, 61],[64, 71, 58, 80],[49, 70, 36, 69],[49, 70, 40, 60],[49, 70, 56, 59],[49, 70, 58, 80],[36, 69, 40, 60],[36, 69, 30, 53],[33, 42, 45, 31],[33, 42, 44, 51],[33, 42, 30, 53],[45, 31, 60, 28],[60, 28, 75, 33],[60, 28, 59, 46],[75, 33, 87, 43],[75, 33, 73, 51],[87, 43, 73, 51],[87, 43, 85, 55],[44, 51, 59, 46],[44, 51, 40, 60],[44, 51, 56, 59],[44, 51, 30, 53],[59, 46, 73, 51],[59, 46, 56, 59],[73, 51, 70, 61],[73, 51, 85, 55],[40, 60, 56, 59],[40, 60, 30, 53],[56, 59, 70, 61],[70, 61, 85, 55],[58, 80, 53, 89]] as const
const LOGO_NODES = [[24, 68],[15, 56],[16, 42],[24, 30],[37, 21],[52, 17],[83, 20],[96, 29],[100, 56],[90, 66],[78, 70],[64, 71],[49, 70],[36, 69],[33, 42],[45, 31],[75, 33],[44, 51],[59, 46],[73, 51],[40, 60],[70, 61],[85, 55],[30, 53],[58, 80],[53, 89]] as const
const LOGO_ACCENTS = [[68, 16, 'amber'],[103, 42, 'emerald'],[60, 28, 'amber'],[87, 43, 'emerald'],[56, 59, 'emerald']] as const
const LOGO_CONTOUR =
  'M 36 70 C 22 70, 12 60, 15 48 C 6 44, 9 30, 21 28 C 18 16, 32 10, 44 17 C 50 9, 66 9, 73 17 C 86 10, 102 16, 101 31 C 110 36, 109 50, 98 53 C 103 63, 95 71, 84 69 C 82 78, 70 79, 65 72 C 58 86, 50 84, 50 73 C 44 73, 39 73, 36 70 Z'
const LOGO_SIGNAL =
  'M 24 68 L 33 42 L 45 31 L 60 28 L 75 33 L 87 43 L 85 55 L 70 61 L 56 59 L 40 60 L 24 68'

export function NeuradevLogo({
  className,
  size = 'md',
  tone = 'light',
  tile = false,
}: {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  tone?: 'light' | 'dark'
  /** Wrap the mark in the indigo gradient rounded-square brand tile. */
  tile?: boolean
}) {
  const uid = useId()
  const f = (n: string) => `nd-${n}-${uid}`.replace(/:/g, '')

  const dim = size === 'sm' ? 'w-8' : size === 'lg' ? 'w-12' : 'w-10'

  // On the indigo tile the mark always uses the light-on-dark palette.
  const markTone = tile ? 'dark' : tone
  const c =
    markTone === 'dark'
      ? { edge: '#A5B4FC', node: '#E0E7FF', contour: '#FFFFFF', contourOp: 0.16, amber: '#FBBF24', emerald: '#34D399' }
      : { edge: '#4338CA', node: '#4338CA', contour: '#1E1A13', contourOp: 0.1, amber: '#E8A33D', emerald: '#11866A' }

  const accentColor = (kind: string) => (kind === 'amber' ? c.amber : c.emerald)

  const svg = (
    <svg
      viewBox="0 0 120 100"
      className={cn('h-auto', tile ? 'w-[78%]' : cn('shrink-0', dim, className))}
      fill="none"
      role="img"
      aria-label="Neuradev"
    >
      <defs>
        <linearGradient id={f('edge')} x1="0" y1="0" x2="120" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={c.edge} />
          <stop offset="1" stopColor={tone === 'dark' ? '#A78BFA' : '#7C3AED'} />
        </linearGradient>
        <filter id={f('bloom')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
        <filter id={f('glow')} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* brain contour */}
      <path d={LOGO_CONTOUR} stroke={c.contour} strokeWidth="1" fill="none" opacity={c.contourOp} strokeLinejoin="round" />

      {/* edge bloom */}
      <g filter={`url(#${f('bloom')})`} opacity="0.26">
        {LOGO_EDGES.map(([x1, y1, x2, y2], i) => (
          <line key={`b${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.edge} strokeWidth="1.1" />
        ))}
      </g>

      {/* edges */}
      <g>
        {LOGO_EDGES.map(([x1, y1, x2, y2], i) => (
          <line key={`e${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#${f('edge')})`} strokeWidth="1.1" opacity="0.82" />
        ))}
      </g>

      {/* accent halos */}
      {LOGO_ACCENTS.map(([cx, cy, kind], i) => (
        <circle key={`h${i}`} cx={cx} cy={cy} r="5.4" fill={accentColor(kind)} opacity="0.22" filter={`url(#${f('bloom')})`} className="nd-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
      ))}

      {/* nodes */}
      {LOGO_NODES.map(([cx, cy], i) => (
        <circle key={`n${i}`} cx={cx} cy={cy} r="2.2" fill={c.node} opacity="0.96" />
      ))}

      {/* accent hubs */}
      {LOGO_ACCENTS.map(([cx, cy, kind], i) => (
        <circle key={`a${i}`} cx={cx} cy={cy} r="3.1" fill={accentColor(kind)} filter={`url(#${f('glow')})`} />
      ))}

      {/* traveling signal */}
      <circle r="2" fill={c.emerald} stroke="#fff" strokeWidth="0.6">
        <animateMotion dur="3.4s" repeatCount="indefinite" {...({ path: LOGO_SIGNAL } as Record<string, string>)} />
        <animate attributeName="opacity" dur="3.4s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.08;0.92;1" />
      </circle>
    </svg>
  )

  if (!tile) return svg

  const tileDim = size === 'sm' ? 'size-8' : size === 'lg' ? 'size-11' : 'size-9'
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-[28%] shadow-sm shrink-0',
        tileDim,
        className,
      )}
      style={{ background: 'linear-gradient(155deg, #6366F1 0%, #4F46E6 55%, #4338CA 100%)' }}
    >
      {svg}
    </div>
  )
}

export function MetaTag({
  k,
  v,
  className,
}: {
  k: ComponentChildren
  v: ComponentChildren
  className?: string
}) {
  return (
    <div className={cn('border-t border-ink-900/25 pt-3 px-0.5', className)}>
      <div className="text-[10px] mono tracker uppercase text-ink-400 mb-1">{k}</div>
      <div className="text-xs font-medium text-ink-700">{v}</div>
    </div>
  )
}
