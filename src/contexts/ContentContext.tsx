'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ContentItem {
    [key: string]: any
}

interface ContentContextType {
    content: ContentItem[]
    currentIndex: number
    setContent: (content: ContentItem[]) => void
    nextContent: () => void
    previousContent: () => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
    const [content, setContent] = useState<ContentItem[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextContent = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length)
    }

    const previousContent = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length)
    }

    return (
        <ContentContext.Provider value={{ content, currentIndex, setContent, nextContent, previousContent }}>
            {children}
        </ContentContext.Provider>
    )
}

export function useContent() {
    const context = useContext(ContentContext)
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider')
    }
    return context
}