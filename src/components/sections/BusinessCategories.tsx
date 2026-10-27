import {
  Briefcase,
  Hotel,
  PartyPopper,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import card from '../ui/Card.module.css'
import styles from './Categories.module.css'

interface BusinessCategory {
  icon: LucideIcon
  title: string
  workTypes: string
  text: string
  roles: string[]
}

const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cafés',
    workTypes: 'Hourly · Daily',
    text: 'Cover lunch and dinner rushes, weekend crowds, and last-minute no-shows.',
    roles: ['Servers', 'Kitchen helpers', 'Baristas', 'Cleaning staff'],
  },
  {
    icon: ShoppingBag,
    title: 'Retail Stores',
    workTypes: 'Hourly · Daily',
    text: 'Add hands for sale days, new launches, stock counts, and festive footfall.',
    roles: ['Floor staff', 'Cashiers', 'Stock counters', 'Promoters'],
  },
  {
    icon: Truck,
    title: 'Warehouses & Logistics',
    workTypes: 'Daily · Multi-day',
    text: 'Scale your team up for order peaks, inbound loads, and seasonal demand.',
    roles: ['Pickers & packers', 'Loaders', 'Sorters', 'Delivery helpers'],
  },
  {
    icon: PartyPopper,
    title: 'Events & Venues',
    workTypes: 'Hourly · Daily',
    text: 'Staff weddings, exhibitions, launches, and concerts without a permanent crew.',
    roles: ['Event hosts', 'Ushers', 'Setup crew', 'Registration desk'],
  },
  {
    icon: Hotel,
    title: 'Hotels & Hospitality',
    workTypes: 'Daily · Multi-day',
    text: 'Handle full-house weekends, banquets, and leave cover for your regular team.',
    roles: ['Front desk', 'Housekeeping', 'Banquet staff', 'Room service'],
  },
  {
    icon: Briefcase,
    title: 'Offices & Facilities',
    workTypes: 'Daily · Multi-day',
    text: 'Get reliable support for admin backlogs, office moves, and facility upkeep.',
    roles: ['Data entry', 'Reception cover', 'Office assistants', 'Maintenance help'],
  },
]

export function BusinessCategories() {
  return (
    <section id="industries" className="section" aria-labelledby="industries-title">
      <div className="container">
        <SectionHeader
          id="industries-title"
          eyebrow="Business categories"
          title="Built for every kind of business"
          description="Whatever you run, KaaamNow helps you hire blue-collar workers for the shifts you need to fill."
        />

        <RevealGroup as="ul" className={styles.grid} staggerBy={0.08}>
          {BUSINESS_CATEGORIES.map(({ icon: Icon, title, workTypes, text, roles }) => (
            <RevealItem as="li" key={title}>
              <article className={`${card.card} ${card.interactive} ${styles.category}`}>
                <div className={styles.head}>
                  <span className={card.iconBox} aria-hidden="true">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className={styles.duration}>{workTypes}</span>
                </div>
                <h3 className={card.title}>{title}</h3>
                <p className={card.text}>{text}</p>
                <ul className={styles.examples} aria-label={`Roles ${title} hire for`}>
                  {roles.map((role) => (
                    <li key={role}>{role}</li>
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
