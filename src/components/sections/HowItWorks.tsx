import { AnimatePresence, motion } from 'framer-motion'
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  Search,
  UserRound,
  UserRoundCheck,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { easeOut } from '../../lib/motion'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './HowItWorks.module.css'

type Audience = 'business' | 'worker'

interface Step {
  icon: LucideIcon
  title: string
  text: string
}

const TABS: { id: Audience; label: string; icon: LucideIcon }[] = [
  { id: 'business', label: 'For businesses', icon: Building2 },
  { id: 'worker', label: 'For workers', icon: UserRound },
]

const STEPS: Record<Audience, Step[]> = {
  business: [
    {
      icon: ClipboardList,
      title: 'Post a shift',
      text: 'Describe the role, location, timing, and hourly rate. It takes just a few minutes.',
    },
    {
      icon: Users,
      title: 'Review available workers',
      text: 'See people who are free when you need them, with their skills and experience at a glance.',
    },
    {
      icon: BadgeCheck,
      title: 'Confirm and get to work',
      text: 'Lock in your team, track who’s arriving, and manage every booking from one place.',
    },
  ],
  worker: [
    {
      icon: UserRoundCheck,
      title: 'Create your profile',
      text: 'Add your skills, preferred roles, and the days and hours you’re available to work.',
    },
    {
      icon: Search,
      title: 'Browse nearby shifts',
      text: 'Filter openings by category, distance, timing, and pay — then apply in a tap.',
    },
    {
      icon: Wallet,
      title: 'Work and get paid',
      text: 'Show up, complete your shift, and see exactly what you’ve earned. No surprises.',
    },
  ],
}

export function HowItWorks() {
  const [audience, setAudience] = useState<Audience>('business')
  const tabRefs = useRef<Record<Audience, HTMLButtonElement | null>>({ business: null, worker: null })

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const index = TABS.findIndex((tab) => tab.id === audience)
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % TABS.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + TABS.length) % TABS.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = TABS.length - 1
    const next = TABS[nextIndex].id
    setAudience(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="how-it-works" className="section section--alt" aria-labelledby="how-title">
      <div className="container">
        <SectionHeader
          id="how-title"
          eyebrow="How it works"
          title="Three steps from opening to shift"
          description="Whether you’re filling a shift or looking for one, getting started on KaaamNow is straightforward."
        />

        <Reveal className={styles.tabsWrap}>
          <div className={styles.tabs} role="tablist" aria-label="Choose your audience">
            {TABS.map(({ id, label, icon: Icon }) => {
              const selected = audience === id
              return (
                <button
                  key={id}
                  ref={(el) => {
                    tabRefs.current[id] = el
                  }}
                  type="button"
                  role="tab"
                  id={`how-tab-${id}`}
                  aria-selected={selected}
                  aria-controls={`how-panel-${id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.tab} ${selected ? styles.tabActive : ''}`}
                  onClick={() => setAudience(id)}
                  onKeyDown={onTabKeyDown}
                >
                  {selected && (
                    <motion.span
                      layoutId="how-tab-pill"
                      className={styles.tabPill}
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className={styles.tabLabel}>
                    <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                    {label}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`how-panel-${audience}`}
          aria-labelledby={`how-tab-${audience}`}
          className={styles.panel}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.ol
              key={audience}
              className={styles.steps}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
                exit: { opacity: 0, transition: { duration: 0.15 } },
              }}
            >
              {STEPS[audience].map(({ icon: Icon, title, text }, index) => (
                <motion.li
                  key={title}
                  className={styles.step}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
                  }}
                >
                  <div className={styles.stepHead}>
                    <span className={styles.stepIcon} aria-hidden="true">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <span className={styles.stepNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className={styles.stepTitle}>
                    <span className="visually-hidden">Step {index + 1}: </span>
                    {title}
                  </h3>
                  <p className={styles.stepText}>{text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
