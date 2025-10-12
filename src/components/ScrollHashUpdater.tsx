"use client"

import React, { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

interface ScrollHashUpdaterProps {
    sectionIds: string[]
}

export function ScrollHashUpdater({ sectionIds }: ScrollHashUpdaterProps) {
    const pathname = usePathname()
    const activeSectionIdRef = useRef<string>("")

    useEffect(() => {
        const handleScroll = () => {
            let currentActive = ""
            let maxVisibleArea = 0

            sectionIds.forEach((id) => {
                const section = document.getElementById(id)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    const viewportHeight = window.innerHeight || document.documentElement.clientHeight

                    const visibleTop = Math.max(0, rect.top)
                    const visibleBottom = Math.min(viewportHeight, rect.bottom)
                    const visibleHeight = visibleBottom - visibleTop

                    if (visibleHeight > 0 && visibleHeight > maxVisibleArea) {
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            currentActive = id
                            maxVisibleArea = visibleHeight
                        } else if (rect.top > 100 && rect.top < viewportHeight / 2) {
                            currentActive = id
                            maxVisibleArea = visibleHeight
                        }
                    }
                }
            })

            if (currentActive && currentActive !== activeSectionIdRef.current) {
                activeSectionIdRef.current = currentActive
                window.history.replaceState(null, "", `${pathname}#${currentActive}`)
            } else if (!currentActive && activeSectionIdRef.current) {
                activeSectionIdRef.current = ""
                window.history.replaceState(null, "", pathname)
            }
        }

        let timeoutId: NodeJS.Timeout | null = null
        const debouncedHandleScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(handleScroll, 30)
        }

        window.addEventListener("scroll", debouncedHandleScroll)

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [sectionIds, pathname])

    return null
}
