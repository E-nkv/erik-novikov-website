"use client"
import Link from "next/link"
import { JSX } from "react"
import Image from "next/image"
import { SmoothLink } from "./SmoothLink"

const projects: Project[] = [
    {
        title: "Vidder CLI",
        img_url: "/vidder2.jpg",
        github_url: "https://github.com/E-nkv/vidder",
        description:
            "A performant and easy to use CLI to download videos, music, reels, and even entire playlists for free.",
        skills: [{ name: "Go", icon: <Gopher className="inline-block size-5" /> }],
    },
]

function ExternalLink({ className = "" }: { className?: string }) {
    return <img src={"/external-link.svg"} alt="" className={className ?? ""}></img>
}
function Gopher({ className = "" }: { className?: string }) {
    return <img src="/gopher.svg" className={className ?? "inline-block size-5"} alt=""></img>
}
interface Project {
    title: string
    img_url: string
    github_url?: string
    description: string
    skills: {
        name: string
        icon?: JSX.Element
    }[]
}
function Project({ project }: { project: Project }) {
    return (
        <div className="rounded-lg bg-white py-3 shadow-2xl">
            <h2 className="mb-2 px-3 text-center text-2xl font-semibold">{project.title}</h2>
            <div className="relative mx-auto md:h-[400px] md:w-[670px]">
                <Image
                    src={project.img_url}
                    alt={`Image of ${project.title}`}
                    className="object-fit h-full w-full rounded-md"
                    width={1080}
                    height={720}
                />
            </div>

            <div className="text-md flex flex-grow flex-col px-6 pt-6 sm:text-lg">
                <p className="mb-4 text-gray-700">
                    <span className="font-semibold">What it is:</span> {project.description}
                </p>
                <div className="inline-flex gap-2">
                    <span className="font-semibold">Technologies used:</span>
                    <div className="mb-4 flex flex-wrap gap-3">
                        {project.skills.map((skill, skillIndex) => (
                            <span
                                key={skillIndex}
                                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-gray-800 shadow-lg"
                            >
                                {skill.name} {skill.icon}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-5">
                    {project.github_url && (
                        <Link
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-[190px] items-center justify-between rounded-full border border-gray-600 px-6 py-2 font-semibold text-gray-600 transition-colors duration-300 hover:border-gray-800 hover:bg-blue-100 hover:text-gray-800 sm:w-[205px]"
                        >
                            <p className="whitespace-nowrap">View on GitHub</p>
                            <ExternalLink className="size-5" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
export function Portfolio() {
    return (
        <section id="portfolio" className="px-4 py-16 sm:px-6 lg:px-8">
            <SmoothLink href="/#portfolio">
                <h1 className="mb-12 text-center text-4xl font-bold sm:mb-8 sm:text-5xl">
                    What I've built
                </h1>
            </SmoothLink>
            <div className="mx-auto flex max-w-3xl flex-col gap-10">
                <Project project={projects[0]} />
                {/* <Project project={projects[0]} /> */}
            </div>
        </section>
    )
}
