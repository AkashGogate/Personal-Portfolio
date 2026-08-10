# HANDOFF

## Goal
Deploy 2 Next.js sites to 2 subdomains of `akashgogate.com` via GitHub Pages:
- PersonalPortfolioCode (branch `master`) → `personalportfoliowebsite.akashgogate.com` — "newer" site in user vocab (built more recent, plain/no-framer-motion)
- `../PortfolioWebsite` (branch `main`) → `personalpieceportfolio.akashgogate.com` — "old" site (framer-motion, design-forward, built first)

## Current State
Prior turn: fixed 3 user-reported bugs both repos (nav mis-highlight, dead hover-underline in new repo, Accomplishments image/text sizing) — `tsc`/`build` clean both, CSS grep-confirmed.

This turn: ran full manual 22-item submission-check (react-doctor + pa11y auto-tools + 20-item checklist) against fresh static exports of both repos (served locally, now stopped). Delivered full PASS/FAIL/N/A report to user. Results: both repos pass nearly everything (build clean, bundle size fine, a11y clean via pa11y, react-doctor findings all previously-triaged false positives). Two flagged, unfixed findings:
1. **New-repo-only bug**: 404 page ships 2 `<title>` tags, wrong one (home page's) first in document order → wrong title shown to non-JS clients/crawlers. Old repo has same 2-tag pattern but correct order. No custom `app/not-found.tsx` in either repo; root cause not fully diagnosed (likely RSC streaming/metadata-ordering nuance).
2. **Both repos**: `opengraph-image` static output file has no file extension → blank Content-Type locally via `npx serve`; unconfirmed whether GitHub Pages sets `image/png` correctly for extensionless files once live.

User then asked "ready to commit and push then?" — reaffirmed standing pref: user does all git commit/push themselves, I never touch git write ops. Told user the 3-bug-fix files are ready, listed the 2 open items (404 title bug fix now-or-later; live eyeball of hover/scroll-spy before push since no browser tool this project), asked which they want. No reply yet on that question this turn (housekeeping hook fired before it landed).

## Files in Flight
Uncommitted, waiting on user's own commit/push:
- PersonalPortfolioCode: `components/Nav.tsx`, `app/globals.css`, `components/Accomplishments.tsx` (3 bug fixes from prior turn only).
- PortfolioWebsite: `components/Nav.tsx`, `components/Accomplishments.tsx` (2 fixes, same prior turn).

Nothing changed this turn (submission-check turn was read/report only, no edits).

## Changed This Session (prior turns, already committed by user)
GPA/domain/resume/README fixes, 9-item feature work, Nav/UX 3-item turn, global submission-check hook extended w/ react-doctor+pa11y, fix-all-issues pass both repos, header-animation port into PersonalPortfolioCode — all committed thru `4b39d61`.

## Failed Attempts
None this turn. Carried over, unaddressed, low prio: 2 orphaned `python3 -m http.server` procs (8531/8532); stale unrelated `next-server` on :3000.

## Next Step
1. **Awaiting user decision**: fix the new-repo 404 duplicate-title bug now, or leave for later? (Reported, not yet actioned — standing rule: report before fixing out-of-scope findings.)
2. User eyeball 3 bug fixes live (hover-underline feel, scroll-spy on rapid section clicks) before commit — no browser automation tool available this project.
3. User commits/pushes both repos whenever ready — standing pref, no git write ops from me, confirmed again this turn.
4. User decide PortfolioWebsite's `ProjectDrawer` custom-modal → native `<dialog>` conversion (deferred, not forced).
5. User gives updated resume PDF "in a bit" — swap `public/resumes/resume.pdf` when given.
6. PersonalPortfolioCode: still needs GitHub Pages custom domain set manually, Settings→Pages.
7. Optional/unconfirmed: verify `opengraph-image` extensionless file gets correct Content-Type on live GitHub Pages (both repos) once deployed.
8. Low prio: clean orphaned processes (8531/8532, stale :3000 next-server).
