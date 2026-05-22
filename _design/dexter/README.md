# Dexter — Solutions Website

A static, self-contained microsite for Dexter, by Chrysalis Education.

## Files

| File | Purpose |
|---|---|
| `index.html` | Redirect — sends visitors to `solutions.html`. Just here so a web server's default route lands on the main page. |
| `solutions.html` | **Main landing page.** The three-panel layout (Why / Who / How) with the gradient-mesh background. Top-left logo, top-right Login / Talk to us / Free Trial. Three pills under the headline link to the deep pages below. |
| `dexter-vs.html` | **10 Reasons.** The competitive / analytical page with cost comparison, security details, GCC compliance, etc. Numbered list of 10 reasons a buyer can't avoid Dexter. |
| `a-day-with-dexter.html` | **A Day With Dexter.** Side-by-side narrative comparison following Sarah, a Year 9 Maths teacher, through six beats of her day — with and without Dexter. |
| `behind-dexter.html` | **Who's Behind Dexter.** The credibility story — five disciplines (Technologists, Educators, Psychologists, Teachers, Students) and how each shaped the product. |

## Tech notes

- Pure HTML + CSS + minimal vanilla JavaScript.
- No build step. No dependencies. No frameworks.
- Google Fonts loaded from CDN (Inter, Fraunces, JetBrains Mono).
- All four pages are self-contained — no shared stylesheets, no external scripts.
- Fully responsive (single column below ~900px).

## Deployment

Upload all five `.html` files to the web root of any static hosting service:

- **Netlify / Vercel:** drag the folder into the dashboard, done.
- **Cloudflare Pages:** connect a Git repo or upload directly.
- **Standard hosting / cPanel:** upload via FTP to `public_html` or equivalent.
- **AWS S3 + CloudFront:** sync the folder; set `index.html` as the default root document.

A visitor hitting your domain root will land on `index.html`, which redirects instantly to `solutions.html`. From there, the three pills navigate to the deep pages, and every deep page links back to the main page and across to each other.

## Mailto links

All contact actions currently go to `hello@chrysalis.education` with descriptive subject lines (e.g. `Dexter Growth enquiry`, `Talk to us about Dexter`, `Dexter demo request`). Filter incoming mail by subject line to route to the right team.

## What needs filling in later

- **Privacy / Security / Terms** footer links currently point to `#`. Replace with real URLs when those documents exist.
- **DEXTER logo wordmark** is currently typographic (the styled "DE**X**TER" with the chartreuse underline under the X). If a designed logo replaces this later, swap the `.brand` markup in all five files.
- The `+38%` improvement stat on `a-day-with-dexter.html` is a placeholder — replace with a real number from Chrysalis School data, or remove.
- Cost comparison numbers on `dexter-vs.html` (Canvas $45k, Blackboard $70k, Moodle $25k) are market estimates — verify against current vendor pricing before publishing.

## Brand assets used inline

- **Primary accent:** chartreuse `#D4FF3D` (with deeper variant `#B8E625`)
- **Ink:** `#0F1419`
- **Background:** warm cream `#FAFAF7`
- **Panel accents (solutions.html only):** sage `#D7DED1`, ink `#0F1419`, warm peach in gradient mesh

— Built by Chrysalis Education, 2026.
