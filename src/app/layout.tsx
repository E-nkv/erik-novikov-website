import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SmoothScrollAnchor from "../components/SmoothScrollAnchor"

const lato = Lato({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-lato",
})

export const metadata: Metadata = {
    title: "Erik Novikov - Portfolio",
    description: "Erik Novikov's personal portfolio website.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${lato.variable} scroll-smooth`}>
            <body >
                <Navbar />
                {children}
                
                <Footer />
                <SmoothScrollAnchor />
            </body>
        </html>
    )
}
