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
    if (!fs.existsSync(BLOGS_DIR)) return []
    return fs
        .readdirSync(BLOGS_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
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
    const langs = getLanguages()
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
    const langs = getLanguages()
    const out: BlogFrontmatter[] = []
    for (const lang of langs) {
        const metas = getAllPostsMetaByLang(lang)
        for (const meta of metas) {
            if (meta.canonicalId === canonicalId) out.push(meta)
        }
    }
    return out
}

export async function getPostBySlug(lang: string, slug: string): Promise<BlogPost | null> {
    const file = path.join(BLOGS_DIR, lang, `${slug}.md`)
    if (!fs.existsSync(file)) return null
    const raw = fs.readFileSync(file, "utf8")
    const { data, content } = matter(raw)
    const frontmatter = data as BlogFrontmatter
    const html = await renderMarkdownToHtml(content)
    return { frontmatter, html, filepath: file }
}

export async function findPostByAnySlug(
    slug: string
): Promise<{ post: BlogPost; alt?: BlogFrontmatter } | null> {
    const langs = getLanguages()
    for (const lang of langs) {
        const post = await getPostBySlug(lang, slug)
        if (post) {
            const translations = getTranslationsByCanonicalId(post.frontmatter.canonicalId)
            const alt = translations.find((t) => t.slug !== slug)
            return { post, alt }
        }
    }
    return null
}

export function getIndexEntries(): { primary: BlogFrontmatter; alternates: BlogFrontmatter[] }[] {
    // Group by canonicalId and pick English as primary if available, else first
    const langs = getLanguages()
    const all: BlogFrontmatter[] = []
    for (const lang of langs) all.push(...getAllPostsMetaByLang(lang))
    const byCanon = new Map<string, BlogFrontmatter[]>()
    for (const meta of all) {
        const arr = byCanon.get(meta.canonicalId) || []
        arr.push(meta)
        byCanon.set(meta.canonicalId, arr)
    }
    const entries: { primary: BlogFrontmatter; alternates: BlogFrontmatter[] }[] = []
    for (const arr of byCanon.values()) {
        const primary = arr.find((m) => m.lang === "en") || arr[0]
        const alternates = arr.filter((m) => m.slug !== primary.slug)
        entries.push({ primary, alternates })
    }
    // sort by date desc using primary
    entries.sort((a, b) => (a.primary.date < b.primary.date ? 1 : -1))
    return entries
}

export async function renderMarkdownToHtml(md: string): Promise<string> {
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
}
