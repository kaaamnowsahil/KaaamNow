import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Building2,
  CalendarDays,
  ChevronDown,
  House,
  MapPin,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import { useComingSoon } from '../../../context/comingSoonContext'
import { APP_LINKS } from '../../../data/appLinks'
import { easeOut } from '../../../lib/motion'
import styles from './AppPreview.module.css'

type Segment = 'live' | 'scheduled'

interface PostedShift {
  id: string
  segment: Segment
  role: string
  status: string
  time: string
  confirmed: number
  needed: number
  applicants: number
  rate: string
}

const SEGMENTS: { id: Segment; label: string }[] = [
  { id: 'live', label: 'Live Now' },
  { id: 'scheduled', label: 'Scheduled' },
]

const SHIFTS: PostedShift[] = [
  {
    id: 'b1',
    segment: 'live',
    role: 'Kitchen Helper',
    status: 'Live · searching',
    time: 'Today · 6:30 PM · 4 hours',
    confirmed: 0,
    needed: 1,
    applicants: 0,
    rate: '₹160 / hour',
  },
  {
    id: 'b2',
    segment: 'live',
    role: 'Dishwasher',
    status: 'Live · starts soon',
    time: 'Today · 7:00 PM · 3 hours',
    confirmed: 1,
    needed: 1,
    applicants: 0,
    rate: '₹150 / hour',
  },
  {
    id: 'b3',
    segment: 'scheduled',
    role: 'Weekend Servers',
    status: 'Scheduled',
    time: 'Sat, 7 Nov · 6:00 PM · 5 hours',
    confirmed: 2,
    needed: 4,
    applicants: 3,
    rate: '₹180 / hour',
  },
  {
    id: 'b4',
    segment: 'scheduled',
    role: 'Stock Audit Team',
    status: 'Scheduled',
    time: 'Sun, 8 Nov · 9:00 AM · 9 hours',
    confirmed: 3,
    needed: 3,
    applicants: 2,
    rate: '₹175 / hour',
  },
]

const NAV: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: House, label: 'Dashboard', active: true },
  { icon: CalendarDays, label: 'Shifts' },
  { icon: UsersRound, label: 'Applicants' },
  { icon: Building2, label: 'Profile' },
]

export function BusinessPreview() {
  const [segment, setSegment] = useState<Segment>('live')
  const { open } = useComingSoon()
  const visible = SHIFTS.filter((shift) => shift.segment === segment)
  const isLive = segment === 'live'
  const confirmed = visible.reduce((sum, shift) => sum + shift.confirmed, 0)
  const needed = visible.reduce((sum, shift) => sum + shift.needed, 0)
  const applicants = visible.reduce((sum, shift) => sum + shift.applicants, 0)

  const sample = (title: string, description: string) =>
    open({
      eyebrow: 'Sample preview',
      title,
      description,
      action: { label: 'Find workers on KaaamNow', href: APP_LINKS.businessHome },
    })

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar} aria-hidden="true">
        <div className={styles.profile}>
          <span className={styles.avatar}>SC</span>
          <div>
            <p className={styles.profileName}>Sample Café</p>
            <p className={styles.profileMeta}>+91 90000 00001</p>
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
          <span className={styles.headerTitle}>Dashboard</span>
          <span className={styles.bell} aria-hidden="true">
            <Bell size={16} strokeWidth={1.75} />
          </span>
        </div>

        <div className={styles.scroll}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h3>Your team, at a glance</h3>
              <p className={styles.identity}>
                Sample Café
                <BadgeCheck size={14} strokeWidth={2} aria-hidden="true" />
              </p>
            </div>

            <div className={styles.location} aria-hidden="true">
              <MapPin size={16} strokeWidth={1.75} />
              <span>Indiranagar, Bengaluru, Karnataka, 560038, India</span>
              <ChevronDown size={16} strokeWidth={1.75} />
            </div>

            <div className={styles.segments} role="group" aria-label="Shift type">
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
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <strong>
                      {confirmed}/{needed}
                    </strong>
                    <p>Workers confirmed</p>
                  </div>
                  <div className={styles.metric}>
                    <strong>{applicants}</strong>
                    <p>New applicants</p>
                  </div>
                </div>

                <p className={styles.sectionHeading}>
                  <span>
                    {isLive && <span className={styles.liveDot} aria-hidden="true" />}
                    {isLive ? 'Today’s live shifts' : 'Upcoming shifts'}
                  </span>
                  <span className={styles.viewAll}>View all</span>
                </p>

                {visible.map((shift) => (
                  <button
                    key={shift.id}
                    type="button"
                    className={styles.shift}
                    onClick={() =>
                      sample(
                        'Manage real shifts in the app',
                        `${shift.role} is a sample shift. On KaaamNow you see who applied, confirm workers in a tap, and track arrivals with arrival codes.`,
                      )
                    }
                  >
                    <span className={styles.shiftTop}>
                      <strong className={shift.segment === 'live' ? styles.live : undefined}>
                        {shift.status}
                      </strong>
                      <span>{shift.rate}</span>
                    </span>
                    <h4>{shift.role}</h4>
                    <span>{shift.time}</span>
                    <span className={styles.shiftFoot}>
                      <span>
                        <strong>
                          {shift.confirmed} / {shift.needed}
                        </strong>{' '}
                        confirmed
                        <small>
                          {shift.applicants} {shift.applicants === 1 ? 'applicant' : 'applicants'}
                        </small>
                      </span>
                      <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.bottom}>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() =>
              isLive
                ? sample(
                    'Post a real live request in the app',
                    'This dashboard is a sample. On KaaamNow you post a live request and workers within 30 km in that category are notified instantly.',
                  )
                : sample(
                    'Create a real shift in the app',
                    'This dashboard is a sample. On KaaamNow you create a shift in minutes — set the role, timing, and pay — and nearby workers in that category get an alert.',
                  )
            }
          >
            {isLive ? '+ Post live request' : '+ Create shift'}
          </button>
        </div>
      </div>
    </div>
  )
}
