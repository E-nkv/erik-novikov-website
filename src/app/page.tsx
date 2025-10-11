'use client'

import React, { JSX } from "react"
import Image from "next/image"
import Footer from "@/components/Footer"


export default function Home() {
    return (
        <main className="">
            <Hero />
            <Portfolio />
            
        </main>
    )
}

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
    return <img src="/gopher.svg" className={className ?? ""} alt=""></img>
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
                <img src={project.img_url} alt={`Image of ${project.title}`} className="w-full h-full object-fit rounded-xl "/>
            </div>
            
            <div className="pt-6 px-6 flex flex-col flex-grow">
                <p className="text-gray-700 mb-4">
                    <span className="font-semibold">What it is:</span> {project.description}
                </p>
                <div className="inline-flex gap-2">
                    <span className="font-semibold">Technologies used:</span>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {project.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-900 text-sm font-medium rounded-full">
                                {skill.name} {skill.icon}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-5 ">
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-6 pb-2 border border-gray-600 text-gray-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 w-[190px]"
                        >
                            <p>View on GitHub</p>
                            <ExternalLink className="size-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
function Portfolio() {
    return (
        <div id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-12">What I've built</h1>
            <div className="max-w-3xl mx-auto">
                <Project project={projects[0]} />
            </div>
        </div>
    )
}

function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
            <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
                    Hi <span className="waving-hand inline-block">👋</span>! My name is
                </h1>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-blue-500 leading-tight whitespace-nowrap my-4">
                    Erik Novikov.
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight whitespace-nowrap">
                    I'm a software engineer.
                </p>
            </div>
            <a
                href="#portfolio"
                className="mt-8 px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                View Portfolio
            </a>
        </section>
    )
}
