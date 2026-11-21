import { Mail } from 'lucide-react'
import { CONTACT_EMAILS } from '../../data/contacts'
import { useLocale } from '../../i18n/locale'
import { Button } from '../ui/Button'
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Careers.module.css'

const HR_EMAIL = CONTACT_EMAILS.find((item) => item.label === 'HR')?.email ?? 'hr@kaaamnow.in'

export function Careers() {
  const { copy } = useLocale()
  const careers = copy.careers

  return (
    <section id="careers" className="section" aria-labelledby="careers-title">
      <div className="container">
        <SectionHeader
          id="careers-title"
          eyebrow={careers.eyebrow}
          title={
            <>
              {careers.title} <span className="gradient-text">{careers.accent}</span>
            </>
          }
          description={careers.description}
        />

        <div className={styles.layout}>
          <Reveal>
            <article className={styles.panel} aria-labelledby="careers-plan">
              <h3 id="careers-plan" className={styles.heading}>
                {careers.planTitle}
              </h3>
              <RevealGroup as="ul" className={styles.plans} staggerBy={0.08}>
                {careers.plans.map((plan) => (
                  <RevealItem as="li" key={plan.title} className={styles.plan}>
                    <h4>{plan.title}</h4>
                    <p>{plan.text}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </article>
          </Reveal>

          <Reveal>
            <article className={styles.panel} aria-labelledby="careers-apply">
              <h3 id="careers-apply" className={styles.heading}>
                {careers.applyTitle}
              </h3>
              <p className={styles.lead}>{careers.applyLead}</p>
              <ol className={styles.steps}>
                {careers.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <Button href={`mailto:${HR_EMAIL}`} icon={<Mail size={18} strokeWidth={2} />}>
                {careers.emailLabel}
              </Button>
              <p className={styles.note}>{careers.note}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
