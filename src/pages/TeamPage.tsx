import { PageHeader } from '../components/PageHeader'
import { Team } from '../components/sections/Team'
import styles from './PrivacyPolicy.module.css'

export function TeamPage() {
  return (
    <div className={styles.page}>
      <PageHeader />
      <Team />
    </div>
  )
}
