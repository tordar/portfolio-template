"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

type SkyThemeContextType = {
    backgroundColor: string
    textColor: string
    updateTheme: (time: number) => void
}

const SkyThemeContext = createContext<SkyThemeContextType | undefined>(undefined)

export const useSkyTheme = () => {
    const context = useContext(SkyThemeContext)
    if (context === undefined) {
        throw new Error('useSkyTheme must be used within a SkyThemeProvider')
    }
    return context
}

type TimeRange = {
    start: number
    end: number
    backgroundColor: string
    textColor: string
}

const timeRanges: TimeRange[] = [
    { start: 0, end: 5, backgroundColor: '#1a237e', textColor: '#ffffff' }, // Night
    { start: 5, end: 6, backgroundColor: '#4a148c', textColor: '#ffffff' }, // Dawn
    { start: 6, end: 7, backgroundColor: '#ff6f00', textColor: '#ffffff' }, // Sunrise
    { start: 7, end: 8, backgroundColor: '#ffb300', textColor: '#000000' }, // Golden Hour (morning)
    { start: 8, end: 16, backgroundColor: '#2196f3', textColor: '#ffffff' }, // Day
    { start: 16, end: 17, backgroundColor: '#ffb300', textColor: '#000000' }, // Golden Hour (evening)
    { start: 17, end: 18, backgroundColor: '#ff6f00', textColor: '#ffffff' }, // Sunset
    { start: 18, end: 19, backgroundColor: '#4a148c', textColor: '#ffffff' }, // Dusk
    { start: 19, end: 24, backgroundColor: '#1a237e', textColor: '#ffffff' }, // Night
]

const interpolateColor = (color1: string, color2: string, factor: number): string => {
    const c1 = parseInt(color1.slice(1), 16)
    const c2 = parseInt(color2.slice(1), 16)
    const r = Math.round(c1 >> 16 * (1 - factor) + (c2 >> 16) * factor)
    const g = Math.round((c1 >> 8 & 0xFF) * (1 - factor) + (c2 >> 8 & 0xFF) * factor)
    const b = Math.round((c1 & 0xFF) * (1 - factor) + (c2 & 0xFF) * factor)
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export const SkyThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState({ backgroundColor: '#2196f3', textColor: '#ffffff' })

    const updateTheme = (time: number) => {
        const hour = time / 60
        const currentRange = timeRanges.find(range => hour >= range.start && hour < range.end)
        const nextRange = timeRanges.find(range => hour < range.start) || timeRanges[0]

        if (currentRange) {
            const progress = (hour - currentRange.start) / (currentRange.end - currentRange.start)
            const backgroundColor = interpolateColor(currentRange.backgroundColor, nextRange.backgroundColor, progress)
            const textColor = progress > 0.5 ? nextRange.textColor : currentRange.textColor

            setTheme({ backgroundColor, textColor })
        }
    }

    useEffect(() => {
        const currentTime = new Date()
        const minutes = currentTime.getHours() * 60 + currentTime.getMinutes()
        updateTheme(minutes)
    }, [])

    return (
        <SkyThemeContext.Provider value={{ ...theme, updateTheme }}>
            {children}
        </SkyThemeContext.Provider>
    )
}