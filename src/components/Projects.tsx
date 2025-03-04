import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HoverCard } from '@/components/ui/hover-card'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react";
import Image from "next/image";

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
            title: "Meal Planner",
            description: "A project made for personal tracking of meal recipes and ideas. Connected to a MongoDB database, with user authentication via Google.",
            github: "https://github.com/tordar/food-bank",
            live: "https://mealplanner.tordar.no",
            tags: ["React", "MongoDB", "Next.js", "OAuth 2.0"],
            image: "/MealPlanner.png"
        },
        {
            title: "Strava-Visualiser",
            description: "A project made to visualise various Strava data. Connects to a personal account and fetches data from the Strava API",
            github: "https://github.com/tordar/shadcn-strava-visualiser",
            live: "https://strava.tordar.no/",
            tags: ["React", "Strava API", "Data Visualization", "Next.js"],
            image: "/StravaDashboard.png"
        },
        {
            title: "Snapchat Memories Downloader",
            description: "A project made to download all memories from Snapchat in bulk. Uses a simple HTML interface to visualise and help download memories.",
            github: "https://github.com/tordar/Download-Snapchat-Memories",
            tags: ["Python", "Snapchat API"],
            image: "/SnapchatDownloader.png"
        },
        {
            title: "Sats Map",
            description: "A project where I attempted to extract all the visits I had to Sats and visualised them on a Leaflet map.",
            github: "https://github.com/tordar/sats-visualiser",
            live: "https://sats-visualiser.vercel.app/",
            tags: ["React", "Leaflet", "Data Visualization"],
            image: "/SatsMap.png"
        },
        {
            title: "Event Newsletter",
            description: "A newsletter service built on top of the Broadcast API. Allows the user to subscribe to new events in Oslo, based on their preferences.",
            github: "https://github.com/tordar/events-bot",
            live: "https://concerts.tordar.no/",
            tags: ["Python", "SendGrid"],
            image: "/EventSubscription.png"
        },
        {
            title: "Loxodonta Function API",
            description: "A simple API for personal use. Built with Vercel serverless functions and integrates with external APIs to fetch data. Together with Swagger UI inspired interactive documentation",
            github: "https://github.com/tordar/loxodonta-function-api",
            live: "https://api.tordar.no/",
            tags: ["React", "Vercel"],
            image: "/LoxodontaAPI.png"
        }
    ]

export default function Projects() {
    return(
        <section>
            <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-muted-foreground mb-4">A selection of various personal projects I'm working on</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <HoverCard key={index} className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={`${project.title} preview`}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
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
                                {project.live && (
                                    <Button asChild className="w-full sm:w-auto">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            Website
                                        </a>
                                    </Button>
                                )}
                                <Button asChild variant="secondary" className="w-full sm:w-auto">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        Source Code
                                    </a>
                                </Button>
                            </div>
                        </CardFooter>
                    </HoverCard>
                ))}
            </div>
        </section>
    )
}