import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarCheck,
  ChefHat,
  Clock,
  MapPin,
  Package,
  ShoppingBag,
  Wallet,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { easeOut } from '../../lib/motion'
import { useLocale } from '../../i18n/locale'
import styles from './HeroVisual.module.css'

const SHIFT_META = [
  { icon: Package, time: '6:00 AM – 2:00 PM', pay: '₹180/hr' },
  { icon: ChefHat, time: '11:00 AM – 4:00 PM', pay: '₹160/hr' },
  { icon: ShoppingBag, time: '2:00 PM – 9:00 PM', pay: '₹170/hr' },
]

interface FloatingProps {
  children: ReactNode
  className: string
  delay: number
  duration: number
  distance?: number
}

function Floating({ children, className, delay, duration, distance = 10 }: FloatingProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={`${styles.floating} ${className}`}
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    >
      <motion.div
        className={styles.floatingInner}
        animate={reduceMotion ? undefined : { y: [0, -distance, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.7 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function HeroVisual() {
  const { copy } = useLocale()
  const hero = copy.hero
  return (
    <div className={styles.visual} role="img" aria-label={hero.visualAria}>
      <div className={styles.orbit} aria-hidden="true" />

      <motion.div
        className={styles.board}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
        aria-hidden="true"
      >
        <div className={styles.boardHeader}>
          <div>
            <p className={styles.boardEyebrow}>{hero.openShifts}</p>
            <p className={styles.boardTitle}>{hero.nearYou}</p>
          </div>
          <span className={styles.liveChip}>
            <span className={styles.liveDot} />
            {hero.live}
          </span>
        </div>

        <ul className={styles.shiftList}>
          {SHIFT_META.map(({ icon: Icon, time, pay }, index) => (
            <motion.li
              key={hero.shifts[index].role}
              className={styles.shift}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.12, ease: easeOut }}
            >
              <span className={styles.shiftIcon}>
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className={styles.shiftBody}>
                <span className={styles.shiftRole}>{hero.shifts[index].role}</span>
                <span className={styles.shiftMeta}>
                  <MapPin size={12} strokeWidth={2} />
                  <span>{hero.shifts[index].place}</span>
                  <span className={styles.metaDivider} />
                  <span className={styles.metaTime}>
                    <Clock size={12} strokeWidth={2} />
                    {time}
                  </span>
                </span>
              </span>
              <span className={styles.shiftPay}>{pay}</span>
            </motion.li>
          ))}
        </ul>

        <div className={styles.boardFooter}>
          <span>{hero.sampleListings}</span>
          <span className={styles.boardAction}>{hero.viewAll}</span>
        </div>
      </motion.div>

      <Floating className={styles.workerCard} delay={0.9} duration={6}>
        <div className={styles.workerTop} aria-hidden="true">
          <span className={styles.avatar}>PS</span>
          <span>
            <span className={styles.cardTitle}>Priya S.</span>
            <span className={styles.cardMeta}>{hero.workerRole}</span>
          </span>
        </div>
        <span className={styles.availability} aria-hidden="true">
          <span className={styles.liveDot} />
          {hero.availableNow}
        </span>
      </Floating>

      <Floating className={styles.confirmCard} delay={1.1} duration={7} distance={8}>
        <span className={styles.cardIcon} aria-hidden="true">
          <CalendarCheck size={20} strokeWidth={1.75} />
        </span>
        <span aria-hidden="true">
          <span className={styles.cardTitle}>{hero.shiftConfirmed}</span>
          <span className={styles.cardMeta}>{hero.shiftWhen}</span>
        </span>
      </Floating>

      <Floating className={styles.payCard} delay={1.3} duration={8} distance={12}>
        <span className={styles.cardIconSoft} aria-hidden="true">
          <Wallet size={20} strokeWidth={1.75} />
        </span>
        <span aria-hidden="true">
          <span className={styles.cardMeta}>{hero.payRate}</span>
          <span className={styles.cardTitle}>{hero.shownUpfront}</span>
        </span>
      </Floating>
    </div>
  )
}
