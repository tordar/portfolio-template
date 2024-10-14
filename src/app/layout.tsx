import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'
import Socials from '../components/Socials'
import NavigationButtons from '../components/NavigationButtons'
import { LayoutProvider } from '../contexts/LayoutContext'
import { ContentProvider } from '../contexts/ContentContext'
import ClientThemeProvider from '../components/ClientThemeProvider'
import DynamicArea from '../components/DynamicArea'
import Script from 'next/script'

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
        <html lang="en" suppressHydrationWarning>
        <head>
            <Script id="theme-script" strategy="beforeInteractive">
                {`
                    (function() {
                        function getInitialTheme() {
                            const storedTheme = localStorage.getItem('theme')
                            if (storedTheme) {
                                return storedTheme
                            }
                            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                        }
                        const theme = getInitialTheme()
                        document.documentElement.dataset.theme = theme
                    })()
                    `}
            </Script>
        </head>
        <body className={inter.className} suppressHydrationWarning>
        <ClientThemeProvider>
            <LayoutProvider>
                <ContentProvider>
                    <div className="min-h-screen border-2 flex flex-col" data-theme-container>
                        <NavBar />
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-10 grid-rows-none md:grid-rows-[repeat(9,1fr)] ">
                            <DynamicArea area="top" className="theme-area md:col-span-4 md:row-span-2 border-2"/>
                            <DynamicArea area="description" className="theme-area md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-8 border-2 "/>
                            <div className="theme-area md:col-span-2 md:row-span-2 border-2 ">
                                <Socials />
                            </div>
                            <div className="theme-area md:col-span-2 md:row-span-2 border-2"></div>
                            <div className="theme-area md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-9 border-2 relative">
                                <DynamicArea area="main" className="h-full" />
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
                                    <NavigationButtons />
                                </div>
                            </div>
                            <DynamicArea area="bottomLeft" className="theme-area md:col-start-5 md:col-end-8 md:row-start-9 md:row-end-10 border-2"/>
                            <DynamicArea area="bottomRight" className="theme-area md:col-start-8 md:col-end-11 md:row-start-9 md:row-end-10 border-2"/>
                        </div>
                    </div>
                    {children}
                </ContentProvider>
            </LayoutProvider>
        </ClientThemeProvider>
        </body>
        </html>
    )
}