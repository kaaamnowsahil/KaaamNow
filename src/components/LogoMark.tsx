interface LogoMarkProps {
  className?: string
  size?: number
}

const COLOR = 'var(--color-primary)'

export function LogoMark({ className, size = 36 }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="88 80 310 310"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <g fill={COLOR} stroke={COLOR}>
        <path d="M182 115 H150 A52 52 0 0 0 98 167 V343 A42 42 0 0 0 182 343 Z" stroke="none" />
        <circle cx="290" cy="128" r="40" stroke="none" />
        <line x1="232" y1="244" x2="352" y2="180" strokeWidth="58" strokeLinecap="round" />
        <line x1="240" y1="272" x2="348" y2="348" strokeWidth="76" strokeLinecap="round" />
        <path d="M232 192 L198 226 Q184 256 198 288 L228 322 L250 300 V215 Z" strokeWidth="4" strokeLinejoin="round" />
        <polygon points="334,216 355,240 370,206" strokeWidth="4" strokeLinejoin="round" />
      </g>
    </svg>
  )
}
