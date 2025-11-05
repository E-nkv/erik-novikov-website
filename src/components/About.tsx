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
    AWSIcon,
} from "./icons"
import Link from "next/link"
import { SmoothLink } from "./SmoothLink"

export function About() {
    return (
        <section id="about" className="px-5 pt-16 pb-10 sm:px-7 lg:px-9">
            {/* About me text */}
            <div className="mx-auto max-w-[70ch]">
                <SmoothLink href="/#about">
                    <h1
                        id="about"
                        className="whitespace-nowraptext-center mb-12 text-center text-3xl leading-tight font-bold sm:text-5xl lg:text-6xl"
                    >
                        About Me
                    </h1>
                </SmoothLink>
                <div className="text-lg leading-relaxed text-gray-700 lg:text-xl">
                    <p className="mb-4">
                        Hello there! I'm Erik, a software engineer and fullstack web developer,
                        currently based in Valencia, Spain. My passion for problem-solving began in
                        childhood, leading to victories in chess and physics competitions. This
                        drive evolved through university, where I honed my skills in Competitive
                        Programming, participating in{" "}
                        <span className="whitespace-nowrap">(and winning 😉),</span> multiple
                        university-level programming contests.
                    </p>
                    <p className="">
                        After studying software engineering at university, I continued to expand my
                        expertise by self-learning modern technologies and applying them, both in
                        personal and{" "}
                        <strong className="mr-[1px]">
                            <i> professional </i>
                        </strong>
                        settings. I can say that becoming a software engineer has been one of the
                        best decisions I've ever made, since it has allowed me to work on things I
                        love: solving complex challenges, learning and improving continuously,
                        delivering impactful solutions, and becoming a better person.
                    </p>
                </div>
            </div>
            {/* Skills */}
            <div className="">
                <h2 className="mt-16 mb-10 text-center text-3xl font-bold sm:text-5xl lg:text-6xl">
                    My skills
                </h2>
                <div className="flex justify-center">
                    <CategoryList />
                </div>
            </div>
        </section>
    )
}

function CategoryList() {
    return (
        <div className="flex max-w-[85%] flex-col flex-wrap justify-center gap-x-7 gap-y-10 sm:max-w-[70%] md:flex-row">
            <Category name="Programming Languages">
                <ul className="flex flex-wrap items-center justify-center gap-2 px-5">
                    <li className="ul-li-icon">
                        Go <GoIcon className="inline-block size-5" />
                    </li>

                    <li className="ul-li-icon">
                        Typescript <TypescriptIcon className="inline-block size-5" />
                    </li>
                    {/* <li className="ul-li-icon">
                        Java <JavaIcon className="size-5 inline-block" />
                    </li> */}
                </ul>
            </Category>
            <Category name="Frontend">
                <ul className="flex flex-wrap items-center justify-center gap-2 px-5">
                    <li className="ul-li-icon">
                        HTML5 <HTML5Icon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        CSS3 <CSS3Icon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Javascript <JSIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        React <ReactIcon className="inline-block size-5 brightness-75 filter" />
                    </li>
                    <li className="ul-li-icon">
                        Tailwind <TailwindcssIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Vite <ViteIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Tanstack <TanstackIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Shadcn <ShadcnIcon className="inline-block size-5" />
                    </li>
                </ul>
            </Category>
            <Category name="Backend">
                <ul className="flex flex-wrap items-center justify-center gap-2 px-5">
                    <li className="ul-li-icon">
                        Go <GoIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        <NodejsIcon className="inline-block h-6 w-16" />
                    </li>
                    <li className="ul-li-icon">
                        Express <ExpressIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Nest <NestIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        DrizzleORM <DrizzleIcon className="inline-block size-5" />
                    </li>
                </ul>
            </Category>
            <Category name="Databases">
                <ul className="flex flex-wrap items-center justify-center gap-2 px-5">
                    <li className="ul-li-icon">
                        Postgres <PostgresqlIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Mysql <MysqlIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Mongodb <MongodbIcon className="inline-block size-5" />
                    </li>
                    <li className="ul-li-icon">
                        Redis <RedisIcon className="inline-block size-5" />
                    </li>
                </ul>
            </Category>
            <Category name="Other">
                <ul className="flex list-outside list-disc flex-col gap-2 px-5">
                    <li className="list-item">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold whitespace-nowrap">VC and CI/CD: </span>
                            <GitIcon className="size-6" />
                            <GithubIcon className="size-6" />
                        </div>
                    </li>
                    <li className="list-item">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold whitespace-nowrap">
                                Containerization:{" "}
                            </span>
                            <DockerIcon className="inline-block size-6" />
                        </div>
                    </li>
                    <li className="list-item">
                        <p>
                            <span className="font-semibold">Cloud Technologies: </span>
                            Experience in the design and development of highly performant, scalable
                            and cost-effective cloud solutions with
                            <AWSIcon className="mx-1 inline-block size-6 align-middle" /> (including
                            key services like EC2, S3, Lambda Functions, SQS, RDS, etc).
                        </p>
                    </li>
                    <li className="list-item">
                        <p>
                            <span className="font-semibold">Development methodologies: </span>
                            Experience with Agile (Scrum and Kanban), Test-Driven Development (TDD),
                            and familiarity in traditional ones (Waterfall).
                        </p>
                    </li>
                </ul>
            </Category>
            <Category name="Soft Skills">
                <ul className="flex list-outside list-disc flex-col gap-2 px-5">
                    <li className="list-item">
                        Effective communicator in both{" "}
                        <span className="font-semibold">English</span> (professional) and
                        <span className="font-semibold"> Spanish</span> (native).
                    </li>
                    <li className="list-item">
                        Proven experience collaborating in a multi-national team.
                    </li>
                    <li>
                        Strong work ethic, self-motivated, able to work independently, can adapt
                        with ease to fast-paced environments.
                    </li>
                </ul>
            </Category>
        </div>
    )
}
function Category({ children, name }: { children?: React.ReactNode; name: string }) {
    return (
        <div className="flex w-[min(400px,80vw)] flex-col rounded-lg border border-gray-300 shadow-xl transition-transform duration-500 hover:scale-110">
            <h3 className="rounded-t-lg bg-gray-900 px-2 py-[2px] text-center text-lg font-semibold text-white lg:text-xl">
                {name}
            </h3>
            <div className="mx-auto flex h-full justify-center px-3 py-5">{children}</div>
        </div>
    )
}
