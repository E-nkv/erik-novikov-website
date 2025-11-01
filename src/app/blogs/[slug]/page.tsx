import type { Metadata } from "next"
import Link from "next/link"
import { findPostByAnySlug, getAllUnifiedSlugs, formatYearMonth } from "@/lib/blogs"

export const dynamic = "error"

export async function generateStaticParams() {
    return getAllUnifiedSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const found = await findPostByAnySlug(slug)
    if (!found) return { title: "Not found" }
    return {
        title: found.post.frontmatter.title,
        description: found.post.frontmatter.hook,
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const found = await findPostByAnySlug(slug)
    if (!found) {
        return (
            <div className="mx-auto min-h-[95vh] max-w-4xl px-6 py-16 sm:px-10 lg:px-24">
                <p>Post not found.</p>
                <Link className="text-blue-600 underline" href={`/blogs`}>
                    Back to blog
                </Link>
            </div>
        )
    }
    const { post, alt } = found
    return (
        <div className="min-h-[95vh] px-6 py-16 sm:px-10 lg:px-24">
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
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="mt-10 text-right">
                    <Link className="text-blue-600 underline" href={`/blogs`}>
                        ← Back to blogs
                    </Link>
                </div>
            </article>
        </div>
    )
}
