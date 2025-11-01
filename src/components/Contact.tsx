"use client"

import React from "react"
import { Mail, Send, MessageCircle } from "lucide-react"
import { SmoothLink } from "./SmoothLink"
import { GmailIcon, TelegramIcon, WhatsappIcon } from "./icons"

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
                        Telegram <TelegramIcon className="size-7" />
                    </a>
                    <a
                        className="mb-4 flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-800 px-3 py-2 text-lg text-blue-600 hover:bg-gray-200 hover:text-blue-800"
                        href="mailto:erikrn24@gmail.com"
                    >
                        Email <GmailIcon className="size-7" />
                    </a>
                    <a
                        href="https://wa.me/34722258905"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-800 px-3 py-1 text-lg text-blue-600 hover:bg-gray-200 hover:text-blue-800"
                    >
                        Whatsapp <WhatsappIcon className="size-9" />
                    </a>
                </div>
            </div>
        </section>
    )
}
