import { Button } from "../components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

interface Project {
    title: string;
    description: string;
    github: string;
    live?: string;
    tags: string[];
    image: string;
}

const projects: Project[] = [
    {
        title: "Food-Planner",
        description: "A project made for personal tracking of meal recipes and ideas. Connected to a (private) MongoDB database.",
        github: "https://github.com/tordar/food-bank",
        live: "https://food-bank-chi.vercel.app/",
        tags: ["React", "MongoDB", "Next.js"],
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Strava-Visualiser",
        description: "A project made to visualise various Strava data. Connects to a personal account and fetches data from the Strava API",
        github: "https://github.com/tordar/shadcn-strava-visualiser",
        live: "https://shadcn-test-sepia.vercel.app/",
        tags: ["React", "Strava API", "Data Visualization", "Next.js"],
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Snapchat Memories Downloader",
        description: "A project made to download all memories from Snapchat in bulk.",
        github: "https://github.com/tordar/Download-Snapchat-Memories",
        tags: ["Python", "Snapchat API"],
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Sats Map",
        description: "A project where I attempted to extract all the visits I had to Sats and visualised them on a Leaflet map.",
        github: "https://github.com/tordar/sats-visualiser",
        tags: ["React", "Leaflet", "Data Visualization"],
        image: "/placeholder.svg?height=200&width=300"
    }
]

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <header className="bg-muted py-12 text-center">
                <h1 className="text-4xl font-bold mb-2">Tordar Tømmervik</h1>
                <p className="text-xl">Full-stack developer</p>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-5xl">
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                    <p className="text-muted-foreground">
                        I&#39;m a passionate full-stack developer with experience in React, Next.js, and modern web technologies. When I&#39;m not working, I&#39;m probably running, cooking, taking pictures, or planning my next adventure.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <Card key={index} className="flex flex-col overflow-hidden">
                                {/*<img*/}
                                {/*    src={project.image}*/}
                                {/*    alt={`${project.title} preview`}*/}
                                {/*    className="w-full h-48 object-cover"*/}
                                {/*/>*/}
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                                        <Button asChild className="w-full sm:w-auto">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                Source Code
                                            </a>
                                        </Button>
                                        {project.live && (
                                            <Button asChild variant="secondary" className="w-full sm:w-auto">
                                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-muted py-6 mt-12">
                <div className="container mx-auto px-4 flex justify-center space-x-4">
                    <a href="https://github.com/tordar" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6"/>
                    </a>
                    <a href="https://linkedin.com/in/tordar" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6"/>
                    </a>
                    <a href="mailto:tordar.tommervik@gmail.com">
                        <Mail className="h-6 w-6"/>
                    </a>
                    <a href="https://www.strava.com/athletes/29745314">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 384 512" className="w-6 h-6">
                            <path
                                d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"/>
                        </svg>
                        <span className="sr-only">Facebook</span>
                    </a>
                </div>
            </footer>
        </div>
    )
}
