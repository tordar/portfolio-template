"use client"

import * as React from "react"
import { Moon, Sun, Sunrise } from 'lucide-react'
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    const skyGradient = "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className={`relative overflow-hidden ${theme === 'sky' ? skyGradient : ''}`}
                >
                    <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${
                        theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
                    }`} />
                    <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                        theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
                    }`} />
                    <Sunrise className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                        theme === 'sky' ? 'rotate-0 scale-100 text-white' : 'rotate-90 scale-0'
                    }`} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("sky")}>
                    <Sunrise className="mr-2 h-4 w-4" />
                    <span>Sky</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}