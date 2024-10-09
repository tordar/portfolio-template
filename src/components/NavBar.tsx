'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="theme-area py-4 px-6 flex justify-between items-center border-2">
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            <div className={`lg:flex items-center justify-between w-full ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0">
                    <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        HOME
                    </Link>
                    <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        PROJECTS
                    </Link>
                    <Link href="/photography" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        PHOTOGRAPHY
                    </Link>
                    <Link href="/running" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        RUNNING
                    </Link>
                    <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        ABOUT
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-4">
                    <button
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                        TICKETS
                    </button>
                </div>
            </div>
        </nav>
    )
}