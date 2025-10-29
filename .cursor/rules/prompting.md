Prompting Guidance for LLM

When asked to implement features:

- Adhere to SSG-only constraint unless explicitly told otherwise
- Use Cloudflare KV + Worker for any server-side state (stars)
- Keep posts and translations in markdown; do not add a database

When generating routes or loaders:

- Scan blogs/**/**.md
- Parse with gray-matter; render with remark at build time
- Group by canonicalId for star counts and translation discovery

When updating UI:

- Tailwind classes preferred
- Expose a simple Star button bound to canonicalId
- Optimistic updates with a fallback GET to reconcile count

When proposing dependencies:

- Avoid heavy or server-only libs; prefer small remark plugins
- Keep pnpm workspace lean
