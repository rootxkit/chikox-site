import type { APIRoute } from 'astro';
import { LOCALES, ROUTE_KEYS, pathFor, t } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://chikox.net');
  const abs = (p: string): string => new URL(p, base).href;
  const urls = ROUTE_KEYS.flatMap((route) =>
    LOCALES.map((locale) => {
      const alternates = LOCALES.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${t(l).htmlLang}" href="${abs(pathFor(l, route))}"/>`,
      ).join('\n');
      return [
        '  <url>',
        `    <loc>${abs(pathFor(locale, route))}</loc>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor('ka', route))}"/>`,
        '  </url>',
      ].join('\n');
    }),
  );
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
