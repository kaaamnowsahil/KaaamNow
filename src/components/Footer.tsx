import { ArrowUp } from 'lucide-react'
import { APP_LINKS } from '../data/appLinks'
import { CATEGORIES, CITIES, cityHirePath, cityJobsPath } from '../data/site'
import { useWorkCategories } from '../data/useWorkCategories'
import { COMPANY_ADDRESS, COMPANY_MAPS_URL } from '../data/company'
import { CONTACT_EMAILS } from '../data/contacts'
import { useLocale } from '../i18n/locale'
import { Logo } from './Logo'
import styles from './Footer.module.css'

type FooterItem = {
  key: string
  label: string
  href: string
}

export function Footer() {
  const year = new Date().getFullYear()
  const { copy } = useLocale()
  const jobTypes = useWorkCategories()
  const footer = copy.footer
  const columns: { title: string; items: FooterItem[] }[] = [
    {
      title: footer.product,
      items: [
        { key: 'benefits', label: footer.links[0], href: '/#benefits' },
        { key: 'how', label: footer.links[1], href: '/#how-it-works' },
        { key: 'categories', label: footer.links[2], href: '/#categories' },
        { key: 'industries', label: footer.links[3], href: '/#industries' },
        { key: 'preview', label: footer.links[4], href: '/#preview' },
      ],
    },
    {
      title: footer.getStarted,
      items: [
        { key: 'businesses', label: footer.started[0], href: '/#businesses' },
        { key: 'workers', label: footer.started[1], href: '/#workers' },
        { key: 'login', label: footer.started[2], href: APP_LINKS.login },
        { key: 'faq', label: footer.started[3], href: APP_LINKS.faq },
      ],
    },
    {
      title: footer.company,
      items: [
        { key: 'team', label: footer.companyLinks[0], href: '/team' },
        { key: 'privacy', label: footer.companyLinks[1], href: '/privacy' },
        { key: 'terms', label: footer.companyLinks[2], href: '/terms' },
        { key: 'deletion', label: footer.companyLinks[3], href: '/account-deletion' },
      ],
    },
  ]
  const directories: { title: string; items: FooterItem[] }[] = [
    {
      title: footer.jobsByCity,
      items: CITIES.map((city) => ({
        key: city.slug,
        label: city.name,
        href: cityJobsPath(city.slug),
      })),
    },
    {
      title: footer.hireByCity,
      items: CITIES.map((city) => ({
        key: city.slug,
        label: city.name,
        href: cityHirePath(city.slug),
      })),
    },
    {
      title: footer.workTypes,
      items: jobTypes.length
        ? jobTypes.map((job) => ({
            key: job.slug,
            label: job.label,
            href: APP_LINKS.workerHome,
          }))
        : CATEGORIES.map((category, index) => ({
            key: category.path,
            label: copy.landing.categories[index].label,
            href: category.path,
          })),
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>{footer.tagline}</p>
        </div>

        <nav className={styles.columns} aria-label={footer.nav}>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.list}>
                {column.items.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className={styles.link}
                      rel={item.href.startsWith('http') ? 'nofollow' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={`container ${styles.directory}`}>
        {directories.map((group) => (
          <div key={group.title}>
            <h2 className={styles.columnTitle}>{group.title}</h2>
            <ul className={styles.pills}>
              {group.items.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className={styles.pill}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.contactWrap}`}>
        <section className={styles.contact} aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className={styles.columnTitle}>{footer.contact}</h2>
          <div className={styles.contactGrid}>
            <div><h3 className={styles.contactLabel}>{footer.email}</h3><ul className={styles.list}>
              {CONTACT_EMAILS.map((contact) => (
                <li key={contact.email}>
                  <a className={styles.link} href={`mailto:${contact.email}`}>
                    {contact.label} · {contact.email}
                  </a>
                </li>
              ))}
            </ul></div>
            <div><h3 className={styles.contactLabel}>{footer.phone}</h3><ul className={styles.list}>
              <li><a className={styles.link} href="https://wa.me/918618796332" target="_blank" rel="noopener noreferrer">KaaamNow · +91 86187 96332</a></li>
              <li><a className={styles.link} href="tel:+918088675325">Sumit · +91 80886 75325</a></li>
              <li><a className={styles.link} href="tel:+919523857003">Anisha · +91 95238 57003</a></li>
            </ul></div>
            <div>
              <h3 className={styles.contactLabel}>{footer.social}</h3>
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
              <h3 className={styles.contactLabel}>{footer.location}</h3>
              <address className={styles.address}>
                <a className={styles.link} href={COMPANY_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  {COMPANY_ADDRESS}
                </a>
              </address>
            </div>
          </div>
        </section>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} KAAAMNOW TECHNOLOGY LLP. {footer.rights}</p>
        <a href="#top" className={styles.backToTop}>
          {footer.back}
          <ArrowUp size={16} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
