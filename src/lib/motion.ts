import type { Transition, Variants } from 'framer-motion'

export const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
}

export function stagger(staggerChildren = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  }
}

export const viewportOnce = { once: true, amount: 0.2 } as const

export const buttonMotion = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97, y: 0 },
  transition: { type: 'spring', stiffness: 400, damping: 24 },
} as const
