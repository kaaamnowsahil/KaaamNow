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
import { fill } from '../../../i18n/siteCopy'
import { useLocale } from '../../../i18n/locale'
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

const SEGMENTS: { id: Segment }[] = [{ id: 'live' }, { id: 'scheduled' }]

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

const NAV: { icon: LucideIcon; active?: boolean }[] = [
  { icon: House, active: true },
  { icon: CalendarDays },
  { icon: Wallet },
  { icon: UserRound },
]

export function WorkerPreview() {
  const [segment, setSegment] = useState<Segment>('live')
  const { open } = useComingSoon()
  const { copy } = useLocale()
  const preview = copy.preview
  const visible = LISTINGS.filter((listing) => listing.segment === segment)

  const openListing = (listing: Listing) => {
    const index = LISTINGS.findIndex((item) => item.id === listing.id)
    const role = preview.workerRoles[index]
    open({
      eyebrow: preview.sampleEyebrow,
      title: segment === 'live' ? preview.acceptLive : preview.applyScheduled,
      description: fill(preview.sampleWorker, { role: role.toLowerCase() }),
      action: { label: preview.findWork, href: APP_LINKS.workerHome },
    })
  }

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
          {NAV.map(({ icon: Icon, active }, index) => (
            <li key={preview.workerNav[index]} className={active ? styles.navActive : undefined}>
              <Icon size={16} strokeWidth={1.75} />
              {preview.workerNav[index]}
            </li>
          ))}
        </ul>
        <p className={styles.version}>Version 0.1.0</p>
      </aside>

      <div className={styles.main}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>{preview.discover}</span>
          <span className={styles.bell} aria-hidden="true">
            <Bell size={16} strokeWidth={1.75} />
          </span>
        </div>

        <div className={styles.scroll}>
          <div className={styles.content}>
            <div className={`${styles.card} ${styles.availability}`} aria-hidden="true">
              <div>
                <p className={styles.availabilityTitle}>{preview.availability}</p>
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
              <span>{preview.search}</span>
              <SlidersHorizontal size={16} strokeWidth={1.75} />
            </div>

            <div className={styles.segments} role="group" aria-label={preview.schedule}>
              {SEGMENTS.map(({ id }) => (
                <button
                  key={id}
                  type="button"
                  className={`${styles.segment} ${segment === id ? styles.segmentActive : ''}`}
                  aria-pressed={segment === id}
                  onClick={() => setSegment(id)}
                >
                  {id === 'live' ? preview.liveNow : preview.scheduled}
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
                        {listing.segment === 'live' ? preview.liveNow : preview.scheduled}
                      </strong>
                      <span>{preview.workerMeta[LISTINGS.findIndex((item) => item.id === listing.id)]}</span>
                    </span>
                    <h4>{preview.workerRoles[LISTINGS.findIndex((item) => item.id === listing.id)]}</h4>
                    <span className={styles.business}>
                      {listing.verified && <BadgeCheck size={14} strokeWidth={2} aria-hidden="true" />}
                      {preview.workerBusinesses[LISTINGS.findIndex((item) => item.id === listing.id)]}
                      {listing.verified && ` · ${preview.verified}`}
                    </span>
                    <span>{listing.time}</span>
                    <span>{listing.place}</span>
                    <span className={styles.shiftFoot}>
                      <span>
                        <strong>{listing.rate}</strong> {preview.perHour}
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
