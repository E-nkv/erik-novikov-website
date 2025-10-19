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
        description: "A performant and easy to use CLI to download videos, music, reels, and even entire playlists for free.",
        skills: [{ name: "Go", icon: <Gopher className="size-5 inline-block" /> }],
    },
]

function ExternalLink({ className = "" }: { className?: string }) {
    return <img src={"/external-link.svg"} alt="" className={className ?? ""}></img>
}
function Gopher({ className = "" }: { className?: string }) {
    return <img src="/gopher.svg" className={className ?? "size-5 inline-block"} alt=""></img>
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
        <div className="bg-white shadow-2xl rounded-lg py-3">
            <h2 className="text-2xl font-semibold mb-2 text-center px-3">{project.title}</h2>
            <div className="relative md:h-[400px] md:w-[670px] mx-auto">
                <Image
                    src={project.img_url}
                    alt={`Image of ${project.title}`}
                    className="w-full h-full object-fit rounded-md "
                    width={1080}
                    height={720}
                />
            </div>

            <div className="pt-6 px-6 flex flex-col flex-grow text-md sm:text-lg">
                <p className="text-gray-700 mb-4">
                    <span className="font-semibold">What it is:</span> {project.description}
                </p>
                <div className="inline-flex gap-2">
                    <span className="font-semibold">Technologies used:</span>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {project.skills.map((skill, skillIndex) => (
                            <span
                                key={skillIndex}
                                className="px-3 py-1 bg-blue-50 text-gray-800 shadow-lg font-semibold text-sm rounded-full"
                            >
                                {skill.name} {skill.icon}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-5 ">
                    {project.github_url && (
                        <Link
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-6 py-2 border border-gray-600 text-gray-600 font-semibold rounded-full hover:bg-blue-100 hover:border-gray-800 hover:text-gray-800 transition-colors duration-300 w-[190px] sm:w-[205px]"
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
        <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
            <SmoothLink href="/#portfolio">
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-8">What I've built</h1>
            </SmoothLink>
            <div className="max-w-3xl mx-auto flex flex-col gap-10">
                <Project project={projects[0]} />
                {/* <Project project={projects[0]} /> */}
            </div>
        </section>
    )
}
