"use client"

import React from "react"
import { Mail, Send } from "lucide-react"
import { SmoothLink } from "./SmoothLink"

export function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-16">
            <div className="mx-auto max-w-3xl">
                <SmoothLink href="/#contact">
                    <h2 className="mb-12 text-center text-4xl font-bold text-gray-800 sm:text-5xl">
                        Contact me ✌️
                    </h2>
                </SmoothLink>
                <div className="flex items-center justify-center gap-7 rounded-lg bg-white p-6 shadow-md">
                    <a
                        href="https://t.me/erik_nkv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-800 px-3 py-2 text-lg text-blue-600 hover:bg-gray-200 hover:text-blue-800"
                    >
                        Telegram <Send className="mr-2" />
                    </a>
                    <a
                        className="mb-4 flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-800 px-3 py-2 text-lg text-blue-600 hover:bg-gray-200 hover:text-blue-800"
                        href="mailto:erikrn24@gmail.com"
                    >
                        Email <Mail className="mr-2" />
                    </a>
                </div>
            </div>
        </section>
    )
}
