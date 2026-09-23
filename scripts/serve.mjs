// Preview the site locally: node scripts/serve.mjs [port]
// Serves public/ as plain static files (with Range support so the hero video can loop).

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const PORT = Number(process.argv[2] ?? process.env.PORT ?? 4173);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
};

http
  .createServer((req, res) => {
    const { pathname } = new URL(req.url, 'http://localhost');
    let file = path.join(SITE, decodeURIComponent(pathname));
    if (file !== SITE && !file.startsWith(SITE + path.sep)) return res.writeHead(403).end();
    if (pathname.endsWith('/')) file = path.join(file, 'index.html');

    fs.stat(file, (err, stat) => {
      if (err || !stat.isFile()) return res.writeHead(404, { 'content-type': 'text/plain' }).end('Not found');
      const headers = { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream', 'accept-ranges': 'bytes' };
      const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? '');
      if (range && (range[1] || range[2])) {
        const start = range[1] ? Number(range[1]) : Math.max(0, stat.size - Number(range[2]));
        const end = range[1] && range[2] ? Math.min(Number(range[2]), stat.size - 1) : stat.size - 1;
        if (start > end) return res.writeHead(416, { 'content-range': `bytes */${stat.size}` }).end();
        res.writeHead(206, { ...headers, 'content-range': `bytes ${start}-${end}/${stat.size}`, 'content-length': end - start + 1 });
        return fs.createReadStream(file, { start, end }).pipe(res);
      }
      res.writeHead(200, { ...headers, 'content-length': stat.size });
      fs.createReadStream(file).pipe(res);
    });
  })
  .listen(PORT, () => console.log(`Serving public/ at http://localhost:${PORT}`));
