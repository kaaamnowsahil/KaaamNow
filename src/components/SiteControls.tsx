import { Check, Languages, Moon, Sun } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { LANGUAGES, useLocale } from '../i18n/locale'
import styles from './SiteControls.module.css'

const THEME_KEY = 'kaaamnow-theme'

function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#F6F4FB' : '#0B1020')
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* the icon still toggles for this visit */
  }
}

export function SiteControls() {
  const { language, setLanguage, copy } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={styles.controls} ref={rootRef}>
      <div className={styles.language}>
        <button
          type="button"
          className={styles.iconButton}
          aria-label={copy.nav.language}
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
        >
          <Languages size={18} strokeWidth={1.75} aria-hidden="true" />
          <span className={styles.code}>{language.toUpperCase()}</span>
        </button>
        {open ? (
          <ul id={listId} className={styles.menu} role="listbox" aria-label={copy.nav.language}>
            {LANGUAGES.map((option) => {
              const selected = option.code === language
              return (
                <li key={option.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`${styles.option} ${selected ? styles.optionSelected : ''}`}
                    onClick={() => {
                      setLanguage(option.code)
                      setOpen(false)
                    }}
                  >
                    <span>
                      <strong>{option.nativeName}</strong>
                      <small>{option.name}</small>
                    </span>
                    {selected ? <Check size={16} strokeWidth={2} aria-hidden="true" /> : null}
                  </button>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
      <button
        type="button"
        className={styles.iconButton}
        aria-label={copy.nav.theme}
        onClick={() => applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light')}
      >
        <Sun className={styles.sun} size={18} strokeWidth={1.75} aria-hidden="true" />
        <Moon className={styles.moon} size={18} strokeWidth={1.75} aria-hidden="true" />
      </button>
    </div>
  )
}
