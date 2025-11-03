Prompting Guidance for LLM

When asked to implement features:

- Adhere to SSG-only constraint unless explicitly told otherwise
- Keep posts and translations in markdown; do not add a database

When generating routes or loaders:

- Scan blogs/**/**.md
- Parse with gray-matter; render with remark at build time
- Group by canonicalId for translation discovery

When updating UI:

- Tailwind classes preferred

When proposing dependencies:

- Avoid heavy or server-only libs; prefer small remark plugins
- Keep pnpm workspace lean
