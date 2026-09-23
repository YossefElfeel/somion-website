// Somion Web Services — shared catalogue + helpers (content taken from the existing site design)
export const BRAND = { indigo: '#4e4feb', indigoHover: '#3b3cd4', indigoDeep: '#2f30a8', tint: '#eeeefe', navy: '#08133e', text2: '#5d6480', border: '#e5e7f2', page: '#fbfbfe', sunken: '#f0f1fb', dark: '#050d25' };

export const RATES = { USD: { rate: 1, symbol: '$', label: 'USD · US dollar', decimals: 2 }, CHF: { rate: 0.8, symbol: 'CHF ', label: 'CHF · Swiss franc', decimals: 2 }, EGP: { rate: 50, symbol: 'EGP ', label: 'EGP · Egyptian pound', decimals: 0 } };
export const CURRENCIES = Object.keys(RATES);

const INCLUDED = { ssl: 'Free SSL (Let\u2019s Encrypt)', backups: 'Daily backups', support: 'Expert support' };

export const CATEGORIES = [
  { id: 'shared', name: 'Shared Hosting (cPanel)', short: 'Shared', blurb: 'Four cPanel plans, each carrying its renewal price on the card.', unit: 'website',
    specKeys: [['sites', 'Websites'], ['storage', 'SSD storage'], ['bandwidth', 'Bandwidth'], ['subdomains', 'Subdomains'], ['email', 'Email accounts'], ['domain', 'Free domain (1st year)'], ['ssl', INCLUDED.ssl], ['backups', INCLUDED.backups], ['support', INCLUDED.support]],
    plans: [
      { id: 'shared-single', name: 'Single', price: 5, specs: { sites: '1 website', storage: '10 GB SSD', bandwidth: '100 GB', subdomains: '10', email: '10 accounts', domain: false, ssl: true, backups: true, support: true } },
      { id: 'shared-pro', name: 'Pro', price: 7.5, specs: { sites: '3 websites', storage: '20 GB SSD', bandwidth: '150 GB', subdomains: '100', email: '100 accounts', domain: true, ssl: true, backups: true, support: true } },
      { id: 'shared-ultra', name: 'Ultra', price: 12, was: 15, featured: true, specs: { sites: '100 websites', storage: '50 GB SSD', bandwidth: 'Unlimited', subdomains: 'Unlimited', email: 'Unlimited', domain: false, ssl: true, backups: true, support: true } },
      { id: 'shared-unlimited', name: 'Unlimited', price: 20, was: 25, specs: { sites: 'Unlimited', storage: 'Unlimited SSD', bandwidth: 'Unlimited', subdomains: 'Unlimited', email: 'Unlimited', domain: true, ssl: true, backups: true, support: true } },
    ] },
  { id: 'wordpress', name: 'WordPress Hosting (cPanel)', short: 'WordPress', blurb: 'Managed WordPress on cPanel with automatic updates handled for you.', unit: 'WordPress site',
    specKeys: [['sites', 'WordPress sites'], ['storage', 'SSD storage'], ['bandwidth', 'Bandwidth'], ['updates', 'Updates'], ['ssl', INCLUDED.ssl], ['backups', INCLUDED.backups], ['support', INCLUDED.support]],
    plans: [
      { id: 'wp-start', name: 'WP Start', price: 6, specs: { sites: '1 site', storage: '15 GB SSD', bandwidth: '150 GB', updates: 'Automatic core updates', ssl: true, backups: true, support: true } },
      { id: 'wp-grow', name: 'WP Grow', price: 11, was: 15, featured: true, specs: { sites: '5 sites', storage: '40 GB SSD', bandwidth: 'Unlimited', updates: 'Automatic core + plugin updates', ssl: true, backups: true, support: true } },
      { id: 'wp-scale', name: 'WP Scale', price: 24, specs: { sites: 'Unlimited', storage: '100 GB SSD', bandwidth: 'Unlimited', updates: 'Priority updates', ssl: true, backups: true, support: true } },
    ] },
  { id: 'cloud', name: 'Cloud Hosting (cPanel)', short: 'Cloud', blurb: 'Dedicated resources on cPanel for sites that have outgrown shared hosting.', unit: 'cloud instance',
    specKeys: [['cpu', 'vCPU'], ['ram', 'RAM'], ['storage', 'NVMe storage'], ['bandwidth', 'Bandwidth'], ['ssl', INCLUDED.ssl], ['backups', INCLUDED.backups], ['support', INCLUDED.support]],
    plans: [
      { id: 'cloud-1', name: 'Cloud 1', price: 18, specs: { cpu: '2 vCPU', ram: '4 GB', storage: '60 GB NVMe', bandwidth: '2 TB', ssl: true, backups: true, support: true } },
      { id: 'cloud-2', name: 'Cloud 2', price: 32, was: 40, featured: true, specs: { cpu: '4 vCPU', ram: '8 GB', storage: '120 GB NVMe', bandwidth: '4 TB', ssl: true, backups: true, support: true } },
      { id: 'cloud-3', name: 'Cloud 3', price: 56, specs: { cpu: '8 vCPU', ram: '16 GB', storage: '240 GB NVMe', bandwidth: 'Unlimited', ssl: true, backups: true, support: true } },
    ] },
  { id: 'email', name: 'Email Hosting', short: 'Email', blurb: 'Business mailboxes with spam filtering and antivirus built in.', unit: 'mail plan',
    specKeys: [['mailboxes', 'Mailboxes'], ['storage', 'Storage per mailbox'], ['spam', 'Spam filtering'], ['antivirus', 'Antivirus scanning'], ['support', INCLUDED.support]],
    plans: [
      { id: 'mail-5', name: 'Mail 5', price: 2, specs: { mailboxes: '5', storage: '10 GB', spam: true, antivirus: true, support: true } },
      { id: 'mail-25', name: 'Mail 25', price: 7, was: 10, featured: true, specs: { mailboxes: '25', storage: '25 GB', spam: true, antivirus: true, support: true } },
      { id: 'mail-100', name: 'Mail 100', price: 22, specs: { mailboxes: '100', storage: '50 GB', spam: true, antivirus: true, support: true } },
    ] },
  { id: 'vps', name: 'VPS Hosting', short: 'VPS', blurb: 'Root access and guaranteed resources, from a single core to eight.', unit: 'server',
    specKeys: [['cpu', 'vCPU'], ['ram', 'RAM'], ['storage', 'Storage'], ['bandwidth', 'Bandwidth'], ['backups', INCLUDED.backups], ['support', INCLUDED.support]],
    plans: [
      { id: 'vps-1', name: 'VPS 1', price: 9, specs: { cpu: '1 vCPU', ram: '2 GB', storage: '40 GB', bandwidth: '2 TB', backups: true, support: true } },
      { id: 'vps-2', name: 'VPS 2', price: 17, was: 20, featured: true, specs: { cpu: '2 vCPU', ram: '4 GB', storage: '80 GB', bandwidth: '4 TB', backups: true, support: true } },
      { id: 'vps-4', name: 'VPS 4', price: 32, specs: { cpu: '4 vCPU', ram: '8 GB', storage: '160 GB', bandwidth: '8 TB', backups: true, support: true } },
      { id: 'vps-8', name: 'VPS 8', price: 61, specs: { cpu: '8 vCPU', ram: '16 GB', storage: '320 GB', bandwidth: '16 TB', backups: true, support: true } },
    ] },
  { id: 'monitoring', name: 'Site & Server Monitoring', short: 'Monitoring', blurb: 'Know before your visitors do. Uptime checks with alerts where you read them.', unit: 'monitoring plan',
    specKeys: [['monitors', 'Monitors'], ['interval', 'Check interval'], ['alerts', 'Alerts'], ['support', INCLUDED.support]],
    plans: [
      { id: 'mon-lite', name: 'Lite', price: 0, specs: { monitors: '5', interval: 'Every 5 minutes', alerts: 'Email', support: true } },
      { id: 'mon-personal', name: 'Personal', price: 1.99, was: 5, featured: true, specs: { monitors: '25', interval: 'Every minute', alerts: 'Email + SMS', support: true } },
      { id: 'mon-plus', name: 'Plus', price: 2.99, specs: { monitors: '100', interval: 'Every 30 seconds', alerts: 'Email, SMS + webhook', support: true } },
    ] },
  { id: 'ssl', name: 'SSL Certificates', short: 'SSL', blurb: 'Paid certificates for when validation level and warranty matter.', unit: 'certificate',
    specKeys: [['validation', 'Validation'], ['coverage', 'Coverage'], ['issue', 'Issued in'], ['support', INCLUDED.support]],
    plans: [
      { id: 'ssl-geotrust', name: 'GeoTrust QuickSSL Premium (OV)', price: 6.58, specs: { validation: 'Organisation Validated', coverage: 'Single domain', issue: '1\u20133 days', support: true } },
      { id: 'ssl-rapid', name: 'RapidSSL Wildcard', price: 12.48, was: 15.6, featured: true, specs: { validation: 'Domain Validated', coverage: 'Unlimited subdomains', issue: 'Minutes', support: true } },
    ] },
  { id: 'builder', name: 'Website Builder', short: 'Website Builder', blurb: 'Drag, drop, publish. No code, hosted by Somion.', unit: 'site',
    specKeys: [['sites', 'Sites'], ['domain', 'Domain'], ['editor', 'Editor'], ['badge', 'SWS badge removed'], ['store', 'Online store'], ['support', INCLUDED.support]],
    plans: [
      { id: 'builder-free', name: 'Free', price: 0, specs: { sites: '1 site', domain: 'SWS subdomain', editor: 'Drag and drop', badge: false, store: false, support: true } },
      { id: 'builder-starter', name: 'Starter', price: 6.95, was: 10.5, featured: true, specs: { sites: '1 site', domain: 'Your own domain', editor: 'Drag and drop', badge: true, store: false, support: true } },
      { id: 'builder-pro', name: 'Pro', price: 13.95, specs: { sites: '5 sites', domain: 'Your own domain', editor: 'Drag and drop', badge: true, store: true, support: true } },
    ] },
];
for (const c of CATEGORIES) for (const p of c.plans) { p.cat = c.id; p.catName = c.name; p.catShort = c.short; }
export const PLANS = CATEGORIES.flatMap(c => c.plans);
export const planById = id => PLANS.find(p => p.id === id);
export const categoryById = id => CATEGORIES.find(c => c.id === id);
export const specLabel = key => { for (const c of CATEGORIES) { const k = c.specKeys.find(s => s[0] === key); if (k) return k[1]; } return key; };
const SPEC_TEXT = { sites: (v, c) => /^unlimited$/i.test(v) ? 'Unlimited ' + (c === 'wordpress' ? 'WordPress sites' : 'websites') : v, storage: (v, c) => c === 'email' ? v + ' per mailbox' : v + ' storage', bandwidth: v => v + ' bandwidth', subdomains: v => v + ' subdomains', email: v => v.replace(' accounts', '') + ' email accounts', ram: v => v + ' RAM', mailboxes: v => v + ' mailboxes', interval: v => v.replace('Every', 'Checks every'), alerts: v => v + ' alerts', issue: v => 'Issued in ' + v.toLowerCase(), editor: v => v + ' editor', monitors: v => v + ' monitors' };
export function specText(catId, key, value) { if (typeof value !== 'string') return value; const fn = SPEC_TEXT[key]; return fn ? fn(value, catId) : value; }

export const ADDONS = [
  { id: 'backups-plus', name: 'Backups Plus', desc: 'Hourly snapshots, 30-day retention', price: 2 },
  { id: 'priority-support', name: 'Priority support', desc: 'Front of the queue, phone callbacks', price: 4 },
  { id: 'malware', name: 'Malware scanning', desc: 'Daily scans with automatic cleanup', price: 1.5 },
];

export const TLDS = [
  { tld: '.com', first: 14.99, renew: 16.99, tags: ['popular'], note: 'The one people guess first' },
  { tld: '.shop', first: 1.99, renew: 34.99, tags: ['popular', 'business'], note: 'Built for selling' },
  { tld: '.blog', first: 6.99, renew: 31.99, tags: ['popular'], note: 'For writing that lasts' },
  { tld: '.tech', first: 8.99, renew: 52.99, tags: ['popular', 'business'], note: 'Product and startup names' },
  { tld: '.app', first: 20.99, renew: 22.99, tags: ['business'], note: 'HTTPS required by default' },
  { tld: '.org', first: 9.99, renew: 14.99, tags: ['business'], note: 'Organisations and causes' },
  { tld: '.zone', first: 17.99, renew: 39.99, tags: ['business'], note: 'Communities and niches' },
  { tld: '.fit', first: 36.99, renew: 38.99, tags: ['business'], note: 'Health and training' },
  { tld: '.ch', first: 12.99, renew: 12.99, tags: ['local'], note: 'Swiss, same price every year' },
  { tld: '.eg', first: 8.99, renew: 10.99, tags: ['local'], note: 'Egypt' },
];

export const FAQ = [
  { q: 'What is shared hosting?', a: 'Shared hosting keeps your website on professionally managed infrastructure without asking you to maintain a server yourself.' },
  { q: 'Is a domain name included?', a: 'Domains are searched and registered separately, so you can keep an existing name or choose a new one.' },
  { q: 'Can I upgrade my plan later?', a: 'Yes. Start with the plan that fits today and move up when your storage, traffic, or site count grows.' },
  { q: 'What kind of support do you provide?', a: 'Somion offers 24/7 real-person support for setup, hosting questions, and account assistance.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes. Every hosting plan comes with a 30-day money-back guarantee, so you can try Somion without the risk.' },
  { q: 'Can you move my existing website?', a: 'Yes. We migrate your existing website to Somion for free, including files, databases and email.' },
];

export const PAYMENT_METHODS = [
  { id: 'card', name: 'Card', desc: 'Visa, Mastercard, Meeza', logos: ['assets/pay-visa.png', 'assets/pay-mastercard.png', 'assets/pay-meeza.png'] },
  { id: 'paypal', name: 'PayPal', desc: 'Pay with your PayPal balance or linked card', logos: ['assets/pay-paypal.png'] },
  { id: 'wallet', name: 'Mobile wallet', desc: 'Vodafone Cash, Etisalat Cash, Orange Money, WE Pay', logos: ['assets/pay-vodafone.jpg', 'assets/pay-etisalat.png', 'assets/pay-orange.jpg', 'assets/pay-wepay.png'] },
  { id: 'crypto', name: 'Cryptocurrency', desc: 'BTC, ETH, USDT \u2014 settled at checkout rate', logos: ['assets/pay-crypto.png'] },
];

// ---------- pricing ----------
export const YEARLY_MONTHS = 10; // pay for 10, get 12
export function priceFor(plan, term) { return term === 'yearly' ? plan.price * YEARLY_MONTHS : plan.price; }
export function savingsPct(plan) { return plan.was ? Math.round((1 - plan.price / plan.was) * 100) : 0; }
export function fmt(usd, currency, opts = {}) {
  const c = RATES[currency] || RATES.USD; const v = usd * c.rate;
  if (usd === 0 && !opts.zero) return 'Free';
  const digits = opts.digits != null ? opts.digits : c.decimals;
  return c.symbol + v.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

// ---------- persisted state ----------
const KEYS = { currency: 'somion.currency', cart: 'somion.cart', compare: 'somion.compare' };
const read = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
const write = (k, v, ev) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} window.dispatchEvent(new CustomEvent(ev, { detail: v })); };
export const getCurrency = () => { const c = read(KEYS.currency, 'USD'); return RATES[c] ? c : 'USD'; };
export const setCurrency = c => write(KEYS.currency, c, 'somion:currency');
export const getCart = () => read(KEYS.cart, []);
export const setCart = items => write(KEYS.cart, items, 'somion:cart');
export function addPlanToCart(planId, term = 'monthly') {
  const cart = getCart().filter(i => !(i.type === 'plan' && i.planId === planId));
  cart.push({ key: 'p-' + planId + '-' + Date.now(), type: 'plan', planId, term, domainMode: 'later', domainName: '', addons: [] });
  setCart(cart); return cart;
}
export function addDomainToCart(name, tld) {
  const cart = getCart().filter(i => !(i.type === 'domain' && i.domainName === name + tld));
  cart.push({ key: 'd-' + name + tld, type: 'domain', domainName: name + tld, tld, years: 1 });
  setCart(cart); return cart;
}
export function addTransferToCart(name, tld) {
  const cart = getCart().filter(i => !(i.type === 'domain' && i.domainName === name + tld));
  cart.push({ key: 't-' + name + tld, type: 'domain', domainName: name + tld, tld, years: 1, transfer: true });
  setCart(cart); return cart;
}
export const LANGS = [{ code: 'en', short: 'EN', name: 'English' }, { code: 'de', short: 'DE', name: 'Deutsch' }, { code: 'fr', short: 'FR', name: 'Français' }, { code: 'it', short: 'IT', name: 'Italiano' }, { code: 'ar', short: 'AR', name: 'العربية' }];
export const getLang = () => { const l = read('somion.lang', 'en'); return LANGS.some(x => x.code === l) ? l : 'en'; };
export const setLang = l => { try { document.documentElement.lang = l; } catch (e) {} write('somion.lang', l, 'somion:lang'); };
export const getCompare = () => read(KEYS.compare, []);
export const setCompare = ids => write(KEYS.compare, ids.slice(0, 3), 'somion:compare');
export function toggleCompare(id) { const ids = getCompare(); const i = ids.indexOf(id); if (i >= 0) ids.splice(i, 1); else if (ids.length < 3) ids.push(id); else return { full: true, ids }; setCompare(ids); return { ids }; }

// ---------- account + orders (client area) ----------
export const getAccount = () => read('somion.account', null);
export const setAccount = acc => write('somion.account', acc, 'somion:account');
export const signOut = () => setAccount(null);
export const getOrders = () => read('somion.orders', []);
export function addOrder(order) { const list = getOrders(); list.unshift(order); write('somion.orders', list, 'somion:orders'); return list; }
export function addMonths(ts, n) { const d = new Date(ts); d.setMonth(d.getMonth() + n); return d.getTime(); }
export const fmtDate = ts => new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
export const initials = name => ((name || '').trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2) || 'S').toUpperCase();

// ---------- micro-animation: entrance (content is visible by default; animation only runs when the page is actually visible) ----------
export function enterAnimations(root = document) {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('[data-enter]:not([data-entered])').forEach(el => {
    el.setAttribute('data-entered', '1');
    if (reduce || document.visibilityState !== 'visible' || !el.animate) return;
    const delay = Number(el.getAttribute('data-enter')) || 0;
    el.animate([{ opacity: 0, transform: 'translateY(26px)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 950, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
  });
}
// one-shot swap animation for content that changes on user action (tabs, billing toggle)
export function animateIn(el, o = {}) {
  if (!el || !el.animate || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
  el.animate([{ opacity: 0, transform: 'translateY(' + (o.y != null ? o.y : 12) + 'px)', filter: 'blur(' + (o.blur != null ? o.blur : 4) + 'px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: o.dur || 460, delay: o.delay || 0, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
}

// ---------- micro-animation: reveal on scroll (only for elements below the fold; nothing is hidden while streaming) ----------
export function revealOnScroll(root = document) {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Content is only hidden while the page is on screen; staggered fade-up with a soft blur, then the element's own transition is restored.
  const pending = new Set();
  const show = (el, delay) => {
    pending.delete(el); if (io) io.unobserve(el);
    el.style.transitionDelay = (delay || 0) + 'ms'; el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none';
    setTimeout(() => { el.style.transition = el.dataset.origTransition || ''; el.style.transitionDelay = ''; el.style.filter = ''; }, 1100 + (delay || 0));
  };
  const io = (!reduce && 'IntersectionObserver' in window) ? new IntersectionObserver(entries => { const vis = entries.filter(en => en.isIntersecting).sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top) || (a.boundingClientRect.left - b.boundingClientRect.left)); vis.forEach((en, i) => show(en.target, Math.min(i, 5) * 90)); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }) : null;
  const check = () => { const lim = window.innerHeight * 0.96; pending.forEach(el => { if (el.getBoundingClientRect().top < lim) show(el, 0); }); };
  if (!window.__somionRevealBound) { window.__somionRevealBound = true; window.addEventListener('scroll', () => { clearTimeout(window.__somionRevealT); window.__somionRevealT = setTimeout(() => window.__somionRevealCheck && window.__somionRevealCheck(), 160); }, { passive: true }); window.addEventListener('beforeprint', () => window.__somionRevealAll && window.__somionRevealAll()); }
  window.__somionRevealCheck = check; window.__somionRevealAll = () => [...pending].forEach(el => show(el, 0));
  const scan = () => { const live = document.visibilityState === 'visible'; root.querySelectorAll('[data-reveal]:not([data-revealed])').forEach(el => { el.setAttribute('data-revealed', '1'); if (!io || !live) return; const r = el.getBoundingClientRect(); if (r.top > window.innerHeight * 0.92) { el.dataset.origTransition = el.style.transition || ''; el.style.opacity = '0'; el.style.transform = 'translateY(32px)'; el.style.filter = 'blur(6px)'; el.style.transition = 'opacity .8s ease, transform .9s cubic-bezier(.2,.7,.2,1), filter .8s ease'; pending.add(el); io.observe(el); } }); };
  scan(); initMotion(); return scan;
}

// ---------- motion engine: word reveal, cursor tilt + glow, parallax, number counters (idempotent, delegated) ----------
const M_EASE = 'cubic-bezier(.2,.7,.2,1)';
const reduced = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
function revealWords(el) {
  if (el.__words) return; el.__words = true;
  if (reduced() || !el.animate || document.visibilityState !== 'visible') return;
  const recs = [], units = [];
  const walk = node => { for (const ch of [...node.childNodes]) {
    if (ch.nodeType === 3) { if (!ch.nodeValue.trim()) continue; const frag = document.createDocumentFragment(), ins = [];
      ch.nodeValue.split(/(\s+)/).forEach(part => { if (!part) return; let n; if (/^\s+$/.test(part)) n = document.createTextNode(part); else { n = document.createElement('span'); n.textContent = part; n.style.display = 'inline-block'; units.push(n); } frag.appendChild(n); ins.push(n); });
      recs.push({ parent: node, orig: ch, ins }); node.replaceChild(frag, ch);
    } else if (ch.nodeType === 1) { const cs = getComputedStyle(ch); if (cs.backgroundClip === 'text' || cs.webkitBackgroundClip === 'text') { if (cs.display === 'inline') ch.style.display = 'inline-block'; units.push(ch); } else walk(ch); } } };
  walk(el);
  let last = null;
  units.forEach((u, k) => { last = u.animate([{ opacity: 0, transform: 'translateY(.42em)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 760, delay: 60 + k * 75, easing: M_EASE, fill: 'backwards' }); });
  const restore = () => recs.forEach(r => { if (!r.ins[0] || !r.ins[0].parentNode) return; r.parent.insertBefore(r.orig, r.ins[0]); r.ins.forEach(n => n.remove()); });
  if (last) last.finished.then(restore, restore); else restore();
}
export function countUp(el, o = {}) {
  const tn = [...el.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.nodeValue)); if (!tn) return;
  const target = tn.nodeValue, mm = target.match(/^(\D*?)([\d,]+(?:\.\d+)?)(.*)$/); if (!mm) return;
  const to = parseFloat(mm[2].replace(/,/g, '')), dec = (mm[2].split('.')[1] || '').length, from = o.from != null ? o.from : (el.__v != null ? el.__v : 0);
  el.__v = to; if (reduced() || from === to) return;
  const t0 = performance.now(), dur = o.dur || 900; let mine = null;
  const step = now => { if (mine !== null && tn.nodeValue !== mine) return; const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    mine = mm[1] + (from + (to - from) * e).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + mm[3]; tn.nodeValue = mine;
    if (p < 1) requestAnimationFrame(step); else tn.nodeValue = target; };
  requestAnimationFrame(step);
}
let motionIO = null, tiltEl = null, pxTick = false;
function resetTilt(el) { el.style.transition = 'transform .6s ' + M_EASE + ', box-shadow .3s, border-color .3s'; el.style.transform = el.__tiltBase || ''; const g = el.querySelector('[data-glow]'); if (g) g.style.opacity = '0'; }
function parallaxFrame() { pxTick = false; if (reduced()) return; const vh = window.innerHeight;
  document.querySelectorAll('[data-parallax]').forEach(el => { const ref = el.parentElement || el; const r = ref.getBoundingClientRect(); if (r.bottom < -300 || r.top > vh + 300) return;
    const f = parseFloat(el.dataset.parallax) || .15, sc = parseFloat(el.dataset.parallaxScale || '1'); el.style.willChange = 'transform';
    el.style.transform = 'translate3d(0,' + (-(r.top + r.height / 2 - vh / 2) * f).toFixed(1) + 'px,0) scale(' + sc + ')'; }); }
function scanMotion() {
  if (!motionIO) return;
  document.querySelectorAll('[data-words]:not([data-mo]),[data-count]:not([data-mo])').forEach(el => { el.setAttribute('data-mo', '1'); motionIO.observe(el); });
  parallaxFrame();
}
export function initMotion() {
  if (window.__somionMotion) { scanMotion(); return; }
  window.__somionMotion = true;
  motionIO = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; const el = en.target; motionIO.unobserve(el); if (el.hasAttribute('data-words')) revealWords(el); if (el.hasAttribute('data-count')) countUp(el, { from: 0 }); }), { threshold: .25 }) : null;
  document.addEventListener('pointermove', e => {
    if (e.pointerType && e.pointerType !== 'mouse') return; const el = e.target && e.target.closest ? e.target.closest('[data-tilt]') : null;
    if (tiltEl && tiltEl !== el) resetTilt(tiltEl); tiltEl = el; if (!el || reduced()) return;
    if (el.__tiltBase === undefined) el.__tiltBase = (el.style.transform && el.style.transform !== 'none') ? el.style.transform : '';
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transition = 'transform .15s ease-out, box-shadow .3s, border-color .3s';
    el.style.transform = (el.__tiltBase ? el.__tiltBase + ' ' : '') + 'perspective(1000px) rotateX(' + ((.5 - y) * 5).toFixed(2) + 'deg) rotateY(' + ((x - .5) * 7).toFixed(2) + 'deg) translateY(-4px)';
    const g = el.querySelector('[data-glow]'); if (g) { g.style.opacity = '1'; g.style.background = 'radial-gradient(420px circle at ' + (x * 100).toFixed(1) + '% ' + (y * 100).toFixed(1) + '%, rgba(124,125,255,.16), rgba(124,125,255,0) 62%)'; }
  }, { passive: true });
  document.addEventListener('pointerleave', () => { if (tiltEl) { resetTilt(tiltEl); tiltEl = null; } });
  const onScroll = () => { if (!pxTick) { pxTick = true; requestAnimationFrame(parallaxFrame); } };
  window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll);
  if ('MutationObserver' in window) { let t; new MutationObserver(() => { clearTimeout(t); t = setTimeout(scanMotion, 120); }).observe(document.body, { childList: true, subtree: true }); }
  scanMotion();
}

// ---------- domain search (deterministic mock) ----------
export function normalizeDomain(input) {
  let s = (input || '').trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[^a-z0-9.-]/g, '');
  let tld = '.com'; const m = s.match(/^(.*?)(\.[a-z]{2,})$/);
  if (m && TLDS.some(t => t.tld === m[2])) { s = m[1]; tld = m[2]; } else s = s.replace(/\./g, '');
  return { name: s, tld };
}
export function checkDomain(name, tld) {
  const key = name + tld; let h = 0; for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  const taken = name.length <= 4 ? h % 4 !== 3 : h % 3 === 0; // short names are mostly taken
  const t = TLDS.find(x => x.tld === tld); return { name, tld, taken, first: t.first, renew: t.renew, premium: !taken && name.length <= 3 };
}
export function suggestDomains(name, exceptTld) { return TLDS.filter(t => t.tld !== exceptTld).map(t => checkDomain(name, t.tld)); }
