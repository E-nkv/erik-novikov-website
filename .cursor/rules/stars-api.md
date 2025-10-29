Stars API and Storage

Public API (no auth)

- GET /api/stars?canonicalId=<id> -> { count: number }
- POST /api/stars with body { canonicalId: string } -> { count: number }

Storage

- Cloudflare KV namespace: STARS_KV
- Key format: star:<canonicalId>
- POST increments count atomically (use KV atomic or retry loop)

Client Behavior

- Use the same canonicalId across translations
- Optimistic UI update, then reconcile with GET response
- Debounce rapid POSTs; prevent accidental double-click spam

LLM Guidance

- Do not introduce auth; keep API public but simple
- Keep API stable and language-agnostic (canonicalId only)
