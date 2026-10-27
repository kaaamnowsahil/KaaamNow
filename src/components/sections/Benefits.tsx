import { CalendarClock, Compass, Wallet, Zap, type LucideIcon } from 'lucide-react'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import card from '../ui/Card.module.css'
import styles from './Benefits.module.css'

interface Benefit {
  icon: LucideIcon
  title: string
  text: string
}

const BENEFITS: Benefit[] = [
  {
    icon: CalendarClock,
    title: 'Flexible shifts',
    text: 'Book help for a few hours, a full day, or a whole week. Workers choose the shifts that suit their schedule.',
  },
  {
    icon: Zap,
    title: 'Live Work, in minutes',
    text: 'Need help right now? Post a Live Work request, a nearby worker accepts, and you track them on the map until they arrive.',
  },
  {
    icon: Wallet,
    title: 'Transparent pay',
    text: 'Rates are shown upfront on every listing, so both sides know exactly what a shift is worth before committing.',
  },
  {
    icon: Compass,
    title: 'Convenient discovery',
    text: 'Browse nearby work by category, time, and pay. Find the right shift without scrolling through job boards.',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="section" aria-labelledby="benefits-title">
      <div className="container">
        <SectionHeader
          id="benefits-title"
          eyebrow="Why KaaamNow"
          title={
            <>
              Work that fits. <span className="gradient-text">Hiring that keeps up.</span>
            </>
          }
          description="Everything about KaaamNow is designed to make short-term work simple, fair, and fast — for the people hiring and the people working."
        />

        <RevealGroup as="ul" className={styles.grid}>
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <RevealItem as="li" key={title}>
              <article className={`${card.card} ${card.interactive}`}>
                <span className={card.iconBox} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className={card.title}>{title}</h3>
                <p className={card.text}>{text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
