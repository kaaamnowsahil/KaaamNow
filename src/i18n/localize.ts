import { CATEGORIES, findCity, type LandingPage } from '../data/site'
import type { LanguageCode } from './locale'
import { fill, type SiteCopy } from './siteCopy'

function relabel(href: string, label: string, copy: SiteCopy) {
  const jobs = href.match(/^\/jobs\/([a-z0-9-]+)$/)
  if (jobs) {
    const city = findCity(jobs[1])
    return city ? fill(copy.footer.jobsIn, { city: city.name }) : label
  }
  const hire = href.match(/^\/hire-workers\/([a-z0-9-]+)$/)
  if (hire) {
    const city = findCity(hire[1])
    return city ? fill(copy.footer.hireIn, { city: city.name }) : label
  }
  const index = CATEGORIES.findIndex((item) => item.path === href)
  if (index >= 0) return copy.landing.categories[index].label
  if (href === '/') return copy.landing.home
  return label
}

function withCity(article: SiteCopy['landing']['cityJobs'], city: string) {
  return {
    title: fill(article.title, { city }),
    description: fill(article.description, { city }),
    h1: fill(article.h1, { city }),
    paragraphs: article.paragraphs.map((paragraph) => fill(paragraph, { city })),
    faqs: article.faqs.map((faq) => ({
      question: fill(faq.question, { city }),
      answer: fill(faq.answer, { city }),
    })),
  }
}

export function localizedPage(page: LandingPage, language: LanguageCode, copy: SiteCopy): LandingPage {
  const crumbs = page.crumbs.map((crumb) => {
    if (crumb.href === '/') return { ...crumb, name: copy.landing.home }
    if (crumb.href === '/daily-wage-jobs') return { ...crumb, name: copy.landing.jobs }
    if (crumb.href === '/temporary-staffing') return { ...crumb, name: copy.landing.hireCrumb }
    return crumb
  })
  const related = page.related.map((link) => ({ ...link, label: relabel(link.href, link.label, copy) }))
  if (language === 'en') return { ...page, crumbs, related }

  const jobs = page.path.match(/^\/jobs\/([a-z0-9-]+)$/)
  const hire = page.path.match(/^\/hire-workers\/([a-z0-9-]+)$/)
  const city = findCity(jobs?.[1] ?? hire?.[1] ?? '')
  if (city) {
    const article = withCity(jobs ? copy.landing.cityJobs : copy.landing.cityHire, city.name)
    return { ...page, ...article, crumbs, related }
  }
  const index = CATEGORIES.findIndex((item) => item.path === page.path)
  if (index >= 0) {
    const category = copy.landing.categories[index]
    return {
      ...page,
      title: `${category.h1} | KaaamNow`,
      description: category.paragraphs[0],
      h1: category.h1,
      paragraphs: category.paragraphs,
      faqs: category.faqs,
      crumbs,
      related,
    }
  }
  return { ...page, crumbs, related }
}
