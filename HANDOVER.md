# HANDOVER: Mundesha Investments Website

Built by Tangison Studio for Mundesha Investment One CC (trading as Mundesha Investments).
Stack: Astro 5 (static output) + TypeScript + plain CSS custom properties. Hosting: Vercel. Repo: GitHub.

## 1. What was delivered

- 18 routes built and verified: `/`, `/about`, `/services`, 7 service landing pages, `/projects`, `/clients`, `/contact`, `/brand`, `/privacy-policy`, `/terms`, `/404`, `/500`
- `/api/quote` serverless function: server-side validation, honeypot, time trap, optional email delivery via Resend
- SEO: robots.txt, sitemap.xml (absolute canonical URLs), JSON-LD LocalBusiness + per-service Service schema, OG/Twitter cards, favicon suite (ico/svg/32/180/192/512/manifest)
- Assets: SVGO-optimised logos (header logo 15.5 KB), hero WebP 119 KB, all photos WebP with explicit dimensions, 13 client logos as 160px-tall WebP for the 56px logo wall
- Performance: home page HTML+CSS+JS+hero = 154 KB before fonts (Google Fonts, swapped). Budget 500 KB respected with headroom.

## 2. Defaults used (open questions from the brief)

| Question | Default applied |
|---|---|
| Master logo layout | Horizontal in header/footer (per brief default). Stacked shown on /brand. |
| Surname spelling | "Mudesha" as printed in the profile. Company stays "Mundesha". Needs client confirmation. |
| Domain | SITE_URL env var. Fallback https://example.invalid. No guessed domain anywhere. |
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
| SITE_URL | yes (prod) | Canonical URLs, sitemap, OG. Set to the final production URL. |
| LEAD_EMAIL | no | Quote notification recipient. Fallback: Mundesha.inv.cc@gmail.com |
| SHOW_CLIENT_LOGOS | no | Set to "false" to hide the logo wall until permissions are confirmed. Default true. |
| RESEND_API_KEY | no | Enables direct email delivery of quote requests. Without it the form validates, then hands the user to prefilled WhatsApp or email buttons (honest, no fake "sent" state). |
| RESEND_FROM | no | Verified sender, e.g. "Mundesha Website <quotes@yourdomain>". |

Never commit secrets. The tokens used for this deployment were shared in chat and must be rotated.

## 4. Deploy steps (what was done)

1. `git init`, commit, push to GitHub repo `mundesha-investments`
2. `vercel deploy --prod --token <TOKEN>` from the repo root (Astro auto-detected, static output, `/api` folder becomes the serverless function)
3. `vercel env add SITE_URL production` set to the production URL, then redeploy so canonicals and sitemap use the real domain
4. Cloudflare DNS (when the client domain is ready): CNAME to Vercel, then set SITE_URL to the domain and redeploy
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
Site builds with SITE_URL unset for local work; canonicals then point at example.invalid, which is intentional so no wrong domain leaks.
