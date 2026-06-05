# Public repo redaction report — Phase 1

**Date:** 2026-05-22  
**Scope:** `Portfolio_Website/src/` (publish tree) + root `netlify.toml`

## Client / employer names in publish tree

| Term | Location | Verdict |
|---|---|---|
| Capco | `src/pages/cv.md` (employer) | **Allowed** — public employer |
| Tier 1 / anonymised labels | Case studies, `work.json` | **OK** |
| Barclays, Deutsche Bank, Visa, HSBC, abrdn | Not in `src/` | **OK** |

## PLANNING / non-publish paths (exclude from public repo)

- `PLANNING/` — contains abrdn, BNY references. **Do not copy to public repo.**

## CV approach B (Tier A / qualitative)

- Removed unsourced percentages: Tobias 40%/30%, IBM 35%, Rebel 28%, Visa 22%/60% admin.
- Retained Tier A Visa platform metrics (17k views, 600+ active, 1,600+ cases) — sourced in claims ledger.

## Barclays case study metrics

- `60+` cumulative Open Studio attendance — **Tier A** (candidate + self-assessment).
- `20+` unique attendees — **Tier A** (updated from "people upskilled").

## Grep summary (`src/` only)

No matches for: Barclays, Deutsche, Visa, HSBC, abrdn, BNY, Royal London, Vitality, Bangkok.

## Verdict

**Clear to push public `master`** after copying publish tree only (exclude `PLANNING/`, `_site/`, `node_modules/`, `.netlify/`).
