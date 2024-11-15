import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SongRecommendationButton } from '../components/SongRecommendation'


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
        <html lang="en">
        <body className={inter.className}>
        <div className="min-h-screen bg-background font-sans flex flex-col">
            <header className="bg-muted py-12 text-center">
                <h1 className="text-4xl font-bold mb-2">Tordar Tømmervik</h1>
                <p className="text-xl">Full-stack developer</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6">
                            <path
                                d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"/>
                        </svg>
                        <span className="sr-only">Strava</span>
                    </a>
                    <SongRecommendationButton/>

                </div>
            </footer>
        </div>
        </body>
        </html>
    )
}