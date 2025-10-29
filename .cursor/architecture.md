Architecture Overview

Static Next.js portfolio/blog deployed on Cloudflare Pages with multilingual markdown posts and synchronized star counts across translations. The site is pre-rendered (SSG) and served from Cloudflare CDN.

Goals

- Simple authoring via markdown in git
- Multilingual posts with per-language slugs
- Shared canonical post ID across translations
- Serverless public API for stars (no auth)
- Fully static hosting on Cloudflare Pages

Tech Stack

- Next.js (App Router preferred; SSG for all routes)
- TypeScript
- pnpm
- Tailwind CSS
- gray-matter (frontmatter parsing)
- remark + remark-html (markdown to HTML during SSG)
- Cloudflare Pages (hosting)
- Cloudflare Workers/Functions + KV (stars API + storage)

Content Model

- Directory: blogs/<lang>/<slug>.md (e.g., blogs/en/how-to-jump.md, blogs/es/como-saltar.md)
- Frontmatter fields (minimum): title, canonicalId, lang, slug, date, summary?, tags?
- All translations of a post share the same canonicalId. Each file has its own localized slug.

Routing

- Portfolio home (/) is SSG.
- Blog route shape: /blogs/[slug] (no language prefix). Slug is language-specific.
- Static params generated from the union of all slugs across languages.
- Detail page shows alternate translation link by canonicalId when available.

Stars (Likes) Feature

- Public API (no auth):
    - GET /api/stars?canonicalId=<id> -> { count: number }
    - POST /api/stars with JSON { canonicalId: string } -> { count: number } (increment + return)
- Backed by Cloudflare KV namespace (e.g., STARS_KV). Keys are star:<canonicalId>.
- All translations call API using the same canonicalId, so counts are shared.
- UI shows count and optimistic updates.

Deployment

- Cloudflare Pages builds on every push to main.
- Build command: pnpm install --frozen-lockfile && pnpm build
- Output dir: .next (handled by Next.js adapter/preset for Pages)
- Environment variables for Worker/Function bound KV as needed.

Internationalization Notes

- Each markdown file contains lang and localized slug.
- Generation scans blogs/**/**.md; linking across translations is done via canonicalId.

Local Development

- pnpm dev to run Next.js locally.
- Mock stars API with local KV shim or in-memory map if Cloudflare bindings are not present.

Non-Goals

- No user accounts or complex CMS.
- No SSR/ISR by default—fully SSG for reliability and simplicity.

Future Enhancements

- MDX support
- Search index (static JSON)
- RSS/Atom generation per language
