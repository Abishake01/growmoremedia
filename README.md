# Growmore Media — Agency Website

A premium, conversion-focused landing page for Growmore Media, a digital marketing
agency. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide
React icons.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production build

```bash
npm run build
```

Outputs a static build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/   Reusable UI sections (Navbar, Hero, Services, Pricing, ...)
  data/         Content data: services, plans, projects, industries, process, faq
  config/       site.ts — contact info, social links, nav — edit this to update
                 phone/email/WhatsApp numbers and social URLs across the site
  lib/          Reveal (scroll animation wrapper), scroll-spy hooks
```

All copy, pricing, and contact details live in `src/data/*.ts` and
`src/config/site.ts`, so the site can be updated without touching component code.

## Known placeholders to replace before launch

- **Logo**: a text/mark wordmark was generated in `src/components/Logo.tsx` since no
  logo file was supplied in this conversation. Swap in the real Growmore Media logo
  asset when available.
- **Contact details** in `src/config/site.ts` (email, phone, WhatsApp number, social
  links) are placeholders — update with verified business details.
- **Portfolio items** in `src/data/projects.ts` are labeled sample work — replace with
  real projects as they become available.
- **Pricing** in `src/data/plans.ts` is marked as suggested/sample pricing per the
  brief — confirm final commercial terms before treating it as live pricing.
- **Testimonials** section shows a neutral "coming soon" state until real client
  feedback is supplied.

## Contact form behavior

The enquiry form (`src/components/Contact.tsx`) validates input client-side, then
opens a WhatsApp chat (`wa.me`) pre-filled with the enquiry details via
`siteConfig.contact.whatsappLink`. It only shows a success state after the WhatsApp
window actually opens — it does not claim to have sent anything on its own. Swap this
for a real form backend/API integration when one is available.

## Deploying to Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, "Add New Project" → import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel will build and host the static site automatically.

Alternatively, from the CLI:

```bash
npm install -g vercel
vercel
```
