import NavBar from '../components/NavBar'
import Socials from "@/components/Socials";

export default function Home() {
    return (
        <div className="h-screen bg-white text-white flex flex-col gap-1 p-1">
            <NavBar />
            <div className="flex-1 grid grid-cols-10 grid-rows-[repeat(9,1fr)] gap-1">
                <div className="bg-gray-900 col-span-2 row-span-2 border-2 border-white"></div>
                <div className="bg-gray-900 col-span-2 row-span-2 border-2 border-white"></div>
                <div className="bg-gray-900 col-start-1 col-end-5 row-start-3 row-end-8 border-2 border-white"></div>
                <div className="bg-gray-900 col-span-2 row-span-2 border-2 border-white">
                    <Socials />
                </div>
                <div className="bg-gray-900 col-span-2 row-span-2 border-2 border-white"></div>
                <div className="bg-gray-900 col-start-5 col-end-11 row-start-1 row-end-9 border-2 border-white"></div>
                <div className="bg-gray-900 col-start-5 col-end-8 row-start-9 row-end-10 border-2 border-white"></div>
                <div className="bg-gray-900 col-start-8 col-end-11 row-start-9 row-end-10 border-2 border-white"></div>
                <div className="bg-gray-900 col-start-5 col-end-6 row-start-8 row-end-9 border-2 border-white">left</div>
                <div className="bg-gray-900 col-start-6 col-end-7 row-start-8 row-end-9 border-2 border-white">right</div>
            </div>
        </div>
    )
}