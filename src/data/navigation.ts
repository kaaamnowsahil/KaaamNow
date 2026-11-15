export interface NavLink {
  key: 'benefits' | 'how' | 'businesses' | 'workers' | 'categories' | 'preview' | 'team'
  href: `#${string}` | '/team'
}

export const NAV_LINKS: NavLink[] = [
  { key: 'benefits', href: '#benefits' },
  { key: 'how', href: '#how-it-works' },
  { key: 'businesses', href: '#businesses' },
  { key: 'workers', href: '#workers' },
  { key: 'categories', href: '#categories' },
  { key: 'preview', href: '#preview' },
  { key: 'team', href: '/team' },
]
