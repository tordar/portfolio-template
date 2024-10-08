'use client'

import { useEffect } from 'react'
import { useLayout } from '@/contexts/LayoutContext'

export default function Home() {
    const { setTopLeftContent, setTopRightContent, setMainContent, setBottomLeftContent, setBottomRightContent } = useLayout()

    useEffect(() => {
        setTopLeftContent(<div className="p-4">projects</div>)
        setTopRightContent(<div className="p-4">Top Right Content</div>)
        setMainContent(
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome to Central Gallery</h1>
                <p>Explore our latest exhibitions and events.</p>
            </div>
        )
        setBottomLeftContent(<div className="p-4">Bottom Content</div>)
        setBottomRightContent(<div className="p-4">Bottom right Content</div>)
    }, [setTopLeftContent, setTopRightContent, setMainContent, setBottomLeftContent, setBottomRightContent])

    return null
}