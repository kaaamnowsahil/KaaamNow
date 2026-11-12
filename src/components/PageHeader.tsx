import { ChevronLeft } from 'lucide-react'
import styles from './PageHeader.module.css'

export function PageHeader() {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/" className={styles.back} aria-label="Back">
        <ChevronLeft size={20} strokeWidth={1.75} aria-hidden="true" />
      </a>
      <a href="/" className={styles.brand} aria-label="KaaamNow home">
        Kaaam<span>Now</span>
      </a>
    </header>
  )
}
