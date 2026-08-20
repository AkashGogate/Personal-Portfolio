# Feedback

## DNS diagnosis workflow (2026-08-16)
GitHub Pages "NotServedByPagesError" / custom-domain error? Diagnose FIRST with `dig +short <domain> A`, `dig +short www.<domain> CNAME`, `curl -sI https://<domain>` (check `server:` header) — before touch repo files or workflow config. Root cause usually DNS-panel state (Squarespace apex A records silently revert to Squarespace IPs), not code or CI.

**Why:** Squarespace repeatedly revert/lock apex A records back to own presets even after change to GitHub Pages IPs. Cause this error recur across sessions.

**How to apply:** Treat domain DNS as untrusted/unstable — always re-verify resolved IPs and `server` header live via `dig`/`curl`. Never assume previous fix still hold.

## Verify claims from compressed memory before stating as fact (2026-08-16)
Cite past session outcome from compressed memory (e.g. "obs 14161: override confirmed working")? Don't present title as settled fact — pull full observation via `get_observations`, cross-check against live `dig`/`curl` if claim DNS/infra-related, before tell user it worked.

**Why:** Stated apex A-record override "worked before, confirmed live" based only on compressed memory title. User push back ("are we sure about that?"). Full observation + live dig show it DID work once but since reverted — title alone misleading about current state.

**How to apply:** Any memory-sourced claim about to inform user-facing decision → verify against full observation content and current live state first.

## Canonical domain choice: www over apex (2026-08-16)
Repo canonical domain switch apex `akashgogate.com` → `www.akashgogate.com` in `public/CNAME`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.

**Why:** Squarespace lock/revert apex A-record overrides repeatedly (see above) — `www` CNAME avoid that lock entirely.

**How to apply:** Default to `www.akashgogate.com` as canonical for future domain/DNS/SEO work on this site unless user say otherwise. Apex fate (redirect vs dead) still unconfirmed — don't assume either way.

## Never git add/stage without explicit request (2026-08-16)
Don't run `git add`/stage files unless user explicitly ask, even to demonstrate or fix git workflow confusion.

**Why:** User ran `git commit` with nothing staged, got "nothing to commit," thought changes lost. I staged files to show fix without being asked. User call it out sharp: "dont do anything im not asking you to do."

**How to apply:** When diagnose git confusion, explain cause (e.g. "not staged, that's why commit sees nothing") and let user run `git add` themselves, or ask first. Read-only diagnosis (`git status`, `git diff`, `git check-ignore`) fine without asking. Anything that mutate repo/index state — not.

## Personal/unused skills need individual sign-off, unlike plugins/MCP servers (2026-08-17)
During `/doctor` cleanup, user approve bulk-disable of 35 unused plugins and unused MCP server without itemize, but explicitly split personal skills (`simple-english`, `personal-learning:*`) into separate per-item question — then keep all 4 despite zero lifetime usage each.

**Why:** Plugins/MCP servers third-party installs — disposable, cheap re-enable. Self-authored personal skills weigh different even when usage data look identical. Zero usage count not sufficient signal skill unwanted.

**How to apply:** In future cleanup/audit task, always break "personal" or user-authored skills into own confirmation step. Never bundle with third-party plugin/MCP disable proposals, even if recommended default same for both.

## Never invent resume content — port already-curated version instead (2026-08-19)
Ask like "replace any HS course taken at college level with a college class of same weight and category" mean substitute from real, user-approved source. Don't generate plausible-sounding university course names to fill slot.

**Why:** New site `data/resume.ts` already hold user-curated coursework that made exactly these substitutions. Porting it satisfy ask with zero fabrication. Inventing UW course name to fill AP CS A gap would put fake credential on live résumé site.

**How to apply:** Resume/credential edit need new content → find authoritative already-approved version (other repo, PDF resume, user own file) and port it. Slot have no real substitute — like AP CS A (weight 4, CS) — say so plainly, ask user to name course. Leave gap over fill it.

## Scope shared CSS overrides to one element, not the utility class (2026-08-19)
Change to `.section-label` font size go inline on single element (`style={{ fontSize: "0.95rem" }}`), not into `@layer utilities` class in `globals.css`.

**Why:** `.section-label` shared by Skills, Experience, Education, and section headers on both sites. Edit class = site-wide typographic regression from request that only mean skill category headers.

**How to apply:** Before edit any global/utility CSS class, grep how many components use it. More than one consumer → override at call site.

## remove-ai-marks service blocked by auto mode classifier (2026-08-20)
Skill base64-encode repo files and POST them to `http://127.0.0.1:8934`. Auto mode classifier refuse every call — batch script and single-file curl alike.

**Why:** Read local files + POST bytes to HTTP endpoint is exactly exfiltration shape. Classifier cannot tell endpoint is user own localhost container. Correct instinct, legitimate task.

**How to apply:** Don't retry or route around. Report block, explain why it fire, let user choose: add Bash permission rule (e.g. `Bash(curl -s -X POST http://127.0.0.1:8934/*)`) or run inspect script self with `!`. Never fall back to local cleaning — skill contain no cleaning code.

## Layer B watermark rewrite need explicit sign-off on personal writing (2026-08-20)
`remove-ai-marks` Layer A (invisible Unicode + container metadata) is safe deterministic clean. Layer B is statistical rewrite pass over prose.

**Why:** On portfolio repo, "prose" mean user actual résumé bullets and project descriptions. Rewriting those change how user present self professionally — not hygiene operation.

**How to apply:** Offer Layer B, state plainly what text it would reword, get explicit OK before run. Layer A on same files fine to proceed once permission unblock.

## Akash voice rules are canonical and live in JobApplicationHelper (2026-08-20)
`JobApplicationHelper/RESUMES/voice_rules.js` export `VOICE_RULES`, `BANNED_VOICE_WORDS`, `EVALUATIVE_ADJECTIVES`. Blurb-specific set inline in `src/cloud/generate_blurb.js:14`. Style corpus `RESUMES/bio_blurbs.md`. Core bans: **no em dash**, **no tricolon**, no filler ("passionate about", "leveraged", "synergy", "impactful", "seamlessly"), no AI vocab ("delve", "robust", "comprehensive", "meticulous", "nuanced", "tapestry", "at its core", "a testament to"), no evaluative adjective wrap metric, no air phrasing, no pleasantry opener.

**Why:** User reject a rewrite of his About section as not sounding like him, then point at these rules as the standard any reword must meet.

**How to apply:** Before reword ANY user-facing prose in either portfolio repo — About bio, project blurb, experience detail — load `voice_rules.js` and constrain the draft up front. Never audit after. Rules apply across projects, not only job-application output.

## Layer B watermark rewrite fight voice rules (2026-08-20)
Statistical rewrite pass optimize for token-distribution novelty. That pull toward ornamented constructions — em dash, tricolon, semicolon splice — which is exactly what Akash voice rules ban.

**Why:** My Layer B draft of his About section broke two of his own rules outright (em dash "still do —", tricolon "Coaching players, running tournaments, and a racket stringing business"). User caught it as "not me" before any rule got consulted.

**How to apply:** Never run Layer B unconstrained on his prose. Feed `voice_rules.js` into the rewrite prompt as hard constraint. Expect the two objectives to conflict — voice win.

## Show drafts of personal-voice edits, never write them (2026-08-20)
Asked to rewrite About section, showed before/after in chat only, wrote nothing. User then say "change it back" — nothing to revert.

**Why:** Personal self-presentation copy (bio, résumé prose) is user identity, not code. Writing first and reverting after churn git history and risk a bad version shipping.

**How to apply:** Any edit to bio/résumé/personal prose → propose in chat, get explicit approval per paragraph, then write. Confirm untouched state with `git status` when user ask to revert.

## Voice-rule tricolon check over-fire on technical lists (2026-08-20)
Audit of `About.tsx` + `data/resume.ts` both repos: 108 raw hits, only 3 genuine. 104 were tricolons inside skill tooltips ("scVI, scANVI, scGen, and AmortizedLDA"; "Manages session state, API routing, and communication...").

**Why:** Tricolon rule written for cover letters and blurbs, where three parallel items read as rhetorical padding. In reference copy listing what a library do, it is a plain list.

**How to apply:** When apply voice rules to portfolio, scope tricolon + evaluative-adjective checks to prose sections only. Don't flag technical enumerations. Report triaged counts, not raw — 108 raw findings is noise that hide the 3 real ones.

## User will extend automated hooks based on doctor findings (2026-08-17)
After `/doctor` skill-usage audit, user ask wire unused `simple-english` skill into coding-task-detection hook rather than leave it flagged unused — turn audit finding into new automation.

**Why:** Confirm this user treat `/doctor`-style audits as starting point for tune automation, not just cleanup pass — "unused" not always mean "remove," sometimes mean "make it fire under right trigger instead."

**How to apply:** After surface unused skill/plugin, reasonable to ask (or take initiative on explicit request) whether it should wire into existing hook/trigger instead of disable.