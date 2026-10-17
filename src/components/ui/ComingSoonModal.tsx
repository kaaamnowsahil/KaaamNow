import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import { useEffect, useId, useRef } from 'react'
import type { ComingSoonOptions } from '../../context/comingSoonContext'
import { useScrollLock } from '../../hooks/useScrollLock'
import { easeOut } from '../../lib/motion'
import { Button } from './Button'
import styles from './ComingSoonModal.module.css'

interface ComingSoonModalProps {
  options: ComingSoonOptions | null
  onClose: () => void
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function ComingSoonModal({ options, onClose }: ComingSoonModalProps) {
  const isOpen = options !== null
  const titleId = useId()
  const descId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  useScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return
    returnFocusRef.current = document.activeElement as HTMLElement | null

    const frame = requestAnimationFrame(() => {
      dialogRef.current?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === first || active === dialogRef.current)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKeyDown)
      returnFocusRef.current?.focus()
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {options && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            tabIndex={-1}
            className={styles.dialog}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className={styles.close} onClick={onClose} aria-label="Close dialog">
              <X size={20} strokeWidth={1.75} aria-hidden="true" />
            </button>

            <div className={styles.badge} aria-hidden="true">
              <Sparkles size={24} strokeWidth={1.75} />
            </div>

            <p className={styles.eyebrow}>Coming soon</p>
            <h2 id={titleId} className={styles.title}>
              {options.title}
            </h2>
            <p id={descId} className={styles.description}>
              {options.description ??
                'We’re putting the finishing touches on KaaamNow. This part of the experience isn’t live yet — check back soon.'}
            </p>

            <div className={styles.actions}>
              <Button onClick={onClose} fullWidth>
                Got it
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
