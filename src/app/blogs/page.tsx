import Link from "next/link"
import { getIndexEntries } from "@/lib/blogs"

export const dynamic = "error"

export default function BlogIndexPage() {
    const entries = getIndexEntries()
    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
            <ul className="space-y-6">
                {entries.map(({ primary, alternates }) => (
                    <li key={primary.canonicalId} className="group">
                        <Link href={`/blogs/${primary.slug}`} className="block">
                            <h2 className="text-xl font-semibold group-hover:underline sm:text-2xl">
                                {primary.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {new Date(primary.date).toLocaleDateString()} — {primary.summary}
                            </p>
                        </Link>
                        {alternates.length > 0 && (
                            <p className="mt-1 text-xs text-gray-700">
                                Also available:{" "}
                                {alternates.map((a, i) => (
                                    <span key={a.slug}>
                                        {i > 0 ? ", " : null}
                                        <Link
                                            className="text-blue-600 underline"
                                            href={`/blogs/${a.slug}`}
                                        >
                                            {a.lang}
                                        </Link>
                                    </span>
                                ))}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </main>
    )
}
