import { CalendarDays, CalendarRange, Clock, type LucideIcon } from 'lucide-react'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import card from '../ui/Card.module.css'
import styles from './Categories.module.css'

interface Category {
  icon: LucideIcon
  title: string
  duration: string
  text: string
  examples: string[]
}

const CATEGORIES: Category[] = [
  {
    icon: Clock,
    title: 'Hourly Shifts',
    duration: '2 – 8 hours',
    text: 'Short, focused shifts for rush hours, events, and sudden gaps in the schedule.',
    examples: ['Event staff', 'Café & restaurant', 'Retail floor', 'Delivery support'],
  },
  {
    icon: CalendarDays,
    title: 'Daily Jobs',
    duration: 'Full day',
    text: 'One-day roles for inventory counts, setups, promotions, and busy trading days.',
    examples: ['Stock audits', 'Promotions', 'Warehouse picking', 'Venue setup'],
  },
  {
    icon: CalendarRange,
    title: 'Multi-Day Assignments',
    duration: '2 days – several weeks',
    text: 'Longer flexible engagements for seasonal peaks, projects, and extended cover.',
    examples: ['Seasonal peaks', 'Exhibitions', 'Back-office cover', 'Project crews'],
  },
]

export function Categories() {
  return (
    <section id="categories" className="section section--alt" aria-labelledby="categories-title">
      <div className="container">
        <SectionHeader
          id="categories-title"
          eyebrow="Work categories"
          title="Every kind of flexible blue-collar work"
          description="From a single afternoon to a multi-week assignment, KaaamNow covers the ways businesses actually need help."
        />

        <RevealGroup as="ul" className={styles.grid} staggerBy={0.12}>
          {CATEGORIES.map(({ icon: Icon, title, duration, text, examples }) => (
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
                <ul className={styles.examples} aria-label={`Example ${title.toLowerCase()}`}>
                  {examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
