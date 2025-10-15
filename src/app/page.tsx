"use client"

import React, { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { Portfolio } from "@/components/Portfolio"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { ScrollHashUpdater } from "@/components/ScrollHashUpdater"

export default function Home() {
    const sectionsToTrack = ["top", "portfolio", "about", "contact"]

    return (
        <main>
            <Hero />
            <Portfolio />
            <About />

            <ScrollHashUpdater sectionIds={sectionsToTrack} />
        </main>
    )
}
