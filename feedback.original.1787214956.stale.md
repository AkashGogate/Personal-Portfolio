# Feedback

## DNS diagnosis workflow (2026-08-16)
When a GitHub Pages "NotServedByPagesError" / custom-domain error comes up, diagnose with `dig +short <domain> A`, `dig +short www.<domain> CNAME`, and `curl -sI https://<domain>` (check `server:` header) before touching any repo files or workflow config. Root cause is very often DNS-panel state (e.g. Squarespace apex A records silently reverting to Squarespace's own IPs), not code or CI.

**Why:** Squarespace has repeatedly reverted/locked apex A records back to its own presets even after being changed to GitHub Pages IPs, causing this exact error to recur across sessions.

**How to apply:** Treat this domain's DNS as untrusted/unstable — always re-verify actual resolved IPs and `server` header live via `dig`/`curl` rather than assuming a previous fix is still in effect.

## Verify claims from compressed memory before stating as fact (2026-08-16)
When citing a past session's outcome from compressed memory (e.g. "obs 14161: override confirmed working"), don't present the title as settled fact — pull full observation content via `get_observations`, and cross-check against a live `dig`/`curl` if the claim is DNS/infra-related, before telling user it worked.

**Why:** Stated apex A-record override "worked before, confirmed live" based only on compressed memory title. User pushed back ("are we sure about that?"). Full observation + live dig showed it DID work once but had since reverted — title alone was misleading about current state.

**How to apply:** Any time a memory-sourced claim is about to inform a user-facing decision, verify against full observation content and current live state first.

## Canonical domain choice: www over apex (2026-08-16)
Repo canonical domain switched apex `akashgogate.com` → `www.akashgogate.com` in `public/CNAME`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.

**Why:** Squarespace locks/reverts apex A-record overrides repeatedly (see above) — `www` CNAME avoids that lock entirely.

**How to apply:** Default to `www.akashgogate.com` as canonical for any future domain/DNS/SEO work on this site unless user says otherwise. Apex fate (redirect vs. dead) still unconfirmed with user — don't assume either way.

## Never git add/stage without explicit request (2026-08-16)
Don't run `git add`/stage files unless user explicitly asks, even to demonstrate or fix a git workflow confusion.

**Why:** User ran `git commit` with nothing staged, got "nothing to commit," thought changes were lost. I staged the files to show the fix without being asked. User called it out sharply: "dont do anything im not asking you to do."

**How to apply:** When diagnosing git confusion, explain the cause (e.g. "not staged, that's why commit sees nothing") and let user run `git add` themselves, or ask first. Read-only diagnosis (`git status`, `git diff`, `git check-ignore`) is fine without asking; anything that mutates repo/index state is not.

## Personal/unused skills need individual sign-off, unlike plugins/MCP servers (2026-08-17)
During `/doctor` cleanup, user approved bulk-disabling 35 unused plugins and an unused MCP server without itemizing, but explicitly split off personal skills (`simple-english`, `personal-learning:*`) into a separate per-item question — then kept all 4 even though every one had zero lifetime usage.

**Why:** Plugins/MCP servers are third-party installs — disposable, cheap to re-enable. Personal skills the user authored themselves get weighed differently even when usage data looks identical; usage-count zero is not sufficient signal to assume a self-authored skill is unwanted.

**How to apply:** In any future cleanup/audit task, always break "personal" or user-authored skills out into their own confirmation step rather than bundling them with third-party plugin/MCP disable proposals, even if the recommended default would otherwise be the same for both.

## User will extend automated hooks based on doctor findings (2026-08-17)
After the `/doctor` skill-usage audit, user asked to wire the unused `simple-english` skill into the coding-task-detection hook rather than just leaving it flagged as unused — turning an audit finding into a new automation.

**Why:** Confirms this user treats `/doctor`-style audits as a starting point for tuning automation, not just a cleanup pass — "unused" doesn't always mean "remove," sometimes it means "make it fire under the right trigger instead."

**How to apply:** After surfacing an unused skill/plugin, it's reasonable to ask (or take initiative on explicit request) whether it should be wired into an existing hook/trigger instead of disabled.

