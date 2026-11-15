import {
  COMPANY,
  CONTACT,
  HOME_FAQS,
  SITE_NAME,
  SITE_URL,
  pageForPath,
  socialProfiles,
} from '../data/site'
import { metaForPath } from './pageMeta'

type Json = Record<string, unknown>

export function graphForPath(pathname: string): Json {
  const path = pathname.replace(/\/+$/, '') || '/'
  const meta = metaForPath(path)
  const graph: Json[] = [organization(), website()]
  const landing = pageForPath(path)
  const crumbs = landing?.crumbs ?? (path === '/' ? [{ name: 'Home', href: '/' }] : null)
  if (crumbs && crumbs.length > 1) graph.push(breadcrumbList(crumbs))
  const faqs = landing?.faqs ?? (path === '/' ? HOME_FAQS : null)
  if (faqs && faqs.length > 0) graph.push(faqPage(meta.canonical, faqs))
  return { '@context': 'https://schema.org', '@graph': graph }
}

function organization(): Json {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    image: `${SITE_URL}/og-image.png`,
    email: CONTACT.supportEmail,
    telephone: CONTACT.phoneSchema,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.locality,
      addressRegion: COMPANY.region,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.country,
    },
    areaServed: { '@type': 'Country', name: 'India' },
    sameAs: socialProfiles(),
  }
}

function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

function faqPage(url: string, faqs: { question: string; answer: string }[]): Json {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

function breadcrumbList(crumbs: { name: string; href: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href === '/' ? '/' : crumb.href}`,
    })),
  }
}
