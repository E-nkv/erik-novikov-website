import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"

export type BlogFrontmatter = {
    title: string
    canonicalId: string
    lang: string
    slug: string
    date: string
    publish_date?: string
    hook?: string
    summary?: string
    tags?: string[]
}

export type BlogPost = {
    frontmatter: BlogFrontmatter
    html: string
    filepath: string
}

const BLOGS_DIR = path.join(process.cwd(), "blogs")

export function getLanguages(): string[] {
    // Simplified: we only support English and Spanish
    return ["en", "es"]
}

export function getAllPostsMetaByLang(lang: string): BlogFrontmatter[] {
    const dir = path.join(BLOGS_DIR, lang)
    if (!fs.existsSync(dir)) return []
    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".md"))
        .map((filename) => {
            const full = path.join(dir, filename)
            const raw = fs.readFileSync(full, "utf8")
            const { data } = matter(raw)
            return data as BlogFrontmatter
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllSlugs(): { lang: string; slug: string }[] {
    const langs: Array<"en" | "es"> = ["en", "es"]
    const pairs: { lang: string; slug: string }[] = []
    for (const lang of langs) {
        const dir = path.join(BLOGS_DIR, lang)
        if (!fs.existsSync(dir)) continue
        for (const f of fs.readdirSync(dir)) {
            if (f.endsWith(".md")) {
                pairs.push({ lang, slug: f.replace(/\.md$/, "") })
            }
        }
    }
    return pairs
}

export function getAllUnifiedSlugs(): string[] {
    const pairs = getAllSlugs()
    const set = new Set<string>()
    for (const p of pairs) set.add(p.slug)
    return Array.from(set)
}

export function getTranslationsByCanonicalId(canonicalId: string): BlogFrontmatter[] {
    const out: BlogFrontmatter[] = []
    for (const lang of ["en", "es"]) {
        const metas = getAllPostsMetaByLang(lang)
        for (const meta of metas) {
            if (meta.canonicalId === canonicalId) out.push(meta)
        }
    }
    return out
}

export async function getPostBySlug(lang: string, slug: string): Promise<BlogPost | null> {
    try {
        const file = path.join(BLOGS_DIR, lang, `${slug}.md`)
        if (!fs.existsSync(file)) return null
        const raw = fs.readFileSync(file, "utf8")
        const { data, content } = matter(raw)
        const frontmatter = data as BlogFrontmatter
        const html = await renderMarkdownToHtml(content)
        return { frontmatter, html, filepath: file }
    } catch (error) {
        console.error(`Error loading post ${lang}/${slug}:`, error)
        return null
    }
}

export async function findPostByAnySlug(
    slug: string
): Promise<{ post: BlogPost; alt?: BlogFrontmatter } | null> {
    // Try English first, then Spanish
    for (const lang of ["en", "es"]) {
        const post = await getPostBySlug(lang, slug)
        if (post) {
            const translations = getTranslationsByCanonicalId(post.frontmatter.canonicalId)
            const alt = translations.find((t) => t.lang !== post.frontmatter.lang)
            return { post, alt }
        }
    }
    return null
}

export function getIndexEntries(): { primary: BlogFrontmatter; other?: BlogFrontmatter }[] {
    // Group by canonicalId and pick English as primary if available, else Spanish
    const all: BlogFrontmatter[] = [...getAllPostsMetaByLang("en"), ...getAllPostsMetaByLang("es")]
    const byCanon = new Map<string, BlogFrontmatter[]>()
    for (const meta of all) {
        const arr = byCanon.get(meta.canonicalId) || []
        arr.push(meta)
        byCanon.set(meta.canonicalId, arr)
    }
    const entries: { primary: BlogFrontmatter; other?: BlogFrontmatter }[] = []
    for (const arr of byCanon.values()) {
        const primary = arr.find((m) => m.lang === "en") || arr[0]
        const other = arr.find((m) => m.lang !== primary.lang)
        entries.push({ primary, other })
    }
    // sort by date desc using primary
    entries.sort((a, b) => (a.primary.date < b.primary.date ? 1 : -1))
    return entries
}

export function formatYearMonth(dateIso: string, lang: "en" | "es"): string {
    const d = new Date(dateIso)
    if (Number.isNaN(d.getTime())) return dateIso
    if (lang === "en") {
        return d.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    }
    // Spanish: format as "Octubre 2025" (capitalize month, remove " de ")
    const parts = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" })
        .formatToParts(d)
        .filter((p) => p.type === "month" || p.type === "year")
    const month = parts.find((p) => p.type === "month")?.value || ""
    const year = parts.find((p) => p.type === "year")?.value || ""
    const capMonth = month.charAt(0).toUpperCase() + month.slice(1)
    return `${capMonth} ${year}`
}

export async function renderMarkdownToHtml(md: string): Promise<string> {
    try {
        const schema = {
            ...defaultSchema,
            tagNames: [...(defaultSchema.tagNames || []), "video", "source", "iframe"],
            attributes: {
                ...(defaultSchema.attributes || {}),
                video: [
                    "src",
                    "controls",
                    "poster",
                    "width",
                    "height",
                    "playsinline",
                    "muted",
                    "loop",
                    "autoplay",
                ],
                source: ["src", "type"],
                iframe: ["src", "width", "height", "allow", "allowfullscreen", "referrerpolicy"],
                img: ["src", "alt", "title", "width", "height", "loading"],
                p: ["className"],
                div: ["className", "style"],
            },
        }
        const file = await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(rehypeSanitize, schema)
            .use(rehypeStringify)
            .process(md)
        return String(file)
    } catch (error) {
        console.error("Error rendering markdown to HTML:", error)
        throw new Error("Failed to render markdown content")
    }
}
