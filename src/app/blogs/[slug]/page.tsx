import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
    findPostByAnySlug,
    getAllUnifiedSlugs,
    formatYearMonth,
    getRecommendedBlogs,
} from "@/lib/blogs"

export const dynamic = "error"

// Process markdown HTML to add target="_blank" to all anchor tags
function processMarkdownLinks(html: string): string {
    // Add target="_blank" and rel="noopener noreferrer" to all anchor tags
    // This regex matches <a> tags (with or without attributes) and adds the attributes if they don't already exist
    return html.replace(/<a(\s+[^>]*?)?>/gi, (match, attributes) => {
        const attrs = attributes || ""

        // Check if target already exists
        if (/target\s*=/i.test(attrs)) {
            return match // Already has target, don't modify
        }

        // Check if rel already exists
        const hasRel = /rel\s*=/i.test(attrs)
        const relAttr = hasRel ? "" : ' rel="noopener noreferrer"'

        // Add target="_blank" and rel if not present
        // Trim attributes and add space if needed
        const trimmedAttrs = attrs.trim()
        const spaceBefore = trimmedAttrs ? " " : ""
        return `<a${spaceBefore}${trimmedAttrs} target="_blank"${relAttr}>`
    })
}

export function generateStaticParams() {
    try {
        return getAllUnifiedSlugs().map((slug) => ({ slug }))
    } catch (error) {
        console.error("Error generating static params:", error)
        return []
    }
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    try {
        const { slug } = await params
        const found = await findPostByAnySlug(slug)
        if (!found) return { title: "Not found" }
        return {
            title: found.post.frontmatter.title,
            description: found.post.frontmatter.hook || undefined,
        }
    } catch (error) {
        console.error("Error generating metadata:", error)
        return { title: "Error" }
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    let found
    try {
        found = await findPostByAnySlug(slug)
    } catch (error) {
        console.error("Error loading blog post:", error)
        throw error // Re-throw to trigger error.tsx
    }
    if (!found) {
        notFound()
    }
    const { post, alt } = found
    return (
        <div className="lg:px-14- min-h-[95vh] px-6 py-16 sm:px-10">
            <article className="markdown mx-auto max-w-4xl">
                <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    {post.frontmatter.title}
                </h1>
                <p className="mb-4 text-sm text-gray-600">
                    {formatYearMonth(post.frontmatter.date, post.frontmatter.lang as "en" | "es")}
                </p>
                {alt && (
                    <p className="mb-6 text-sm text-gray-700">
                        {post.frontmatter.lang === "en" ? (
                            <>
                                This blog is also available in Spanish:{" "}
                                <Link
                                    className="text-blue-600 underline"
                                    href={`/blogs/${alt.slug}`}
                                >
                                    {alt.title}
                                </Link>
                            </>
                        ) : (
                            <>
                                Este blog también está disponible en inglés:{" "}
                                <Link
                                    className="text-blue-600 underline"
                                    href={`/blogs/${alt.slug}`}
                                >
                                    {alt.title}
                                </Link>
                            </>
                        )}
                    </p>
                )}
                <div
                    className="markdown-content"
                    dangerouslySetInnerHTML={{ __html: processMarkdownLinks(post.html) }}
                />
                {post.frontmatter.recommended && post.frontmatter.recommended.length > 0 && (
                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <h2 className="mb-4 text-2xl font-bold">Recommended blogs</h2>
                        <ul className="space-y-2">
                            {getRecommendedBlogs(
                                post.frontmatter.recommended,
                                post.frontmatter.lang as "en" | "es"
                            ).map((blog) => (
                                <li key={blog.canonicalId}>
                                    <Link
                                        className="text-blue-600 underline hover:text-blue-800"
                                        href={`/blogs/${blog.slug}`}
                                    >
                                        {blog.title} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="mt-10 text-right">
                    <Link className="text-blue-600 underline" href={`/blogs`}>
                        ← Back to blogs
                    </Link>
                </div>
            </article>
        </div>
    )
}
