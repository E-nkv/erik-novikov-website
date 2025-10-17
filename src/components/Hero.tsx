"use client"
import Link from "next/link"

export function Hero() {
    return (
        <section id="top" className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
            <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
                    Hi <span className="waving-hand inline-block">👋</span>! My name is
                </h1>
                <h2 className="text-5xl sm:text-8xl lg:text-8xl font-extrabold text-blue-500 leading-tight whitespace-nowrap my-4">
                    Erik Novikov.
                </h2>
                <p className="text-2xl sm:text-2xl  lg:text-4xl font-medium leading-tight whitespace-nowrap">I'm a software engineer.</p>
            </div>
            <Link
                href="#portfolio"
                className="mt-8 px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
            >
                View Portfolio
            </Link>
        </section>
    )
}
