import Link from "next/link"
import { getIndexEntries, formatYearMonth } from "@/lib/blogs"

export const dynamic = "error"

export default function BlogIndexPage() {
    try {
        const entries = getIndexEntries()
        return (
        <div className="mx-auto min-h-[95vh] max-w-4xl px-6 py-16 sm:px-10 lg:px-24">
            <h1 className="mb-13 text-center text-4xl font-bold tracking-tight sm:text-5xl">
                My blogs
            </h1>
            <ul className="space-y-6">
                {entries.map(({ primary, other }) => (
                    <li key={primary.canonicalId} className="group">
                        <Link href={`/blogs/${primary.slug}`} className="block">
                            <h2 className="text-xl font-semibold group-hover:underline sm:text-2xl">
                                {primary.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {formatYearMonth(primary.date, primary.lang as "en" | "es")}{" "}
                                {primary.hook && <>— {primary.hook}</>}
                            </p>
                        </Link>
                        {other && (
                            <p className="mt-1 text-xs text-gray-700">
                                {primary.lang === "en"
                                    ? "Also available in Spanish: "
                                    : "También disponible en inglés: "}
                                <Link
                                    className="text-blue-600 underline"
                                    href={`/blogs/${other.slug}`}
                                >
                                    {other.title}
                                </Link>
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
    } catch (error) {
        console.error("Error loading blog index:", error)
        throw error // Re-throw to trigger error.tsx
    }
}
