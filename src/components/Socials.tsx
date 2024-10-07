import { Mail, Play, Instagram, Facebook } from 'lucide-react'

export default function Socials() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
            <a href="#" className="flex items-center justify-center hover:bg-gray-800 transition-colors border-r-2 border-b-2 border-white">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
            </a>
            <a href="#" className="flex items-center justify-center hover:bg-gray-800 transition-colors border-l-2 border-b-2 border-white">
                <Play className="w-6 h-6" />
                <span className="sr-only">Video</span>
            </a>
            <a href="#" className="flex items-center justify-center hover:bg-gray-800 transition-colors border-r-2 border-t-2  border-white">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="flex items-center justify-center hover:bg-gray-800 transition-colors border-l-2 border-t-2 border-white">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
            </a>
        </div>
    )
}