import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const lato = Lato({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-lato",
})

export const metadata: Metadata = {
    title: "Erik Novikov",
    description: "Erik Novikov's personal portfolio website as software engineer.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${lato.variable} scroll-smooth`}>
            <head>
                <link rel="icon" href="/e.svg" type="image/svg+xml" />
            </head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <body className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
