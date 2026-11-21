import { useEffect, useState } from 'react'
import { useLocale } from '../../i18n/locale'
import styles from './ActivePresence.module.css'

type Presence = {
  active_businesses: number
  active_workers: number
  businesses: string[]
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://kaaamnow-backend.vercel.app'
const PRESENCE_URL = `${API_BASE}/api/v1/content/presence`

const HIDDEN_BUSINESSES = new Set([
  'aman limited',
  'abc',
  'cafe',
  'cafe coffee',
  'xyz',
  'sancharii',
  'plorix',
])

function normalizeName(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, ' ')
}

export function ActivePresence() {
  const [presence, setPresence] = useState<Presence | null>(null)
  const { copy } = useLocale()

  useEffect(() => {
    let ignore = false
    const load = () => {
      fetch(PRESENCE_URL)
        .then((response) => (response.ok ? (response.json() as Promise<Presence>) : null))
        .then((data) => {
          if (!ignore && data) setPresence(data)
        })
        .catch(() => undefined)
    }
    load()
    const timer = window.setInterval(load, 30_000)
    return () => {
      ignore = true
      window.clearInterval(timer)
    }
  }, [])

  if (!presence) return null

  const businesses = presence.businesses.filter((name) => !HIDDEN_BUSINESSES.has(normalizeName(name)))
  const businessCount = Math.max(0, presence.active_businesses - (presence.businesses.length - businesses.length))
  const businessLabel = (businessCount === 1 ? copy.presence.business : copy.presence.businesses).replace('{count}', String(businessCount))
  const workerLabel = (presence.active_workers === 1 ? copy.presence.worker : copy.presence.workers).replace('{count}', String(presence.active_workers))

  return (
    <div className={styles.row} aria-live="polite">
      <p className={`${styles.stat} ${styles.business}`}>
        <span className={styles.dot} aria-hidden="true" />
        {businessLabel}
      </p>
      <p className={`${styles.stat} ${styles.worker}`}>
        <span className={styles.dot} aria-hidden="true" />
        {workerLabel}
      </p>
    </div>
  )
}
