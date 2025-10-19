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
        <nav id="top" className="bg-white py-2 sticky w-full z-10 top-0 shadow-md">
            <ScrollHashUpdater sectionIds={sectionIds} />
            <div className="flex justify-between items-center px-3 ">
                <LogoE />
                <div className="hidden sm:flex space-x-6">
                    <SmoothLink href="/#about" className={`px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover `}>
                        About
                    </SmoothLink>
                    <SmoothLink href="/#portfolio" className={`px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover`}>
                        Portfolio
                    </SmoothLink>
                    {/* <Link href="#resume" className="px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover">
                        Resume
                    </Link> */}
                    <SmoothLink href="/#contact" className={`px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover`}>
                        Contact
                    </SmoothLink>
                    <a
                        href="https://github.com/E-nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover"
                    >
                        GitHub
                    </a>
                </div>
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        {!isOpen && <MenuIcon className="w-6 h-6 transition-transform duration-500 ease-in-out" />}
                    </button>
                </div>
            </div>
            {isOpen && <div className="fixed inset-0 w-full z-40" onClick={toggleMenu}></div>}
            <div
                className={`sm:hidden fixed inset-y-0 right-0 bg-white z-50 w-full transform transition-transform duration-500 ease-in-out flex flex-col items-center p-4 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {isOpen && (
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 focus:outline-none">
                        <XIcon className="size-14 p-2 bg-gray-200 rounded-full" />
                    </button>
                )}
                <div className="flex flex-col space-y-12 text-gray-800 text-xl mt-16 ">
                    <SmoothLink href="#about" className="uppercase text-4xl sm:text-5xl font-bold flex items-center" onClick={toggleMenu}>
                        About <ArrowRight className="inline-block ml-2 size-10" />
                    </SmoothLink>
                    <SmoothLink
                        href="#portfolio"
                        className="uppercase text-4xl sm:text-5xl font-bold flex items-center"
                        onClick={toggleMenu}
                    >
                        Portfolio <ArrowRight className="inline-block ml-2 size-10" />
                    </SmoothLink>
                    <SmoothLink
                        href="/#contact"
                        className="uppercase text-4xl sm:text-5xl font-bold flex items-center"
                        onClick={toggleMenu}
                    >
                        Contact <ArrowRight className="inline-block ml-2 size-10" />
                    </SmoothLink>
                    <a
                        href="https://github.com/E-nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase text-4xl sm:text-5xl font-bold flex items-center"
                        onClick={toggleMenu}
                    >
                        GitHub <ExternalLinkIcon className="inline-block ml-2 size-10" />
                    </a>
                </div>
            </div>
        </nav>
    )
}
