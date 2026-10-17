import { LogoMark } from './LogoMark'
import styles from './Logo.module.css'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={`${styles.logo} ${className ?? ''}`} aria-label="KaaamNow home">
      <LogoMark className={styles.mark} size={34} />
      <span className={styles.wordmark}>
        Kaaam<span className={styles.accent}>Now</span>
      </span>
    </a>
  )
}
