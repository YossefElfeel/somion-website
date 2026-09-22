# Somion Web Services website

Marketing site for Somion Web Services, designed in Claude Design and deployed on Vercel.

## How it's built

`Somion Website.html` is the standalone export from the design tool. Every page, script, font, image and the hero video are embedded in that one file, which the browser unpacks on every visit (about 14 MB before first paint).

`npm run build` unpacks it once at build time into `dist/` as ordinary static files, so visitors download only what the current page uses and everything can be cached:

| Output | Contents |
| --- | --- |
| `index.html` | App shell and hash router (`/#/Hosting`, `/#/Checkout`, …) |
| `*.dc.html` | Page and section components, fetched by the runtime on demand |
| `dc-runtime.js`, `vendor/` | Design runtime and React 18.3.1, self-hosted |
| `somion-data.js` | Plans, prices, currencies, cart and account helpers |
| `assets/`, `fonts/` | Images, icons, hero video, and the Manrope and DM Sans fonts, self-hosted |

It has no dependencies and needs Node 18 or later.

```bash
npm run build     # Somion Website.html → dist/
npm run preview   # serve dist/ at http://localhost:4173
```

## Updating the site

Export the design again as a standalone HTML file, replace `Somion Website.html`, then commit and push to `main`. Vercel builds and deploys it.

## Good to know

- Checkout, login/sign-up and the contact form work only in the browser. Cart, account and order history are kept in the visitor's `localStorage`. No messages, orders, payments or accounts reach a server. Card details are never stored or sent, but visitors still get an order confirmation. Connecting these needs a backend, such as a billing system or a form service.
- An invalid promo code shows the demo code `SOMION10` in its error message.
