/**
 * Editable public-site facts. Landing copy for each city and category lives here
 * so a new city is one object, not a new template.
 *
 * App screens stay on APP_ORIGIN. That host is the signed-in product, not a
 * duplicate of this marketing site, so it is not redirected here.
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
      'Daily wage jobs dhoondo jahan shift, area aur pay pehle se dikhe. KaaamNow pe aaj ka kaam dekho ya ek din ki team hire karo.',
    h1: 'Daily Wage Jobs, Shift aur Pay Upfront',
    paragraphs: [
      'Daily wage ka matlab yahan ek din ya ek shift ka kaam hai, koi open-ended naukri nahi. Business ko aaj extra haath chahiye, worker ko usi din ka clear slot. KaaamNow pe listing tabhi samajh aati hai jab area, start, end aur pay saath mein hon. Aap card padh kar decide karte ho, baad mein rate ka surprise nahi hota.',
      'Is category mein helper, loading, packing, housekeeping cover aur ek-din ki shop support aa sakti hai, jab business ne daily wage chuna ho. Har shehar ki list alag hoti hai. Mumbai ki shop shift aur Chennai ki factory shift ek hi page pe mix nahi hoti. Apna shehar chuno, phir us din ki posts padho.',
      'Workers ke liye apply free hai. Ek waqt pe ek shift. Businesses ke liye posting ka kaam utna hi hai: category daily wage rakho, seats likho, pay set karo. Platform tab numbers dikhata hai jab aap app mein booking complete karte ho. Yahan koi national daily rate announce nahi kiya gaya.',
      'Agar aapko lagataar kai din kaam chahiye, har din ki post alag ho sakti hai ya aap dates ek hi temporary post mein likh sakte ho, jab tak app woh format deta hai. “Roz ka kaam” aur “hamesha ki naukri” ko ek mat samjho. Yeh page pehla wala hai.',
    ],
    faqs: [
      {
        question: 'Daily wage job aur part-time mein farak kya hai?',
        answer:
          'Daily wage aksar ek din ya ek poori shift hoti hai. Part-time kam ghante ki ho sakti hai aur hafte mein sirf kuch din. Dono mein pay posting pe likha hota hai.',
      },
      {
        question: 'Kya daily wage jobs poore India mein hain?',
        answer: 'Poora India. Worker app mein apna shehar set karta hai, aur wahi shifts dikhti hain jo us area ke businesses post karte hain. Neeche ke city pages kuch bade shehron ki searches ke liye hain, coverage un tak limited nahi hai.',
      },
      {
        question: 'Kya main roz nayi job le sakta hoon?',
        answer: 'Haan, jab tak shifts overlap na karein aur aap unhe accept kar chuke ho.',
      },
    ],
  },
  {
    label: 'Part-time jobs',
    path: '/part-time-jobs',
    title: 'Part-Time Jobs in India | KaaamNow',
    description:
      'Part-time jobs near you: kam ghante ki shifts, pay upfront. KaaamNow pe kaam dhoondo ya short-hour staff hire karo.',
    h1: 'Part-Time Jobs, Kam Ghante, Clear Pay',
    paragraphs: [
      'Part-time yahan un shifts ke liye hai jo aapka poora din nahi le leti. Shaam ke chaar ghante ek counter pe, weekend ki kitchen help, ya hafte mein do dopahar ki packing. Log “part time jobs near me” isliye dhoondte hain kyunki unke paas college, dusri duty ya ghar ka time pehle se bhara hota hai.',
      'KaaamNow pe part-time tab useful hai jab hours card pe hon. “Flexible” likh kar time chhupaana nahi hota. Worker dekhta hai ki shift uske route mein hai ya nahi, aur pay usi card pe hota hai. Business ko bhi fayda hai: aap sirf peak hours ke liye log bulwaate ho, poori salary bandhi nahi hoti.',
      'Categories jaise retail, restaurant, delivery support ya event aksar part-time hoti hain, lekin har post ka label business chahta hai. Shehar pages poore India ke bade cities ke liye hain, isi tarah ki short shifts dikhane ke liye. Live list app mein hai.',
      'Apply free hai. Agar aap shift lete ho to us window mein doosri part-time mat rakhna. Businesses ko chahiye ki woh end time clearly likhein, taaki “near me” ka matlab sirf area na ho, balki aaj ki availability bhi ho.',
    ],
    faqs: [
      {
        question: 'Part-time job kitne ghante ki hoti hai?',
        answer: 'Jitne ghante us posting mein likhe hon. Koi ek fixed national duration nahi hai.',
      },
      {
        question: 'Kya students apply kar sakte hain?',
        answer: 'Haan, agar aap 18 ya usse zyada ho aur us shift ke hours mein available ho. Site age policy app ke terms mein hai.',
      },
      {
        question: 'Near me kaise kaam karta hai?',
        answer: 'Aap app mein apna area dete ho. Jo businesses us area mein post karte hain, wahi cards saamne aate hain.',
      },
    ],
  },
  {
    label: 'Temporary staffing',
    path: '/temporary-staffing',
    title: 'Temporary Staffing for Short Cover | KaaamNow',
    description:
      'Temporary staffing for a few hours or a few days. Post a shift with pay upfront, or find short cover on KaaamNow.',
    h1: 'Temporary Staffing, Kuch Ghante ya Kuch Din',
    paragraphs: [
      'Temporary staffing ka yahan matlab hai ek bounded cover: ek exhibition, ek leave, ek stock-take, ek wedding weekend. Yeh lambe agency contract ki jagah ek posting hai jismein dates, headcount aur pay likhe hote hain. Jab dates khatam, kaam khatam.',
      'Businesses isliye use karte hain kyunki permanent hiring unke kal ke gap ko nahi bharti. Workers isliye lete hain kyunki unhe pata hota hai shift kab rukegi. KaaamNow beech mein listing, acceptance aur completion rakhta hai. Employer-employee ka daava is page pe nahi kiya ja raha. Kaam ka agreement posting ke terms ke mutabiq business aur worker ke beech hota hai.',
      'Aap helper, warehouse, event, restaurant ya delivery support mein se jo cover chahiye woh category chuno. Shehar alag se set hota hai. Do alag shehar, chahe Mumbai ho ya Guwahati, ek hi temporary post se nahi chalte.',
      'Fees aur cancellation rules app mein us waqt dikhte hain jab aap booking karte ho. Unhe yahan ek number mein summarize nahi kiya gaya, taaki galat figure na phail sake. Short cover chahiye ho to business app se post karo. Cover lena ho to worker app kholo.',
    ],
    faqs: [
      {
        question: 'Temporary staffing kitne din ki ho sakti hai?',
        answer: 'Jitne din aap posting mein likho. Yeh page kisi ek package length ko fix nahi karta.',
      },
      {
        question: 'Kya yeh manpower agency contract hai?',
        answer:
          'Nahi. Aap ek shift post karte ho aur worker use accept karta hai. Lambi agency agreement is flow ka hissa nahi hai.',
      },
      {
        question: 'Completion kaise confirm hoti hai?',
        answer: 'App ke andar completion step se, taaki dono taraf ke paas us booking ka record rahe.',
      },
    ],
  },
  {
    label: 'Helper jobs',
    path: '/helper-jobs',
    title: 'Helper Jobs | KaaamNow',
    description:
      'Helper jobs for loading, shop support and daily cover. Pay upfront on every shift. Find work or hire helpers on KaaamNow.',
    h1: 'Helper Jobs, Roz ka Clear Kaam',
    paragraphs: [
      'Helper jobs un shifts ko kehte hain jahan ek extra jodi haath chahiye: loading, unloading, counter ke peeche support, ya ek floor ko shift ke dauran sambhalna. Yeh skilled trade licence ka daava nahi hai. Phir bhi kaam real hai, isliye time aur pay card pe hone chahiye.',
      'Delhi ke markets se lekar Chennai ke units, Kolkata ki shops aur Bengaluru ke godowns tak, koi bhi business helper cover post kar sakta hai. Worker ko category helper chun kar sirf wahi list dikhegi. “Helper chahiye” likhna kaafi nahi. Area aur hours likho.',
      'Apply free hai. Business pay khud set karta hai. Is page pe koi helper wage chart nahi hai. Jo amount post pe hai wahi maanna. Agar kaam heavy lifting hai to posting mein wahi likho, taaki log prepared aayein.',
    ],
    faqs: [
      {
        question: 'Helper job mein kya kaam hota hai?',
        answer: 'Woh jo us posting mein likha ho: loading, shop support, ya general cover. Title padh lo, assume mat karo.',
      },
      {
        question: 'Kya tools mere hone chahiye?',
        answer: 'Sirf tab jab posting mein likha ho. Warna business ko site pe jo chahiye woh dena hota hai.',
      },
    ],
  },
  {
    label: 'Delivery jobs',
    path: '/delivery-jobs',
    title: 'Delivery Jobs | KaaamNow',
    description:
      'Delivery support shifts with area and pay shown first. Pick a job or post delivery cover on KaaamNow.',
    h1: 'Delivery Jobs, Area aur Pay Pehle',
    paragraphs: [
      'Delivery jobs is app mein tab aati hain jab koi business short cover maangta hai, na ki ek alag courier network ke tor pe. Ek shop ko shaam ki deliveries ke liye ek insaan chahiye, ya ek warehouse ko local drops. Route, area aur pay posting pe hona chahiye.',
      'Aap category delivery choose karke cards padhte ho. Vehicle ki zaroorat tabhi hai jab post mein likhi ho. Bahut si support shifts sirf parcel counter ya short drops hoti hain. Assume karke bike mat le aana.',
      'Businesses ko chahiye ki woh zone clearly likhein. “Poora shehar” ek route nahi hota. Worker usi zone ki shift leta hai jise woh cover kar sake. Pay upfront hai, per drop ka alag secret math yahan nahi chalaya jata jab tak posting mein wahi na ho.',
    ],
    faqs: [
      {
        question: 'Kya har delivery job ke liye bike chahiye?',
        answer: 'Nahi. Sirf jab posting mein vehicle likha ho. Warna on-foot ya shop-support ho sakta hai.',
      },
      {
        question: 'Zone kaun decide karta hai?',
        answer: 'Business, posting mein. Aap card padh kar decide karte ho ki woh area aapke liye hai ya nahi.',
      },
    ],
  },
  {
    label: 'Security guard jobs',
    path: '/security-guard-jobs',
    title: 'Security Guard Jobs | KaaamNow',
    description:
      'Security cover shifts where the post says so. Read hours and pay first, then apply or hire on KaaamNow.',
    h1: 'Security Guard Jobs, Shift Clear Rakho',
    paragraphs: [
      'Security guard jobs tab list hoti hain jab business ne security support ki shift post ki ho. Yeh page kisi licence ko automatic approve nahi karta. Agar posting mein licence ya experience likha hai, wahi maano. General helper wali post ko security mat samjho.',
      'Gate cover, event entry, ya ek site ki night shift, teeno ka time aur pay alag hota hai. Card pe dono honge. Aap sirf wahi lo jise aap poora kar sako. Chhod kar nikalna us booking ke rules ke under aata hai, jo app mein dikhte hain.',
      'Hire karte waqt category security rakho, post aur instructions clearly likho, aur pay upfront set karo. Kisi bhi “guaranteed guard in 10 minutes” jaisa claim yahan nahi hai. Availability us waqt ke workers pe depend karti hai.',
    ],
    faqs: [
      {
        question: 'Kya licence ke bina apply karun?',
        answer: 'Agar post licence maangti hai to nahi. Agar nahi maangti, phir bhi duties padh lo aur jhooth mat likho.',
      },
      {
        question: 'Night shift alag se dikhegi?',
        answer: 'Hours card pe hote hain. Night ho ya day, wahi time decide karta hai.',
      },
    ],
  },
  {
    label: 'Warehouse jobs',
    path: '/warehouse-jobs',
    title: 'Warehouse Jobs | KaaamNow',
    description:
      'Warehouse shifts for picking, packing and loading. Pay and hours are on the job. Find work or hire floor cover.',
    h1: 'Warehouse Jobs, Pick, Pack aur Load',
    paragraphs: [
      'Warehouse jobs mein picking, packing, sorting aur loading aata hai, jab business ne woh shift post ki ho. Ek din ka inbound spike ya ek hafte ki counting, dono temporary ho sakte hain. Permanent storekeeper role is page ka promise nahi hai.',
      'Area card pe hoga, chahe woh Delhi ka godown ho, Pune ki industrial belt, ya aapka apna shehar. Phir app mein live shifts dekho. Safety shoes ya ID ki zaroorat tabhi hai jab post mein likhi ho.',
      'Businesses ko floor ka kaam ek line mein likhna chahiye: kitne cases, kitni der, kitne log. Pay upfront rakho. Galat category, jaise restaurant, se warehouse crew nahi milta.',
    ],
    faqs: [
      {
        question: 'Kya heavy loading alag se likhni chahiye?',
        answer: 'Haan. Jo kaam body pe heavy hai use posting mein likho, taaki log prepared aayein.',
      },
      {
        question: 'Ek shift mein kitne log rakhun?',
        answer: 'Jitni seats aap post karte ho. App us headcount ke hisaab se booking karta hai.',
      },
    ],
  },
  {
    label: 'Event staff',
    path: '/event-staff',
    title: 'Event Staff | KaaamNow',
    description:
      'Hire event staff or pick up a shift at a venue. Hours and pay are on the post before anyone accepts.',
    h1: 'Event Staff, Ek Raat ya Ek Weekend',
    paragraphs: [
      'Event staff ushers, registration, setup crew aur floor hosts ke liye hota hai, ek show ya ek shaadi ki tarikh ke saath. Kaam khatam, shift khatam. KaaamNow pe event tab dikhta hai jab organiser ne post kiya ho, kisi bhi calendar ke automatic event nahi.',
      'India ke venues, Delhi se Kochi tak, aksar ek raat ya ek weekend ka crew mangte hain. Area aur call time card pe hon. Late brief se time badlega to woh pehle se likha hona chahiye, warna worker usi window ke liye aata hai.',
      'Hire karte waqt headcount, dress agar koi ho, aur pay likho. “Smart casual” ambiguous hai, ek line kaafi hai. Workers ko chahiye ki woh sirf wahi event lo jiska end time unke agle plan se nahi takraye.',
    ],
    faqs: [
      {
        question: 'Kya main sirf setup ke liye log manga sakta hoon?',
        answer: 'Haan. Post mein setup likho aur end time usi hisaab se rakho. Hosting alag post ho sakti hai.',
      },
      {
        question: 'Dress code kaun batata hai?',
        answer: 'Business, posting mein. Jo nahi likha, use assume mat karo.',
      },
    ],
  },
  {
    label: 'Restaurant staff',
    path: '/restaurant-staff',
    title: 'Restaurant Staff | KaaamNow',
    description:
      'Kitchen helpers, servers and floor cover for a shift. Pay is shown before you take the job or post it.',
    h1: 'Restaurant Staff, Ek Service ka Cover',
    paragraphs: [
      'Restaurant staff is category mein servers, kitchen helpers, cleaning cover aur kabhi-kabhi counter support aata hai. Yeh tab hai jab ek service rush hai ya koi leave pe hai. Poori kitchen team replace karne ka claim nahi hai.',
      'Cafes, hotels, dhabas aur family restaurants poore India mein ek shift post kar sakte hain. Dinner rush aur lunch rush ka time alag hota hai, isliye hours likhna zaroori hai. Pay card pe hota hai.',
      'Workers ko chahiye ki woh hygiene aur timing seriously len. Businesses ko chahiye ki woh role ek line mein likhein: floor, dish, ya prep. Galat expectation se shift beech mein toot-ti hai, aur uska record app mein rehta hai.',
    ],
    faqs: [
      {
        question: 'Kya cook ki vacancy bhi yahan hai?',
        answer: 'Sirf tab jab post mein cooking likhi ho. Kitchen helper aur head cook ek role nahi hai.',
      },
      {
        question: 'Dinner shift kitne baje end honi chahiye?',
        answer: 'Woh time jo aap post karte ho. Worker usi end time ko dekh kar accept karta hai.',
      },
    ],
  },
]

export const HOME_FAQS: Faq[] = [
  {
    question: 'KaaamNow kya hai?',
    answer:
      'KaaamNow India ka flexible work platform hai. Workers daily shift, hourly aur part-time kaam dhoondte hain, aur businesses kam time ke liye staff hire karte hain. Har job pe pay pehle se dikhta hai.',
  },
  {
    question: 'Kaam kaise dhoondun?',
    answer:
      'Worker app mein phone se account banao, apna shehar aur category chuno, aur open shifts padho. Jo time aur pay aapko theek lage, usi ko lo. Apply karna free hai.',
  },
  {
    question: 'Workers kaise hire karun?',
    answer:
      'Business app mein shift post karo: category, area, hours aur pay. Workers ko wahi detail dikhti hai. Seats bharte hi aap listing band kar sakte ho.',
  },
  {
    question: 'Pay kab dikhta hai?',
    answer:
      'Job post hote hi. Worker accept karne se pehle amount dekh leta hai. Yahan koi shehar-wide rate list nahi hai, kyunki pay har posting apna hota hai.',
  },
  {
    question: 'Kya KaaamNow sirf kuch shehron mein hai?',
    answer:
      'Nahi. KaaamNow poore India mein hai. Aap app mein apna shehar set karte ho, aur businesses apna area post karte hain. City pages bade shehron ki searches ke liye hain. Aapka shehar list mein na ho, tab bhi app mein kaam dikh sakta hai.',
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
