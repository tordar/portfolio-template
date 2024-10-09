'use client'

import { useEffect, useState } from 'react'
import { useLayout } from '../contexts/LayoutContext'
import { useContent } from '../contexts/ContentContext'
import { client } from '../lib/sanity.client'
import {ChevronRight} from "lucide-react";
import Link from "next/link";

interface HomeData {
    topLeft: string
    topRight: string
    description: {
        title: string
        content: string
    }
    mainContent: {
        subtitle: string
        title: string
        description: string
    }[]
    bottomLeft: string
    bottomRight: string
}

export default function Home() {
    const { setTopLeftContent, setTopRightContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent } = useLayout()
    const { setContent, content, currentIndex } = useContent()
    const [homeData, setHomeData] = useState<HomeData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchHomeData = async () => {
            setIsLoading(true)
            setError(null)
            const query = `*[_type == "home"][0]{
        topLeft,
        topRight,
        description,
        mainContent,
        bottomLeft,
        bottomRight
      }`

            try {
                const data = await client.fetch<HomeData>(query)
                setHomeData(data)
                setContent(data.mainContent)
            } catch (error) {
                console.error("Failed to fetch home data:", error)
                setError("Failed to load content. Please try again later.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchHomeData()
    }, [setContent])

    useEffect(() => {
        if (homeData) {
            setTopLeftContent(<div className="p-4">{homeData.topLeft}</div>)
            setTopRightContent(<div className="p-4">{homeData.topRight}</div>)
            setDescriptionContent(
                <div className="p-8 flex flex-col justify-between h-full" data-theme-area>
                    <div>
                        <p className="text-sm mb-2">PROJECT</p>
                        <h1 className="text-4xl font-bold mb-4">{homeData.description.title}</h1>
                        <p>{homeData.description.content}</p>
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
            setBottomLeftContent(<div className="p-4">{homeData.bottomLeft}</div>)
            setBottomRightContent(<div className="p-4">{homeData.bottomRight}</div>)
        }
    }, [homeData, setTopLeftContent, setTopRightContent, setDescriptionContent, setBottomLeftContent, setBottomRightContent])

    useEffect(() => {
        if (content.length > 0) {
            const currentContent = content[currentIndex]
            setMainContent(
                <div className="p-8 flex flex-col justify-between h-full" data-theme-area>
                    <div>
                        <p className="text-sm mb-2">{currentContent.subtitle}</p>
                        <h1 className="text-4xl font-bold mb-4">{currentContent.title}</h1>
                        <p className="text-sm">{currentContent.description}</p>
                    </div>
                </div>
            
            )
        }
    }, [content, currentIndex, setMainContent])

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>
    }

    if (error) {
        return <div className="text-center p-4 text-red-500">{error}</div>
    }

    return null
}