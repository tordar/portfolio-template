import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'

export default function NavBar() {
    return (
        <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center border-2 border-white">
            <div className="flex space-x-6">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                    HOME
                </Link>
                <Link href="/visit" className="hover:text-gray-300 transition-colors">
                    VISIT US
                </Link>
                <Link href="/exhibitions" className="hover:text-gray-300 transition-colors">
                    EXPLORE EXHIBITIONS
                </Link>
                <Link href="/collections" className="hover:text-gray-300 transition-colors">
                    COLLECTIONS
                </Link>
                <Link href="/contacts" className="hover:text-gray-300 transition-colors">
                    CONTACTS
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label="Toggle theme"
                >
                    <Sun className="w-5 h-5" />
                </button>
                <select className="bg-gray-800 text-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600">
                    <option>EN</option>
                </select>
                <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                    TICKETS
                </button>
            </div>
        </nav>
    )
}