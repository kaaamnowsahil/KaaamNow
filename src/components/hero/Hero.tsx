import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Briefcase, Sparkles, Wallet, Zap } from 'lucide-react'
import { Fragment } from 'react'
import { easeOut, fadeUp, stagger } from '../../lib/motion'
import { Button } from '../ui/Button'
import { HeroVisual } from './HeroVisual'
import styles from './Hero.module.css'

const LINES = [
  { text: 'The right people.', accent: false },
  { text: 'Right when you need them.', accent: true },
]

const HIGHLIGHTS = [
  { icon: Zap, label: 'Live Work: a worker in minutes' },
  { icon: Briefcase, label: 'Hourly, daily & multi-day work' },
  { icon: Wallet, label: 'Pay shown upfront' },
  { icon: BadgeCheck, label: 'No long-term commitment' },
]

const word = {
  hidden: { opacity: 0, y: '0.5em' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <motion.div
          className={`${styles.glow} ${styles.glowPrimary}`}
          animate={reduceMotion ? undefined : { opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.glow} ${styles.glowSecondary}`}
          animate={reduceMotion ? undefined : { opacity: [0.35, 0.6, 0.35], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div className={styles.copy} initial="hidden" animate="visible" variants={stagger(0.12)}>
          <motion.p className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeIcon} aria-hidden="true">
              <Sparkles size={14} strokeWidth={2} />
            </span>
            The on-demand workforce marketplace
          </motion.p>

          <motion.h1 id="hero-title" className={styles.title} variants={stagger(0.06)}>
            {LINES.map((line) => (
              <span key={line.text} className={styles.line}>
                {line.text.split(' ').map((w, i, words) => (
                  <Fragment key={`${w}-${i}`}>
                    <motion.span
                      className={`${styles.word} ${line.accent ? styles.accent : ''}`}
                      variants={word}
                    >
                      {w}
                    </motion.span>
                    {i < words.length - 1 && ' '}
                  </Fragment>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p className={styles.lead} variants={fadeUp}>
            KaaamNow connects businesses with dependable people for hourly shifts, daily jobs, and
            flexible assignments. Need someone right now? Post a Live Work request and a nearby worker
            is on the way in minutes. Workers pick the hours that fit their life.
          </motion.p>

          <motion.div className={styles.ctas} variants={fadeUp}>
            <Button size="lg" href="#businesses" icon={<ArrowRight size={18} strokeWidth={2} />}>
              Find Workers
            </Button>
            <Button size="lg" variant="secondary" href="#workers">
              Find Work
            </Button>
          </motion.div>

          <motion.ul className={styles.highlights} variants={fadeUp}>
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  )
}
