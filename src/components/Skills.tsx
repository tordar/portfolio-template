import React from 'react'
import Image from "next/image"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Skill = {
    name: string
    description: string
    imageUrl: string
}

const skills: Skill[] = [
    { name: "React", description: "Building interactive user interfaces with reusable components", imageUrl: "/img/React Logo.svg" },
    { name: "Next.js", description: "Creating server-side rendered and statically generated React applications", imageUrl: "/img/Next.js Logo.svg" },
    { name: "TypeScript", description: "Enhancing JavaScript with static type definitions for improved development", imageUrl: "/img/TypeScript Logo.svg" },
    { name: "Tailwind CSS", description: "Rapidly building custom user interfaces with utility-first CSS", imageUrl: "/img/Tailwind Logo.svg" },
    { name: "Git", description: "Version control and collaboration for efficient project management", imageUrl: "/img/Git Logo.svg" },
    { name: "MongoDB", description: "Working with flexible, document-based NoSQL databases", imageUrl: "/img/MongoDB Logo.svg" },
    { name: "Python", description: "Favorite language for making simple scripts, and data cleaning", imageUrl: "/img/Python Logo.svg" },
    { name: "Vercel", description: "Deploying and scaling web applications with ease", imageUrl: "/img/Vercel Logo.svg" },
    { name: "Azure", description: "Using cloud services for large enterprise applications and serverless architecture", imageUrl: "/img/Azure Logo.svg" }
]

const TechTile = ({ skill }: { skill: Skill }) => {
    // Handle white logos (Next.js and Vercel)
    const isWhiteLogo = skill.name === "Next.js" || skill.name === "Vercel";
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex items-center justify-center aspect-square bg-slate-100 dark:bg-slate-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 border border-border rounded-lg shadow hover:shadow-md hover:bg-accent transition-all duration-200 cursor-pointer p-4 md:p-6">
                    <Image
                        src={skill.imageUrl}
                        width={64}
                        height={64}
                        alt={`${skill.name} logo`}
                        className={`w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 ${isWhiteLogo ? "dark:brightness-0 dark:invert" : ""}`}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 backdrop-blur-sm bg-opacity-90 border-border">
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
            <p className="text-muted-foreground mb-4">Preferred technologies when building new things</p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <TechTile key={index} skill={skill}/>
                ))}
            </div>
        </section>
    )
} 