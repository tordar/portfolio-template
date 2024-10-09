'use client'

import { useLayout } from '../contexts/LayoutContext'

type DynamicAreaProps = {
    area: 'topLeft' | 'topRight' | 'description' | 'bottomLeft' | 'bottomRight' | 'main'
    className?: string
}

export default function DynamicArea({ area, className }: DynamicAreaProps) {
    const { topLeftContent, topRightContent, descriptionContent, mainContent, bottomLeftContent, bottomRightContent } = useLayout()

    const content = {
        topLeft: topLeftContent,
        topRight: topRightContent,
        description: descriptionContent,
        main: mainContent,
        bottomLeft: bottomLeftContent,
        bottomRight: bottomRightContent,
    }[area]

    return <div className={className}>{content}</div>
}