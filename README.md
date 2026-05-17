# Green Miles Travel & Tourism — Website

Premium one-page website for **Green Miles Travel & Tourism**, built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Where to edit content

All content lives in [`lib/data.ts`](./lib/data.ts):

- `contact` — phone, WhatsApp, Instagram, Facebook, Google Maps URL
- `services` — the 7 services (title, description, icon)
- `processSteps` — the 5-step process
- `reviews` — testimonials
- `benefits` — "Why Choose Us" items
- `media` — paths to images / video

## Where to drop media

Place files in `public/images/` and `public/media/`. The site degrades gracefully if a file is missing (no broken image icons).

Suggested filenames (referenced in `lib/data.ts`):

- `public/images/hero-travel.jpg` — hero background
- `public/images/lebanon-coast.jpg` — incoming tourism card
- `public/images/travel-detail.jpg` — outgoing tourism card
- `public/images/airport-transfer.jpg` — about large
- `public/images/hotel-booking.jpg` — about small 1
- `public/images/tour-packages.jpg` — about small 2
- `public/media/hero-travel.mp4` — optional hero video

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset is auto-detected as **Next.js** — no env vars required.
4. Click **Deploy**.

## Connect a custom domain

1. In the Vercel project, open **Settings → Domains**.
2. Add the client's domain (e.g. `greenmilestravel.com`).
3. Update DNS at the domain registrar:
   - **Apex domain** (`example.com`): A record → `76.76.21.21`
   - **www subdomain**: CNAME → `cname.vercel-dns.com`
4. Wait for DNS to propagate (usually minutes). Vercel issues SSL automatically.

## Before going live

- Replace the placeholder images in `public/images/` with the client's photos.
- Confirm the WhatsApp number, Instagram, Facebook, and Maps URL in `lib/data.ts`.
- Run `npm run build` one more time to confirm no warnings or errors.
