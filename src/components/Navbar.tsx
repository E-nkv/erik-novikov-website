"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogoE } from "./LogoE"
import { SmoothLink } from "./SmoothLink"
import { ArrowRight, ExternalLinkIcon, Menu as MenuIcon, X as XIcon } from "lucide-react"
import { ScrollHashUpdater } from "./ScrollHashUpdater"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const sectionIds = ["top", "about", "portfolio", "contact"]

    return (
        <nav id="top" className="sticky top-0 z-10 w-full bg-white py-2 shadow-md">
            <ScrollHashUpdater sectionIds={sectionIds} />
            <div className="flex items-center justify-between px-3">
                <LogoE />
                <div className="hidden space-x-6 sm:flex">
                    <Link
                        href="/blogs"
                        className="nav-link-hover px-2 py-2 text-gray-800 uppercase hover:text-blue-500"
                    >
                        Blog
                    </Link>
                    <SmoothLink
                        href="/#about"
                        className={`nav-link-hover px-2 py-2 text-gray-800 uppercase hover:text-blue-500`}
                    >
                        About
                    </SmoothLink>
                    {/* <SmoothLink
                        href="/#portfolio"
                        className={`nav-link-hover px-2 py-2 text-gray-800 uppercase hover:text-blue-500`}
                    >
                        Portfolio
                    </SmoothLink> */}

                    <SmoothLink
                        href="/#contact"
                        className={`nav-link-hover px-2 py-2 text-gray-800 uppercase hover:text-blue-500`}
                    >
                        Contact
                    </SmoothLink>
                    <a
                        href="https://github.com/E-nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link-hover p-2 text-gray-800 uppercase hover:text-blue-500"
                    >
                        GitHub
                    </a>
                </div>
                <div className="flex items-center sm:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        {!isOpen && (
                            <MenuIcon className="h-6 w-6 transition-transform duration-500 ease-in-out" />
                        )}
                    </button>
                </div>
            </div>
            {isOpen && <div className="fixed inset-0 z-40 w-full" onClick={toggleMenu}></div>}
            <div
                className={`fixed inset-y-0 right-0 z-50 flex w-full transform flex-col items-center bg-white p-4 transition-transform duration-500 ease-in-out sm:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                suppressHydrationWarning
            >
                {isOpen && (
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                    >
                        <XIcon className="size-14 rounded-full bg-gray-200 p-2" />
                    </button>
                )}
                <div
                    className="mt-16 flex flex-col space-y-12 text-xl text-gray-800"
                    suppressHydrationWarning
                >
                    <Link
                        href="/blogs"
                        className="flex items-center text-4xl font-bold uppercase sm:text-5xl"
                        onClick={toggleMenu}
                        suppressHydrationWarning
                    >
                        Blog <ExternalLinkIcon className="ml-3 inline-block size-10" />
                    </Link>
                    <SmoothLink
                        href="#about"
                        className="flex items-center text-4xl font-bold uppercase sm:text-5xl"
                        onClick={toggleMenu}
                    >
                        About <ArrowRight className="ml-2 inline-block size-10" />
                    </SmoothLink>
                    {/* <SmoothLink
                        href="#portfolio"
                        className="flex items-center text-4xl font-bold uppercase sm:text-5xl"
                        onClick={toggleMenu}
                    >
                        Portfolio <ArrowRight className="ml-2 inline-block size-10" />
                    </SmoothLink> */}

                    <SmoothLink
                        href="/#contact"
                        className="flex items-center text-4xl font-bold uppercase sm:text-5xl"
                        onClick={toggleMenu}
                    >
                        Contact <ArrowRight className="ml-2 inline-block size-10" />
                    </SmoothLink>
                    <a
                        href="https://github.com/E-nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-4xl font-bold uppercase sm:text-5xl"
                        onClick={toggleMenu}
                    >
                        GitHub <ExternalLinkIcon className="ml-3 inline-block size-10" />
                    </a>
                </div>
            </div>
        </nav>
    )
}
