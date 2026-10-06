# HANDOVER: Mundesha Investments Website

Built by Tangison Studio for Mundesha Investment One CC (trading as Mundesha Investments).
Stack: Astro 5 (static output) + TypeScript + plain CSS custom properties. Hosting: Vercel. Repo: GitHub.

## 0. V3 update (2026-10-05, from docs/09-v3-updates.md + second filebin kit)

- 8 services: added `/services/maintenance-repairs` (laundry machinery, hot water systems, electrical equipment, general building maintenance). Laundry machinery servicing moved out of the refrigeration page into this line.
- New hero headline per v3: "Technical, construction and support services across Namibia". Home meta title updated to match.
- Home: 8 equal image tiles, featured projects, ON SITE gallery strip linking to `/gallery`.
- New routes: `/gallery` (23 real photos, filterable: construction, air conditioning, equipment maintenance, team, site visits) and `/team` (inline roles-only organogram + structure cards + trades list). Sitemap includes both.
- New projects: Swakop Uranium shower block and manhole renovation (undated, has real site photo on the project card) and Lady Pohamba Private Hospital laundry machinery (Jun 2025).
- Logos replaced with the v3 re-traced SVGs (fixed D counter). Favicon suite regenerated from the new icon. Header logo 7.9 KB.
- Mobile menu is now an off-canvas drawer with a photo thumbnail per service.
- Footer minimised: logo, tagline, three quick contact pills, Services and Company links collapsed into details dropdowns, slim copyright bar with the Tangison Studio credit.
- Pending client items from v3: Lady Pohamba testimonial card (need hospital permission before showing name/logo), registration number CC/2016/12742 (show in footer after client confirms), consent confirmation for publishing team and site-visit photos, organogram with-names variant (only after written consent per person), "medically cleared for Swakop Uranium / Husab Mine" proof point (only if certificates confirmed current).
- Spelling resolved by v3 documents: the owner is "Elia Hangeinge Mudesha", the company "Mundesha Investment One CC". No longer an open question.
- Private documents rule honoured: no staff IDs, phone numbers, dates of birth or medical data anywhere on the site or in the repo.

## 1. What was delivered

- 21 routes built and verified: `/`, `/about`, `/team`, `/services`, 8 service landing pages, `/projects`, `/clients`, `/gallery`, `/contact`, `/brand`, `/privacy-policy`, `/terms`, `/404`, `/500`
- `/api/quote` serverless function: server-side validation, honeypot, time trap, optional email delivery via Resend
- SEO: robots.txt, sitemap.xml (absolute canonical URLs), JSON-LD LocalBusiness + per-service Service schema, OG/Twitter cards, favicon suite (ico/svg/32/180/192/512/manifest)
- Assets: SVGO-optimised logos (v3 re-traced header logo 7.9 KB), hero WebP 119 KB, all photos WebP with explicit dimensions, 23 real gallery photos, 8 service tiles, 13 client logos as 160px-tall WebP for the 56px logo wall
- Performance: home page HTML+CSS+JS+hero = 154 KB before fonts (Google Fonts, swapped). Budget 500 KB respected with headroom.
- Service photos round 2 (2026-10-05): the client added 7 composite grids to the filebin. They were cropped into 42 cells (scripts/crop_composites.py, automatic gutter detection), 18 selections encoded to WebP (scripts/add_new_photos.mjs) and placed on service pages and /about.

### Photo honesty policy

- `src/pages/services/[slug].astro` holds a `REAL_PHOTOS` set. Only photos in that set (the original kit job photos) carry the "Real site photo" caption.
- The new composite-grid images are client-supplied AI composites. They are used as service illustrations: descriptive alt text, no "real site photo" claim, no project page usage.
- If the client wants the caption on more images, they must supply actual job photos and the keys get added to `REAL_PHOTOS`.
- Composite F (electrical) had index numerals baked into cell corners; the crop script shaves 44 px off the bottom of those cells.

## 2. Defaults used (open questions from the brief)

| Question | Default applied |
|---|---|
| Master logo layout | Horizontal in header/footer (per brief default). Stacked shown on /brand. |
| Surname spelling | RESOLVED by v3 documents: owner "Mudesha", company "Mundesha". |
| Domain | Production domain: https://mundesha.com. SITE_URL env var set on Vercel; code fallback in astro.config.mjs also points at mundesha.com. |
| Address | "Windhoek, Namibia" only. |
| NORED date | Shown without a date (source said 2003, before founding). |
| Ministry of Works date | Shown without a date. |
| Welwitschia spelling | "Welwitschia" to match the client logo. Profile's "Welvitschia" noted here. |
| Client logo permission | Logo wall built behind SHOW_CLIENT_LOGOS (default true). Client must confirm each logo before launch. |
| Regions list | Omaheke, Erongo, Otjozondjupa, Oshana, Oshikoto, Khomas: inferred from project towns. Needs client confirmation. |
| Crimson accent panels | images/accents Brand-Backgrounds 01_red-gradient and 05_dark-red-texture skipped: they run crimson and could not be colour-corrected without risking brand drift. |

## 3. Environment variables

| Var | Required | Purpose |
|---|---|---|
| SITE_URL | yes (prod) | Canonical URLs, sitemap, OG. Set to https://mundesha.com on Vercel (2026-10-06). |
| LEAD_EMAIL | yes (prod) | Quote notification recipient. Set to info@mundesha.com (2026-10-06). Code fallback matches. |
| SHOW_CLIENT_LOGOS | no | Set to "false" to hide the logo wall until permissions are confirmed. Default true. |
| RESEND_API_KEY | no | Enables direct email delivery of quote requests. Without it the form validates, then hands the user to prefilled WhatsApp or email buttons (honest, no fake "sent" state). |
| RESEND_FROM | no | Verified sender, e.g. "Mundesha Website <quotes@yourdomain>". |

Never commit secrets. The tokens used for this deployment were shared in chat and must be rotated.

## 4. Deploy steps (what was done)

1. `git init`, commit, push to GitHub repo `mundesha-investments`
2. `vercel deploy --prod --token <TOKEN>` from the repo root (Astro auto-detected, static output, `/api` folder becomes the serverless function)
3. SITE_URL and LEAD_EMAIL are set in Vercel Production (https://mundesha.com and info@mundesha.com)
4. mundesha.com is attached to the Vercel project but pending DNS. Client must add at their registrar:
   - A record: mundesha.com -> 76.76.21.21 (recommended)
   - CNAME: www.mundesha.com -> cname.vercel-dns.com
   - Then run `vercel domains verify mundesha.com`. Canonicals and sitemap already point at mundesha.com, so no further redeploy is needed
   - Email: create the info@mundesha.com mailbox and add SPF, DKIM and DMARC records so quote notifications deliver
5. Vercel Deployment Protection covers preview deployments (staging shield). For deeper staging noindex, add a separate preview project with `X-Robots-Tag: noindex, nofollow`.

## 5. Quote form behaviour

- Client-side inline validation, then server-side re-validation (name, phone format, service, message length)
- Honeypot field `company`: bots that fill it get a fake success; nothing is stored
- Time trap: submissions under 2.5s after page load are rejected
- If RESEND_API_KEY is configured: request is emailed to LEAD_EMAIL and the user sees a real confirmation
- If not configured: user sees "Your request is ready" with one-tap WhatsApp (wa.me/264812777553) and email (mailto) buttons carrying the full request text. No false "we received it" claim.
- Email deliverability: configure SPF, DKIM and DMARC on the sending domain once a domain email exists. Gmail address stays as fallback recipient.
- WhatsApp number +264 81 277 7553: client must confirm the number is WhatsApp-enabled.

## 6. Benchmark (niche leader)

- Chosen benchmark: Art Plumbing, AC & Electric, https://www.artplumbingandac.com: a multi-trade US contractor (plumbing + AC + electrical), the closest analogue to Mundesha's seven-trade model, regularly cited in HVAC web design round-ups (sources consulted: valveandmeter.com HVAC website design guide, nestasites.com and cyberoptik.net best-of round-ups).
- Side-by-side audit: layout density (7-tile service grid + proof strip + logo wall matches their service-first home page), typographic discipline (2 families, strict two-tone heading system), spatial pacing (alternating white/grey/ink sections with 84px rhythm), interaction polish (logo wall colourise, filter states, sticky mobile call/WhatsApp bar).
- Differentiation: diagonal red slash language and the sampled #A70202 brand system are Mundesha's own; the benchmark's identity was not cloned.
- Note: external sites could not be fetched from the build sandbox, so the audit is based on the sources above rather than a live crawl. Re-run before final sign-off with network access.

## 7. Launch checklist status

Brand: fonts loaded (Montserrat + Inter, 2 families), Brand Bar 4px fixed CLS 0, tokens AA-verified, header logo SVG 15.5 KB. PASS
Routes and credit: studio credit "Made by Tangison Studio" linked to studio.tangison.com, entity data accurate, all 5 mandatory routes exist. PASS
SEO: robots + sitemap live, titles under 60 and descriptions under 155 on every route, OG/Twitter set, favicon suite deployed, JSON-LD valid (LocalBusiness + 7x Service). PASS
Copy: zero em dashes (grep clean), zero filler phrases, +264 phone format, no fake reviews/stats/awards. PASS
Performance: 154 KB home initial transfer before external fonts; WebP with explicit dimensions; immutable cache on /_astro via vercel.json. PASS
Forms: unit-tested locally (valid, honeypot, time trap, bad input, GET rejection). Live submission test on the deployed URL: pending, do it after deploy. SPF/DKIM/DMARC: pending client domain email.
Accessibility: skip link, single H1 per page, semantic landmarks, focus-visible rings, alt text on informational images, keyboard-operable menu and filters. Keyboard sweep on the live site: pending.
Launch gate: benchmark recorded; DNS/Search Console pending client domain; live form test pending.

## 8. Items needing the client (from the brief's open questions)

1. Confirm master logo (stacked vs horizontal)
2. Confirm surname spelling: Mudesha or Mundesha
3. Domain name and DNS control
4. Street address and postal box
5. Written permission for each client logo (Republic of Namibia coat of arms especially)
6. Confirm +264 81 277 7553 is on WhatsApp
7. Correct NORED and Ministry of Works dates (or confirm undated display)
8. Registration numbers (CC number, VAT, certifications) for the footer
9. Original vector logo from the designer for print use
10. Confirm the inferred regions list
11. Business hours and any response-time promise (none is claimed on the site)

## 9. Phase 2: chat assistant

Skipped. The brief allows a small facts-only chat bubble only if the 500 KB budget holds and an API route exists. The budget holds, but there is no LLM API key configured and the serverless function would need one server-side. Revisit after the client domain and email are live.

## 10. Local development

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to dist/
npx astro preview  # serve dist/ locally
```
Local builds fall back to https://mundesha.com (astro.config.mjs), so canonicals and sitemap are correct everywhere. Security headers (CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) ship via vercel.json. Fonts are self-hosted woff2 under /fonts with immutable caching; no third-party font requests.

## v6 (skills pass)

Applied vercel-labs web-interface-guidelines review + shadcn technique to the whole site, no new JavaScript libraries:

- Drawer: full Tab focus trap and focus return on every close path (verified with key presses).
- Quote form: success panel is role="status", receives focus, validation focuses the first invalid field.
- Home: new HOW IT WORKS four-step strip; gallery strip now valid <figure> markup.
- Contact: service-region chips (Omaheke, Erongo, Otjozondjupa, Oshana, Oshikoto, Khomas).
- 404: quick links to Services, Projects, Gallery, About.
- Motion: CSS-only hero entrance and scroll reveals (Chromium animation-timeline, @supports guarded, reduced-motion respected, print-safe).
- Infrastructure: color-scheme light, touch-action manipulation, tabular-nums, scroll-margin-top, inter-600 preload, print stylesheet.

Commit 0695577. Live on Vercel.

## v7 (clean logos + back to top)

Client reported the site logo broken; the v3 kit's re-traced SVGs had a jagged
sawtooth notch in the M mark's centre stem, and the whole favicon suite had been
regenerated from that bad icon. New logo files came from the client's kit zip on
filebin (bin 2ro54ii3mfk07fns, exported 5 Oct 20:22, right before upload; the
alternate zip in the same bin is a truncated zero-padded upload with no
recoverable logos - verified by local-header scan).

- All 6 Mundesha SVGs replaced with the clean set, SVGO-optimised (84-102 KB raw
  down to 50-62 KB, viewBox preserved, pixel-parity checked: only sub-visible
  edge antialiasing at 960 px).
- Favicon suite regenerated from the clean icon: favicon.svg, favicon.ico
  (285 KB down to 4.2 KB, 16/32/48), favicon-32, apple-touch-icon (180),
  icon-192, icon-512. OG image untouched (it uses the wall-sign photo, which was
  always clean).
- New BackToTop.astro: fixed circular button, appears after 600 px, rAF-throttled
  passive scroll listener, smooth scroll (auto under prefers-reduced-motion),
  hidden from tab order and the accessibility tree when off-screen (visibility),
  48 px touch target, focus ring with 3 px offset, sits above the mobile call
  bar (12 px gap + safe-area) and below the drawer backdrop (z 85 vs 90), hidden
  in print.
- Verified: all 19 routes 200, one H1 per page, no heading jumps, 0 px overflow
  at iPhone 14 on 11 routes, zero console errors, live SVG md5 matches dist,
  real-keyboard Tab reaches the button with visible ring.

Commit 0711ad7. Live on Vercel.

## v8 (search, premium buttons, logo polish, captions to alt text, market audit)

User directives: hamburger borderless, search button + system, all buttons fully
rounded and premium, standout logo, footer logo bigger, no image captions (use
alt text), inspect all images and find the AI-generated ones, full SEO for
mundesha.com, competitor check.

- Search: SearchDialog.astro (vanilla, zero deps) opens from the header button
  or the "/" key. Prebuilt /search-index.json (46 entries: 11 pages + 8 services
  + 27 projects) fetched lazily on first open. Highlighted matches, scored
  ranking, arrow-key navigation, Esc pill, backdrop click, focus return, Tab
  trap inside the dialog, role="status" result announcements. Verified desktop
  and mobile (46x46 target).
- Buttons: every button and button-like control is now a pill (999px) or a
  circle - .btn (14px 28px), nav links, services trigger, Esc chip, drawer
  close (borderless circle with 90-degree hover rotate), to-top (border
  removed). Primary pill gained an inset top highlight for the premium read.
- Logo: header logo 56 -> 62 px with stronger drop-shadow and a 1.03 hover
  lift; mobile 46 px. Footer logo 44 -> 64 px (CSS and inline in sync).
- Captions: every <figcaption> removed site-wide (gallery, home strip, about,
  team, services). Real kit photos carry alt prefixed "Real site photo:",
  AI-derived service images carry alt prefixed "Illustration:". Zero
  figcaptions remain in src or dist.
- Image inventory: scripts/image_inventory.py -> download/image-inventory-
  2026-10-06.md. 40 AI-generated files registered (16 accent panels, 18 service
  composites, 3 home tiles, 3 drawer thumbs), 51 real photos, 19 brand assets,
  6 icons. Tile map in scripts/v3_assets.mjs is the provenance source.
- Market audit: download/market-audit-2026-10-06.md (tangison-market-audit
  format). Key finding: brand-name searches return government tender PDFs and
  a Gazette notice, not mundesha.com; the domain is not indexed while DNS is
  pending; no GBP surfaced. Named competitors with sources: GMC Airconditioning
  Namibia, Gree Namibia (Cold Air), CTS Namibia, Safland, Royal Serve Cleaning.
  Week-one wins: DNS cutover, Search Console + sitemap submit, Google Business
  Profile, street address for NAP.
- Verified: 21 pages built, all routes 200 live, 404 intact, canonicals and OG
  on mundesha.com, zero console errors, 0 px overflow on audited routes, home
  initial transfer 66 KB (budget 500 KB), "/" shortcut and dialog verified on
  live HTML, pill/circle styles confirmed in computed styles on production.

Commit be089ff. Live on Vercel.

## v9 (Task 10, 6 October 2026): company profile player, offcanvas logo fix, client logo refresh

- Offcanvas logo fixed: the mobile drawer (dark --brand-ink surface) previously used
  mundesha-logo-horizontal-light.svg, the dark wordmark meant for white backgrounds
  (black logo on black background). It now uses mundesha-logo-horizontal-dark.svg,
  the white wordmark variant, and every letter renders sharp on the dark surface.
- Company profile: client-supplied Mundesha_Company_Profile_v4.pdf (14.9 MB, sha1
  1d9bc057) downloaded from the filebin, renamed to Mundesha-Investments-Company-
  Profile.pdf and compressed with Ghostscript (220 dpi bicubic cap, DCT encode) to
  4.8 MB. All 14 pages pixel-compared against the original at 150 dpi; worst page
  differs on 1.3 percent of pixels (JPEG recompression noise), text selectable.
- New page /company-profile: same-origin iframe PDF player (CSP-compatible), pill
  buttons Download PDF / Open in new tab / Fullscreen, chapter list, honest meta
  (14 pages, 4.8 MB), no-PDF-viewer fallback link, zero-JS fallback inside iframe.
- Links: footer Company column gains "Company profile (PDF)" on every page; drawer
  Company list gains "Company profile"; search index gains the page (47 entries);
  sitemap gains /company-profile (20 URLs).
- CSP: frame-ancestors 'none' changed to 'self' and X-Frame-Options removed, so the
  same-origin PDF viewer works; clickjacking protection is carried by CSP
  frame-ancestors (modern equivalent). vercel.json adds /downloads/ cache header.
- Client logos: all 13 rebuilt from the company profile's own page-6 artwork
  (scripts/deploy_profile_assets.py; colour+smask pairs combined to alpha webp,
  trimmed, max 480 px). Total wall weight 250 KB to 136 KB. Slugs unchanged, so
  images.json URLs are stable; dimensions updated in images.json. Grayscale idle /
  colour hover wall style unchanged (pre-existing design).
- og-image.jpg recompressed q82 (kept JPEG: WhatsApp and Facebook link crawlers do
  not reliably render WebP previews; WhatsApp is the primary share channel).
- Skill runs (user-requested): ux-writing (applied to profile page copy and
  buttons), site-architecture (orphan check: /company-profile has footer + drawer +
  search + sitemap inbound links), seo-audit (OpenSEO MCP tools unavailable in this
  environment; non-MCP principles applied, honest note recorded), safe-debug
  (diagnose-first applied; ML-specific artefacts N/A), improve-codebase-architecture
  (Explore + HTML report to /tmp; no refactors executed by design at handover).
- Finisher: tangison-client-handover pack delivered (PDF, 10 pages, QA PASS:
  /home/z/my-project/download/Mundesha-Investments-Digital-Foundation-Pack.pdf)
  plus editable letters docx (postcheck PASS: Mundesha-Handover-Letters.docx).
- Deployed: commit e68c739 pushed; Vercel auto-deploy verified live
  (/company-profile 200, /downloads PDF 200 exact byte match, drawer dark logo and
  footer link in live HTML, CSP frame-ancestors live, search index live with entry).
- Client actions pending: DNS cutover for mundesha.com (A 76.76.21.21, www CNAME
  cname.vercel-dns.com), create info@mundesha.com mailbox with SPF/DKIM/DMARC,
  approve and sign the reference letter wording, confirm warranty/response times.

Commit e68c739. Live on Vercel.
