export type Faq = { question: string; answer: string }
export type Named = { title: string; text: string }
export type Card = { eyebrow: string; title: string; text: string; points: string[]; cta: string }
export type WorkType = { title: string; duration: string; text: string; examples: string[] }
export type Industry = { title: string; types: string; text: string; roles: string[] }
export type Article = { title: string; description: string; h1: string; paragraphs: string[]; faqs: Faq[] }
export type CategoryCopy = { label: string; h1: string; paragraphs: string[]; faqs: Faq[] }

export type SiteCopy = {
  nav: {
    benefits: string
    how: string
    businesses: string
    workers: string
    categories: string
    preview: string
    team: string
    start: string
    language: string
    theme: string
    menuOpen: string
    menuClose: string
    skip: string
    primary: string
    back: string
    home: string
  }
  presence: { business: string; businesses: string; worker: string; workers: string }
  hero: {
    badge: string
    line1: string
    line2: string
    lead: string
    findWorkers: string
    findWork: string
    highlights: string[]
    visualAria: string
    openShifts: string
    nearYou: string
    live: string
    sampleListings: string
    viewAll: string
    shifts: { role: string; place: string }[]
    workerRole: string
    availableNow: string
    shiftConfirmed: string
    shiftWhen: string
    payRate: string
    shownUpfront: string
  }
  guide: {
    workersTitle: string
    workers: string[]
    findWork: string
    businessTitle: string
    business: string[]
    hire: string
    howTitle: string
    steps: Named[]
    categoriesTitle: string
    indiaTitle: string
    india: string
    cityLink: string
    faqsTitle: string
    faqs: Faq[]
  }
  benefits: { eyebrow: string; title: string; accent: string; description: string; items: Named[] }
  how: { eyebrow: string; title: string; description: string; audience: string; tabs: string[]; steps: Named[][] }
  audiences: { eyebrow: string; title: string; accent: string; description: string; cards: Card[] }
  workTypes: { eyebrow: string; title: string; description: string; example: string; items: WorkType[] }
  industries: { eyebrow: string; title: string; description: string; roles: string; items: Industry[] }
  preview: {
    eyebrow: string
    title: string
    accent: string
    description: string
    choose: string
    worker: string
    business: string
    light: string
    dark: string
    showTheme: string
    workerNav: string[]
    businessNav: string[]
    liveNow: string
    scheduled: string
    discover: string
    dashboard: string
    availability: string
    search: string
    verified: string
    perHour: string
    schedule: string
    shiftType: string
    sampleEyebrow: string
    acceptLive: string
    applyScheduled: string
    sampleWorker: string
    findWork: string
    findWorkers: string
    glance: string
    confirmed: string
    applicantsLabel: string
    todayLive: string
    upcoming: string
    viewAll: string
    confirmedWord: string
    applicant: string
    applicants: string
    manageTitle: string
    manageBody: string
    postLive: string
    postLiveBody: string
    createShift: string
    createShiftBody: string
    postLiveButton: string
    createShiftButton: string
    workerRoles: string[]
    workerBusinesses: string[]
    workerMeta: string[]
    businessRoles: string[]
    businessStatus: string[]
    businessTimes: string[]
  }
  cta: { eyebrow: string; title: string; accent: string; text: string }
  footer: {
    tagline: string
    product: string
    getStarted: string
    company: string
    jobsByCity: string
    hireByCity: string
    workTypes: string
    contact: string
    email: string
    phone: string
    social: string
    location: string
    rights: string
    back: string
    nav: string
    links: string[]
    started: string[]
    companyLinks: string[]
    jobsIn: string
    hireIn: string
  }
  team: {
    eyebrow: string
    title: string
    accent: string
    description: string
    quote: string
    quoteAccent: string
    caption: string
    roles: string[]
    thoughts: string[]
    portrait: string
  }
  notFound: { title: string; body: string; home: string }
  soon: { eyebrow: string; body: string; keep: string; gotIt: string; close: string }
  landing: {
    findWork: string
    hire: string
    faqs: string
    related: string
    home: string
    crumbs: string
    jobs: string
    hireCrumb: string
    cityJobs: Article
    cityHire: Article
    categories: CategoryCopy[]
  }
}

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ''))
}
