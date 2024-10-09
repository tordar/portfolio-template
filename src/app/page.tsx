'use client'

import { useEffect, useState } from 'react'
import { useLayout } from '@/contexts/LayoutContext'
import { client } from '@/lib/sanity.client'

interface HomeData {
    topLeft: string
    topRight: string
    description: {
        title: string
        content: string
    }
    main: {
        subtitle: string
        title: string
        description: string
    }
    bottomLeft: string
    bottomRight: string
}

export default function Home() {
    const { setTopLeftContent, setTopRightContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent } = useLayout()
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
                description {
                    title,
                    content
                },
                main {
                    subtitle,
                    title,
                    description
                },
                bottomLeft,
                bottomRight
            }`

            try {
                console.log('Fetching home data...')
                const data = await client.fetch<HomeData>(query)
                console.log('Fetched data:', data)
                setHomeData(data)
            } catch (error) {
                console.error("Failed to fetch home data:", error)
                setError('Failed to fetch home data. Please try again later.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchHomeData()
    }, [])

    useEffect(() => {
        if (homeData) {
            console.log('Setting content with home data:', homeData)
            setTopLeftContent(<div className="p-4">{homeData.topLeft}</div>)
            setTopRightContent(<div className="p-4">{homeData.topRight}</div>)
            setDescriptionContent(
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">{homeData.description.title}</h1>
                    <p>{homeData.description.content}</p>
                </div>
            )
            setMainContent(
                <div className="bg-gray-900 text-white p-8 flex flex-col justify-between h-full">
                    <div>
                        <p className="text-sm mb-2">{homeData.main.subtitle}</p>
                        <h1 className="text-4xl font-bold mb-4">{homeData.main.title}</h1>
                        <p className="text-sm">{homeData.main.description}</p>
                    </div>
                </div>
            )
            setBottomLeftContent(<div className="p-4">{homeData.bottomLeft}</div>)
            setBottomRightContent(<div className="p-4">{homeData.bottomRight}</div>)
        }
    }, [homeData, setTopLeftContent, setTopRightContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!homeData) {
        return <div>No data available</div>
    }

    return null
}