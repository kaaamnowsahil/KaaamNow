import { AnimatePresence, motion } from 'framer-motion'
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Clock,
  House,
  MapPin,
  Search,
  SlidersHorizontal,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { useComingSoon } from '../../../context/comingSoonContext'
import { APP_LINKS } from '../../../data/appLinks'
import { easeOut } from '../../../lib/motion'
import { Button } from '../../ui/Button'
import styles from './ProductPreview.module.css'

type Category = 'hourly' | 'daily' | 'multi'
type Segment = 'live' | 'scheduled'

interface Listing {
  id: string
  role: string
  venue: string
  area: string
  category: Category
  segment: Segment
  distance: string
  when: string
  hours: string
  pay: string
  spots: number
  description: string
  skills: string[]
}

const SEGMENTS: { id: Segment; label: string }[] = [
  { id: 'live', label: 'Live Now' },
  { id: 'scheduled', label: 'Scheduled' },
]

const CATEGORY_LABEL: Record<Category, string> = {
  hourly: 'Hourly shift',
  daily: 'Daily job',
  multi: 'Multi-day',
}

const LISTINGS: Listing[] = [
  {
    id: 'l1',
    role: 'Event Host',
    venue: 'Convention venue',
    area: 'City centre',
    category: 'hourly',
    segment: 'live',
    distance: '1.2 km',
    when: 'Today',
    hours: '5:00 PM – 10:00 PM',
    pay: '₹200/hr',
    spots: 4,
    description: 'Welcome guests, manage check-in, and guide attendees during an evening product launch.',
    skills: ['Guest handling', 'Clear communication'],
  },
  {
    id: 'l2',
    role: 'Barista',
    venue: 'Neighbourhood café',
    area: 'Old town',
    category: 'hourly',
    segment: 'live',
    distance: '2.8 km',
    when: 'Now',
    hours: 'Next 4 hours',
    pay: '₹170/hr',
    spots: 1,
    description: 'Cover the morning rush: prepare espresso drinks, keep the counter tidy, and serve customers.',
    skills: ['Espresso basics', 'Customer service'],
  },
  {
    id: 'l3',
    role: 'Inventory Counter',
    venue: 'Electronics store',
    area: 'Tech park',
    category: 'daily',
    segment: 'scheduled',
    distance: '4.5 km',
    when: 'Sat',
    hours: '9:00 AM – 6:00 PM',
    pay: '₹1,400/day',
    spots: 3,
    description: 'Help complete a full stock audit using handheld scanners alongside the store team.',
    skills: ['Attention to detail', 'Scanner use'],
  },
  {
    id: 'l4',
    role: 'Promoter',
    venue: 'Shopping mall',
    area: 'Riverside',
    category: 'daily',
    segment: 'scheduled',
    distance: '3.1 km',
    when: 'Sun',
    hours: '11:00 AM – 8:00 PM',
    pay: '₹1,300/day',
    spots: 2,
    description: 'Introduce shoppers to a new beverage brand and hand out samples at a mall kiosk.',
    skills: ['Outgoing', 'Product demos'],
  },
  {
    id: 'l5',
    role: 'Warehouse Associate',
    venue: 'Fulfilment centre',
    area: 'Industrial area',
    category: 'multi',
    segment: 'scheduled',
    distance: '7.9 km',
    when: 'Mon – Fri',
    hours: '6:00 AM – 2:00 PM',
    pay: '₹180/hr',
    spots: 6,
    description: 'Pick, pack, and sort orders during a week-long seasonal peak. Training provided on day one.',
    skills: ['Physically active', 'Teamwork'],
  },
  {
    id: 'l6',
    role: 'Front Desk Cover',
    venue: 'Boutique hotel',
    area: 'Lakeside',
    category: 'multi',
    segment: 'scheduled',
    distance: '5.4 km',
    when: '3 days',
    hours: '2:00 PM – 10:00 PM',
    pay: '₹190/hr',
    spots: 1,
    description: 'Handle check-ins, answer guest queries, and coordinate with housekeeping over a long weekend.',
    skills: ['Hospitality', 'Basic computer skills'],
  },
]

const SIDEBAR: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: House, label: 'Discover', active: true },
  { icon: CalendarDays, label: 'My shifts' },
  { icon: Wallet, label: 'Earnings' },
  { icon: UserRound, label: 'Profile' },
]

export function WorkerPreview() {
  const [segment, setSegment] = useState<Segment>('live')
  const [selectedId, setSelectedId] = useState<string>(LISTINGS[0].id)
  const { open } = useComingSoon()

  const visible = useMemo(() => LISTINGS.filter((listing) => listing.segment === segment), [segment])
  const selected = visible.find((listing) => listing.id === selectedId) ?? visible[0]
  const isLive = segment === 'live'

  const applySegment = (next: Segment) => {
    setSegment(next)
    const first = LISTINGS.find((listing) => listing.segment === next)
    if (first) setSelectedId(first.id)
  }

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar} aria-hidden="true">
        <div className={styles.sidebarBrand}>
          <UserRound size={16} strokeWidth={1.75} />
          Worker account
        </div>
        <ul className={styles.sidebarNav}>
          {SIDEBAR.map(({ icon: Icon, label, active }) => (
            <li key={label} className={active ? styles.sidebarActive : undefined}>
              <Icon size={16} strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>
        <div className={styles.sidebarCard}>
          <p className={styles.sidebarCardTitle}>Availability</p>
          <p className={styles.availabilityLive}>
            <span className={styles.liveDot} />
            LIVE
          </p>
          <p className={styles.sidebarCardHint}>Nearby businesses can send you requests</p>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarHeading}>
            <p className={styles.toolbarTitle}>Hello, Priya 👋</p>
            <p className={styles.toolbarSub}>
              <MapPin size={12} strokeWidth={2} aria-hidden="true" /> Indiranagar, Bengaluru
            </p>
          </div>
          <span className={styles.toolbarIcon} aria-hidden="true">
            <Bell size={16} strokeWidth={1.75} />
          </span>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.search} aria-hidden="true">
            <Search size={16} strokeWidth={1.75} />
            <span>Search shifts...</span>
          </div>
          <span className={styles.toolbarIcon} aria-hidden="true">
            <SlidersHorizontal size={16} strokeWidth={1.75} />
          </span>
        </div>

        <div className={styles.filters} role="group" aria-label="Work schedule">
          {SEGMENTS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`${styles.filter} ${segment === id ? styles.filterActive : ''}`}
              aria-pressed={segment === id}
              onClick={() => applySegment(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <p className={styles.resultCount} aria-live="polite">
          {isLive
            ? `${visible.length} live ${visible.length === 1 ? 'request' : 'requests'} in your categories`
            : `${visible.length} scheduled ${visible.length === 1 ? 'shift' : 'shifts'} near you`}
        </p>

        <motion.ul layout className={styles.listings}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((listing) => {
              const isSelected = selected?.id === listing.id
              return (
                <motion.li
                  key={listing.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                >
                  <button
                    type="button"
                    className={`${styles.listing} ${isSelected ? styles.listingActive : ''}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedId(listing.id)}
                  >
                    <span className={styles.listingTop}>
                      <span className={styles.listingRole}>{listing.role}</span>
                      <span className={styles.listingPay}>{listing.pay}</span>
                    </span>
                    <span className={styles.listingMeta}>
                      <span>
                        <MapPin size={12} strokeWidth={2} aria-hidden="true" />
                        {listing.venue} · {listing.distance} away
                      </span>
                    </span>
                    <span className={styles.listingFoot}>
                      <span className={styles.tag}>
                        {listing.segment === 'live' ? 'Live Now' : CATEGORY_LABEL[listing.category]}
                      </span>
                      <span className={styles.listingTime}>
                        <Clock size={12} strokeWidth={2} aria-hidden="true" />
                        {listing.when} · {listing.hours}
                      </span>
                      <ChevronRight className={styles.listingChevron} size={16} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </button>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>
      </div>

      <div className={styles.detail}>
        <AnimatePresence mode="wait" initial={false}>
          {selected && (
            <motion.div
              key={selected.id}
              className={styles.detailInner}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: easeOut }}
            >
              <span className={styles.tag}>
                {selected.segment === 'live' ? 'Live Now' : CATEGORY_LABEL[selected.category]}
              </span>
              <h3 className={styles.detailTitle}>{selected.role}</h3>
              <p className={styles.detailVenue}>
                {selected.venue} · {selected.area}
              </p>

              <dl className={styles.detailStats}>
                <div>
                  <dt>
                    <Wallet size={14} strokeWidth={1.75} aria-hidden="true" /> Pay
                  </dt>
                  <dd>{selected.pay}</dd>
                </div>
                <div>
                  <dt>
                    <CalendarDays size={14} strokeWidth={1.75} aria-hidden="true" /> When
                  </dt>
                  <dd>{selected.when}</dd>
                </div>
                <div>
                  <dt>
                    <Clock size={14} strokeWidth={1.75} aria-hidden="true" /> Hours
                  </dt>
                  <dd>{selected.hours}</dd>
                </div>
                <div>
                  <dt>
                    <Users size={14} strokeWidth={1.75} aria-hidden="true" /> Openings
                  </dt>
                  <dd>
                    {selected.spots} {selected.spots === 1 ? 'spot' : 'spots'}
                  </dd>
                </div>
              </dl>

              <p className={styles.detailText}>{selected.description}</p>

              <ul className={styles.skills} aria-label="Helpful skills">
                {selected.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <Button
                fullWidth
                onClick={() =>
                  open({
                    eyebrow: 'Sample preview',
                    title: isLive ? 'Accept real requests in the app' : 'Apply to real shifts in the app',
                    description: `This ${selected.role.toLowerCase()} listing is a sample. Open KaaamNow to see real shifts near you in your work categories and take one in a tap.`,
                    action: { label: 'Find work on KaaamNow', href: APP_LINKS.workerHome },
                  })
                }
              >
                {isLive ? 'Accept shift' : 'Apply for this shift'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
