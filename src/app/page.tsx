import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <header className="bg-primary text-primary-foreground py-12 text-center">
                <h1 className="text-4xl font-bold mb-2">Tordar Tømmervik</h1>
                <p className="text-xl">Full-stack developer</p>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                    <p className="text-muted-foreground">
                        I'm a passionate full-stack developer with experience in React, Next.js, and modern web technologies. When I'm not working, I'm probably running, cooking, taking pictures,
                        or planning on my next big adventure.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">Source Code</a>
                                    </Button>
                                    <Button asChild>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">Live Link</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-muted py-6 mt-12">
                <div className="container mx-auto px-4 flex justify-center space-x-4">
                    <a href="https://github.com/tordar" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com/in/tordar" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="mailto:tordar.tommervik@gmail.com">
                        <Mail className="h-6 w-6" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

const projects = [
    {
        title: "Food-Planner",
        description: "A project made for personal tracking of meal recipes and ideas. Connected to a (private) MongoDB database.",
        github: "https://github.com/tordar/food-bank",
        live: "https://food-bank-chi.vercel.app/"
    },
    {
        title: "Strava-Visualiser",
        description: "A project made to visualise various Strava data. Connects to a personal account and fetches data from the Strava API",
        github: "https://github.com/tordar/shadcn-strava-visualiser",
        live: "https://shadcn-test-sepia.vercel.app/"
    },
    {
        title: "Strava Memories Downloader",
        description: "A project made to download all memories from Snapchat in bulk.",
        github: "https://github.com/tordar/Download-Snapchat-Memories",
        live: "https://project1.example.com"
    }
]