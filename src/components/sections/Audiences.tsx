import { ArrowRight, Building2, Check, UserRound, type LucideIcon } from 'lucide-react'
import { APP_LINKS } from '../../data/appLinks'
import { useLocale } from '../../i18n/locale'
import { Button } from '../ui/Button'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Audiences.module.css'

const AUDIENCE_META: { id: string; icon: LucideIcon; href: string; featured?: boolean }[] = [
  { id: 'businesses', icon: Building2, href: APP_LINKS.businessHome, featured: true },
  { id: 'workers', icon: UserRound, href: APP_LINKS.workerHome },
]

export function Audiences() {
  const { copy } = useLocale()
  const audiences = copy.audiences
  return (
    <section className="section" aria-labelledby="audiences-title">
      <div className="container">
        <SectionHeader
          id="audiences-title"
          eyebrow={audiences.eyebrow}
          title={
            <>
              {audiences.title} <span className="gradient-text">{audiences.accent}</span>
            </>
          }
          description={audiences.description}
        />

        <RevealGroup className={styles.grid} staggerBy={0.15}>
          {AUDIENCE_META.map((meta, index) => {
            const audience = audiences.cards[index]
            const Icon = meta.icon
            return (
              <RevealItem key={meta.id}>
                <article
                  id={meta.id}
                  className={`${styles.card} ${meta.featured ? styles.featured : ''}`}
                  aria-labelledby={`${meta.id}-title`}
                >
                  <div className={styles.head}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <span className={styles.eyebrow}>{audience.eyebrow}</span>
                  </div>

                  <h3 id={`${meta.id}-title`} className={styles.title}>
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
                      variant={meta.featured ? 'primary' : 'secondary'}
                      icon={<ArrowRight size={18} strokeWidth={2} />}
                      href={meta.href}
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
