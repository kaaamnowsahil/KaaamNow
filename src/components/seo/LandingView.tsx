import { APP_LINKS, type LandingPage } from '../../data/site'
import { JsonLd } from './JsonLd'
import { PageHeader } from '../PageHeader'
import { Footer } from '../Footer'
import styles from './LandingPage.module.css'

export function LandingView({ page }: { page: LandingPage }) {
  return (
    <div className={styles.page}>
      <JsonLd path={page.path} />
      <PageHeader />
      <main id="main" className={`container ${styles.main}`}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <ol>
            {page.crumbs.map((crumb, index) => (
              <li key={crumb.href}>
                {index < page.crumbs.length - 1 ? <a href={crumb.href}>{crumb.name}</a> : <span>{crumb.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <article>
          <h1>{page.h1}</h1>
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          <p className={styles.ctas}>
            <a className={styles.primary} href={APP_LINKS.findWork}>
              Kaam dhoondo
            </a>
            <a className={styles.secondary} href={APP_LINKS.hireWorkers}>
              Workers hire karo
            </a>
          </p>
        </article>
        <section aria-labelledby="faq-title">
          <h2 id="faq-title">FAQs</h2>
          <div className={styles.faqs}>
            {page.faqs.map((faq) => (
              <details key={faq.question} open>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section aria-labelledby="related-title">
          <h2 id="related-title">Related pages</h2>
          <ul className={styles.related}>
            {page.related.map((link) => (
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
