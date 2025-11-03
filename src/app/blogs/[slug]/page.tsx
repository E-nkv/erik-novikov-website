import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { findPostByAnySlug, getAllUnifiedSlugs, formatYearMonth } from "@/lib/blogs"

export const dynamic = "error"

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
    try {
        const { slug } = await params
        const found = await findPostByAnySlug(slug)
        if (!found) {
            notFound()
        }
        const { post, alt } = found
        return (
            <div className="min-h-[95vh] px-6 py-16 sm:px-10 lg:px-24">
                <article className="markdown mx-auto max-w-4xl">
                    <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        {post.frontmatter.title}
                    </h1>
                    <p className="mb-4 text-sm text-gray-600">
                        {formatYearMonth(
                            post.frontmatter.date,
                            post.frontmatter.lang as "en" | "es"
                        )}
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
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <div className="mt-10 text-right">
                        <Link className="text-blue-600 underline" href={`/blogs`}>
                            ← Back to blogs
                        </Link>
                    </div>
                </article>
            </div>
        )
    } catch (error) {
        console.error("Error loading blog post:", error)
        throw error // Re-throw to trigger error.tsx
    }
}
