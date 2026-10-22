import { ArrowUp } from 'lucide-react'
import { useComingSoon } from '../context/comingSoonContext'
import { Logo } from './Logo'
import styles from './Footer.module.css'

type FooterItem = { label: string; href: `#${string}` } | { label: string; modal: string }

const COLUMNS: { title: string; items: FooterItem[] }[] = [
  {
    title: 'Product',
    items: [
      { label: 'Benefits', href: '#benefits' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Work categories', href: '#categories' },
      { label: 'Business categories', href: '#industries' },
      { label: 'Preview', href: '#preview' },
    ],
  },
  {
    title: 'Get started',
    items: [
      { label: 'For businesses', href: '#businesses' },
      { label: 'For workers', href: '#workers' },
      { label: 'Join KaaamNow', href: '#get-started' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Founders', href: '#team' },
      { label: 'Contact', modal: 'Contact KaaamNow' },
      { label: 'Privacy', modal: 'Our privacy policy is coming soon' },
      { label: 'Terms', modal: 'Our terms of service are coming soon' },
    ],
  },
]

export function Footer() {
  const { open } = useComingSoon()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            The on-demand workforce marketplace connecting businesses with people for hourly shifts,
            daily jobs, and flexible assignments.
          </p>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.list}>
                {column.items.map((item) => (
                  <li key={item.label}>
                    {'href' in item ? (
                      <a href={item.href} className={styles.link}>
                        {item.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        className={styles.link}
                        onClick={() => open({
                          title: item.modal,
                          description: item.label === 'Contact'
                            ? 'Email us at sahil.shrivastava@kaaamnow.in, sumit.pandey@kaaamnow.in, or anishasriwastav53@gmail.com. Call Sahil at +91 85570 62835, Anish at +91 95238 57003, or Sumit at +91 80886 75325. Visit us at 148, 1st Main, 1st Cross, Malleshpallya, 1st floor, Bengaluru, Karnataka 560075, India. KaaamNow is launching soon.'
                            : undefined,
                        })}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} KaaamNow. All rights reserved.</p>
        <a href="#top" className={styles.backToTop}>
          Back to top
          <ArrowUp size={16} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
