# Personal Portfolio

A deliberately minimal personal portfolio — static Next.js site with no motion libraries, no scroll effects, no transitions beyond basic hover states. Content-first layout covering experience, projects, and curated skills, built for fast load and easy long-term maintenance rather than visual flourish. Deployed as a static export.

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- React 18 + TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open https://personalportfoliowebsite.akashgogate.com to view the site.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build the static export
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Content

Resume/profile content lives in `data/resume.ts`. Update that file to change experience, projects, skills, and education entries shown on the site.
