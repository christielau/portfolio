# Portfolio Website Navigation Index

Last updated: 2026-04-29
Source of truth: `src/` templates/content and current generated `/_site/` output.

## 1) Primary Navigation (Global Header)

Defined in `src/_data/site.json` and rendered by `src/_includes/components/header.njk`.

1. `Home` -> `/`
2. `Work` -> `/work/`
3. `About` -> `/about/`

Global brand link:
- `Christie Lau` mark/brand -> `/`

## 2) Global Footer Navigation

Defined in `src/_data/site.json` and rendered by `src/_includes/components/footer.njk`.

- `LinkedIn` -> `https://www.linkedin.com/in/lauchristie/` (external)
- `Email` -> `mailto:lphlphcc@yahoo.com.hk` (external/mail)

## 3) Top-Level Route Inventory

### Live primary routes
- `/` (Home)
- `/work/` (Work listing)
- `/about/` (About)

### Generated work detail routes (collection-driven)
Pattern from `src/work/work.json`: `/work/{{ page.fileSlug }}/`

Current pages from `src/work/*.md`:
- `/work/rm-workbench/`
- `/work/onboarding-improvement/`

### Additional generated route currently present
- `/work/work/` (exists in current `_site`; likely redundant/legacy output)
- `/work/_template/` (from `src/work/_template.md`; likely scaffold page, not for production nav)

## 4) In-Page/Internal Navigation Links

### Home (`src/index.md`)
- Hero CTA: `View selected work` -> `/work/`
- CTA block: `Get in touch` -> `mailto:lphlphcc@yahoo.com.hk`

### Work Listing (`src/work/index.njk`)
- Card grid links to each item in `collections.work`:
  - `/work/rm-workbench/`
  - `/work/onboarding-improvement/`
  - plus any future `work`-tagged content

### Work Detail Pages
- All work detail layouts include bottom CTA (`components/cta.njk`):
  - `Get in touch` -> `mailto:lphlphcc@yahoo.com.hk`

### About (`src/about.md`)
- No internal CTA currently in markdown body (global header/footer still present).

## 5) Navigation Model Summary

- **Global primary nav:** Home / Work / About
- **Global secondary nav:** Brand-home link, footer social/email links
- **Content navigation:** Work listing cards route to case pages
- **Contact conversion points:** CTA on Home and case-study pages via mailto link

## 6) IA Notes for Next Iteration

- Decide whether `/work/work/` should be removed or redirected.
- Decide whether `src/work/_template.md` should be excluded from production builds.
- Consider adding a direct `Contact` route in primary nav if mailto-only is limiting.
- Consider adding "Back to Work" or related-case links on project pages for stronger content flow.
