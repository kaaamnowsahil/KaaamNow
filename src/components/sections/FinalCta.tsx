import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useComingSoon } from '../../context/comingSoonContext'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import styles from './FinalCta.module.css'

export function FinalCta() {
  const { open } = useComingSoon()
  const reduceMotion = useReducedMotion()

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
              <p className={styles.eyebrow}>Launching soon</p>
              <h2 id="cta-title" className={styles.title}>
                Your next shift <span className="gradient-text">starts here.</span>
              </h2>
              <p className={styles.text}>
                Whether you need an extra pair of hands this weekend or you’re looking for work that
                fits around your life, KaaamNow is being built for you.
              </p>
              <div className={styles.actions}>
                <Button
                  size="lg"
                  icon={<ArrowRight size={18} strokeWidth={2} />}
                  onClick={() =>
                    open({
                      title: 'Hiring on KaaamNow is coming soon',
                      description: 'Business accounts open at launch. You’ll be able to post your first shift and book available workers in minutes.',
                    })
                  }
                >
                  Find Workers
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    open({
                      title: 'Finding work on KaaamNow is coming soon',
                      description: 'Worker profiles open at launch. You’ll be able to browse nearby shifts and apply in a single tap.',
                    })
                  }
                >
                  Find Work
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
