import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/locale'
import { WORK_CATEGORY_NAMES } from './workCategoryNames'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://kaaamnow-backend.vercel.app'

type WorkCategory = {
  slug: string
  name: string
  is_active?: boolean
  names?: Record<string, string>
}

export type WorkCategoryChip = {
  slug: string
  label: string
}

export function useWorkCategories(): WorkCategoryChip[] {
  const { language } = useLocale()
  const [items, setItems] = useState<WorkCategory[]>([])

  useEffect(() => {
    let cancelled = false
    fetch(`${API_BASE}/api/v1/work-categories?lang=${encodeURIComponent(language)}`)
      .then((response) => (response.ok ? response.json() : []))
      .then((data: unknown) => {
        if (!cancelled && Array.isArray(data)) setItems(data as WorkCategory[])
      })
      .catch(() => undefined)
    return () => {
      cancelled = true
    }
  }, [language])

  return items
    .filter((item) => item.is_active !== false && item.slug && item.name)
    .map((item) => ({
      slug: item.slug,
      label: item.names?.[language] || WORK_CATEGORY_NAMES[item.slug]?.[language] || item.name,
    }))
}
