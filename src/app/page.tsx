'use client'

import { useEffect } from 'react'
import { useLayout } from '@/contexts/LayoutContext'

export default function Home() {
    const { setTopLeftContent, setTopRightContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent } = useLayout()

    useEffect(() => {
        setTopLeftContent(<div className="p-4">Top Left Content</div>)
        setTopRightContent(<div className="p-4">Top Right Content</div>)
        setDescriptionContent(
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome to Central Gallery</h1>
                <p>Explore our latest exhibitions and events.</p>
            </div>
        )
        setMainContent(
            <div className="bg-gray-900 text-white p-8 flex flex-col justify-between h-full">
                <div>
                    <p className="text-sm mb-2">MAIN</p>
                    <h1 className="text-4xl font-bold mb-4">Content goes here</h1>
                    <p className="text-sm">Description of project</p>
                </div>
            </div>
        )
        setBottomLeftContent(<div className="p-4">Bottom Content</div>)
        setBottomRightContent(<div className="p-4">Bottom right Content</div>)
    }, [setTopLeftContent, setTopRightContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent])

    return null
}