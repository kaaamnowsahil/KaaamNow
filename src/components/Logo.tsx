import { useId } from 'react'
import styles from './Logo.module.css'

export function Logo({ className }: { className?: string }) {
  const gradientId = useId()
  return (
    <a href="#top" className={`${styles.logo} ${className ?? ''}`} aria-label="KaaamNow home">
      <svg className={styles.mark} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-primary-soft)" />
            <stop offset="1" stopColor="var(--color-primary-hover)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
        <path
          d="M11.5 9.5v13M21 9.5l-6.5 6.5 6.5 6.5"
          stroke="var(--color-text)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.wordmark}>
        Kaaam<span className={styles.accent}>Now</span>
      </span>
    </a>
  )
}
