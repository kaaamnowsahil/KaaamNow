import { createContext, useContext } from 'react'

export interface ComingSoonOptions {
  title: string
  description?: string
}

export interface ComingSoonContextValue {
  open: (options: ComingSoonOptions) => void
}

export const ComingSoonContext = createContext<ComingSoonContextValue | null>(null)

export function useComingSoon(): ComingSoonContextValue {
  const ctx = useContext(ComingSoonContext)
  if (!ctx) throw new Error('useComingSoon must be used within ComingSoonProvider')
  return ctx
}
