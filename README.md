# cta

Marketing site for CTA Inc. Next.js (app router) + typescript. black-and-white
design with a webgl intro loader and gsap / scrolltrigger / lenis motion.

## develop

```
npm install
npm run dev
```

## build

```
npm run build
npm start
```

The contact form posts to `/api/contact` (server-side validation, honeypot, in-memory
rate limit). Email delivery provider is not wired yet: submissions are logged in the
function output until one is configured in `deliverInquiry()`.
