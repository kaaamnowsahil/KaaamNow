import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollLock } from '../hooks/useScrollLock'
import { easeOut, stagger } from '../lib/motion'
import { Logo } from './Logo'
import { Button } from './ui/Button'
import styles from './Navbar.module.css'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1))
const MOBILE_MENU_ID = 'mobile-navigation'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1080px)')
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`} aria-label="Primary">
        <Logo />

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className={styles.activePill}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={styles.linkLabel}>{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className={styles.actions}>
          <Button size="sm" href="#get-started" icon={<ArrowRight size={16} strokeWidth={2} />}>
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              className={styles.menuIcon}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.18 }}
            >
              {menuOpen ? (
                <X size={22} strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu size={22} strokeWidth={1.75} aria-hidden="true" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            className={styles.mobilePanel}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: easeOut }}
          >
            <motion.ul
              className={`container ${styles.mobileLinks}`}
              initial="hidden"
              animate="visible"
              variants={stagger(0.04, 0.06)}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={link.href}
                    className={`${styles.mobileLink} ${active === link.href.slice(1) ? styles.mobileLinkActive : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
              <motion.li
                className={styles.mobileActions}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              >
                <Button href="#get-started" onClick={closeMenu} fullWidth>
                  Get Started
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
