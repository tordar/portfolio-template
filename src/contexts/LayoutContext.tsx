'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type LayoutContextType = {
    topContent: ReactNode
    descriptionContent: ReactNode
    bottomLeftContent: ReactNode
    bottomRightContent: ReactNode
    mainContent: ReactNode
    setTopContent: (content: ReactNode) => void
    setDescriptionContent: (content: ReactNode) => void
    setBottomLeftContent: (content: ReactNode) => void
    setBottomRightContent: (content: ReactNode) => void
    setMainContent: (content: ReactNode) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export function LayoutProvider({ children }: { children: ReactNode }) {
    const [topContent, setTopContent] = useState<ReactNode>(null)
    const [descriptionContent, setDescriptionContent] = useState<ReactNode>(null)
    const [bottomLeftContent, setBottomLeftContent] = useState<ReactNode>(null)
    const [bottomRightContent, setBottomRightContent] = useState<ReactNode>(null)
    const [mainContent, setMainContent] = useState<ReactNode>(null)

    return (
        <LayoutContext.Provider
            value={{
                topContent,
                descriptionContent,
                bottomLeftContent,
                bottomRightContent,
                mainContent,
                setTopContent,
                setDescriptionContent,
                setBottomLeftContent,
                setBottomRightContent,
                setMainContent
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}

export function useLayout() {
    const context = useContext(LayoutContext)
    if (context === undefined) {
        throw new Error('useLayout must be used within a LayoutProvider')
    }
    return context
}