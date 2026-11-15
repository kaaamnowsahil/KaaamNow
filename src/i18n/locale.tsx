import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { SITE_COPY } from './languages'
import type { SiteCopy } from './siteCopy'

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']

const LANGUAGE_KEY = 'kaaamnow-language'
const CODES = new Set<string>(LANGUAGES.map((language) => language.code))

function isLanguage(value: string | null): value is LanguageCode {
  return value !== null && CODES.has(value)
}

/** Device language first. An India locale that is only English uses Hindi. */
export function regionLanguage(): LanguageCode {
  if (typeof navigator === 'undefined') return 'en'
  const locales = (navigator.languages?.length ? [...navigator.languages] : [navigator.language]).filter(Boolean)
  for (const locale of locales) {
    const code = locale.toLowerCase().split('-')[0]
    if (isLanguage(code) && code !== 'en') return code
  }
  const inIndia =
    locales.some((locale) => locale.toLowerCase().endsWith('-in')) ||
    (() => {
      try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
        return timeZone === 'Asia/Kolkata' || timeZone === 'Asia/Calcutta'
      } catch {
        return false
      }
    })()
  if (inIndia) return 'hi'
  for (const locale of locales) {
    const code = locale.toLowerCase().split('-')[0]
    if (isLanguage(code)) return code
  }
  return 'en'
}

function storedLanguage(): LanguageCode | null {
  try {
    const value = localStorage.getItem(LANGUAGE_KEY)
    return isLanguage(value) ? value : null
  } catch {
    return null
  }
}

function applyLanguage(language: LanguageCode) {
  document.documentElement.lang = language === 'en' ? 'en-IN' : language
}

type LocaleValue = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  copy: SiteCopy
}

const LocaleContext = createContext<LocaleValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('en')

  useEffect(() => {
    const next = storedLanguage() ?? regionLanguage()
    setLanguageState(next)
    applyLanguage(next)
  }, [])

  const value = useMemo<LocaleValue>(() => {
    return {
      language,
      copy: SITE_COPY[language],
      setLanguage: (next) => {
        setLanguageState(next)
        applyLanguage(next)
        try {
          localStorage.setItem(LANGUAGE_KEY, next)
        } catch {
          /* the tab still switches for this visit */
        }
      },
    }
  }, [language])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}
