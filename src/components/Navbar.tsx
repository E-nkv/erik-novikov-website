"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogoE } from "./LogoE"
import { SmoothLink } from "./SmoothLink"
import { Menu as MenuIcon, X as XIcon } from "lucide-react"
import { ScrollHashUpdater } from "./ScrollHashUpdater"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeHash, setActiveHash] = useState("")

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleHashChange = (hash: string) => {
        setActiveHash(hash)
    }

    const sectionIds = ["top", "about", "portfolio", "contact"]

    return (
        <nav id="top" className="bg-white py-2 sticky w-full z-10 top-0 shadow-md">
            <ScrollHashUpdater sectionIds={sectionIds} />
            <div className="flex justify-between items-center px-3 ">
                <LogoE />
                <div className="hidden sm:flex space-x-6">
                    <SmoothLink
                        href="/#about"
                        className={`px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover ${
                            activeHash === "#about" ? "nav-link-active" : ""
                        }`}
                    >
                        About
                    </SmoothLink>
                    <SmoothLink
                        href="/#portfolio"
                        className={`px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover ${
                            activeHash === "#portfolio" ? "nav-link-active" : ""
                        }`}
                    >
                        Portfolio
                    </SmoothLink>
                    {/* <Link href="#resume" className="px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover">
                        Resume
                    </Link> */}
                    <SmoothLink
                        href="/#contact"
                        className={`px-2 py-2 text-gray-800 hover:text-blue-500 uppercase nav-link-hover ${
                            activeHash === "#contact" ? "nav-link-active" : ""
                        }`}
                    >
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
                        {isOpen ? (
                            <XIcon className="w-6 h-6 transition-transform duration-500 ease-in-out" />
                        ) : (
                            <MenuIcon className="w-6 h-6 transition-transform duration-500 ease-in-out" />
                        )}
                    </button>
                </div>
            </div>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-75 z-40" onClick={toggleMenu}></div>}
            <div
                className={`sm:hidden fixed inset-y-0 right-0 bg-white z-50 w-[calc(100%-32px)] sm:w-4/5 transform transition-transform duration-500 ease-in-out flex flex-col items-start p-4 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 focus:outline-none">
                    <XIcon className="w-6 h-6" />
                </button>
                <div className="flex flex-col space-y-4 text-gray-800 text-xl mt-16">
                    <Link href="#about" className="hover:text-blue-500 uppercase nav-link-hover" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="#portfolio" className="hover:text-blue-500 uppercase nav-link-hover" onClick={toggleMenu}>
                        Portfolio
                    </Link>
                    <Link href="#contact" className="hover:text-blue-500 uppercase nav-link-hover" onClick={toggleMenu}>
                        Contact
                    </Link>
                    <a
                        href="https://github.com/E-nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 uppercase nav-link-hover"
                        onClick={toggleMenu}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    )
}
