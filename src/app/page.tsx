"use client"

import React, { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { Portfolio } from "@/components/Portfolio"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { ScrollHashUpdater } from "@/components/ScrollHashUpdater"

export default function Home() {
    const sectionsToTrack = ["top", "about", "portfolio", "contact"]

    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Contact />

            <ScrollHashUpdater sectionIds={sectionsToTrack} />
        </>
    )
}
