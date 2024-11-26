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
    const [skyBackgroundColor, setSkyBackgroundColor] = useState('')

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
        
        if (theme === 'sky') {
            document.documentElement.style.setProperty('--muted-bg-color', skyBackgroundColor)
        } else {
            document.documentElement.style.removeProperty('--muted-bg-color')
        }
    }, [theme, skyBackgroundColor])

    const updateSkyTheme = (time: number) => {
        const hour = time / 60
        if (hour >= 0 && hour < 1) {
            setSkyBackgroundColor('#0A0A28');
        } else if (hour >= 1 && hour < 2) {
            setSkyBackgroundColor('#0F0F32');
        } else if (hour >= 2 && hour < 3) {
            setSkyBackgroundColor('#14143C');
        } else if (hour >= 3 && hour < 4) {
            setSkyBackgroundColor('#191946');
        } else if (hour >= 4 && hour < 5) {
            setSkyBackgroundColor('#1E1E50');
        } else if (hour >= 5 && hour < 6) {
            setSkyBackgroundColor('#283264');
        } else if (hour >= 6 && hour < 7) {
            setSkyBackgroundColor('#5078C8');
        } else if (hour >= 7 && hour < 8) {
            setSkyBackgroundColor('#78AAFF');
        } else if (hour >= 8 && hour < 9) {
            setSkyBackgroundColor('#A0C8FF');
        } else if (hour >= 9 && hour < 10) {
            setSkyBackgroundColor('#B4DCFF');
        } else if (hour >= 10 && hour < 11) {
            setSkyBackgroundColor('#C8E6FF');
        } else if (hour >= 11 && hour < 12) {
            setSkyBackgroundColor('#DCF0FF');
        } else if (hour >= 12 && hour < 13) {
            setSkyBackgroundColor('#F0FFFF');
        } else if (hour >= 13 && hour < 14) {
            setSkyBackgroundColor('#E6FAFF');
        } else if (hour >= 14 && hour < 15) {
            setSkyBackgroundColor('#DCF0FF');
        } else if (hour >= 15 && hour < 16) {
            setSkyBackgroundColor('#C8DCFF');
        } else if (hour >= 16 && hour < 17) {
            setSkyBackgroundColor('#FFC896');
        } else if (hour >= 17 && hour < 18) {
            setSkyBackgroundColor('#FF9664');
        } else if (hour >= 18 && hour < 19) {
            setSkyBackgroundColor('#FF6446');
        } else if (hour >= 19 && hour < 20) {
            setSkyBackgroundColor('#FF4632');
        } else if (hour >= 20 && hour < 21) {
            setSkyBackgroundColor('#643278');
        } else if (hour >= 21 && hour < 22) {
            setSkyBackgroundColor('#462864');
        } else if (hour >= 22 && hour < 23) {
            setSkyBackgroundColor('#321E50');
        } else if (hour >= 23 && hour < 24) {
            setSkyBackgroundColor('#1E143C');
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, updateSkyTheme }}>
            <div className={`min-h-screen transition-colors duration-100 ${theme}`}
                 style={theme === 'sky' ? {backgroundColor: skyBackgroundColor } : {}}>
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