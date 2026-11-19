# Legacy by Gaurs

Marketing site for **Legacy by Gaurs** — uber-luxury golf-view 4 BHK condominiums and Legacy Villas at Jaypee Greens, Greater Noida, by Gaurs Group.

Operated by an authorised channel partner. This is not the developer's official website.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + sitemap (postbuild)
```

## Project facts

All project data comes from the official brochure (`Legacy by Gaurs Brochure.pdf` in the repo root) and lives in two modules — change it there, not in components:

| File | Holds |
| --- | --- |
| `data/brand.js` | Brand name, RERA, addresses, collection account, channel-partner contact, Gaurs Group stats |
| `data/residences.js` | The 8 condominium unit plans, the 4 towers, the 20 villas, specifications |

Key figures: **265** 4 BHK condominiums across **Buckingham, Edinburgh, Kensington and Versailles** (3B + GF/Stilt + 34 floors), plus **20 Legacy Villas**. Units run 3,510–4,765 sq. ft. total. RERA **UPRERAPRJ688396/10/2024**.

> **Pricing is deliberately absent.** The developer publishes no price list, so the site says "On Request" everywhere and routes to the enquiry form. Do not add invented figures.

## Lead capture & the brochure gate

The brochure is gated behind the form **everywhere**. Every enquiry/brochure CTA leads to a form, and only a successful submit releases the PDF.

- `components/EnquiryForm.jsx` — the canonical form. The enquiry section and the Contact Us page render this exact component, so they can never drift apart.
- `components/InvestmentModal.jsx` — the modal every "Download Brochure" CTA opens.
- `utils/brochure.js` — the single download helper. All forms call it on success.
- `data/brand.js` → `BROCHURE_URL` — points at `public/legacy-by-gaurs-brochure.pdf` (~90 MB), downloaded as `Legacy by Gaurs Brochure.pdf`.

Leads post to `backend.daamrideals.com/api/godrejgolf/submit-lead` (`api/submitform.js`) — the channel partner's existing endpoint, intentionally unchanged.

## Assets

`assets/` is the working image set, built from two sources:

- **`assets-legacybygaurs/`** — supplied brand assets: logo, hero banners, gallery, township photos.
- **The brochure PDF** — renders, floor plans and the master plan extracted from it, because the supplied folder had no plans.

`public/` holds the brochure, master plan, favicon, OG image and blog/news imagery.

## Buyer guides

Two standalone pages (not under `/blogs`), built from the content docs:

| Route | Topic |
| --- | --- |
| `/villa-vs-flat-legacy-by-gaurs` | Legacy Villa vs condominium: compare slider, "which home fits you" quiz, at-a-glance table |
| `/super-built-up-area-vs-carpet-area` | Total vs carpet area: carpet by unit, loading bars, rate-on-carpet calculator, pre-signing checklist |

- Building blocks live in `components/guides/` (hero with ambient film, sticky chapter rail, CTA buttons and bands, JSON-LD).
- Imagery is in `assets/guides/`: brochure renders re-encoded as WebP at 2400w and 960w and served with a real `srcset` by `GuidePicture` (static export means Next does not resize images). Hero films are in `public/videos/` (VP9 WebM + H.264 MP4, ~2.5 MB each); OG images are in `public/og/`.
- Media, films and YouTube IDs are listed in `data/guideMedia.js`; titles and descriptions are in `data/seo.js`.
- The calculator never shows a project price. It only uses the rate the visitor enters.

## Deploying to Cloudflare

`wrangler.jsonc` deploys the static export (`out/`) as a Cloudflare Worker with static assets. There's no Worker script.

```bash
npm run preview   # build, then serve out/ locally with wrangler dev
npm run deploy    # build, then upload out/ (needs `npx wrangler login` once)
```

- `public/_headers` sets long-lived caching for `/_next/static/*` plus basic security headers. `public/_redirects` 301s the drafted `/blogs/...` guide URLs to the standalone pages. The build copies both into `out/`.
- The custom-domain `routes` block in `wrangler.jsonc` is commented out, so the first deploy only creates a `*.workers.dev` URL. Uncomment it when you're ready to move the domain.
- `<Analytics />` from `@vercel/analytics` only works on Vercel. On Cloudflare its script request returns 404, which is harmless.

## Known gaps

- **Walkthrough video**: `brand.youtubeId` is `null`, so `WalkThroughVideo` on the home page falls back to a still + enquiry CTA. The developer's official walkthrough is on the Gaurs Luxury YouTube channel (`932ekLFn36I`) and is already used on the buyer-guide pages. Set `brand.youtubeId` to it to switch the home page embed on.
- **Analytics** — the GTM (`GTM-PGFWQ73S`) and Clarity (`wj5sfhnj3d`) IDs in `app/layout.tsx` are the channel partner's and were left as-is.
