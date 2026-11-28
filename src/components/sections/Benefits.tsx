import {
  BellRing,
  CalendarClock,
  Compass,
  RotateCcw,
  ShieldCheck,
  Tags,
  UserRoundCheck,
  Wallet,
  Zap,
} from 'lucide-react'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import card from '../ui/Card.module.css'
import styles from './Benefits.module.css'
import { useLocale } from '../../i18n/locale'

const ICONS = [CalendarClock, UserRoundCheck, Zap, RotateCcw, Tags, BellRing, ShieldCheck, Wallet, Compass]

export function Benefits() {
  const { copy } = useLocale()
  const benefits = copy.benefits
  return (
    <section id="benefits" className="section" aria-labelledby="benefits-title">
      <div className="container">
        <SectionHeader
          id="benefits-title"
          eyebrow={benefits.eyebrow}
          title={
            <>
              {benefits.title} <span className="gradient-text">{benefits.accent}</span>
            </>
          }
          description={benefits.description}
        />

        <RevealGroup as="ul" className={styles.grid}>
          {benefits.items.map(({ title, text }, index) => {
            const Icon = ICONS[index]
            return (
            <RevealItem as="li" key={title}>
              <article className={`${card.card} ${card.interactive}`}>
                <span className={card.iconBox} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className={card.title}>{title}</h3>
                <p className={card.text}>{text}</p>
              </article>
            </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
