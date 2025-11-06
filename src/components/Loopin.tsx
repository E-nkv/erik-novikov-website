"use client"

import Link from "next/link"
import { SmoothLink } from "./SmoothLink"

export function Loopin() {
    return (
        <section className="flex min-h-[20vh] flex-col items-center justify-center px-4">
            <div className="flex items-center justify-center gap-4">
                <SmoothLink
                    href="/#top"
                    className="hover:bg-gray-150 rounded-full border-2 border-gray-100 px-8 py-4 text-lg font-semibold shadow-lg transition-colors duration-300 hover:border-gray-300"
                >
                    Back to Top
                </SmoothLink>
                <Link
                    href="/blogs"
                    className="rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600"
                >
                    My Blog
                </Link>
            </div>
        </section>
    )
}
