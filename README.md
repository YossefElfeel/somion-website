# Somion Web Services website

Marketing site for Somion Web Services, deployed on Vercel. It was designed in Claude Design and unpacked into the plain static files in `public/`, which are now the source and are edited directly.

## Structure

| Path | Contents |
| --- | --- |
| `public/index.html` | App shell and hash router (`/#/Hosting`, `/#/Checkout`, …) |
| `public/*.dc.html` | Page and section components (markup, styles and logic), fetched by the runtime on demand |
| `public/somion-data.js` | Plans, prices, currencies, cart and account helpers |
| `public/dc-runtime.js`, `public/vendor/` | Design runtime and React 18.3.1, self-hosted (generated, don't edit) |
| `public/assets/`, `public/fonts/` | Images, icons, hero video, and the Manrope and DM Sans fonts |
| `design/Somion Website.html` | The original standalone export, kept for reference and not deployed |

There's no build step and no dependencies. The scripts need Node 18 or later.

```bash
npm run preview   # serve public/ at http://localhost:4173
npm run check     # confirm every file the pages reference exists (Vercel runs this before each deploy)
```

Pushing to `main` deploys to production.

## Importing a new Claude Design export

`public/` has been edited by hand since the export, so don't copy a new export over it. Unpack the new export to a scratch folder, then merge the changes you want:

```bash
npm run unpack -- "path/to/New Export.html" design/unpacked
```

## Good to know

- Checkout, login/sign-up and the contact form work only in the browser. Cart, account and order history are kept in the visitor's `localStorage`. No messages, orders, payments or accounts reach a server. Card details are never stored or sent, but visitors still get an order confirmation. Connecting these needs a backend, such as a billing system or a form service.
- An invalid promo code shows the demo code `SOMION10` in its error message.
