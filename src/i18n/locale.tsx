import { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState, type ReactNode } from 'react'
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
const LANGUAGE_SET_KEY = 'kaaamnow-language-set'
const CODES = new Set<string>(LANGUAGES.map((language) => language.code))

function isLanguage(value: string | null): value is LanguageCode {
  return value !== null && CODES.has(value)
}

function normalizeLanguage(value?: string | null): LanguageCode | null {
  const code = value?.trim().toLowerCase().replace('_', '-') ?? ''
  if (!code) return null
  const short = code.split('-')[0]
  if (isLanguage(short)) return short
  return null
}

/** Same order as the app: browser language, then the first preferred language, then the locale. */
export function deviceLanguage(): LanguageCode {
  if (typeof navigator === 'undefined') return 'en'
  const candidates = [
    navigator.language,
    navigator.languages?.[0],
    (() => {
      try {
        return Intl.DateTimeFormat().resolvedOptions().locale
      } catch {
        return undefined
      }
    })(),
  ]
  for (const candidate of candidates) {
    const language = normalizeLanguage(candidate)
    if (language) return language
  }
  return 'en'
}

function rememberLanguage(language: LanguageCode) {
  try {
    localStorage.setItem(LANGUAGE_KEY, language)
    localStorage.setItem(LANGUAGE_SET_KEY, '1')
  } catch {
    /* the tab still uses this language for this visit */
  }
}

function storedLanguage(): LanguageCode | null {
  try {
    const value = localStorage.getItem(LANGUAGE_KEY)
    return isLanguage(value) ? value : null
  } catch {
    return null
  }
}

function chosenLanguage(): LanguageCode | null {
  try {
    const stored = storedLanguage()
    if (!stored) return null
    if (localStorage.getItem(LANGUAGE_SET_KEY) === '1') return stored
    localStorage.setItem(LANGUAGE_SET_KEY, '1')
    return stored
  } catch {
    return null
  }
}

const STATE_LANGUAGE: Record<string, LanguageCode> = {
  'tamil nadu': 'ta',
  puducherry: 'ta',
  pondicherry: 'ta',
  kerala: 'ml',
  karnataka: 'kn',
  'andhra pradesh': 'te',
  telangana: 'te',
  maharashtra: 'mr',
  gujarat: 'gu',
  'dadra and nagar haveli and daman and diu': 'gu',
  'daman and diu': 'gu',
  'dadra and nagar haveli': 'gu',
  'west bengal': 'bn',
  odisha: 'or',
  orissa: 'or',
  punjab: 'pa',
  chandigarh: 'pa',
  delhi: 'hi',
  'nct of delhi': 'hi',
  'national capital territory of delhi': 'hi',
  'uttar pradesh': 'hi',
  'madhya pradesh': 'hi',
  rajasthan: 'hi',
  bihar: 'hi',
  haryana: 'hi',
  'himachal pradesh': 'hi',
  uttarakhand: 'hi',
  jharkhand: 'hi',
  chhattisgarh: 'hi',
  'jammu and kashmir': 'hi',
  ladakh: 'hi',
  goa: 'hi',
}

/** Indian state name to the language spoken there. Unknown Indian states use Hindi. */
export function languageForPlace(country?: string | null, region?: string | null): LanguageCode | null {
  const place = (country ?? '').trim().toLowerCase()
  if (place !== 'in' && place !== 'india') return null
  const state = (region ?? '').trim().toLowerCase()
  return STATE_LANGUAGE[state] ?? 'hi'
}

function inIndia(): boolean {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return timeZone === 'Asia/Kolkata' || timeZone === 'Asia/Calcutta'
  } catch {
    return false
  }
}

function readPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('geolocation unavailable'))
      return
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 10 * 60 * 1000,
    })
  })
}

/** Browser language is often English even inside Tamil Nadu. The state decides the language. */
async function languageFromLocation(): Promise<LanguageCode | null> {
  try {
    const position = await readPosition()
    const { latitude, longitude } = position.coords
    const response = await fetch(
      `https://api-bdc.io/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
    )
    if (!response.ok) return inIndia() ? 'hi' : null
    const place = (await response.json()) as { countryCode?: string; principalSubdivision?: string }
    return languageForPlace(place.countryCode, place.principalSubdivision) ?? (inIndia() ? 'hi' : null)
  } catch {
    return inIndia() ? 'hi' : null
  }
}

/** Saved choice, otherwise the browser language. Location may replace English after this. */
export function preferredLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en'
  return chosenLanguage() ?? deviceLanguage()
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

  useLayoutEffect(() => {
    const next = preferredLanguage()
    setLanguageState(next)
    applyLanguage(next)
  }, [])

  useEffect(() => {
    if (chosenLanguage()) return
    if (deviceLanguage() !== 'en') return
    let cancelled = false
    languageFromLocation().then((next) => {
      if (cancelled || !next || chosenLanguage()) return
      setLanguageState(next)
      applyLanguage(next)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo<LocaleValue>(() => {
    return {
      language,
      copy: SITE_COPY[language],
      setLanguage: (next) => {
        setLanguageState(next)
        applyLanguage(next)
        rememberLanguage(next)
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
