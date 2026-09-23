// Pre-deploy check: every file the pages reference must exist in public/.
// Vercel runs this as the build step (vercel.json); locally: npm run check

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const exists = (rel) => fs.existsSync(path.join(SITE, ...rel.split('/')));
const read = (rel) => fs.readFileSync(path.join(SITE, rel), 'utf8');

const components = fs.readdirSync(SITE).filter((f) => f.endsWith('.dc.html'));
const missing = [];
for (const file of ['index.html', ...components]) {
  const src = read(file);
  const refs = [
    ...[...src.matchAll(/<(?:script|link)\b[^>]*\s(?:src|href)="([^"#?:{}]+)"/g)].map((m) => m[1]),
    ...[...src.matchAll(/<dc-import[^>]*\sname="([A-Za-z]+)"/g)].map((m) => `${m[1]}.dc.html`),
    ...[...src.matchAll(/["'(]([A-Z][A-Za-z]+\.dc\.html)/g)].map((m) => m[1]),
    ...[...src.matchAll(/(?<![\w/])(assets\/[\w./-]+\.\w+)/g)].map((m) => m[1]),
    ...[...src.matchAll(/'\.\/([\w-]+\.js)'/g)].map((m) => m[1]),
  ];
  for (const ref of new Set(refs)) if (!exists(ref.replace(/^\.\//, ''))) missing.push(`${file} → ${ref}`);
}

if (missing.length) {
  console.error(`public/ references ${missing.length} missing file(s):\n  ${missing.join('\n  ')}`);
  process.exit(1);
}
console.log(`public/ OK: index.html and ${components.length} components, every referenced file present.`);
