"use client"

import { useState } from "react"
import Link from "next/link"
import { LogoE } from "./LogoE"
import { SmoothLink } from "./SmoothLink"

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
                className={`sm:hidden fixed inset-y-0 right-0 bg-gray-200 bg-opacity-90 z-20 w-full max-w-xs transform transition-transform duration-500 ease-in-out flex justify-center items-center ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 focus:outline-none">
                    <Menu />
                </button>
                <div className="flex flex-col space-y-4 text-gray-800 text-xl">
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

function Menu() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    )
}
