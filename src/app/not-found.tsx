import Link from "next/link"

export default function NotFound() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
            <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
            <p className="mb-8 text-gray-600">
                The page you are looking for doesn&apos;t exist or may have moved.
            </p>
            <div className="flex items-center justify-center gap-4">
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
