'use client'

import { useEffect } from 'react'
import { useLayout } from '../../contexts/LayoutContext'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    const { setTopLeftContent, setTopRightContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent } = useLayout()

    useEffect(() => {
        setTopLeftContent(<div className="p-4">projects</div>)
        setTopRightContent(<div className="p-4">Top Right Content</div>)
        setDescriptionContent(
            <div className="p-8 flex flex-col justify-between h-full" data-theme-area>
                <div>
                    <p className="text-sm mb-2">PROJECT</p>
                    <h1 className="text-4xl font-bold mb-4">Placeholder for project name</h1>
                    <p className="text-sm">Description of project</p>
                </div>
                <Link
                    href="/"
                    className="flex items-center text-sm hover:underline mt-8"
                >
                    VIEW ALL PROJECTS
                    <ChevronRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>
        )
        setMainContent(
            <div className="p-8 flex flex-col justify-between h-full" data-theme-area>
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