import { useEffect } from 'react'

let lockCount = 0

/** Prevents page scrolling while `active` is true. Safe to use from multiple components. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    lockCount += 1
    document.body.classList.add('scroll-locked')
    return () => {
      lockCount -= 1
      if (lockCount === 0) document.body.classList.remove('scroll-locked')
    }
  }, [active])
}
