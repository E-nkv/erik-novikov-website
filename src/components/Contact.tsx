"use client"

import React from "react"
import { Mail, Send } from "lucide-react"
import { SmoothLink } from "./SmoothLink"

export function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="max-w-3xl mx-auto">
                <SmoothLink href="/#contact">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">Contact me ✌️</h2>
                </SmoothLink>
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md gap-7">
                    <a
                        href="https://t.me/erik_nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-lg mb-4 flex gap-2 items-center px-3 py-2 rounded-lg border-gray-800 border-2 hover:bg-gray-200 cursor-pointer"
                    >
                        Telegram <Send className="mr-2" />
                    </a>
                    <a
                        className="text-blue-600 hover:text-blue-800 text-lg mb-4 flex gap-2 items-center px-3 py-2 rounded-lg border-gray-800 border-2 hover:bg-gray-200 cursor-pointer"
                        href="mailto:erikrn24@gmail.com"
                    >
                        Email <Mail className="mr-2" />
                    </a>
                </div>
            </div>
        </section>
    )
}
