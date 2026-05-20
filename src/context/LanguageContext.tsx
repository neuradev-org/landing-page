import { createContext } from 'preact'
import { useContext } from 'preact/hooks'
import { useLanguage, type Language, languages } from '../hooks/useLanguage'
import type { ReactNode } from 'preact/compat'

interface LanguageContextValue {
  currentLanguage: Language
  changeLanguage: (lang: Language) => void
  languages: typeof languages
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { currentLanguage, changeLanguage } = useLanguage()
  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguageContext must be used within LanguageProvider')
  return ctx
}


