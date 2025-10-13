"use client"
import React from "react"
import { JSX } from "react"
import {
    GoIcon,
    JSIcon,
    TypescriptIcon,
    CIcon,
    JavaIcon,
    HTML5Icon,
    CSS3Icon,
    ReactIcon,
    TailwindcssIcon,
    ShadcnIcon,
    TanstackIcon,
    NextjsIcon,
    NodejsIcon,
    ExpressIcon,
    NestIcon,
    PostgresqlIcon,
    MysqlIcon,
    MongodbIcon,
    DynamoDBIcon,
    RedisIcon,
    Sqlite3Icon,
    JestIcon,
    GotestIcon,
    GitIcon,
    DockerIcon,
    GithubActionsIcon,
    ViteIcon,
    DrizzleIcon,
    GithubIcon,
} from "./icons"
import Link from "next/link"

export function About() {
    return (
        <section id="about" className="pb-10 pt-16 px-5 sm:px-7 lg:px-9">
            {/* About me text */}
            <div className="max-w-[70ch] mx-auto">
                <Link href="/#about" scroll={true}>
                    <h1 id="about" className="text-4xl font-bold text-center mb-12">
                        About Me
                    </h1>
                </Link>
                <div className="text-lg text-gray-700 leading-relaxed">
                    <p className="mb-4">
                        Hello there! I'm Erik, a software engineer and fullstack web developer based in Valencia, Spain. My passion for
                        problem-solving began in childhood, leading to victories in chess and physics competitions. This drive evolved
                        through university, where I honed my skills in Competitive Programming, participating in{" "}
                        <span className="whitespace-nowrap">(and winning 😉),</span> multiple university-level programming contests.
                    </p>
                    <p className="">
                        After studying software engineering at university, I continued to expand my expertise by self-learning modern
                        technologies and applying them, both in personal and{" "}
                        <strong className="mr-[1px]">
                            <i> professional </i>
                        </strong>
                        settings. I can say that becoming a software engineer has been one of the best decisions I've ever made, since it
                        has allowed me to work on things I love: solving complex challenges, learning and improving continuously, delivering
                        impactful solutions, and becoming a better person.
                    </p>
                </div>
            </div>
            {/* Skills */}
            <div className="">
                <h2 className="text-3xl font-bold text-center mt-16 mb-10">My skills</h2>
                <div className="flex justify-center">
                    <CategoryList />
                </div>
            </div>
        </section>
    )
}

function CategoryList() {
    return (
        <div className="flex flex-col gap-x-7 gap-y-10 md:flex-row justify-center max-w-[70%]  flex-wrap">
            <Category name="Programming Languages">
                <ul className="flex flex-wrap gap-2 px-5 items-center justify-center">
                    <li className="ul-li-icon">
                        Go <GoIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Typescript <TypescriptIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Java <TypescriptIcon className="size-5 inline-block ml-1" />
                    </li>
                </ul>
            </Category>
            <Category name="Frontend">
                <ul className="flex flex-wrap gap-2 px-5 items-center justify-center">
                    <li className="ul-li-icon">
                        HTML5 <HTML5Icon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        CSS3 <CSS3Icon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Javascript <JSIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        React <ReactIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Tailwind <TailwindcssIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Vite <ViteIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Tanstack <TanstackIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Shadcn <ShadcnIcon className="size-5 inline-block ml-1" />
                    </li>
                </ul>
            </Category>
            <Category name="Backend">
                <ul className="flex flex-wrap gap-2 px-5 items-center justify-center">
                    <li className="ul-li-icon">
                        Go <GoIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Node <NodejsIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Express <ExpressIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Nest <NestIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        DrizzleORM <DrizzleIcon className="size-5 inline-block ml-1" />
                    </li>
                </ul>
            </Category>
            <Category name="Databases">
                <ul className="flex flex-wrap gap-2 px-5 items-center justify-center">
                    <li className="ul-li-icon">
                        Postgres <PostgresqlIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Mysql <MysqlIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Mongodb <MongodbIcon className="size-5 inline-block ml-1" />
                    </li>
                    <li className="ul-li-icon">
                        Redis <RedisIcon className="size-5 inline-block ml-1" />
                    </li>
                </ul>
            </Category>
            <Category name="Other">
                <ul className="flex flex-wrap gap-2 px-5 items-center justify-center">
                    <li className="flex gap-2 items-center">
                        <span className="font-semibold whitespace-nowrap">Version Control and CI/CD: </span>
                        <div className="flex items-center gap-2">
                            <GitIcon />
                            <GithubIcon />
                        </div>
                    </li>
                </ul>
            </Category>
            <Category name="Soft Skills"></Category>
        </div>
    )
}
function Category({ children, name }: { children?: React.ReactNode; name: string }) {
    return (
        <div className="w-[min(400px,80vw)] shadow-xl flex flex-col">
            <h3 className="text-md font-semibold text-white bg-gray-900 rounded-t-lg text-center px-2 py-[2px]">{name}</h3>
            <div className="px-3 py-5 mx-auto h-full flex justify-center items-center ">{children}</div>
        </div>
    )
}
