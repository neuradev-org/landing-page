import { useState, useEffect } from 'preact/hooks'

export type Language = 'en' | 'es'

export interface LanguageOption {
  code: Language
  name: string
  flag: string
}

export const languages: LanguageOption[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

const STORAGE_KEY = 'language'

const detectInitial = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // ignore
  }
  const browser = navigator.language.split('-')[0]
  return browser === 'en' ? 'en' : 'es'
}

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(detectInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, currentLanguage)
    } catch {
      // ignore
    }
    document.documentElement.lang = currentLanguage
  }, [currentLanguage])

  const changeLanguage = (language: Language) => setCurrentLanguage(language)

  return { currentLanguage, changeLanguage }
}
