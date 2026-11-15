import { CITIES, cityJobsPath } from '../../data/site'
import { JsonLd } from './JsonLd'
import { PageHeader } from '../PageHeader'
import { Footer } from '../Footer'
import styles from './LandingPage.module.css'

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <JsonLd path="/404" />
      <PageHeader />
      <main id="main" className={`container ${styles.main}`}>
        <h1>Yeh page nahi mila</h1>
        <p>
          Yeh address KaaamNow ke public pages mein nahi hai. Jobs ya hiring ke liye neeche diye
          shehar kholo, ya homepage pe wapas jao.
        </p>
        <ul className={styles.related}>
          <li>
            <a href="/">KaaamNow home</a>
          </li>
          {CITIES.map((city) => (
            <li key={city.slug}>
              <a href={cityJobsPath(city.slug)}>Jobs in {city.name}</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
