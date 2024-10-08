'use client'

import { useLayout } from '@/contexts/LayoutContext'

type DynamicAreaProps = {
    area: 'topLeft' | 'topRight' | 'main' | 'bottom'
    className?: string
}

export default function DynamicArea({ area, className }: DynamicAreaProps) {
    const { topLeftContent, topRightContent, mainContent, bottomContent } = useLayout()

    const content = {
        topLeft: topLeftContent,
        topRight: topRightContent,
        main: mainContent,
        bottom: bottomContent,
    }[area]

    return <div className={className}>{content}</div>
}