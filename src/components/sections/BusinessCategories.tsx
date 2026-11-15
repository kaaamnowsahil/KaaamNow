import {
  Briefcase,
  Hotel,
  PartyPopper,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
} from 'lucide-react'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import card from '../ui/Card.module.css'
import styles from './Categories.module.css'
import { useLocale } from '../../i18n/locale'
import { fill } from '../../i18n/siteCopy'

const ICONS = [UtensilsCrossed, ShoppingBag, Truck, PartyPopper, Hotel, Briefcase]

export function BusinessCategories() {
  const { copy } = useLocale()
  const industries = copy.industries
  return (
    <section id="industries" className="section" aria-labelledby="industries-title">
      <div className="container">
        <SectionHeader
          id="industries-title"
          eyebrow={industries.eyebrow}
          title={industries.title}
          description={industries.description}
        />

        <RevealGroup as="ul" className={styles.grid} staggerBy={0.08}>
          {industries.items.map(({ title, types, text, roles }, index) => {
            const Icon = ICONS[index]
            return (
            <RevealItem as="li" key={title}>
              <article className={`${card.card} ${card.interactive} ${styles.category}`}>
                <div className={styles.head}>
                  <span className={card.iconBox} aria-hidden="true">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className={styles.duration}>{types}</span>
                </div>
                <h3 className={card.title}>{title}</h3>
                <p className={card.text}>{text}</p>
                <ul className={styles.examples} aria-label={fill(industries.roles, { title })}>
                  {roles.map((role) => (
                    <li key={role}>{role}</li>
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
