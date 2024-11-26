"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'sky'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    updateSkyTheme: (time: number) => void
    
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')
    const [skyBackgroundColor, setSkyBackgroundColor] = useState('#87CEEB')

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme
        if (storedTheme) {
            setTheme(storedTheme)
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(prefersDark ? 'dark' : 'light')
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark', 'sky')
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const updateSkyTheme = (time: number) => {
        const hour = time / 60
        if (hour < 6 || hour >= 20) {
            setSkyBackgroundColor('#191970') // Night blue
        } else if (hour < 8) {
            setSkyBackgroundColor('#87CEFA') // Light sky blue (dawn)
        } else if (hour < 16) {
            setSkyBackgroundColor('#87CEEB') // Sky blue (day)
        } else if (hour < 18) {
            setSkyBackgroundColor('#FFA500') // Orange (sunset)
        } else {
            setSkyBackgroundColor('#4B0082') // Indigo (dusk)
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, updateSkyTheme }}>
            <div className={`min-h-screen transition-colors duration-500 ${theme}`}
                 style={theme === 'sky' ? { backgroundColor: skyBackgroundColor } : {}}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}