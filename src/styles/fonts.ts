// Self-hosted fonts from @fontsource, emitted as hashed assets by the build.
// The Georgian-script face is registered under its own family alias and
// limited by unicode-range, so a page only downloads the faces it uses.
import latin400 from '@fontsource/noto-sans/files/noto-sans-latin-400-normal.woff2?url';
import latin600 from '@fontsource/noto-sans/files/noto-sans-latin-600-normal.woff2?url';
import latin700 from '@fontsource/noto-sans/files/noto-sans-latin-700-normal.woff2?url';
import ka400 from '@fontsource/noto-sans-georgian/files/noto-sans-georgian-georgian-400-normal.woff2?url';
import ka600 from '@fontsource/noto-sans-georgian/files/noto-sans-georgian-georgian-600-normal.woff2?url';
import ka700 from '@fontsource/noto-sans-georgian/files/noto-sans-georgian-georgian-700-normal.woff2?url';

const LATIN_RANGE =
  'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2190-2193, U+2212, U+2215, U+FEFF, U+FFFD';
const KA_RANGE = 'U+0589, U+10A0-10FF, U+1C90-1CBA, U+1CBD-1CBF, U+2D00-2D2F';

function face(family: string, weight: number, url: string, range: string): string {
  return `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:swap;src:url(${url}) format('woff2');unicode-range:${range}}`;
}

export const FONT_CSS = [
  face('Noto Sans', 400, latin400, LATIN_RANGE),
  face('Noto Sans', 600, latin600, LATIN_RANGE),
  face('Noto Sans', 700, latin700, LATIN_RANGE),
  face('Noto Sans KA', 400, ka400, KA_RANGE),
  face('Noto Sans KA', 600, ka600, KA_RANGE),
  face('Noto Sans KA', 700, ka700, KA_RANGE),
].join('');

/** The body face for each locale, preloaded so text renders in it at once. */
export const PRELOAD: Record<'ka' | 'en', string> = { ka: ka400, en: latin400 };
