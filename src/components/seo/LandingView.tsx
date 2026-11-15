import { APP_LINKS, type LandingPage } from '../../data/site'
import { localizedPage } from '../../i18n/localize'
import { useLocale } from '../../i18n/locale'
import { JsonLd } from './JsonLd'
import { PageHeader } from '../PageHeader'
import { Footer } from '../Footer'
import styles from './LandingPage.module.css'

export function LandingView({ page }: { page: LandingPage }) {
  const { language, copy } = useLocale()
  const view = localizedPage(page, language, copy)
  return (
    <div className={styles.page}>
      <JsonLd path={page.path} />
      <PageHeader />
      <main id="main" className={`container ${styles.main}`}>
        <nav className={styles.crumbs} aria-label={copy.landing.crumbs}>
          <ol>
            {view.crumbs.map((crumb, index) => (
              <li key={crumb.href}>
                {index < view.crumbs.length - 1 ? <a href={crumb.href}>{crumb.name}</a> : <span>{crumb.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <article>
          <h1>{view.h1}</h1>
          {view.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          <p className={styles.ctas}>
            <a className={styles.primary} href={APP_LINKS.findWork}>
              {copy.landing.findWork}
            </a>
            <a className={styles.secondary} href={APP_LINKS.hireWorkers}>
              {copy.landing.hire}
            </a>
          </p>
        </article>
        <section aria-labelledby="faq-title">
          <h2 id="faq-title">{copy.landing.faqs}</h2>
          <div className={styles.faqs}>
            {view.faqs.map((faq) => (
              <details key={faq.question} open>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section aria-labelledby="related-title">
          <h2 id="related-title">{copy.landing.related}</h2>
          <ul className={styles.related}>
            {view.related.map((link) => (
              <li key={link.href + link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
