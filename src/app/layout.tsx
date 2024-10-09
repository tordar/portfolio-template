import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'
import Socials from '../components/Socials'
import NavigationButtons from '../components/NavigationButtons'
import { LayoutProvider } from '../contexts/LayoutContext'
import { ContentProvider } from '../contexts/ContentContext'
import { ThemeProvider } from '../contexts/ThemeContext'
import DynamicArea from '../components/DynamicArea'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Central Gallery',
    description: 'Explore art exhibitions and events',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            <LayoutProvider>
                <ContentProvider>
                    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white flex flex-col gap-1 p-1">
                        <NavBar />
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-10 grid-rows-none md:grid-rows-[repeat(9,1fr)] gap-1">
                            <DynamicArea area="topLeft" className="bg-gray-100 dark:bg-zinc-900 md:col-span-2 md:row-span-2 border-2 border-gray-700 dark:border-gray-300" />
                            <DynamicArea area="topRight" className="bg-gray-100 dark:bg-zinc-900 md:col-span-2 md:row-span-2 border-2 border-gray-700 dark:border-gray-300" />
                            <DynamicArea area="description" className="bg-gray-100 dark:bg-zinc-900 md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-8 border-2 border-gray-700 dark:border-gray-300" />
                            <div className="bg-gray-100 dark:bg-zinc-900 md:col-span-2 md:row-span-2 border-2 border-gray-700 dark:border-gray-300">
                                <Socials />
                            </div>
                            <div className="bg-gray-100 dark:bg-zinc-900 md:col-span-2 md:row-span-2 border-2 border-gray-700 dark:border-gray-300"></div>
                            <div className="bg-gray-100 dark:bg-zinc-900 md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-9 border-2 border-gray-700 dark:border-gray-300 relative">
                                <DynamicArea area="main" className="h-full" />
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
                                    <NavigationButtons />
                                </div>
                            </div>
                            <DynamicArea area="bottomLeft" className="bg-gray-100 dark:bg-zinc-900 md:col-start-5 md:col-end-8 md:row-start-9 md:row-end-10 border-2 border-gray-700 dark:border-gray-300" />
                            <DynamicArea area="bottomRight" className="bg-gray-100 dark:bg-zinc-900 md:col-start-8 md:col-end-11 md:row-start-9 md:row-end-10 border-2 border-gray-700 dark:border-gray-300" />
                        </div>
                    </div>
                    {children}
                </ContentProvider>
            </LayoutProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}