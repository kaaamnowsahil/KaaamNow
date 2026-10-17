import { ArrowRight, Building2, Check, UserRound, type LucideIcon } from 'lucide-react'
import { useComingSoon } from '../../context/comingSoonContext'
import { Button } from '../ui/Button'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Audiences.module.css'

interface AudienceCard {
  id: string
  icon: LucideIcon
  eyebrow: string
  title: string
  text: string
  points: string[]
  cta: string
  modalTitle: string
  modalText: string
  featured?: boolean
}

const AUDIENCES: AudienceCard[] = [
  {
    id: 'businesses',
    icon: Building2,
    eyebrow: 'For businesses',
    title: 'Staff up without the scramble',
    text: 'Cover busy weekends, last-minute absences, seasonal peaks, and one-off events with people who are ready to work.',
    points: [
      'Post hourly, daily, or multi-day openings',
      'See who’s available before you book',
      'Set your own rates, shown upfront to workers',
      'Manage every shift from a single dashboard',
    ],
    cta: 'Post your first shift',
    modalTitle: 'Business accounts are coming soon',
    modalText: 'We’re preparing KaaamNow for businesses. Soon you’ll be able to post shifts and book available workers in minutes.',
    featured: true,
  },
  {
    id: 'workers',
    icon: UserRound,
    eyebrow: 'For workers',
    title: 'Pick up work on your terms',
    text: 'Find shifts that match your skills and schedule — whether you want a few extra hours or a full week of work.',
    points: [
      'Browse shifts near you by category and time',
      'Know the pay rate before you apply',
      'Choose only the shifts that fit your life',
      'Build a profile that travels with you',
    ],
    cta: 'Join as a worker',
    modalTitle: 'Worker sign-ups are coming soon',
    modalText: 'We’re getting ready to open KaaamNow to workers. Soon you’ll be able to create a profile and start picking up shifts nearby.',
  },
]

export function Audiences() {
  const { open } = useComingSoon()

  return (
    <section className="section" aria-labelledby="audiences-title">
      <div className="container">
        <SectionHeader
          id="audiences-title"
          eyebrow="Built for both sides"
          title={
            <>
              One marketplace. <span className="gradient-text">Two great fits.</span>
            </>
          }
          description="KaaamNow is designed around the needs of the businesses that hire and the people who work."
        />

        <RevealGroup className={styles.grid} staggerBy={0.15}>
          {AUDIENCES.map((audience) => {
            const Icon = audience.icon
            return (
              <RevealItem key={audience.id}>
                <article
                  id={audience.id}
                  className={`${styles.card} ${audience.featured ? styles.featured : ''}`}
                  aria-labelledby={`${audience.id}-title`}
                >
                  <div className={styles.head}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <span className={styles.eyebrow}>{audience.eyebrow}</span>
                  </div>

                  <h3 id={`${audience.id}-title`} className={styles.title}>
                    {audience.title}
                  </h3>
                  <p className={styles.text}>{audience.text}</p>

                  <ul className={styles.points}>
                    {audience.points.map((point) => (
                      <li key={point}>
                        <span className={styles.check} aria-hidden="true">
                          <Check size={14} strokeWidth={2.5} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cta}>
                    <Button
                      variant={audience.featured ? 'primary' : 'secondary'}
                      icon={<ArrowRight size={18} strokeWidth={2} />}
                      onClick={() => open({ title: audience.modalTitle, description: audience.modalText })}
                    >
                      {audience.cta}
                    </Button>
                  </div>
                </article>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
