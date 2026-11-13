const ORIGIN = 'https://kaaamnow.in'

export type PageMeta = {
  title: string
  description: string
  path: string
  robots: string
}

const INDEX = 'index, follow, max-image-preview:large'
const NOINDEX = 'noindex, follow'
const HIDDEN = 'noindex, nofollow'

const PAGES: Record<string, PageMeta> = {
  '/': {
    title: 'KaaamNow – Hire Workers & Find Flexible Jobs in India',
    description:
      'Hire workers for daily shifts, hourly jobs and temporary staffing. Find flexible work across India.',
    path: '/',
    robots: INDEX,
  },
  '/team': {
    title: 'Team — KaaamNow',
    description:
      'Meet the founders of KaaamNow, the Indian platform that connects businesses with workers for hourly shifts and flexible jobs.',
    path: '/team',
    robots: NOINDEX,
  },
  '/privacy': {
    title: 'Privacy Policy — KaaamNow',
    description:
      'How KAAAMNOW TECHNOLOGY LLP collects, uses, and deletes personal information on kaaamnow.in and the KaaamNow apps.',
    path: '/privacy',
    robots: NOINDEX,
  },
  '/terms': {
    title: 'Terms — KaaamNow',
    description:
      'The rules for businesses and workers who use KaaamNow to hire staff or take hourly shifts and daily jobs in India.',
    path: '/terms',
    robots: NOINDEX,
  },
  '/terms/workers': {
    title: 'Worker Terms — KaaamNow',
    description:
      'Terms for workers who take hourly shifts, daily jobs, and Live Work through KaaamNow.',
    path: '/terms/workers',
    robots: NOINDEX,
  },
  '/terms/businesses': {
    title: 'Business Terms — KaaamNow',
    description:
      'Terms for businesses that hire workers for hourly shifts, daily jobs, and temporary cover on KaaamNow.',
    path: '/terms/businesses',
    robots: NOINDEX,
  },
  '/account-deletion': {
    title: 'Account deletion — KaaamNow',
    description: 'Request deletion of a KaaamNow account. Open bookings must be settled first.',
    path: '/account-deletion',
    robots: HIDDEN,
  },
}

export function metaForPath(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, '') || '/'
  const normalized = path === '/index.html' ? '/' : path
  return (
    PAGES[normalized] ?? {
      title: 'KaaamNow',
      description: PAGES['/'].description,
      path: normalized,
      robots: HIDDEN,
    }
  )
}

function upsertMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

/** Sets the document head for the current public route. Unknown paths stay out of Google. */
export function applyPageMeta(meta: PageMeta) {
  const url = `${ORIGIN}${meta.path === '/' ? '/' : meta.path}`
  document.title = meta.title
  upsertMeta('description', meta.description)
  upsertMeta('robots', meta.robots)
  upsertMeta('og:title', meta.title, 'property')
  upsertMeta('og:description', meta.description, 'property')
  upsertMeta('og:url', url, 'property')
  upsertMeta('twitter:title', meta.title)
  upsertMeta('twitter:description', meta.description)
  upsertCanonical(url)
}
