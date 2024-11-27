"use client"

import * as React from "react"
import { useTheme } from "./theme-provider"

export function TimeSlider() {
    const [time, setTime] = React.useState<string>("")
    const [position, setPosition] = React.useState<number>(0)
    const [isHovering, setIsHovering] = React.useState<boolean>(false)
    const sliderRef = React.useRef<HTMLDivElement>(null)
    const isDraggingRef = React.useRef<boolean>(false)
    const initialTimeSetRef = React.useRef<boolean>(false)
    const { theme, updateSkyTheme } = useTheme()

    const formatTime = React.useCallback((minutes: number): string => {
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
    }, [])

    const updateTimeFromPosition = React.useCallback((newPosition: number) => {
        const newMinutes = Math.floor(newPosition * 1439)
        setPosition(newPosition)
        setTime(formatTime(newMinutes))
        updateSkyTheme(newMinutes)
    }, [formatTime, updateSkyTheme])

    const handleInteraction = React.useCallback((clientX: number) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect()
            const x = clientX - rect.left
            const newPosition = Math.max(0, Math.min(1, x / rect.width))
            updateTimeFromPosition(newPosition)
        }
    }, [updateTimeFromPosition])

    const handleMouseMove = React.useCallback((event: MouseEvent) => {
        if (isDraggingRef.current) {
            handleInteraction(event.clientX)
        }
    }, [handleInteraction])

    const handleMouseDown = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        isDraggingRef.current = true
        handleInteraction(event.clientX)
    }, [handleInteraction])

    const handleTouchMove = React.useCallback((event: TouchEvent) => {
        if (isDraggingRef.current) {
            handleInteraction(event.touches[0].clientX)
        }
    }, [handleInteraction])

    const handleTouchStart = React.useCallback((event: React.TouchEvent<HTMLDivElement>) => {
        isDraggingRef.current = true
        handleInteraction(event.touches[0].clientX)
    }, [handleInteraction])

    const handleEnd = React.useCallback(() => {
        isDraggingRef.current = false
    }, [])

    React.useEffect(() => {
        if (!initialTimeSetRef.current) {
            const getCurrentTimeInMinutes = (): number => {
                const now = new Date()
                return now.getHours() * 60 + now.getMinutes()
            }

            const currentMinutes = getCurrentTimeInMinutes()
            const initialPosition = currentMinutes / 1439
            setPosition(initialPosition)
            setTime(formatTime(currentMinutes))
            updateSkyTheme(currentMinutes)
            initialTimeSetRef.current = true
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleEnd)
        document.addEventListener('touchmove', handleTouchMove)
        document.addEventListener('touchend', handleEnd)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleEnd)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleEnd)
        }
    }, [formatTime, updateSkyTheme, handleMouseMove, handleEnd, handleTouchMove])

    if (theme !== "sky") {
        return null
    }

    return (
        <div className="w-full flex justify-center">
            <div
                className="w-[90%] h-12 relative cursor-pointer"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="absolute inset-0 flex items-center">
                    <div
                        className={`h-[1px] w-full bg-black transition-opacity duration-300 ${
                            isHovering || isDraggingRef.current ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                </div>
                <div
                    className="absolute top-0 h-full flex items-center justify-center"
                    style={{
                        left: `${position * 100}%`,
                        transform: 'translateX(-50%)',
                    }}
                >
                    <div className="bg-white px-2 py-1 rounded-full border border-black select-none cursor-ew-resize">
                        <span className="text-l font-medium tabular-nums text-black">{time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}