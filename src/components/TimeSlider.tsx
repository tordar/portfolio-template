"use client"

import * as React from "react"

export function TimeSlider() {
    const [time, setTime] = React.useState<string>("")
    const [position, setPosition] = React.useState<number>(0)
    const [isHovering, setIsHovering] = React.useState<boolean>(false)
    const sliderRef = React.useRef<HTMLDivElement>(null)
    const isDraggingRef = React.useRef<boolean>(false)

    const formatTime = React.useCallback((minutes: number): string => {
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
    }, [])

    const updateTimeFromPosition = React.useCallback((newPosition: number) => {
        const newMinutes = Math.floor(newPosition * 1439)
        setPosition(newPosition)
        setTime(formatTime(newMinutes))
    }, [formatTime])

    const handleMouseMove = React.useCallback((event: MouseEvent) => {
        if (isDraggingRef.current && sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect()
            const x = event.clientX - rect.left
            const newPosition = Math.max(0, Math.min(1, x / rect.width))
            updateTimeFromPosition(newPosition)
        }
    }, [updateTimeFromPosition])

    const handleMouseDown = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        isDraggingRef.current = true
        handleMouseMove(event as unknown as MouseEvent)
    }, [handleMouseMove])

    const handleMouseUp = React.useCallback(() => {
        isDraggingRef.current = false
    }, [])

    React.useEffect(() => {
        const getCurrentTimeInMinutes = (): number => {
            const now = new Date()
            return now.getHours() * 60 + now.getMinutes()
        }

        const currentMinutes = getCurrentTimeInMinutes()
        updateTimeFromPosition(currentMinutes / 1439)

        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [updateTimeFromPosition, handleMouseUp, handleMouseMove])

    return (
        <div className="w-full flex justify-center">
            <div
                className="w-[95%] h-12 relative cursor-pointer"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="absolute inset-0 flex items-center">
                    <div
                        className={`h-[1px] w-full bg-foreground/20 transition-opacity duration-300 ${
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
                    <div className="bg-background px-2 py-1 rounded-full border border-foreground/20 select-none">
                        <span className="text-xl font-mono tabular-nums cursor-ew-resize">{time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}