import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Moon, Sun, UserRound, type LucideIcon } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { easeOut } from '../../../lib/motion'
import { Reveal } from '../../ui/Reveal'
import { SectionHeader } from '../../ui/SectionHeader'
import { BusinessPreview } from './BusinessPreview'
import { WorkerPreview } from './WorkerPreview'
import styles from './ProductPreview.module.css'

type View = 'worker' | 'business'
type Theme = 'dark' | 'light'

const VIEWS: { id: View; label: string; icon: LucideIcon; address: string }[] = [
  { id: 'worker', label: 'Worker view', icon: UserRound, address: 'kaaamnow.in/worker/home' },
  { id: 'business', label: 'Business view', icon: Building2, address: 'kaaamnow.in/business/live' },
]

export function ProductPreview() {
  const [view, setView] = useState<View>('worker')
  const [theme, setTheme] = useState<Theme>('dark')
  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
  const tabRefs = useRef<Record<View, HTMLButtonElement | null>>({ worker: null, business: null })
  const current = VIEWS.find((v) => v.id === view) ?? VIEWS[0]

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const index = VIEWS.findIndex((v) => v.id === view)
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % VIEWS.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + VIEWS.length) % VIEWS.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = VIEWS.length - 1
    const next = VIEWS[nextIndex].id
    setView(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="preview" className="section" aria-labelledby="preview-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <SectionHeader
          id="preview-title"
          eyebrow="Product preview"
          title={
            <>
              A marketplace that <span className="gradient-text">just makes sense</span>
            </>
          }
          description="A first look at KaaamNow for both sides. Switch between the worker and business views, flip between Live Now and Scheduled, and select a shift — everything below is illustrative sample data."
        />

        <Reveal className={styles.viewToggleWrap}>
          <div className={styles.viewToggle} role="tablist" aria-label="Choose preview">
            {VIEWS.map(({ id, label, icon: Icon }) => {
              const selected = view === id
              return (
                <button
                  key={id}
                  ref={(el) => {
                    tabRefs.current[id] = el
                  }}
                  type="button"
                  role="tab"
                  id={`preview-tab-${id}`}
                  aria-selected={selected}
                  aria-controls="preview-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.viewTab} ${selected ? styles.viewTabActive : ''}`}
                  onClick={() => setView(id)}
                  onKeyDown={onTabKeyDown}
                >
                  {selected && (
                    <motion.span
                      layoutId="preview-view-pill"
                      className={styles.viewPill}
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className={styles.viewTabLabel}>
                    <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                    {label}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal>
          <div
            id="preview-panel"
            role="tabpanel"
            aria-labelledby={`preview-tab-${view}`}
            className={styles.window}
            data-app-theme={theme}
          >
            <div className={styles.chrome}>
              <span className={styles.dots} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className={styles.address} aria-hidden="true">
                {current.address}
              </span>
              <span className={styles.chromeSpacer}>
                <button
                  type="button"
                  className={styles.themeToggle}
                  onClick={() => setTheme(nextTheme)}
                  aria-label={`Show ${nextTheme} theme`}
                  title={`Show ${nextTheme} theme`}
                >
                  {theme === 'dark' ? (
                    <Sun size={14} strokeWidth={1.75} aria-hidden="true" />
                  ) : (
                    <Moon size={14} strokeWidth={1.75} aria-hidden="true" />
                  )}
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={view}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                {view === 'worker' ? <WorkerPreview /> : <BusinessPreview />}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
