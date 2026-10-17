import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ComingSoonModal } from '../components/ui/ComingSoonModal'
import { ComingSoonContext, type ComingSoonOptions } from './comingSoonContext'

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<ComingSoonOptions | null>(null)

  const open = useCallback((next: ComingSoonOptions) => setOptions(next), [])
  const close = useCallback(() => setOptions(null), [])
  const value = useMemo(() => ({ open }), [open])

  return (
    <ComingSoonContext.Provider value={value}>
      {children}
      <ComingSoonModal options={options} onClose={close} />
    </ComingSoonContext.Provider>
  )
}
