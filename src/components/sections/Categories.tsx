import { CalendarDays, CalendarRange, Clock } from 'lucide-react'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import card from '../ui/Card.module.css'
import styles from './Categories.module.css'
import { useLocale } from '../../i18n/locale'
import { fill } from '../../i18n/siteCopy'

const ICONS = [Clock, CalendarDays, CalendarRange]

export function Categories() {
  const { copy } = useLocale()
  const work = copy.workTypes
  return (
    <section id="categories" className="section section--alt" aria-labelledby="categories-title">
      <div className="container">
        <SectionHeader
          id="categories-title"
          eyebrow={work.eyebrow}
          title={work.title}
          description={work.description}
        />

        <RevealGroup as="ul" className={styles.grid} staggerBy={0.12}>
          {work.items.map(({ title, duration, text, examples }, index) => {
            const Icon = ICONS[index]
            return (
            <RevealItem as="li" key={title}>
              <article className={`${card.card} ${card.interactive} ${styles.category}`}>
                <div className={styles.head}>
                  <span className={card.iconBox} aria-hidden="true">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className={styles.duration}>{duration}</span>
                </div>
                <h3 className={card.title}>{title}</h3>
                <p className={card.text}>{text}</p>
                <ul className={styles.examples} aria-label={fill(work.example, { title })}>
                  {examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
