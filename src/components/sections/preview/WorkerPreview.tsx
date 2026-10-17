import { AnimatePresence, motion } from 'framer-motion'
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Clock,
  LayoutGrid,
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
import { easeOut } from '../../../lib/motion'
import { Button } from '../../ui/Button'
import styles from './ProductPreview.module.css'

type Category = 'hourly' | 'daily' | 'multi'
type Filter = 'all' | Category

interface Listing {
  id: string
  role: string
  venue: string
  area: string
  category: Category
  when: string
  hours: string
  pay: string
  spots: number
  description: string
  skills: string[]
}

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'hourly', label: 'Hourly' },
  { id: 'daily', label: 'Daily' },
  { id: 'multi', label: 'Multi-day' },
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
    when: 'Tomorrow',
    hours: '7:00 AM – 12:00 PM',
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
    when: '3 days',
    hours: '2:00 PM – 10:00 PM',
    pay: '₹190/hr',
    spots: 1,
    description: 'Handle check-ins, answer guest queries, and coordinate with housekeeping over a long weekend.',
    skills: ['Hospitality', 'Basic computer skills'],
  },
]

const SIDEBAR: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: LayoutGrid, label: 'Browse', active: true },
  { icon: CalendarDays, label: 'My shifts' },
  { icon: Wallet, label: 'Earnings' },
  { icon: Bell, label: 'Alerts' },
]

export function WorkerPreview() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedId, setSelectedId] = useState<string>(LISTINGS[0].id)
  const { open } = useComingSoon()

  const visible = useMemo(
    () => (filter === 'all' ? LISTINGS : LISTINGS.filter((listing) => listing.category === filter)),
    [filter],
  )
  const selected = visible.find((listing) => listing.id === selectedId) ?? visible[0]

  const applyFilter = (next: Filter) => {
    setFilter(next)
    const first = next === 'all' ? LISTINGS[0] : LISTINGS.find((listing) => listing.category === next)
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
          <p className={styles.sidebarCardTitle}>Your availability</p>
          <div className={styles.availabilityGrid}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <span key={i} className={[1, 2, 4, 5].includes(i) ? styles.dayOn : undefined}>
                {day}
              </span>
            ))}
          </div>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.toolbar}>
          <div className={styles.search} aria-hidden="true">
            <Search size={16} strokeWidth={1.75} />
            <span>Search roles or locations</span>
          </div>
          <span className={styles.toolbarIcon} aria-hidden="true">
            <SlidersHorizontal size={16} strokeWidth={1.75} />
          </span>
        </div>

        <div className={styles.filters} role="group" aria-label="Filter sample shifts by category">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`${styles.filter} ${filter === id ? styles.filterActive : ''}`}
              aria-pressed={filter === id}
              onClick={() => applyFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <p className={styles.resultCount} aria-live="polite">
          {visible.length} sample {visible.length === 1 ? 'shift' : 'shifts'}
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
                        {listing.venue} · {listing.area}
                      </span>
                    </span>
                    <span className={styles.listingFoot}>
                      <span className={styles.tag}>{CATEGORY_LABEL[listing.category]}</span>
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
              <span className={styles.tag}>{CATEGORY_LABEL[selected.category]}</span>
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
                    title: 'Applying opens at launch',
                    description: `This ${selected.role.toLowerCase()} listing is a sample. When KaaamNow launches, you’ll be able to apply to real shifts like this in a single tap.`,
                  })
                }
              >
                Apply for this shift
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
