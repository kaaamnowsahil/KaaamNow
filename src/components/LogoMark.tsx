interface LogoMarkProps {
  className?: string
  size?: number
}

const BAR = 'var(--color-primary)'
const STRAND = 'var(--color-primary-soft)'
const FOLD = 'var(--color-primary-hover)'

const SHAPES: { points: string; fill: string }[] = [
  { points: '0,20 40,0 40,12 0,32', fill: BAR },
  { points: '40,46 0,66 0,54 40,34', fill: BAR },
  { points: '0,20 17,28.5 17,40.5 0,32', fill: STRAND },
  { points: '40,46 23,37.5 23,25.5 40,34', fill: STRAND },
  { points: '0,20 12,26 0,32', fill: FOLD },
  { points: '40,46 28,40 40,34', fill: FOLD },
]

export function LogoMark({ className, size = 36 }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="-2 -2 44 70"
      width={(size * 44) / 70}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {SHAPES.map(({ points, fill }) => (
        <polygon key={points} points={points} fill={fill} stroke={fill} strokeWidth={2} strokeLinejoin="round" />
      ))}
    </svg>
  )
}
