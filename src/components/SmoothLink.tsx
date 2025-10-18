import Link from "next/link"

function getIdFromHref(href: string): string {
    if (href.startsWith("/#")) {
        return href.slice(2)
    }
    throw new Error("Unsupported href format. Should start with /#")
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
    return (
        <Link
            className={className}
            href={href}
            onClick={(e) => {
                e.preventDefault()
                if (onClick) {
                    onClick()
                }
                const elementID = getIdFromHref(href)
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
