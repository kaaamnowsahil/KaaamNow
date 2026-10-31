import { ArrowUp } from 'lucide-react'
import { useComingSoon } from '../context/comingSoonContext'
import { Logo } from './Logo'
import styles from './Footer.module.css'

type FooterItem =
  | { label: string; href: `#${string}` | '/account-deletion' }
  | { label: string; modal: string }

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
      { label: 'Privacy', modal: 'Our privacy policy is coming soon' },
      { label: 'Terms', modal: 'Our terms of service are coming soon' },
      { label: 'Account deletion', href: '/account-deletion' },
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
                        onClick={() => open({ title: item.modal })}
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
        <section className={styles.contact} aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className={styles.columnTitle}>Contact</h2>
          <div className={styles.contactGrid}>
            <div><h3 className={styles.contactLabel}>Email</h3><ul className={styles.list}>
              <li><a className={styles.link} href="mailto:sumit.pandey@kaaamnow.in">sumit.pandey@kaaamnow.in</a></li>
              <li><a className={styles.link} href="mailto:anishasriwastav53@gmail.com">anishasriwastav53@gmail.com</a></li>
            </ul></div>
            <div><h3 className={styles.contactLabel}>Phone</h3><ul className={styles.list}>
              <li><a className={styles.link} href="tel:+918618796332">KaaamNow · +91 86187 96332</a></li>
              <li><a className={styles.link} href="tel:+918088675325">Sumit · +91 80886 75325</a></li>
              <li><a className={styles.link} href="tel:+919523857003">Anisha · +91 95238 57003</a></li>
            </ul></div>
            <div>
              <h3 className={styles.contactLabel}>Social</h3>
              <ul className={styles.list}>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.instagram.com/kaaamnow?exln=enhwajhqd3V1eXIw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/company/kaaamnow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.location}>
              <h3 className={styles.contactLabel}>Company location</h3>
              <address className={styles.address}>148, 1st Main, 1st Cross, Malleshpallya, 1st floor, Bengaluru, Karnataka 560075, India</address>
            </div>
          </div>
        </section>
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
