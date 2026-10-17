import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { buttonMotion } from '../../lib/motion'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: ReactNode
  className?: string
  fullWidth?: boolean
}

interface LinkProps extends BaseProps {
  href: string
  onClick?: () => void
}

interface ActionProps extends BaseProps {
  href?: undefined
  onClick: () => void
  type?: 'button' | 'submit'
}

export type ButtonProps = LinkProps | ActionProps

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', icon, className, fullWidth } = props
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  )

  if (props.href !== undefined) {
    return (
      <motion.a href={props.href} onClick={props.onClick} className={classes} {...buttonMotion}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={classes}
      {...buttonMotion}
    >
      {content}
    </motion.button>
  )
}
