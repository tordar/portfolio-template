import React from 'react'
import Image from "next/image"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Skill = {
    name: string
    description: string
    imageUrl: string
    bgColor: string
}

const skills: Skill[] = [
    { name: "React", description: "Building interactive user interfaces with reusable components", imageUrl: "/img/React Logo.svg", bgColor: "bg-blue-100" },
    { name: "Next.js", description: "Creating server-side rendered and statically generated React applications", imageUrl: "/img/Next.js Logo.svg", bgColor: "bg-black" },
    { name: "TypeScript", description: "Enhancing JavaScript with static type definitions for improved development", imageUrl: "/img/TypeScript Logo.svg", bgColor: "bg-blue-100" },
    { name: "Tailwind CSS", description: "Rapidly building custom user interfaces with utility-first CSS", imageUrl: "/img/Tailwind Logo.svg", bgColor: "bg-teal-100" },
    { name: "Git", description: "Version control and collaboration for efficient project management", imageUrl: "/img/Git Logo.svg", bgColor: "bg-orange-100" },
    { name: "MongoDB", description: "Working with flexible, document-based NoSQL databases", imageUrl: "/img/MongoDB Logo.svg", bgColor: "bg-green-100" },
    { name: "Python", description: "Versatile programming for backend development and data analysis", imageUrl: "/img/Python Logo.svg", bgColor: "bg-yellow-100" },
    { name: "Vercel", description: "Deploying and scaling web applications with ease", imageUrl: "/img/Vercel Logo.svg", bgColor: "bg-black" },
    { name: "Azure", description: "Leveraging cloud services for scalable and reliable applications", imageUrl: "/img/Azure Logo.svg", bgColor: "bg-blue-100" }
]

const TechCard = ({ skill }: { skill: Skill }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex items-center gap-5 px-4 py-3 rounded-xl border border-border bg-card text-card-foreground shadow hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer">
                    <div className={`flex items-center justify-center w-16 h-16 ${skill.bgColor} rounded-lg`}>
                        <Image
                            src={skill.imageUrl}
                            width={32}
                            height={32}
                            alt={`${skill.name} logo`}
                            className={`w-8 h-8 ${(skill.name === "Next.js" || skill.name === "Vercel") ? "brightness-0 invert" : ""}`}
                        />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-medium">{skill.name}</h4>
                        <p className="text-muted-foreground text-sm">
                            {skill.description}
                        </p>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="space-y-2">
                    <h4 className="font-medium leading-none">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">
                        {skill.description}
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default function SkillsSection() {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
            <p className="text-muted-foreground mb-6">My preferred technologies for building web applications</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <TechCard key={index} skill={skill} />
                ))}
            </div>
        </section>
    )
}