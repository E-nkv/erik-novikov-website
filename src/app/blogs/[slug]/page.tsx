import type { Metadata } from "next"
import Link from "next/link"
import { findPostByAnySlug, getAllUnifiedSlugs } from "@/lib/blogs"

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
        description: found.post.frontmatter.summary,
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const found = await findPostByAnySlug(slug)
    if (!found) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-10">
                <p>Post not found.</p>
                <Link className="text-blue-600 underline" href={`/blogs`}>
                    Back to blog
                </Link>
            </div>
        )
    }
    const { post, alt } = found
    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            <article className="markdown">
                <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    {post.frontmatter.title}
                </h1>
                <p className="mb-4 text-sm text-gray-600">
                    {new Date(post.frontmatter.date).toLocaleDateString()}
                </p>
                {alt && (
                    <p className="mb-6 text-sm text-gray-700">
                        This blog is also available in Spanish:{" "}
                        <Link className="text-blue-600 underline" href={`/blogs/${alt.slug}`}>
                            {alt.title}
                        </Link>
                    </p>
                )}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
            <div className="mt-10">
                <Link className="text-blue-600 underline" href={`/blogs`}>
                    ← Back to blog
                </Link>
            </div>
        </main>
    )
}
