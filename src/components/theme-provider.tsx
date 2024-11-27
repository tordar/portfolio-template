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
    const [textColor, setTextColor] = useState('')

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
            document.documentElement.style.setProperty('--sky-text-color', textColor)
            document.documentElement.style.setProperty('--muted-foreground', textColor)
        } else {
            document.documentElement.style.removeProperty('--muted-bg-color')
            document.documentElement.style.removeProperty('--sky-text-color')
        }
    }, [theme, skyBackgroundColor, textColor])

    const updateSkyTheme = (time: number) => {
        const hour = time / 60;
        const setTextColorForContrast = (backgroundColor: string) => {
            // Calculate luminance
            const r = parseInt(backgroundColor.slice(1, 3), 16) / 255;
            const g = parseInt(backgroundColor.slice(3, 5), 16) / 255;
            const b = parseInt(backgroundColor.slice(5, 7), 16) / 255;

            // Relative luminance formula
            const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            
            // Return white text for dark backgrounds and black text for light backgrounds
            return luminance > 0.5 ? '#000000' : '#FFFFFF';
        };
        if (hour >= 0 && hour < 1) {
            const bgColor = '#0A0A28';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 1 && hour < 2) {
            const bgColor = '#0F0F32';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 2 && hour < 3) {
            const bgColor = '#14143C';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 3 && hour < 4) {
            const bgColor = '#191946';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 4 && hour < 5) {
            const bgColor = '#1E1E50';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 5 && hour < 6) {
            const bgColor = '#FF9678';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 6 && hour < 7) {
            const bgColor = '#FFB896';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 7 && hour < 8) {
            const bgColor = '#FFD7B4';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 8 && hour < 9) {
            const bgColor = '#bdddff';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 9 && hour < 10) {
            const bgColor = '#B4DCFF';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 10 && hour < 11) {
            const bgColor = '#C8E6FF';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 11 && hour < 12) {
            const bgColor = '#DCF0FF';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 12 && hour < 13) {
            const bgColor = '#F0FFFF';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 13 && hour < 14) {
            const bgColor = '#E6FAFF';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 14 && hour < 15) {
            const bgColor = '#DCF0FF';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 15 && hour < 16) {
            const bgColor = '#C8DCFF';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 16 && hour < 17) {
            const bgColor = '#FFD7B4';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 17 && hour < 18) {
            const bgColor = '#FFB896';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 18 && hour < 19) {
            const bgColor = '#FF9678';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 19 && hour < 20) {
            const bgColor = '#FF8C6E';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 20 && hour < 21) {
            const bgColor = '#5A3264';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 21 && hour < 22) {
            const bgColor = '#46325A';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 22 && hour < 23) {
            const bgColor = '#322846';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        } else if (hour >= 23 && hour < 24) {
            const bgColor = '#1E143C';
            setSkyBackgroundColor(bgColor);
            setTextColor(setTextColorForContrast(bgColor));
        }
    }
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme, updateSkyTheme }}>
            <div className={`min-h-screen transition-colors duration-100 ${theme}`}
                 style={theme === 'sky' ? {backgroundColor: skyBackgroundColor, color: textColor} : {}}>
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