import {Mail, Facebook, GithubIcon, LinkedinIcon} from 'lucide-react'

export default function Socials() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
            <a href="mailto:tordar.tommervik@gmail.com" className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-r border-b">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
            </a>
            <a href="https://github.com/tordar" className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-l border-b ">
                <GithubIcon className="w-6 h-6" />
                <span className="sr-only">Video</span>
            </a>
            <a href="https://www.linkedin.com/in/tordar/" className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-r border-t  ">
                <LinkedinIcon className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.strava.com/athletes/29745314"
               className="theme-area flex items-center justify-center hover:bg-gray-800 transition-colors border-l border-t ">
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512" className="w-6 h-6" >
                    <path
                        d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z" />
                </svg>
                <span className="sr-only">Facebook</span>
            </a>
        </div>
    )
}