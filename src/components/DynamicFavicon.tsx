"use client"

import React, { useEffect } from 'react'
import { useTheme } from './theme-provider'

export function DynamicFavicon() {
    const { theme, skyBackgroundColor } = useTheme()

    useEffect(() => {
        const getColors = () => {
            switch (theme) {
                case 'light':
                    return { bg: '#ffffff', text: '#1a1a1a' }
                case 'dark':
                    return { bg: '#1a1a1a', text: '#ffffff' }
                case 'sky':
                    return { bg: skyBackgroundColor, text: skyBackgroundColor ? (getBrightness(skyBackgroundColor) > 128 ? '#1a1a1a' : '#ffffff') : '#ffffff' }
                default:
                    return { bg: '#1a1a1a', text: '#ffffff' }
            }
        }

        const { bg, text } = getColors()

        const faviconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <style>
          rect { fill: ${bg}; }
          text {
            font-family: Arial, sans-serif;
            font-size: 40px;
            fill: ${text};
            text-anchor: middle;
            dominant-baseline: central;
            font-weight: bold;
          }
        </style>
        <rect width="100" height="100" rx="20"/>
        <text x="50" y="50">TT</text>
      </svg>
    `

        const faviconUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`

        // Update or create standard favicon
        updateLink('shortcut icon', faviconUrl)

        // Update or create Apple touch icon
        updateLink('apple-touch-icon', faviconUrl)

        // Update or create mask-icon for Safari pinned tabs
        updateLink('mask-icon', faviconUrl, text)

    }, [theme, skyBackgroundColor])

    return null
}

function updateLink(rel: string, href: string, color?: string) {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
    if (!link) {
        link = document.createElement('link')
        document.head.appendChild(link)
    }
    link.setAttribute('rel', rel)
    link.setAttribute('href', href)
    if (color && rel === 'mask-icon') {
        link.setAttribute('color', color)
    }
}

// Helper function to determine brightness of a color
function getBrightness(color: string): number {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    return (r * 299 + g * 587 + b * 114) / 1000
}