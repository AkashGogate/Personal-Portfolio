# Feedback

## DNS diagnosis workflow (2026-08-16)
GitHub Pages "NotServedByPagesError" / custom-domain error come up: diagnose `dig +short <domain> A`, `dig +short www.<domain> CNAME`, `curl -sI https://<domain>` (check `server:` header) FIRST, before touch repo files or workflow config. Root cause usually DNS-panel state (Squarespace apex A records silently revert to Squarespace own IPs), not code or CI.

**Why:** Squarespace repeatedly revert/lock apex A records back to own presets even after change to GitHub Pages IPs, cause this exact error recur across sessions.

**How to apply:** Treat domain's DNS as untrusted/unstable — always re-verify actual resolved IPs and `server` header live via `dig`/`curl` rather than assume previous fix still in effect.

## Verify claims from compressed memory before stating as fact (2026-08-16)
Cite past session outcome from compressed memory (e.g. "obs 14161: override confirmed working")? Don't present title as settled fact — pull full observation content via `get_observations`, cross-check against live `dig`/`curl` if claim DNS/infra-related, before tell user it worked.

**Why:** Stated apex A-record override "worked before, confirmed live" based only on compressed memory title. User push back ("are we sure about that?"). Full observation + live dig show it DID work once but since reverted — title alone misleading about current state.

**How to apply:** Any time memory-sourced claim about to inform user-facing decision, verify against full observation content and current live state first.

## Canonical domain choice: www over apex (2026-08-16)
Repo canonical domain switch apex `akashgogate.com` → `www.akashgogate.com` in `public/CNAME`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.

**Why:** Squarespace lock/revert apex A-record overrides repeatedly (see above) — `www` CNAME avoid that lock entirely.

**How to apply:** Default to `www.akashgogate.com` as canonical for any future domain/DNS/SEO work on this site unless user say otherwise. Apex fate (redirect vs dead) still unconfirmed with user — don't assume either way.

## Never git add/stage without explicit request (2026-08-16)
Don't run `git add`/stage files unless user explicitly ask, even to demonstrate or fix git workflow confusion.

**Why:** User ran `git commit` with nothing staged, got "nothing to commit," thought changes lost. I staged files to show fix without being asked. User call it out sharp: "dont do anything im not asking you to do."

**How to apply:** When diagnose git confusion, explain cause (e.g. "not staged, that's why commit sees nothing") and let user run `git add` themselves, or ask first. Read-only diagnosis (`git status`, `git diff`, `git check-ignore`) fine without asking; anything that mutates repo/index state not.

## Personal/unused skills need individual sign-off, unlike plugins/MCP servers (2026-08-17)
During `/doctor` cleanup, user approve bulk-disable 35 unused plugins and unused MCP server without itemize, but explicitly split personal skills (`simple-english`, `personal-learning:*`) into separate per-item question — then keep all 4 even though every one zero lifetime usage.

**Why:** Plugins/MCP servers third-party installs — disposable, cheap re-enable. Personal skills user authored self get weigh different even when usage data look identical; usage-count zero not sufficient signal to assume self-authored skill unwanted.

**How to apply:** In any future cleanup/audit task, always break "personal" or user-authored skills out into own confirmation step rather than bundle with third-party plugin/MCP disable proposals, even if recommended default otherwise same for both.

## Never invent resume content — port already-curated version instead (2026-08-19)
Ask like "replace any HS course taken at college level with a college class of same weight and category" mean substitute from a real, user-approved source. Don't generate plausible-sounding university course names to fill the slot.

**Why:** New site `data/resume.ts` already hold user-curated coursework that made exactly these substitutions. Porting it satisfy the ask with zero fabrication. Inventing a UW course name to fill AP CS A gap would put fake credential on a live résumé site.

**How to apply:** When a resume/credential edit need new content, find the authoritative already-approved version (other repo, PDF resume, user's own file) and port it. If a slot have no real substitute — like AP CS A (weight 4, CS) — say so plainly and ask user to name the course. Leave the gap over filling it.

## Scope shared CSS overrides to one element, not the utility class (2026-08-19)
Change to `.section-label` font size go inline on the single element (`style={{ fontSize: "0.95rem" }}`), not into the `@layer utilities` class in `globals.css`.

**Why:** `.section-label` is shared by Skills, Experience, Education, and section headers on both sites. Edit the class = site-wide typographic regression from a request that only mean skill category headers.

**How to apply:** Before edit any global/utility CSS class, grep how many components use it. More than one consumer → override at call site.

## remove-ai-marks service blocked by auto mode classifier (2026-08-20)
Skill base64-encode repo files and POST them to `http://127.0.0.1:8934`. Auto mode classifier refuse every call — batch script and single-file curl alike.

**Why:** Read local files + POST bytes to HTTP endpoint is exactly exfiltration shape. Classifier cannot tell the endpoint is user own localhost container. Correct instinct, legitimate task.

**How to apply:** Don't retry or route around. Report the block, explain why it fire, and let user choose: add Bash permission rule (e.g. `Bash(curl -s -X POST http://127.0.0.1:8934/*)`) or run the inspect script self with `!`. Never fall back to local cleaning — skill contain no cleaning code.

## Layer B watermark rewrite need explicit sign-off on personal writing (2026-08-20)
`remove-ai-marks` Layer A (invisible Unicode + container metadata) is safe deterministic clean. Layer B is a statistical rewrite pass over prose.

**Why:** On a portfolio repo, "prose" mean the user's actual résumé bullets and project descriptions. Rewriting those change how user present self professionally — not a hygiene operation.

**How to apply:** Offer Layer B, state plainly what text it would reword, get explicit OK before run. Layer A on same files fine to proceed with once permission unblock.

## User will extend automated hooks based on doctor findings (2026-08-17)
After `/doctor` skill-usage audit, user ask wire unused `simple-english` skill into coding-task-detection hook rather than just leave it flag as unused — turn audit finding into new automation.

**Why:** Confirm this user treat `/doctor`-style audits as starting point for tune automation, not just cleanup pass — "unused" not always mean "remove," sometimes mean "make it fire under right trigger instead."

**How to apply:** After surface unused skill/plugin, reasonable to ask (or take initiative on explicit request) whether it should wire into existing hook/trigger instead of disable.