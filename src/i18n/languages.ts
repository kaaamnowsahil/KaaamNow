import { bn } from './bn'
import { en } from './en'
import { gu } from './gu'
import { hi } from './hi'
import { kn } from './kn'
import { ml } from './ml'
import { mr } from './mr'
import { or } from './or'
import { pa } from './pa'
import type { SiteCopy } from './siteCopy'
import { ta } from './ta'
import { te } from './te'
import { ur } from './ur'

export const SITE_COPY: Record<'en' | 'hi' | 'ta' | 'te' | 'kn' | 'ml' | 'mr' | 'bn' | 'gu' | 'pa' | 'or' | 'ur', SiteCopy> = {
  en,
  hi,
  ta,
  te,
  kn,
  ml,
  mr,
  bn,
  gu,
  pa,
  or,
  ur,
}
