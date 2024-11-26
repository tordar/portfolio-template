import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { SongRecommendationButton } from '../components/SongRecommendation'
import { ThemeProvider } from "../components/theme-provider"
import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { TimeSlider } from "../components/TimeSlider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Tordar Tømmervik - Full-stack Developer',
    description: 'Portfolio of Tordar Tømmervik, a passionate full-stack developer',
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' }
        ],
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider>
            <div className="min-h-screen font-sans flex flex-col transition-colors duration-500">
                <header className="py-12 text-center relative bg-muted">
                    <div className="absolute top-4 right-4">
                        <ThemeSwitcher/>
                    </div>
                    <h1 className="text-4xl font-bold mb-2">Tordar Tømmervik</h1>
                    <p className="text-xl">Full-stack developer</p>
                    <p className="flex items-center justify-center mt-2 mb-4 opacity-80">
                        <MapPin className="w-4 h-4 mr-1"/>
                        Oslo, Norway
                    </p>
                    <div className="absolute bottom-0 left-0 right-0">
                        <TimeSlider/>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 max-w-5xl py-8">
                    {children}
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
                        <a href="https://www.strava.com/athletes/29745314" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                 className="w-6 h-6 fill-current">
                                <path
                                    d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"/>
                            </svg>
                            <span className="sr-only">Strava</span>
                        </a>
                        <SongRecommendationButton/>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    )
}