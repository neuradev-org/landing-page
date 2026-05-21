import { useEffect, useRef, useState } from 'preact/hooks'
import { Check, MoreVertical, Phone, Send } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import type { AgentScriptMsgT, VerticalId } from '../translations'
import { IconBubble, StatusPill } from './common'

export const VERTICAL_ORDER: VerticalId[] = [
  'inmobiliaria',
  'contable',
  'clinica',
  'ecommerce',
  'juridico',
  'gimnasio',
  'taller',
]

interface AgentDemoProps {
  active: VerticalId
  onCycle?: () => void
}

export function AgentDemo({ active, onCycle }: AgentDemoProps) {
  const { t } = useLang()
  const script = t.agentDemo.scripts[active] ?? t.agentDemo.scripts.inmobiliaria
  const [shown, setShown] = useState(0)
  const [typing, setTyping] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setShown(0)
    setTyping(false)
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [active, t])

  useEffect(() => {
    if (shown >= script.messages.length) {
      timerRef.current = setTimeout(() => {
        if (onCycle) onCycle()
      }, 3200)
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    }
    const next = script.messages[shown]
    if (next.from === 'agent' && next.typing) {
      timerRef.current = setTimeout(() => {
        setTyping(true)
        timerRef.current = setTimeout(() => {
          setTyping(false)
          setShown(s => s + 1)
        }, next.typing)
      }, Math.max(400, (next.delay || 1200) - next.typing))
    } else {
      timerRef.current = setTimeout(() => setShown(s => s + 1), next.delay || 1200)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [shown, active, script, onCycle])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [shown, typing])

  const visible = script.messages.slice(0, shown)

  return (
    <div className="relative">
      <StatusPill
        tone="light"
        label={
          <>
            {t.agentDemo.tag} · {script.label.toUpperCase()}
          </>
        }
        className="absolute -top-4 -left-4 z-10 hidden sm:inline-flex shadow-card text-ink-600"
      />

      <div className="relative rounded-3xl bg-white shadow-card-hover overflow-hidden border border-ink-200/80">
        <div className="px-5 py-3.5 bg-[#075E54] text-white flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
            ND
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">{script.title}</div>
            <div className="text-[11px] text-white/70 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              {t.agentDemo.online}
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Phone className="size-[18px]" strokeWidth={2} />
            <MoreVertical className="size-[18px]" strokeWidth={2} />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="px-4 py-5 flex flex-col gap-2.5 h-[420px] overflow-y-auto scrollbar-none"
          style={{
            background: '#ECE5DD',
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><path d='M0 20 L20 0 L40 20 L20 40 Z' fill='none' stroke='%23DDD5C8' stroke-width='0.5'/></svg>\")",
            backgroundSize: '40px 40px',
          }}
        >
          <div className="flex justify-center pb-1">
            <div className="px-2.5 py-0.5 bg-white/70 rounded-full text-[10px] font-medium mono text-ink-500">
              {t.agentDemo.today}
            </div>
          </div>

          {visible.map((m, i) => (
            <Bubble key={i} msg={m} />
          ))}

          {typing && (
            <div className="flex">
              <div className="bg-white rounded-2xl rounded-tl-md px-3 py-2.5 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-4 py-3 bg-[#F0F0F0] border-t border-black/5 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-ink-400 flex items-center justify-between">
            <span>{t.agentDemo.hint}</span>
            <span className="caret text-ink-300">|</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center text-white">
            <Send className="size-3.5 fill-current" strokeWidth={0} />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-3 sm:-right-6 bg-white rounded-2xl shadow-card-hover border border-ink-200/80 p-3 flex items-center gap-3 max-w-[260px]">
        <IconBubble icon={Check} tone="accent" size="sm" />
        <div className="min-w-0">
          <div className="text-[11px] mono text-ink-400 leading-tight">{script.subtitle}</div>
          <div className="text-xs font-semibold text-ink-900 mt-0.5">{t.agentDemo.responseFooter}</div>
        </div>
      </div>
    </div>
  )
}

function Bubble({ msg }: { msg: AgentScriptMsgT }) {
  if (msg.from === 'system') {
    return (
      <div className="flex justify-center fade-up">
        <div className="px-3 py-1.5 bg-white/85 backdrop-blur rounded-lg text-[11px] font-medium mono text-ink-600 max-w-[80%] text-center border border-emerald-200/60">
          {msg.text}
        </div>
      </div>
    )
  }
  const isLead = msg.from === 'lead'
  return (
    <div className={`flex fade-up ${isLead ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-3 py-2 text-[13px] leading-snug shadow-sm ${
          isLead
            ? 'bg-[#DCF8C6] rounded-2xl rounded-tr-md text-ink-900'
            : 'bg-white rounded-2xl rounded-tl-md text-ink-900'
        }`}
      >
        {msg.text}
        <div className="text-[9px] text-ink-400 mt-1 text-right flex items-center gap-1 justify-end">
          10:42
          {isLead && (
            <svg width="12" height="12" viewBox="0 0 16 11" fill="none">
              <path
                d="M11.071 0.653442L4.32 7.40451L1.07 4.15451L0 5.22451L4.32 9.54451L12.13 1.72451L11.071 0.653442Z"
                fill="#34B7F1"
              />
              <path
                d="M15 0.653442L8.249 7.40451L7.21 6.36551L6.151 7.42351L8.249 9.54451L16.059 1.72451L15 0.653442Z"
                fill="#34B7F1"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}
