'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        // Add your theme switching logic here
    }

    return (
        <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center border-2 border-white">
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
                    <Link href="/" className="hover:text-gray-300 transition-colors">
                        HOME
                    </Link>
                    <Link href="/projects" className="hover:text-gray-300 transition-colors">
                        PROJECTS
                    </Link>
                    <Link href="/photography" className="hover:text-gray-300 transition-colors">
                        PHOTOGRAPHY
                    </Link>
                    <Link href="/running" className="hover:text-gray-300 transition-colors">
                        RUNNING
                    </Link>
                    <Link href="/about" className="hover:text-gray-300 transition-colors">
                        ABOUT
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-4">
                    <button
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                    <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                        TICKETS
                    </button>
                </div>
            </div>
        </nav>
    )
}