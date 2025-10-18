"use client"

import { useState } from "react"
import Link from "next/link"
import { LogoE } from "./LogoE"
import { SmoothLink } from "./SmoothLink"
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav id="top" className="bg-white py-2 sticky w-full z-10 top-0 shadow-md">
            <div className="flex justify-between items-center px-3 ">
                <LogoE />
                <div className="hidden sm:flex space-x-6">
                    <SmoothLink href="/#about" className="px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover">
                        About
                    </SmoothLink>
                    <SmoothLink href="/#portfolio" className="px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover">
                        Portfolio
                    </SmoothLink>
                    {/* <Link href="#resume" className="px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover">
                        Resume
                    </Link> */}
                    <SmoothLink href="/#contact" className="px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover">
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
                        <Menu />
                    </button>
                </div>
            </div>
            <div
                className={`sm:hidden fixed inset-y-0 right-0 bg-gray-100 bg-opacity-90 z-20 w-full transform transition-transform duration-500 ease-in-out flex justify-center items-center ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {isOpen && (
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 focus:outline-none">
                        <X className="size-14 p-2 bg-gray-300 rounded-full" />
                    </button>
                )}
                <div className="flex flex-col justify-between items-start h-[60%] text-gray-800 text-xl">
                    <SmoothLink
                        href="/#about"
                        className="uppercase rounded-xl font-bold text-4xl sm:text-6xl px-4 py-2 flex items-center gap-2 underline decoration-black decoration-solid decoration-2 py-4 px-7"
                        onClick={toggleMenu}
                    >
                        About <ArrowRight className="size-12 sm:size-14" />
                    </SmoothLink>
                    <SmoothLink
                        href="/#portfolio"
                        className="uppercase rounded-xl font-bold text-4xl sm:text-6xl px-4 py-2 flex items-center gap-2 underline decoration-black decoration-solid decoration-2 py-4 px-7"
                        onClick={toggleMenu}
                    >
                        Portfolio <ArrowRight className="size-12 sm:size-14" />
                    </SmoothLink>
                    <SmoothLink
                        href="/#contact"
                        className="uppercase rounded-xl font-bold text-4xl sm:text-6xl  flex items-center gap-2 underline decoration-black decoration-solid decoration-2 py-4 px-7 "
                        onClick={toggleMenu}
                    >
                        Contact <ArrowRight className="size-12 sm:size-14" />
                    </SmoothLink>
                    <a
                        href="https://github.com/E-nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase rounded-xl font-bold text-4xl sm:text-6xl flex items-center gap-2 underline decoration-black decoration-solid decoration-2 py-4 px-7"
                        onClick={toggleMenu}
                    >
                        GitHub <ExternalLink className="size-12 sm:size-14 inline-block" />
                    </a>
                </div>
            </div>
        </nav>
    )
}
