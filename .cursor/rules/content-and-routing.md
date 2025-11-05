Content and Routing

Directory Structure

- blogs/<lang>/<slug>.md
- Example: blogs/en/how-to-jump.md, blogs/es/como-saltar.md

Frontmatter (required)

- title: string
- canonicalId: string (shared across translations)
- lang: string (e.g., en, es)
- slug: string (per-language slug)
- date: YYYY-MM-DD
- summary?: string
- tags?: string[]

Routing

- Blog pages live at /blogs/[slug] (no language prefix)
- The slug is language-specific; /blogs/how-to-jump -> English, /blogs/como-saltar -> Spanish
- Static params are the union of slugs across languages
- Detail page links to alternate translation by matching canonicalId

LLM Guidance

- When adding a new post, ensure both language files share the same canonicalId
- Prefer utilities that scan blogs/\*\* and resolve by slug or canonicalId
- Keep URLs language-specific, but data keyed by canonicalId
