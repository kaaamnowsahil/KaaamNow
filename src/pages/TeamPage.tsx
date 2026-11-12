import { useEffect } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Team } from '../components/sections/Team'
import styles from './PrivacyPolicy.module.css'

export function TeamPage() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Team — KaaamNow'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className={styles.page}>
      <PageHeader />
      <Team />
    </div>
  )
}
