import { useEffect, useState } from 'react'
import styles from './ActivePresence.module.css'

type Presence = {
  active_businesses: number
  active_workers: number
  businesses: string[]
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://kaaamnow-backend.vercel.app'
const PRESENCE_URL = `${API_BASE}/api/v1/content/presence`

function label(count: number, singular: string, plural: string) {
  return `${count} active ${count === 1 ? singular : plural}`
}

export function ActivePresence() {
  const [presence, setPresence] = useState<Presence | null>(null)

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

  return (
    <div className={styles.row} aria-live="polite">
      <p className={`${styles.stat} ${styles.business}`}>
        <span className={styles.dot} aria-hidden="true" />
        {label(presence.active_businesses, 'business', 'businesses')}
      </p>
      {presence.businesses.length > 0 ? (
        <ul className={styles.names}>
          {presence.businesses.map((name, index) => (
            <li key={`${name}-${index}`} className={styles.name}>
              {name}
            </li>
          ))}
        </ul>
      ) : null}
      <p className={styles.stat}>
        <span className={`${styles.dot} ${styles.workerDot}`} aria-hidden="true" />
        {label(presence.active_workers, 'worker', 'workers')}
      </p>
    </div>
  )
}
