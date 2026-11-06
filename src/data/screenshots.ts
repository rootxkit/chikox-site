// Console screenshots, by page. Empty until real screenshots are approved
// for publication; while a list is empty nothing is rendered.
//
// To add one: put the image under public/screenshots/ (a PNG or WebP of at
// least 1600 px width, with personal data and hostnames removed) and add an
// entry below. Captions and alt text are display text, so both locales are
// required.

import type { Locale, RouteKey } from '../i18n/types';

export interface Screenshot {
  /** Site-relative path, e.g. /screenshots/authority-picture.webp */
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
}

export const SCREENSHOTS: Partial<Record<RouteKey, Screenshot[]>> = {
  // authority: [{ src: '/screenshots/authority-picture.webp', width: 1600, height: 1000,
  //   alt: { ka: '…', en: '…' }, caption: { ka: '…', en: '…' } }],
};
