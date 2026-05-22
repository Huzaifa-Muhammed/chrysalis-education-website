# Chrysalis Education — full website bundle

The complete static website for Chrysalis Education, covering all three product lines under one roof:

- **Chrysalis School** — online British-curriculum school
- **EDU Concierge** — sister product, monthly education relationship management
- **Dexter** — the platform that runs our school, licensed to institutions across the GCC

## File structure

```
chrysalis-school-website/
│
├── index.html              ← Chrysalis Education hub
├── school.html             ← Chrysalis School landing
├── about.html              ← About the school
├── why.html                ← Why Chrysalis School
├── admission.html          ← Admission process
├── curriculum.html         ← Curriculum
├── parent-resources.html   ← Parent resources hub
├── library.html            ← Knowledge library
├── community.html          ← Parent & student community
├── careers.html            ← Careers
├── support.html            ← Support center
├── concierge.html          ← EDU Concierge product page
├── contact.html            ← Contact routing
├── chrysalis-logo.png      ← Brand mark
│
└── dexter/                 ← Dexter sub-brand product pages
    ├── solutions.html      ← Main Dexter landing (three-panel WHY/WHO/HOW)
    ├── dexter-vs.html      ← 10 Reasons (competitive analysis)
    ├── a-day-with-dexter.html  ← Day-in-the-life narrative comparison
    ├── behind-dexter.html  ← Behind Dexter (the five disciplines)
    └── README.md           ← Notes specific to the Dexter pages
```

## Navigation architecture

Every Chrysalis inner page (`about`, `why`, `admission`, `curriculum`, `parent-resources`, `library`, `school`, `support`, `careers`) shares the same right-side drawer menu. The drawer now has **8 sections**:

1. About
2. Why Chrysalis School
3. Admission
4. Curriculum
5. **Dexter** ← NEW
6. Parent Resources
7. Careers
8. Support Center

The Dexter section is collapsible. Its sub-links open the four Dexter pages: Overview, 10 Reasons, A Day with Dexter, Behind Dexter.

The flat-menu pages (`index`, `concierge`, `community`, `contact`) have Dexter inserted after "EDU Concierge" in their nav list — these use a simpler menu pattern.

## Dexter sub-brand notes

The Dexter pages have their own visual identity:

- **Palette:** warm cream background + chartreuse accent (#D4FF3D), distinct from Chrysalis plum/butter
- **Top nav:** DEXTER wordmark with a green underline under the X, Login / Talk to us / Free Trial actions
- **Architecture:** three-panel landing (WHY / WHO / HOW) that expands horizontally on click, plus three deeper pages reachable via pills under the headline

A small "↗ Chrysalis Education" return link sits in each Dexter page's top nav, so visitors can navigate back up to the parent site.

## Cross-link integrity

All 430 internal HTML links have been verified to resolve to existing files. No broken references in either direction (Chrysalis → Dexter or Dexter → Chrysalis).

## Deployment

Upload the entire `chrysalis-school-website/` folder to the web root of any static host (Netlify, Vercel, Cloudflare Pages, AWS S3, regular cPanel). The folder structure must be preserved — the Dexter pages live in a `dexter/` subdirectory and reference assets relative to that location.

A visitor hitting the root domain lands on `index.html` (the Chrysalis Education hub). From there:
- Chrysalis School → `school.html`
- EDU Concierge → `concierge.html`
- Dexter → `dexter/solutions.html`

## Mailto routing

All contact actions go to `hello@chrysalis.education` with descriptive subject lines so incoming mail can be filtered to the right team. Subject prefixes in use:

- `Dexter demo request`
- `Dexter free trial`
- `Dexter Starter` / `Dexter Growth` / `Dexter Institution` / `Dexter Enterprise`
- `Talk to us about Dexter`
- `Dexter login`
- (And the existing Chrysalis school subjects)

## What needs filling in before public launch

- **Real performance stats** — the `+38% at-risk detection` figure on `dexter/a-day-with-dexter.html` is a placeholder
- **Cost comparison numbers** — the Canvas / Blackboard / Moodle pricing on `dexter/dexter-vs.html` needs verifying against current vendor pricing
- **Privacy / Security / Terms** — footer links currently point to `#`
- **Trademark check** — verify "Dexter" is available in GCC class 9 (software) and class 41 (education)
- **Domain** — secure `dexter.education`, `dexter.school`, or `getdexter.com`

— Built by Chrysalis Education · Dubai · Riyadh · Doha
