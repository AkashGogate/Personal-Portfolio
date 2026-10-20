# Feedback

## DNS diagnosis workflow (2026-08-16)
GitHub Pages "NotServedByPagesError" / custom-domain error? Diagnose FIRST: `dig +short <domain> A`, `dig +short www.<domain> CNAME`, `curl -sI https://<domain>` (check `server:` header) — before touch repo files or workflow config. Root cause usually DNS-panel state (Squarespace apex A records silently revert), not code or CI.

**Why:** Squarespace repeat revert/lock apex A records to own presets even after change to GitHub Pages IPs. Error recur across sessions.

**How to apply:** Treat domain DNS as untrusted. Re-verify resolved IPs and `server` header live via `dig`/`curl`. Never assume old fix hold.

## Verify claims from compressed memory before stating as fact (2026-08-16)
Cite past session outcome from compressed memory (e.g. "obs 14161: override confirmed working")? Don't present title as settled fact. Pull full observation via `get_observations`, cross-check against live `dig`/`curl` if DNS/infra claim, before tell user it worked.

**Why:** Stated apex A-record override "worked, confirmed live" from title alone. User push back. Full observation + live dig show it work once, since reverted. Title misleading about current state.

**How to apply:** Memory-sourced claim that inform user-facing decision → verify against full observation and live state first.

## Canonical domain choice: www over apex (2026-08-16)
Repo canonical domain switch apex `akashgogate.com` → `www.akashgogate.com` in `public/CNAME`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.

**Why:** Squarespace lock/revert apex A-record overrides repeatedly (see above). `www` CNAME avoid lock entirely.

**How to apply:** Default `www.akashgogate.com` canonical for future domain/DNS/SEO work unless user say otherwise. Apex fate (redirect vs dead) unconfirmed. Don't assume.

## Never git add/stage without explicit request (2026-08-16)
Don't run `git add`/stage unless user explicitly ask, even to demo or fix git confusion.

**Why:** User ran `git commit` with nothing staged, got "nothing to commit," thought changes lost. I staged files unasked. User call out: "dont do anything im not asking you to do."

**How to apply:** Git confusion → explain cause ("not staged, so commit sees nothing"), let user run `git add`, or ask first. Read-only diagnosis (`git status`, `git diff`, `git check-ignore`) fine unasked. Anything mutate repo/index state — not.

## Personal/unused skills need individual sign-off, unlike plugins/MCP servers (2026-08-17)
During `/doctor` cleanup, user approve bulk-disable of 35 unused plugins + unused MCP server without itemize, but split personal skills (`simple-english`, `personal-learning:*`) into per-item question — then keep all 4 despite zero usage.

**Why:** Plugins/MCP servers third-party — disposable, cheap re-enable. Self-authored personal skills weigh different even with identical usage data. Zero usage not enough signal skill unwanted.

**How to apply:** Cleanup/audit task → break "personal" or user-authored skills into own confirmation step. Never bundle with third-party plugin/MCP disable proposals, even if recommended default same.

## Never invent resume content — port already-curated version instead (2026-08-19)
Ask like "replace any HS course taken at college level with a college class of same weight and category" mean substitute from real, user-approved source. Don't generate plausible university course names to fill slot.

**Why:** New site `data/resume.ts` already hold user-curated coursework with exactly these substitutions. Porting satisfy ask, zero fabrication. Inventing UW course name for AP CS A gap put fake credential on live résumé site.

**How to apply:** Resume/credential edit need new content → find authoritative approved version (other repo, PDF resume, user file) and port. Slot have no real substitute — like AP CS A (weight 4, CS) — say so plainly, ask user name course. Leave gap over fill it.

## Scope shared CSS overrides to one element, not the utility class (2026-08-19)
Change to `.section-label` font size go inline on single element (`style={{ fontSize: "0.95rem" }}`), not into `@layer utilities` class in `globals.css`.

**Why:** `.section-label` shared by Skills, Experience, Education, section headers on both sites. Edit class = site-wide typographic regression from request that only mean skill category headers.

**How to apply:** Before edit any global/utility CSS class, grep how many components use it. More than one consumer → override at call site.

## remove-ai-marks service blocked by auto mode classifier (2026-08-20)
Skill base64-encode repo files and POST to `http://127.0.0.1:8934`. Auto mode classifier refuse every call — batch script and single-file curl alike.

**Why:** Read local files + POST bytes to HTTP endpoint = exfiltration shape. Classifier cannot tell endpoint is user own localhost container. Correct instinct, legit task.

**How to apply:** Don't retry or route around. Report block, explain why fire, let user choose: add Bash permission rule (e.g. `Bash(curl -s -X POST http://127.0.0.1:8934/*)`) or run inspect script self with `!`. Never fall back to local cleaning — skill contain no cleaning code.

## Resume-swap filename convention differs per repo (2026-09-13)
"Change resume displayed" both repos = grep each `ResumeViewer.tsx` for its `PDF` const first, don't assume shared filename. This repo want `resume.pdf`, `PortfolioWebsite` want `Gogate Akash Resumé.pdf` (URL-encoded in old site's const, literal in new). Copy source PDF to each exact expected name — no rename, no `data/resume.ts` touch, link not sourced from there.

## Layer B watermark rewrite need explicit sign-off on personal writing (2026-08-20)
`remove-ai-marks` Layer A (invisible Unicode + container metadata) safe deterministic clean. Layer B statistical rewrite pass over prose.

**Why:** On portfolio repo, "prose" mean user actual résumé bullets and project descriptions. Rewriting change how user present self professionally. Not hygiene operation.

**How to apply:** Offer Layer B, state plainly what text it would reword, get explicit OK before run. Layer A on same files fine once permission unblock.

## Akash voice rules are canonical and live in JobApplicationHelper (2026-08-20)
`JobApplicationHelper/RESUMES/voice_rules.js` export `VOICE_RULES`, `BANNED_VOICE_WORDS`, `EVALUATIVE_ADJECTIVES`. Blurb-specific set inline at `src/cloud/generate_blurb.js:14`. Style corpus `RESUMES/bio_blurbs.md`. Core bans: **no em dash**, **no tricolon**, no filler ("passionate about", "leveraged", "synergy", "impactful", "seamlessly"), no AI vocab ("delve", "robust", "comprehensive", "meticulous", "nuanced", "tapestry", "at its core", "a testament to"), no evaluative adjective wrap metric, no air phrasing, no pleasantry opener.

**Why:** User reject rewrite of About section as not sounding like him, then point at these rules as standard any reword must meet.

**How to apply:** Before reword ANY user-facing prose in either portfolio repo — About bio, project blurb, experience detail — load `voice_rules.js`, constrain draft up front. Never audit after. Rules apply across projects, not only job-application output.

## Layer B watermark rewrite fight voice rules (2026-08-20)
Statistical rewrite pass optimize token-distribution novelty. Pull toward ornamented constructions — em dash, tricolon, semicolon splice — exactly what voice rules ban.

**Why:** My Layer B draft of About section broke two rules outright (em dash "still do —", tricolon "Coaching players, running tournaments, and a racket stringing business"). User caught it as "not me" before any rule consulted.

**How to apply:** Never run Layer B unconstrained on his prose. Feed `voice_rules.js` into rewrite prompt as hard constraint. Expect objectives conflict — voice win.

## Show drafts of personal-voice edits, never write them (2026-08-20)
Asked to rewrite About section, showed before/after in chat only, wrote nothing. User then say "change it back" — nothing to revert.

**Why:** Personal self-presentation copy (bio, résumé prose) is user identity, not code. Write first then revert churn git history, risk bad version shipping.

**How to apply:** Edit to bio/résumé/personal prose → propose in chat, get explicit approval per paragraph, then write. Confirm untouched state with `git status` when user ask revert.

## Voice-rule tricolon check over-fire on technical lists (2026-08-20)
Audit of `About.tsx` + `data/resume.ts` both repos: 108 raw hits, only 3 genuine. 104 were tricolons inside skill tooltips ("scVI, scANVI, scGen, and AmortizedLDA"; "Manages session state, API routing, and communication...").

**Why:** Tricolon rule written for cover letters and blurbs, where three parallel items read as rhetorical padding. In reference copy listing what library do, plain list.

**How to apply:** Apply voice rules to portfolio → scope tricolon + evaluative-adjective checks to prose sections only. Don't flag technical enumerations. Report triaged counts, not raw — 108 raw findings = noise hiding 3 real ones.

## Leaving a credential gap open pay off (2026-08-20)
Refused invent UW CS course to replace AP CS A, said gap have no substitute, ask user name one. User supply real answer: Programming I, II, III, all Java.

**Why:** Honest gap prompt exactly input needed. Fabricated course name ship fake credential, user never know to correct.

**How to apply:** User data have hole → name hole and ask. Don't fill with plausible content. User answer specific factual questions fast — asking cost one turn, fabricating cost credibility.

## Verify "dead code" with grep before delete, then say why it safe (2026-08-20)
Before delete `resumeVariants` + `ResumeVariant` from `PortfolioWebsite/data/resume.ts`, grep `app`/`components`/`lib`/`data` — reference exist ONLY at own declaration. Memory obs 11467 confirm same. Then delete, show user evidence.

**Why:** User ask remove old resume links. Deleting export that component render break site silently. Grep turn risky delete into verified one.

**How to apply:** Any `export` deletion → grep all source dirs for symbol first. Report evidence in answer ("referenced only at its own declaration"), not just action. Check claude-mem observations too, sometimes already record finding.

## Prefer a visual check before commit when changes are visual (2026-08-20)
Both repos pass `tsc --noEmit` and `next build`, yet I told user NOT ready to commit — Education layout, skill header size, deleted HS section, 26 byte-modified images, swapped resume PDFs all visual.

**Why:** Green build prove code compile, not page look right. Session made many layout/asset changes with zero browser verification.

**How to apply:** After visual changes, state plainly build-pass is not visual-pass. Offer `next dev`. Don't call work "ready to commit" on typecheck + build alone when change user would see.

## User will extend automated hooks based on doctor findings (2026-08-17)
After `/doctor` skill-usage audit, user ask wire unused `simple-english` skill into coding-task-detection hook rather than leave flagged unused — audit finding become new automation.

**Why:** Confirm user treat `/doctor`-style audits as start point to tune automation, not just cleanup — "unused" sometimes mean "make it fire under right trigger instead."

**How to apply:** After surface unused skill/plugin, reasonable to ask (or take initiative on explicit request) whether wire into existing hook/trigger instead of disable.
## Re-swapping a generated artifact invalidates prior cleaning (2026-08-20)
User regenerate `Gogate_Akash_General.pdf`, ask replace in both repos again. Copy trivial. Non-obvious: earlier `remove-ai-marks` pass cleaned OLD bytes, not these.

**Why:** Cleaning = property of specific bytes, not path. Silent re-copy leave user believe asset still clean when never scanned.

**How to apply:** Previously-cleaned file overwritten from upstream → say plainly clean status reset, offer re-inspect. Don't auto-run, don't stay silent.

## Verify swap with md5 against source, not file size (2026-08-20)
Before/after `md5 -q` on source + both destinations. Size alone ambiguous — 42,961 vs 42,963 B is 2 bytes apart.

**Why:** Near-identical regenerated PDFs differ by bytes, not bulk. Size check can pass on wrong file.

**How to apply:** Asset replacement → hash source and every destination, report matching hash as evidence.
## "Install X" means npm devDependency, not npx/global (2026-09-18)
User ask "get oxlint on this project", I begin checking versions via `npm view` only. User interject: "its an npm library i want installed".

**Why:** Tooling request on JS project = add to `package.json` devDependencies so reproduce for everyone, not one-off npx run.

**How to apply:** "Add/get tool X" on npm project → `npm install -D X`, add script, add config. Don't stop at inspect/explore when install is the ask.
## Fix lint by restructuring, disable only when rule is a false positive (2026-09-19)
User ask fix errors from new oxlint. Real fixes: ref-in-render → state; JSX backdrop `onClick` → native listener. Disable comment only for SSR-hydration `setState` in effect and custom-drawer `role="dialog"`, each with `--` reason.

**Why:** Blanket disables hide real bugs; per-line disable with reason document deliberate exceptions.

**How to apply:** Try code fix first. Disable only line-scoped, with reason. Re-run oxlint + `tsc` + `next build` in every repo touched.

## Pasted text for remove-ai-marks: Layer A run, Layer B offered not run (2026-09-19)
User paste coursework answers, ask `/remove-ai-marks`. Text = graded assignment. Ran Layer A (clean, nothing found), offered Layer B with disclosure-policy note.

**Why:** Skill ethics: own content only; rewriting to dodge detection on coursework can be academic fraud.

**How to apply:** Coursework/graded text → Layer A + report, mention course AI policy, run Layer B only on explicit confirm.
## "Fix lint but don't change appearance/animation" needs risk triage per finding (2026-09-22)
User ask fix all remaining oxlint findings, constraint: no functionality/animation/appearance change. Traced each: 1 safe (`useSyncExternalStore` swap, same initial value), 3 unsafe (theme hydration flash, native dialog vs custom animation) — fixed only the safe one, left rest suppressed with reasoning already in comments.

**Why:** "Fix everything" + "don't change appearance" can conflict per-finding. Blind fix-all would violate the appearance constraint on theme/dialog cases.

**How to apply:** Given a fix-all-with-constraint request, check each finding's fix against the constraint individually before editing; report which were skipped and why, don't silently skip or silently fix-anyway.
