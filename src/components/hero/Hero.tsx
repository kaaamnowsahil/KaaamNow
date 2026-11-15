import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BadgeCheck, BellRing, Briefcase, Sparkles, Wallet, Zap } from 'lucide-react'
import { Fragment } from 'react'
import { easeOut, fadeUp, stagger } from '../../lib/motion'
import { Button } from '../ui/Button'
import { ActivePresence } from './ActivePresence'
import { HeroVisual } from './HeroVisual'
import styles from './Hero.module.css'

const LINES = [
  { text: 'Daily Wage Jobs aur Workers,', accent: false },
  { text: 'Ek Hi Jagah', accent: true },
]

const HIGHLIGHTS = [
  { icon: Zap, label: 'Live Work: a worker in minutes' },
  { icon: Briefcase, label: 'Hourly or fixed-price task work' },
  { icon: Wallet, label: 'Pay shown upfront' },
  { icon: BellRing, label: 'Instant job alerts' },
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
        <motion.div className={styles.copy} initial={false} animate="visible" variants={stagger(0.12)}>
          <motion.p className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeIcon} aria-hidden="true">
              <Sparkles size={14} strokeWidth={2} />
            </span>
            The on-demand marketplace for blue-collar jobs
          </motion.p>

          <motion.h1 id="hero-title" className={styles.title} initial={false} variants={stagger(0.06)}>
            {LINES.map((line) => (
              <span key={line.text} className={styles.line}>
                {line.text.split(' ').map((w, i, words) => (
                  <Fragment key={`${w}-${i}`}>
                    <motion.span
                      className={`${styles.word} ${line.accent ? styles.accent : ''}`}
                      initial={false}
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
            KaaamNow poore India ka flexible work platform hai. Workers ko apne shehar mein daily
            shift, hourly aur part-time kaam milta hai, aur businesses ko kam time mein staff. Har
            job pe pay pehle se dikhta hai, koi surprise nahi.
          </motion.p>

          <motion.div variants={fadeUp}>
            <ActivePresence />
          </motion.div>

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
