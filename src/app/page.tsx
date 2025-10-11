'use client'

import React, { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { Portfolio } from "@/components/Portfolio"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"


export default function Home() {
    return (
        <main>
            <Hero />
            <Portfolio />
            <About/>
        </main>
    )
}



