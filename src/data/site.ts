/**
 * Editable public-site facts. Landing copy for each city and category lives here
 * so a new city is one object, not a new template.
 *
 * App screens stay on APP_ORIGIN. The bare www homepage redirects here so
 * search engines describe this site instead of the sign-in app.
 */

export const SITE_URL = 'https://kaaamnow.in'
export const SITE_NAME = 'KaaamNow'
export const LOCALE = 'en_IN'
export const LANG = 'en-IN'
export const OG_IMAGE_PATH = '/og-image.png'

/** Signed-in web app. Do not point these paths at SITE_URL. */
export const APP_ORIGIN = 'https://www.kaaamnow.in'

export const APP_LINKS = {
  findWork: `${APP_ORIGIN}/worker/home`,
  hireWorkers: `${APP_ORIGIN}/business/home`,
  login: `${APP_ORIGIN}/welcome`,
  faq: `${APP_ORIGIN}/faq`,
} as const

export const CONTACT = {
  phoneDisplay: '+91 86187 96332',
  phoneSchema: '+91-861-879-6332',
  supportEmail: 'support@kaaamnow.in',
  helpEmail: 'help@kaaamnow.in',
  infoEmail: 'info@kaaamnow.in',
  legalEmail: 'legal@kaaamnow.in',
} as const

/** Fill the TODO values, then they are added to Organization.sameAs. */
export const SOCIAL = {
  instagram: 'https://www.instagram.com/kaaamnow',
  linkedin: 'https://www.linkedin.com/company/kaaamnow',
  x: 'https://x.com/Kaaam_Now',
  facebook: 'TODO',
  youtube: 'TODO',
} as const

export const COMPANY = {
  legalName: 'KAAAMNOW TECHNOLOGY LLP',
  streetAddress: '148, 1st Main, 1st Cross, Malleshpallya, 1st floor',
  locality: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560075',
  country: 'IN',
  mapsUrl: 'https://maps.app.goo.gl/MQSiFBDAWncA9dyP6',
} as const

export type Faq = { question: string; answer: string }
export type Crumb = { name: string; href: string }
export type RelatedLink = { label: string; href: string }

export type LandingPage = {
  path: string
  title: string
  description: string
  h1: string
  paragraphs: string[]
  faqs: Faq[]
  crumbs: Crumb[]
  related: RelatedLink[]
}

import { CITIES } from './cities'
export type { City } from './cities'
export { CITIES }

export type Category = Omit<LandingPage, 'crumbs' | 'related'> & { label: string }

export const CATEGORIES: Category[] = [
  {
    label: 'Daily wage jobs',
    path: '/daily-wage-jobs',
    title: 'Daily Wage Jobs in India | KaaamNow',
    description:
      'Find daily wage jobs where the shift, the area, and the pay are shown first. See today’s work on KaaamNow, or hire a team for one day.',
    h1: 'Daily wage jobs, with the shift and pay upfront',
    paragraphs: [
      'A daily wage job here is one day or one shift, not an open-ended role. A business needs extra hands today, and a worker wants a clear slot that same day. A listing only makes sense when the area, the start, the end, and the pay are together. You read the card and decide. The rate is not a surprise later.',
      'This category can include helper work, loading, packing, housekeeping cover, and one-day shop support, when the business chose daily wage. Every city has its own list. A shop shift in Mumbai and a factory shift in Chennai are not mixed on one page. Choose your city, then read that day’s posts.',
      'Applying is free for workers. One shift at a time. For businesses, posting is the same short task: keep the category as daily wage, write the seats, and set the pay. The platform shows the numbers when you complete the booking in the app. This page does not announce a national daily rate.',
      'If you need work on several days in a row, each day can be its own post, or you can write the dates on one temporary post when the app offers that format. Do not treat “work for the day” and “a permanent job” as the same thing. This page is the first one.',
    ],
    faqs: [
      {
        question: 'How is a daily wage job different from part-time?',
        answer:
          'Daily wage is usually one day or one full shift. Part-time can be fewer hours, and only on some days of the week. Both show the pay on the posting.',
      },
      {
        question: 'Are daily wage jobs available across India?',
        answer: 'All of India. A worker sets their city in the app and sees the shifts businesses post in that area. The city pages below are for searches in some larger cities. Coverage is not limited to those cities.',
      },
      {
        question: 'Can I take a new job every day?',
        answer: 'Yes, as long as the shifts do not overlap and you have already accepted them.',
      },
    ],
  },
  {
    label: 'Part-time jobs',
    path: '/part-time-jobs',
    title: 'Part-Time Jobs in India | KaaamNow',
    description:
      'Part-time jobs near you: shorter shifts, with the pay shown upfront. Find work on KaaamNow, or hire staff for a few hours.',
    h1: 'Part-time jobs, fewer hours, clear pay',
    paragraphs: [
      'Part-time here means shifts that do not take your whole day. Four evening hours on a counter, weekend kitchen help, or two afternoons of packing in a week. People search for part-time work near them because college, another job, or home already fills the rest of the day.',
      'A part-time shift on KaaamNow is useful when the hours are on the card. Writing “flexible” is not a way to hide the time. A worker can see whether the shift fits their route, and the pay is on the same card. A business also gains: you call people only for the peak hours, without a full salary attached.',
      'Retail, restaurants, delivery support, and events are often part-time, but the business chooses the label on each post. City pages cover the larger cities across India so these short shifts can be found. The live list is in the app.',
      'Applying is free. If you take a shift, do not keep another part-time job in that same window. Businesses should write a clear end time, so “near me” means today’s availability as well as the area.',
    ],
    faqs: [
      {
        question: 'How many hours is a part-time job?',
        answer: 'As many hours as that posting writes. There is no single national duration.',
      },
      {
        question: 'Can students apply?',
        answer: 'Yes, if you are 18 or older and free during those hours. The age policy is in the app terms.',
      },
      {
        question: 'How does near me work?',
        answer: 'You set your area in the app. You see posts from businesses in that area.',
      },
    ],
  },
  {
    label: 'Temporary staffing',
    path: '/temporary-staffing',
    title: 'Temporary Staffing for Short Cover | KaaamNow',
    description:
      'Temporary staffing for a few hours or a few days. Post a shift with pay upfront, or find short cover on KaaamNow.',
    h1: 'Temporary staffing, a few hours or a few days',
    paragraphs: [
      'Temporary staffing here means a bounded cover: an exhibition, a leave, a stock-take, or a wedding weekend. It is a posting with dates, a headcount, and pay, instead of a long agency contract. When the dates end, the work ends.',
      'Businesses use it because a permanent hire does not fill tomorrow’s gap. Workers take it because they know when the shift stops. KaaamNow holds the listing, the acceptance, and the completion in between. This page does not claim an employer-employee relationship. The work is agreed between the business and the worker on the terms of the posting.',
      'Choose the cover you need: helper, warehouse, event, restaurant, or delivery support. The city is set separately. Two different cities, Mumbai or Guwahati, do not share one temporary post.',
      'Fees and cancellation rules appear in the app when you make the booking. They are not summarised as one number here, so a wrong figure does not spread. To ask for short cover, post from the business app. To take cover, open the worker app.',
    ],
    faqs: [
      {
        question: 'How many days can temporary staffing run?',
        answer: 'As many days as you write on the posting. This page does not fix one package length.',
      },
      {
        question: 'Is this a manpower agency contract?',
        answer:
          'No. You post a shift and a worker accepts it. A long agency agreement is not part of this flow.',
      },
      {
        question: 'How is completion confirmed?',
        answer: 'With the completion step inside the app, so both sides have a record of that booking.',
      },
    ],
  },
  {
    label: 'Helper jobs',
    path: '/helper-jobs',
    title: 'Helper Jobs | KaaamNow',
    description:
      'Helper jobs for loading, shop support and daily cover. Pay upfront on every shift. Find work or hire helpers on KaaamNow.',
    h1: 'Helper jobs, a clear day’s work',
    paragraphs: [
      'Helper jobs are shifts that need an extra pair of hands: loading, unloading, support behind a counter, or covering a floor for one shift. This is not a claim of a skilled-trade licence. The work is still real, so the time and the pay belong on the card.',
      'Any business can post helper cover, from markets in Delhi to units in Chennai, shops in Kolkata, and godowns in Bengaluru. A worker who chooses the helper category sees only that list. Writing “helper needed” is not enough. Write the area and the hours.',
      'Applying is free. The business sets the pay. There is no helper wage chart on this page. The amount on the post is the amount. If the work is heavy lifting, write that on the posting so people arrive prepared.',
    ],
    faqs: [
      {
        question: 'What does a helper actually do?',
        answer: 'Whatever that posting says: loading, shop support, or general cover. Read the title. Do not assume.',
      },
      {
        question: 'Do I need my own tools?',
        answer: 'Only if the posting says so. Otherwise the business provides what the site needs.',
      },
    ],
  },
  {
    label: 'Delivery jobs',
    path: '/delivery-jobs',
    title: 'Delivery Jobs | KaaamNow',
    description:
      'Delivery support shifts with area and pay shown first. Pick a job or post delivery cover on KaaamNow.',
    h1: 'Delivery jobs, area and pay first',
    paragraphs: [
      'Delivery jobs appear when a business asks for short cover, not as a separate courier network. A shop needs someone for the evening drops, or a warehouse needs local drops. The route, the area, and the pay should be on the posting.',
      'You choose the delivery category and read the cards. A vehicle is required only when the post says so. Many support shifts are only a parcel counter or short drops. Do not bring a bike because you assumed one.',
      'Businesses should write the zone clearly. “The whole city” is not a route. A worker takes a shift in a zone they can cover. Pay is upfront. There is no hidden per-drop calculation here unless the posting says so.',
    ],
    faqs: [
      {
        question: 'Does every delivery job need a bike?',
        answer: 'No. Only when the posting asks for a vehicle. Otherwise it can be on foot or shop support.',
      },
      {
        question: 'Who sets the zone?',
        answer: 'The business, on the posting. You read the card and decide if that area works for you.',
      },
    ],
  },
  {
    label: 'Security guard jobs',
    path: '/security-guard-jobs',
    title: 'Security Guard Jobs | KaaamNow',
    description:
      'Security cover shifts where the post says so. Read hours and pay first, then apply or hire on KaaamNow.',
    h1: 'Security guard jobs, keep the shift clear',
    paragraphs: [
      'Security shifts are listed when a business posts security cover. This page does not approve a licence for you. If the posting asks for a licence or experience, that is the requirement. Do not treat a general helper post as security.',
      'Gate cover, event entry, and a night shift on a site each have their own time and pay. Both will be on the card. Take only what you can finish. Leaving a booking follows the rules shown in the app.',
      'When you hire, keep the category as security, write the post and the instructions clearly, and set the pay upfront. There is no promise of a guard in a fixed number of minutes. Availability depends on who is free at that time.',
    ],
    faqs: [
      {
        question: 'Can I apply without a licence?',
        answer: 'Not if the post asks for one. If it does not, still read the duties and do not invent experience.',
      },
      {
        question: 'Will a night shift look different?',
        answer: 'The hours are on the card. Night or day, those hours decide it.',
      },
    ],
  },
  {
    label: 'Warehouse jobs',
    path: '/warehouse-jobs',
    title: 'Warehouse Jobs | KaaamNow',
    description:
      'Warehouse shifts for picking, packing and loading. Pay and hours are on the job. Find work or hire floor cover.',
    h1: 'Warehouse jobs, pick, pack, and load',
    paragraphs: [
      'Warehouse jobs cover picking, packing, sorting, and loading when a business posts that shift. A one-day inbound spike or a week of counting can both be temporary. A permanent storekeeper role is not the promise of this page.',
      'The area is on the card, whether it is a godown in Delhi, an industrial belt in Pune, or your own city. Then see the live shifts in the app. Safety shoes or an ID are required only when the post says so.',
      'Businesses should write the floor work in one line: how many cases, how long, and how many people. Keep the pay upfront. The wrong category, such as restaurant, will not bring a warehouse crew.',
    ],
    faqs: [
      {
        question: 'Should heavy loading be written separately?',
        answer: 'Yes. Write heavy work on the posting so people arrive prepared.',
      },
      {
        question: 'How many people can I book for one shift?',
        answer: 'As many seats as you post. The app books against that headcount.',
      },
    ],
  },
  {
    label: 'Event staff',
    path: '/event-staff',
    title: 'Event Staff | KaaamNow',
    description:
      'Hire event staff or pick up a shift at a venue. Hours and pay are on the post before anyone accepts.',
    h1: 'Event staff, one night or one weekend',
    paragraphs: [
      'Event staff covers ushers, registration, setup crew, and floor hosts for a show or a wedding date. When the work ends, the shift ends. An event appears on KaaamNow when an organiser posts it, not from an automatic calendar.',
      'Venues across India, from Delhi to Kochi, often need a crew for one night or one weekend. The area and the call time should be on the card. If a late briefing changes the time, that should be written first. Otherwise the worker comes for the window on the card.',
      'When you hire, write the headcount, any dress note, and the pay. “Smart casual” is vague. One line is enough. Workers should take only an event whose end time does not clash with their next plan.',
    ],
    faqs: [
      {
        question: 'Can I hire people only for setup?',
        answer: 'Yes. Write setup on the post and set the end time to match. Hosting can be a separate post.',
      },
      {
        question: 'Who sets the dress code?',
        answer: 'The business, on the posting. Do not assume what was not written.',
      },
    ],
  },
  {
    label: 'Restaurant staff',
    path: '/restaurant-staff',
    title: 'Restaurant Staff | KaaamNow',
    description:
      'Kitchen helpers, servers and floor cover for a shift. Pay is shown before you take the job or post it.',
    h1: 'Restaurant staff, cover for one service',
    paragraphs: [
      'Restaurant staff here means servers, kitchen helpers, cleaning cover, and sometimes counter support. It is for one rush or one leave. This page does not claim to replace a whole kitchen team.',
      'Cafes, hotels, dhabas, and family restaurants across India can post one shift. Lunch and dinner run at different times, so the hours have to be written. The pay is on the card.',
      'Workers should take hygiene and timing seriously. Businesses should write the role in one line: floor, dish, or prep. A wrong expectation breaks the shift in the middle, and that record stays in the app.',
    ],
    faqs: [
      {
        question: 'Is a cook’s vacancy here too?',
        answer: 'Only when the post says cooking. A kitchen helper and a head cook are not the same role.',
      },
      {
        question: 'When should a dinner shift end?',
        answer: 'At the time you post. The worker accepts that end time.',
      },
    ],
  },
]

export const HOME_FAQS: Faq[] = [
  {
    question: 'What is KaaamNow?',
    answer:
      'KaaamNow is a flexible work platform for India. Workers look for daily, hourly, and part-time shifts, and businesses hire staff for a short time. Pay is shown on every job.',
  },
  {
    question: 'How do I find work?',
    answer:
      'Create a worker account with your phone, set your city and category, and read the open shifts. Take the one whose time and pay suit you. Applying is free.',
  },
  {
    question: 'How do I hire workers?',
    answer:
      'Post a shift in the business app: category, area, hours, and pay. Workers see that same detail. You can close the listing when the seats are full.',
  },
  {
    question: 'When is the pay shown?',
    answer:
      'As soon as the job is posted. A worker sees the amount before accepting. There is no city-wide rate list, because each posting sets its own pay.',
  },
  {
    question: 'Is KaaamNow only in a few cities?',
    answer:
      'No. KaaamNow is across India. You set your city in the app, and businesses post their own area. City pages exist for searches in larger cities. If your city is not listed, work can still appear in the app.',
  },
]

export function cityJobsPath(slug: string) {
  return `/jobs/${slug}`
}

export function cityHirePath(slug: string) {
  return `/hire-workers/${slug}`
}

export function findCity(slug: string) {
  return CITIES.find((city) => city.slug === slug)
}

export function findCategory(path: string) {
  return CATEGORIES.find((category) => category.path === path)
}

function relatedCities(current: string, kind: 'jobs' | 'hire'): RelatedLink[] {
  return CITIES.filter((city) => city.slug !== current).map((city) => ({
    label: kind === 'jobs' ? `${city.name} jobs` : `Hire in ${city.name}`,
    href: kind === 'jobs' ? cityJobsPath(city.slug) : cityHirePath(city.slug),
  }))
}

export function pageForPath(pathname: string): LandingPage | null {
  const path = pathname.replace(/\/+$/, '') || '/'
  const category = findCategory(path)
  if (category) {
    return {
      ...category,
      crumbs: [
        { name: 'Home', href: '/' },
        { name: category.label, href: category.path },
      ],
      related: [
        ...CITIES.map((city) => ({ label: `${category.label} in ${city.name}`, href: cityJobsPath(city.slug) })),
        ...CATEGORIES.filter((item) => item.path !== category.path).slice(0, 4).map((item) => ({
          label: item.label,
          href: item.path,
        })),
      ],
    }
  }

  const jobs = path.match(/^\/jobs\/([a-z0-9-]+)$/)
  if (jobs) {
    const city = findCity(jobs[1])
    if (!city) return null
    return {
      path,
      ...city.jobs,
      crumbs: [
        { name: 'Home', href: '/' },
        { name: 'Jobs', href: '/daily-wage-jobs' },
        { name: city.name, href: path },
      ],
      related: [
        { label: `Hire workers in ${city.name}`, href: cityHirePath(city.slug) },
        ...relatedCities(city.slug, 'jobs'),
        ...CATEGORIES.slice(0, 4).map((item) => ({ label: item.label, href: item.path })),
      ],
    }
  }

  const hire = path.match(/^\/hire-workers\/([a-z0-9-]+)$/)
  if (hire) {
    const city = findCity(hire[1])
    if (!city) return null
    return {
      path,
      ...city.hire,
      crumbs: [
        { name: 'Home', href: '/' },
        { name: 'Hire', href: '/temporary-staffing' },
        { name: city.name, href: path },
      ],
      related: [
        { label: `Jobs in ${city.name}`, href: cityJobsPath(city.slug) },
        ...relatedCities(city.slug, 'hire'),
        ...CATEGORIES.slice(0, 4).map((item) => ({ label: item.label, href: item.path })),
      ],
    }
  }

  return null
}

export function indexablePaths() {
  return [
    '/',
    ...CATEGORIES.map((category) => category.path),
    ...CITIES.flatMap((city) => [cityJobsPath(city.slug), cityHirePath(city.slug)]),
  ]
}

export const PRERENDER_PATHS = [
  ...indexablePaths(),
  '/team',
  '/privacy',
  '/terms',
  '/terms/workers',
  '/terms/businesses',
  '/account-deletion',
  '/404',
]

export function socialProfiles() {
  return Object.values(SOCIAL).filter((url) => url.startsWith('https://'))
}
