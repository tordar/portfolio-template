'use client'

import { useEffect, useState } from 'react'
import { useLayout } from '../../contexts/LayoutContext'
import { useContent } from '../../contexts/ContentContext'
import { client } from '../../lib/sanity.client'
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

interface AboutData {
    top: string
    description: {
        title: string
        content: string
        link: string
    }[]
    mainContent: {
        subtitle: string
        title: string
        image: {
            asset: {
                _ref: string
            }
        }
    }[]
    bottomLeft: string
    bottomRight: string
}

export default function About() {
    const { setTopContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent } = useLayout()
    const { setContent, content, currentIndex } = useContent()
    const [aboutData, setAboutData] = useState<AboutData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchAboutData = async () => {
            setIsLoading(true)
            setError(null)
            const query = `*[_type == "about"][0]{
                top,
                description,
                mainContent[]{
                    subtitle,
                    title,
                    "image": image.asset->
                },
                bottomLeft,
                bottomRight
            }`

            try {
                const data = await client.fetch<AboutData>(query)
                setAboutData(data)
                setContent(data.mainContent)
            } catch (error) {
                console.error("Failed to fetch about data:", error)
                setError("Failed to load content. Please try again later.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchAboutData()
    }, [setContent])

    useEffect(() => {
        if (aboutData) {
            setTopContent(<div className="theme-area p-4">{aboutData.top}</div>)
            setBottomLeftContent(<div className="theme-area p-4">{aboutData.bottomLeft}</div>)
            setBottomRightContent(<div className="theme-area p-4">{aboutData.bottomRight}</div>)
        }
    }, [aboutData, setTopContent, setBottomLeftContent, setBottomRightContent])

    useEffect(() => {
        if (content.length > 0 && aboutData) {
            const currentContent = content[currentIndex]
            const currentDescription = aboutData.description[currentIndex] || aboutData.description[0]

            setMainContent(
                <MainContentSection content={currentContent} />
            )

            setDescriptionContent(
                <DescriptionSection description={currentDescription} />
            )
        }
    }, [content, currentIndex, setMainContent, setDescriptionContent, aboutData])

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>
    }

    if (error) {
        return <div className="text-center p-4 text-red-500">{error}</div>
    }

    return null
}

function MainContentSection({ content }) {
    const imageProps = useNextSanityImage(client, content.image)

    return (
        <div className="theme-area p-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold">{content.title}</h1>
                <p className="text-sm">{content.subtitle}</p>
            </div>
            {imageProps && (
                <div className="flex-grow flex items-center justify-center overflow-hidden">
                    <Image
                        {...imageProps}
                        alt={content.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-lg object-contain w-full h-full"
                        style={{ maxHeight: 'calc(100% - 2rem)' }}
                    />
                </div>
            )}
        </div>
    )
}

function DescriptionSection({ description }) {
    return (
        <div className="theme-area p-8 flex flex-col justify-between h-full">
            <div>
                <p className="text-sm mb-2">PROJECT</p>
                <h1 className="text-4xl font-bold mb-4">{description.title}</h1>
                <p>{description.content}</p>
                <Link
                    href={description.link}
                    className="flex items-center text-sm hover:underline mt-7"
                >
                    VIEW PROJECT LINK
                    <ChevronRight className="w-4 h-4 ml-1"/>
                </Link>
                <Link
                    href="https://github.com/tordar?tab=repositories"
                    className="flex items-center text-sm hover:underline mt-8"
                >
                    VIEW ALL PROJECTS
                    <ChevronRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>
        </div>
    )
}