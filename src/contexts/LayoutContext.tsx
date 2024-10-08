'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type LayoutContextType = {
    topLeftContent: ReactNode
    topRightContent: ReactNode
    mainContent: ReactNode
    bottomContent: ReactNode
    setTopLeftContent: (content: ReactNode) => void
    setTopRightContent: (content: ReactNode) => void
    setMainContent: (content: ReactNode) => void
    setBottomContent: (content: ReactNode) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export function LayoutProvider({ children }: { children: ReactNode }) {
    const [topLeftContent, setTopLeftContent] = useState<ReactNode>(null)
    const [topRightContent, setTopRightContent] = useState<ReactNode>(null)
    const [mainContent, setMainContent] = useState<ReactNode>(null)
    const [bottomContent, setBottomContent] = useState<ReactNode>(null)

    return (
        <LayoutContext.Provider
            value={{
                topLeftContent,
                topRightContent,
                mainContent,
                bottomContent,
                setTopLeftContent,
                setTopRightContent,
                setMainContent,
                setBottomContent,
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