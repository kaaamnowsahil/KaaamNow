import { Building2, UserRound } from 'lucide-react'
import { APP_LINKS, CATEGORIES, CITIES, cityJobsPath } from '../../data/site'
import { useWorkCategories } from '../../data/useWorkCategories'
import { fill } from '../../i18n/siteCopy'
import { useLocale } from '../../i18n/locale'
import { Button } from '../ui/Button'
import card from '../ui/Card.module.css'
import styles from './HomeGuide.module.css'

export function HomeGuide() {
  const { copy } = useLocale()
  const guide = copy.guide
  const jobTypes = useWorkCategories()

  return (
    <section className={`section section--alt ${styles.guide}`} aria-labelledby="guide-title">
      <div className="container">
        <div className={styles.split}>
          <article className={card.card}>
            <span className={card.iconBox} aria-hidden="true">
              <UserRound size={24} strokeWidth={1.75} />
            </span>
            <h2 id="guide-title" className={card.title}>
              {guide.workersTitle}
            </h2>
            {guide.workers.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className={`${card.text} ${styles.body}`}>
                {paragraph}
              </p>
            ))}
            <div className={styles.action}>
              <Button href={APP_LINKS.findWork}>{guide.findWork}</Button>
            </div>
          </article>

          <article className={card.card}>
            <span className={card.iconBox} aria-hidden="true">
              <Building2 size={24} strokeWidth={1.75} />
            </span>
            <h2 className={card.title}>{guide.businessTitle}</h2>
            {guide.business.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className={`${card.text} ${styles.body}`}>
                {paragraph}
              </p>
            ))}
            <div className={styles.action}>
              <Button href={APP_LINKS.hireWorkers} variant="secondary">
                {guide.hire}
              </Button>
            </div>
          </article>
        </div>

        <div className={styles.block}>
          <h2 className={styles.heading}>{guide.howTitle}</h2>
          <ol className={styles.steps}>
            {guide.steps.map((step, index) => (
              <li key={step.title} className={card.card}>
                <span className={styles.index}>{index + 1}</span>
                <h3 className={card.title}>{step.title}</h3>
                <p className={card.text}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.browse}>
          <div className={styles.panel}>
            <h2 className={styles.heading}>{guide.categoriesTitle}</h2>
            <ul className={styles.links}>
              {(jobTypes.length > 0
                ? jobTypes.map((job) => ({ slug: job.slug, label: job.label, href: APP_LINKS.findWork }))
                : CATEGORIES.map((category, index) => ({
                    slug: category.path,
                    label: copy.landing.categories[index].label,
                    href: category.path,
                  }))
              ).map((category) => (
                <li key={category.slug}>
                  <a href={category.href}>{category.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <h2 className={styles.heading}>{guide.indiaTitle}</h2>
            <p className={styles.lead}>{guide.india}</p>
            <ul className={styles.links}>
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <a href={cityJobsPath(city.slug)}>{fill(guide.cityLink, { city: city.name })}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.block}>
          <h2 className={styles.heading}>{guide.faqsTitle}</h2>
          <div className={styles.faqs}>
            {guide.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
