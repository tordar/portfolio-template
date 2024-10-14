'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="theme-area border-2 flex flex-col lg:flex-row justify-between items-stretch">
            <div className="flex justify-between items-center p-4 lg:p-0">
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                <div className="lg:hidden">
                    <button
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
            <div className={`lg:flex flex-col lg:flex-row justify-between w-full ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <div className="flex flex-col lg:flex-row">
                    <Link href="/" className="nav-link">HOME</Link>
                    <Link href="/projects" className="nav-link">PROJECTS</Link>
                    <Link href="/products" className="nav-link">PRODUCTS</Link>
                    <Link href="/about" className="nav-link">ABOUT</Link>
                </div>
                <div className="flex flex-col lg:flex-row items-stretch">
                    <button
                        className="hidden lg:flex items-center justify-center p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button className="nav-link bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                        TICKETS
                    </button>
                </div>
            </div>
        </nav>
    )
}