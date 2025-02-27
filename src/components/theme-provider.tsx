"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'sky'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    updateSkyTheme: (time: number) => void
    skyBackgroundColor: string
    skyPrimaryColor?: string  // Add a primary color for favicon
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')
    const [skyBackgroundColor, setSkyBackgroundColor] = useState('')
    const [skyPrimaryColor, setSkyPrimaryColor] = useState('')
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
            document.documentElement.style.removeProperty('--muted-foreground')
            
        }
    }, [theme, skyBackgroundColor, textColor])

    const updateSkyTheme = (time: number) => {
        const hour = Math.floor(time / 60);
        const minute = time % 60;

        // Primary colors for each hour
        const hourlyColors = [
            '#0A0A28', '#0F0F32', '#14143C', '#191946', '#1E1E50', '#FF9678',
            '#FFB896', '#FFD7B4', '#bdddff', '#B4DCFF', '#C8E6FF', '#DCF0FF',
            '#F0FFFF', '#E6FAFF', '#DCF0FF', '#C8DCFF', '#FFD7B4', '#FFB896',
            '#FF9678', '#FF8C6E', '#5A3264', '#46325A', '#322846', '#1E143C'
        ];

        // Gradient complementary colors for each hour - with more contrast for intensity
        const hourlyGradientColors = [
            '#4040A0', '#3F3FA2', '#4444BC', '#4949C6', '#4E4ED0', '#FF5040',
            '#FF9040', '#FFBE80', '#80CCFF', '#40B0FF', '#60C0FF', '#90E0FF',
            '#C0FFFF', '#A0F0FF', '#90E0FF', '#80C0FF', '#FFBE80', '#FF9040',
            '#FF5040', '#FF3030', '#A060C0', '#9050B0', '#8040A0', '#603090'
        ];

        const interpolateColor = (color1: string, color2: string, factor: number): string => {
            const r1 = parseInt(color1.slice(1, 3), 16);
            const g1 = parseInt(color1.slice(3, 5), 16);
            const b1 = parseInt(color1.slice(5, 7), 16);

            const r2 = parseInt(color2.slice(1, 3), 16);
            const g2 = parseInt(color2.slice(3, 5), 16);
            const b2 = parseInt(color2.slice(5, 7), 16);

            const r = Math.round(r1 + factor * (r2 - r1));
            const g = Math.round(g1 + factor * (g2 - g1));
            const b = Math.round(b1 + factor * (b2 - b1));

            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        };

        const setTextColorForContrast = (backgroundColor: string): string => {
            const r = parseInt(backgroundColor.slice(1, 3), 16) / 255;
            const g = parseInt(backgroundColor.slice(3, 5), 16) / 255;
            const b = parseInt(backgroundColor.slice(5, 7), 16) / 255;

            const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

            return luminance > 0.5 ? '#000000' : '#FFFFFF';
        };

        const currentColor = hourlyColors[hour];
        const nextColor = hourlyColors[(hour + 1) % 24];
        const currentGradientColor = hourlyGradientColors[hour];
        const nextGradientColor = hourlyGradientColors[(hour + 1) % 24];
        const interpolationFactor = minute / 60;

        const bgColor = interpolateColor(currentColor, nextColor, interpolationFactor);
        const gradientColor = interpolateColor(currentGradientColor, nextGradientColor, interpolationFactor);
        
        // Generate a mid-point color for more dynamic gradients (optional)
        const midColor = interpolateColor(bgColor, gradientColor, 0.3);
        
        // Enhanced gradient directions with more angles for variety
        const gradientDirections = [
            'to right', '135deg', 'to bottom', '225deg', 
            'to left', '315deg', 'to top', '45deg'
        ];
        
        // Change gradient direction every 3 hours for variety
        const directionIndex = Math.floor(hour / 3) % gradientDirections.length;
        const gradientDirection = gradientDirections[directionIndex];
        
        // Set a more intense gradient with three color stops
        const gradientBg = `linear-gradient(${gradientDirection}, ${bgColor}, ${midColor} 50%, ${gradientColor})`;
        setSkyBackgroundColor(gradientBg);
        setSkyPrimaryColor(bgColor); // Store the primary color for the favicon
        setTextColor(setTextColorForContrast(bgColor));
    };
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme, updateSkyTheme, skyBackgroundColor, skyPrimaryColor }}>
            <div className={`min-h-screen transition-colors duration-100 ${theme}`}
                 style={theme === 'sky' ? {backgroundImage: skyBackgroundColor, color: textColor} : {}}>
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