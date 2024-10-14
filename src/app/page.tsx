'use client'

import { useEffect, useState, useTransition } from 'react'
import { useLayout } from '../contexts/LayoutContext'
import { useContent } from '../contexts/ContentContext'
import { client } from '../lib/sanity.client'
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

interface HomeData {
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

function TransitionWrapper({ children, isVisible }) {
    return (
        <div
            className={`transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {children}
        </div>
    )
}

function MainContentSection({ content }) {
    const imageProps = useNextSanityImage(client, content.image)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        if (imageProps) {
            const img = new window.Image()
            img.src = imageProps.src
            img.onload = () => setImageLoaded(true)
        }
    }, [imageProps])

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
                        className={`rounded-lg object-contain w-full h-full transition-opacity duration-500 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ maxHeight: 'calc(100% - 2rem)' }}
                        onLoad={() => setImageLoaded(true)}
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

export default function Home() {
    const { setTopContent, setDescriptionContent, setMainContent, setBottomLeftContent, setBottomRightContent } = useLayout()
    const { setContent, content, currentIndex } = useContent()
    const [homeData, setHomeData] = useState<HomeData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        const fetchHomeData = async () => {
            setIsLoading(true)
            setError(null)
            const query = `*[_type == "home"][0]{
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
            setTopContent(<div className="theme-area p-4">{homeData.top}</div>)
            setBottomLeftContent(<div className="theme-area p-4">{homeData.bottomLeft}</div>)
            setBottomRightContent(<div className="theme-area p-4">{homeData.bottomRight}</div>)
        }
    }, [homeData, setTopContent, setBottomLeftContent, setBottomRightContent])

    useEffect(() => {
        if (content.length > 0 && homeData) {
            startTransition(() => {
                const currentContent = content[currentIndex]
                const currentDescription = homeData.description[currentIndex] || homeData.description[0]

                setMainContent(
                    <TransitionWrapper isVisible={!isPending}>
                        <MainContentSection content={currentContent} />
                    </TransitionWrapper>
                )

                setDescriptionContent(
                    <TransitionWrapper isVisible={!isPending}>
                        <DescriptionSection description={currentDescription} />
                    </TransitionWrapper>
                )
            })
        }
    }, [content, currentIndex, setMainContent, setDescriptionContent, homeData])

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>
    }

    if (error) {
        return <div className="text-center p-4 text-red-500">{error}</div>
    }

    return null
}