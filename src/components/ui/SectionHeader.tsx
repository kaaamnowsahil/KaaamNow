import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  id?: string
  align?: 'center' | 'left'
}

export function SectionHeader({ eyebrow, title, description, id, align = 'center' }: SectionHeaderProps) {
  return (
    <Reveal className={`${styles.header} ${align === 'left' ? styles.left : ''}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </Reveal>
  )
}
