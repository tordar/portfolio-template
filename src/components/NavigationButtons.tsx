import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function NavigationButtons() {
    return (
        <div className="flex h-full">
            <button className="flex-1 flex items-center justify-center hover:bg-gray-800 transition-colors border-r-2 border-white" aria-label="Previous">
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="flex-1 flex items-center justify-center hover:bg-gray-800 transition-colors" aria-label="Next">
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}