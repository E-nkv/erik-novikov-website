import { cn } from "@/lib/utils"
import { SmoothLink } from "./SmoothLink"

export function LogoE({ className }: { className?: string }) {
    return (
        <SmoothLink
            className={cn(
                "size-10 relative flex items-center justify-center text-xl font-bold transition-colors duration-300 ease-in-out hover:bg-blue-400 select-none cursor-pointer",
                className
            )}
            style={{
                borderRadius: "0px 30% 0% 30%",
                boxShadow: "0 0 0 3px black",
            }}
            href="/#top"
        >
            E
        </SmoothLink>
    )
}
