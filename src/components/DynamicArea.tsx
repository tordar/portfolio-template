'use client'

import { useLayout } from '@/contexts/LayoutContext'

type DynamicAreaProps = {
    area: 'topLeft' | 'topRight' | 'main' | 'bottomLeft' | 'bottomRight'
    className?: string
}

export default function DynamicArea({ area, className }: DynamicAreaProps) {
    const { topLeftContent, topRightContent, mainContent, bottomLeftContent, bottomRightContent } = useLayout()

    const content = {
        topLeft: topLeftContent,
        topRight: topRightContent,
        main: mainContent,
        bottomLeft: bottomLeftContent,
        bottomRight: bottomRightContent,
    }[area]

    return <div className={className}>{content}</div>
}