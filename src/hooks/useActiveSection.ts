import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently nearest the top of the viewport.
 * When several sections share the same position (e.g. side-by-side cards),
 * the one targeted by the URL hash wins.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visible = new Map<string, number>()

    const pick = () => {
      if (visible.size === 0) {
        setActive(null)
        return
      }
      const hash = window.location.hash.slice(1)
      if (hash && visible.has(hash)) {
        setActive(hash)
        return
      }
      const [first] = [...visible.entries()].sort((a, b) => a[1] - b[1])
      setActive(first[0])
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top)
          else visible.delete(entry.target.id)
        }
        pick()
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    window.addEventListener('hashchange', pick)
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', pick)
    }
  }, [key])

  return active
}
