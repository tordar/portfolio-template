import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    useCdn: false // `false` if you want to ensure fresh data
})