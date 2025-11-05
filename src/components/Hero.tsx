"use client"
import Link from "next/link"
import { SmoothLink } from "./SmoothLink"

export function Hero() {
    return (
        <section
            id="top"
            className="flex min-h-[90vh] flex-col items-center justify-center px-4 text-center"
        >
            <div className="max-w-4xl">
                <h1 className="text-3xl leading-tight font-bold whitespace-nowrap sm:text-5xl lg:text-6xl">
                    Hi <span className="waving-hand inline-block">👋</span>! My name is
                </h1>
                <h2 className="my-4 text-5xl leading-tight font-extrabold whitespace-nowrap text-blue-500 sm:text-8xl lg:text-9xl">
                    Erik Novikov.
                </h2>
                <p className="text-2xl leading-tight font-medium whitespace-nowrap sm:text-2xl lg:text-4xl">
                    I'm a software engineer.
                </p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <SmoothLink
                    href="/#about"
                    className="mt-8 rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600"
                >
                    About me
                </SmoothLink>
                <Link
                    href="/blogs"
                    className="hover:bg-gray-150 mt-8 rounded-full border-2 border-gray-100 px-8 py-4 text-lg font-semibold shadow-lg transition-colors duration-300 hover:border-gray-300"
                >
                    My Blog
                </Link>
            </div>
        </section>
    )
}
