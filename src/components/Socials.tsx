import { Mail, Play, Instagram, Facebook } from 'lucide-react'

export default function Socials() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
            <a href="#" className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-r border-b">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
            </a>
            <a href="#" className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-l border-b ">
                <Play className="w-6 h-6" />
                <span className="sr-only">Video</span>
            </a>
            <a href="#" className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-r border-t  ">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-l border-t ">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
            </a>
        </div>
    )
}