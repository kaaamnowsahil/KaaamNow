import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarCheck,
  ChefHat,
  Clock,
  MapPin,
  Package,
  ShoppingBag,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { easeOut } from '../../lib/motion'
import styles from './HeroVisual.module.css'

interface SampleShift {
  icon: LucideIcon
  role: string
  place: string
  time: string
  pay: string
}

const SAMPLE_SHIFTS: SampleShift[] = [
  { icon: Package, role: 'Warehouse Associate', place: 'Fulfilment centre', time: '6:00 AM – 2:00 PM', pay: '₹180/hr' },
  { icon: ChefHat, role: 'Kitchen Helper', place: 'Neighbourhood café', time: '11:00 AM – 4:00 PM', pay: '₹160/hr' },
  { icon: ShoppingBag, role: 'Retail Floor Staff', place: 'Lifestyle store', time: '2:00 PM – 9:00 PM', pay: '₹170/hr' },
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
      initial={{ opacity: 0, scale: 0.92 }}
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
  return (
    <div className={styles.visual} role="img" aria-label="Illustration of the KaaamNow app showing open shifts, an available worker, and a confirmed booking">
      <div className={styles.orbit} aria-hidden="true" />

      <motion.div
        className={styles.board}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
        aria-hidden="true"
      >
        <div className={styles.boardHeader}>
          <div>
            <p className={styles.boardEyebrow}>Open shifts</p>
            <p className={styles.boardTitle}>Near you today</p>
          </div>
          <span className={styles.liveChip}>
            <span className={styles.liveDot} />
            Live
          </span>
        </div>

        <ul className={styles.shiftList}>
          {SAMPLE_SHIFTS.map(({ icon: Icon, role, place, time, pay }, index) => (
            <motion.li
              key={role}
              className={styles.shift}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.12, ease: easeOut }}
            >
              <span className={styles.shiftIcon}>
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className={styles.shiftBody}>
                <span className={styles.shiftRole}>{role}</span>
                <span className={styles.shiftMeta}>
                  <MapPin size={12} strokeWidth={2} />
                  <span>{place}</span>
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
          <span>Sample listings</span>
          <span className={styles.boardAction}>View all shifts</span>
        </div>
      </motion.div>

      <Floating className={styles.workerCard} delay={0.9} duration={6}>
        <div className={styles.workerTop} aria-hidden="true">
          <span className={styles.avatar}>PS</span>
          <span>
            <span className={styles.cardTitle}>Priya S.</span>
            <span className={styles.cardMeta}>Barista · Server</span>
          </span>
        </div>
        <span className={styles.availability} aria-hidden="true">
          <span className={styles.liveDot} />
          Available now
        </span>
      </Floating>

      <Floating className={styles.confirmCard} delay={1.1} duration={7} distance={8}>
        <span className={styles.cardIcon} aria-hidden="true">
          <CalendarCheck size={20} strokeWidth={1.75} />
        </span>
        <span aria-hidden="true">
          <span className={styles.cardTitle}>Shift confirmed</span>
          <span className={styles.cardMeta}>Sat · 9:00 AM – 5:00 PM</span>
        </span>
      </Floating>

      <Floating className={styles.payCard} delay={1.3} duration={8} distance={12}>
        <span className={styles.cardIconSoft} aria-hidden="true">
          <Wallet size={20} strokeWidth={1.75} />
        </span>
        <span aria-hidden="true">
          <span className={styles.cardMeta}>Pay rate</span>
          <span className={styles.cardTitle}>Shown upfront</span>
        </span>
      </Floating>
    </div>
  )
}
