Stack and Tools

- Runtime: Next.js (App Router preferred), TypeScript
- Package manager: pnpm
- Styling: Tailwind CSS
- Markdown: gray-matter (frontmatter), remark + remark-html (rendering during SSG)
- Hosting: Cloudflare Pages (static)
- Serverless: Cloudflare Workers/Functions with KV for stars
- CI/CD: Auto build on push to main (Pages build)

Expectations for LLM

- Prefer SSG-only solutions; avoid SSR/ISR unless explicitly requested
- Use TypeScript with explicit types on exports and APIs
- Preserve Tailwind-first styling; avoid CSS-in-JS unless necessary
- Keep dependencies minimal; favor remark plugins if needed for markdown
- Any server state should live in Cloudflare KV via a Worker/Function
