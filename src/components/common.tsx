import type { ComponentChildren } from 'preact'
import { Check, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

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
        'text-[11px] mono tracker uppercase font-semibold mb-4 flex items-center gap-2',
        tone,
      )}
    >
      <span className="w-6 h-px bg-current opacity-50" />
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
      : 'bg-white border-ink-200/80 text-ink-600'
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

export function NeuradevLogo({
  className,
  size = 'md',
}: {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const dim =
    size === 'sm'
      ? 'w-7 h-7 text-[12px]'
      : size === 'lg'
        ? 'w-10 h-10 text-base'
        : 'w-9 h-9 text-[13px]'
  return (
    <div
      className={cn('relative rounded-xl overflow-hidden', dim, className)}
      style={{
        background:
          'linear-gradient(135deg, #4F46E6 0%, #7C3AED 50%, #10B981 100%)',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold mono">
        N
      </div>
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
    <div className={cn('rounded-xl bg-ink-50 border border-ink-200/60 px-4 py-3', className)}>
      <div className="text-[11px] mono tracker uppercase text-ink-400 mb-1">{k}</div>
      <div className="text-xs font-medium text-ink-700">{v}</div>
    </div>
  )
}
