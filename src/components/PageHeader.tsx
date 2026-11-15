import { ChevronLeft } from 'lucide-react'
import { useLocale } from '../i18n/locale'
import { SiteControls } from './SiteControls'
import styles from './PageHeader.module.css'

export function PageHeader() {
  const { copy } = useLocale()
  return (
    <header className={`container ${styles.header}`}>
      <a href="/" className={styles.back} aria-label={copy.nav.back}>
        <ChevronLeft size={20} strokeWidth={1.75} aria-hidden="true" />
      </a>
      <a href="/" className={styles.brand} aria-label={copy.nav.home}>
        Kaaam<span>Now</span>
      </a>
      <div className={styles.tools}>
        <SiteControls />
      </div>
    </header>
  )
}
