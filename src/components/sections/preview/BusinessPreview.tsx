import { AnimatePresence, motion } from 'framer-motion'
import {
  Building2,
  CalendarDays,
  ChevronRight,
  Clock,
  House,
  Plus,
  Users,
  UsersRound,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { useComingSoon } from '../../../context/comingSoonContext'
import { APP_LINKS } from '../../../data/appLinks'
import { easeOut } from '../../../lib/motion'
import { Button } from '../../ui/Button'
import styles from './ProductPreview.module.css'

type Status = 'open' | 'filled'
type Segment = 'live' | 'scheduled'

interface Applicant {
  initials: string
  name: string
  skills: string
}

interface PostedShift {
  id: string
  role: string
  segment: Segment
  type: string
  when: string
  hours: string
  pay: string
  needed: number
  filled: number
  applicants: Applicant[]
}

const SEGMENTS: { id: Segment; label: string }[] = [
  { id: 'live', label: 'Live Now' },
  { id: 'scheduled', label: 'Scheduled' },
]

const POSTED_SHIFTS: PostedShift[] = [
  {
    id: 'b1',
    role: 'Weekend Servers',
    segment: 'scheduled',
    type: 'Hourly shift',
    when: 'Sat',
    hours: '6:00 PM – 11:00 PM',
    pay: '₹180/hr',
    needed: 4,
    filled: 2,
    applicants: [
      { initials: 'RK', name: 'Rohan K.', skills: 'Table service · Billing' },
      { initials: 'AM', name: 'Anjali M.', skills: 'Restaurant floor · Hindi, English' },
      { initials: 'VS', name: 'Vikram S.', skills: 'Banquets · Order taking' },
    ],
  },
  {
    id: 'b2',
    role: 'Kitchen Helper',
    segment: 'live',
    type: 'Live request',
    when: 'Today',
    hours: 'Next 4 hours',
    pay: '₹160/hr',
    needed: 1,
    filled: 0,
    applicants: [
      { initials: 'SP', name: 'Suresh P.', skills: 'Prep work · Dishwashing' },
      { initials: 'NK', name: 'Neha K.', skills: 'Commercial kitchen · Hygiene' },
    ],
  },
  {
    id: 'b3',
    role: 'Stock Audit Team',
    segment: 'scheduled',
    type: 'Daily job',
    when: 'Sun',
    hours: '9:00 AM – 6:00 PM',
    pay: '₹1,400/day',
    needed: 3,
    filled: 3,
    applicants: [
      { initials: 'AK', name: 'Arjun K.', skills: 'Inventory scanning' },
      { initials: 'MD', name: 'Meera D.', skills: 'Stock counts · Excel' },
      { initials: 'IS', name: 'Imran S.', skills: 'Warehouse audits' },
    ],
  },
  {
    id: 'b4',
    role: 'Festive Season Packers',
    segment: 'scheduled',
    type: 'Multi-day',
    when: 'Mon – Sat',
    hours: '7:00 AM – 3:00 PM',
    pay: '₹170/hr',
    needed: 6,
    filled: 4,
    applicants: [
      { initials: 'DY', name: 'Deepak Y.', skills: 'Packing · Labelling' },
      { initials: 'PR', name: 'Pooja R.', skills: 'Order sorting' },
    ],
  },
]

const SIDEBAR: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: House, label: 'Dashboard', active: true },
  { icon: CalendarDays, label: 'Shifts' },
  { icon: UsersRound, label: 'Applicants' },
  { icon: Building2, label: 'Profile' },
]

const statusOf = (shift: PostedShift): Status => (shift.filled >= shift.needed ? 'filled' : 'open')

export function BusinessPreview() {
  const [segment, setSegment] = useState<Segment>('scheduled')
  const [selectedId, setSelectedId] = useState<string>(POSTED_SHIFTS[0].id)
  const { open } = useComingSoon()

  const visible = useMemo(() => POSTED_SHIFTS.filter((shift) => shift.segment === segment), [segment])
  const isLive = segment === 'live'
  const selected = visible.find((shift) => shift.id === selectedId) ?? visible[0]

  const totals = POSTED_SHIFTS.reduce(
    (acc, shift) => ({ needed: acc.needed + shift.needed, filled: acc.filled + shift.filled }),
    { needed: 0, filled: 0 },
  )

  const applySegment = (next: Segment) => {
    setSegment(next)
    const first = POSTED_SHIFTS.find((shift) => shift.segment === next)
    if (first) setSelectedId(first.id)
  }

  const comingSoon = (title: string, description: string) =>
    open({
      eyebrow: 'Sample preview',
      title,
      description,
      action: { label: 'Find workers on KaaamNow', href: APP_LINKS.businessHome },
    })

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar} aria-hidden="true">
        <div className={styles.sidebarBrand}>
          <Building2 size={16} strokeWidth={1.75} />
          Business account
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
          <p className={styles.sidebarCardTitle}>Spots filled this week</p>
          <p className={styles.sidebarStat}>
            {totals.filled}
            <span> / {totals.needed}</span>
          </p>
          <span className={styles.progress}>
            <span style={{ width: `${(totals.filled / totals.needed) * 100}%` }} />
          </span>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarHeading}>
            <p className={styles.toolbarTitle}>Your team, at a glance</p>
            <p className={styles.toolbarSub}>Sample Café · Verified business</p>
          </div>
          <button
            type="button"
            className={styles.postButton}
            onClick={() =>
              isLive
                ? comingSoon(
                    'Post a real live request in the app',
                    'This dashboard is a sample. On KaaamNow you post a live request and workers within 30 km in that category are notified instantly.',
                  )
                : comingSoon(
                    'Create a real shift in the app',
                    'This dashboard is a sample. On KaaamNow you create a shift in minutes — set the role, timing, and pay — and nearby workers in that category get an alert straight away.',
                  )
            }
          >
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
            {isLive ? 'Post live request' : 'Create shift'}
          </button>
        </div>

        <div className={styles.filters} role="group" aria-label="Shift type">
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
          {isLive ? 'Today’s live shifts' : 'Upcoming shifts'} · {visible.length}
        </p>

        <motion.ul layout className={styles.listings}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((shift) => {
              const isSelected = selected?.id === shift.id
              const status = statusOf(shift)
              return (
                <motion.li
                  key={shift.id}
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
                    onClick={() => setSelectedId(shift.id)}
                  >
                    <span className={styles.listingTop}>
                      <span className={styles.listingRole}>{shift.role}</span>
                      <span className={`${styles.status} ${status === 'filled' ? styles.statusFilled : ''}`}>
                        {status === 'filled'
                          ? 'Filled'
                          : shift.segment === 'live'
                            ? 'Live · searching'
                            : 'Hiring'}
                      </span>
                    </span>
                    <span className={styles.listingFoot}>
                      <span className={styles.tag}>{shift.type}</span>
                      <span className={styles.listingTime}>
                        <Clock size={12} strokeWidth={2} aria-hidden="true" />
                        {shift.when} · {shift.hours}
                      </span>
                    </span>
                    <span className={styles.fillRow}>
                      <span className={styles.progress}>
                        <span style={{ width: `${(shift.filled / shift.needed) * 100}%` }} />
                      </span>
                      <span className={styles.fillLabel}>
                        {shift.filled} / {shift.needed} confirmed
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
              <span className={styles.tag}>{selected.type}</span>
              <h3 className={styles.detailTitle}>{selected.role}</h3>
              <p className={styles.detailVenue}>
                {selected.when} · {selected.hours}
              </p>

              <dl className={styles.detailStats}>
                <div>
                  <dt>
                    <Wallet size={14} strokeWidth={1.75} aria-hidden="true" /> Pay rate
                  </dt>
                  <dd>{selected.pay}</dd>
                </div>
                <div>
                  <dt>
                    <Users size={14} strokeWidth={1.75} aria-hidden="true" /> Filled
                  </dt>
                  <dd>
                    {selected.filled} of {selected.needed}
                  </dd>
                </div>
              </dl>

              <p className={styles.applicantsTitle}>
                {statusOf(selected) === 'filled' ? 'Your confirmed team' : 'Available workers'}
              </p>
              <ul className={styles.applicants}>
                {selected.applicants.map((applicant) => (
                  <li key={applicant.name} className={styles.applicant}>
                    <span className={styles.avatar} aria-hidden="true">
                      {applicant.initials}
                    </span>
                    <span className={styles.applicantBody}>
                      <span className={styles.applicantName}>{applicant.name}</span>
                      <span className={styles.applicantSkills}>{applicant.skills}</span>
                    </span>
                    {statusOf(selected) === 'filled' ? (
                      <span className={`${styles.status} ${styles.statusFilled}`}>Booked</span>
                    ) : (
                      <button
                        type="button"
                        className={styles.inviteButton}
                        onClick={() =>
                          comingSoon(
                            'Book real workers in the app',
                            `${applicant.name} is a sample profile. On KaaamNow you see who applied and confirm workers in a tap.`,
                          )
                        }
                      >
                        Invite
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              <Button
                fullWidth
                onClick={() =>
                  comingSoon(
                    'Manage real shifts in the app',
                    'This dashboard is a sample. On KaaamNow you confirm your team, track arrivals with arrival codes, and handle payments for every shift from one place.',
                  )
                }
              >
                {statusOf(selected) === 'filled' ? 'Manage this shift' : 'Confirm your team'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
