'use client'

import React from 'react'

export default function UnderConstruction() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                <p className="text-xl mb-8">We're working on something exciting. Stay tuned!</p>
                <div className="animate-pulse">
                    <div className="h-2 w-32 bg-blue-500 rounded mx-auto"></div>
                </div>
            </div>
        </div>
    )
}