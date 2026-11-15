import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { APP_LINKS } from '../../data/appLinks'
import { useLocale } from '../../i18n/locale'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import styles from './FinalCta.module.css'

export function FinalCta() {
  const reduceMotion = useReducedMotion()
  const { copy } = useLocale()
  const cta = copy.cta

  return (
    <section id="get-started" className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className={styles.panel}>
            <motion.div
              className={styles.glow}
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className={styles.grid} aria-hidden="true" />

            <div className={styles.content}>
              <p className={styles.eyebrow}>{cta.eyebrow}</p>
              <h2 id="cta-title" className={styles.title}>
                {cta.title} <span className="gradient-text">{cta.accent}</span>
              </h2>
              <p className={styles.text}>{cta.text}</p>
              <div className={styles.actions}>
                <Button
                  size="lg"
                  icon={<ArrowRight size={18} strokeWidth={2} />}
                  href={APP_LINKS.businessHome}
                >
                  {copy.hero.findWorkers}
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  href={APP_LINKS.workerHome}
                >
                  {copy.hero.findWork}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
