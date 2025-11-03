Architecture Overview

Static Next.js portfolio/blog deployed on Cloudflare Pages with multilingual markdown posts. The site is pre-rendered (SSG) and served from Cloudflare CDN.

Goals

- Simple authoring via markdown in git
- Multilingual posts with per-language slugs
- Shared canonical post ID across translations
- Fully static hosting on Cloudflare Pages

Tech Stack

- Next.js (App Router preferred; SSG for all routes)
- TypeScript
- pnpm
- Tailwind CSS
- gray-matter (frontmatter parsing)
- remark + remark-html (markdown to HTML during SSG)
- Cloudflare Pages (hosting)

Content Model

- Directory: blogs/<lang>/<slug>.md (e.g., blogs/en/how-to-jump.md, blogs/es/como-saltar.md)
- Frontmatter fields (minimum): title, canonicalId, lang, slug, date, summary?, tags?
- All translations of a post share the same canonicalId. Each file has its own localized slug.

Routing

- Portfolio home (/) is SSG.
- Blog route shape: /blogs/[slug] (no language prefix). Slug is language-specific.
- Static params generated from the union of all slugs across languages.
- Detail page shows alternate translation link by canonicalId when available.

Deployment

- Cloudflare Pages builds on every push to main.
- Build command: pnpm install --frozen-lockfile && pnpm build
- Output dir: .next (handled by Next.js adapter/preset for Pages)

Internationalization Notes

- Each markdown file contains lang and localized slug.
- Generation scans blogs/**/**.md; linking across translations is done via canonicalId.

Local Development

- pnpm dev to run Next.js locally.

Non-Goals

- No user accounts or complex CMS.
- No SSR/ISR by default—fully SSG for reliability and simplicity.

Future Enhancements

- MDX support
- Search index (static JSON)
- RSS/Atom generation per language
