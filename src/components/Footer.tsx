import {
  ArrowUp,
  Briefcase,
  Building2,
  CalendarDays,
  CalendarRange,
  CircleHelp,
  Clock,
  FileText,
  HandHelping,
  Info,
  LayoutGrid,
  LifeBuoy,
  LogIn,
  Mail,
  MapPin,
  Package,
  PartyPopper,
  Phone,
  Route,
  Scale,
  Shield,
  Smartphone,
  Sparkles,
  Store,
  Trash2,
  UserRound,
  Users,
  UtensilsCrossed,
  Warehouse,
  type LucideIcon,
} from 'lucide-react'
import { APP_LINKS } from '../data/appLinks'
import { CATEGORIES, CITIES, SOCIAL, cityHirePath, cityJobsPath } from '../data/site'
import { useWorkCategories } from '../data/useWorkCategories'
import { workCategoryIcon } from '../data/workCategoryIcons'
import { COMPANY_ADDRESS, COMPANY_MAPS_URL } from '../data/company'
import { CONTACT_EMAILS } from '../data/contacts'
import { useLocale } from '../i18n/locale'
import { Logo } from './Logo'
import styles from './Footer.module.css'

type FooterItem = {
  key: string
  label: string
  href: string
  icon: LucideIcon
}

function LinkIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className={styles.linkIcon} aria-hidden="true">
      <Icon size={13} strokeWidth={1.75} />
    </span>
  )
}

function WhatsAppIcon() {
  return (
    <span className={styles.linkIcon} aria-hidden="true">
      <svg className={styles.glyph} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.92c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.57.81 1.97.88 2.11.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.13-.28.28-.12.54.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.13.42.11.57-.07.16-.17.66-.77.84-1.03.17-.26.35-.22.59-.13.24.09 1.52.72 1.78.85.26.13.43.19.5.3.06.11.06.64-.18 1.32z"
        />
      </svg>
    </span>
  )
}

const EMAIL_KIND: Record<string, LucideIcon> = {
  KaaamNow: Sparkles,
  Info,
  Support: LifeBuoy,
  Help: CircleHelp,
  Admin: Shield,
  HR: Users,
  Legal: Scale,
  Center: Building2,
}

const FALLBACK_JOB_ICONS: Record<string, LucideIcon> = {
  '/daily-wage-jobs': CalendarDays,
  '/part-time-jobs': Clock,
  '/temporary-staffing': CalendarRange,
  '/helper-jobs': HandHelping,
  '/delivery-jobs': Package,
  '/security-guard-jobs': Shield,
  '/warehouse-jobs': Warehouse,
  '/event-staff': PartyPopper,
  '/restaurant-staff': UtensilsCrossed,
}

function SocialGlyph({ d }: { d: string }) {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d={d} />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <SocialGlyph d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4zm0 1.6A3 3 0 1 1 9 12a3 3 0 0 1 3-3zm5.25-2.15a1.05 1.05 0 1 0 1.05 1.05 1.05 1.05 0 0 0-1.05-1.05z" />
  )
}

function LinkedInIcon() {
  return (
    <SocialGlyph d="M4.7 3.3A2.2 2.2 0 1 1 2.5 5.5 2.2 2.2 0 0 1 4.7 3.3zM3 8.8h3.4V21H3zm5.6 0h3.3v1.7h.1c.5-1 1.6-2 3.4-2 3.6 0 4.3 2.4 4.3 5.5V21h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H8.6z" />
  )
}

function XIcon() {
  return (
    <SocialGlyph d="M14.7 10.3 21.4 2h-1.6l-5.8 7.2L9.2 2H3l7 10.8L3 22h1.6l6.2-7.6L15.4 22H21.6l-6.9-11.7zm-2.2 2.7-.7-1.1L5.4 3.3h2.4l4.6 7 .7 1.1 6.1 9.3h-2.4z" />
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const { copy } = useLocale()
  const jobTypes = useWorkCategories()
  const footer = copy.footer
  const columns: { title: string; items: FooterItem[] }[] = [
    {
      title: footer.product,
      items: [
        { key: 'benefits', label: footer.links[0], href: '/#benefits', icon: Sparkles },
        { key: 'how', label: footer.links[1], href: '/#how-it-works', icon: Route },
        { key: 'categories', label: footer.links[2], href: '/#categories', icon: LayoutGrid },
        { key: 'industries', label: footer.links[3], href: '/#industries', icon: Building2 },
        { key: 'preview', label: footer.links[4], href: '/#preview', icon: Smartphone },
      ],
    },
    {
      title: footer.getStarted,
      items: [
        { key: 'businesses', label: footer.started[0], href: '/#businesses', icon: Store },
        { key: 'workers', label: footer.started[1], href: '/#workers', icon: UserRound },
        { key: 'login', label: footer.started[2], href: APP_LINKS.login, icon: LogIn },
        { key: 'faq', label: footer.started[3], href: APP_LINKS.faq, icon: CircleHelp },
      ],
    },
    {
      title: footer.company,
      items: [
        { key: 'team', label: footer.companyLinks[0], href: '/#team', icon: Users },
        { key: 'careers', label: copy.nav.careers, href: '/#careers', icon: Briefcase },
        { key: 'privacy', label: footer.companyLinks[1], href: '/privacy', icon: Shield },
        { key: 'terms', label: footer.companyLinks[2], href: '/terms', icon: FileText },
        { key: 'deletion', label: footer.companyLinks[3], href: '/account-deletion', icon: Trash2 },
      ],
    },
  ]
  const directories: { title: string; items: FooterItem[] }[] = [
    {
      title: footer.jobsByCity,
      items: CITIES.map((city) => ({
        key: city.slug,
        label: city.name,
        href: cityJobsPath(city.slug),
        icon: MapPin,
      })),
    },
    {
      title: footer.hireByCity,
      items: CITIES.map((city) => ({
        key: city.slug,
        label: city.name,
        href: cityHirePath(city.slug),
        icon: Building2,
      })),
    },
    {
      title: footer.workTypes,
      items: jobTypes.length
        ? jobTypes.map((job) => ({
            key: job.slug,
            label: job.label,
            href: APP_LINKS.workerHome,
            icon: workCategoryIcon(job.slug),
          }))
        : CATEGORIES.map((category, index) => ({
            key: category.path,
            label: copy.landing.categories[index].label,
            href: category.path,
            icon: FALLBACK_JOB_ICONS[category.path] ?? HandHelping,
          })),
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>{footer.tagline}</p>
        </div>

        <nav className={styles.columns} aria-label={footer.nav}>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.list}>
                {column.items.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className={styles.link}
                      rel={item.href.startsWith('http') ? 'nofollow' : undefined}
                    >
                      <LinkIcon icon={item.icon} />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={`container ${styles.directory}`}>
        {directories.map((group) => (
          <div key={group.title}>
            <h2 className={styles.columnTitle}>{group.title}</h2>
            <ul className={styles.pills}>
              {group.items.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className={styles.pill}>
                    <LinkIcon icon={item.icon} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.contactWrap}`}>
        <section className={styles.contact} aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className={styles.columnTitle}>{footer.contact}</h2>
          <div className={styles.contactGrid}>
            <div><h3 className={styles.contactLabel}>{footer.email}</h3><ul className={styles.list}>
              {CONTACT_EMAILS.map((contact) => (
                <li key={contact.email}>
                  <a className={styles.link} href={`mailto:${contact.email}`}>
                    <span className={styles.iconPair}>
                      <LinkIcon icon={EMAIL_KIND[contact.label] ?? Info} />
                      <LinkIcon icon={Mail} />
                    </span>
                    {contact.label} · {contact.email}
                  </a>
                </li>
              ))}
            </ul></div>
            <div><h3 className={styles.contactLabel}>{footer.phone}</h3><ul className={styles.list}>
              <li>
                <a className={styles.link} href="tel:+918618796332">
                  <LinkIcon icon={Phone} />
                  KaaamNow · +91 86187 96332
                </a>
              </li>
              <li>
                <a className={styles.link} href="tel:+918088675325">
                  <LinkIcon icon={Phone} />
                  Sumit · +91 80886 75325
                </a>
              </li>
              <li>
                <a className={styles.link} href="tel:+919523857003">
                  <LinkIcon icon={Phone} />
                  Anisha · +91 95238 57003
                </a>
              </li>
            </ul></div>
            <div>
              <h3 className={styles.contactLabel}>{footer.social}</h3>
              <ul className={styles.socialList}>
                <li>
                  <a className={styles.socialLink} href="https://wa.me/918618796332" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    WhatsApp · +91 86187 96332
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                    <span className={styles.linkIcon}><InstagramIcon /></span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className={styles.linkIcon}><LinkedInIcon /></span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href={SOCIAL.x} target="_blank" rel="noopener noreferrer">
                    <span className={styles.linkIcon}><XIcon /></span>
                    @Kaaam_Now
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.location}>
              <h3 className={styles.contactLabel}>{footer.location}</h3>
              <address className={styles.address}>
                <a className={styles.link} href={COMPANY_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <LinkIcon icon={MapPin} />
                  {COMPANY_ADDRESS}
                </a>
              </address>
            </div>
          </div>
        </section>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} KAAAMNOW TECHNOLOGY LLP. {footer.rights}</p>
        <a href="#top" className={styles.backToTop}>
          <span className={styles.linkIcon} aria-hidden="true">
            <ArrowUp size={13} strokeWidth={1.75} />
          </span>
          {footer.back}
        </a>
      </div>
    </footer>
  )
}
