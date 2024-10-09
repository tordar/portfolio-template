'use client'

import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '../contexts/ThemeContext'

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const theme = document.documentElement.dataset.theme || 'light'
        applyTheme(theme)
    }, [])

    const applyTheme = (theme: string) => {
        document.documentElement.dataset.theme = theme
        const root = document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }

    if (!mounted) {
        return null
    }

    return <ThemeProvider initialTheme={document.documentElement.dataset.theme as 'light' | 'dark'}>{children}</ThemeProvider>
}