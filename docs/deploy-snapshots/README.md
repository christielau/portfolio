# Deploy snapshots

This folder documents preserved deployment states on GitHub.

## Branch: `deploy/netlify-manual-2026-05`

**What it is:** The first committed source for the Eleventy portfolio that was live on [christie-lau.netlify.app](https://christie-lau.netlify.app/) via a **manual Netlify deploy** (not built from GitHub) in May 2026.

**Why it exists:** The approach-B CV (`src/pages/cv.md` — highlights only, no full employment history) was deployed to Netlify but never committed to `master`. This branch records that CV as editable source.

**Tag:** `deploy/netlify-manual-2026-05` points at the same commit for a permanent bookmark.

## Other branches (for context)

| Branch | Era |
|---|---|
| `legacy-boilerplate` | Pre-2026 Dan Urbanowicz Eleventy boilerplate site |
| `deploy/netlify-manual-2026-05` | 2026 Eleventy portfolio, manual Netlify deploy snapshot |
| `master` | Current public site; Netlify should build from here |

## Finding the old full CV

Commit `d3bb064` on `master` (Phase 1 push) still contains the full application-style CV. Compare:

```bash
git show d3bb064:src/pages/cv.md
git show deploy/netlify-manual-2026-05:src/pages/cv.md
```
