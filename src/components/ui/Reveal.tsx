import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fades a block up into view once it enters the viewport. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

interface RevealGroupProps {
  children: ReactNode
  className?: string
  staggerBy?: number
  as?: 'div' | 'ul' | 'ol'
}

/** Staggers the reveal of its direct `RevealItem` children. */
export function RevealGroup({ children, className, staggerBy = 0.1, as = 'div' }: RevealGroupProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger(staggerBy)}
    >
      {children}
    </Component>
  )
}

interface RevealItemProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}

export function RevealItem({ children, className, as = 'div' }: RevealItemProps) {
  const Component = motion[as]
  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  )
}
