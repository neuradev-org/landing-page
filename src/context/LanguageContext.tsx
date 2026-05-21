import { createContext } from 'preact'
import { useContext, useMemo } from 'preact/hooks'
import { useLanguage, type Language, languages } from '../hooks/useLanguage'
import { getTranslations, type Translations } from '../translations'
import type { ReactNode } from 'preact/compat'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
  languages: typeof languages
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { currentLanguage, changeLanguage } = useLanguage()
  const value = useMemo<LanguageContextValue>(
    () => ({
      lang: currentLanguage,
      setLang: changeLanguage,
      t: getTranslations(currentLanguage),
      languages,
    }),
    [currentLanguage],
  )
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
