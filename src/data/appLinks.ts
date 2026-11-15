import { APP_LINKS as SITE_LINKS } from './site'

/** Signed-in app routes. Marketing pages stay on https://kaaamnow.in. */
export const APP_LINKS = {
  businessHome: SITE_LINKS.hireWorkers,
  workerHome: SITE_LINKS.findWork,
  login: SITE_LINKS.login,
  terms: 'https://www.kaaamnow.in/terms',
  faq: SITE_LINKS.faq,
} as const
