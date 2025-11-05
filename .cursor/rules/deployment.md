Deployment and CI/CD

Cloudflare Pages

- Trigger: Every push to main
- Build command: pnpm install --frozen-lockfile && pnpm build
- Output: Next.js static output handled by Pages preset/adapter

Environment

- Bindings for STARS_KV set in Pages/Workers settings
- Separate prod vs preview bindings as needed

LLM Guidance

- Avoid runtime Node-only APIs on the edge
- Ensure SSG only; no server-side rendering assumptions
- Provide minimal, portable build steps
