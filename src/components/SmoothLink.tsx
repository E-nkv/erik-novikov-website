"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function getIdFromHref(href: string): string {
    if (href.startsWith("#")) {
        return href.slice(1)
    }
    if (href.startsWith("/#")) {
        return href.slice(2)
    }
    return ""
}
export function SmoothLink({
    href,
    children,
    className,
    style,
    onClick,
}: {
    href: string
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    onClick?: () => void
}) {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    const isHash = href.startsWith("#") || href.startsWith("/#")
    const normalizedHref = href.startsWith("#") ? `/${href}` : href
    // During SSR, use the original href to avoid hydration mismatch
    const finalHref = mounted && pathname !== "/" && isHash ? normalizedHref : href
    
    return (
        <Link
            className={className}
            href={finalHref}
            onClick={(e) => {
                // Only intercept for smooth in-page navigation when on the home page
                if (!(isHash && pathname === "/")) return
                e.preventDefault()
                if (onClick) {
                    onClick()
                }
                const elementID = getIdFromHref(href)
                if (!elementID) return
                if (elementID === "top") {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    window.history.pushState(null, "", href)
                } else {
                    const el = document.getElementById(elementID)
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" })
                        window.history.pushState(null, "", href)
                    }
                }
            }}
            style={style}
        >
            {children}
        </Link>
    )
}
