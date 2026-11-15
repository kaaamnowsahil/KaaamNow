import { AnimatePresence, motion } from 'framer-motion'
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  KeyRound,
  MapPinned,
  Zap,
  Search,
  UserRound,
  UserRoundCheck,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { easeOut } from '../../lib/motion'
import { useLocale } from '../../i18n/locale'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './HowItWorks.module.css'

type Audience = 'business' | 'live' | 'worker'

const TAB_META: { id: Audience; icon: LucideIcon }[] = [
  { id: 'business', icon: Building2 },
  { id: 'live', icon: Zap },
  { id: 'worker', icon: UserRound },
]

const STEP_ICONS: LucideIcon[][] = [
  [ClipboardList, Users, BadgeCheck],
  [Zap, MapPinned, KeyRound],
  [UserRoundCheck, Search, Wallet],
]

export function HowItWorks() {
  const [audience, setAudience] = useState<Audience>('business')
  const { copy } = useLocale()
  const how = copy.how
  const tabRefs = useRef<Record<Audience, HTMLButtonElement | null>>({
    business: null,
    live: null,
    worker: null,
  })

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const index = TAB_META.findIndex((tab) => tab.id === audience)
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % TAB_META.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + TAB_META.length) % TAB_META.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = TAB_META.length - 1
    const next = TAB_META[nextIndex].id
    setAudience(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="how-it-works" className="section section--alt" aria-labelledby="how-title">
      <div className="container">
        <SectionHeader
          id="how-title"
          eyebrow={how.eyebrow}
          title={how.title}
          description={how.description}
        />

        <Reveal className={styles.tabsWrap}>
          <div className={styles.tabs} role="tablist" aria-label={how.audience}>
            {TAB_META.map(({ id, icon: Icon }, index) => {
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
                    {how.tabs[index]}
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
              {how.steps[TAB_META.findIndex((tab) => tab.id === audience)].map(({ title, text }, index) => {
                const Icon = STEP_ICONS[TAB_META.findIndex((tab) => tab.id === audience)][index]
                return (
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
                )
              })}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
