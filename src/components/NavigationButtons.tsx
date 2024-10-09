'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

export default function NavigationButtons() {
    const { nextContent, previousContent } = useContent()

    return (
        <div className="flex justify-between w-full">
            <button onClick={previousContent} className="p-2 bg-gray-800 text-white rounded-full">
                <ChevronLeft size={24} />
            </button>
            <button onClick={nextContent} className="p-2 bg-gray-800 text-white rounded-full">
                <ChevronRight size={24} />
            </button>
        </div>
    )
}