import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  CalendarDays,
  ChevronDown,
  House,
  MapPin,
  Search,
  SlidersHorizontal,
  UserRound,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import { useComingSoon } from '../../../context/comingSoonContext'
import { APP_LINKS } from '../../../data/appLinks'
import { easeOut } from '../../../lib/motion'
import styles from './AppPreview.module.css'

type Segment = 'live' | 'scheduled'

interface Listing {
  id: string
  segment: Segment
  role: string
  business: string
  verified: boolean
  distance: string
  time: string
  place: string
  rate: string
  estimate: string
}

const SEGMENTS: { id: Segment; label: string }[] = [
  { id: 'live', label: 'Live Now' },
  { id: 'scheduled', label: 'Scheduled' },
]

const LISTINGS: Listing[] = [
  {
    id: 'w1',
    segment: 'live',
    role: 'Kitchen Helper',
    business: 'Sample Café',
    verified: true,
    distance: '1.2 km away',
    time: 'Wed, 4 Nov · 6:30 PM · 4 hours',
    place: '12th Main Road, Indiranagar',
    rate: '₹160',
    estimate: '₹640 estimated per worker',
  },
  {
    id: 'w2',
    segment: 'live',
    role: 'Event Host',
    business: 'Convention Hall',
    verified: true,
    distance: '2.8 km away',
    time: 'Wed, 4 Nov · 7:00 PM · 3 hours',
    place: 'Old Airport Road',
    rate: '₹200',
    estimate: '₹600 estimated per worker',
  },
  {
    id: 'w3',
    segment: 'scheduled',
    role: 'Warehouse Associate',
    business: 'Fulfilment Centre',
    verified: true,
    distance: '7.9 km away',
    time: 'Sat, 7 Nov · 6:00 AM – 2:00 PM · 8 hours',
    place: 'Whitefield Industrial Area',
    rate: '₹180',
    estimate: '₹1,440 estimated per worker',
  },
  {
    id: 'w4',
    segment: 'scheduled',
    role: 'Retail Floor Staff',
    business: 'Lifestyle Store',
    verified: false,
    distance: '3.1 km away',
    time: 'Sun, 8 Nov · 11:00 AM – 8:00 PM · 9 hours',
    place: 'Forum Mall, Koramangala',
    rate: '₹170',
    estimate: '₹1,530 estimated per worker',
  },
]

const NAV: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: House, label: 'Discover', active: true },
  { icon: CalendarDays, label: 'My shifts' },
  { icon: Wallet, label: 'Earnings' },
  { icon: UserRound, label: 'Profile' },
]

export function WorkerPreview() {
  const [segment, setSegment] = useState<Segment>('live')
  const { open } = useComingSoon()
  const visible = LISTINGS.filter((listing) => listing.segment === segment)

  const openListing = (listing: Listing) =>
    open({
      eyebrow: 'Sample preview',
      title: segment === 'live' ? 'Accept real requests in the app' : 'Apply to real shifts in the app',
      description: `This ${listing.role.toLowerCase()} listing is a sample. Open KaaamNow to see real shifts near you in your work categories and take one in a tap.`,
      action: { label: 'Find work on KaaamNow', href: APP_LINKS.workerHome },
    })

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar} aria-hidden="true">
        <div className={styles.profile}>
          <span className={styles.avatar}>PS</span>
          <div>
            <p className={styles.profileName}>Priya Sharma</p>
            <p className={styles.profileMeta}>+91 98765 43210</p>
          </div>
        </div>
        <ul className={styles.nav}>
          {NAV.map(({ icon: Icon, label, active }) => (
            <li key={label} className={active ? styles.navActive : undefined}>
              <Icon size={16} strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>
        <p className={styles.version}>Version 0.1.0</p>
      </aside>

      <div className={styles.main}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Discover</span>
          <span className={styles.bell} aria-hidden="true">
            <Bell size={16} strokeWidth={1.75} />
          </span>
        </div>

        <div className={styles.scroll}>
          <div className={styles.content}>
            <div className={`${styles.card} ${styles.availability}`} aria-hidden="true">
              <div>
                <p className={styles.availabilityTitle}>Availability</p>
                <p className={styles.availabilityState}>LIVE</p>
              </div>
              <span className={styles.toggle} />
            </div>

            <div className={styles.location} aria-hidden="true">
              <MapPin size={16} strokeWidth={1.75} />
              <span>Indiranagar, Bengaluru, Karnataka, 560038, India</span>
              <ChevronDown size={16} strokeWidth={1.75} />
            </div>

            <div className={styles.search} aria-hidden="true">
              <Search size={16} strokeWidth={1.75} />
              <span>Search shifts...</span>
              <SlidersHorizontal size={16} strokeWidth={1.75} />
            </div>

            <div className={styles.segments} role="group" aria-label="Work schedule">
              {SEGMENTS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`${styles.segment} ${segment === id ? styles.segmentActive : ''}`}
                  aria-pressed={segment === id}
                  onClick={() => setSegment(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={segment}
                className={styles.content}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                {visible.map((listing) => (
                  <button
                    key={listing.id}
                    type="button"
                    className={styles.shift}
                    onClick={() => openListing(listing)}
                  >
                    <span className={styles.shiftTop}>
                      <strong className={listing.segment === 'live' ? styles.live : undefined}>
                        {listing.segment === 'live' ? 'Live Now' : 'Scheduled'}
                      </strong>
                      <span>{listing.distance}</span>
                    </span>
                    <h4>{listing.role}</h4>
                    <span className={styles.business}>
                      {listing.verified && <BadgeCheck size={14} strokeWidth={2} aria-hidden="true" />}
                      {listing.business}
                      {listing.verified && ' · Verified'}
                    </span>
                    <span>{listing.time}</span>
                    <span>{listing.place}</span>
                    <span className={styles.shiftFoot}>
                      <span>
                        <strong>{listing.rate}</strong> per hour
                        <small>{listing.estimate}</small>
                      </span>
                      <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
