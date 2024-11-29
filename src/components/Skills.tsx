import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Skill = {
    name: string
    description: string
}

type SkillCategory = {
    name: string
    description: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend",
        description: "Building responsive and interactive user interfaces",
        skills: [
            { name: "React", description: "Preferred framework for creating user interfaces" },
            { name: "Next.js", description: "Creating server-side rendered and statically generated React applications" },
            { name: "JavaScript", description: "Implementing dynamic and interactive features on web pages" },
            { name: "TypeScript", description: "Developing large-scale applications with enhanced type safety" },
            { name: "HTML5", description: "Structuring web content with semantic markup" },
            { name: "CSS3", description: "Styling web pages with advanced layout techniques" },
            { name: "Tailwind CSS", description: "Rapidly building custom user interfaces with utility-first CSS" }
        ]
    },
    {
        name: "Backend",
        description: "Developing robust server-side applications and APIs",
        skills: [
            { name: "Node.js", description: "Building scalable network applications and APIs" },
            { name: "Express", description: "Creating web applications and APIs with a minimal and flexible Node.js framework" },
            { name: "Python", description: "Developing versatile applications and scripts for various purposes" },
            { name: "Django", description: "Building robust web applications with Python's high-level web framework" },
            { name: "SQL", description: "Managing and querying relational databases" },
            { name: "MongoDB", description: "Working with flexible, document-based NoSQL databases" },
            { name: "RESTful APIs", description: "Designing and implementing scalable and stateless web services" }
        ]
    },
    {
        name: "Tools & Technologies",
        description: "Utilizing various tools to streamline development and deployment",
        skills: [
            { name: "Vercel", description: "Deploying and scaling web applications with ease" },
            { name: "Git", description: "Managing version control and collaborating on projects" },
            { name: "Docker", description: "Containerizing applications for consistent deployment across environments" },
            { name: "Azure", description: "Leveraging cloud services for scalable and reliable applications" },
            { name: "Figma", description: "Designing and prototyping user interfaces collaboratively" }
        ]
    }
]

export function SkillsSection() {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-semibold mb-4">Tech stack</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">{category.name}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <Popover key={skillIndex}>
                                        <PopoverTrigger asChild>
                                            <Badge variant="secondary" className="cursor-pointer">
                                                {skill.name}
                                            </Badge>
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
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}