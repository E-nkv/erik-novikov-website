import { cn } from "@/lib/utils"
import { useState } from "react"

export function LogoE({ className }: { className?: string }) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <div
            className={cn(
                "size-10 relative flex items-center justify-center text-xl font-bold transition-colors duration-300 ease-in-out hover:bg-blue-400 select-none cursor-pointer",
                isClicked ? "bg-blue-400" : "bg-gray-100",
                className
            )}
            style={{
                borderRadius: "0px 30% 0% 30%",
                boxShadow: "0 0 0 3px black",
            }}
            onClick={handleClick}
        >
            E
        </div>
    )
}
