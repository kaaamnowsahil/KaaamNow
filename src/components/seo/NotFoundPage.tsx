import { CITIES, cityJobsPath } from '../../data/site'
import { fill } from '../../i18n/siteCopy'
import { useLocale } from '../../i18n/locale'
import { JsonLd } from './JsonLd'
import { PageHeader } from '../PageHeader'
import { Footer } from '../Footer'
import styles from './LandingPage.module.css'

export function NotFoundPage() {
  const { copy } = useLocale()
  return (
    <div className={styles.page}>
      <JsonLd path="/404" />
      <PageHeader />
      <main id="main" className={`container ${styles.main}`}>
        <h1>{copy.notFound.title}</h1>
        <p>{copy.notFound.body}</p>
        <ul className={styles.related}>
          <li>
            <a href="/">{copy.notFound.home}</a>
          </li>
          {CITIES.map((city) => (
            <li key={city.slug}>
              <a href={cityJobsPath(city.slug)}>{fill(copy.footer.jobsIn, { city: city.name })}</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
