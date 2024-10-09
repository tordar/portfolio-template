'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface MainContentItem {
    subtitle: string
    title: string
    description: string
}

interface MainContentContextType {
    mainContent: MainContentItem[]
    currentIndex: number
    setMainContent: (content: MainContentItem[]) => void
    nextContent: () => void
    previousContent: () => void
}

const MainContentContext = createContext<MainContentContextType | undefined>(undefined)

export function MainContentProvider({ children }: { children: ReactNode }) {
    const [mainContent, setMainContent] = useState<MainContentItem[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextContent = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mainContent.length)
    }

    const previousContent = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + mainContent.length) % mainContent.length)
    }

    return (
        <MainContentContext.Provider value={{ mainContent, currentIndex, setMainContent, nextContent, previousContent }}>
            {children}
        </MainContentContext.Provider>
    )
}

export function useMainContent() {
    const context = useContext(MainContentContext)
    if (context === undefined) {
        throw new Error('useMainContent must be used within a MainContentProvider')
    }
    return context
}