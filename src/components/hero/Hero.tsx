import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BadgeCheck, BellRing, Briefcase, Sparkles, Wallet, Zap } from 'lucide-react'
import { Fragment } from 'react'
import { easeOut, fadeUp, stagger } from '../../lib/motion'
import { useLocale } from '../../i18n/locale'
import { Button } from '../ui/Button'
import { ActivePresence } from './ActivePresence'
import { HeroVisual } from './HeroVisual'
import styles from './Hero.module.css'

const HIGHLIGHT_ICONS = [Zap, Briefcase, Wallet, BellRing, BadgeCheck]

const word = {
  hidden: { opacity: 0, y: '0.5em' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { copy } = useLocale()
  const hero = copy.hero
  const lines = [
    { text: hero.line1, accent: false },
    { text: hero.line2, accent: true },
  ]

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
            {hero.badge}
          </motion.p>

          <motion.h1 id="hero-title" className={styles.title} initial={false} variants={stagger(0.06)}>
            {lines.map((line) => (
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
            {hero.lead}
          </motion.p>

          <motion.div variants={fadeUp}>
            <ActivePresence />
          </motion.div>

          <motion.div className={styles.ctas} variants={fadeUp}>
            <Button size="lg" href="#businesses" icon={<ArrowRight size={18} strokeWidth={2} />}>
              {hero.findWorkers}
            </Button>
            <Button size="lg" variant="secondary" href="#workers">
              {hero.findWork}
            </Button>
          </motion.div>

          <motion.ul className={styles.highlights} variants={fadeUp}>
            {hero.highlights.map((label, index) => {
              const Icon = HIGHLIGHT_ICONS[index]
              return (
              <li key={label}>
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                {label}
              </li>
              )
            })}
          </motion.ul>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  )
}
