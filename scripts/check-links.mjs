// Internal link check of the built site. For every HTML file under the
// output directory, every same-site href/src must resolve to a built file,
// and every #fragment must name an id on the target page. External links
// are listed, not fetched. Exits 1 on any broken link.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.argv[2] ?? 'dist';
const SITE = 'https://chikox.net';

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(root);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const idCache = new Map();

function idsOf(file) {
  if (!idCache.has(file)) {
    const html = readFileSync(file, 'utf8');
    idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idCache.get(file);
}

function pageUrl(file) {
  const rel = relative(root, file).split(sep).join('/');
  return '/' + rel.replace(/index\.html$/, '');
}

function resolveTarget(pathname) {
  const clean = decodeURIComponent(pathname);
  const candidates = clean.endsWith('/')
    ? [join(root, clean, 'index.html')]
    : [join(root, clean), join(root, clean + '.html'), join(root, clean, 'index.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) ?? null;
}

const broken = [];
const external = new Set();
let checked = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const base = new URL(pageUrl(file), SITE);
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]*)"/g)].map((m) => m[1]);
  for (const raw of refs) {
    const ref = raw.replace(/&amp;/g, '&');
    if (ref === '' ) {
      broken.push(`${pageUrl(file)}: empty link`);
      continue;
    }
    if (/^(mailto|tel|data):/.test(ref)) continue;
    const url = new URL(ref, base);
    if (url.origin !== SITE) {
      external.add(url.href);
      continue;
    }
    checked++;
    const target = resolveTarget(url.pathname);
    if (!target) {
      broken.push(`${pageUrl(file)}: ${ref} -> no file for ${url.pathname}`);
      continue;
    }
    if (url.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!idsOf(target).has(id)) broken.push(`${pageUrl(file)}: ${ref} -> no id "${id}"`);
    }
  }
}

console.log(`Checked ${checked} internal links in ${htmlFiles.length} pages.`);
console.log(`External links (not fetched): ${[...external].sort().join(', ') || 'none'}`);
if (broken.length) {
  console.error(`Broken links (${broken.length}):\n  ${broken.join('\n  ')}`);
  process.exit(1);
}
console.log('No broken internal links.');
