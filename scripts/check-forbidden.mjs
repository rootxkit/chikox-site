// Fails the build if the built site contains text that must never be
// published: system hostnames, addresses, country or agency names, or
// references to environments and configuration files.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.argv[2] ?? 'dist';
const FORBIDDEN = [
  'uspace-authority.',
  'uspace-ansp.',
  'uspace-cisp.',
  'uspace-ussp.',
  '209.38',
  'Georgia',
  'საქართველო',
  'GCAA',
  'staging',
  '.env',
  'Sakaeronavigatsia',
  'uas.gov.ge',
  'DigitalOcean',
  'github',
  'GitHub',
  'rootxkit',
];
const TEXT = /\.(html|xml|txt|css|js|svg|json|webmanifest)$/;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const hits = [];
for (const file of walk(root).filter((f) => TEXT.test(f))) {
  const text = readFileSync(file, 'utf8');
  for (const needle of FORBIDDEN) {
    // "Noto Sans Georgian" is the font family name, not a country reference.
    const haystack = text.replaceAll('Noto Sans Georgian', '').replaceAll('noto-sans-georgian', '');
    if (haystack.includes(needle)) hits.push(`${relative(root, file)}: "${needle}"`);
  }
}

if (hits.length) {
  console.error(`Forbidden strings found (${hits.length}):\n  ${hits.join('\n  ')}`);
  process.exit(1);
}
console.log(`No forbidden strings in ${root}.`);
