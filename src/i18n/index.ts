import { en } from './en';
import { ka } from './ka';
import type { Dict, Locale, RouteKey, SystemKey } from './types';

export type { Dict, Locale, RouteKey, SystemKey } from './types';

export const DEFAULT_LOCALE: Locale = 'ka';
export const LOCALES: readonly Locale[] = ['ka', 'en'];

const DICTS: Record<Locale, Dict> = { ka, en };

export function t(locale: Locale): Dict {
  return DICTS[locale];
}

/** URL slug of each page, shared by both locales. */
export const ROUTES: Record<RouteKey, string> = {
  home: '',
  platform: 'platform',
  authority: 'authority',
  ansp: 'ansp',
  cisp: 'cisp',
  ussp: 'ussp',
  sensors: 'sensors',
  security: 'security',
  openSource: 'open-source',
  contact: 'contact',
};

export const ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[];
export const SYSTEM_KEYS: readonly SystemKey[] = ['authority', 'ansp', 'cisp', 'ussp'];

/** Header navigation, in order. System pages are reached from Platform. */
export const HEADER_NAV: readonly RouteKey[] = [
  'platform',
  'sensors',
  'security',
  'openSource',
  'contact',
];

/** Site-relative path of a page, with a trailing slash. */
export function pathFor(locale: Locale, route: RouteKey): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `${locale}/`;
  const slug = ROUTES[route];
  return `/${prefix}${slug ? `${slug}/` : ''}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'ka' ? 'en' : 'ka';
}

export const CONTACT_EMAIL = 'info@chikox.net';
export const SITE_NAME = 'chikox';
