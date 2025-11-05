"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error)
    }, [error])

    return (
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
            <h1 className="mb-4 text-4xl font-bold">Something went wrong!</h1>
            <p className="mb-8 text-gray-600">
                We encountered an unexpected error. Please try again or return to the home page.
            </p>
            {error.digest && <p className="mb-4 text-xs text-gray-500">Error ID: {error.digest}</p>}
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={reset}
                    className="rounded-md border border-blue-600 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Try again
                </button>
                <Link href="/" className="rounded-md border px-4 py-2 hover:bg-blue-50">
                    Go to Home
                </Link>
                <Link href="/blogs" className="rounded-md border px-4 py-2 hover:bg-blue-50">
                    Browse Blogs
                </Link>
            </div>
        </main>
    )
}
